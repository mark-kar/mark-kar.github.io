# Personal Resume and Blog

A static personal resume and blog site built with Jekyll, designed for GitHub Pages deployment.

## Features

- **Resume Page**: Main landing page displaying your professional resume in markdown format
- **Blog Section**: Separate blog section with post listings and individual post pages
- **Markdown-Based**: All content (resume and blog posts) written in simple markdown files
- **Responsive Design**: Mobile-friendly CSS styling
- **GitHub Pages Ready**: Deploy directly to GitHub Pages with no server required

## Project Structure

```
├── _config.yml           # Site configuration
├── _layouts/             # HTML templates
│   ├── default.html      # Base layout
│   ├── home.html         # Resume page layout
│   ├── blog.html         # Blog listing layout
│   └── post.html         # Individual post layout
├── _posts/               # Blog posts (markdown files)
│   └── YYYY-MM-DD-title.md
├── assets/
│   └── css/
│       └── style.css     # Custom styles
├── index.md              # Resume page (main page)
└── blog.md               # Blog listing page
```

## Getting Started

### Local Development

1. Install Jekyll and Bundler:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. View your site at `http://localhost:4000`

### Deploying to GitHub Pages

1. Create a new repository on GitHub named `yourusername.github.io`

2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. Go to your repository Settings → Pages
   - Ensure source is set to "Deploy from a branch"
   - Branch should be `main` and folder `/ (root)`

4. Your site will be live at `https://yourusername.github.io`

## Adding Content

### Updating Resume

Edit `index.md` to update your resume content. The file uses standard markdown format with sections for:
- Contact information
- Professional summary
- Work experience
- Education
- Skills
- Projects
- Certifications
- Languages

### Adding Blog Posts

Create new blog posts by adding markdown files to the `_posts/` directory:

**Filename format**: `YYYY-MM-DD-post-title.md`

**Required front matter**:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
tags: [tag1, tag2]
---
```

Then write your post content in markdown below the front matter.

### Example Blog Post

```markdown
---
layout: post
title: "My First Blog Post"
date: 2024-01-15
categories: [personal]
tags: [introduction]
---

This is the content of my first blog post!

## Section Heading

Write your content here using standard markdown syntax.
```

## Customization

### Changing Site Information

Edit `_config.yml` to customize:
- Site title
- Description
- Markdown processor settings
- Permalink structure

### Styling

Modify `assets/css/style.css` to change colors, fonts, and layout.

## License

This project is open source and available under the MIT License.