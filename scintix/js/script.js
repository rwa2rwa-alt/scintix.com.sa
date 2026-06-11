const navToggle = document.querySelector('.nav-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.main-nav a');
const langSelect = document.querySelector('[data-lang-select]');
const currencyLabels = document.querySelectorAll('[data-currency-label]');
const priceNodes = document.querySelectorAll('[data-price]');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const ariaLabelNodes = document.querySelectorAll('[data-i18n-aria-label]');
const html = document.documentElement;

// 🔗 روابط نماذج الاتصال حسب لغة الموقع
const contactLinks = {
  ar: '#contact', // يبقى يمرر داخلياً للنموذج العربي المدمج بالصفحة
  en: 'https://airtable.com/appkYurrIYGIup8QH/shrAt8THaVjwmP3LR' //  Airtable الإنجليزي هنا
};

const translations = {
  ar: {
    'page.title': 'Scintix | حلول ذكية للنمو الرقمي',
    'header.tagline': 'ودع العمل اليدوي وإبدأ استثمارك في المستقبل مع <span class="brand-accent">Scintix</span>',
    'nav.toggle': 'فتح القائمة',
    'nav.services': 'الخدمات',
    'nav.plans': 'الباقات',
    'nav.clients': 'شركاؤنا',
    'nav.contact': 'اتصل بنا',
    'cta.consult': 'اطلب استشارة',
    'hero.eyebrow': 'حلول تقنية متكاملة',
    'hero.title': 'حلول ذكية. آمنة. <span>نمو مستدام.</span>',
    'hero.description': 'نحو تجربة رقمية متكاملة، نربط بين الاستراتيجية والتقنية والتصميم لمنتجات تلائم السوق والمستخدم وتسرع نمو أعمالك.',
    'hero.primary': 'استكشف الباقات',
    'hero.secondary': 'تواصل معنا',
    'stats.projects': 'مشروع منشأ',
    'stats.partners': 'شريك نمو',
    'stats.satisfaction': 'معدل رضا العملاء',
    'features.apps.title': 'تطبيقات متكاملة',
    'features.apps.body': 'نطور منصات رقمية تربط عملياتك وتوفر تجربة موحدة للعملاء وتدعم أهداف النمو التشغيلية.',
    'features.security.title': 'أمان متقدم',
    'features.security.body': 'حماية كاملة من الطبقة إلى الواجهة، مع بنية آمنة وخصوصية بيانات قوية للحفاظ على ثقة عملائك.',
    'features.ux.title': 'تجربة مستخدم متميزة',
    'features.ux.body': 'تصميم واجهات احترافية وواضحة تزيد من التفاعل وتُسهل عمليات المستخدم وتُعزز هوية علامتك.',
    'features.support.title': 'دعم مستمر',
    'features.support.body': 'متابعة أداء يومية، تحديثات دورية، وخدمات دعم تقنية تساعدك على الاستجابة السريعة والتطوير الدائم.',
    'plans.heading': 'باقة مرنة تناسب احتياجاتك',
    'plans.description': 'باقات مصممة خصيصاً للشركات الناشئة والمؤسسات الطموحة التي تريد تحويل رؤيتها الرقمية إلى واقع.',
    'plans.spark.one': 'نظام أساسي واحد',
    'plans.spark.two': 'دعم أساسي',
    'plans.spark.three': 'تحليلات بسيطة',
    'plans.glow.one': 'تطبيقين متكاملين',
    'plans.glow.two': 'أمان قياسي',
    'plans.glow.three': 'سرعة تنفيذ أعلى',
    'plans.nova.one': 'أتمتة متقدمة',
    'plans.nova.two': 'دعم فني مخصص',
    'plans.nova.three': 'تقارير أداء متقدمة',
    'plans.zenith.one': 'حلول مقياس واسع',
    'plans.zenith.two': 'تكامل كامل مع الأنظمة',
    'plans.zenith.three': 'مراقبة 24/7',
    'plans.choose': 'اختر',
    'clients.label': 'شركاؤنا',
    'footer.title': 'هل أنت مستعد للانطلاق مع Scintix؟',
    'footer.description': 'ابدأ استراتيجية رقمية جديدة مع فريق متخصص في التحول الرقمي والتجربة المتميزة.',
    'footer.cta': 'ابدأ الآن'
  },
  en: {
    'page.title': 'Scintix | Smart digital growth solutions',
    'header.tagline': 'Leave manual work behind and start investing in your future with <span class="brand-accent">Scintix</span>',
    'nav.toggle': 'Open menu',
    'nav.services': 'Services',
    'nav.plans': 'Plans',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'cta.consult': 'Request a Consultation',
    'hero.eyebrow': 'Integrated Tech Solutions',
    'hero.title': 'Smart. Secure. <span>Sustainable Growth.</span>',
    'hero.description': 'A complete digital experience that connects strategy, technology, and design to create products that fit your market and accelerate growth.',
    'hero.primary': 'Explore Plans',
    'hero.secondary': 'Contact Us',
    'stats.projects': 'Projects delivered',
    'stats.partners': 'Growth partners',
    'stats.satisfaction': 'Customer satisfaction',
    'features.apps.title': 'Integrated Apps',
    'features.apps.body': 'We build digital platforms that connect your operations, unify the customer experience, and support your growth goals.',
    'features.security.title': 'Advanced Security',
    'features.security.body': 'End-to-end protection with secure architecture and strong data privacy to keep your customers’ trust.',
    'features.ux.title': 'Refined User Experience',
    'features.ux.body': 'Professional, clear interfaces that increase engagement, simplify workflows, and strengthen your brand identity.',
    'features.support.title': 'Ongoing Support',
    'features.support.body': 'Daily performance monitoring, regular updates, and technical support services that help you respond fast and keep improving.',
    'plans.heading': 'Flexible plans for your needs',
    'plans.description': 'Plans designed for startups and ambitious organizations that want to turn their digital vision into reality.',
    'plans.spark.one': 'One core system',
    'plans.spark.two': 'Basic support',
    'plans.spark.three': 'Simple analytics',
    'plans.glow.one': 'Two integrated apps',
    'plans.glow.two': 'Standard security',
    'plans.glow.three': 'Faster delivery',
    'plans.nova.one': 'Advanced automation',
    'plans.nova.two': 'Dedicated technical support',
    'plans.nova.three': 'Advanced performance reports',
    'plans.zenith.one': 'Enterprise-scale solutions',
    'plans.zenith.two': 'Full system integration',
    'plans.zenith.three': '24/7 monitoring',
    'plans.choose': 'Choose',
    'clients.label': 'Our clients',
    'footer.title': 'Ready to launch with Scintix?',
    'footer.description': 'Start a new digital strategy with a team specialized in digital transformation and premium experience design.',
    'footer.cta': 'Get Started'
  }
};

