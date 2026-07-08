<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span>/</span>
        <RouterLink to="/nos-services">خدماتنا</RouterLink>
        <span>/</span>
        <span class="current">الإعلانات الممولة</span>
      </div>
    </div>

    <!-- ═══════════════ HERO AVEC VIDÉO EN FOND ═══════════════ -->
    <section class="hero">
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
        :src="heroVideo"
      ></video>

      <div class="hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>

      <div class="hero-container">
        <div class="hero-content">
          <span class="sec-tag">Ads Manager</span>
          <h1 class="hero-title">
            الإعلانات <span class="gold-gradient">الممولة</span>
          </h1>
          <p class="hero-sub">نصمم حملات مدروسة تحقق لك أفضل النتائج</p>
          <p class="hero-desc">
            نصمم حملات إعلانية مدروسة تحقق لك أفضل النتائج بأقل التكاليف،
            ونصل بعلامتك التجارية إلى الجمهور المناسب في الوقت المناسب.
          </p>

          <div class="hero-badges">
            <div class="hero-badge" v-for="b in heroBadges" :key="b.label">
              <span class="hero-badge-icon" v-html="b.icon"></span>
              <span>{{ b.label }}</span>
            </div>
          </div>

          <div class="hero-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>

        <div class="hero-visual">
          <div class="print-icon">
            <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 11l18-7-7 18-3-8-8-3z" />
              <path d="M13 13l-4 4" />
              <circle cx="19" cy="5" r="1.4" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none"><path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#ffffff"/></svg>
      </div>
    </section>

    <!-- ═══════════════ OFFRES / BAQAT ═══════════════ -->
    <section class="section offers-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">باقاتنا</span>
          <h2 class="sec-title">عروض خدمات الإعلانات الممولة</h2>
          <p class="sec-desc">نستهدف جمهورك المناسب ونحقق نتائج حقيقية</p>
        </div>

        <div class="offers-grid">
          <div class="offer-card" v-for="o in offers" :key="o.duration" :class="{ featured: o.featured }">
            <span v-if="o.featured" class="offer-ribbon">الأكثر طلبًا</span>
            <div class="offer-icon" v-html="o.icon"></div>
            <div class="offer-duration">المدّة : {{ o.duration }}</div>
            <div class="offer-price">{{ o.price }} <span>DT</span></div>
            <div class="offer-price-label" v-if="o.priceLabel">{{ o.priceLabel }}</div>
            <ul class="offer-features">
              <li v-for="f in o.features" :key="f">
                <span class="offer-check">✔</span>{{ f }}
              </li>
            </ul>
            
            <div class="offer-action">
             <button @click="handleAdClick(o.packValue)" class="btn-book-now">  احجز الآن
 </button>

            </div>

          </div>
        </div>

        <div class="offer-formula">
          <p class="formula-title">يمكن إحتساب أسعار الحملات الخاصة من خلال الصيغة التالية</p>
          <div class="formula-line">
            <strong>3.5</strong> دينار &nbsp;×&nbsp; عدد الأيام &nbsp;×&nbsp; عدد الولايات
          </div>

          <div class="calc-navigate-btn">
            <RouterLink to="/contact#price-calculator" class="btn-hero-gold">
              احسب السعر الإجمالي لحملتك
            </RouterLink>
          </div>
        </div>

        <div class="offer-perks">
          <div class="offer-perk" v-for="p in offerPerks" :key="p.label">
            <span v-html="p.icon"></span>
            <span>{{ p.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ POURQUOI ═══════════════ -->
    <section class="section why-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">المزايا</span>
          <h2 class="sec-title">لماذا الإعلانات الممولة؟</h2>
          <p class="sec-desc">إعلانات ممولة تصل بمنتجاتك التجارية أمام شريحة أوسع من العملاء الحقيقيين</p>
        </div>
        <div class="services-grid why-services-grid">
          <div class="service-card" v-for="w in whyServices" :key="w.label">
            <div class="service-icon" :style="{ background: w.bg, color: w.color }" v-html="w.icon"></div>
            <h4>{{ w.label }}</h4>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ COMMENT NOUS TRAVAILLONS ═══════════════ -->
    <section class="section process-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">آلية العمل</span>
          <h2 class="sec-title">كيف نعمل؟</h2>
        </div>
        <div class="process-track">
          <div class="process-line"></div>
          <div class="process-step" v-for="p in processSteps" :key="p.num">
            <div class="process-dot" v-html="p.icon"></div>
            <span class="process-num">{{ p.num }}</span>
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PLATEFORMES ═══════════════ -->
    <section class="section platforms-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">شركاؤنا</span>
          <h2 class="sec-title">المنصات التي نعمل عليها</h2>
        </div>
        <div class="platforms-grid">
          <div class="platform-card" v-for="p in platforms" :key="p.label">
            <div class="platform-icon" v-html="p.icon"></div>
            <h4>{{ p.label }}</h4>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ STATS BAR ═══════════════ -->
    <section class="stats-bar-section">
      <div class="wrap">
        <div class="stats-bar">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <span class="stat-icon" v-html="s.icon"></span>
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CTA ═══════════════ -->
    <section class="section cta-simple-section">
      <div class="wrap">
        <div class="cta-simple">
          <div class="cta-glow"></div>
          <h3>جاهز لتطوير عملك؟</h3>
          <p>دعنا نطلق حملة إعلانية تحقق لك نتائج حقيقية وتضعك في المقدمة.</p>
          <div class="cta-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<!-- src/views/SponsoredAdsView.vue -->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStorage } from '../composables/useAdminStorage'

const router = useRouter()
const { saveMessage } = useAdminStorage()

function handleAdClick(packValue) {
  saveMessage({
    name: 'Visiteur site',
    email: '',
    phone: '',
    pack: packValue,
    message: `Demande d'information pour la campagne publicitaire : ${packValue}`,
    source: 'sponsored-ads'
  })
  router.push({ name: 'contact', query: { pack: packValue } })
}

// ═══ Remplacer dans le template ═══
// <RouterLink :to="'/contact?pack=' + encodeURIComponent(o.packValue)" class="btn-book-now">
//   احجز الآن
// </RouterLink>
// 
// Par :
// <button @click="handleAdClick(o.packValue)" class="btn-book-now">
//   احجز الآن
// </button>

/* ═══ Hero badges ═══ */
const heroBadges = [
  { label: 'تقارير شفافة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>` },
  { label: 'نتائج قابلة للقياس', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
  { label: 'تحكم كامل بالميزانية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` },
  { label: 'استهداف دقيق', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>` }
]

/* ═══ Offres / Baqat ═══ */
const offers = [
  {
    duration: '7 أيام',
    price: '130',
    featured: false,
    priceLabel: 'الحملة',
    packValue: '7 أيام - 130 DT',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    features: [
      'مساحة جغرافية تصل إلى 5 ولايات',
      'إستراتيجية إعلانية',
      'إجابة أوتوماتيكية',
      'متابعة و تحسين الآداء',
      'تقرير مفصل',
      'توصيات تقنية و تسويقية'
    ]
  },
  {
    duration: '14 يوم',
    price: '250',
    featured: true,
    priceLabel: null,
    packValue: '14 يوم - 250 DT',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    features: [
      'مساحة جغرافية تصل إلى 12 ولاية',
      'إستراتيجية إعلانية',
      'إجابة أوتوماتيكية',
      'متابعة و تحسين الآداء',
      'تقرير مفصل',
      'توصيات تقنية و تسويقية'
    ]
  },
  {
    duration: '30 يوم',
    price: '590',
    featured: false,
    priceLabel: null,
    packValue: '30 يوم - 590 DT',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>`,
    features: [
      'مساحة جغرافية تصل إلى 10 ولايات',
      'إستراتيجية إعلانية',
      'إجابة أوتوماتيكية',
      'متابعة و تحسين الآداء',
      'تقرير مفصل',
      'توصيات تقنية و تسويقية'
    ]
  }
]

const offerPerks = [
  { label: 'إستهداف دقيق لجمهورك', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>` },
  { label: 'تحليل و قياس النتائج', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
  { label: 'تحسين مستمر للعائد على الإستثمار', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` },
  { label: 'حملات آمنة و مضمونة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { label: 'تقارير دورية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` }
]

/* ═══ Pourquoi (5 cartes) ═══ */
const whyServices = [
  {
    label: 'الوصول للجمهور المناسب',
    desc: 'نستهدف الفئة المهتمة بمنتجاتك وخدماتك بدقة عالية.',
    bg: '#fef3c7', color: '#f8b101',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    label: 'زيادة الظهور والوعي',
    desc: 'نرفع من ظهور علامتك التجارية أمام شريحة أوسع من العملاء.',
    bg: '#e8f0fe', color: '#1877f2',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    label: 'زيادة المبيعات والعملاء',
    desc: 'حملات فعّالة تترجم التفاعل إلى نتائج ومبيعات حقيقية.',
    bg: '#e6f7ed', color: '#00a86b',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  },
  {
    label: 'تحكم كامل في الميزانية',
    desc: 'تحدد ميزانيتك وتتحكم في إنفاقك لتحقيق أفضل عائد.',
    bg: '#fde7f1', color: '#d62976',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>`
  },
  {
    label: 'تحليلات وتقارير دقيقة',
    desc: 'نقدم لك تقارير لقياس وضبط الأداء وتحسين النتائج باستمرار.',
    bg: '#eceff3', color: '#111111',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`
  }
]

/* ═══ Process ═══ */
const processSteps = [
  { num: '01', title: 'تحليل النشاط', desc: 'ندرس نشاطك التجاري ومنافسيك ونفهم جمهورك.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  { num: '02', title: 'تحديد الأهداف', desc: 'نحدد هدف الحملة (زيارات، رسائل، مبيعات...).', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>` },
  { num: '03', title: 'إعداد الحملة', desc: 'تصميم الإعلانات وضبط الاستهداف والميزانية.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '04', title: 'إطلاق الحملة', desc: 'ننشر الحملة ونراقب الأداء لحظة بلحظة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11l18-7-7 18-3-8-8-3z"/></svg>` },
  { num: '05', title: 'تحسين مستمر', desc: 'نحلل النتائج ونحسّن الحملة لتحقيق أفضل النتائج.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` },
  { num: '06', title: 'تقارير دورية', desc: 'نرسل لك تقارير مفصلة عن الأداء والنتائج.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>` }
]

/* ═══ Plateformes ═══ */
const platforms = [
  {
    label: 'Facebook Ads',
    desc: 'إعلانات فعّالة على فيسبوك لتوسيع لصفحاتك ومحتواك.',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1877F2"/><path d="M15.5 8.5h-1.7c-.4 0-.8.4-.8.9V11h2.5l-.4 2.4h-2.1V19h-2.5v-5.6H8.5V11h2v-1.8c0-1.9 1.1-3.2 3-3.2h2v2.5z" fill="#fff"/></svg>`
  },
  {
    label: 'Instagram Ads',
    desc: 'إعلانات جذابة على إنستغرام لتعزيز التفاعل والمبيعات.',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24"><defs><linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#feda75"/><stop offset="0.35" stop-color="#d62976"/><stop offset="0.7" stop-color="#962fbf"/><stop offset="1" stop-color="#4f5bd5"/></linearGradient></defs><circle cx="12" cy="12" r="12" fill="url(#igGrad)"/><rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="15.3" cy="8.7" r="0.7" fill="#fff"/></svg>`
  },
  {
    label: 'TikTok Ads',
    desc: 'وصول جديد وإبداعي على إنستغرام يجذب النقاط بفاعلية.',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#111111"/><path d="M14.8 6.2c.4 1.2 1.3 2.1 2.6 2.4v1.9c-1-.03-1.9-.35-2.6-.86v4.3c0 2.2-1.8 4-4 4-2.2 0-4-1.8-4-4s1.8-4 4-4c.2 0 .4.02.6.05v1.98c-.2-.06-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2V5.5h1.9c.02.24.06.47.1.7z" fill="#fff"/></svg>`
  },
  {
    label: 'Google Ads',
    desc: 'إعلانات على محركات البحث لجذب عملاء جدد بفاعلية.',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" stroke="#e6e8ec" stroke-width="1"/><path d="M17.6 12.2c0-.5 0-1-.14-1.5H12v2.9h3.16c-.14.75-.56 1.38-1.2 1.8v1.5h1.94c1.14-1.05 1.8-2.6 1.8-4.7z" fill="#4285F4"/><path d="M12 18c1.62 0 2.98-.54 3.9-1.46l-1.94-1.5c-.54.36-1.24.58-1.96.58-1.5 0-2.78-1.02-3.24-2.4H6.76v1.55C7.68 16.68 9.68 18 12 18z" fill="#34A853"/><path d="M8.76 13.22a3.6 3.6 0 0 1 0-2.44V9.23H6.76a6 6 0 0 0 0 5.54l2-1.55z" fill="#FBBC05"/><path d="M12 8.38c.88 0 1.68.3 2.3.9l1.72-1.72C14.98 6.5 13.62 6 12 6 9.68 6 7.68 7.32 6.76 9.23l2 1.55c.46-1.38 1.74-2.4 3.24-2.4z" fill="#EA4335"/></svg>`
  },
  {
    label: 'YouTube Ads',
    desc: 'إعلانات فيديو تصل لأكبر شريحة من المشاهدين المهتمين.',
    icon: `<svg width="34" height="34" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF0000"/><path d="M9.8 8.6l6 3.4-6 3.4z" fill="#fff"/></svg>`
  }
]

/* ═══ Stats bar ═══ */
const stats = [
  { value: '+250', label: 'حملة إعلانية', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { value: '+120', label: 'عميل سعيد', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { value: '+8M', label: 'دينار ميزانية مُدارة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` },
  { value: '+40M', label: 'مرات ظهور', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
  { value: '+35%', label: 'متوسط زيادة المبيعات', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>` }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

.infinity-site {
  --gold: #f8b101;
  --bg: #ffffff;
  --bg-alt: #fafafa;
  --bg-panel: #f7f8fa;
  --border: #e6e8ec;
  --text: #1a202c;
  --text-light: #4a5568;
  --text-muted: #718096;
  font-family: 'Cairo', 'Tajawal', sans-serif;
  background: var(--bg);
  color: var(--text);
  direction: rtl;
  overflow-x: hidden;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }
.section-head.center { text-align: center; margin-bottom: 56px; }
.sec-tag { display: inline-block; background: rgba(248, 177, 1, 0.1); color: var(--gold); padding: 6px 18px; border-radius: 50px; font-size: 13px; font-weight: 700; margin-bottom: 16px; border: 1px solid rgba(248, 177, 1, 0.3); }
.sec-title { font-size: clamp(28px, 3vw, 38px); font-weight: 800; color: var(--text); margin-bottom: 12px; }
.sec-desc { font-size: 16px; color: var(--text-muted); max-width: 600px; margin: 0 auto; }

/* ═══ BREADCRUMB ═══ */
.breadcrumb { background: var(--bg-panel); padding: 12px 0; border-bottom: 1px solid var(--border); }
.breadcrumb .wrap { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-muted); }
.breadcrumb a { color: var(--text-light); text-decoration: none; }
.breadcrumb a:hover { color: var(--gold); }
.breadcrumb .current { color: var(--gold); font-weight: 700; }

/* ═══ HERO AVEC VIDÉO ═══ */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 70px 0 80px;
}
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(12, 18, 48, 0.65);
}
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 2;
}
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.16); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.1); }

.hero-container {
  position: relative; z-index: 3;
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center;
  width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px;
}
.hero-content { text-align: right; }
.hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.2; margin: 14px 0 10px; color: #fff; }
.gold-gradient { background: linear-gradient(to right, #f8b101, #ffd04b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-sub { font-size: 20px; font-weight: 700; color: var(--gold); margin-bottom: 16px; }
.hero-desc { font-size: 17px; color: #b9c0d6; line-height: 1.8; margin-bottom: 28px; max-width: 480px; }

.hero-badges { display: flex; flex-wrap: wrap; gap: 22px; margin-bottom: 30px; }
.hero-badge { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12.5px; color: #cfd4ec; text-align: center; width: 84px; }
.hero-badge-icon { width: 46px; height: 46px; border-radius: 12px; border: 1px solid rgba(248,177,1,0.35); display: flex; align-items: center; justify-content: center; color: var(--gold); background: rgba(248,177,1,0.1); }

.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-hero-gold, .btn-hero-outline { display: inline-flex; align-items: center; justify-content: center; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; }
.btn-hero-gold { background: var(--gold); color: #1a1a1a; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.35); }
.btn-hero-gold:hover { background: #db9c00; transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.45); }
.btn-hero-outline { background: transparent; color: #fff; border-color: rgba(255,255,255,0.25); }
.btn-hero-outline:hover { background: rgba(255, 255, 255, 0.08); border-color: var(--gold); transform: translateY(-3px); }

.hero-visual { display: flex; align-items: center; justify-content: center; }
.print-icon { color: var(--gold); opacity: 0.85; animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; }
@media (max-width: 900px) { .hero-container { grid-template-columns: 1fr; } .hero-visual { display: none; } }

/* ═══ OFFERS / BAQAT ═══ */
.offers-section { background: var(--bg-panel); }
.offers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: stretch; }
.offer-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 34px 26px;
  text-align: center;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
}
.offer-card:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0,0,0,0.07); }
.offer-card.featured {
  border: 2px solid var(--gold);
  box-shadow: 0 16px 34px rgba(248,177,1,0.18);
  transform: scale(1.04);
}
.offer-card.featured:hover { transform: scale(1.04) translateY(-6px); }
.offer-ribbon {
  position: absolute; top: 18px; left: -34px;
  background: var(--gold); color: #1a1a1a;
  font-size: 11.5px; font-weight: 800;
  padding: 5px 40px; transform: rotate(-45deg);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.offer-icon { width: 60px; height: 60px; margin: 0 auto 14px; border-radius: 50%; background: #fef3c7; color: var(--gold); display: flex; align-items: center; justify-content: center; }
.offer-card.featured .offer-icon { background: var(--gold); color: #1a1a1a; }
.offer-duration { display: inline-block; background: #fef3c7; color: #8a6300; font-weight: 700; font-size: 13.5px; padding: 6px 18px; border-radius: 8px; margin-bottom: 16px; }
.offer-price { font-size: 40px; font-weight: 800; color: var(--text); margin-bottom: 2px; }
.offer-price span { font-size: 16px; font-weight: 700; color: var(--text-muted); }
.offer-price-label { font-size: 13px; color: var(--text-muted); margin-bottom: 10px; }
.offer-card.featured .offer-price { margin-top: 6px; }
.offer-features { list-style: none; padding: 0; margin: 18px 0 0; text-align: right; display: flex; flex-direction: column; gap: 12px; flex-grow: 1; }
.offer-features li { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--text-light); }
.offer-check { color: var(--gold); font-weight: 900; }

.offer-action { margin-top: 16px; }
.btn-book-now {
  display: block;
  width: 100%;
  padding: 12px 20px;
  background: var(--gold);
  color: #1a1a1a;
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}
.btn-book-now:hover {
  background: #db9c00;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(248, 177, 1, 0.3);
}
.offer-card.featured .btn-book-now {
  background: #f8b101;
  color: #1a1a1a;
}
.offer-card.featured .btn-book-now:hover {
  background: #e09d00;
}

.offer-formula { text-align: center; background: #0c1230; color: #fff; border-radius: 16px; padding: 30px 24px; margin: 40px 0; }
.formula-title { font-size: 15px; margin-bottom: 6px; color: #cfd4ec; }
.formula-line { font-size: 16px; margin-bottom: 26px; color: #fff; }
.formula-line strong { color: var(--gold); font-size: 19px; }
.calc-navigate-btn { display: flex; justify-content: center; margin-top: 24px; }
.calc-navigate-btn .btn-hero-gold { padding: 16px 38px; font-size: 16px; }

.offer-perks { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; }
.offer-perk { display: flex; align-items: center; gap: 10px; font-size: 13.5px; font-weight: 700; color: var(--text-light); background: #fff; border: 1px solid var(--border); padding: 12px 20px; border-radius: 12px; }
.offer-perk span:first-child { color: var(--gold); display: flex; }
@media (max-width: 900px) { .offers-grid { grid-template-columns: 1fr; } .offer-card.featured { transform: none; } .offer-card.featured:hover { transform: translateY(-6px); } }

/* ═══ WHY (5 cartes en grille de services) ═══ */
.why-section { background: var(--bg); }
.services-grid.why-services-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px; }
@media (max-width: 1100px) { .services-grid.why-services-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 700px) { .services-grid.why-services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .services-grid.why-services-grid { grid-template-columns: 1fr; } }
.service-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 16px; padding: 30px 20px; text-align: center; transition: all 0.25s ease; }
.service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0,0,0,0.06); border-color: var(--gold); }
.service-icon { width: 60px; height: 60px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
.service-card h4 { font-size: 16.5px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
.service-card p { font-size: 13px; color: var(--text-muted); line-height: 1.7; }

/* ═══ PROCESS ═══ */
.process-section { background: var(--bg-panel); }
.process-track { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
.process-line { position: absolute; top: 26px; left: 5%; right: 5%; height: 2px; background: repeating-linear-gradient(to right, var(--gold) 0 8px, transparent 8px 16px); z-index: 0; }
.process-step { position: relative; z-index: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
.process-dot { width: 54px; height: 54px; border-radius: 50%; background: #fff; color: var(--gold); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; border: 2px solid var(--gold); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.process-num { font-weight: 800; color: var(--gold); font-size: 13px; margin-bottom: 6px; }
.process-step h4 { font-size: 15px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
.process-step p { font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }
@media (max-width: 900px) { .process-track { grid-template-columns: repeat(3, 1fr); } .process-line { display: none; } }
@media (max-width: 560px) { .process-track { grid-template-columns: repeat(2, 1fr); } }

/* ═══ PLATFORMS ═══ */
.platforms-section { background: var(--bg); }
.platforms-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.platform-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 16px; padding: 28px 18px; text-align: center; transition: all 0.25s ease; }
.platform-card:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0,0,0,0.06); border-color: var(--gold); }
.platform-icon { width: 54px; height: 54px; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; }
.platform-card h4 { font-size: 15.5px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
.platform-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }
@media (max-width: 1024px) { .platforms-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 560px) { .platforms-grid { grid-template-columns: repeat(2, 1fr); } }

/* ═══ STATS BAR ═══ */
.stats-bar-section { background: #0c1230; padding: 46px 0; }
.stats-bar { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; color: #fff; }
.stat-icon { color: var(--gold); }
.stat-value { font-size: 26px; font-weight: 800; color: var(--gold); }
.stat-label { font-size: 12.5px; color: #b9c0d6; }
@media (max-width: 900px) { .stats-bar { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 560px) { .stats-bar { grid-template-columns: repeat(2, 1fr); } }

/* ═══ CTA ═══ */
.cta-simple-section { background: var(--bg); }
.cta-simple { position: relative; overflow: hidden; background: linear-gradient(135deg, #0c1230, #182352); border: 1px solid rgba(248,177,1,0.3); border-radius: 24px; padding: 60px 40px; text-align: center; }
.cta-glow { position: absolute; width: 300px; height: 300px; background: rgba(248,177,1,0.16); filter: blur(90px); border-radius: 50%; top: -80px; left: 50%; transform: translateX(-50%); }
.cta-simple h3 { font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 12px; position: relative; z-index: 1; }
.cta-simple p { font-size: 16px; color: #b9c0d6; max-width: 500px; margin: 0 auto 30px; position: relative; z-index: 1; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
</style>