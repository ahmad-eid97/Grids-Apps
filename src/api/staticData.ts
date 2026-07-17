/**
 * Static bilingual (EN / AR) data for portfolio showcase.
 * All API calls are replaced by these functions — backend is offline.
 */
import type {
  ITopic,
  IContactData,
  IWebsiteSocial,
  IWebsiteMetadata,
  SectionsResponse,
} from "@/types";

type Locale = "en" | "ar";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function makeTopic(
  overrides: Partial<ITopic> & { id: number; title: string; details: string },
): ITopic {
  return {
    date: "2024-01-15",
    video_type: null,
    video_file: "",
    photo_file: null,
    audio_file: null,
    icon: null,
    visits: "0",
    href: "",
    fields_count: 0,
    fields: [],
    Joined_categories_count: 0,
    Joined_categories: [],
    user: { id: 1, name: "GridsApps", href: "" },
    ...overrides,
  };
}

function makeSection(
  section_title: string,
  topics: ITopic[],
): SectionsResponse {
  return { section_title, topics };
}

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
const services_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Web Development",
    details:
      "We craft modern, high-performance web applications using React, Next.js and Node.js. From landing pages to complex enterprise portals, we turn your vision into a fast, scalable digital product.",
    photo_file: "/imgs/services/service-1.png",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "Mobile App Development",
    details:
      "Our cross-platform mobile solutions cover iOS and Android using React Native and Flutter. Smooth UX, offline support and seamless API integration so your users get the best experience on any device.",
    photo_file: "/imgs/services/service-2.png",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "E-commerce Solutions",
    details:
      "End-to-end e-commerce development with custom storefronts, inventory management, payment gateway integrations and logistics tracking. We help businesses sell online efficiently and securely.",
    photo_file: "/imgs/services/service-3.png",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "PWA & Desktop Apps",
    details:
      "Progressive Web Apps that feel native on any platform plus Electron-based desktop applications. Get the reach of the web with the power of native apps — offline capabilities, push notifications and app-store distribution.",
    photo_file: "/imgs/services/service-4.png",
    fields: [],
  }),
];

const services_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "تطوير مواقع الويب",
    details:
      "نبني تطبيقات ويب حديثة وعالية الأداء باستخدام React وNext.js وNode.js. من صفحات الهبوط إلى بوابات المؤسسات المعقدة، نحوّل رؤيتك إلى منتج رقمي سريع وقابل للتوسع.",
    photo_file: "/imgs/services/service-1.png",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "تطوير تطبيقات الجوال",
    details:
      "حلولنا للتطبيقات متعددة المنصات تغطي iOS وAndroid باستخدام React Native وFlutter. تجربة مستخدم سلسة ودعم للعمل دون اتصال وتكامل سلس مع واجهات برمجة التطبيقات.",
    photo_file: "/imgs/services/service-2.png",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "حلول التجارة الإلكترونية",
    details:
      "تطوير متكامل للتجارة الإلكترونية يشمل واجهات متجر مخصصة وإدارة المخزون وتكامل بوابات الدفع وتتبع الشحن. نساعد الشركات على البيع عبر الإنترنت بكفاءة وأمان.",
    photo_file: "/imgs/services/service-3.png",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "تطبيقات PWA وسطح المكتب",
    details:
      "تطبيقات الويب التقدمية (PWA) التي تعمل بأداء التطبيقات الأصلية على أي منصة، إضافة إلى تطبيقات سطح المكتب المبنية على Electron. اجمع بين انتشار الويب وقوة التطبيقات الأصلية.",
    photo_file: "/imgs/services/service-4.png",
    fields: [],
  }),
];

export function getStaticServices(locale: Locale): SectionsResponse {
  return makeSection(
    locale === "ar" ? "الخدمات" : "Services",
    locale === "ar" ? services_ar : services_en,
  );
}

// ---------------------------------------------------------------------------
// SOLUTIONS (Discover section)
// ---------------------------------------------------------------------------
const solutions_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Mobile Applications",
    details: "iOS & Android apps built with React Native and Flutter.",
    photo_file: "carbon:application-mobile",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "Web Applications",
    details: "Modern SPAs and full-stack web apps.",
    photo_file: "carbon:application-web",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "Cloud Solutions",
    details: "AWS & Azure powered cloud architectures.",
    photo_file: "carbon:cloud-app",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "Desktop Applications",
    details: "Cross-platform Electron desktop apps.",
    photo_file: "hugeicons:computer",
    fields: [],
  }),
];
const solutions_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "تطبيقات الجوال",
    details: "تطبيقات iOS وAndroid مبنية بـ React Native وFlutter.",
    photo_file: "carbon:application-mobile",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "مواقع وتطبيقات الويب",
    details: "تطبيقات ويب حديثة ومتكاملة.",
    photo_file: "carbon:application-web",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "الحلول السحابية",
    details: "بنى تحتية سحابية مدعومة بـ AWS وAzure.",
    photo_file: "carbon:cloud-app",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "تطبيقات سطح المكتب",
    details: "تطبيقات متعددة المنصات باستخدام Electron.",
    photo_file: "hugeicons:computer",
    fields: [],
  }),
];

export function getStaticSolutions(locale: Locale): SectionsResponse {
  return makeSection(
    "solutions",
    locale === "ar" ? solutions_ar : solutions_en,
  );
}

// ---------------------------------------------------------------------------
// PROCESS STEPS
// ---------------------------------------------------------------------------
const steps_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Discovery & Planning",
    details:
      "We start by understanding your business goals, target audience and technical requirements. A detailed project roadmap and timeline is then agreed upon with your team.",
    photo_file: "/imgs/process/process-1.png",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "UI/UX Design",
    details:
      "Our designers create wireframes and high-fidelity mockups in Figma. We iterate with you until every screen feels intuitive and on-brand before writing a single line of code.",
    photo_file: "/imgs/process/process-2.png",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "Development",
    details:
      "Agile sprints ensure continuous delivery. We use TypeScript, React, Next.js, Node.js and PostgreSQL for robust, maintainable codebases with comprehensive unit and integration tests.",
    photo_file: "/imgs/process/process-3.png",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "Quality Assurance",
    details:
      "Rigorous manual and automated testing — functional, performance, security and accessibility checks — ensures your product is production-ready before launch.",
    photo_file: "/imgs/process/process-4.png",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "Launch & Deployment",
    details:
      "We handle CI/CD pipelines, Docker containerization and cloud deployment so you go live with zero downtime. Domain configuration, SSL and monitoring are all included.",
    photo_file: "/imgs/process/process-5.png",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "Support & Growth",
    details:
      "Post-launch we provide proactive monitoring, regular security updates and feature enhancements. Our SLA guarantees mean your digital product stays healthy and competitive.",
    photo_file: "/imgs/process/process-6.png",
    fields: [],
  }),
];
const steps_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "الاستكشاف والتخطيط",
    details:
      "نبدأ بفهم أهدافك التجارية وجمهورك المستهدف ومتطلباتك التقنية، ثم نضع خارطة طريق تفصيلية للمشروع يوافق عليها فريقك.",
    photo_file: "/imgs/process/process-1.png",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "تصميم UI/UX",
    details:
      "يصمم مصممونا الإطارات السلكية والنماذج الأولية عالية الدقة في Figma، ونتكرر معك حتى تكون كل شاشة سهلة الاستخدام وتعكس هوية علامتك التجارية.",
    photo_file: "/imgs/process/process-2.png",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "التطوير",
    details:
      "تضمن السباقات الرشيقة التسليم المستمر. نستخدم TypeScript وReact وNext.js وNode.js وPostgreSQL لبناء قواعد كود قوية وقابلة للصيانة.",
    photo_file: "/imgs/process/process-3.png",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "ضمان الجودة",
    details:
      "اختبار يدوي وآلي صارم — وظيفي وأداء وأمان وإمكانية الوصول — يضمن جاهزية منتجك للإنتاج قبل الإطلاق.",
    photo_file: "/imgs/process/process-4.png",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "الإطلاق والنشر",
    details:
      "نتولى إعداد خطوط CI/CD وحاويات Docker والنشر السحابي لضمان الإطلاق بدون توقف. تشمل الخدمة إعداد النطاق وشهادة SSL والمراقبة.",
    photo_file: "/imgs/process/process-5.png",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "الدعم والنمو",
    details:
      "بعد الإطلاق نقدم مراقبة استباقية وتحديثات أمنية منتظمة وتحسينات على الميزات. ضمانات مستوى الخدمة (SLA) تضمن بقاء منتجك الرقمي قوياً وتنافسياً.",
    photo_file: "/imgs/process/process-6.png",
    fields: [],
  }),
];

export function getStaticSteps(locale: Locale): SectionsResponse {
  return makeSection("steps", locale === "ar" ? steps_ar : steps_en);
}

