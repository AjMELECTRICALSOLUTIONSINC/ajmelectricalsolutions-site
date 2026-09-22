# AjM Electrical Solutions website

Static site source published with GitHub Pages. Every push to `main` automatically deploys through GitHub Actions.

The deployment publishes the HTML pages, images and assets, `robots.txt`, and `sitemap.xml`. The workflow also creates clean URL routes (such as `/contact/`) so search engines and visitors can use the canonical paths listed in the sitemap. The duplicate `sitemap(2).xml` was omitted because it is identical to `sitemap.xml`. The Cloudflare-only `_headers` file is omitted because GitHub Pages does not apply it.

Search crawlers are allowed. OpenAI's OAI-SearchBot is explicitly allowed for ChatGPT search, while GPTBot is disallowed to preserve the existing `ai-train=no` preference.

The custom domain `ajmelectricalsolutions.com` is configured in repository Pages settings. Its DNS still needs to point to GitHub Pages before this deployment serves the domain. Keep the current DNS unchanged until the DNS change is made.