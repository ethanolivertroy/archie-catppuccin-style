# Archie Catppuccin

A beautiful fork of the [Archie theme](https://github.com/athul/archie) with [Catppuccin](https://catppuccin.com) color palette support.

## About

Archie Catppuccin brings the soothing pastel colors of Catppuccin to the minimal, markdown-focused Archie Hugo theme. Choose from 4 gorgeous flavors to match your aesthetic preference:

- ☕ **Latte** - Light and creamy (light theme)
- 🥤 **Frappé** - Balanced and smooth (light-dark theme)
- 🧋 **Macchiato** - Rich and cozy (medium-dark theme)
- 🍵 **Mocha** - Deep and warm (dark theme)

### Credits

- **Original Archie Theme:** [Athul Cyriac Ajay](https://github.com/athul/archie)
- **Catppuccin Color Palette:** [Catppuccin Team](https://catppuccin.com)
- **This Fork Maintained By:** [@ethanolivertroy](https://github.com/ethanolivertroy)

## Features

All original Archie features, plus:

- 🎨 **4 Catppuccin flavor themes** - Latte, Frappé, Macchiato, Mocha
- 🔄 **Easy flavor switching** with dropdown selector
- 💾 **Persistent flavor preference** via localStorage
- ♿ **Fully accessible** color combinations (WCAG AA compliant)
- 📱 **Mobile-friendly** flavor selector

### Inherited Features from Archie

- Google Analytics integration
- Callouts (Alert, Tip, Warning, Custom types)
- Tags and Categories
- Table of Contents
- MathJax/KaTeX support for mathematical expressions
- Disqus Comments
- Syntax Highlighting
- Responsive design
- RSS feeds

## Installation

### As a Hugo Module (Recommended)

Initialize your Hugo site as a module:

```bash
hugo mod init github.com/<your_user>/<your_project>
```

Add to your `config.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/ethanolivertroy/archie-catppuccin"
```

### As a Git Submodule

```bash
cd your-hugo-site
git submodule add https://github.com/ethanolivertroy/archie-catppuccin.git themes/archie-catppuccin
```

Update `config.toml`:

```toml
theme = "archie-catppuccin"
```

### Direct Clone

```bash
cd themes
git clone https://github.com/ethanolivertroy/archie-catppuccin.git
```

## Configuration

### Basic Setup

```toml
baseURL = "https://example.com"
languageCode = "en-us"
title = "My Catppuccin Blog"
theme = "archie-catppuccin"

pygmentsstyle = "monokai"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

[params]
  mode = "toggle"                    # Enable flavor selector
  catppuccinFlavor = "mocha"        # Default flavor: latte, frappe, macchiato, mocha
  useCDN = false                    # Use local fonts and icons
  subtitle = "Powered by Catppuccin"
```

### Mode Options

The `mode` parameter controls theme behavior:

- **`"toggle"`** - Shows flavor selector dropdown (recommended for full Catppuccin experience)
- **`"latte"`** - Forces Latte flavor only (light theme)
- **`"frappe"`** - Forces Frappé flavor only
- **`"macchiato"`** - Forces Macchiato flavor only
- **`"mocha"`** - Forces Mocha flavor only (dark theme)
- **`"auto"`** - Respects system dark mode preference (Mocha for dark, Latte for light)

### Default Flavor

When `mode = "toggle"`, the `catppuccinFlavor` parameter sets the initial flavor before user selection:

```toml
[params]
  mode = "toggle"
  catppuccinFlavor = "mocha"  # User sees Mocha on first visit
```

If not specified, defaults to **Mocha** (the most popular Catppuccin flavor).

## Writing Posts

Create posts in `content/posts/`:

```markdown
---
title: "My First Post"
description: "A brief description"
date: 2025-12-27
draft: false
tags: ["catppuccin", "hugo", "themes"]
toc: true
---

Your content here...
```

### Frontmatter Options

- `title` - Post title
- `description` - Meta description
- `date` - Publication date
- `draft` - Set to `true` to hide post
- `tags` - Array of tags
- `toc` - Enable table of contents (default: false)
- `tldr` - Short summary shown above content

### Using Callouts

Archie Catppuccin includes 5 types of callouts:

```markdown
{{< callout >}}
This is a default callout with blue accent
{{< /callout >}}

{{< callout-alert >}}
🚨 This is an alert callout
{{< /callout-alert >}}

{{< callout-tip >}}
💡 This is a tip callout
{{< /callout-tip >}}

{{< callout-warning >}}
⚠️ This is a warning callout
{{< /callout-warning >}}

{{< callout-custom emoji="🎨" title="Custom Title" >}}
Create your own custom callouts!
{{< /callout-custom >}}
```

## Customization

### Custom CSS

To add custom styles, create `assets/css/custom.css` and reference it in your config:

```toml
[params]
  customcss = ["css/custom.css"]
```

### Override Catppuccin Colors

You can override specific Catppuccin colors in your custom CSS:

```css
:root {
  /* Override primary color to use Catppuccin Blue instead of Mauve */
  --color-primary: var(--ctp-blue);

  /* Or use a custom color */
  --color-border: #ff69b4;
}
```

### Available Catppuccin Color Variables

Each flavor provides these CSS custom properties:

**Base Colors:** `--ctp-base`, `--ctp-mantle`, `--ctp-crust`

**Text Colors:** `--ctp-text`, `--ctp-subtext1`, `--ctp-subtext0`

**Surface Colors:** `--ctp-surface0`, `--ctp-surface1`, `--ctp-surface2`

**Accent Colors:** `--ctp-rosewater`, `--ctp-flamingo`, `--ctp-pink`, `--ctp-mauve`, `--ctp-red`, `--ctp-maroon`, `--ctp-peach`, `--ctp-yellow`, `--ctp-green`, `--ctp-teal`, `--ctp-sky`, `--ctp-sapphire`, `--ctp-blue`, `--ctp-lavender`

## Advanced Configuration

### Social Links

```toml
[[params.social]]
name = "GitHub"
icon = "github"
url = "https://github.com/yourusername"

[[params.social]]
name = "Twitter"
icon = "twitter"
url = "https://twitter.com/yourusername"
```

### Google Analytics

```toml
[params]
  googleAnalytics = "UA-123456789-1"
```

### Math Support

Enable MathJax or KaTeX for mathematical expressions:

```toml
[params]
  mathjax = true
  # OR
  katex = true
```

Then use in your posts:

```markdown
Inline math: $E = mc^2$

Display math:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Disqus Comments

```toml
disqusShortname = "your-disqus-shortname"
```

## Development

To test the theme locally:

```bash
cd exampleSite
hugo server --themesDir ../.. -D
```

Visit `http://localhost:1313` to see the theme in action.

## Browser Support

Archie Catppuccin uses modern CSS features:

- CSS Custom Properties (variables)
- CSS Grid and Flexbox
- Native CSS `appearance` property

Supported browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+

## Migrating from Original Archie

If you're migrating from the original Archie theme:

1. Update your theme reference to `archie-catppuccin`
2. Change `mode` to `"toggle"` or choose a specific flavor
3. Add `catppuccinFlavor` parameter
4. Remove any custom dark mode CSS (now handled by Catppuccin)
5. Test your site with different flavors to ensure readability

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Ethan Oliver Troy (Archie Catppuccin fork)

Copyright (c) 2020 Athul Cyriac Ajay (Original Archie theme)

See [LICENSE](LICENSE) for full details.

## Support

- **Issues:** [GitHub Issues](https://github.com/ethanolivertroy/archie-catppuccin/issues)
- **Original Archie:** [athul/archie](https://github.com/athul/archie)
- **Catppuccin Project:** [catppuccin.com](https://catppuccin.com)

## Acknowledgments

- [Athul Cyriac Ajay](https://github.com/athul) for creating the beautiful Archie theme
- [Catppuccin Team](https://github.com/catppuccin) for the amazing color palette
- All contributors to both projects
