<!-- src/views/CalendriersProductView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/nos-services">خدماتنا</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">التقاويم الإشهارية</span>
      </div>
    </div>

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-grid-pattern"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>

      <div class="hero-container">
        <div class="hero-content">
          <span class="sec-tag hero-tag">
            <span class="tag-dot"></span>
            Calendriers
          </span>
          <h1 class="hero-title">
            التقاويم <span class="gold-gradient">الإشهارية</span>
          </h1>
          <p class="hero-sub">تقاويم مكتبية وحائطية مخصصة لتبقى علامتك حاضرة طوال السنة</p>
          <p class="hero-desc">
            نقدم خدمة تصميم وطباعة التقاويم الإشهارية بجودة عالية،
            هدية عملية ودائمة الحضور لعملائك وموظفيك مع إمكانية تخصيص كامل حسب هويتك.
          </p>

          <div class="hero-badges">
            <div class="hero-badge" v-for="b in heroBadges" :key="b.label">
              <span class="hero-badge-icon" v-html="b.icon"></span>
              <span>{{ b.label }}</span>
            </div>
          </div>

          <div class="hero-actions">
            <RouterLink :to="contactLink" class="btn-hero-gold">
              اطلب عرض سعر
              <span class="btn-arrow">←</span>
            </RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>

        <div class="hero-visual">
          <div class="visual-frame">
            <div class="visual-ring ring-1"></div>
            <div class="visual-ring ring-2"></div>
            <div class="print-icon">
              <svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
          </div>

          <div class="glass-chip chip-1">
            <span class="chip-icon" v-html="icons.calendar"></span>
            <div>
              <strong>+500</strong>
              <small>تقويم منجز</small>
            </div>
          </div>

          <div class="glass-chip chip-2">
            <span class="chip-icon" v-html="icons.custom"></span>
            <div>
              <strong>تصميم مخصص</strong>
              <small>بشعارك وهويتك</small>
            </div>
          </div>

          <div class="glass-chip chip-3">
            <span class="chip-icon" v-html="icons.year"></span>
            <div>
              <strong>هدية سنوية</strong>
              <small>تدوم 365 يوماً</small>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>

    <!-- ═══════════════ STATS BAND ═══════════════ -->
    <section class="stats-band">
      <div class="wrap stats-grid">
        <div class="stat-item" v-for="st in statItems" :key="st.label">
          <span class="stat-icon" v-html="st.icon"></span>
          <div>
            <strong>{{ st.value }}</strong>
            <span>{{ st.label }}</span>
          </div>
        </div>
      </div>
    </section>
 <!-- ═══════════════ TARIFS ═══════════════ -->
    <section class="section pricing-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">الأسعار</span>
          <h2 class="sec-title">باقات التقاويم الإشهارية</h2>
          <p class="sec-desc">أسعار تنافسية مع إمكانية تخصيص الكمية والتصميم</p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-card" v-for="plan in pricingPlans" :key="plan.name">
            <div class="plan-header">
              <h3>{{ plan.name }}</h3>
              <p>{{ plan.type }}</p>
            </div>
            <div class="plan-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span class="price-currency">د.ت</span>
              <span class="price-unit">/ للوحدة</span>
            </div>
            <ul class="plan-features">
              <li v-for="feat in plan.features" :key="feat">
                <span class="plan-check">✓</span>
                <span>{{ feat }}</span>
              </li>
            </ul>
            <RouterLink 
              :to="{ 
                name: 'contact', 
                query: { 
                  pack: 'التقاويم الإشهارية',
                  message: `طلب ${plan.name} - ${plan.type} - السعر: ${plan.price} د.ت`
                } 
              }" 
              class="btn-hero-gold plan-btn"
            >
              اطلب الآن
              <span class="btn-arrow">←</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ TYPES DE CALENDRIERS ═══════════════ -->
    <section class="section services-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">أنواع التقاويم</span>
          <h2 class="sec-title">خيارات متعددة من التقاويم الإشهارية</h2>
          <p class="sec-desc">نقدم مجموعة متنوعة من أنواع التقاويم لتناسب احتياجاتك الإعلانية</p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-for="item in calendarTypes" :key="item.title">
            <div class="service-card-glow" :style="{ background: item.glow }"></div>
            <div class="service-content-full">
              <div class="service-icon-wrap">
                <span class="service-emoji">{{ item.icon }}</span>
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
              <ul class="service-specs">
                <li v-for="spec in item.specs" :key="spec">
                  <span class="spec-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{{ spec }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS ═══════════════ -->
    <section class="section why-section">
      <div class="why-bg-shape shape-1"></div>
      <div class="why-bg-shape shape-2"></div>
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">المواصفات</span>
          <h2 class="sec-title">خيارات التصميم والتخصيص</h2>
          <p class="sec-desc">نوفر مجموعة واسعة من الخيارات لتناسب هويتك البصرية</p>
        </div>
        <div class="why-grid">
          <div class="why-card" v-for="(spec, idx) in specifications" :key="spec.label">
            <div class="why-num">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="why-icon" v-html="spec.icon"></div>
            <h4>{{ spec.label }}</h4>
            <p>{{ spec.desc }}</p>
          </div>
        </div>
      </div>
    </section>

   


  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

