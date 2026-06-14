const navToggle = document.querySelector('.nav-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.main-nav a');
const langSelect = document.querySelector('[data-lang-select]');
const currencyLabels = document.querySelectorAll('[data-currency-label]');
const priceNodes = document.querySelectorAll('[data-price]');
const translatableNodes = document.querySelectorAll('[data-i18n]');
const ariaLabelNodes = document.querySelectorAll('[data-i18n-aria-label]');
const html = document.documentElement;

// ─── روابط نماذج Airtable ────────────────────────────────────────────────────
const FORM_LINKS = {
  ar: 'https://airtable.com/appkYurrIYGIup8QH/shrUOqxX19nXgoHqR',
  en: 'https://airtable.com/appkYurrIYGIup8QH/shrAt8THaVjwmP3LR'
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
    'footer.title': 'هل أنتِ مستعدة للانطلاق مع Scintix؟',
    'footer.description': 'ابدئي استراتيجية رقمية جديدة مع فريق متخصص في التحول الرقمي والتجربة المتميزة.',
    'footer.cta': 'ابدأ الآن',
    'subfooter.about':   'من نحن ورؤيتنا',
    'subfooter.policy':  'السياسات',
    'subfooter.contact': 'جهات التواصل',
    'subfooter.support': 'الدعم',
    'subfooter.cr':      'السجل التجاري'
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
    'features.security.body': 'End-to-end protection with secure architecture and strong data privacy to keep your customers trust.',
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
    'footer.description': 'Start a new digital strategy with a team specialized in digital transformation and premium experience.',
    'footer.cta': 'Get Started',
    'subfooter.about':   'About & Vision',
    'subfooter.policy':  'Policies',
    'subfooter.contact': 'Contact Info',
    'subfooter.support': 'Support',
    'subfooter.cr':      'Commercial Registration'
  }
};

const currencyLabelsByLang = {
  ar: { sar: 'SAR / شهرياً', usd: '$ / month' },
  en: { sar: 'SAR / month',  usd: '$ / month' }
};

