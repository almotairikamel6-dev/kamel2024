import { Translations, NavLink } from './types';

export const navLinks: NavLink[] = [
  { path: '/', labelKey: 'home' },
  { path: '/about-platform', labelKey: 'aboutPlatform' },
  { path: '/omda-cv', labelKey: 'omdaCV' },
  { path: '/e-services', labelKey: 'eServices' },
  { path: '/official-forms', labelKey: 'officialForms' },
  { path: '/omda-system', labelKey: 'omdaSystem' },
  { path: '/news', labelKey: 'newsCenter' },
  { path: '/911', labelKey: 'unified911' },
  { path: '/smart-assistant', labelKey: 'smartAssistant' },
  { path: '/contact', labelKey: 'contactUs' },
];

export const translationsData: Translations = {
  // Header & Footer
  platformName: { ar: "منصة العمدة الرقمية", en: "Digital Omda Platform" },
  home: { ar: "الرئيسية", en: "Home" },
  aboutPlatform: { ar: "عن المنصة", en: "About the Platform" },
  omdaCV: { ar: "السيرة الذاتية للعمدة", en: "Omda's CV" },
  eServices: { ar: "الخدمات الإلكترونية", en: "E-Services" },
  residentRegistration: { ar: "تسجيل ساكن", en: "Resident Registration" },
  realEstateRegistration: { ar: "تسجيل مكتب عقار", en: "Real Estate Office Reg." },
  officialForms: { ar: "النماذج الرسمية", en: "Official Forms" },
  omdaSystem: { ar: "نظام العمد", en: "Omda System" },
  newsCenter: { ar: "مركز الأخبار", en: "News Center" },
  unified911: { ar: "مركز 911 الموحد", en: "Unified 911 Center" },
  smartAssistant: { ar: "المساعد الذكي", en: "Smart Assistant" },
  contactUs: { ar: "تواصل معنا", en: "Contact Us" },
  changeLanguage: { ar: "English", en: "العربية" },
  govLinks: { ar: "روابط حكومية", en: "Government Links" },
  vision2030: { ar: "رؤية المملكة 2030", en: "Saudi Vision 2030" },
  copyright: { ar: "© 2024 منصة العمدة الرقمية. جميع الحقوق محفوظة - للمطور كامل بن حبيب", en: "© 2024 Digital Omda Platform. All rights reserved - Developed by Kamel bin Habib." },

  // Home Page
  welcomeTitle: { ar: "مرحباً بكم في منصة العمدة الرقمية", en: "Welcome to the Digital Omda Platform" },
  welcomeSubtitle: { ar: "لحي الإسكان والروضة ببريدة", en: "For Al-Iskan & Al-Rawda Neighborhoods, Buraydah" },
  welcomeDescription: { ar: "منصة إلكترونية حكومية متكاملة لتمكين سكان الحي من الوصول للخدمات بسهولة وأمان.", en: "An integrated government e-platform to enable residents to access services easily and securely." },
  quickAccess: { ar: "الوصول السريع", en: "Quick Access" },
  residentRegistrationDesc: { ar: "سجل بياناتك كساكن جديد في الحي.", en: "Register your details as a new resident." },
  officialFormsDesc: { ar: "حمل النماذج الرسمية المعتمدة من العمدة.", en: "Download official forms approved by the Omda." },
  realEstateRegistrationDesc: { ar: "سجل مكتبك العقاري العامل في نطاق الحي.", en: "Register your real estate office operating in the neighborhood." },
  contactUsDesc: { ar: "تواصل مع إدارة المنصة للاستفسارات.", en: "Contact the platform administration for inquiries." },
  ourServices: { ar: "خدماتنا المميزة", en: "Our Featured Services" },
  latestNews: { ar: "آخر الأخبار", en: "Latest News" },
  moreDetails: { ar: "طالع التفاصيل", en: "Read More" },

  // Omda's CV
  fullName: { ar: "الاسم", en: "Full Name" },
  nationality: { ar: "الجنسية", en: "Nationality" },
  dob: { ar: "تاريخ الميلاد", en: "Date of Birth" },
  mobile: { ar: "رقم الجوال", en: "Mobile Number" },
  email: { ar: "البريد الإلكتروني", en: "Email" },
  qualifications: { ar: "المؤهلات العلمية", en: "Academic Qualifications" },
  experience: { ar: "الخبرات العملية", en: "Work Experience" },
  training: { ar: "الدورات التدريبية", en: "Training Courses" },
  
  // About Platform Page
  aboutPlatformTitle: { ar: "منصة العمدة الرقمية – حي الإسكان والروضة، بريدة", en: "Digital Omda Platform – Al-Iskan & Al-Rawda Neighborhoods, Buraydah" },
  aboutPlatformContent: { ar: "منصة إلكترونية ذكية، أُنشئت لخدمة سكان حي الإسكان والروضة بمدينة بريدة، وتسهيل التواصل مع العمدة والجهات الرسمية. توفر المنصة خدمات رقمية متكاملة تشمل تسجيل السكان والمكاتب العقارية، إصدار النماذج الرسمية، متابعة الأخبار، وتقديم الطلبات إلكترونيًا، مع ضمان الخصوصية وسرعة الإنجاز. تم تصميمها وفق أعلى المعايير التقنية والأمنية، وتتكامل مع الأنظمة الحكومية مثل مركز العمليات الأمنية الموحدة 911، والبلدية، والضمان الاجتماعي، بما يواكب رؤية المملكة 2030 في التحول الرقمي المحلي.", en: "A smart electronic platform established to serve the residents of Al-Iskan and Al-Rawda neighborhoods in the city of Buraydah, and to facilitate communication with the Omda and official authorities. The platform provides integrated digital services including resident and real estate office registration, issuance of official forms, news updates, and electronic submission of requests, ensuring privacy and speedy completion. It is designed according to the highest technical and security standards and integrates with government systems such as the Unified Security Operations Center (911), the municipality, and social security, in line with Saudi Vision 2030's local digital transformation." },

  // E-Services
  login: { ar: "تسجيل الدخول", en: "Login" },
  newUser: { ar: "تسجيل مستخدم جديد", en: "New User Registration" },
  forgotPassword: { ar: "نسيت كلمة المرور؟", en: "Forgot Password?" },
  passwordReset: { ar: "إعادة تعيين كلمة المرور", en: "Password Reset" },
  username: { ar: "اسم المستخدم", en: "Username" },
  password: { ar: "كلمة المرور", en: "Password" },
  nationalId: { ar: "رقم الهوية", en: "National ID" },
  visualCaptcha: { ar: "رمز التحقق البصري", en: "Visual Captcha" },
  agreeTerms: { ar: "أقر بصحة البيانات المدخلة", en: "I confirm the validity of the entered data" },
  
  // Forms
  submit: { ar: "إرسال", en: "Submit" },
  cancel: { ar: "إلغاء", en: "Cancel" },
  downloadPDF: { ar: "تحميل PDF", en: "Download PDF" },
  downloadWord: { ar: "تحميل Word", en: "Download Word" },
  idCopy: {ar: "صورة الهوية", en: "ID Copy"},
  residenceProof: {ar: "صك المنزل أو عقد الإيجار", en: "Deed or Lease Contract"},
  uploadDocs: {ar: "رفع الوثائق", en: "Upload Documents"},
  allowedFormats: {ar: "الصيغ المسموحة: PDF, PNG, JPG (بحد أقصى 2MB)", en: "Allowed formats: PDF, PNG, JPG (Max 2MB)"},
  
  // Smart Assistant
  assistantWelcome: { ar: "أهلاً بك! أنا مساعدك الذكي. كيف يمكنني خدمتك اليوم؟", en: "Hello! I am your smart assistant. How can I help you today?" },
  askSomething: { ar: "اسأل شيئًا...", en: "Ask something..." },
  
  // Search
  searchPlaceholder: { ar: "ابحث...", en: "Search..." },
  searchResults: { ar: "نتائج البحث", en: "Search Results" },
  resultsFor: { ar: "نتائج البحث عن:", en: "Search results for:" },
};