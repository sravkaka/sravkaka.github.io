# Sravanthi Kakarla — Interactive Resume

A side-scrolling, flat-illustration resume. Scrolling (or pressing ← →) walks a character along a road past each career stop.

## Run locally
Open `index.html` in any browser. No build step or server needed.

## Edit content
All text lives in `data/resume.js` — name, about (including `industries`, the career-split bar — use `"present"` for the current role), skills (levels 1–4), journey (jobs + milestones, left → right), education, certifications, honors (grouped by organization, shown in the Awards scene), languages and contact links. Each job's `color` and `height` (0–1) control its building.

## Structure
```
index.html        page shell
css/styles.css    theme, layout, animations (colors in :root)
js/main.js        renders content + horizontal scroll engine
data/resume.js    resume content
```

## Deploy (GitHub Pages)
1. Create a GitHub repo and push these files.
2. Repo **Settings → Pages → Deploy from branch → main / root**.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

Netlify / Vercel also work — just drag-and-drop the folder.
