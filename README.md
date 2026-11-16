# MIFTAH Web — Starter

A bilingual Arabic/English, responsive landing-page foundation for the MIFTAH product.

## Requirements
- Node.js 20.9 or newer
- npm
- VS Code (recommended)

## Run locally on Windows
1. Install Node.js LTS: https://nodejs.org/
2. Extract this ZIP.
3. Open the `miftah-web` folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

```bash
npm install
npm run dev
```

6. Open http://localhost:3000

## Current milestone
- Responsive landing page
- Arabic / English language switch
- RTL / LTR layout direction
- Product dashboard preview (illustrative only)
- Feature, workflow, privacy, and launch sections

## Not connected yet
This is the first front-end milestone. Sign-in, real document uploads, OCR, reminders, database, and secure file storage are not implemented yet. They will be added in later milestones after the product structure and security model are agreed.

## Next milestone
Create the actual private user workspace and connect Supabase Auth + PostgreSQL + protected document storage. Do not upload real identity documents until access controls and storage security have been implemented and tested.
