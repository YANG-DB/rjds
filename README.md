# RJDS - Richmond Jewish Day School Admissions

Online admissions portal for Richmond Jewish Day School (2026-2027), featuring an informational landing page and a multi-step enrollment wizard that generates a PDF application.

**Live site: [https://rjds.vercel.app](https://rjds.vercel.app/)**

## Features

- **Admissions Landing Page** — School information, admissions process, application checklist, important dates, and tuition & fees table sourced from [rjds.ca/admissions](https://rjds.ca/admissions/)
- **10-Step Enrollment Wizard** — Digitized version of the New Student Enrollment Package PDF:
  1. Student Information
  2. Parents/Guardians
  3. Emergency Contacts
  4. Family & Social History
  5. Family Background
  6. Household Members
  7. Immigration Status (Form A)
  8. Agreements & Consents
  9. Payment & Pre-Authorized Debit
  10. Review & Submit
- **PDF Generation** — On submission, generates a branded multi-page PDF matching the official enrollment package, ready for print and signature

## Tech Stack

- [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) — build tooling
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [React Router](https://reactrouter.com) — client-side routing
- [jsPDF](https://github.com/parallax/jsPDF) — PDF generation

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx              # Header, footer, navigation
│   └── wizard/                 # Wizard step components
│       ├── StepStudentInfo.tsx
│       ├── StepParentGuardian.tsx
│       ├── StepEmergencyContacts.tsx
│       ├── StepFamilyHistory.tsx
│       ├── StepFamilyBackground.tsx
│       ├── StepHouseholdMembers.tsx
│       ├── StepImmigrationStatus.tsx
│       ├── StepConsents.tsx
│       ├── StepPayment.tsx
│       └── StepReview.tsx
├── pages/
│   ├── AdmissionsPage.tsx      # Landing page
│   └── AdmissionWizard.tsx     # Multi-step form orchestrator
├── types/
│   └── FormData.ts             # TypeScript types & initial state
├── utils/
│   └── generatePdf.ts          # PDF generation logic
├── App.tsx                     # Route definitions
├── main.tsx                    # Entry point
└── index.css                   # Tailwind config & theme
```

## Contact

Richmond Jewish Day School
8760 No 5 Road, Richmond BC V6Y 2V4, Canada
Phone: 604-275-3393 | Email: admissions@rjds.ca | Web: [rjds.ca](https://rjds.ca)
