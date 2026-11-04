# Mohammad Nomaan Ansari: Portfolio

React + Vite portfolio. No API keys, no paid services, no database. The hero portrait uses a lightweight CSS 3D tilt and floating effect.

## Run locally (macOS)
1. Install Node.js (LTS) from https://nodejs.org (or `brew install node`).
2. In Terminal: `cd path/to/nomaan-portfolio`
3. `npm install`
4. `npm run dev` and open the address it prints (usually http://localhost:5173).
5. `npm run build` creates the production version in `dist/`.

## Folder structure
```
index.html            page title, description (SEO)
public/photo.jpg      your photo
public/favicon.svg    browser tab icon
src/data/             ALL your content (edit these)
  profile.js          name, intro, about text, education
  projects.js         projects
  skills.js           skills
  achievements.js     achievements and certificates
  social.js           email / LinkedIn / GitHub
  nav.js              menu links
src/components/       page sections (usually no need to edit)
src/hooks/            reveal and tilt effects
src/styles/index.css  colours (top of file) and layout
```

## How to update things
- **Photo:** replace `public/photo.jpg` with your new portrait, keeping the same filename. The hero photo has a subtle floating animation and desktop mouse-tilt effect.
- **Social links:** open `src/data/social.js`, fill `value` and `url` for each.
- **Add a project:** open `src/data/projects.js`, copy a block, paste it at the top, edit it. Add a GitHub link in `github`; add `demo` only if a live site exists (the Live demo button appears automatically).
- **Mark a project finished:** change `status` to `"completed"` and fill in `tech` and `features`.
- **Skills:** edit the lists in `src/data/skills.js`. Move an item from "learning" to "know" when you are ready.
- **Add a certificate:** copy a block in `src/data/achievements.js`.
- **Accent colour:** change `--accent` at the top of `src/styles/index.css`.

## Upload to GitHub
1. Create an empty repository on github.com (no README), e.g. `portfolio`.
2. In the project folder:
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
(`node_modules` and `dist` are already ignored.)

## Deploy on Vercel (free)
1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import your `portfolio` repository.
3. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
4. After about a minute you get a `.vercel.app` link. Every `git push` redeploys automatically.

## Placeholders still to fill
- Email, LinkedIn, GitHub (`src/data/social.js`)
- GitHub link for SmartCare (`src/data/projects.js`)
- Optional: update the Full Stack and AI project cards when you start them
