Live Website — Client Share

Live URL

LIVE SITE: https://shrutee2002.github.io/advocate-kartik-yadav/

How to view
- Open the link in any modern browser (Chrome, Edge, Safari).
- The site is responsive — test on mobile and desktop.

What's included
- Home, Practice areas, Testimonials, Contact form (leads delivered via form), Insights, Footer, Navbar.
- Performance and accessibility checks completed (basic).

Developer: Build & Preview
Prerequisites: Node.js (v18+ recommended) and `npm`.

Install dependencies:

```
npm install
```

Start local dev server (hot-reload):

```
npm run dev
```

Build production bundle:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

Create a ZIP of the production `dist` folder (PowerShell):

```
Compress-Archive -Path .\\dist\\ -DestinationPath .\\site.zip
```

Deployment notes
- Recommended hosts: **GitHub Pages** (recommended), Vercel, or Netlify.

### GitHub Pages (Automatic)
1. Push your repo to GitHub
2. Go to repo Settings → Pages
3. Set source to "Deploy from a branch" → select `gh-pages` branch
4. Site will auto-deploy on every push to `main`/`master` via GitHub Actions
5. Live URL: `https://YOUR-GITHUB-USERNAME.github.io/advocate-kartik-yadav/`

### Vercel or Netlify
- Vercel settings: connect repo, build command `npm run build`, output folder `dist`.
- Netlify settings: same build command and publish directory `dist`.

Sharing options for the client
- Send the live URL (recommended).
- Or send the `site.zip` (built `dist`) as an archive attachment.

Client message template
Hi — here's the live preview of your website: https://shrutee2002.github.io/advocate-kartik-yadav/

It's automatically deployed and updates whenever we push changes. If you'd like edits, content updates, or to transfer hosting, let me know.

Notes for you
- Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.
- Ensure the repo is pushed to GitHub for auto-deployment to work.
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automatic builds and deployment.
