# ActiviKid: Kids' Activity Booking Platform

A marketplace for booking children's activities and courses in Hong Kong. Parents find and book activities in a mobile app and pay with prepaid credits. Activity providers (merchants) manage their listings, schedules and bookings in a web portal. The platform team runs everything from an admin panel.

**Period:** Jan 2025 – Oct 2026 · **Market:** Hong Kong · **Languages:** English, Traditional Chinese

---

## System Components

| # | System | Users | Stack |
|---|--------|-------|-------|
| 1 | **Backend REST API** | All clients | Laravel 11, PHP 8.3, MySQL |
| 2 | **Admin Panel** | Platform operators | Vue 3 SPA served by the Laravel app |
| 3 | **Merchant Portal** | Activity providers and their staff | Vue 3 SPA (separate app) |
| 4 | **Mobile App (iOS + Android)** | Parents (members) | Ionic 8, Vue 3, Capacitor 7, TypeScript |
| 5 | **Public Web Pages** | Anyone with a shared link | Laravel Blade: deep links, payment checkout, password reset, email unsubscribe |

```
 Mobile App (iOS/Android)    Merchant Portal    Admin Panel
            \                       |                /
             \______ REST API (Laravel 11, Sanctum) /
                              |
          MySQL · Queue workers · Task scheduler
                              |
   Yedpay · Firebase FCM · EMMA SMS · SendGrid · Google OAuth
   YouTube Data API · external course recommender
```

**Hosts:** `admin.*` (admin panel + API), `share.*` (deep links and app links), `payment.*` (Yedpay checkout pages)

---

## Technology

**Backend**
- Laravel 11, PHP 8.3, MySQL
- Laravel Sanctum: token auth for three separate user types (member, merchant, admin)
- Spatie Laravel Permission: admin roles and permissions
- Custom role and permission model for merchants
- Laravel Queues: email, SMS, push and report jobs
- Laravel Scheduler: booking reminders, review prompts, credit expiry
- Laravel Socialite: Google sign-in
- Kreait Firebase SDK: push notifications (FCM)
- L5-Swagger: OpenAPI docs for the member API
- Symfony HTTP Client and SendGrid mailer

**Admin Panel** (in the backend repo)
- Vue 3, Vite 6, Vue Router 4, Vuex 4
- PrimeVue 4, Tailwind CSS 3
- CASL (permission-based UI), Vuelidate
- Quill editor, Dropzone uploads, drag-and-drop ordering (vuedraggable), SweetAlert2

**Merchant Portal**
- Vue 3, Vite 6, Vue Router 4, Vuex 4
- PrimeVue 4, Vuetify 3, Tailwind CSS 4
- CASL, Vuelidate
- CKEditor 5 / TinyMCE / Quill, Dropzone
- ESLint, Prettier

**Mobile App**
- Ionic 8, Vue 3, TypeScript, Vite
- Pinia with persisted state
- vue-i18n (EN / Traditional Chinese)
- Capacitor 7 native plugins: push notifications, app badge, camera, filesystem, share, clipboard, in-app browser, haptics, keyboard, splash screen, status bar, safe area
- Swiper, Lottie, vue-advanced-cropper, PrimeVue, Tailwind CSS
- Vitest, Cypress

**Infrastructure**
- Ubuntu, Apache 2.4, Let's Encrypt SSL
- Subdomain routing with per-host route allow-lists
- iOS Universal Links (`apple-app-site-association`) and Android App Links (`assetlinks.json`)

---

## Features by System

### 1. Mobile App (Parents)
- **Onboarding:** email or Google sign-up, email and SMS OTP verification, invitation-code sign-up, forgot and reset password
- **Kid profiles:** several kids per account, with avatar (camera and cropper), school, grade, personality, activity preferences, budget and preferred location
- **Discovery:** home feeds (Trending Now, Recommended, Top 5 Picks, New Adventures, Book Again), categories, development dimensions
- **Search:** search with suggestions, recent and popular searches, advanced filters (category, sub-category, age, district, teaching format, language, credit range), sorting
- **Activity and centre pages:** media gallery with video, schedules, reviews and rating summary, saved activities and places
- **Booking:** book a schedule slot with credits, reschedule, cancel (with credit refund), rate and review after the class
- **Credits wallet:** buy credit plans through Yedpay, apply discount coupons, view transaction history, earn referral credits
- **Activity report:** personalised development report and recommendations from an external course recommender
- **Inbox:** notification inbox with read, flag and delete, push notifications, app icon badge, deep links from notifications and shared URLs
- **Account:** personal details, change mobile or email (with OTP), communication preferences, language switch, FAQs, policies, account deletion

