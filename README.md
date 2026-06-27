# livlindinger.com — deployment guide

There are two design options in this folder, both plain HTML/CSS/JS (no build
step), made to replace the Linktree at **livlindinger.com**. Free hosting via
GitHub Pages either way.

- **This folder (root)** — clean static portfolio, no animation.
- **`parallax-version/`** — same content, single page with scroll parallax
  (layered hero, scroll-reveal sections, progress bar). Pick whichever look
  you prefer; only upload the contents of *one* of the two to the repo.

## Files
- `index.html` — the page
- `styles.css` — all styling
- `CNAME` — tells GitHub Pages to serve this site on `livlindinger.com`
- `images/headshot.jpg` — **add Liv's real headshot here** (square or portrait
  photo, ~800x800px works well). Until you add it, the hero shows a placeholder
  monogram circle instead of breaking.
- `resume.pdf` — optional, link in the Resume section expects a file with this name

## 1. Put it on GitHub
1. Create a free GitHub account if you don't have one: github.com
2. Create a new **public** repository, e.g. `livlindinger-site`.
3. Upload all the files in this folder to the repo (drag-and-drop works on
   github.com — click "Add file" → "Upload files").
4. Commit the changes.

## 2. Turn on GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Under "Custom domain", enter `livlindinger.com` and save (this writes the
   CNAME file again automatically — having it in the repo too is fine).
5. Wait a few minutes — GitHub will show a green checkmark once it's live at
   the default `https://<username>.github.io/livlindinger-site/` URL.

## 3. Point the domain at GitHub Pages (in GoDaddy)
Right now `livlindinger.com` is showing GoDaddy's "Airo" placeholder template,
not even a Linktree redirect — so this step replaces that.

In GoDaddy → My Products → DNS for livlindinger.com, set:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<username>.github.io` |

Remove any existing "Forwarding" rule and any GoDaddy "Website Builder/Airo"
parking records pointing at `@`. DNS changes can take 15 minutes to a few
hours to propagate.

Back in GitHub Settings → Pages, once DNS resolves, check **Enforce HTTPS**
so the site loads securely at `https://livlindinger.com`.

## 4. Customize before the reveal
- Drop in her real headshot as `images/headshot.jpg`
- Fill in the About paragraph with her actual bio/training
- Swap the Reel placeholder for a YouTube/Vimeo embed if she has a demo reel
- Add a real resume PDF, or delete that section if not ready
- Update the contact email in `index.html` (currently `hello@livlindinger.com`)

## Cost
$0/month — GitHub Pages hosting is free. The only ongoing cost is the domain
registration you already paid for.
