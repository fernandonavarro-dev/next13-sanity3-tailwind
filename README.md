# Fernando Navarro portfolio

Next.js portfolio with an embedded Sanity Studio at `/studio`. The `portfolio` branch is the existing site; `dev-clawdbot` is the agent development branch. Check the Vercel project's **Production Branch** setting before merging or pushing production changes.

## Local setup

Use Node 18 or 20 and `npm ci`. Create `.env.local` (never commit it):

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

Run `npm run dev`, then open `/studio` to edit content. The Sanity project and dataset must already exist and your Sanity account must have access. A GitHub PAT does **not** grant Sanity access.

## What to edit in Studio

- **Profile and homepage:** name, permanent hero headline, three rotating hero lines, About text, public email/work location, contact introduction, résumé PDF, and search description. Studio opens the existing published profile as a single designated document; do not create a second one. The old role labels remain in the document for compatibility but are no longer shown in the hero. If the three rotating lines are empty, the site uses the GIS-focused defaults in `components/Hero.tsx`. The old e-commerce bio and Bay Area location are replaced on the site by GIS-focused copy and “Remote (US)” until new values are published in Studio. The phone is no longer displayed or editable, though its historical Sanity field is not deleted from existing data.
- **Projects:** title, summary, role, public impact statement, optional program metric, technology labels, contribution bullets, screenshot gallery, live/repository URLs, category, featured flag, visibility, and display order. Lower order numbers appear first. Rural Home Guide leads the section as a live MapLibre product, followed by four utility GIS case studies; their user-cleared screenshots are in `public/case-studies/`. Three utility studies include user-cleared figures with source, period, program scope, and realized-versus-forecast context. The reliability dashboard has no verified project-specific number; the separate Permitting Viewer forecast is intentionally excluded. To edit a starter case study in Studio, create a Project with the **same Case-study slug**; published fields override the starter, while unfilled fields retain its copy. A hidden matching Project suppresses the starter entirely. The older four Sanity projects remain stored but are not shown unless marked **Featured project**; a new non-starter project appears normally unless hidden. No existing Sanity document was deleted or changed by this commit.
- **Project layout:** a viewport-height tabbed section keeps all project choices visible. Desktop uses a 25% left tab column and a 75% right detail panel; mobile uses a compact two-column tab grid above the panel. Selecting a tab replaces the previous project, and the detail panel scrolls internally. Tabs support click, arrow keys, Home, and End.
- **PG&E experience:** the existing generic Sanity bullets are replaced on the site with contribution-focused copy and qualified program outcomes. To edit them in Studio, fill **Public portfolio bullets** on the existing PG&E Experience document; that field takes precedence. Newly changed legacy bullets also take precedence over the built-in replacement. Figures are described as broader team/program results, and the transmission amount is labeled a forecast.
- **Experience, skills, and social links:** use `displayOrder` to choose position and `hidden` to remove an item from the site without deleting it. Skills now appear as text in GIS & mapping, Frontend, and Supporting tools groups—no percentages. Set each skill’s **Stack group** and optional order in Studio. Existing skills have code defaults until categorized. TypeScript appears as a starter label because it is missing from the current Sanity dataset; create a TypeScript skill in Studio to make it fully editable. Once a TypeScript record exists, the starter label disappears, including when that record is hidden.

New Sanity image uploads take precedence over legacy image URL fields. Existing URL fields remain for backward compatibility; do not delete them until all images have been migrated. The same rule applies to the résumé: until a Sanity PDF is uploaded, `public/Fernando-Navarro-Resume.pdf` is served. The older `(5.3)` URL serves the same updated PDF for existing links. Empty new profile fields retain the current site copy so the first deployment is non-breaking.

## Publishing and deployment

1. Make content edits in Sanity Studio, then **Publish**. Studio drafts are not shown publicly.
2. The homepage uses Next.js incremental static regeneration with a 60-second interval and queries Sanity without its CDN, so published content should appear after the next request following that interval. A code deploy is not required for ordinary content edits.
3. Code changes go through a GitHub branch/PR and Vercel preview deployment; merging into the Vercel Production Branch deploys the production site. Confirm the branch setting in Vercel before merging.

Draft preview is **not** configured yet. The old `/api/preview` route set a preview cookie but did not make App Router pages read drafts, so it was removed. Do not share unpublished content through a public preview URL. A secure draft preview needs Sanity authentication or a scoped read token and should be added as a separate, tested integration.

## Working with an assistant

- For code/layout changes: ask for a branch and review its Vercel preview before merging.
- For copy/content changes: provide Sanity Studio access or a scoped Sanity write token via a secret store, not in the repository. The assistant can prepare draft edits; publishing remains a separate decision.
- Keep a short list of content changes and review URLs for each update.

The contact form only opens a prefilled email draft. It is labeled accordingly and is not a server-side submission. A true form requires a submission service or API plus spam protection.