### 2. Merchant Portal (Activity Providers)
- Registration with email verification, then admin approval
- Access depends on merchant status: pending, active, follow-up, rejected, inactive
- Dashboard
- Profile: organisation details, registration documents, contact details, partner agreement, logo, CMS content
- Activities: create and edit, media, highlights, age ranges, class sizes, teaching formats and languages, dimensions
- Approval workflow: submit an activity for approval or deactivation
- Scheduling: recurring schedules, single-date sessions, exception dates
- Bookings: list, create, update, bulk actions
- Reviews moderation
- Staff accounts with custom roles and per-module permissions

### 3. Admin Panel (Platform Operators)
- Dashboard: revenue, transactions, performance metrics, global search
- Members: kid profiles, invitation codes, transactions, report activities
- Merchants: organisation and contact details, staff, roles, activity approvals
- Activity catalogue: activities, schedules, bookings, reviews, categories and sub-categories, dimensions, age ranges, class sizes, teaching formats, teaching languages
- Home feeds: Trending Now and New Adventures sliders, popular searches, activities and brands
- Commerce: credit plans, HKD-to-credit rate, discount coupons, referral credit, payment methods
- Campaigns: targeted push, email and SMS sends with audience selection and delivery logs
- CMS: home, explore and kid-profile banners (EN/TC), T&C, privacy policy, FAQs, WhatsApp contact, promotional tags
- Master data: schools, school categories, grades, countries, cities, districts
- App version control: iOS and Android version, store link, force-update flag
- Admin users, roles and permission matrix

### 4. Backend Services
- **Payments:** Yedpay (HKD) order pre-create, hosted checkout, server-to-server webhook, and a status-sync service so credits are applied exactly once
- **Credit ledger:** credits are taken from the plan that expires soonest first. Cancelled bookings get credits back only for plans still active. Voided purchases are clawed back. Expired plans close automatically.
- **Scheduled jobs:**
  - Push reminder 30 minutes before a class
  - Rate-and-review prompt 30 minutes after a class
  - Credit plan expiry
- **Notifications:** queued delivery over push (FCM), email (SendGrid) and SMS (EMMA gateway, OTP and promotional). Promotional emails include signed one-click unsubscribe (RFC 8058).
- **Recommendations:** catalogue endpoints for an external course recommender, which returns recommended activities for each member's report
- **Merchant lifecycle:** suspending a merchant takes its activities offline, removes them from curated lists and logs out its users
- **Media:** video streaming with HTTP Range support (Safari), YouTube duration lookup (Data API v3)
- **Localisation:** API responses follow the client's language header (EN/TC)
- **Audit:** created-by and updated-by fields across admin and merchant edits, soft deletes on key entities

---

## Scale

| Metric | Count |
|--------|-------|
| API endpoints | ~400 (member 90 · admin 237 · merchant 74) |
| Database tables | ~90 (190 migrations) |
| Eloquent models | 82 |
| Controllers | 61 |
| Mobile app screens | 69 views, 104 components |
| Admin panel source files | ~280 Vue/JS files |
| Commits | ~900 backend · ~680 mobile app |

---

## Resume Summary

- Built a multi-tenant activity booking marketplace for Hong Kong: Laravel 11 REST API (~400 endpoints, ~90 tables), Vue 3 admin panel, Vue 3 merchant portal, and an Ionic/Capacitor iOS and Android app.
- Built a prepaid credit system with expiring plan buckets and expiry-aware refunds, plus Yedpay payments with webhook and status sync.
- Set up role-based access for three user types (admin, merchant with staff, member), with a merchant approval and status lifecycle.
- Added push, email and SMS notifications (FCM, SendGrid, EMMA), scheduled booking reminders, and multi-channel promotional campaigns with RFC 8058 unsubscribe.
- Shipped a bilingual (EN / Traditional Chinese) mobile app with Google sign-in, OTP verification, deep links (Universal/App Links), personalised recommendations and in-app payments.
