---
layout: post
title: "Getting Started with Jekyll and GitHub Pages"
date: 2024-01-15
categories: [tutorial, jekyll]
tags: [jekyll, github-pages, static-site]
---

Welcome to my first blog post! In this article, I'll walk you through the basics of setting up a personal website using Jekyll and GitHub Pages.

## Why Jekyll?

Jekyll is a simple, blog-aware static site generator that's perfect for personal websites, blogs, and project pages. Here are some reasons why I chose it:

- **Simple**: No databases or complex setup required
- **Fast**: Generates static HTML files that load quickly
- **GitHub Integration**: Seamlessly works with GitHub Pages
- **Markdown Support**: Write content in easy-to-read Markdown format

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

1. Ruby (version 2.5.0 or higher)
2. RubyGems
3. GCC and Make (for installing native extensions)

### Installation

To install Jekyll and Bundler, run:

```bash
gem install bundler jekyll
```

### Creating Your Site

Create a new Jekyll site:

```bash
jekyll new my-awesome-site
cd my-awesome-site
```

Then build and serve your site locally:

```bash
bundle exec jekyll serve
```

Now you can view your site at `http://localhost:4000`.

## Deploying to GitHub Pages

GitHub Pages makes it incredibly easy to host your Jekyll site for free:

1. Create a new repository on GitHub named `yourusername.github.io`
2. Push your Jekyll site to this repository
3. Enable GitHub Pages in your repository settings
4. Your site will be live at `https://yourusername.github.io`

## Writing Posts

All blog posts go in the `_posts` directory. The filename format is important:

```
YEAR-MONTH-DAY-title.MARKUP
```

For example: `2024-01-15-getting-started.md`

Each post starts with front matter:

```yaml
---
layout: post
title: "My First Post"
date: 2024-01-15
categories: [tutorial]
---
```

## Conclusion

Jekyll and GitHub Pages provide a powerful yet simple way to create and host your personal website. In future posts, I'll cover more advanced topics like custom themes and plugins.

Happy blogging!