// ---------------------------------------------------------------------------
// ACTIVITIES / PWA FEATURES
// ---------------------------------------------------------------------------
const activities_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Offline Support",
    details:
      "Service workers ensure your app works even without an internet connection.",
    photo_file: "/imgs/activites/activity-1.svg",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "Push Notifications",
    details:
      "Re-engage users with timely, personalised push notifications on any platform.",
    photo_file: "/imgs/activites/activity-2.svg",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "Fast Loading",
    details:
      "Optimised asset loading and caching deliver sub-second load times worldwide.",
    photo_file: "/imgs/activites/activity-3.svg",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "Installable",
    details:
      "Users can add your PWA to their home screen for a native app-like experience.",
    photo_file: "/imgs/activites/activity-4.svg",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "Secure by Default",
    details:
      "HTTPS, content security policies and OWASP best practices baked in from day one.",
    photo_file: "/imgs/activites/activity-5.svg",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "Responsive Design",
    details:
      "Every pixel adapts perfectly from 320 px phones to 4K ultra-wide displays.",
    photo_file: "/imgs/activites/activity-6.svg",
    fields: [],
  }),
  makeTopic({
    id: 7,
    title: "App Store Ready",
    details:
      "We package your PWA for Google Play and Apple App Store distribution.",
    photo_file: "/imgs/activites/activity-7.svg",
    fields: [],
  }),
  makeTopic({
    id: 8,
    title: "Analytics & Insights",
    details:
      "Built-in analytics track user behaviour so you can make data-driven decisions.",
    photo_file: "/imgs/activites/activity-8.svg",
    fields: [],
  }),
];
const activities_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "الدعم دون اتصال",
    details:
      "تضمن عمال الخدمة (Service Workers) عمل تطبيقك حتى بدون اتصال بالإنترنت.",
    photo_file: "/imgs/activites/activity-1.svg",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "الإشعارات الفورية",
    details:
      "أعد إشراك المستخدمين بإشعارات فورية مخصصة وفي الوقت المناسب على أي منصة.",
    photo_file: "/imgs/activites/activity-2.svg",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "تحميل سريع",
    details:
      "تحميل الأصول المحسّن والتخزين المؤقت يوفران أوقات تحميل أقل من ثانية في جميع أنحاء العالم.",
    photo_file: "/imgs/activites/activity-3.svg",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "قابل للتثبيت",
    details:
      "يمكن للمستخدمين إضافة تطبيق PWA الخاص بك إلى الشاشة الرئيسية للحصول على تجربة مشابهة للتطبيقات الأصلية.",
    photo_file: "/imgs/activites/activity-4.svg",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "آمن بشكل افتراضي",
    details:
      "HTTPS وسياسات أمن المحتوى وأفضل ممارسات OWASP مدمجة منذ اليوم الأول.",
    photo_file: "/imgs/activites/activity-5.svg",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "تصميم متجاوب",
    details:
      "كل بكسل يتكيف بشكل مثالي من الهواتف بعرض 320 بكسل حتى الشاشات فائقة العرض 4K.",
    photo_file: "/imgs/activites/activity-6.svg",
    fields: [],
  }),
  makeTopic({
    id: 7,
    title: "جاهز لمتاجر التطبيقات",
    details:
      "نحزّم تطبيق PWA الخاص بك لتوزيعه عبر Google Play وApple App Store.",
    photo_file: "/imgs/activites/activity-7.svg",
    fields: [],
  }),
  makeTopic({
    id: 8,
    title: "التحليلات والرؤى",
    details:
      "التحليلات المدمجة تتبع سلوك المستخدمين حتى تتمكن من اتخاذ قرارات مبنية على البيانات.",
    photo_file: "/imgs/activites/activity-8.svg",
    fields: [],
  }),
];

export function getStaticActivities(locale: Locale): SectionsResponse {
  return makeSection(
    "PWAFeatures",
    locale === "ar" ? activities_ar : activities_en,
  );
}

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
const testimonials_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Sarah Mitchell",
    details:
      "GridsApps transformed our outdated website into a blazing-fast Next.js app. The team was professional, communicative and delivered ahead of schedule. Our conversion rate jumped 40% in the first month.",
    photo_file: "/imgs/testimonials/user1.png",
    fields: [{ title: "Position", value: "CEO, TechNova Ltd." }],
  }),
  makeTopic({
    id: 2,
    title: "Khalid Al-Rashid",
    details:
      "We hired GridsApps to build our e-commerce mobile app. The React Native solution they delivered works flawlessly on both iOS and Android. Customer reviews have been overwhelmingly positive.",
    photo_file: "/imgs/testimonials/user2.png",
    fields: [{ title: "Position", value: "Founder, Souq Digital" }],
  }),
  makeTopic({
    id: 3,
    title: "Nadia Bergstrom",
    details:
      "Exceptional work on our SaaS dashboard. GridsApps understood our complex data visualisation needs and built a clean, intuitive interface. The codebase is well-structured and easy to maintain.",
    photo_file: "/imgs/testimonials/user3.png",
    fields: [{ title: "Position", value: "CTO, DataFlow AB" }],
  }),
  makeTopic({
    id: 4,
    title: "Omar Hantash",
    details:
      "From discovery to launch in eight weeks — GridsApps delivered a PWA for our logistics company that cut order processing time by 60%. Highly recommended for any complex web project.",
    photo_file: "/imgs/testimonials/user1.png",
    fields: [{ title: "Position", value: "Operations Director, FastRoute" }],
  }),
];
const testimonials_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "سارة ميتشل",
    details:
      "حوّلت جريدز أبس موقعنا القديم إلى تطبيق Next.js فائق السرعة. الفريق كان محترفاً ومتواصلاً وسلّم المشروع قبل الموعد المحدد. ارتفع معدل التحويل لدينا بنسبة 40% في الشهر الأول.",
    photo_file: "/imgs/testimonials/user1.png",
    fields: [{ title: "المنصب", value: "رئيسة تنفيذية، شركة تك نوفا" }],
  }),
  makeTopic({
    id: 2,
    title: "خالد الراشد",
    details:
      "استأجرنا جريدز أبس لبناء تطبيق الجوال للتجارة الإلكترونية. حل React Native الذي قدموه يعمل بشكل مثالي على iOS وAndroid. آراء العملاء كانت إيجابية بشكل ساحق.",
    photo_file: "/imgs/testimonials/user2.png",
    fields: [{ title: "المنصب", value: "مؤسس، سوق ديجيتال" }],
  }),
  makeTopic({
    id: 3,
    title: "ناديا بيرغستروم",
    details:
      "عمل استثنائي على لوحة تحكم SaaS الخاصة بنا. فهمت جريدز أبس احتياجاتنا المعقدة لتصور البيانات وبنت واجهة نظيفة وبديهية. قاعدة الكود منظمة جيداً وسهلة الصيانة.",
    photo_file: "/imgs/testimonials/user3.png",
    fields: [{ title: "المنصب", value: "مديرة التكنولوجيا، داتا فلو" }],
  }),
  makeTopic({
    id: 4,
    title: "عمر حنتش",
    details:
      "من الاستكشاف إلى الإطلاق في ثمانية أسابيع — سلّمت جريدز أبس تطبيق PWA لشركة اللوجستيك لدينا قلّص وقت معالجة الطلبات بنسبة 60%. أوصي بهم بشدة لأي مشروع ويب معقد.",
    photo_file: "/imgs/testimonials/user1.png",
    fields: [{ title: "المنصب", value: "مدير العمليات، فاست روت" }],
  }),
];

export function getStaticTestimonials(locale: Locale): SectionsResponse {
  return makeSection(
    "Testimonials",
    locale === "ar" ? testimonials_ar : testimonials_en,
  );
}

// ---------------------------------------------------------------------------
// PLATFORMS
// ---------------------------------------------------------------------------
const platforms_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "PWA",
    details: "Progressive Web Apps",
    photo_file: null,
    fields: [{ title: "Percentage", value: "90" }],
  }),
  makeTopic({
    id: 2,
    title: "Websites",
    details: "Web Applications",
    photo_file: null,
    fields: [{ title: "Percentage", value: "95" }],
  }),
  makeTopic({
    id: 3,
    title: "Android",
    details: "Android Apps",
    photo_file: null,
    fields: [{ title: "Percentage", value: "92" }],
  }),
  makeTopic({
    id: 4,
    title: "iOS",
    details: "iOS Apps",
    photo_file: null,
    fields: [{ title: "Percentage", value: "85" }],
  }),
  makeTopic({
    id: 5,
    title: "Desktop",
    details: "Desktop Applications",
    photo_file: null,
    fields: [{ title: "Percentage", value: "89" }],
  }),
];
const platforms_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "تطبيقات PWA",
    details: "تطبيقات الويب التقدمية",
    photo_file: null,
    fields: [{ title: "النسبة", value: "90" }],
  }),
  makeTopic({
    id: 2,
    title: "مواقع الويب",
    details: "تطبيقات الويب",
    photo_file: null,
    fields: [{ title: "النسبة", value: "95" }],
  }),
  makeTopic({
    id: 3,
    title: "أندرويد",
    details: "تطبيقات أندرويد",
    photo_file: null,
    fields: [{ title: "النسبة", value: "92" }],
  }),
  makeTopic({
    id: 4,
    title: "iOS",
    details: "تطبيقات iOS",
    photo_file: null,
    fields: [{ title: "النسبة", value: "85" }],
  }),
  makeTopic({
    id: 5,
    title: "سطح المكتب",
    details: "تطبيقات سطح المكتب",
    photo_file: null,
    fields: [{ title: "النسبة", value: "89" }],
  }),
];

