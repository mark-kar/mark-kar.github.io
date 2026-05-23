// Language switcher functionality
(function() {
    const SUPPORTED_LANGUAGES = ['en', 'ru'];
    const DEFAULT_LANGUAGE = 'en';
    
    // Get language from URL parameter, localStorage, or default
    function getCurrentLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        
        if (urlLang && SUPPORTED_LANGUAGES.includes(urlLang)) {
            return urlLang;
        }
        
        const storedLang = localStorage.getItem('preferred_language');
        if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
            return storedLang;
        }
        
        return DEFAULT_LANGUAGE;
    }
    
    // Set language in URL, localStorage, and update page
    function setLanguage(lang) {
        if (!SUPPORTED_LANGUAGES.includes(lang)) {
            lang = DEFAULT_LANGUAGE;
        }
        
        localStorage.setItem('preferred_language', lang);
        
        // Update URL without reloading
        const url = new URL(window.location);
        url.searchParams.set('lang', lang);
        window.history.pushState({ lang: lang }, '', url);
        
        // Apply translations
        applyTranslations(lang);
        
        // Update language selector
        updateLanguageSelector(lang);
    }
    
    // Apply translations to the page
    function applyTranslations(lang) {
        // Fetch translations from data file
        fetch('/assets/data/translations.json')
            .then(response => response.json())
            .then(translations => {
                const t = translations[lang] || translations['en'];
                
                // Translate elements with data-i18n attribute
                document.querySelectorAll('[data-i18n]').forEach(element => {
                    const key = element.getAttribute('data-i18n');
                    const keys = key.split('.');
                    let value = t;
                    
                    for (const k of keys) {
                        value = value?.[k];
                    }
                    
                    if (value) {
                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            element.value = value;
                        } else if (element.hasAttribute('data-i18n-placeholder')) {
                            element.placeholder = value;
                        } else {
                            element.textContent = value;
                        }
                    }
                });
                
                // Update html lang attribute
                document.documentElement.lang = lang;
            })
            .catch(error => console.error('Error loading translations:', error));
    }
    
    // Update language selector dropdown
    function updateLanguageSelector(selectedLang) {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = selectedLang;
        }
    }
    
    // Initialize on page load
    function init() {
        const currentLang = getCurrentLanguage();
        
        // Set up language selector event listener
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.addEventListener('change', function(e) {
                setLanguage(e.target.value);
            });
            
            selector.value = currentLang;
        }
        
        // Apply translations
        applyTranslations(currentLang);
    }
    
    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose setLanguage globally for direct access
    window.setLanguage = setLanguage;
})();
