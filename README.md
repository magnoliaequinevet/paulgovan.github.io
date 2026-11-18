# Magnolia Equine Veterinary Services website

Source for [magnoliaequinevet.com](https://magnoliaequinevet.com), a one-page [Jekyll](https://jekyllrb.com) site hosted on GitHub Pages. Originally forked from [swcool/landing-page-theme](https://github.com/swcool/landing-page-theme).

## Editing content

| What | Where |
| --- | --- |
| Practice name, tagline, description | `_config.yml` (`title`, `tagline`, `description`) |
| Address, phone, email, area served | `_config.yml` → `contact:` (used by the contact section, hero buttons and search-engine data) |
| Hero heading / subheading | `index.html` front matter |
| Services text and photo | `_posts/2014-09-21-services-1.markdown` |
| Styles | `css/landing-page.css` |

The copyright year in the footer updates automatically on every build.

## Running locally

Requires Ruby 3.x. The `github-pages` gem does not support Ruby 4 yet, so on a Mac use `brew install ruby@3.4`.

```bash
export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH" LANG=en_US.UTF-8
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Hosting, domain and HTTPS

- GitHub Pages builds the live site from the **`gh-pages`** branch. Work on `master`, then merge `master` into `gh-pages` and push to publish.
- `CNAME` must contain exactly one domain: `magnoliaequinevet.com`. GitHub redirects `www` to it automatically.
- DNS: apex `A` records point to GitHub Pages (`185.199.108–111.153`), and `www` is a `CNAME` to `magnoliaequinevet.github.io`.
- HTTPS: in the repo's **Settings → Pages**, confirm the custom domain shows as verified, then tick **Enforce HTTPS**. Certificate issuance can take up to 24 hours after the domain is saved.
