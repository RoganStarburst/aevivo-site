# AEVIVO Website Handover Document

**Prepared:** April 20, 2026 **From:** Suzanna Howse **To:** Tiago Areias

---

## Architecture Overview

Both website versions are single-file HTML pages deployed as static files on GitHub Pages. There is no build system, no server, no database.

### v1 — Navy/Dark Theme (index.html, \~114KB)

- Pure HTML/CSS/JS, no framework  
- Dark navy background with gold/copper accents  
- 53+ products across 11 categories  
- Includes: hero, educational section, product catalog, science references, quality section, "Aevivo Standard" mission, assessment form, FAQ, newsletter signup, cart  
- Footer has Terms/Privacy as modal popups  
- **Live at:** [https://suzeq493.github.io/aevivo-site/](https://suzeq493.github.io/aevivo-site/)

### v2 — Light Theme (index-v2.html, \~46KB)

- React 18 \+ Babel Standalone (transpiled in-browser, no build step)  
- Light mineral white background with navy text  
- \~58 products across 10 categories  
- Includes: fixed RUO disclaimer bar, hero, pen delivery section, product catalog, science citations (3 specific papers), quality assurance, certificates section, FAQ, newsletter, cart  
- Assessment form intentionally removed for RUO compliance  
- **Live at:** [https://suzeq493.github.io/aevivo-site/index-v2.html](https://suzeq493.github.io/aevivo-site/index-v2.html)

### GitHub Repo

- **URL:** github.com/SuzeQ493/aevivo-site  
- **Branch:** main  
- **Deploy:** GitHub Pages (automatic on push to main)  
- **Account:** SuzeQ493

### How to Deploy Changes

1. Edit the HTML file locally  
2. Go to [https://github.com/SuzeQ493/aevivo-site/upload/main](https://github.com/SuzeQ493/aevivo-site/upload/main)  
3. Drag the updated file onto the upload area  
4. Click "Commit changes"  
5. Wait \~60 seconds for GitHub Pages to deploy

---

## Key Decisions Made (and Why)

### 1\. Single-file HTML instead of Next.js

The v2 design was originally a Next.js app. We converted it to a single HTML file with React/Babel loaded from CDN because GitHub Pages only serves static files. No build pipeline needed — just upload and commit.

### 2\. RUO compliance overhaul

The v1 site had a 6-step "personalised peptide protocol" assessment form that collected consumer health data (goals like "fat loss," "muscle growth," symptoms, lifestyle). This is a critical RUO violation — it could be used as evidence the products are marketed for human consumption. The v2 site intentionally removes this.

### 3\. Research-framed language

All product descriptions must use mechanism-based terminology, not consumer health tags. Example: "Cytoprotective, AMPK pathway modulation" instead of "Gut Health, Fat Loss." This was a deliberate compliance decision.

### 4\. Two sites coexisting

Both v1 and v2 live at the same GitHub Pages domain. v1 is at the root (index.html), v2 is at /index-v2.html. This lets us compare designs without losing the original.

### 5\. Brand direction: "Aesop meets biotech"

The visual identity aims for luxury restraint — private Zurich clinic feeling. Dark navy base, champagne gold used very sparingly (4%), burnt copper at \<5%. Serif headlines \+ sans-serif body. No startup vibes, no supplement branding.

---

## What's Done

- [x] v1 navy site built and deployed  
- [x] v2 light theme site built and deployed  
- [x] Brand direction finalized (colors, typography, language, packaging philosophy)  
- [x] Email signatures created for Suzanna and Tiago (navy blue design with gold "A" logo)  
- [x] BPC-157 Certificate of Analysis PDF created  
- [x] Color palette comparison page (aevivo-color-palettes.html)  
- [x] Brand preview page (aevivo-brand-preview.html)  
- [x] Website content audit completed (AEVIVO Website Content Audit.docx)  
- [x] 90-Day Action Plan document  
- [x] Strategic Playbook document  
- [x] EU Manufacturer Research document  
- [x] Manufacturer outreach template \+ BCN Peptides letter  
- [x] RBT Resale Authorisation Letter  
- [x] RBT Supplier Key Terms document

---

## What's In Progress / Not Done

### P0 — Critical Compliance (DO FIRST)

- [ ] Remove assessment form from v1 (index.html)  
- [ ] Remove "Living your best life — longer" consumer messaging from v1  
- [ ] Add buyer qualification process (verify purchasers are researchers)  
- [ ] Add expanded RUO disclaimers to v1 (v2 already has fixed top bar)  
- [ ] Add FDA/EMA standalone regulatory notice  
- [ ] Add resale prohibition agreement  
- [ ] Add misuse liability waiver

### P1 — Legal & Trust

- [ ] Create full Terms of Service page (v1 has modals, v2 has dead footer links)  
- [ ] Create full Privacy Policy page  
- [ ] Create Return/Refund Policy  
- [ ] Create detailed Shipping Policy (international terms, cold chain info)  
- [ ] Add Cookie Policy / GDPR compliance  
- [ ] Add contact page or contact form  
- [ ] Add physical business address

### P2 — Content & Product Depth

- [ ] Write About Us / Company History section  
- [ ] Add team/founder bios with credentials  
- [ ] Write mission statement (research-framed)  
- [ ] Build individual product pages (mechanisms, citations, amino acid sequences)  
- [ ] Create searchable/downloadable CoA library  
- [ ] Link actual GMP/ISO certification documents  
- [ ] Build checkout/payment flow  
- [ ] Add per-product research dosing protocol guidance  
- [ ] Create Material Safety Data Sheets (MSDS)

### P3 — Differentiation

- [ ] Blog / Research News section  
- [ ] Protocol library / research templates  
- [ ] Full literature database with citations  
- [ ] Product comparison tool  
- [ ] Wholesale program details and pricing tiers  
- [ ] Social media links  
- [ ] Multi-language support

---

## File Inventory

| File | Purpose |
| :---- | :---- |
| `index.html` | v1 navy site (live) |
| `index-v2.html` | v2 light site (live) |
| `aevivo-brand-preview.html` | Brand direction preview page |
| `aevivo-color-palettes.html` | Color palette comparison |
| `aevivo-redesign.html` | Earlier redesign draft |
| `email-signature-suzanna.html` | Suzanna's email signature (navy design) |
| `email-signature-tiago.html` | Tiago's email signature (navy design) |
| `email-signatures-preview.html` | Side-by-side preview of both signatures |
| `aevivo-email-signature.html` | Template signature (generic, fill in details) |
| `AEVIVO-BPC157-CoA.pdf` | Sample Certificate of Analysis |
| `AEVIVO-Color-Palettes.pdf` | Color palette reference PDF |
| `AEVIVO-Email-Signatures.pdf` | Email signature reference PDF |
| `AEVIVO-Lovable-Prompt.md` | Prompt for Lovable.dev site builder |
| `AEVIVO Website Content Audit.docx` | Full content gap analysis (April 2026\) |
| `AEVIVO 90-Day Action Plan.docx` | Business action plan |
| `AEVIVO Strategic Playbook.docx` | Strategic planning document |
| `EU_Manufacturer_Research.docx` | EU peptide manufacturer research |
| `AEVIVO_Manufacturer_Outreach_Template.docx` | Template for contacting manufacturers |
| `AEVIVO_BCN_Peptides_Letter.docx` | Outreach letter to BCN Peptides |
| `RBT_Resale_Authorisation_Letter.docx` | RBT Medical resale authorisation |
| `RBT_Supplier_Key_Terms.docx` | Key terms with RBT Medical |
| `CLAUDE.md` | Project instructions (auto-loaded by Claude) |
| `HANDOVER.md` | This document |

---

## Non-Obvious Things to Know

1. **The v2 site uses in-browser Babel transpilation.** React JSX is compiled client-side via a `<script type="text/babel">` tag. This means the first page load takes a moment while Babel processes the code. A "AEVIVO — LOADING" screen shows during this. This is a trade-off for not needing a build system.  
     
2. **GitHub Pages deployment can take 30-90 seconds.** After committing, the site isn't instantly live. Check the "Deployments" section on the repo page to confirm.  
     
3. **The product catalog data is embedded in the HTML.** There's no separate JSON or database — all \~58 products with names, descriptions, tags, specs, purity, and prices are hardcoded in the JavaScript within index-v2.html (and similarly in index.html for v1).  
     
4. **The assessment form in v1 is the single biggest compliance risk.** It collects health goals, symptoms, and lifestyle data — textbook evidence of marketing for human consumption. Removing it is priority zero.  
     
5. **Edgaras Barodica (Lithuanian manufacturer)** is a potential supplier with GMP/ATMP licensing, pen format products, room-temperature stability. Docs requested but not yet received.  
     
6. **Carla (INFARMED consultant)** has confirmed Portugal requires an INFARMED licence before importing/distributing peptides. EUDAMED registration is \~€2,500 one-off, plus €600/month TD retainer.  
     
7. **Google Drive is the primary document store**, not this local folder. All AEVIVO documents should be saved to the shared Aevivo Longevity folder (ID: 1dtY\_Pl-z7R9uR\_Hz6D0RsscZEnYGM3W1).  
     
8. **Email signatures:** The current design is the navy blue version with the gold "A" square logo, gold divider line, copper "Co-Founder" title, and RUO disclaimer at the bottom. No trust bar. See AEVIVO-Email-Signatures.pdf for the reference design.

---

## Preferences & Working Style (from Suzanna)

- Prefers action over discussion — "Let's do it" means go  
- Wants files saved to Google Drive, not just locally  
- Comfortable with drag-and-drop GitHub deployment  
- Expects fast turnaround; doesn't like long waits  
- Wants clear, simple instructions when doing manual steps  
- Brand taste: luxury restraint, not flashy — "Does this feel like a private Zurich clinic?"

