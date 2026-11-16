 "use client";

import { useMemo, useState } from "react";
import {
  ArrowUpLeft, ArrowLeft, ShieldCheck, FileText, BellRing, ScanLine,
  Search, Check, LockKeyhole, Menu, X, Globe2, CalendarClock, Sparkles,
  FolderOpen, ChevronLeft, ChevronRight
} from "lucide-react";

type Locale = "ar" | "en";

const copy = {
  ar: {
    dir: "rtl", lang: "ar",
    nav: ["المميزات", "كيف يعمل", "الخصوصية"],
    signIn: "تسجيل الدخول", start: "ابدأ مجانًا",
    eyebrow: "مساحة واحدة لكل مستندات حياتك",
    titleA: "أوراقك المهمة،", titleB: "مرتّبة ومطمئنّة.",
    subtitle: "مفتاح يساعدك على حفظ مستنداتك، تذكّر مواعيدها، ومعرفة الخطوة التالية — من مكان واحد وبخصوصية تضعها أولًا.",
    cta: "ابدأ تنظيم مستنداتك", secondary: "اكتشف كيف يعمل",
    trust: "خصوصيتك أولويتنا", noCard: "لا تحتاج إلى بطاقة بنكية",
    dashboard: "مساحة مستنداتك", hello: "مرحبًا بعودتك",
    overview: "نظرة عامة", allDocs: "كل المستندات", reminders: "التذكيرات",
    active: "مستندات سارية", soon: "تحتاج انتباهك", saved: "مستندات محفوظة",
    search: "ابحث عن مستند...", recent: "أضيفت مؤخرًا",
    passport: "جواز السفر", insurance: "التأمين الصحي", license: "رخصة القيادة",
    valid: "ساري", expires: "ينتهي في", days: "يومًا",
    sectionTag: "كل شيء في مكانه",
    sectionTitle: "أقل بحثًا عن الأوراق. أكثر تركيزًا على حياتك.",
    sectionSub: "من لحظة إضافة المستند إلى تذكيرك بموعده، مفتاح يجعل التفاصيل أسهل.",
    features: [
      ["أضف مستنداتك بسهولة", "ارفع صورة أو ملف PDF واحتفظ بنسخة منظمة يسهل الوصول إليها.", "file"],
      ["افهم بيانات مستندك", "يساعدك استخراج النصوص على قراءة البيانات والتواريخ لتراجعها وتؤكدها.", "scan"],
      ["لا تفوّت موعدًا مهمًا", "ذكّرك قبل انتهاء المستندات بالمواعيد التي تحددها بنفسك.", "bell"]
    ],
    howTag: "ببساطة",
    howTitle: "من ملف مبعثر إلى خطوة واضحة.",
    steps: [
      ["أضف", "صوّر المستند أو ارفع ملف PDF."],
      ["راجع", "تحقق من البيانات التي تم استخراجها وأكّدها."],
      ["تابع", "رتّب مستنداتك وتلقَّ تذكيراتك في الوقت المناسب."]
    ],
    privacyTag: "مصمّم حول الثقة",
    privacyTitle: "مستنداتك شخصية. ويجب أن تبقى كذلك.",
    privacyText: "نبني مفتاح بمبدأ الخصوصية أولًا: صلاحيات وصول واضحة، حماية للملفات، وعدم استخدام بيانات مستنداتك لأغراض إعلانية.",
    privacyPoints: ["أنت تتحكم في مستنداتك", "لا مشاركة عامة لملفاتك", "تأكيدك مطلوب قبل اعتماد البيانات المستخرجة"],
    finalTitle: "ابدأ بداية أكثر تنظيمًا.",
    finalText: "اجعل مستنداتك ومواعيدها في مكان واحد.",
    footer: "مفتاح — حياتك، أكثر تنظيمًا.", legal: "الخصوصية", contact: "تواصل معنا",
    preview: "معاينة توضيحية — ليست حسابًا حقيقيًا"
  },
  en: {
    dir: "ltr", lang: "en",
    nav: ["Features", "How it works", "Privacy"],
    signIn: "Sign in", start: "Get started",
    eyebrow: "One home for life's important documents",
    titleA: "Your important papers,", titleB: "clear and in control.",
    subtitle: "MIFTAH helps you keep documents organized, remember key dates, and know what to do next — all in one place, with privacy at its core.",
    cta: "Organize your documents", secondary: "See how it works",
    trust: "Privacy comes first", noCard: "No credit card required",
    dashboard: "Your document space", hello: "Welcome back",
    overview: "Overview", allDocs: "All documents", reminders: "Reminders",
    active: "Active documents", soon: "Need your attention", saved: "Documents saved",
    search: "Search documents...", recent: "Recently added",
    passport: "Passport", insurance: "Health insurance", license: "Driving licence",
    valid: "Valid", expires: "Expires in", days: "days",
    sectionTag: "Everything in its place",
    sectionTitle: "Less time searching. More time for life.",
    sectionSub: "From adding a document to remembering its expiry date, MIFTAH makes the details easier.",
    features: [
      ["Add documents with ease", "Upload a photo or PDF and keep it organized and easy to find.", "file"],
      ["Make sense of document details", "Text extraction helps identify key details and dates for you to review and confirm.", "scan"],
      ["Stay ahead of important dates", "Get reminders before documents expire, on a schedule you control.", "bell"]
    ],
    howTag: "A simple flow",
    howTitle: "From scattered files to a clear next step.",
    steps: [
      ["Add", "Take a photo or upload a PDF."],
      ["Review", "Check the extracted details and confirm them."],
      ["Stay on track", "Keep documents organized and receive timely reminders."]
    ],
    privacyTag: "Built on trust",
    privacyTitle: "Your documents are personal. They should stay that way.",
    privacyText: "MIFTAH is being built with a privacy-first approach: clear access controls, protected files, and no use of your document data for advertising.",
    privacyPoints: ["You stay in control of your documents", "Your files are never public by default", "Extracted details require your confirmation"],
    finalTitle: "Make room for a more organized life.",
    finalText: "Keep your documents and important dates in one place.",
    footer: "MIFTAH — Your life, organized.", legal: "Privacy", contact: "Contact",
    preview: "Illustrative preview — not a real account"
  }
};

