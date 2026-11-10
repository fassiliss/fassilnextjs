# Portfolio review

Branch: `review/portfolio-security-reposition`

Base: `cc9e37851c4bb50e9fa782ecbff1aee0cdf2f0ec` (`main`, checked against GitHub).

## Change

The homepage now follows: introduction → SecureCycle case study → portfolio projects → capabilities → background and earned credentials → contact.

- Repositions the introduction around full-stack development, cybersecurity, and cloud security.
- Removes the rendered experience, project, and client counters.
- Labels SecureCycle as in development and invoice payments as test-mode only.
- Includes CompTIA Security+ and ISC2 Certified in Cybersecurity (CC), as provided by the owner. No AWS certification is stated.
- Preserves Next.js Pages Router, existing assets, résumé download, theme preference, EmailJS contact integration, and direct email/phone links.
- Replaces template animation, custom-cursor, and modal dependencies on the homepage with visible server-rendered content and direct project links. The old components/assets remain available in the repository.
- Adds labeled required form fields, submission feedback, reduced-motion support, focus outlines, a skip link, and collapsible mobile navigation.

## Content sources

SecureCycle was reviewed at default-branch commit `5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519`. These are private source links for review; the public homepage does not link visitors to the private repository.

- [README: scope, launch requirements, payments, recovery expectations](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/README.md)
- [Package: Next.js, TypeScript and Supabase stack](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/package.json)
- [Customer access checks](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/src/lib/auth/customer.ts)
- [Internal permission checks](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/src/lib/auth/internal.ts)
- [Database role policies and technician assignment restrictions](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/supabase/migrations/202608040001_harden_internal_role_write_policies.sql)
- [Security response headers](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/next.config.mjs)
- [Stripe signature verification](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/src/app/api/stripe/webhook/route.ts)
- [Pickup form and submission integration](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/src/components/services/pickup-form.tsx)
- [Certificate actions](https://github.com/fassiliss/securecycle-technologies/blob/5ab0fd90f9005ba4a3e2ba66ac7a993f2c14d519/src/lib/asset-certificates/actions.ts)

Selected project names, images and URLs come from the existing portfolio. Descriptions were narrowed using the connected repositories: Smyrna Soccer's channel page and message/presence hooks, Ajora Kitchen's menu page, and AutoShop's inventory navigation. All three live sites and their three source repository links returned HTTP 200 during review.

The Work section now includes all 14 original projects, with the existing three cards retained first and 11 missing projects appended. The added projects reuse names, descriptions, images, technology lists and links verbatim from `src/components/Portfolio.js` on `main` at `cc9e37851c4bb50e9fa782ecbff1aee0cdf2f0ec`. Technology lists for the existing three cards also come from that source. Card data is in `src/data/portfolioProjects.json`; the grid uses three columns on desktop, two on tablet and one on mobile. The résumé file, download link and SecureCycle case study are unchanged by this addition.

Code inspection verifies implementation exists; it does not verify deployed SecureCycle configuration or production operation. No metrics, clients, testimonials, compliance guarantees or project outcomes were added.

## Verification

- `npm run build`: passed, including Next.js type/validity checks. Existing Browserslist data warning remains.
- Production HTTP checks: homepage and résumé returned 200.
- Generated HTML checks: six sections in order, one H1, one meta description, valid internal anchors, nonempty image alt text, labeled required form fields, both requested certifications, explicit SecureCycle status, and no unsupported counters or AWS certification claim.
- `git diff --check`: passed.
- Expanded Work checks: all 14 original projects are included once; the 11 additions match original content; existing three cards are preserved; every referenced image exists; production HTML renders 14 cards and technology lists. The résumé checksum and download link are unchanged.
- Browser visual and interaction checks: not completed. Browser runtime reported no browser available and an empty connected-browser list. Mobile layout, keyboard behavior, theme persistence and submission UI still need interactive review.
- Email delivery: not tested; no real message sent. The existing EmailJS configuration is retained, with new pending/success/error handling.

No merge or production deployment is part of this change. Existing unrelated API edits and untracked image files are excluded from the review commit.
