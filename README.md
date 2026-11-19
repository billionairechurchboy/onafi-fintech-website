# Onafi — Fintech Website

A multi-page marketing website for **Onafi**, a fictional digital financial services and payment technology company serving individuals and businesses in African markets.

*Ọ̀nà* is Yoruba for “way” or “path”; *fi* stands for finance.

## Pages

| Page | File |
| --- | --- |
| Home | `index.html` |
| Personal | `personal.html` |
| Business | `business.html` |
| Solutions | `solutions.html` |
| Pricing | `pricing.html` |
| Resources | `resources.html` |
| Contact | `contact.html` |
| About | `about.html` |
| Business Payments (landing page) | `payments.html` |
| Get Started (sign-up) | `signup.html` |

## Structure

- `assets/css/styles.css` — all styles (design tokens, components, responsive rules)
- `assets/js/main.js` — shared header, footer, icon set, scroll reveal and demo form handling
- `assets/img/favicon.svg` — logo mark
- `screenshots/` — full-page captures of Home and Personal

## Run locally

Plain HTML, CSS and JavaScript — no build step.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Notes

- Portfolio sample: brand, customer names and amounts shown in the UI are illustrative.
- Pricing plans are proposed package structures, not actual financial product terms or prices.
- Security section intentionally lists no certifications or regulatory approvals; add only verified ones.
- Forms are front-end demos and do not submit data anywhere.