function Brand() {
  return <a className="brand" href="#" aria-label="MIFTAH home"><span className="brand-mark">م</span><span>MIFTAH</span></a>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ar");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = copy[locale];
  const isAr = locale === "ar";
  const direction = isAr ? "rtl" : "ltr";
  const navItems = useMemo(() => [
    { label: t.nav[0], href: "#features" },
    { label: t.nav[1], href: "#how" },
    { label: t.nav[2], href: "#privacy" }
  ], [t]);

  return (
    <main dir={direction} lang={locale}>
      <header className="site-header">
        <div className="nav-wrap">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(item => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <div className="nav-actions">
            <button className="lang-switch" onClick={() => setLocale(isAr ? "en" : "ar")} aria-label="Switch language">
              <Globe2 size={16} /> {isAr ? "EN" : "ع"}
            </button>
            <a className="signin" href="#start">{t.signIn}</a>
            <a className="button button-small" href="#start">{t.start}<ArrowUpLeft size={15}/></a>
            <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
              {mobileOpen ? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileOpen && <nav className="mobile-nav">{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</a>)}</nav>}
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/>{t.eyebrow}</div>
          <h1>{t.titleA}<br/><span>{t.titleB}</span></h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-actions">
            <a className="button" href="#start">{t.cta}{isAr ? <ArrowUpLeft size={18}/> : <ArrowLeft size={18}/>}</a>
            <a className="text-link" href="#how">{t.secondary}<ChevronLeft size={17}/></a>
          </div>
          <div className="trust-row"><span><ShieldCheck size={16}/>{t.trust}</span><i/><span><Check size={15}/>{t.noCard}</span></div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"/>
          <div className="dashboard-card">
            <div className="dash-top">
              <div><span className="dash-greeting">{t.hello}</span><strong>{t.dashboard}</strong></div>
              <div className="avatar">م</div>
            </div>
            <div className="dash-search"><Search size={16}/><span>{t.search}</span><span className="search-shortcut">⌘ K</span></div>
            <div className="dash-tabs"><span className="active-tab">{t.overview}</span><span>{t.allDocs}</span><span>{t.reminders}</span></div>
            <div className="stats-grid">
              <div className="stat-box"><span>{t.active}</span><strong>08</strong><div className="stat-icon green"><FileText size={16}/></div></div>
              <div className="stat-box"><span>{t.soon}</span><strong>02</strong><div className="stat-icon amber"><CalendarClock size={16}/></div></div>
            </div>
            <div className="recent-head"><strong>{t.recent}</strong><span>{isAr ? "عرض الكل" : "View all"}</span></div>
            <div className="doc-row"><div className="doc-icon blue"><FileText size={18}/></div><div className="doc-info"><strong>{t.passport}</strong><span>{t.expires} 180 {t.days}</span></div><span className="status-pill">{t.valid}</span></div>
            <div className="doc-row"><div className="doc-icon mint"><ShieldCheck size={18}/></div><div className="doc-info"><strong>{t.insurance}</strong><span>{t.expires} 24 {t.days}</span></div><span className="status-pill warning">{t.valid}</span></div>
            <div className="doc-row"><div className="doc-icon violet"><FileText size={18}/></div><div className="doc-info"><strong>{t.license}</strong><span>{t.expires} 320 {t.days}</span></div><span className="status-pill">{t.valid}</span></div>
            <div className="dash-foot"><LockKeyhole size={13}/>{t.preview}</div>
          </div>
          <div className="floating-note"><span className="note-icon"><BellRing size={17}/></span><span><strong>{isAr ? "تذكير قادم" : "Upcoming reminder"}</strong><small>{isAr ? "تأمينك الصحي — خلال 24 يومًا" : "Health insurance — in 24 days"}</small></span></div>
          <div className="floating-spark"><Sparkles size={18}/></div>
        </div>
      </section>

      <section className="proof-strip">
        <div><ShieldCheck size={18}/><span>{isAr ? "خصوصية من البداية" : "Privacy by design"}</span></div>
        <div><ScanLine size={18}/><span>{isAr ? "إضافة ومراجعة سهلة" : "Simple document capture"}</span></div>
        <div><BellRing size={18}/><span>{isAr ? "تذكيرات في وقتها" : "Timely reminders"}</span></div>
        <div><Globe2 size={18}/><span>{isAr ? "عربي وإنجليزي" : "Arabic & English"}</span></div>
      </section>

      <section className="content-section section-shell" id="features">
        <div className="section-heading">
          <span className="section-kicker">{t.sectionTag}</span>
          <h2>{t.sectionTitle}</h2>
          <p>{t.sectionSub}</p>
        </div>
        <div className="feature-grid">
          {t.features.map((feature, index) => <article className="feature-card" key={feature[0]}>
            <div className={`feature-icon feature-${index}`}>{index === 0 ? <FolderOpen/> : index === 1 ? <ScanLine/> : <BellRing/>}</div>
            <span className="feature-number">0{index + 1}</span>
            <h3>{feature[0]}</h3><p>{feature[1]}</p>
          </article>)}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-shell how-inner">
          <div className="section-heading align-start">
            <span className="section-kicker">{t.howTag}</span><h2>{t.howTitle}</h2>
          </div>
          <div className="steps-grid">
            {t.steps.map((step, i) => <div className="step" key={step[0]}>
              <div className="step-top"><span className="step-index">0{i + 1}</span><span className="step-line"/></div>
              <h3>{step[0]}</h3><p>{step[1]}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="privacy-section section-shell" id="privacy">
        <div className="privacy-card">
          <div className="privacy-art"><div className="shield-orbit orbit-one"/><div className="shield-orbit orbit-two"/><div className="shield-core"><ShieldCheck size={58} strokeWidth={1.3}/></div></div>
          <div className="privacy-copy"><span className="section-kicker">{t.privacyTag}</span><h2>{t.privacyTitle}</h2><p>{t.privacyText}</p>
            <ul>{t.privacyPoints.map(point => <li key={point}><Check size={17}/>{point}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="final-cta section-shell" id="start">
        <div className="cta-pattern"/>
        <span className="section-kicker">{isAr ? "خطوتك الأولى تبدأ هنا" : "Your next step starts here"}</span>
        <h2>{t.finalTitle}</h2><p>{t.finalText}</p>
        <a className="button button-light" href="mailto:hello@miftah.app">{t.start}{isAr ? <ArrowUpLeft size={18}/> : <ArrowLeft size={18}/>}</a>
        <small>{isAr ? "قريبًا — نعمل على تجهيز الإطلاق الأول." : "Coming soon — we're preparing the first release."}</small>
      </section>

      <footer className="footer section-shell">
        <Brand/><span>{t.footer}</span><div><a href="#privacy">{t.legal}</a><a href="mailto:hello@miftah.app">{t.contact}</a><span>© 2026 MIFTAH</span></div>
      </footer>
    </main>
  );
}