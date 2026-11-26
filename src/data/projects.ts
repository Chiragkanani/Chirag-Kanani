import arusuvaiHero from "@/assets/projects/arusuvai-hero.jpg";
import arusuvaiMenu from "@/assets/projects/arusuvai-menu.jpg";
import arusuvaiSubscriptions from "@/assets/projects/arusuvai-subscriptions.jpg";
import arusuvaiCatering from "@/assets/projects/arusuvai-catering.jpg";
import arusuvaiContact from "@/assets/projects/arusuvai-contact.jpg";
import willwolfMarketingHomepage from "@/assets/projects/willwolf-marketing-homepage.png";
import willwolfMobileAppSuite from "@/assets/projects/willwolf-mobile-app-suite.png";
import willwolfRealEstateForm from "@/assets/projects/willwolf-real-estate-form.png";
import willwolfAdminDashboard from "@/assets/projects/willwolf-admin-dashboard.png";
import nalvsHome from "@/assets/projects/nalvs-home.webp";
import nalvsBeautyPassport from "@/assets/projects/nalvs-beauty-passport.webp";
import nalvsMembership from "@/assets/projects/nalvs-membership.webp";
import nalvsAdminOverview from "@/assets/projects/nalvs-admin-overview.png";
import nalvsMarketingHome from "@/assets/projects/nalvs-marketing-home.png";
import activikidPlatform from "@/assets/projects/activikid-platform-overview.jpg";
import activikidPersonalizedActivities from "@/assets/projects/activikid-personalized-activities.png";
import activikidBookingPlatform from "@/assets/projects/activikid-booking-platform.png";
import activikidMerchantPanel from "@/assets/projects/activikid-merchant-panel.png";
import activikidAiReport from "@/assets/projects/activikid-ai-report.webp";
import activikidTailoredClasses from "@/assets/projects/activikid-tailored-classes.webp";
import activikidMemberDashboard from "@/assets/projects/activikid-member-dashboard.webp";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  label: string;
  caption: string;
  surface?: "Website" | "Member app" | "Mobile app" | "Admin panel";
  orientation?: "portrait" | "landscape" | "square" | "collage";
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  slug: string;
  tier: "featured" | "additional";
  number: string;
  name: string;
  category: string;
  type: string;
  domainLabel?: string;
  summary: string;
  overview: string;
  purpose: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  screenshots: ProjectScreenshot[];
  links?: ProjectLink[];
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "arusuvai-cloud-kitchen",
    tier: "featured",
    number: "01",
    name: "Arusuvai Cloud Kitchen",
    category: "Business Website · Frontend Development",
    type: "Responsive business storefront",
    domainLabel: "arusuvai-cloudkitchen.netlify.app",
    summary:
      "A digital storefront for a South Indian cloud kitchen in Saligramam, Chennai—bringing daily menus, meal subscriptions, catering services, and WhatsApp-led customer enquiries together.",
    overview:
      "Built as a conversion-focused business website for Arusuvai Cloud Kitchen, presenting homemade South Indian tiffin, meals, recurring subscription plans, and event catering in a clear, mobile-ready layout.",
    purpose:
      "Present the kitchen's daily offerings, subscription options, and catering capabilities in one structured storefront, then guide visitors smoothly toward placing an order or sending a direct enquiry.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive UI"],
    features: [
      "Category-filtered menu (Breakfast, Lunch, Dinner, Special) with order cart controls",
      "Weekly, monthly, and corporate office meal subscription comparison",
      "Corporate, wedding, and bulk event catering showcase",
      "Kitchen story, preparation process, customer testimonials, and FAQ accordion",
      "Direct WhatsApp ordering and structured enquiry form",
    ],
    highlights: [
      "Structured section hierarchy tailored around how customers evaluate daily meals, subscriptions, and bulk catering.",
      "Responsive layout and typography tuned across desktop, tablet, and mobile viewports.",
      "Interactive frontend flows for menu category switching, cart selection, FAQ toggles, and WhatsApp enquiry handoff.",
    ],
    screenshots: [
      {
        src: arusuvaiHero,
        alt: "Arusuvai Cloud Kitchen landing hero showing navigation, value proposition, and Order Now / View Menu actions",
        label: "Landing Hero",
        caption: "Hero introduction with direct Order Now and View Menu navigation.",
        surface: "Website",
      },
      {
        src: arusuvaiMenu,
        alt: "Arusuvai interactive menu section with Breakfast, Lunch, Dinner, and Special category tabs and dish cards",
        label: "Menu & Cart",
        caption: "Tabbed meal categories with dish descriptions and cart selection controls.",
        surface: "Website",
      },
      {
        src: arusuvaiSubscriptions,
        alt: "Arusuvai meal subscriptions section comparing Weekly Meals, Monthly Meals, and Office Lunch plans",
        label: "Subscriptions",
        caption: "Recurring meal plan comparison highlighting popular monthly and office lunch options.",
        surface: "Website",
      },
      {
        src: arusuvaiCatering,
        alt: "Arusuvai corporate and event catering section listing office lunch, weddings, house functions, and bulk orders",
        label: "Catering Services",
        caption: "Service breakdown for corporate events, weddings, family functions, and bulk orders.",
        surface: "Website",
      },
      {
        src: arusuvaiContact,
        alt: "Arusuvai contact and enquiry section with kitchen hours, WhatsApp button, and structured enquiry form",
        label: "Enquiry Flow",
        caption: "Kitchen contact details paired with WhatsApp handoff and an event/subscription enquiry form.",
        surface: "Website",
      },
    ],
    liveUrl: "https://arusuvai-cloudkitchen.netlify.app/",
  },
  {
    slug: "willwolf",
    tier: "featured",
    number: "02",
    name: "WillWolf",
    category: "Digital Estate Planning · Full-Stack Development",
    type: "Bilingual digital estate platform",
    domainLabel: "willwolf.in",
    summary:
      "A zero-knowledge digital estate vault and will platform for Indian families. Vault data is encrypted on the user's device, and the master password is never sent to or stored in the database.",
    overview:
      "Built end to end across the public product website, Vue.js member PWA, admin console, and Laravel backend backed by PostgreSQL. Its zero-knowledge design encrypts vault contents in the browser before they reach the service; the master password is neither transmitted nor stored in the database, and the server holds no key to decrypt the vault. Members can record assets and documents, define beneficiaries and related roles, and generate wills.",
    purpose:
      "Help families organize estate information and make it available to the right people through a clear, privacy-focused process.",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Razorpay", "Progressive Web App", "Zero-knowledge encryption"],
    features: [
      "Razorpay integration for payment processing",
      "Seven asset categories with category-specific fields and document uploads",
      "Beneficiaries with per-asset allocations, plus executor, guardian, and witness roles",
      "Guided will generation from recorded estate information",
      "Zero-knowledge vault encryption: sensitive records are encrypted in the browser, and the service holds no decryption key",
      "The master password is never sent to the server or stored in the database",
      "Beneficiaries get owner-approved early access or claim access with a verified death certificate",
      "DigiLocker identity verification, OTP checks, and security activity history",
      "English and Hindi, with an installable member web app",
    ],
    highlights: [
      "Built the zero-knowledge encryption flow so vault data is encrypted on the user's device before transmission; the master password is never sent to or stored in the database.",
      "Integrated Razorpay for payment processing.",
      "Built the public product site, member PWA, admin console, Laravel backend, and PostgreSQL data layer.",
      "Connected estate recordkeeping, will generation, administrative review, and beneficiary access into one product workflow.",
      "Implemented structured records for seven asset categories and multiple will-related roles.",
    ],
    screenshots: [
      {
        src: willwolfMarketingHomepage,
        alt: "WillWolf marketing homepage with navigation, a family-focused estate-planning headline, and digital will calls to action",
        label: "Marketing Homepage",
        caption: "The public website presents WillWolf's estate-planning service and its privacy-first message.",
        surface: "Website",
        orientation: "landscape",
      },
      {
        src: willwolfMobileAppSuite,
        alt: "Three WillWolf mobile app screens showing the member dashboard, profile setup, and will-generation readiness",
        label: "Mobile App Screens",
        caption: "A side-by-side look at the member dashboard, profile setup, and will-generation experience.",
        surface: "Member app",
        orientation: "collage",
      },
      {
        src: willwolfRealEstateForm,
        alt: "WillWolf member app showing a guided real-estate asset form with property details and a multi-step progress indicator",
        label: "Real Estate Asset Form",
        caption: "A guided form for adding property details to the member's asset vault.",
        surface: "Member app",
        orientation: "landscape",
      },
      {
        src: willwolfAdminDashboard,
        alt: "WillWolf admin dashboard showing platform metrics, date filters, and user activity charts",
        label: "Admin Dashboard",
        caption: "An administrative overview for monitoring platform activity and membership metrics.",
        surface: "Admin panel",
        orientation: "landscape",
      },
    ],
    links: [
      { label: "Public website", url: "https://willwolf.in/" },
      { label: "Member app sign-in", url: "https://app.willwolf.in/login" },
      { label: "Admin console sign-in", url: "https://admin.willwolf.in/login?redirect=/" },
    ],
    liveUrl: "https://willwolf.in/",
  },
  {
    slug: "nalvs",
    tier: "featured",
    number: "03",
    name: "NALVS",
    category: "AI Beauty Platform · Mobile App Development",
    type: "AI-powered beauty consultant",
    domainLabel: "nalvs.app",
    summary:
      "A personalized AI beauty platform presented as a mobile experience, Beauty Passport, and virtual try-on system.",
    overview:
      "I built the Flutter mobile app for Android and iOS, its backend, and a Vue 3 admin panel. Consent-based selfie analysis powers a versioned Beauty Passport, personalized recommendations, AI consultations, and virtual try-on. The App Store listing is currently in review.",
    purpose:
      "Help people make more confident makeup choices using their features, preferences, and the products they own.",
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Supabase",
      "PostgreSQL",
      "Claude AI",
      "Deepgram",
      "RevenueCat",
      "Vue 3 Admin",
      "Google Cloud Run",
    ],
    features: [
      "Consent-based, versioned Beauty Passport built from selfie analysis",
      "Lip Studio with lipstick try-on, edge and finish controls, and saved looks",
      "Look Builder for full makeup looks using catalogue or owned products",
      "AI Consult for text, voice, or photo questions with product recommendations",
      "Weather-aware daily looks, personal Makeup Bag, and country-specific shopping links",
      "Monthly memberships with App Store and Google Play billing",
      "Privacy controls for selfie consent, data export, account deletion, and photo cleanup",
      "Vue 3 admin panel for users, roles, product imports, memberships, and reports",
    ],
    highlights: [
      "Built the product end to end: Flutter mobile app, backend services, and Vue 3 admin panel.",
      "Integrated face analysis, AI, image processing, memberships, and mobile-store billing.",
      "Enforced plan allowances and AI usage limits server-side rather than trusting the mobile client.",
      "Ran longer analysis and look-generation tasks as persistent backend jobs with real-time progress updates.",
      "Added privacy workflows for selfie consent, data export, account deletion, and inactive-photo cleanup.",
      "Delivered 2,700+ automated app and database tests with GitHub Actions CI.",
    ],
    screenshots: [
      {
        src: nalvsMarketingHome,
        alt: "NALVS marketing homepage with the headline Stop Guessing What Looks Good on You and a mobile app preview",
        label: "Marketing Preview",
        caption: "The landing page introduces NALVS as a personalized beauty consultant.",
        surface: "Website",
        orientation: "landscape",
      },
      {
        src: nalvsHome,
        alt: "NALVS mobile app welcome screen featuring a personalized Beauty Passport and today's look",
        label: "Beauty Home",
        caption: "A personalized home screen centered on the user's Beauty Passport.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: nalvsBeautyPassport,
        alt: "NALVS Beauty Passport screen summarizing skin tone, undertone, contrast, eye shape, and hair type",
        label: "Beauty Passport",
        caption: "A versioned profile turns selfie analysis into readable beauty guidance.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: nalvsMembership,
        alt: "NALVS membership screen comparing monthly and annual plans with included beauty allowances",
        label: "Membership",
        caption: "Membership plans explain the monthly allowances available to each user.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: nalvsAdminOverview,
        alt: "NALVS Admin overview showing catalogue totals, reporting metrics, and administrator role",
        label: "Admin Overview",
        caption: "The web admin panel provides catalogue, report, and administrator-management views.",
        surface: "Admin panel",
        orientation: "landscape",
      },
    ],
    links: [
      { label: "Website", url: "https://www.nalvs.app" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.shopalabeauty.eclat" },
      { label: "App Store (in review)", url: "https://apps.apple.com/app/id6815952567" },
      { label: "Admin panel", url: "https://navls-admin.pages.dev/" },
    ],
    liveUrl: "https://www.nalvs.app",
  },
  {
    slug: "activikid",
    tier: "featured",
    number: "04",
    name: "Teach and Learn ActiviKid",
    category: "Family Activities Marketplace · Full-Stack Development",
    type: "Kids' activity booking platform",
    domainLabel: "activikid.hk",
    summary:
      "A Hong Kong kids' activity marketplace helping parents discover and book classes, manage prepaid credits, and find activities matched to each child's interests and development goals.",
    overview:
      "Built a multi-sided platform spanning an Ionic mobile app for parents, a Laravel REST API, a Vue merchant portal, and a Vue admin panel. Parents discover activities, manage child profiles, and book with credits; providers manage listings and schedules while operators run the marketplace.",
    purpose:
      "Make it easier for families to find and book enriching activities while giving providers and platform operators practical tools to manage the experience.",
    technologies: [
      "Laravel 11",
      "PHP 8.3",
      "MySQL",
      "Vue 3",
      "Ionic 8",
      "Capacitor 7",
      "TypeScript",
      "Yedpay",
      "Firebase",
    ],
    features: [
      "Personalized activity recommendations based on each child's interests and growth goals",
      "AI-generated development reports with personalized recommendations for next steps",
      "Multiple child profiles with preferences, age, school, budget, and location",
      "Activity discovery with filters for category, age, district, format, language, and credits",
      "Activity pages with media, schedules, reviews, and saved places",
      "Prepaid credits wallet with Yedpay payments, coupons, and transaction history",
      "Booking, rescheduling, cancellations, credit refunds, and post-class reviews",
      "Merchant portal for activity listings, schedules, bookings, staff, and approvals",
      "Admin panel for members, merchants, catalogue, commerce, campaigns, and access roles",
      "English and Traditional Chinese, with push, email, and SMS notifications",
    ],
    highlights: [
      "Built the member app, REST API, merchant portal, and admin panel as one connected marketplace.",
      "Implemented Yedpay checkout with webhook and status-sync handling so purchased credits are applied once.",
      "Created an expiry-aware credit ledger for bookings, cancellations, refunds, and plan expiry.",
      "Designed role-based access and lifecycle workflows for members, merchants, staff, and admins.",
      "Delivered a bilingual app backed by approximately 400 API endpoints and 90 database tables.",
    ],
    screenshots: [
      {
        src: activikidPlatform,
        alt: "ActiviKid promotional graphic showing the mobile app onboarding screen and one-platform activity coordination message",
        label: "App Onboarding",
        caption: "The public site introduces ActiviKid's unified activity-discovery and booking experience.",
        surface: "Mobile app",
        orientation: "square",
      },
      {
        src: activikidPersonalizedActivities,
        alt: "ActiviKid child profile screen with preferences and upcoming activities",
        label: "Personalized Activities",
        caption: "Child profiles and recommendations help families find activities that fit.",
        surface: "Mobile app",
        orientation: "square",
      },
      {
        src: activikidBookingPlatform,
        alt: "ActiviKid mobile activity schedule with upcoming classes and booking controls",
        label: "Activity Booking",
        caption: "The app brings schedules and activity bookings together in one view.",
        surface: "Mobile app",
        orientation: "square",
      },
      {
        src: activikidAiReport,
        alt: "ActiviKid mobile app promotional screen showing an AI-powered child development report",
        label: "AI Development Report",
        caption: "AI-powered reports summarize a child's development and suggest personalized next steps.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: activikidTailoredClasses,
        alt: "ActiviKid promotional screen showing classes tailored to a child's profile",
        label: "Tailored Classes",
        caption: "Class recommendations are tailored to each child's profile and interests.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: activikidMemberDashboard,
        alt: "ActiviKid mobile app promotional screen showing its all-in-one dashboard and activity reports",
        label: "Member Dashboard",
        caption: "Families can review activities and development insights from one dashboard.",
        surface: "Mobile app",
        orientation: "portrait",
      },
      {
        src: activikidMerchantPanel,
        alt: "ActiviKid admin panel displaying merchant records and account statuses",
        label: "Admin Panel",
        caption: "The admin panel gives operators an overview of registered merchants and their statuses.",
        surface: "Admin panel",
        orientation: "landscape",
      },
    ],
    links: [
      { label: "Public website", url: "https://activikid.hk/" },
      { label: "Merchant login", url: "https://partner.activikid.hk/partner-login" },
    ],
    liveUrl: "https://activikid.hk/",
  },
];
