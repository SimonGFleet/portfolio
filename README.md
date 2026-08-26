# Simon Fleet — Portfolio

A small React and TypeScript portfolio for selected software projects.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The site uses hash-based routes and relative asset paths so that project links
work correctly when deployed beneath a GitHub Pages repository path.

## Publish on GitHub Pages

1. Create an empty GitHub repository named `simon-fleet-portfolio`.
2. In this folder, connect it and push the `main` branch:

```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/simon-fleet-portfolio.git
git branch -M main
git add .
git commit -m "Prepare portfolio for GitHub Pages"
git push -u origin main
```

3. On GitHub, open **Settings > Pages** and set **Source** to **GitHub Actions**.

The workflow will build and deploy the site automatically. It will be available
at `https://YOUR-GITHUB-USERNAME.github.io/simon-fleet-portfolio/`.
