<!-- src/views/PhotoProductionView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span>/</span>
        <RouterLink to="/nos-services">خدماتنا</RouterLink>
        <span>/</span>
        <span class="current">التصوير الاحترافي</span>
      </div>
    </div>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>

      <div class="hero-container">
        <div class="hero-content">
          <span class="sec-tag">Photographie</span>
          <h1 class="hero-title">
            التصوير <span class="gold-gradient">الاحترافي</span>
          </h1>
          <p class="hero-sub">صور تروي قصة علامتك باحترافية</p>
          <p class="hero-desc">
            نقدم خدمات تصوير احترافية تساعدك على إبراز منتجاتك، خدماتك، وفعالياتك بأعلى جودة،
            باستخدام أحدث المعدات وتقنيات الإضاءة والمعالجة لإنتاج صور تعكس هوية علامتك التجارية.
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
          <div class="camera-icon">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none"><path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#ffffff"/></svg>
      </div>
    </section>

    <!-- ═══════════════ POURQUOI LA PHOTO PROFESSIONNELLE ═══════════════ -->
    <section class="section why-photo-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">لماذا التصوير الاحترافي؟</h2>
        </div>
        <div class="why-photo-grid">
          <div class="why-photo-item" v-for="w in whyPhoto" :key="w.label">
            <div class="why-photo-icon" v-html="w.icon"></div>
            <h4>{{ w.label }}</h4>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ OFFRES / PACKS ═══════════════ -->
    <section class="section packs-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">عروضنا</span>
          <h2 class="sec-title">عروض خدمات التصوير</h2>
        </div>
        <div class="packs-grid">
          <div class="pack-card" v-for="(p, index) in packs" :key="p.title">
            <!-- Image de l'offre -->
            <div class="pack-image">
              <img :src="p.image" :alt="p.title" />
            </div>
            <h3 class="pack-name">{{ p.title }}</h3>
            <p class="pack-price">{{ p.price }}</p>
            <ul class="pack-features">
              <li v-for="f in p.features" :key="f">{{ f }}</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: p.title + ' - ' + p.price } }" class="btn-hero-gold full-width">اطلب هذا العرض</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ COMMENT NOUS TRAVAILLONS ═══════════════ -->
    <section class="section process-section">
      <div class="wrap">
        <div class="section-head center">
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

    <!-- ═══════════════ CE QUE NOUS PHOTOGRAPHIONS ═══════════════ -->
    <section class="section types-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">ماذا نصور؟</h2>
        </div>
        <div class="types-grid">
          <div class="type-item" v-for="t in types" :key="t">
            <span class="type-dot">📷</span>
            <span>{{ t }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ STATISTIQUES ═══════════════ -->
    <section class="section stats-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">بالأرقام</h2>
        </div>
        <div class="stats-grid">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <div class="stat-icon" v-html="s.icon"></div>
            <div>
              <strong>{{ s.value }}</strong>
              <span>{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ ÉQUIPEMENT ═══════════════ -->
    <section class="section equip-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">معداتنا</h2>
        </div>
        <div class="equip-grid">
<div class="equip-item" v-for="e in equip" :key="e.label">
  <span class="equip-emoji"><img :src="e.image" :alt="e.label" /></span>
  <span>{{ e.label }}</span>
</div>
        </div>
      </div>
    </section>



  </div>
</template>

<script setup>
import { ref } from 'vue'

/* ═══ Hero badges ═══ */
const heroBadges = [
  { label: 'جودة تصوير عالية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { label: 'إبداع في الزوايا والإضاءة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>` },
  { label: 'تسليم سريع', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'معالجة احترافية للصور', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` }
]

/* ═══ Why photo ═══ */
const whyPhoto = [
  { label: 'جذب الانتباه', desc: 'صور احترافية تجعل علامتك التجارية أكثر جاذبية.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
  { label: 'زيادة المبيعات', desc: 'صور عالية الجودة تساعد العملاء على اتخاذ قرار الشراء.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>` },
  { label: 'بناء الثقة', desc: 'إظهار منتجاتك وخدماتك بصورة احترافية يعزز ثقة العملاء.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { label: 'تعزيز الهوية', desc: 'صور متناسقة تعكس هوية علامتك التجارية.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v4l2 1"/></svg>` },
  { label: 'زيادة التفاعل', desc: 'المحتوى البصري الاحترافي يحقق تفاعلاً أكبر على منصات التواصل.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { label: 'جودة مضمونة', desc: 'نعتمد أحدث التقنيات لضمان أفضل النتائج.', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` }
]

/* ═══ Process ═══ */
const processSteps = [
  { num: '01', title: 'فهم احتياجاتك', desc: 'نناقش أهداف المشروع ونحدد نوع التصوير المناسب.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { num: '02', title: 'التخطيط والإعداد', desc: 'تحضير الموقع، المعدات، والإضاءة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '03', title: 'جلسة التصوير', desc: 'تنفيذ جلسة تصوير احترافية وفق أعلى المعايير.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { num: '04', title: 'المعالجة والتعديل', desc: 'تحسين الألوان والإضاءة وإزالة العيوب بدقة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
  { num: '05', title: 'التسليم', desc: 'تسليم الصور بجودة عالية وفي الموعد المحدد.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` }
]

/* ═══ Packs (modifiés avec images) ═══ */
const packs = [
  {
    title: 'جلسة تصوير لمدة ساعتين',
    price: 'ابتداءً من 190 د.ت',
    image: '../assets/photo-session-2h.png', // ← image personnalisée
    features: ['تصوير احترافي', 'تعديل ومعالجة الصور', 'تسليم جميع الصور', 'من 25 إلى 40 صورة']
  },
  {
    title: 'جلسة تصوير لمدة 4 ساعات',
    price: 'ابتداءً من 300 د.ت',
    image: '../assets/photo-session-4h.png',
    features: ['تصوير احترافي', 'تعديل احترافي للصور', 'تسليم جميع الصور', 'من 60 إلى 100 صورة']
  },
  {
    title: 'تصوير المنتجات',
    price: 'ابتداءً من 120 د.ت',
    image: '../assets/photo-product.png',
    features: ['صور عالية الجودة', 'خلفيات متنوعة', 'إضاءة احترافية', 'معالجة كاملة للصور']
  },
  {
    title: 'تصوير المطاعم والمقاهي',
    price: 'ابتداءً من 200 د.ت',
    image: '../assets/photo-restaurant.png',
    features: ['تصوير الأطباق والمشروبات', 'تصوير الأجواء الداخلية', 'إضاءة احترافية', 'تعديل احترافي للصور']
  },
  {
    title: 'تغطية الفعاليات',
    price: 'ابتداءً من 800 د.ت',
    image: '../assets/photo-event.png',
    features: ['تغطية كاملة للفعاليات', 'تصوير احترافي للحدث', 'معالجة وتعديل الصور', 'تسليم بجودة عالية']
  }
]

/* ═══ Types ═══ */
const types = [
  'تصوير المنتجات',
  'تصوير المطاعم والمقاهي',
  'تصوير العقارات',
  'تصوير الشركات',
  'تصوير الفعاليات والمؤتمرات',
  'تصوير البورتريه الشخصي'
]

/* ═══ Stats ═══ */
const stats = [
  { value: '+250', label: 'جلسة تصوير', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { value: '+120', label: 'عميل راضٍ', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { value: '+8', label: 'سنوات خبرة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { value: '+15', label: 'نوع تصوير', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { value: '+10000', label: 'صورة تم تسليمها', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5-5 5-3-3-5 5"/></svg>` }
]

/* ═══ Equipement ═══ */
const equip = [
  { image: '../assets/equip-camera.png', label: 'كاميرات احترافية' },
  { image: '../assets/equip-lens.png', label: 'عدسات عالية الدقة' },
  { image: '../assets/equip-lighting.png', label: 'إضاءة احترافية' },
  { image: '../assets/equip-drone.png', label: 'تصوير جوي بالطائرات بدون طيار (Drone)' },
  { image: '../assets/equip-stabilizer.png', label: 'مثبتات وجيمبال احترافية' }
]
/* ═══ Why us ═══ */
const whyUs = [
  'معدات تصوير حديثة',
  'فريق محترف',
  'جودة تصوير 4K و 2K',
  'تسليم في الوقت المحدد',
  'أسعار تنافسية',
  'دعم واستشارة مجانية'
]

/* ═══ FAQ ═══ */
const faqs = [
  { q: 'ما أنواع التصوير التي تقدمونها؟', a: 'نقدم تصوير المنتجات، المطاعم، الشركات، العقارات، الفعاليات، والبورتريه.' },
  { q: 'كم تستغرق مدة التسليم؟', a: 'عادةً بين يومين وخمسة أيام عمل حسب حجم المشروع.' },
  { q: 'هل يتم تعديل الصور؟', a: 'نعم، جميع الصور تخضع لمعالجة احترافية.' },
  { q: 'هل يمكن التصوير خارج المدينة؟', a: 'نعم، نوفر خدمات التصوير في جميع المناطق حسب الاتفاق.' }
]

const openFaq = ref(0)
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

/* ═══ HERO ═══ */
.hero {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0c1230, #070b1e);
  padding: 70px 0 80px;
}
.hero-overlay { position: absolute; inset: 0; z-index: 1; background: radial-gradient(900px 460px at 82% -8%, rgba(248,177,1,0.16), transparent 60%); }
.glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2; }
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
.camera-icon { color: var(--gold); opacity: 0.85; animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; }
@media (max-width: 900px) { .hero-container { grid-template-columns: 1fr; } .hero-visual { display: none; } }

/* ═══ WHY PHOTO ═══ */
.why-photo-section { background: var(--bg-panel); }
.why-photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.why-photo-item { background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 30px 24px; text-align: center; transition: all 0.25s ease; }
.why-photo-item:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0,0,0,0.06); border-color: var(--gold); }
.why-photo-icon { width: 56px; height: 56px; border-radius: 14px; background: #fef3c7; color: var(--gold); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 1px solid rgba(248,177,1,0.3); }
.why-photo-item h4 { font-size: 17px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
.why-photo-item p { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; }
@media (max-width: 900px) { .why-photo-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .why-photo-grid { grid-template-columns: 1fr; } }

/* ═══ PROCESS ═══ */
.process-section { background: var(--bg); }
.process-track { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.process-line { position: absolute; top: 26px; left: 5%; right: 5%; height: 2px; background: repeating-linear-gradient(to right, var(--gold) 0 8px, transparent 8px 16px); z-index: 0; }
.process-step { position: relative; z-index: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
.process-dot { width: 54px; height: 54px; border-radius: 50%; background: #fff; color: var(--gold); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; border: 2px solid var(--gold); box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
.process-num { font-weight: 800; color: var(--gold); font-size: 13px; margin-bottom: 6px; }
.process-step h4 { font-size: 15px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
.process-step p { font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }
@media (max-width: 900px) { .process-track { grid-template-columns: repeat(3, 1fr); } .process-line { display: none; } }
@media (max-width: 560px) { .process-track { grid-template-columns: repeat(2, 1fr); } }

/* ═══ PACKS ═══ */
.packs-section { background: var(--bg-panel); }
.packs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.pack-card { background: var(--bg); border: 1px solid var(--border); border-radius: 20px; padding: 40px 30px; text-align: center; transition: all 0.3s ease; display: flex; flex-direction: column; }
.pack-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--gold); }
/* Image de l'offre */
.pack-image {
  width: 80px;
  height: 80px;
  margin: 0 auto 18px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid rgba(248,177,1,0.25);
}
.pack-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.pack-name { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 10px; }
.pack-price { font-size: 28px; font-weight: 800; color: var(--gold); margin-bottom: 30px; }
.pack-features { list-style: none; padding: 0; text-align: right; margin-bottom: 30px; flex: 1; }
.pack-features li { padding: 8px 0; border-bottom: 1px solid var(--border); color: var(--text-light); font-size: 14px; position: relative; padding-right: 20px; }
.pack-features li::before { content: "✓"; color: var(--gold); position: absolute; right: 0; font-weight: bold; }
.btn-hero-gold.full-width { width: 100%; margin-top: auto; }
@media (max-width: 1024px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .packs-grid { grid-template-columns: 1fr; } }

/* ═══ TYPES ═══ */
.types-section { background: var(--bg); }
.types-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.type-item { display: flex; align-items: center; gap: 12px; background: var(--bg-panel); border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px; font-size: 15px; color: var(--text-light); }
.type-dot { color: var(--gold); font-size: 20px; }
@media (max-width: 768px) { .types-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .types-grid { grid-template-columns: 1fr; } }

/* ═══ STATS ═══ */
.stats-section { background: var(--bg-panel); }
.stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
.stat-item { display: flex; align-items: center; gap: 14px; background: var(--bg); border: 1px solid var(--border); border-radius: 16px; padding: 20px; }
.stat-icon { width: 44px; height: 44px; border-radius: 12px; background: #fef3c7; color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-item strong { display: block; font-size: 22px; font-weight: 800; color: var(--gold); }
.stat-item span { font-size: 13px; color: var(--text-muted); }
@media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 560px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

/* ═══ EQUIP ═══ */
.equip-section { background: var(--bg); }
.equip-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.equip-item { display: flex; align-items: center; gap: 12px; background: var(--bg-panel); border: 1px solid var(--border); border-radius: 12px; padding: 16px 24px; font-size: 15px; color: var(--text-light); }
.equip-emoji { font-size: 24px; }

/* ═══ WHY US ═══ */
.why-us-section { background: var(--bg-panel); }
.why-us-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.why-us-item { display: flex; align-items: center; gap: 12px; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px; font-size: 15px; color: var(--text-light); }
.why-us-check { color: var(--gold); font-size: 18px; }
@media (max-width: 768px) { .why-us-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .why-us-grid { grid-template-columns: 1fr; } }

/* ═══ CTA ═══ */
.cta-simple-section { background: var(--bg-panel); }
.cta-simple { position: relative; overflow: hidden; background: linear-gradient(135deg, #fff8e6, #fffaf0); border: 1px solid rgba(248,177,1,0.3); border-radius: 24px; padding: 60px 40px; text-align: center; }
.cta-glow { position: absolute; width: 300px; height: 300px; background: rgba(248,177,1,0.12); filter: blur(90px); border-radius: 50%; top: -80px; left: 50%; transform: translateX(-50%); }
.cta-simple h3 { font-size: 28px; font-weight: 800; color: var(--text); margin-bottom: 12px; position: relative; z-index: 1; }
.cta-simple p { font-size: 16px; color: var(--text-light); max-width: 500px; margin: 0 auto 30px; position: relative; z-index: 1; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

/* ═══ FAQ ═══ */
.faq-section { background: var(--bg); }
.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item { border-bottom: 1px solid var(--border); padding: 20px 0; cursor: pointer; }
.faq-item:last-child { border-bottom: none; }
.faq-q { display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: 700; color: var(--text); }
.faq-toggle { color: var(--gold); font-size: 22px; font-weight: 800; }
.faq-a { margin-top: 12px; font-size: 14px; color: var(--text-light); line-height: 1.8; }

/* ═══ CONTACT INFO ═══ */
.contact-info-section { background: var(--bg-panel); padding: 70px 0; }
.contact-info-simple { max-width: 600px; margin: 0 auto; text-align: center; }
.info-title { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 26px; }
.info-items { display: flex; flex-direction: column; align-items: center; gap: 18px; }
.info-item { display: flex; align-items: center; gap: 12px; font-size: 15.5px; color: var(--text-light); }
.info-icon { font-size: 20px; }
.equip-emoji img {
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: block;
}
</style>