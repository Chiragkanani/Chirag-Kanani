# NALVS — AI beauty consultant (iOS and Android)

A mobile app that reads a selfie, builds a personal "Beauty Passport" from it, and uses that to suggest shades, build full makeup looks, try lipsticks on, and answer beauty questions with AI.

- **Type:** consumer mobile app with paid memberships
- **Platforms:** Android (live on Google Play) and iPhone (TestFlight, in App Store review)
- **Publisher:** A.L.A Beauty LLC
- **Year:** 2026
- **My role:** Senior developer. I built the mobile app and its backend, connected the outside services, and shipped it to both stores.

## The idea

Most beauty apps ask you to pick your own skin tone and then show you a catalogue. NALVS starts from your face instead. One selfie is read once; everything after that (shades, looks, try-on, advice) is matched to what was read, and explained in plain words.

## Main features

- **Beauty Passport:** a selfie is analysed for skin tone and undertone, hair, eye and lip colour, face shape and contrast. Each new reading is kept as a version.
- **Lip Studio:** lipstick try-on on your own selfie, with edge and finish controls and saved lip looks.
- **Look Builder:** a complete look (base, cheeks, eyes, lips) built from the catalogue or from the products you own, optionally around an outfit photo. Looks are saved with versions and can be changed by asking.
- **AI Consult:** a chat with a beauty consultant that knows your Passport. It takes typed questions, voice and photos, and recommends real products.
- **Today's Look:** a daily suggestion that follows the local weather.
- **Makeup Bag:** the products you own, from the catalogue or typed in by hand.
- **Shopping:** product offers and shop links by country.
- **Memberships:** two plans with monthly allowances, bought through the App Store and Google Play.
- **Privacy:** consent before the first selfie, a copy of your data on request, account deletion, and automatic removal of photos after long inactivity.
- **Admin panel (web):** users and roles, the product catalogue and its import, members and reports.

## Technologies

| Area | Used |
|---|---|
| Mobile app | Flutter 3.44, Dart 3.12, Riverpod, go_router, Drift (SQLite), Freezed |
| Camera and face | camera, Google ML Kit face detection |
| Backend | Supabase: PostgreSQL with row-level security, Auth, Storage, Realtime, Edge Functions (Deno, TypeScript) |
| Sign-in | Email, Sign in with Apple, Google Sign-In |
| AI | Anthropic Claude (vision, chat, tool use), Deepgram Nova-3 (speech to text) |
| Image service | Python and ONNX Runtime on Google Cloud Run (lip and face outline) |
| Payments | RevenueCat (subscriptions on both stores, webhooks) |
| Analytics and ads | Firebase Analytics, Crashlytics, Cloud Messaging; AppsFlyer with Apple's tracking prompt |
| Email | Mailtrap |
| Admin panel | Vue 3, TypeScript, Vite, Pinia, Tailwind CSS |
| Quality | 2,700+ automated app tests, database tests, GitHub Actions CI |

## How it is built

- **The server decides what costs money.** Allowances, membership and every AI call are checked in the database and edge functions, never trusted from the phone.
- **Long work is a database row, not a waiting screen.** A reading or a look is a job with a state; it finishes on the server even if the app is closed, and the app follows it in real time.
- **Settings live in the database.** Prompts, limits and feature switches change without a new app release.
- **Privacy is part of the structure.** Consent is recorded per version of the policy, photos are private files, and deletion and export are built-in jobs.
- **Scale of the work:** 20+ edge functions, 200+ database migrations, one design system shared by every screen.

## Links

**The product**
- Website: https://www.nalvs.app
- Google Play: https://play.google.com/store/apps/details?id=com.shopalabeauty.eclat
- App Store: https://apps.apple.com/app/id6815952567 (opens once Apple approves the app)
- Privacy policy: https://www.nalvs.app/privacy-policy
- Terms: https://www.nalvs.app/terms-conditions

**The technologies**
- Flutter: https://flutter.dev
- Riverpod: https://riverpod.dev
- Supabase: https://supabase.com
- Anthropic Claude: https://www.anthropic.com/claude
- Deepgram: https://deepgram.com
- Google Cloud Run: https://cloud.google.com/run
- RevenueCat: https://www.revenuecat.com
- Firebase: https://firebase.google.com
- AppsFlyer: https://www.appsflyer.com
- Vue: https://vuejs.org