export function getStaticPlatforms(locale: Locale): SectionsResponse {
  return makeSection(
    "Platforms",
    locale === "ar" ? platforms_ar : platforms_en,
  );
}

// ---------------------------------------------------------------------------
// VIDEO
// ---------------------------------------------------------------------------
export function getStaticVideo(_locale: Locale): SectionsResponse {
  return makeSection("Faqs Video", [
    makeTopic({
      id: 1,
      title: "GridsApps Showcase",
      details: "",
      video_file: "L61p2uyiMSo",
      photo_file: "/imgs/video-section-background.png",
      fields: [],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// BRIEF PROJECTS (client logos marquee)
// ---------------------------------------------------------------------------
export function getStaticBriefProjects(_locale: Locale): SectionsResponse {
  return makeSection("Prief Projects", [
    makeTopic({
      id: 1,
      title: "TechNova",
      details: "",
      photo_file: "/imgs/clients/client-1.png",
      fields: [],
    }),
    makeTopic({
      id: 2,
      title: "Souq Digital",
      details: "",
      photo_file: "/imgs/clients/client-2.png",
      fields: [],
    }),
    makeTopic({
      id: 3,
      title: "DataFlow",
      details: "",
      photo_file: "/imgs/clients/client-3.png",
      fields: [],
    }),
    makeTopic({
      id: 4,
      title: "FastRoute",
      details: "",
      photo_file: "/imgs/clients/client-4.png",
      fields: [],
    }),
    makeTopic({
      id: 5,
      title: "TechNova",
      details: "",
      photo_file: "/imgs/clients/client-1.png",
      fields: [],
    }),
    makeTopic({
      id: 6,
      title: "Souq Digital",
      details: "",
      photo_file: "/imgs/clients/client-2.png",
      fields: [],
    }),
    makeTopic({
      id: 7,
      title: "DataFlow",
      details: "",
      photo_file: "/imgs/clients/client-3.png",
      fields: [],
    }),
    makeTopic({
      id: 8,
      title: "FastRoute",
      details: "",
      photo_file: "/imgs/clients/client-4.png",
      fields: [],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// TEAM
// ---------------------------------------------------------------------------
const team_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Hassan Ali",
    details: "Frontend Developer",
    photo_file: "/imgs/team/team-1.jpg",
    fields: [
      { title: "Position", value: "Frontend Developer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 2,
    title: "Ahmed Kholy",
    details: "Backend Engineer",
    photo_file: "/imgs/team/team-2.jpg",
    fields: [
      { title: "Position", value: "Backend Engineer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 3,
    title: "Ahmad Eid",
    details: "Frontend Developer",
    photo_file: "/imgs/team/team-3.jpg",
    fields: [
      { title: "Position", value: "Frontend Developer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 4,
    title: "Mahmoud AbdelMageed",
    details: "Mobile Developer",
    photo_file: "/imgs/team/team-4.jpg",
    fields: [
      { title: "Position", value: "Mobile Developer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 5,
    title: "Sara Ahmad",
    details: "Full-Stack Developer",
    photo_file: "",
    fields: [
      { title: "Position", value: "Full-Stack Developer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 6,
    title: "Yousef Nasser",
    details: "DevOps Engineer",
    photo_file: "/imgs/team/team-2.jpg",
    fields: [
      { title: "Position", value: "DevOps Engineer" },
      { title: "LinkedIn", value: "https://linkedin.com" },
    ],
  }),
];
const team_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "حسن علي",
    details: "مطور واجهات أمامية رئيسي",
    photo_file: "/imgs/team/team-1.jpg",
    fields: [
      { title: "المنصب", value: "مطور واجهات أمامية رئيسي" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 2,
    title: "أحمد خولي",
    details: "مهندس خلفية",
    photo_file: "/imgs/team/team-2.jpg",
    fields: [
      { title: "المنصب", value: "مهندس خلفية" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 3,
    title: "أحمد عيد",
    details: "مطور واجهات أمامية",
    photo_file: "/imgs/team/team-3.jpg",
    fields: [
      { title: "المنصب", value: "مطور واجهات أمامية" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 4,
    title: "محمود عبد المجيد",
    details: "مطور تطبيقات جوال",
    photo_file: "/imgs/team/team-4.jpg",
    fields: [
      { title: "المنصب", value: "مطور تطبيقات جوال" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 5,
    title: "سارة أحمد",
    details: "مطورة ويب متكاملة",
    photo_file: "",
    fields: [
      { title: "المنصب", value: "مطورة ويب متكاملة" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
  makeTopic({
    id: 6,
    title: "يوسف ناصر",
    details: "مهندس DevOps",
    photo_file: "/imgs/team/team-2.jpg",
    fields: [
      { title: "المنصب", value: "مهندس DevOps" },
      { title: "لينكد إن", value: "https://linkedin.com" },
    ],
  }),
];

export function getStaticTeam(locale: Locale): SectionsResponse {
  return makeSection("Team", locale === "ar" ? team_ar : team_en);
}

// ---------------------------------------------------------------------------
// BLOGS
// ---------------------------------------------------------------------------
const blogs_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "Why Your Business Needs a Progressive Web App in 2025",
    details:
      "<p>Progressive Web Apps (PWAs) bridge the gap between websites and native mobile applications. With offline support, push notifications and near-instant load times, PWAs deliver a superior user experience without the friction of app-store downloads.</p><p>In this article we explore the top five reasons businesses of all sizes are switching to PWAs and how GridsApps can help you make the transition smoothly.</p>",
    date: "2024-11-20",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 1, name: "Hassan Ali", href: "" },
  }),
  makeTopic({
    id: 2,
    title: "Next.js 15: What Developers Need to Know",
    details:
      "<p>Next.js 15 ships with the new React compiler, improved server actions, partial pre-rendering and a dramatically faster local development experience. In this deep-dive we cover every major change and what it means for your existing projects.</p>",
    date: "2024-10-05",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 1, name: "Ahmad Eid", href: "" },
  }),
  makeTopic({
    id: 3,
    title: "Building Secure APIs: OWASP Top 10 Checklist",
    details:
      "<p>Security is not an afterthought — it must be built in from the very first line of code. This practical checklist walks through each OWASP Top 10 vulnerability with concrete code examples and mitigation strategies that every Node.js developer should know.</p>",
    date: "2024-08-18",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 2, name: "Ahmed Kholy", href: "" },
  }),
  makeTopic({
    id: 4,
    title: "React Native vs Flutter: Choosing the Right Framework",
    details:
      "<p>Cross-platform mobile development has matured rapidly. We compare React Native and Flutter across performance, developer experience, community support and long-term maintenance so you can make an informed decision for your next app.</p>",
    date: "2024-07-03",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 4, name: "Mahmoud AbdelMageed", href: "" },
  }),
  makeTopic({
    id: 5,
    title: "Designing for Accessibility: A Practical Guide",
    details:
      "<p>Accessible design is good design. In this guide we cover WCAG 2.2 guidelines, ARIA roles, keyboard navigation and colour contrast requirements — with real-world examples that show accessibility does not have to compromise visual quality.</p>",
    date: "2024-05-22",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 3, name: "Ahmad Eid", href: "" },
  }),
];
const blogs_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "لماذا يحتاج عملك إلى تطبيق ويب تقدمي (PWA) في 2025",
    details:
      "<p>تطبيقات الويب التقدمية (PWA) تسد الفجوة بين مواقع الويب وتطبيقات الجوال الأصلية. مع دعم العمل دون اتصال والإشعارات الفورية وأوقات التحميل شبه الفورية، تقدم PWA تجربة مستخدم متفوقة دون متاعب تنزيل التطبيقات من المتاجر.</p><p>في هذا المقال نستعرض أبرز خمسة أسباب تجعل الشركات من جميع الأحجام تتحول إلى PWA وكيف تساعدك جريدز أبس على إجراء هذا التحول بسلاسة.</p>",
    date: "2024-11-20",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 1, name: "حسن علي", href: "" },
  }),
  makeTopic({
    id: 2,
    title: "Next.js 15: ما يحتاج المطورون معرفته",
    details:
      "<p>يأتي Next.js 15 مع مُترجم React الجديد وإجراءات سيرفر محسّنة والعرض المسبق الجزئي وتجربة تطوير محلي أسرع بشكل ملحوظ. في هذا التحليل المعمق نغطي كل تغيير رئيسي وما يعنيه لمشاريعك الحالية.</p>",
    date: "2024-10-05",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 1, name: "أحمد عيد", href: "" },
  }),
  makeTopic({
    id: 3,
    title: "بناء واجهات برمجة تطبيقات آمنة: قائمة التحقق من OWASP Top 10",
    details:
      "<p>الأمان ليس فكرة لاحقة — يجب بناؤه من السطر الأول في الكود. تستعرض هذه القائمة العملية كل ثغرة من ثغرات OWASP Top 10 مع أمثلة كود ملموسة واستراتيجيات تخفيف يجب أن يعرفها كل مطور Node.js.</p>",
    date: "2024-08-18",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 2, name: "أحمد خولي", href: "" },
  }),
  makeTopic({
    id: 4,
    title: "React Native مقابل Flutter: اختيار الإطار الصحيح",
    details:
      "<p>تطور تطوير تطبيقات الجوال متعددة المنصات بسرعة. نقارن React Native وFlutter من حيث الأداء وتجربة المطور ودعم المجتمع والصيانة طويلة الأمد لتساعدك على اتخاذ قرار مستنير لتطبيقك القادم.</p>",
    date: "2024-07-03",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 4, name: "محمود عبد المجيد", href: "" },
  }),
  makeTopic({
    id: 5,
    title: "التصميم لإمكانية الوصول: دليل عملي",
    details:
      "<p>التصميم المتاح هو تصميم جيد. في هذا الدليل نغطي إرشادات WCAG 2.2 وأدوار ARIA والتنقل بلوحة المفاتيح ومتطلبات تباين الألوان — مع أمثلة واقعية تُظهر أن إمكانية الوصول لا تتعارض مع الجودة البصرية.</p>",
    date: "2024-05-22",
    photo_file: "/imgs/blog/main-post.jpeg",
    fields: [],
    user: { id: 3, name: "أحمد عيد", href: "" },
  }),
];

export function getStaticBlogs(locale: Locale): SectionsResponse {
  return makeSection(
    locale === "ar" ? "المدونة" : "Blog",
    locale === "ar" ? blogs_ar : blogs_en,
  );
}

// ---------------------------------------------------------------------------
// ADDRESSES / KEEP IN TOUCH
// ---------------------------------------------------------------------------
const addresses_en: ITopic[] = [
  makeTopic({
    id: 1,
    title: "New York, USA",
    details: "",
    photo_file: "/imgs/flags/usa.svg",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "Dubai, UAE",
    details: "",
    photo_file: "/imgs/flags/uae.svg",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "Amman, Jordan",
    details: "",
    photo_file: "/imgs/flags/jordan.svg",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "Ramallah, Palestine",
    details: "",
    photo_file: "/imgs/flags/palestine.svg",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "Cairo, Egypt",
    details: "",
    photo_file: "/imgs/flags/egypt.svg",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "Riyadh, KSA",
    details: "",
    photo_file: "/imgs/flags/ksa.svg",
    fields: [],
  }),
];
const addresses_ar: ITopic[] = [
  makeTopic({
    id: 1,
    title: "نيويورك، الولايات المتحدة",
    details: "",
    photo_file: "/imgs/flags/usa.svg",
    fields: [],
  }),
  makeTopic({
    id: 2,
    title: "دبي، الإمارات",
    details: "",
    photo_file: "/imgs/flags/uae.svg",
    fields: [],
  }),
  makeTopic({
    id: 3,
    title: "عمّان، الأردن",
    details: "",
    photo_file: "/imgs/flags/jordan.svg",
    fields: [],
  }),
  makeTopic({
    id: 4,
    title: "رام الله، فلسطين",
    details: "",
    photo_file: "/imgs/flags/palestine.svg",
    fields: [],
  }),
  makeTopic({
    id: 5,
    title: "القاهرة، مصر",
    details: "",
    photo_file: "/imgs/flags/egypt.svg",
    fields: [],
  }),
  makeTopic({
    id: 6,
    title: "الرياض، المملكة العربية السعودية",
    details: "",
    photo_file: "/imgs/flags/ksa.svg",
    fields: [],
  }),
];

export function getStaticAddresses(locale: Locale): SectionsResponse {
  return makeSection("address", locale === "ar" ? addresses_ar : addresses_en);
}

// ---------------------------------------------------------------------------
// ABOUT US
// ---------------------------------------------------------------------------
export function getStaticAboutData(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("من نحن", [
      makeTopic({
        id: 1,
        title: "نبذة عن جريدز أبس",
        details:
          "جريدز أبس وكالة برمجيات متكاملة متخصصة في تطوير الويب والجوال والحلول السحابية. تأسست عام 2018 وأنجزت أكثر من 150 مشروعاً لعملاء في أمريكا الشمالية وأوروبا والشرق الأوسط. مهمتنا بسيطة: بناء برمجيات تحقق نتائج أعمال حقيقية.",
        photo_file: "/imgs/about-us/about-image1.png",
        fields: [
          { title: "المشاريع المنجزة", value: "150" },
          { title: "العملاء الراضون", value: "98" },
          { title: "أعضاء الفريق", value: "24" },
          { title: "سنوات الخبرة", value: "6" },
        ],
      }),
    ]);
  }
  return makeSection("About Us", [
    makeTopic({
      id: 1,
      title: "About GridsApps",
      details:
        "GridsApps is a full-service software agency specialising in web, mobile and cloud development. Founded in 2018, we have delivered over 150 projects for clients across North America, Europe and the Middle East. Our mission is simple: build software that drives real business outcomes.",
      photo_file: "/imgs/about-us/about-image1.png",
      fields: [
        { title: "Projects Completed", value: "150" },
        { title: "Happy Clients", value: "98" },
        { title: "Team Members", value: "24" },
        { title: "Years of Experience", value: "6" },
      ],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// ABOUT HISTORY (milestones)
// ---------------------------------------------------------------------------
export function getStaticAboutHistory(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("التاريخ", [
      makeTopic({
        id: 1,
        title: "2018 — التأسيس",
        details:
          "تأسست جريدز أبس بفريق من أربعة مطورين شغوفين ببناء برمجيات عالية الجودة. كان مشروعنا الأول منصة تجارة إلكترونية مخصصة لمتجر فلسطيني.",
        photo_file: null,
        fields: [],
      }),
      makeTopic({
        id: 2,
        title: "2019 — أول عميل دولي",
        details:
          "توسعنا خارج السوق المحلية وسلّمنا نظام إدارة موارد بشرية SaaS لمؤسسة إماراتية، مما فتح أمامنا أبواب سوق الخليج.",
        photo_file: null,
        fields: [],
      }),
      makeTopic({
        id: 3,
        title: "2020 — قسم تطبيقات الجوال",
        details:
          "مع تزايد استخدام الهاتف المحمول أطلقنا قسماً مخصصاً لـ React Native وFlutter، وسلّمنا أول تطبيق متعدد المنصات بـ 10,000 مستخدم نشط خلال ثلاثة أشهر.",
        photo_file: null,
        fields: [],
      }),
      makeTopic({
        id: 4,
        title: "2021 — إنجاز 50 مشروعاً",
        details:
          "احتفلنا بتسليم مشروعنا الخمسين وحصلنا على أول شهادة Google Partner، تعكس خبرتنا في تطوير السحابة و PWA.",
        photo_file: null,
        fields: [],
      }),
      makeTopic({
        id: 5,
        title: "2023 — فريق من 20 شخص وأكثر",
        details:
          "نما الفريق إلى أكثر من 20 مطوراً ومصمماً ومدير مشاريع. افتتحنا مكتباً جديداً في عمّان بالأردن لخدمة عملاء الشرق الأوسط بشكل أفضل.",
        photo_file: null,
        fields: [],
      }),
      makeTopic({
        id: 6,
        title: "2024 — 150 مشروعاً وما هو أكثر",
        details:
          "بـ 150 مشروعاً ناجحاً في 12 دولة ومعدل رضا عملاء 98%، تواصل جريدز أبس نموها. تركيزنا لعام 2025 هو تطوير المنتجات المدعومة بالذكاء الاصطناعي.",
        photo_file: null,
        fields: [],
      }),
    ]);
  }
  return makeSection("History", [
    makeTopic({
      id: 1,
      title: "2018 — Foundation",
      details:
        "GridsApps was founded with a team of four developers passionate about building quality software. Our first project was a custom e-commerce platform for a Palestinian retailer.",
      photo_file: null,
      fields: [],
    }),
    makeTopic({
      id: 2,
      title: "2019 — First International Client",
      details:
        "We expanded beyond the local market and delivered a SaaS HR management system for a UAE-based enterprise, opening the door to the Gulf market.",
      photo_file: null,
      fields: [],
    }),
    makeTopic({
      id: 3,
      title: "2020 — Mobile Division",
      details:
        "With the surge in mobile usage we launched a dedicated React Native and Flutter division, delivering our first cross-platform app with 10,000 active users in three months.",
      photo_file: null,
      fields: [],
    }),
    makeTopic({
      id: 4,
      title: "2021 — 50 Projects Milestone",
      details:
        "We celebrated our 50th delivered project and earned our first Google Partner certification, reflecting our expertise in cloud and PWA development.",
      photo_file: null,
      fields: [],
    }),
    makeTopic({
      id: 5,
      title: "2023 — Team of 20+",
      details:
        "The team grew to over 20 developers, designers and project managers. We opened a new office in Amman, Jordan to better serve Middle East clients.",
      photo_file: null,
      fields: [],
    }),
    makeTopic({
      id: 6,
      title: "2024 — 150 Projects & Beyond",
      details:
        "With 150 successful projects across 12 countries and a 98% client satisfaction rate, GridsApps continues to grow. Our focus for 2025 is AI-powered product development.",
      photo_file: null,
      fields: [],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// WEB PROJECTS (Portfolio)
// ---------------------------------------------------------------------------
export function getStaticWebProjects(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("مشاريع الويب", [
      makeTopic({
        id: 1,
        title: "منصة إمتياز للتجارة الإلكترونية",
        details:
          "حل تجارة إلكترونية متكامل مع مخزون في الوقت الفعلي ودعم متعدد العملات ولوحة تحكم إدارية.",
        photo_file: "/imgs/projects/project-1.png",
        fields: [{ title: "التصنيف", value: "website" }],
      }),
      makeTopic({
        id: 2,
        title: "لوحة تحكم DataFlow SaaS",
        details:
          "لوحة تحكم معقدة لتصور البيانات لشركة تحليلات سويدية ناشئة باستخدام Next.js وD3.js.",
        photo_file: "/imgs/projects/project-2.png",
        fields: [{ title: "التصنيف", value: "website" }],
      }),
      makeTopic({
        id: 3,
        title: "بوابة لوجستيات FastRoute",
        details:
          "تطبيق ويب لتتبع الشحنات في الوقت الفعلي وتحسين المسارات لشركة لوجستيات.",
        photo_file: "/imgs/projects/project-3.png",
        fields: [{ title: "التصنيف", value: "website" }],
      }),
      makeTopic({
        id: 4,
        title: "موقع TechNova الشركاتي",
        details:
          "موقع تسويقي عالي الأداء مع CMS ومدونة والتقاط للعملاء المحتملين — درجة Lighthouse 98.",
        photo_file: "/imgs/projects/project-4.png",
        fields: [{ title: "التصنيف", value: "website" }],
      }),
      makeTopic({
        id: 5,
        title: "بوابة مرضى HealthPlus",
        details:
          "نظام إدارة مرضى آمن ومتوافق مع HIPAA مع حجز مواعيد والتطبيب عن بُعد.",
        photo_file: "/imgs/projects/project-5.png",
        fields: [{ title: "التصنيف", value: "desktop" }],
      }),
      makeTopic({
        id: 6,
        title: "نظام إدارة التعلم EduLearn",
        details:
          "نظام إدارة تعلم مع فصول حية واختبارات وإنشاء شهادات لأكثر من 5,000 طالب.",
        photo_file: "/imgs/projects/project-6.png",
        fields: [{ title: "التصنيف", value: "desktop" }],
      }),
    ]);
  }
  return makeSection("Web Projects", [
    makeTopic({
      id: 1,
      title: "Imtyaz E-commerce Platform",
      details:
        "A full-stack e-commerce solution with real-time inventory, multi-currency support and an admin dashboard.",
      photo_file: "/imgs/projects/project-1.png",
      fields: [{ title: "Category", value: "website" }],
    }),
    makeTopic({
      id: 2,
      title: "DataFlow SaaS Dashboard",
      details:
        "Complex data visualisation dashboard for a Swedish analytics startup using Next.js and D3.js.",
      photo_file: "/imgs/projects/project-2.png",
      fields: [{ title: "Category", value: "website" }],
    }),
    makeTopic({
      id: 3,
      title: "FastRoute Logistics Portal",
      details:
        "Real-time shipment tracking and route optimisation web app for a logistics company.",
      photo_file: "/imgs/projects/project-3.png",
      fields: [{ title: "Category", value: "website" }],
    }),
    makeTopic({
      id: 4,
      title: "TechNova Corporate Website",
      details:
        "High-performance marketing website with CMS, blog and lead capture — Lighthouse score 98.",
      photo_file: "/imgs/projects/project-4.png",
      fields: [{ title: "Category", value: "website" }],
    }),
    makeTopic({
      id: 5,
      title: "HealthPlus Patient Portal",
      details:
        "Secure HIPAA-compliant patient management system with appointment booking and teleconsultation.",
      photo_file: "/imgs/projects/project-5.png",
      fields: [{ title: "Category", value: "desktop" }],
    }),
    makeTopic({
      id: 6,
      title: "EduLearn LMS",
      details:
        "Learning management system with live classes, quizzes and certificate generation for 5,000+ students.",
      photo_file: "/imgs/projects/project-6.png",
      fields: [{ title: "Category", value: "desktop" }],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// MOBILE PROJECTS (Portfolio)
// ---------------------------------------------------------------------------
export function getStaticMobileProjects(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("مشاريع الجوال", [
      makeTopic({
        id: 7,
        title: "تطبيق سوق للتسوق",
        details:
          "تطبيق تجارة إلكترونية بـ React Native مع معاينة المنتج بالواقع المعزز وإتمام الشراء بنقرة واحدة. أكثر من 50,000 تنزيل.",
        photo_file: "/imgs/projects/project-7.png",
        fields: [{ title: "التصنيف", value: "mobile" }],
      }),
      makeTopic({
        id: 8,
        title: "تطبيق RunTrack للياقة البدنية",
        details:
          "تطبيق تتبع لياقة متعدد المنصات مع خرائط مسار GPS وتحليلات التمارين والمشاركة الاجتماعية.",
        photo_file: "/imgs/projects/project-8.png",
        fields: [{ title: "التصنيف", value: "mobile" }],
      }),
      makeTopic({
        id: 9,
        title: "تطبيق BankEasy للخدمات المصرفية",
        details:
          "تطبيق مصرفي PWA آمن مع تسجيل الدخول البيومتري والتحويلات الفورية ورؤى الإنفاق.",
        photo_file: "/imgs/projects/project-1.png",
        fields: [{ title: "التصنيف", value: "mobile" }],
      }),
      makeTopic({
        id: 10,
        title: "تطبيق DeliveryNow للسائقين",
        details:
          "تطبيق توصيل بـ Flutter مع إدارة الطلبات في الوقت الفعلي والملاحة داخل التطبيق وتتبع الأرباح.",
        photo_file: "/imgs/projects/project-2.png",
        fields: [{ title: "التصنيف", value: "mobile" }],
      }),
    ]);
  }
  return makeSection("Mobile Projects", [
    makeTopic({
      id: 7,
      title: "Souq Shopping App",
      details:
        "React Native e-commerce app with AR product preview and one-tap checkout. 50k+ downloads.",
      photo_file: "/imgs/projects/project-7.png",
      fields: [{ title: "Category", value: "mobile" }],
    }),
    makeTopic({
      id: 8,
      title: "RunTrack Fitness App",
      details:
        "Cross-platform fitness tracking app with GPS route mapping, workout analytics and social sharing.",
      photo_file: "/imgs/projects/project-8.png",
      fields: [{ title: "Category", value: "mobile" }],
    }),
    makeTopic({
      id: 9,
      title: "BankEasy Mobile Banking",
      details:
        "Secure mobile banking PWA with biometric login, instant transfers and spending insights.",
      photo_file: "/imgs/projects/project-1.png",
      fields: [{ title: "Category", value: "mobile" }],
    }),
    makeTopic({
      id: 10,
      title: "DeliveryNow Driver App",
      details:
        "Flutter delivery driver app with real-time order management, in-app navigation and earnings tracker.",
      photo_file: "/imgs/projects/project-2.png",
      fields: [{ title: "Category", value: "mobile" }],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------
export function getStaticFAQs(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("الأسئلة الشائعة", [
      makeTopic({
        id: 1,
        title: "ما هي التقنيات التي تتخصصون فيها؟",
        details:
          "نتخصص في React وNext.js وNode.js وTypeScript وReact Native وFlutter وPostgreSQL وخدمات AWS/Azure السحابية. يواكب فريقنا أحدث الأطر وأفضل الممارسات باستمرار.",
        fields: [],
      }),
      makeTopic({
        id: 2,
        title: "كم يستغرق المشروع النموذجي؟",
        details:
          "تتفاوت الجداول الزمنية بحسب النطاق والتعقيد. قد يستغرق الموقع البسيط 2-3 أسابيع؛ أما منتج SaaS متكامل فيستغرق عادةً 3-6 أشهر. نقدم تقديرات تفصيلية بعد مرحلة الاستكشاف.",
        fields: [],
      }),
      makeTopic({
        id: 3,
        title: "هل تقدمون دعماً مستمراً بعد الإطلاق؟",
        details:
          "نعم. نقدم باقات صيانة شهرية تشمل تحديثات الأمان ومراقبة الأداء وإصلاح الأخطاء وإضافات الميزات البسيطة. تضمن اتفاقية مستوى الخدمة (SLA) وقت استجابة 24 ساعة للمشكلات الحرجة.",
        fields: [],
      }),
      makeTopic({
        id: 4,
        title: "هل يمكنكم العمل مع قاعدة الكود الموجودة لدينا؟",
        details:
          "بالتأكيد. نتولى بانتظام المشاريع القائمة لإعادة الهيكلة أو تحسين الأداء أو تطوير الميزات. نبدأ بمراجعة شاملة للكود لتفادي أي مفاجآت.",
        fields: [],
      }),
      makeTopic({
        id: 5,
        title: "ما هو هيكل الدفع لديكم؟",
        details:
          "نعمل بنموذج دفع قائم على المراحل — عادةً 30% مقدماً و40% عند الوصول إلى منتصف المشروع و30% عند التسليم النهائي. للاشتراكات المستمرة نصدر فواتير شهرية.",
        fields: [],
      }),
      makeTopic({
        id: 6,
        title: "هل توقّعون اتفاقيات عدم الإفصاح (NDA)؟",
        details:
          "نعم، يسعدنا توقيع اتفاقية عدم إفصاح متبادلة قبل أي نقاشات للمشروع. حماية ملكيتك الفكرية أولوية قصوى لدينا.",
        fields: [],
      }),
    ]);
  }
  return makeSection("FAQs", [
    makeTopic({
      id: 1,
      title: "What technologies do you specialise in?",
      details:
        "We specialise in React, Next.js, Node.js, TypeScript, React Native, Flutter, PostgreSQL, and AWS/Azure cloud services. Our team stays current with the latest frameworks and best practices.",
      fields: [],
    }),
    makeTopic({
      id: 2,
      title: "How long does a typical project take?",
      details:
        "Project timelines vary based on scope and complexity. A simple landing site may take 2-3 weeks; a full-stack SaaS product typically takes 3-6 months. We provide detailed estimates after the discovery phase.",
      fields: [],
    }),
    makeTopic({
      id: 3,
      title: "Do you provide ongoing support after launch?",
      details:
        "Yes. We offer monthly maintenance packages covering security updates, performance monitoring, bug fixes and minor feature additions. Our SLA guarantees a 24-hour response time for critical issues.",
      fields: [],
    }),
    makeTopic({
      id: 4,
      title: "Can you work with our existing codebase?",
      details:
        "Absolutely. We regularly take over existing projects for refactoring, performance optimisation or feature development. We begin with a thorough code audit so there are no surprises.",
      fields: [],
    }),
    makeTopic({
      id: 5,
      title: "What is your payment structure?",
      details:
        "We work on a milestone-based payment model — typically 30% upfront, 40% at mid-project milestone and 30% on final delivery. For ongoing retainers we bill monthly.",
      fields: [],
    }),
    makeTopic({
      id: 6,
      title: "Do you sign NDAs?",
      details:
        "Yes, we are happy to sign a mutual NDA before any project discussions. Protecting your intellectual property is a top priority.",
      fields: [],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// PACKAGES
// ---------------------------------------------------------------------------
export function getStaticPackages(locale: Locale): SectionsResponse {
  if (locale === "ar") {
    return makeSection("الحزم", [
      makeTopic({
        id: 1,
        title: "الباقة الأساسية",
        details: "مثالية للشركات الصغيرة التي تبدأ حضورها الرقمي الأول.",
        photo_file: null,
        fields: [
          { title: "السعر", value: "35" },
          { title: "صفحة هبوط (حتى 5 أقسام)", value: "✓" },
          { title: "متوافق مع الجوال", value: "✓" },
          { title: "نموذج التواصل", value: "✓" },
          { title: "أساسيات SEO", value: "✓" },
          { title: "جولة مراجعة واحدة", value: "✓" },
        ],
      }),
      makeTopic({
        id: 2,
        title: "باقة الأعمال",
        details:
          "موقع متعدد الصفحات مع نظام إدارة محتوى وتجارة إلكترونية أساسية.",
        photo_file: null,
        fields: [
          { title: "السعر", value: "55" },
          { title: "حتى 10 صفحات", value: "✓" },
          { title: "تكامل CMS", value: "✓" },
          { title: "تجارة إلكترونية (حتى 50 منتج)", value: "✓" },
          { title: "Google Analytics", value: "✓" },
          { title: "3 جولات مراجعة", value: "✓" },
        ],
      }),
      makeTopic({
        id: 3,
        title: "الباقة الاحترافية",
        details: "تطبيق ويب متكامل مع خلفية مخصصة.",
        photo_file: null,
        fields: [
          { title: "السعر", value: "75" },
          { title: "تطبيق ويب مخصص", value: "✓" },
          { title: "REST API + لوحة تحكم", value: "✓" },
          { title: "بوابة دفع", value: "✓" },
          { title: "منتجات غير محدودة", value: "✓" },
          { title: "دعم 6 أشهر", value: "✓" },
        ],
      }),
      makeTopic({
        id: 4,
        title: "الباقة المؤسسية",
        details: "تطوير منتج متكامل من البداية إلى النهاية مع فريق مخصص.",
        photo_file: null,
        fields: [
          { title: "السعر", value: "99" },
          { title: "ويب + تطبيق جوال", value: "✓" },
          { title: "بنية سحابية", value: "✓" },
          { title: "خط CI/CD", value: "✓" },
          { title: "تكاملات مخصصة", value: "✓" },
          { title: "دعم 12 شهراً", value: "✓" },
        ],
      }),
    ]);
  }
  return makeSection("Packages", [
    makeTopic({
      id: 1,
      title: "Starter",
      details: "Perfect for small businesses getting their first web presence.",
      photo_file: null,
      fields: [
        { title: "Price", value: "35" },
        { title: "Landing page (up to 5 sections)", value: "✓" },
        { title: "Mobile responsive", value: "✓" },
        { title: "Contact form", value: "✓" },
        { title: "SEO basics", value: "✓" },
        { title: "1 revision round", value: "✓" },
      ],
    }),
    makeTopic({
      id: 2,
      title: "Business",
      details: "Multi-page website with CMS and basic e-commerce.",
      photo_file: null,
      fields: [
        { title: "Price", value: "55" },
        { title: "Up to 10 pages", value: "✓" },
        { title: "CMS integration", value: "✓" },
        { title: "E-commerce (up to 50 products)", value: "✓" },
        { title: "Google Analytics", value: "✓" },
        { title: "3 revision rounds", value: "✓" },
      ],
    }),
    makeTopic({
      id: 3,
      title: "Professional",
      details: "Full-featured web application with custom backend.",
      photo_file: null,
      fields: [
        { title: "Price", value: "75" },
        { title: "Custom web application", value: "✓" },
        { title: "REST API + admin panel", value: "✓" },
        { title: "Payment gateway", value: "✓" },
        { title: "Unlimited products", value: "✓" },
        { title: "6 months support", value: "✓" },
      ],
    }),
    makeTopic({
      id: 4,
      title: "Enterprise",
      details: "End-to-end product development with dedicated team.",
      photo_file: null,
      fields: [
        { title: "Price", value: "99" },
        { title: "Web + mobile app", value: "✓" },
        { title: "Cloud infrastructure", value: "✓" },
        { title: "CI/CD pipeline", value: "✓" },
        { title: "Custom integrations", value: "✓" },
        { title: "12 months support", value: "✓" },
      ],
    }),
  ]);
}

// ---------------------------------------------------------------------------
// SERVICE DETAILS (per service ID)
// ---------------------------------------------------------------------------
const serviceDetailsMap: Record<number, { en: ITopic; ar: ITopic }> = {
  1: {
    en: makeTopic({
      id: 1,
      title: "Web Development",
      details:
        "<h3>Custom Web Development</h3><p>We design and build modern, high-performance web applications tailored to your business needs. Our stack centres on React and Next.js for the frontend, Node.js for the backend, and PostgreSQL for persistent storage.</p><h4>What we deliver</h4><ul><li>Server-side rendered (SSR) and static sites for maximum SEO</li><li>REST and GraphQL APIs</li><li>Authentication, authorisation and role-based access control</li><li>Third-party integrations (payment gateways, CRMs, analytics)</li><li>Comprehensive test suites and CI/CD pipelines</li></ul>",
      photo_file: "/imgs/services/service-1.png",
      fields: [],
    }),
    ar: makeTopic({
      id: 1,
      title: "تطوير مواقع الويب",
      details:
        "<h3>تطوير ويب مخصص</h3><p>نصمم وننشئ تطبيقات ويب حديثة وعالية الأداء مصممة خصيصاً لاحتياجات عملك. يعتمد مكدسنا التقني على React وNext.js للواجهة الأمامية، وNode.js للخلفية، وPostgreSQL للتخزين الدائم.</p><h4>ما نقدمه</h4><ul><li>مواقع مُعالجة من جانب الخادم (SSR) وثابتة لتحسين SEO إلى أقصى حد</li><li>واجهات برمجة REST وGraphQL</li><li>المصادقة والتفويض والتحكم في الوصول القائم على الأدوار</li><li>تكاملات مع أطراف ثالثة (بوابات الدفع، CRM، التحليلات)</li><li>مجموعات اختبار شاملة وخطوط CI/CD</li></ul>",
      photo_file: "/imgs/services/service-1.png",
      fields: [],
    }),
  },
  2: {
    en: makeTopic({
      id: 2,
      title: "Mobile App Development",
      details:
        "<h3>Cross-Platform Mobile Apps</h3><p>Using React Native and Flutter we build iOS and Android applications from a single codebase — saving time and budget without compromising on quality or performance.</p><h4>Key capabilities</h4><ul><li>Native-feel UI components with smooth 60fps animations</li><li>Offline-first architecture with local data sync</li><li>Push notifications via Firebase Cloud Messaging</li><li>In-app purchases and subscription management</li><li>App Store and Google Play submission and review support</li></ul>",
      photo_file: "/imgs/services/service-2.png",
      fields: [],
    }),
    ar: makeTopic({
      id: 2,
      title: "تطوير تطبيقات الجوال",
      details:
        "<h3>تطبيقات جوال متعددة المنصات</h3><p>باستخدام React Native وFlutter نبني تطبيقات iOS وAndroid من قاعدة كود واحدة — توفير للوقت والميزانية دون المساس بالجودة أو الأداء.</p><h4>القدرات الرئيسية</h4><ul><li>مكونات UI بشعور أصلي مع رسوم متحركة سلسة بـ 60fps</li><li>بنية تعطي الأولوية للعمل دون اتصال مع مزامنة البيانات المحلية</li><li>إشعارات فورية عبر Firebase Cloud Messaging</li><li>المشتريات داخل التطبيق وإدارة الاشتراكات</li><li>دعم تقديم المراجعة في App Store وGoogle Play</li></ul>",
      photo_file: "/imgs/services/service-2.png",
      fields: [],
    }),
  },
  3: {
    en: makeTopic({
      id: 3,
      title: "E-commerce Solutions",
      details:
        "<h3>End-to-End E-commerce</h3><p>From product catalogue to checkout, we build e-commerce platforms that convert. Whether you need a custom-built store or an enhanced Shopify/WooCommerce setup, we have you covered.</p><h4>Included features</h4><ul><li>Custom storefront design and UX</li><li>Multi-currency and multi-language support</li><li>Inventory and order management</li><li>Payment gateways (Stripe, PayPal, regional providers)</li><li>SEO and performance optimisation</li></ul>",
      photo_file: "/imgs/services/service-3.png",
      fields: [],
    }),
    ar: makeTopic({
      id: 3,
      title: "حلول التجارة الإلكترونية",
      details:
        "<h3>تجارة إلكترونية متكاملة</h3><p>من كتالوج المنتجات إلى إتمام الدفع، نبني منصات تجارة إلكترونية تحقق التحويل. سواء احتجت إلى متجر مخصص أو إعداد Shopify/WooCommerce محسّن، نحن هنا لخدمتك.</p><h4>الميزات المضمّنة</h4><ul><li>تصميم واجهة متجر مخصصة وتجربة مستخدم رائعة</li><li>دعم متعدد العملات والمتعدد اللغات</li><li>إدارة المخزون والطلبات</li><li>بوابات دفع (Stripe وPayPal ومزودون إقليميون)</li><li>تحسين SEO والأداء</li></ul>",
      photo_file: "/imgs/services/service-3.png",
      fields: [],
    }),
  },
  4: {
    en: makeTopic({
      id: 4,
      title: "PWA & Desktop Apps",
      details:
        "<h3>Progressive Web & Desktop Apps</h3><p>Get the reach of the web combined with the power of native applications. Our PWAs score 95+ on Google Lighthouse and our Electron desktop apps work seamlessly on Windows, macOS and Linux.</p><h4>PWA features</h4><ul><li>Offline support via service workers</li><li>Add-to-home-screen prompt</li><li>Background sync and push notifications</li><li>Near-instant load times with advanced caching</li></ul>",
      photo_file: "/imgs/services/service-4.png",
      fields: [],
    }),
    ar: makeTopic({
      id: 4,
      title: "تطبيقات PWA وسطح المكتب",
      details:
        "<h3>تطبيقات الويب التقدمية وسطح المكتب</h3><p>احصل على انتشار الويب مع قوة التطبيقات الأصلية. تسجل تطبيقات PWA لدينا 95+ في Google Lighthouse وتعمل تطبيقات Electron بسلاسة على Windows وmacOS وLinux.</p><h4>ميزات PWA</h4><ul><li>دعم العمل دون اتصال عبر عمال الخدمة</li><li>مطالبة إضافة إلى الشاشة الرئيسية</li><li>مزامنة في الخلفية وإشعارات فورية</li><li>أوقات تحميل شبه فورية مع التخزين المؤقت المتقدم</li></ul>",
      photo_file: "/imgs/services/service-4.png",
      fields: [],
    }),
  },
};

export function getStaticServiceDetails(
  id: number | string,
  locale: Locale = "en",
) {
  const numId = Number(id);
  const entry = serviceDetailsMap[numId] ?? serviceDetailsMap[1];
  const topic = locale === "ar" ? entry.ar : entry.en;
  return { section_title: topic.title, topic: [topic] };
}

// ---------------------------------------------------------------------------
// PRIVACY / TERMS / REFUND
// ---------------------------------------------------------------------------
export function getStaticPrivacy(locale: Locale) {
  const details_en = `<h2>Privacy Policy</h2><p><em>Last updated: January 2025</em></p><p>GridsApps is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or engage our services.</p><h3>1. Information We Collect</h3><p>We collect personal information you voluntarily provide when you contact us or request a quote — including your name, email address, phone number, company name and project details. We do not sell your data to third parties.</p><h3>2. How We Use Your Information</h3><p>We use collected information to respond to enquiries, deliver our services, improve our website and comply with legal obligations. We never share your information without your explicit consent.</p><h3>3. Cookies</h3><p>Our website uses cookies to enhance browsing and collect anonymised analytics via Google Analytics. You can disable cookies in your browser settings at any time.</p><h3>4. Data Security</h3><p>We implement industry-standard security measures including HTTPS encryption, access controls and regular security audits to protect your data.</p><h3>5. Your Rights</h3><p>You have the right to access, correct or delete the personal data we hold about you. Contact us at hello@gridsapps.com.</p>`;

  const details_ar = `<h2>سياسة الخصوصية</h2><p><em>آخر تحديث: يناير 2025</em></p><p>تلتزم جريدز أبس بحماية معلوماتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها والإفصاح عنها وحمايتها عند زيارة موقعنا أو التعامل معنا.</p><h3>1. المعلومات التي نجمعها</h3><p>نجمع المعلومات الشخصية التي تقدمها طوعاً عند التواصل معنا أو طلب عرض سعر — بما يشمل اسمك وبريدك الإلكتروني ورقم هاتفك واسم شركتك وتفاصيل مشروعك. لا نبيع بياناتك لأطراف ثالثة.</p><h3>2. كيف نستخدم معلوماتك</h3><p>نستخدم المعلومات المجمعة للرد على الاستفسارات وتقديم خدماتنا وتحسين موقعنا والامتثال للالتزامات القانونية. لا نشارك معلوماتك أبداً دون موافقتك الصريحة.</p><h3>3. ملفات تعريف الارتباط</h3><p>يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح وجمع بيانات تحليلية مجهولة عبر Google Analytics. يمكنك تعطيل ملفات تعريف الارتباط في إعدادات متصفحك في أي وقت.</p><h3>4. أمان البيانات</h3><p>ننفذ تدابير أمنية معيارية في الصناعة تشمل تشفير HTTPS وضوابط الوصول وعمليات التدقيق الأمني المنتظمة لحماية بياناتك.</p><h3>5. حقوقك</h3><p>يحق لك الوصول إلى البيانات الشخصية التي نحتفظ بها عنك أو تصحيحها أو حذفها. تواصل معنا عبر hello@gridsapps.com.</p>`;

  return {
    section_title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
    topic: [
      makeTopic({
        id: 1,
        title: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
        details: locale === "ar" ? details_ar : details_en,
        fields: [],
      }),
    ],
  };
}

export function getStaticTerms(locale: Locale) {
  const details_en = `<h2>Terms and Conditions</h2><p><em>Last updated: January 2025</em></p><p>By engaging GridsApps for any software development services you agree to the following terms and conditions.</p><h3>1. Services</h3><p>All project scope, deliverables, timelines and fees are agreed upon in a written Statement of Work (SoW) or project contract before work commences.</p><h3>2. Intellectual Property</h3><p>Upon receipt of full payment, all custom code and designs created exclusively for a client project are assigned to the client. GridsApps retains ownership of pre-existing tools, libraries and frameworks.</p><h3>3. Payment Terms</h3><p>Payment is structured as per the agreed milestone schedule (typically 30% upfront, 40% mid-project, 30% on delivery). Invoices are due within 14 days of issue.</p><h3>4. Revisions</h3><p>The number of revision rounds is specified in each project contract. Revisions beyond the agreed scope will be quoted and billed separately.</p><h3>5. Limitation of Liability</h3><p>GridsApps shall not be liable for any indirect, incidental or consequential damages. Our total liability is limited to the fees paid for the specific project giving rise to the claim.</p><h3>6. Governing Law</h3><p>These terms are governed by the laws of the Palestinian Authority. Disputes shall be resolved through arbitration in Ramallah, Palestine.</p>`;

  const details_ar = `<h2>الشروط والأحكام</h2><p><em>آخر تحديث: يناير 2025</em></p><p>باستئجارك لخدمات تطوير البرمجيات من جريدز أبس، فإنك توافق على الشروط والأحكام التالية.</p><h3>1. الخدمات</h3><p>يتم الاتفاق على نطاق المشروع والمخرجات والجداول الزمنية والرسوم في وثيقة نطاق العمل (SoW) أو عقد المشروع المكتوب قبل البدء في العمل.</p><h3>2. الملكية الفكرية</h3><p>عند استلام الدفع الكامل، تُنقل ملكية جميع الأكواد والتصاميم المخصصة التي تم إنشاؤها حصرياً لمشروع العميل إلى العميل. تحتفظ جريدز أبس بملكية الأدوات والمكتبات والأطر الموجودة مسبقاً.</p><h3>3. شروط الدفع</h3><p>يُهيكل الدفع وفقاً لجدول المراحل المتفق عليه (عادةً 30% مقدماً و40% في منتصف المشروع و30% عند التسليم). تستحق الفواتير خلال 14 يوماً من الإصدار.</p><h3>4. المراجعات</h3><p>يُحدد عدد جولات المراجعة في كل عقد مشروع. المراجعات التي تتجاوز النطاق المتفق عليه ستُسعَّر وتُفوتَر بشكل منفصل.</p><h3>5. تحديد المسؤولية</h3><p>لا تتحمل جريدز أبس المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية. تقتصر مسؤوليتنا الإجمالية على الرسوم المدفوعة للمشروع المحدد الذي نشأت عنه المطالبة.</p><h3>6. القانون المطبق</h3><p>تخضع هذه الشروط لقوانين السلطة الفلسطينية. تُحسم النزاعات عبر التحكيم في رام الله، فلسطين.</p>`;

  return {
    section_title: locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions",
    topic: [
      makeTopic({
        id: 1,
        title: locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions",
        details: locale === "ar" ? details_ar : details_en,
        fields: [],
      }),
    ],
  };
}

export function getStaticRefund(locale: Locale) {
  const details_en = `<h2>Refund Policy</h2><p><em>Last updated: January 2025</em></p><p>We want you to be completely satisfied with our services. This policy outlines the conditions under which refunds may be issued.</p><h3>1. Project Cancellation</h3><p>If you cancel a project before work has commenced, you are entitled to a full refund of any upfront payments. Once work has begun, the refund amount will be calculated based on the work completed at the time of cancellation.</p><h3>2. Milestone Payments</h3><p>Payments made for completed milestones are non-refundable once the deliverable has been approved by the client. If a deliverable does not meet the agreed specification, we will revise it at no additional cost.</p><h3>3. Quality Guarantee</h3><p>If a delivered product contains critical defects that prevent its use, we will fix these at no extra charge within 30 days of delivery.</p><h3>4. How to Request a Refund</h3><p>Email hello@gridsapps.com with your project details and reason for the refund request. We will respond within 5 business days.</p><h3>5. Processing Time</h3><p>Approved refunds are processed within 10-14 business days to the original payment method.</p>`;

  const details_ar = `<h2>سياسة الاسترداد</h2><p><em>آخر تحديث: يناير 2025</em></p><p>نريدك أن تكون راضياً تماماً عن خدماتنا. توضح هذه السياسة الشروط التي يمكن بموجبها إصدار المبالغ المستردة.</p><h3>1. إلغاء المشروع</h3><p>إذا ألغيت مشروعاً قبل بدء العمل، يحق لك استرداد كامل أي مدفوعات مقدمة. بعد بدء العمل، يُحسب مبلغ الاسترداد بناءً على العمل المنجز وقت الإلغاء.</p><h3>2. مدفوعات المراحل</h3><p>المدفوعات للمراحل المنجزة غير قابلة للاسترداد بمجرد موافقة العميل على المخرجات. إذا لم تستوفِ المخرجات المواصفات المتفق عليها، سنراجعها بدون تكلفة إضافية.</p><h3>3. ضمان الجودة</h3><p>إذا احتوت المخرجات على عيوب حرجة تمنع استخدامها، سنصلحها بدون رسوم إضافية خلال 30 يوماً من التسليم.</p><h3>4. كيفية طلب الاسترداد</h3><p>أرسل بريداً إلكترونياً إلى hello@gridsapps.com مع تفاصيل مشروعك وسبب طلب الاسترداد. سنرد خلال 5 أيام عمل.</p><h3>5. وقت المعالجة</h3><p>تُعالَج المبالغ المستردة المعتمدة خلال 10-14 يوم عمل إلى وسيلة الدفع الأصلية.</p>`;

  return {
    section_title: locale === "ar" ? "سياسة الاسترداد" : "Refund Policy",
    topic: [
      makeTopic({
        id: 1,
        title: locale === "ar" ? "سياسة الاسترداد" : "Refund Policy",
        details: locale === "ar" ? details_ar : details_en,
        fields: [],
      }),
    ],
  };
}

// ---------------------------------------------------------------------------
// SHARED CONTACT / SOCIAL / METADATA
// ---------------------------------------------------------------------------
export function getStaticContactData(locale: Locale): IContactData {
  return {
    address:
      locale === "ar"
        ? "رام الله، الضفة الغربية، فلسطين"
        : "Ramallah, West Bank, Palestine",
    phone: "+972 50 512 5857",
    fax: "+972 2 298 6001",
    mobile: "+972 50 512 5857",
    email: "hello@gridsapps.com",
    working_time:
      locale === "ar" ? "الأحد–الخميس 09:00–18:00" : "Sun-Thu 09:00-18:00",
  };
}

export const staticSocialLinks: IWebsiteSocial = {
  facebook: "https://facebook.com/gridsapps",
  twitter: "https://twitter.com/gridsapps",
  google: null,
  linkedin: "https://linkedin.com/company/gridsapps",
  youtube: "https://youtube.com/@gridsapps",
  instagram: "https://instagram.com/gridsapps",
  pinterest: "",
  tumblr: "",
  flickr: "",
  whatsapp: "972505125857",
};

export function getStaticSiteMetadata(locale: Locale): IWebsiteMetadata {
  if (locale === "ar") {
    return {
      site_url: "https://gridsapps.com",
      site_title: "جريدز أبس — وكالة تطوير البرمجيات",
      site_desc:
        "جريدز أبس تبني تطبيقات ويب وجوال وPWA عالمية المستوى. حوّل عملك بحلول برمجية متطورة.",
      site_keywords:
        "تطوير ويب،تطبيقات جوال،PWA،React،Next.js،وكالة برمجيات،تجارة إلكترونية",
      site_webmails: "hello@gridsapps.com",
    };
  }
  return {
    site_url: "https://gridsapps.com",
    site_title: "GridsApps — Software Development Agency",
    site_desc:
      "GridsApps builds world-class web applications, mobile apps and PWAs. Transform your business with cutting-edge software solutions.",
    site_keywords:
      "web development,mobile apps,PWA,React,Next.js,software agency,e-commerce",
    site_webmails: "hello@gridsapps.com",
  };
}

export function getStaticMainSlider(_locale: Locale): SectionsResponse {
  return makeSection("Main Slider", []);
}