const state = {
  lang:     localStorage.getItem('scintix-lang')     || 'ar',
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

function updateFormLinks(lang) {
  document.querySelectorAll('a[data-form-link]').forEach(link => {
    link.href = FORM_LINKS[lang];
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

function buildSubFooter(lang) {
  const existing = document.getElementById('scintix-subfooter');
  if (existing) existing.remove();

  const t = translations[lang];
  const CR_NUMBER = '1234567890'; // ← ضعي رقم السجل التجاري الفعلي هنا
  const isAr = lang === 'ar';
  const year = new Date().getFullYear();

  const navItems = [
    { key: 'subfooter.about',   href: '#about'   },
    { key: 'subfooter.policy', href: 'policies.html' }
    { key: 'subfooter.contact', href: '#contact' },
    { key: 'subfooter.support', href: '#support' }
  ];

  const sf = document.createElement('div');
  sf.id = 'scintix-subfooter';
  sf.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  sf.style.cssText = [
    'margin-top:0',
    'padding:28px 34px 24px',
    'background:rgba(2,5,18,0.98)',
    'border-top:1px solid rgba(255,255,255,0.06)',
    'font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif'
  ].join(';');

  // ── روابط التنقل ──────────────────────────────────────────────────────────
  const navDiv = document.createElement('div');
  navDiv.style.cssText = 'display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:20px';

  navItems.forEach(({ key, href }) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = t[key];
    a.style.cssText = [
      'color:rgba(255,255,255,0.45)',
      'font-size:0.82rem',
      'text-decoration:none',
      'padding:6px 16px',
      'border:1px solid rgba(255,255,255,0.08)',
      'border-radius:999px',
      'transition:all 0.2s',
      'white-space:nowrap'
    ].join(';');
    a.onmouseover = () => {
      a.style.color = '#5cf0ff';
      a.style.borderColor = 'rgba(92,240,255,0.3)';
    };
    a.onmouseout = () => {
      a.style.color = 'rgba(255,255,255,0.45)';
      a.style.borderColor = 'rgba(255,255,255,0.08)';
    };
    navDiv.appendChild(a);
  });

  // ── فاصل ──────────────────────────────────────────────────────────────────
  const divider = document.createElement('div');
  divider.style.cssText = 'height:1px;background:rgba(255,255,255,0.05);margin-bottom:20px';

  // ── صف: السجل التجاري + رؤية 2030 ────────────────────────────────────────
  const bottomRow = document.createElement('div');
  bottomRow.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px';

  // السجل التجاري
  const crDiv = document.createElement('div');
  crDiv.style.cssText = 'display:flex;align-items:center;gap:8px';

  const crLabel = document.createElement('span');
  crLabel.textContent = t['subfooter.cr'] + ':';
  crLabel.style.cssText = 'color:rgba(255,255,255,0.25);font-size:0.75rem';

  const crValue = document.createElement('span');
  crValue.textContent = CR_NUMBER;
  crValue.style.cssText = [
    'color:rgba(92,240,255,0.7)',
    'font-size:0.82rem',
    'font-weight:600',
    'letter-spacing:0.06em',
    'font-family:monospace'
  ].join(';');

  crDiv.appendChild(crLabel);
  crDiv.appendChild(crValue);

  // شعار رؤية 2030 — صورة من مجلد assets
  const visionDiv = document.createElement('div');
  visionDiv.style.cssText = 'display:flex;align-items:center;gap:10px';

  const visionLabel = document.createElement('span');
  visionLabel.textContent = isAr ? 'نفخر بدعم رؤية المملكة 2030' : 'Proud supporter of Saudi Vision 2030';
  visionLabel.style.cssText = 'color:rgba(255,255,255,0.3);font-size:0.75rem';

  const visionImg = document.createElement('img');
  visionImg.src = 'assets/vision2030.svg';
  visionImg.alt = isAr ? 'رؤية 2030' : 'Vision 2030';
  visionImg.style.cssText = 'height:40px;opacity:0.85;flex-shrink:0;object-fit:contain';
  visionImg.onerror = function() {
    // إذا لم يوجد الملف، أخفِ الصورة بدون خطأ
    this.style.display = 'none';
  };

  visionDiv.appendChild(visionLabel);
  visionDiv.appendChild(visionImg);

  bottomRow.appendChild(crDiv);
  bottomRow.appendChild(visionDiv);

  // ── حقوق النشر ────────────────────────────────────────────────────────────
  const copyright = document.createElement('p');
  copyright.style.cssText = [
    'text-align:center',
    'color:rgba(255,255,255,0.2)',
    'font-size:0.72rem',
    'margin:18px 0 0',
    'letter-spacing:0.04em'
  ].join(';');
  copyright.textContent = `© ${year} Scintix Digital Solutions. ${isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}`;

  // ── تجميع كل العناصر ─────────────────────────────────────────────────────
  sf.appendChild(navDiv);
  sf.appendChild(divider);
  sf.appendChild(bottomRow);
  sf.appendChild(copyright);

  document.querySelector('.page-shell').appendChild(sf);
}

function applyLanguage(lang) {
  state.lang = lang;
  state.currency = lang === 'en' ? 'usd' : 'sar';
  html.lang = lang;
  html.dir = lang === 'en' ? 'ltr' : 'rtl';

  translatableNodes.forEach(node => {
    const key   = node.dataset.i18n;
    const value = translations[lang][key];
    if (!value) return;
    if (node.dataset.i18nHtml === 'true' || key === 'hero.title' || key === 'header.tagline') {
      node.innerHTML = value;
    } else {
      node.textContent = value;
    }
  });

  ariaLabelNodes.forEach(node => {
    const key   = node.dataset.i18nAriaLabel;
    const value = translations[lang][key];
    if (value) node.setAttribute('aria-label', value);
  });

  document.title = translations[lang]['page.title'];
  if (langSelect) langSelect.value = lang;

  currencyLabels.forEach(node => {
    node.textContent = currencyLabelsByLang[lang][state.currency];
  });

  localStorage.setItem('scintix-lang', lang);
  localStorage.setItem('scintix-currency', state.currency);

  updateFormLinks(lang);
  applyCurrency(state.currency);
  buildSubFooter(lang);
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
<script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="-itf2CNf19xa0q7z76P41";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>