/* ═══════════════ ICÔNES ═══════════════ */
const icons = {
  calendar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  custom: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  year: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
}

/* ═══════════════ LIEN VERS CONTACT ═══════════════ */
const contactLink = computed(() => ({
  name: 'contact',
  query: {
    pack: 'التقاويم الإشهارية',
    message: 'طلب تصميم وطباعة تقاويم إشهارية'
  }
}))

/* ═══════════════ HERO BADGES ═══════════════ */
const heroBadges = [
  { label: 'تصميم مخصص', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { label: 'طباعة فاخرة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 6 2 18 2 18 9"/><rect x="4" y="9" width="16" height="11" rx="1"/></svg>` },
  { label: 'ورق عالي الجودة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>` },
  { label: 'تسليم سريع', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` }
]

/* ═══════════════ STATS ═══════════════ */
const statItems = [
  { value: '+500', label: 'تقويم منجز', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="18" rx="2"/></svg>` },
  { value: '+150', label: 'عميل راضٍ', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>` },
  { value: '5-7', label: 'أيام للتنفيذ', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { value: '100%', label: 'نسبة الرضا', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` }
]

/* ═══════════════ TYPES DE CALENDRIERS ═══════════════ */
const calendarTypes = [
  {
    icon: '📅',
    title: 'تقويم مكتبي',
    desc: 'تقويم صغير يوضع على المكتب مع قاعدة مثلثة، مثالي للمكاتب والاستقبال',
    specs: ['12 صفحة', 'ورق لامع 200g', 'قاعدة مثلثة', 'تصميم مخصص'],
    glow: 'radial-gradient(circle, rgba(248,177,1,0.18), transparent 70%)'
  },
  {
    icon: '🖼️',
    title: 'تقويم حائطي',
    desc: 'تقويم كبير للجدران مع صور عالية الجودة، هدية مثالية للعملاء',
    specs: ['12 صفحة', 'ورق لامع 250g', 'تعليق جداري', 'صور احترافية'],
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    icon: '👔',
    title: 'تقويم جيب',
    desc: 'تقويم صغير بحجم بطاقة الائتمان يمكن وضعه في المحفظة',
    specs: ['حجم بطاقة', 'ورق مقوى', 'غلاف بلاستيكي', 'سهل الحمل'],
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    icon: '📖',
    title: 'تقويم مفكرة',
    desc: 'تقويم مع مساحة لكتابة الملاحظات اليومية، مثالي لرجال الأعمال',
    specs: ['365 يوم', 'مساحة ملاحظات', 'غلاف فاخر', 'ورق كتابة'],
    glow: 'radial-gradient(circle, rgba(248,177,1,0.16), transparent 70%)'
  },
  {
    icon: '🏢',
    title: 'تقويم شركات',
    desc: 'تقويم مخصص للشركات مع صور المشاريع والإنجازات وشعار الشركة',
    specs: ['تصميم مؤسسي', 'صور الشركة', 'ورق فاخر', 'تغليف هدايا'],
    glow: 'radial-gradient(circle, rgba(17,17,17,0.10), transparent 70%)'
  },
  {
    icon: '🎨',
    title: 'تقويم مخصص',
    desc: 'تقويم بتصميم فريد حسب طلبك مع صورك الخاصة أو تصاميم جرافيك',
    specs: ['تصميم كامل', 'صور حسب الطلب', 'مقاس مخصص', 'تشطيبات متعددة'],
    glow: 'radial-gradient(circle, rgba(255,0,0,0.10), transparent 70%)'
  }
]

/* ═══════════════ SPÉCIFICATIONS ═══════════════ */
const specifications = [
  { label: 'ورق لامع 200g', desc: 'ورق مصقول يعطي ألواناً زاهية ومظهراً جذاباً للصور والتصاميم.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>` },
  { label: 'ورق لامع 250g', desc: 'ورق سميك فاخر للتقاويم الحائطية يتحمل الاستخدام طوال السنة.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>` },
  { label: 'قاعدة مثلثة', desc: 'قاعدة كرتونية متينة تسمح بوضع التقويم على المكتب بثبات.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 22 22 2 22"/></svg>` },
  { label: 'حلقات تعليق', desc: 'حلقة معدنية للتعليق على الحائط بشكل آمن ومرتب.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/></svg>` },
  { label: 'تغليف هدايا', desc: 'تغليف أنيق مع شريط وشعار الشركة لتقديم التقويم كهدية راقية.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>` },
  { label: 'طباعة 4 ألوان', desc: 'طباعة أوفست بأربعة ألوان للحصول على صور وتصاميم عالية الجودة.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 7 17H5a10 10 0 0 1 7-17z"/></svg>` }
]

/* ═══════════════ TARIFS ═══════════════ */
const pricingPlans = [
  {
    name: 'تقويم مكتبي',
    type: '12 صفحة A5',
    price: '8',
    features: ['12 صفحة', 'ورق لامع 200g', 'قاعدة مثلثة', 'تصميم مخصص', '50 نسخة كحد أدنى']
  },
  {
    name: 'تقويم حائطي',
    type: '12 صفحة A4',
    price: '15',
    features: ['12 صفحة', 'ورق لامع 250g', 'حلقات تعليق', 'تصميم مخصص', '100 نسخة كحد أدنى']
  },
  {
    name: 'تقويم فاخر',
    type: '12 صفحة A3',
    price: '25',
    features: ['12 صفحة', 'ورق 300g', 'تغليف هدايا', 'تصميم مخصص', '200 نسخة كحد أدنى']
  }
]

/* ═══════════════ FEATURES ═══════════════ */
const features = [
  'تصميم جرافيك احترافي',
  'ورق عالي الجودة',
  'طباعة أوفست 4 ألوان',
  'صور وتصاميم مخصصة',
  'تشطيبات راقية',
  'قاعدة مكتبية متينة',
  'تغليف هدايا أنيق',
  'مقاسات متعددة',
  'تسليم في الموعد',
  'أسعار تنافسية'
]

/* ═══════════════ FAQ ═══════════════ */
const faqs = [
  { q: 'ما هي أنواع التقاويم المتوفرة؟', a: 'نوفر تقويم مكتبي، تقويم حائطي، تقويم جيب، تقويم مفكرة، وتقويم مخصص للشركات.' },
  { q: 'هل يمكن استخدام صورنا الخاصة في التقويم؟', a: 'نعم، يمكنك تزويدنا بصورك الخاصة وسنقوم بتصميم التقويم حسب رغبتك.' },
  { q: 'ما أقل كمية يمكن طلبها؟', a: 'الحد الأدنى 50 نسخة للتقويم المكتبي، و100 نسخة للتقويم الحائطي.' },
  { q: 'كم تستغرق مدة التنفيذ؟', a: 'المدة تتراوح بين 5 إلى 10 أيام عمل حسب الكمية والمواصفات.' },
  { q: 'هل يمكن تغليف التقاويم كهدايا؟', a: 'نعم، نوفر خدمة تغليف أنيق مع شريط وشعار الشركة لتقديمها كهدية راقية.' }
]

const openFaq = ref(0)

/* ═══════════════ FORMULAIRE RAPIDE ═══════════════ */
const quickQuote = ref({ name: '', phone: '', type: '' })
const quickQuoteSent = ref(false)
function submitQuickQuote() {
  quickQuoteSent.value = true
  quickQuote.value = { name: '', phone: '', type: '' }
  setTimeout(() => { quickQuoteSent.value = false }, 5000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

/* ═══════════════ DESIGN TOKENS ═══════════════ */
.infinity-site {
  --gold: #f8b101;
  --gold-light: #ffd04b;
  --gold-dark: #db9c00;
  --navy: #0c1230;
  --bg: #ffffff;
  --bg-alt: #fafafa;
  --bg-panel: #f7f8fa;
  --border: #e6e8ec;
  --text: #1a202c;
  --text-light: #4a5568;
  --text-muted: #718096;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.04);
  --shadow-md: 0 10px 25px rgba(0,0,0,0.06);
  --shadow-lg: 0 25px 50px -12px rgba(0,0,0,0.15);
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Cairo', 'Tajawal', sans-serif;
  background: var(--bg);
  color: var(--text);
  direction: rtl;
  overflow-x: hidden;
}
* { box-sizing: border-box; }
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.section { padding: 90px 0; position: relative; }
.section-head.center { text-align: center; margin-bottom: 60px; }
.sec-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(248, 177, 1, 0.1); color: var(--gold);
  padding: 7px 20px; border-radius: 50px; font-size: 13px; font-weight: 700;
  margin-bottom: 18px; border: 1px solid rgba(248, 177, 1, 0.3);
}
.sec-title { font-size: clamp(28px, 3vw, 40px); font-weight: 800; color: var(--text); margin-bottom: 14px; letter-spacing: -0.3px; }
.sec-desc { font-size: 16px; color: var(--text-muted); max-width: 620px; margin: 0 auto; line-height: 1.8; }

/* BREADCRUMB */
.breadcrumb { background: var(--bg-panel); padding: 14px 0; border-bottom: 1px solid var(--border); }
.breadcrumb .wrap { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-muted); }
.breadcrumb a { color: var(--text-light); text-decoration: none; transition: color 0.2s ease; }
.breadcrumb a:hover { color: var(--gold); }
.breadcrumb .sep { opacity: 0.5; }
.breadcrumb .current { color: var(--gold); font-weight: 700; }

/* HERO */
.hero {
  position: relative; min-height: 88vh; display: flex; align-items: center; overflow: hidden;
  padding: 70px 0 80px;
  background-image: linear-gradient(135deg, rgba(12, 18, 48, 0.4), rgba(7, 11, 30, 0.55)), url('../assets/hero-bg.png');
  background-size: cover; background-position: center; background-attachment: fixed;
}
.hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(to left, rgba(7, 11, 30, 0.96) 0%, rgba(7, 11, 30, 0.88) 32%, rgba(7, 11, 30, 0.55) 55%, rgba(7, 11, 30, 0.18) 78%, rgba(7, 11, 30, 0) 100%); }
.hero-grid-pattern { position: absolute; inset: 0; z-index: 1; opacity: 0.05; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 40px 40px; }
.hero::after { content: ''; position: absolute; inset: 0; z-index: 1; background: linear-gradient(to top, rgba(7, 11, 30, 0.65) 0%, rgba(7, 11, 30, 0) 30%); pointer-events: none; }
.glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2; }
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.18); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.08); }
.glow-3 { width: 260px; height: 260px; top: 40%; left: 20%; background: rgba(66, 133, 244, 0.08); }
.hero-container { position: relative; z-index: 3; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.hero-content { text-align: right; }
.hero-tag { background: rgba(248,177,1,0.14); border-color: rgba(248,177,1,0.4); }
.tag-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); display: inline-block; animation: pulse-dot 1.8s ease-in-out infinite; }
@keyframes pulse-dot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.3); } }
.hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.2; margin: 14px 0 10px; color: #fff; text-shadow: 0 2px 24px rgba(0,0,0,0.35); }
.gold-gradient { background: linear-gradient(to right, var(--gold), var(--gold-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-sub { font-size: 20px; font-weight: 700; color: var(--gold); margin-bottom: 16px; }
.hero-desc { font-size: 17px; color: #d3d8ec; line-height: 1.8; margin-bottom: 28px; max-width: 480px; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 22px; margin-bottom: 30px; }
.hero-badge { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12.5px; color: #e4e7f5; text-align: center; width: 84px; }
.hero-badge-icon { width: 46px; height: 46px; border-radius: 12px; border: 1px solid rgba(248,177,1,0.4); display: flex; align-items: center; justify-content: center; color: var(--gold); background: rgba(255,255,255,0.06); backdrop-filter: blur(6px); transition: transform 0.3s var(--ease); }
.hero-badge:hover .hero-badge-icon { transform: translateY(-4px); border-color: var(--gold); }
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-hero-gold, .btn-hero-outline { display: inline-flex; align-items: center; gap: 8px; justify-content: center; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s var(--ease); cursor: pointer; border: 1px solid transparent; }
.btn-hero-gold { background: var(--gold); color: #1a1a1a; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4); }
.btn-hero-gold:hover { background: var(--gold-dark); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.5); }
.btn-arrow { transition: transform 0.3s var(--ease); }
.btn-hero-gold:hover .btn-arrow { transform: translateX(-4px); }
.btn-hero-outline { background: rgba(255,255,255,0.05); color: #fff; border-color: rgba(255,255,255,0.3); backdrop-filter: blur(6px); }
.btn-hero-outline:hover { background: rgba(255, 255, 255, 0.12); border-color: var(--gold); transform: translateY(-3px); }
.btn-hero-outline-dark { color: var(--text); border-color: rgba(26,32,44,0.2); background: rgba(255,255,255,0.5); }
.btn-hero-outline-dark:hover { background: rgba(255,255,255,0.9); border-color: var(--gold); }
.hero-visual { position: relative; display: flex; align-items: center; justify-content: center; min-height: 340px; }
.visual-frame { position: relative; width: 260px; height: 260px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(248, 177, 1, 0.35); backdrop-filter: blur(14px); box-shadow: 0 30px 70px rgba(0,0,0,0.45), inset 0 0 40px rgba(248,177,1,0.08); }
.visual-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(248,177,1,0.2); }
.ring-1 { width: 320px; height: 320px; animation: spin-slow 30s linear infinite; }
.ring-2 { width: 380px; height: 380px; border-style: dashed; animation: spin-slow 50s linear infinite reverse; }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.print-icon { color: var(--gold); opacity: 0.9; animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.glass-chip { position: absolute; display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.08); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; padding: 12px 16px; box-shadow: 0 14px 34px rgba(0,0,0,0.35); animation: float 5s ease-in-out infinite; }
.chip-1 { top: 4%; left: -18px; }
.chip-2 { bottom: 14%; left: 8px; animation-delay: 1.6s; }
.chip-3 { top: 42%; left: -40px; animation-delay: 0.8s; }
.chip-icon { width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.18); color: var(--gold); display: flex; align-items: center; justify-content: center; }
.glass-chip strong { display: block; font-size: 16px; font-weight: 800; color: #fff; line-height: 1.3; }
.glass-chip small { font-size: 11.5px; color: #d3d8ec; }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; line-height: 0; }
@media (max-width: 900px) { .hero-container { grid-template-columns: 1fr; } .hero-visual { display: none; } .hero { background-attachment: scroll; } }

/* STATS BAND */
.stats-band { background: var(--navy); padding: 40px 0; position: relative; z-index: 4; margin-top: -2px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.stat-item { display: flex; align-items: center; gap: 14px; justify-content: center; color: #fff; }
.stat-icon { width: 46px; height: 46px; border-radius: 12px; background: rgba(248,177,1,0.14); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-item strong { display: block; font-size: 22px; font-weight: 800; }
.stat-item span { font-size: 12.5px; color: #aab0c8; }
@media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

/* SERVICES SECTION */
.services-section { background: #f9fafb; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.service-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 32px 26px; position: relative; overflow: hidden; transition: all 0.35s var(--ease); text-align: right; }
.service-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: rgba(248,177,1,0.4); }
.service-card-glow { position: absolute; inset: 0; opacity: 0; transition: opacity 0.4s var(--ease); pointer-events: none; }
.service-card:hover .service-card-glow { opacity: 1; }
.service-content-full { position: relative; z-index: 1; }
.service-icon-wrap { width: 56px; height: 56px; border-radius: 14px; background: rgba(248,177,1,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; font-size: 28px; }
.service-card h4 { font-size: 18px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
.service-card p { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; margin-bottom: 14px; }
.service-specs { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.service-specs li { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-light); }
.spec-check { width: 20px; height: 20px; border-radius: 50%; background: rgba(248,177,1,0.12); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }

/* WHY SECTION */
.why-section { background: var(--bg-panel); position: relative; overflow: hidden; }
.why-bg-shape { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.5; pointer-events: none; }
.shape-1 { width: 320px; height: 320px; background: rgba(248,177,1,0.08); top: -100px; left: -80px; }
.shape-2 { width: 260px; height: 260px; background: rgba(66,133,244,0.06); bottom: -80px; right: -60px; }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; position: relative; z-index: 1; }
.why-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 32px 26px; position: relative; transition: all 0.35s var(--ease); text-align: right; }
.why-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: rgba(248,177,1,0.4); }
.why-num { position: absolute; top: 20px; left: 24px; font-size: 34px; font-weight: 800; color: rgba(248,177,1,0.15); }
.why-icon { width: 56px; height: 56px; border-radius: 14px; background: #fef3c7; color: var(--gold); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(248,177,1,0.3); margin-bottom: 18px; }
.why-card h4 { font-size: 16px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
.why-card p { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; }
@media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .why-grid { grid-template-columns: 1fr; } }

/* PRICING SECTION */
.pricing-section { background: #f9fafb; }
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.pricing-card { background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 36px 28px; text-align: center; transition: all 0.35s var(--ease); }
.pricing-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); border-color: rgba(248,177,1,0.4); }
.plan-header { margin-bottom: 20px; }
.plan-header h3 { font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.plan-header p { font-size: 13px; color: var(--text-muted); }
.plan-price { margin-bottom: 24px; }
.price-amount { font-size: 48px; font-weight: 900; color: var(--gold); line-height: 1; }
.price-currency { font-size: 16px; font-weight: 700; color: var(--text-muted); margin-right: 4px; }
.price-unit { display: block; font-size: 12px; color: var(--text-muted); margin-top: 4px; }
.plan-features { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 10px; }
.plan-features li { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--text-light); }
.plan-check { color: var(--gold); font-weight: 800; flex-shrink: 0; }
.plan-btn { display: block; width: 100%; text-align: center; }
@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; } }

/* FEATURES */
.features-section { background: var(--bg-panel); }
.features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
.feature-item { display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 16px 20px; font-size: 14px; color: var(--text-light); transition: all 0.25s var(--ease); }
.feature-item:hover { border-color: var(--gold); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
.feature-check { width: 22px; height: 22px; border-radius: 50%; background: rgba(248,177,1,0.15); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
@media (max-width: 560px) { .features-grid { grid-template-columns: 1fr; } }

/* CTA */
.cta-simple-section { background: var(--bg); }
.cta-simple { position: relative; overflow: hidden; background: linear-gradient(135deg, #fff8e6, #fffaf0); border: 1px solid rgba(248,177,1,0.3); border-radius: var(--radius-lg); padding: 64px 40px; text-align: center; }
.cta-glow { position: absolute; width: 300px; height: 300px; background: rgba(248,177,1,0.12); filter: blur(90px); border-radius: 50%; top: -80px; left: 50%; transform: translateX(-50%); }
.cta-glow-2 { width: 220px; height: 220px; background: rgba(66,133,244,0.08); top: auto; bottom: -80px; left: 10%; transform: none; }
.cta-pattern { position: absolute; inset: 0; opacity: 0.4; pointer-events: none; background-image: radial-gradient(rgba(248,177,1,0.15) 1.5px, transparent 1.5px); background-size: 22px 22px; }
.cta-simple h3 { font-size: 30px; font-weight: 800; color: var(--text); margin-bottom: 12px; position: relative; z-index: 1; }
.cta-simple p { font-size: 16px; color: var(--text-light); max-width: 500px; margin: 0 auto 30px; position: relative; z-index: 1; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
.quick-quote-form { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; max-width: 720px; margin: 0 auto 8px; }
.qq-field { flex: 1 1 200px; }
.qq-field input, .qq-field select { width: 100%; padding: 13px 18px; border-radius: 12px; border: 1px solid var(--border); background: #fff; font-family: inherit; font-size: 14px; color: var(--text); transition: all 0.25s var(--ease); }
.qq-field input:focus, .qq-field select:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px rgba(248,177,1,0.15); }
.qq-submit { flex: 1 1 160px; border: none; }
.qq-hint { position: relative; z-index: 1; color: #16a34a; font-weight: 700; font-size: 14px; margin: 0 0 20px; }
@media (max-width: 640px) { .quick-quote-form { flex-direction: column; } }

/* FAQ */
.faq-section { background: var(--bg-panel); }
.faq-list { max-width: 800px; margin: 0 auto; background: #fff; border-radius: var(--radius-md); border: 1px solid var(--border); overflow: hidden; }
.faq-item { border-bottom: 1px solid var(--border); padding: 22px 26px; cursor: pointer; transition: background 0.2s ease; }
.faq-item:hover { background: rgba(248,177,1,0.03); }
.faq-item:last-child { border-bottom: none; }
.faq-q { display: flex; justify-content: space-between; align-items: center; font-size: 16px; font-weight: 700; color: var(--text); gap: 16px; }
.faq-toggle { color: var(--gold); font-size: 22px; font-weight: 800; flex-shrink: 0; }
.faq-a { margin-top: 14px; font-size: 14px; color: var(--text-light); line-height: 1.85; }
.faq-expand-enter-active, .faq-expand-leave-active { transition: all 0.25s ease; overflow: hidden; }
.faq-expand-enter-from, .faq-expand-leave-to { max-height: 0; opacity: 0; margin-top: 0; }
.faq-expand-enter-to, .faq-expand-leave-from { max-height: 200px; opacity: 1; }

/* CONTACT INFO */
.contact-info-section { background: var(--bg); padding: 70px 0; }
.contact-info-simple { max-width: 640px; margin: 0 auto; text-align: center; }
.info-title { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 30px; }
.info-items { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.info-item { display: flex; align-items: center; gap: 12px; font-size: 15px; color: var(--text-light); background: var(--bg-panel); border: 1px solid var(--border); border-radius: 50px; padding: 12px 26px; transition: all 0.25s var(--ease); }
.info-item:hover { border-color: var(--gold); box-shadow: var(--shadow-sm); }
.info-icon { font-size: 18px; }
</style>