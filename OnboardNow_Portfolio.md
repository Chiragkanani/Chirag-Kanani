# OnboardNow (OBN): Client Onboarding & Case Management for Law Firms

**Website:** https://onboardnow.co.uk
**Type:** Multi-tenant SaaS web application for the UK legal sector (B2B)
**Role:** Full-stack developer (Laravel, Livewire)

## In one line

OnboardNow automates how UK law firms take on and run client matters. It covers identity checks, forms, documents, e-signatures, chasing, Land Registry data and AI-assisted legal review in one secure platform, connected to the firm's practice-management system.

## The idea

Taking on a new client is slow and manual for a law firm. The firm has to:

- verify the client's identity;
- collect forms and documents;
- get letters approved and signed;
- chase anyone who hasn't replied;
- order property documents;
- review long legal documents.

This usually happens across several systems and a lot of email.

OnboardNow turns this into a guided, automated flow:

1. The firm opens a matter (for example, a property purchase) and assigns the tasks the client needs to complete.
2. The client completes them in a simple portal: ID check, questionnaires, uploads, approvals and signatures.
3. The platform chases automatically by email, SMS and WhatsApp, fills documents from the data collected, and uses AI to review documents and draft reports.
4. Fee earners see the whole matter in one place and stay in sync with their practice-management system.

**Practice areas:** conveyancing (purchase and sale), probate, family and personal injury. An optional HR module supports staff onboarding.

## Main features

### Client onboarding and tasks
- Configurable tasks ("actions") that a firm assigns to its clients: questionnaires, ID verification, document requests, document approval and e-signature.
- A client portal with passwordless (magic link) login and mobile PIN verification.
- Automatic chasers by email, SMS and WhatsApp until each task is done.
- Client care letters and engagement documents, generated and sent to the client for approval.

### Identity and compliance
- Digital ID verification with liveness, face match and AML screening.
- UK Right to Work and Right to Rent share-code checks.

### Matters and case management
- Matters with parties and their roles.
- A case file of typed documents, with a full change history that records the before and after values.
- Pre-contract enquiries: raise them, send them to the other side's lawyer, track replies, and review them with AI.
- New matters and tasks created automatically from instruction emails (IMAP and Microsoft 365 mailboxes, including .eml and .msg files).

### Document automation
- DOCX and PDF templates with merge fields and conditional sections, filled from matter and client data.
- Templates edited in the browser (ONLYOFFICE Docs).
- PDF forms filled automatically, and documents merged and converted to PDF.
- A form builder for questionnaires (SurveyJS), used for property information forms (TA6, TA10) and commercial property enquiries (CPSE).

### Property (conveyancing)
- HM Land Registry integration: title search, and ordering official copies (title register and title plan) through a checkout. Documents are saved straight to the matter.
- An AI "Report on Title" for each title, and AI advice on auction legal packs.

### AI-assisted legal work
- Documents are analysed on upload: each one is classified and summarised, and its key facts are extracted.
- AI-drafted reports and reviews, with the fee earner reviewing every result.
- Runs on AWS Bedrock (Anthropic Claude).

### Quotes (estimates)
- A conveyancing quote builder covering the firm's rates, professional fees, disbursements and taxes.
- Quotes produced as PDF or DOCX and emailed to the client, with quote statuses and a chaser log.

### Firms, users and integrations
- Multi-tenant: each firm's data is isolated, and each firm manages its own team, roles, templates and settings.
- Self-service sign-up for new firms.
- A Support (admin) area to manage firms and system-wide setup.
- Clio integration: firms and users are created from Clio, and task status is sent back to Clio.
- A versioned REST API (v1) with API keys and OpenAPI (Swagger) documentation.

## Technology

