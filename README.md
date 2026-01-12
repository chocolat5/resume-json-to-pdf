# Resume JSON to PDF

A simple static site generator that converts your resume data from JSON into a HTML page optimized for PDF export.

## Features

- JSON-based content management
- Separate theme configuration
- One-click PDF generation via "Save as PDF" button

## Getting Started

```bash
# Clone this repo
git clone git@github.com:<YOUR_ID>/resume-json-to-pdf.git <PROJECT_NAME>

# Move to the appropriate directory
cd <PROJECT_NAME>

# Install npm package
npm install

# Run the project
npm run dev
```
Open `http://localhost:4321` in your browser. Click the "Save as PDF" button to generate your resume PDF.

## Prerequisites

- Node.js 22+
- Astro 5.16.0+

## Customization

### Update Resume Content

Edit `src/data/resume.json` with your information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    ...
  },
  "experience": [...],
  "projects": [...],
  ...
}
```

### Change Theme Colors

Edit `src/data/theme.json`:

```json
{
  "accent": "#a0ffc7",
  "accentDark": "#6dffa9",
  "text": "#1a4c3b",
  "background": "fffffd"
}

```

## Workflow

### Local Development

1. Edit `src/data/resume.json`
2. Run `npm run dev`
3. Click "Save as PDF" button
4. Save the generated PDF

### Production Workflow

1. Deploy to Cloudflare Pages (or similar)
2. Edit `resume.json` directly on GitHub
3. Wait 1-2 minutes for automatic deployment
4. Visit your deployed site
5. Click "Save as PDF" button

## Print Settings

When using the "Save as PDF" button, ensure:

- Margins: None
- Background graphics: Enabled

## License

MIT see the [LICENSE](./LICENSE) file for details.

## Data Files

The data files in `src/data/` (`resume.json` and `theme.json`) contain personal information and are not part of the open-source licensing of this project. These files are provided as examples only. Please replace them with your own data.