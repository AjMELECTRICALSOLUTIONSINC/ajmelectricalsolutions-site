# AjM Electrical Solutions website

Static site source prepared for GitHub Pages. Pushes to `main` publish the site automatically through GitHub Actions.

The Pages workflow publishes HTML pages, `assets`, `robots.txt`, and `sitemap.xml`. The duplicate `sitemap(2).xml` was omitted because it is identical to `sitemap.xml`. The Cloudflare-only `_headers` file is omitted because GitHub Pages does not apply it.

The custom domain `ajmelectricalsolutions.com` must be added in the repository's Pages settings and its DNS records must point to GitHub Pages before the live domain serves this deployment. Keep the current DNS unchanged until the GitHub Pages preview has been verified.