| Area | Technology |
|---|---|
| Backend | PHP 8.2+, Laravel 11 |
| Frontend | Livewire 3, Alpine.js, Tailwind CSS, daisyUI, Mary UI, Vite |
| Database | MySQL |
| Background work | Laravel queues and scheduler, used for AI analysis, PDF filling, document merging, emails, chasers and email intake |
| Documents | DOCX merge engine, LibreOffice (conversion), PDFtk (form filling), DomPDF and Spatie Laravel PDF, pdf.js and pdf-lib (in the browser), Signature Pad, ONLYOFFICE Document Server (Docker) |
| Forms | SurveyJS (form library and form creator) |
| API | REST API v1, Laravel Sanctum, API keys, OpenAPI (Swagger) |
| Email | SMTP, IMAP, Microsoft Graph, MIME and Outlook .msg parsing |

## Connected platforms

| Platform | Used for | Link |
|---|---|---|
| AWS Bedrock (Anthropic Claude) | AI document analysis and reports | https://aws.amazon.com/bedrock/ |
| HM Land Registry (Business Gateway) | Title search and official copies | https://www.gov.uk/government/organisations/land-registry |
| Clio | Practice-management integration | https://www.clio.com |
| Didit | ID verification, liveness and AML checks | https://didit.me |
| Twilio | SMS, WhatsApp and mobile PIN codes | https://www.twilio.com |
| Microsoft 365 (Graph API) | Reading instruction mailboxes | https://learn.microsoft.com/graph/overview |
| ONLYOFFICE Docs | Editing DOCX templates in the browser | https://www.onlyoffice.com |
| SurveyJS | Questionnaires and form builder | https://surveyjs.io |
| Ideal Postcodes | UK address lookup | https://ideal-postcodes.co.uk |

## Engineering highlights

- **Multi-tenant isolation:** every lookup is scoped to the firm, and support staff can work inside a firm without seeing other firms' data.
- **Background processing:** long-running work (AI analysis, document generation) runs as queued jobs, with progress shown to the user.
- **Document pipeline:** one merge engine handles DOCX templates with conditional blocks, and the output is converted to PDF for clients.
- **AI in a legal setting:** prompts are kept as versioned instruction files, and every result is saved with the matter for the fee earner to review.
- **Responsive UI:** a consistent interface built from reusable Blade and Livewire components that works on phone, tablet and desktop.
- **Traceability:** an audit history of changes, showing the before and after values.
- **Security:** role-based access, passwordless signed login links, API keys, and regular dependency security audits.

## My contributions

- Redesigned the application UI into a consistent, responsive design system.
- Built the HM Land Registry integration, including official-copy ordering and the AI Report on Title.
- Built AI features on AWS Bedrock: document analysis on upload, auction pack advice and AI review of enquiries.
- Built the Enquiries module: raising enquiries, sending them to the other side, replies, AI review and a status log.
- Built the Quotes engine: rates, the quote builder, PDF and DOCX quotes, email, statuses and chasers.
- Extended client approval actions: care letters, documents to approve and e-signature documents.
- Improved document template management and the case file (document types, editing and change history).
- Strengthened multi-tenant security and resolved dependency vulnerabilities.

## Links

- Product website: https://onboardnow.co.uk
- Laravel: https://laravel.com
- Livewire: https://livewire.laravel.com
- Alpine.js: https://alpinejs.dev
- Tailwind CSS: https://tailwindcss.com
- daisyUI: https://daisyui.com
- Mary UI: https://mary-ui.com
- MySQL: https://www.mysql.com
- Vite: https://vite.dev
- SurveyJS: https://surveyjs.io
- ONLYOFFICE Docs: https://www.onlyoffice.com
- LibreOffice: https://www.libreoffice.org
- PDFtk Server: https://www.pdflabs.com/tools/pdftk-server/
- pdf.js: https://mozilla.github.io/pdf.js/
- pdf-lib: https://pdf-lib.js.org
- Signature Pad: https://github.com/szimek/signature_pad
- AWS Bedrock: https://aws.amazon.com/bedrock/
- Anthropic Claude: https://www.anthropic.com/claude
- HM Land Registry: https://www.gov.uk/government/organisations/land-registry
- Clio: https://www.clio.com
- Didit: https://didit.me
- Twilio: https://www.twilio.com
- Microsoft Graph: https://learn.microsoft.com/graph/overview
- Ideal Postcodes: https://ideal-postcodes.co.uk
