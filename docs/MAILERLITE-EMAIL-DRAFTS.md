# MailerLite Automation Email Drafts (v3)

**Status:** Flow restructured 2026-04-23. Order selection now happens on-site (no "reserve" step); MailerLite sends a transactional email with the order link so users can pick up later or reorder. Visual design still needs manual refresh in MailerLite dashboard.

---

## Flow summary (live on site)

1. User clicks any "Order" CTA → Modal opens (unless we already have them in localStorage, then direct jump).
2. Modal collects: Name + Email + Phone + optional marketing consent checkbox.
3. Submit → POST to MailerLite form (triggers Order Started automation, sends email with order link) + stores in localStorage/sessionStorage + redirects to orderlist.html.
4. Order page: pre-filled from URL + storage, picks compounds, clicks "Complete selection".
5. Redirects to shipping.html: shipping + billing + invoice-next info.
6. Clicks "Place my order" → full order POSTed to MailerLite as order summary in Compounds field.

**Returning users** skip the modal entirely (localStorage.aevivoLead check in openReserve).

---

## Automation 1: Decision Guide - PDF Delivery

**Trigger:** Subscriber joins group "Decision Guide Leads" (185461924880713276)
**Automation ID:** 185461987162982109
**Dashboard:** https://dashboard.mailerlite.com/automations/185461987162982109

### Sender

- From name: Aevivo Longevity
- From email: info@aevivolongevity.com

### Subject

Your Buyer's Decision Guide.

### Body (current content saved via API)

```
Hi,

Thanks for requesting The Buyer's Decision Guide.

Download the PDF:
https://aevivolongevity.com/AEVIVO-Buyers-Decision-Guide.pdf

Ten pages, no filler. The seven checks that separate a serious peptide supplier from a surface one. Written to be useful whether you buy from us or not.

When you're ready to order:
https://aevivolongevity.com/orderlist.html

For research use only. Not for human consumption.

- Aevivo Longevity
info@aevivolongevity.com
aevivolongevity.com

Calçada da Ajuda 35, 1300-006 Lisboa
GENESE SOBRANCEIRA, LDA
```

---

## Automation 2: Order Started - Send Order Link

**Trigger:** Subscriber joins group "Order Started" (185461928119764508).
**Automation ID:** 185562471137805388
**Dashboard:** https://dashboard.mailerlite.com/automations/185562471137805388

### Sender

- From name: Aevivo Longevity
- From email: info@aevivolongevity.com

### Subject

Your Aevivo order link.

### Preheader (set manually in dashboard)

Continue selecting your compounds, or pick it up later - your link is below.

### Body (current content saved via API)

```
Hi {$name|default:"there"},

Thanks for starting your Aevivo order.

Continue your selection here:
https://aevivolongevity.com/orderlist.html?email={$email}&name={$name|default:""}

Takes about two minutes. Pick compounds and quantities, add shipping, and we'll send a bank-transfer invoice within 24 hours. VAT included.

Prefer to talk it through first? Book 15 min:
https://calendar.app.google/Tbd5yFLeb2goXFHGA

Save this email. The link stays active so you can pick up or reorder anytime.

For research use only. Not for human consumption.

- Aevivo Longevity
info@aevivolongevity.com
aevivolongevity.com

Calcada da Ajuda 35, 1300-006 Lisboa
GENESE SOBRANCEIRA, LDA
```

### Design suggestion for visual editor

- **Primary gold filled button:** "Continue your order →" linking to the orderlist URL (with merge tags).
- **Secondary outline button:** "Book a 15-min call" linking to calendar.app.google.
- Rest of body as plain text paragraphs.
- Footer includes the standard RUO line, legal entity, unsubscribe ({$unsubscribe}).

---

## Groups

| Group | ID | Purpose |
|---|---|---|
| Decision Guide Leads | 185461924880713276 | Triggers Decision Guide automation |
| Order Started | 185461928119764508 | Triggers Order Started automation (name kept for form compatibility) |
| Marketing Subscribers | 185562451967739728 | Opt-in via checkbox. Filter for newsletter sends. |

## Custom fields

| Key | Name | Used for |
|---|---|---|
| compounds | Compounds | Full order summary appended after shipping submit |
| role | Role | Legacy (unused in current flow) |
| marketing_consent | Marketing Consent | "yes" or "no" - captured from checkbox at modal submit |
| consent_timestamp | Consent Timestamp | ISO datetime of when consent was captured |

## GDPR stance

- **Transactional email** (Order Started) = legitimate interest / pre-contract. Single opt-in by submission.
- **Marketing email** = separate consent via checkbox, unticked by default. Users with `marketing_consent=yes` can be segmented for newsletter sends.
- Consent timestamp captured for audit trail.
- Privacy Policy (privacy.html) updated to describe the flow, lawful basis, and retention.

## Your remaining manual steps

1. **Redesign both automation emails visually** in MailerLite dashboard to apply the brand kit (logo + palette). Open each automation (links above), click the email step, click Design email. Content is already in place; purely visual.

2. **Activate Order Started automation** (green Activate button top-right). Decision Guide automation is already on.

3. **(Optional) Create a Marketing Subscribers segment** if you want to send only to opted-in users. In MailerLite: Subscribers → Segments → Create segment → Filter by "Marketing Consent equals yes".

4. **Replace WhatsApp placeholder.** The site uses `351XXXXXXXXX` in two spots on orderlist.html:
   - Over-500-unit "Contact us" link
   - "Looking for other peptides?" request button

5. **Deploy site + PDF** to aevivolongevity.com so the links in the emails resolve.
