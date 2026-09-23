# AjM Electrical Solutions website

Static site source published with GitHub Pages. Every push to `main` automatically deploys through GitHub Actions.

The deployment publishes the HTML pages, images and assets, `robots.txt`, and `sitemap.xml`. The workflow also creates clean URL routes (such as `/contact/`) listed in the sitemap. The duplicate `sitemap(2).xml` was omitted because it is identical to `sitemap.xml`. The Cloudflare-only `_headers` file is omitted because GitHub Pages does not apply it.

Search crawlers are allowed. OpenAI's OAI-SearchBot is explicitly allowed for ChatGPT search, while GPTBot is disallowed to preserve the existing `ai-train=no` preference.

The production domain is `https://ajmelectricalsolutions.com`. Cloudflare DNS points the apex and `www` hostname to GitHub Pages; the Outlook email and device-management records remain in place. GitHub Pages reports the domain DNS check as successful and HTTPS enforcement is enabled.

The quote form sends requests through FormSubmit to aaron@ajmelectricalsolutions.com and offers a copy-details option. The first live submission triggers a one-time inbox activation email from FormSubmit.
