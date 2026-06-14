# Publishing Being Zetetic to GitHub Pages

Two options. Pick one.

## Option A — Use `gh` CLI from your terminal (fastest)

```sh
# 1. Authenticate (opens browser)
gh auth login -h github.com -p https

# 2. Create the repo and push
gh repo create being-zetetic --public --source=. --remote=origin --push --description "The learning protocol for lifelong mastery of anything"
gh repo create-site  # not a real command, see step 3

# 3. Enable GitHub Pages (do this once on the web)
#    https://github.com/BeingSeight/being-zetetic/settings/pages
#    Source: "Deploy from a branch" → main → / (root) → Save

# 4. Wait ~60s, then visit:
#    https://BeingSeight.github.io/being-zetetic/
```

## Option B — Manual via web

1. Go to https://github.com/new
2. Repository name: `being-zetetic`
3. Public, do NOT initialize with README
4. Click "Create repository"
5. From this folder, run:

```sh
git remote add origin git@github.com:BeingSeight/being-zetetic.git
git branch -M main
git push -u origin main
```

6. Enable Pages: repo → Settings → Pages → Source: `main` / `(root)` → Save
7. Visit `https://BeingSeight.github.io/being-zetetic/`

---

# Finding the real URL

After Pages is enabled, your URL is one of:
- **Project site:** `https://BeingSeight.github.io/being-zetetic/`
- **User site:** `https://BeingSeight.github.io/` (if you used the special repo name)

Tell me the URL and I'll do a global find-replace in all 74 places where I left a `{{SITE_URL}}` placeholder.