const currencyLabelsByLang = {
  ar: {
    sar: 'SAR / شهرياً',
    usd: '$ / month'
  },
  en: {
    sar: 'SAR / month',
    usd: '$ / month'
  }
};

const state = {
  lang: localStorage.getItem('scintix-lang') || 'ar',
  currency: localStorage.getItem('scintix-currency') || 'sar'
};

function formatPrice(value, currency) {
  const displayValue = currency === 'usd' ? value / 3.75 : value;
  const formatted = new Intl.NumberFormat(state.lang === 'en' ? 'en-US' : 'ar-SA', {
    minimumFractionDigits: currency === 'usd' ? 2 : 0,
    maximumFractionDigits: 2
  }).format(displayValue);

  return currency === 'usd' ? `$ ${formatted}` : `SAR ${formatted}`;
}

// 🛠️ دالة تحديث سلوك وروابط الأزرار تلقائياً
function updateContactButtons(lang) {
  const buttons = document.querySelectorAll('a[href="#contact"], a[href^="https://airtable.com"]');
  
  buttons.forEach(button => {
    button.setAttribute('href', contactLinks[lang]);
    
    if (lang === 'en') {
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer'); // أفضل للمقاييس الأمنية والأداء
    } else {
      button.removeAttribute('target');
      button.removeAttribute('rel');
    }
  });
}

function applyLanguage(lang) {
  state.lang = lang;
  state.currency = lang === 'en' ? 'usd' : 'sar';
  html.lang = lang;
  html.dir = lang === 'en' ? 'ltr' : 'rtl';

  translatableNodes.forEach(node => {
    const key = node.dataset.i18n;
    const value = translations[lang][key];

    if (!value) {
      return;
    }

    if (node.dataset.i18nHtml === 'true' || key === 'hero.title' || key === 'header.tagline') {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  });

  ariaLabelNodes.forEach(node => {
    const key = node.dataset.i18nAriaLabel;
    const value = translations[lang][key];

    if (value) {
      node.setAttribute('aria-label', value);
    }
  });

  document.title = translations[lang]['page.title'];

  if (langSelect) {
    langSelect.value = lang;
  }

  currencyLabels.forEach(node => {
    node.textContent = currencyLabelsByLang[lang][state.currency];
  });

  localStorage.setItem('scintix-lang', lang);
  localStorage.setItem('scintix-currency', state.currency);
  
  // تفعيل التحديث التلقائي للأزرار عند تطبيق اللغة
  updateContactButtons(lang);
  applyCurrency(state.currency);
}

function applyCurrency(currency) {
  state.currency = currency;

  priceNodes.forEach(node => {
    node.textContent = formatPrice(Number(node.dataset.price), currency);
  });

  currencyLabels.forEach(node => {
    node.textContent = currencyLabelsByLang[state.lang][currency];
  });

  localStorage.setItem('scintix-currency', currency);
}

navToggle?.addEventListener('click', () => {
  body.classList.toggle('mobile-nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (body.classList.contains('mobile-nav-open')) {
      body.classList.remove('mobile-nav-open');
    }
  });
});

langSelect?.addEventListener('change', () => {
  applyLanguage(langSelect.value);
});

applyLanguage(state.lang);