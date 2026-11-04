# Rubric Filter

DIGIHUM 2120, Creative Sprint 8, by Thea Ishida.

Eight project pitches run through a visible, weighted rubric. Swap between the
Course rubric and the Open rubric to see which ideas survive change. Each rejected
idea lands in a discard pile, tagged with the criterion that sank it.

Plain HTML, CSS and JavaScript. No libraries and no build step.

## Files

- `index.html`: page structure
- `style.css`: layout, light and dark themes, phone layout
- `app.js`: scoring and animation
- `data.js`: **editable content**: criteria, rubric weights, pass mark, and pitches

## Editing

Open `data.js`. Weights run from 0 (ignored) to 3. Each pitch scores 0 to 3 on
each criterion. An idea passes when its weighted score reaches the rubric's
`threshold` (a share of the maximum score).

Stand-in note: every pitch except "Trading simulator with a market maker" is an
invented example written with AI help. Replace them with your own.

## Run locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. On GitHub, create an empty **public** repository (no README), for example `rubric-filter`.
2. In this folder:
   ```
   git remote add origin https://github.com/USERNAME/rubric-filter.git
   git push -u origin main
   ```
   If git asks for a password, use a personal access token (GitHub > Settings > Developer settings > Personal access tokens).
3. In the repository: **Settings > Pages > Build and deployment > Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://USERNAME.github.io/rubric-filter/`.

## Credits

Built from R. Keith Sawyer, "Science," *Explaining Creativity* (Oxford UP, 2006),
and the film *Hidden Figures* (dir. Theodore Melfi, 2016).

AI disclosure: code and stand-in pitches were written with help from Claude (Anthropic).
