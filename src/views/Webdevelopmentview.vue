<!-- src/views/WebDevelopmentView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

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
          <h1 class="hero-title">
            تطوير <span class="gold-gradient">المواقع</span><br />والتطبيقات
          </h1>
          <p class="hero-sub">نحوّل فكرتك إلى تجربة رقمية متكاملة</p>
          <p class="hero-desc">
            نصمم ونطور حلول رقمية احترافية تساعد أعمالك على النمو
            وتمنح عملاءك تجربة استثنائية عبر جميع الأجهزة.
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
          <div class="code-icon">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
              <line x1="12" y1="2" x2="12" y2="22" stroke-width="0.3"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none"><path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#fafafa"/></svg>
      </div>
    </section>

    <!-- ═══════════════ ماذا نقدم لك ═══════════════ -->
    <section class="section services-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">ماذا نقدم لك؟</h2>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="s in services" :key="s.label">
            <div class="service-icon" v-html="s.icon"></div>
            <h4>{{ s.label }}</h4>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ OFFRES / PACKS AVEC IMAGES ═══════════════ -->
    <section class="section packs-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">عروض برمجة المواقع الإلكترونية</span>
          <h2 class="sec-title">باقات تطوير المواقع والتطبيقات</h2>
          <p class="sec-desc">نصمم مواقع إلكترونية احترافية تعكس هوية علامتك التجارية.</p>
        </div>

        <div class="packs-grid">
          <!-- Landing Page -->
          <div class="pack-card">
            <img :src="landingImg" alt="Landing Page" class="pack-image">
            <span class="pack-badge">🌐</span>
            <h3 class="pack-name">Landing Page (صفحة هبوط)</h3>
            <p class="pack-price">ابتداءً من 750 د.ت</p>
            <ul class="pack-features">
              <li>صفحة واحدة احترافية</li>
              <li>تصميم عصري ومتجاوب</li>
              <li>نموذج تواصل</li>
              <li>تحسين سرعة الموقع</li>
              <li>ربط الدومين</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Landing Page' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- Site Vitrine -->
          <div class="pack-card">
            <img :src="vitrineImg" alt="Site Vitrine" class="pack-image">
            <span class="pack-badge">🖥️</span>
            <h3 class="pack-name">Site Vitrine (موقع تعريفي)</h3>
            <p class="pack-price">ابتداءً من 1500 د.ت</p>
            <ul class="pack-features">
              <li>من 5 إلى 10 صفحات</li>
              <li>تصميم احترافي ومتجاوب</li>
              <li>نموذج تواصل</li>
              <li>ربط مع خرائط Google</li>
              <li>تحسين محركات البحث (SEO)</li>
              <li>حماية وأمان أساسي</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Site Vitrine' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- E-Commerce -->
          <div class="pack-card popular">
            <img :src="ecommerceImg" alt="E-Commerce" class="pack-image">
            <span class="pack-badge">🛒</span>
            <h3 class="pack-name">E-Commerce (متجر إلكتروني)</h3>
            <p class="pack-price">ابتداءً من 1900 د.ت</p>
            <ul class="pack-features">
              <li>متجر إلكتروني متكامل</li>
              <li>تصميم احترافي ومتجاوب</li>
              <li>إدارة المنتجات والتصنيفات</li>
              <li>بوابات دفع متعددة</li>
              <li>إدارة الطلبات والشحن</li>
              <li>نظام كوبونات وعروض</li>
              <li>تحسين SEO وحماية متقدمة</li>
            </ul>
            <div class="popular-tag">الأكثر طلباً</div>
            <RouterLink :to="{ name: 'contact', query: { pack: 'E-Commerce' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- Système de réservation -->
          <div class="pack-card">
            <img :src="reservationImg" alt="Réservation" class="pack-image">
            <span class="pack-badge">📅</span>
            <h3 class="pack-name">نظام الحجز الإلكتروني</h3>
            <p class="pack-price">السعر حسب المشروع</p>
            <ul class="pack-features">
              <li>نظام حجز احترافي</li>
              <li>حجز المواعيد</li>
              <li>بريد إلكتروني رسمي</li>
              <li>ربط مع المنصات والخدمات</li>
              <li>تقارير وإحصائيات</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'نظام الحجز' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- Maintenance -->
          <div class="pack-card">
            <img :src="maintenanceImg" alt="Maintenance" class="pack-image">
            <span class="pack-badge">🛠️</span>
            <h3 class="pack-name">الصيانة والدعم الفني</h3>
            <p class="pack-price">200 د.ت شهريًا</p>
            <ul class="pack-features">
              <li>تحديثات دورية</li>
              <li>نسخ احتياطي</li>
              <li>حماية وأمان</li>
              <li>دعم فني</li>
              <li>تحسين الأداء</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'صيانة ودعم فني' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ كيف نعمل ═══════════════ -->
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

    <!-- ═══════════════ PORTFOLIO ═══════════════ -->
    <section class="section portfolio-section">
      <!-- ... le reste du portfolio reste identique ... -->
    </section>

    <!-- ═══════════════ TECHNOLOGIES + STATS ═══════════════ -->
    <!-- ... -->
    <!-- ═══════════════ WHY US ═══════════════ -->
    <!-- ... -->
    <!-- ═══════════════ FAQ + CTA ═══════════════ -->
    <!-- ... -->
    <!-- ═══════════════ CONTACT INFO ═══════════════ -->
    <!-- ... -->
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// Importez vos images pour les packs
import landingImg from '../assets/landing-page.jpg'
import vitrineImg from '../assets/site-vitrine.jpg'
import ecommerceImg from '../assets/webcommerce.png'
import reservationImg from '../assets/reservation.jpg'
import maintenanceImg from '../assets/maintenance.jpg'

// import heroVideo from '../assets/hero-tech.mp4'  // Décommentez si vous avez une vidéo

/* ═══ Hero badges ═══ */
const heroBadges = [
  { label: 'كود نظيف', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { label: 'تصميم متجاوب', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="10" height="16" rx="1"/><rect x="16" y="7" width="6" height="11" rx="1"/></svg>` },
  { label: 'أداء وسرعة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'أمان عالي', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` }
]

/* ═══ Services ═══ */
const services = [
  { label: 'مواقع تعريفية', desc: 'تصميم مواقع احترافية تعكس هوية علامتك التجارية.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
  { label: 'متاجر إلكترونية', desc: 'متاجر احترافية آمنة وسهلة الإدارة لبيع منتجاتك.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>` },
  { label: 'تطبيقات الجوال', desc: 'تطبيقات لأنظمة Android و iOS بأداء عالٍ وتجربة مميزة.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>` },
  { label: 'أنظمة مخصصة', desc: 'حلول برمجية مصممة خصيصًا حسب احتياجات عملك.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 0 1-4 0v-.09a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 0 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.04 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04z"/></svg>` },
  { label: 'تكامل الأنظمة', desc: 'ربط وتكامل بين الأنظمة والخدمات المختلفة.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M8.5 8.5 15.5 15.5"/><circle cx="18" cy="6" r="3"/><path d="M15.5 8.5 8.5 15.5"/><circle cx="6" cy="18" r="3"/></svg>` },
  { label: 'دعم وصيانة', desc: 'دعم فني ومتابعة دورية لضمان استمرارية عمل موقعك.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>` }
]

/* ═══ Process ═══ */
const processSteps = [
  { num: '01', title: 'فهم الفكرة', desc: 'نسمع لاحتياجاتك ونحلل متطلبات مشروعك', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
  { num: '02', title: 'التخطيط', desc: 'نضع خطة عمل واضحة وهيكلة للمشروع', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
  { num: '03', title: 'التصميم', desc: 'تصميم واجهات جذابة تمنح تجربة مستخدم سلسة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '04', title: 'التطوير', desc: 'برمجة الموقع أو التطبيق بأحدث التقنيات', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { num: '05', title: 'الاختبار', desc: 'اختبار شامل لضمان الجودة والأمان والأداء', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>` },
  { num: '06', title: 'الإطلاق والتسليم', desc: 'إطلاق المشروع ومتابعة وتقديم الدعم المستمر', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg>` }
]

/* ═══ Portfolio (inchangé) ═══ */
const portfolioTabs = ['الكل', 'مواقع تعريفية', 'متاجر إلكترونية', 'تطبيقات جوال', 'أنظمة مخصصة']
const activeTab = ref('الكل')
const portfolio = [
  { title: 'مطعم لذة', category: 'مواقع تعريفية', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
  { title: 'متجر أزياء', category: 'متاجر إلكترونية', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>` },
  { title: 'تطبيق خدمات منزلية', category: 'تطبيقات جوال', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="1.5"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg>` },
  { title: 'نظام إدارة المدارس', category: 'أنظمة مخصصة', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"/></svg>` },
  { title: 'منصة تعليمية', category: 'أنظمة مخصصة', color: 'linear-gradient(135deg,#fef3c7,#fde68a)', icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#b45309" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>` }
]
const filteredPortfolio = computed(() => activeTab.value === 'الكل' ? portfolio : portfolio.filter(p => p.category === activeTab.value))

/* ═══ Technologies & Stats ═══ */
const technologies = [
  { label: 'React', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>` },
  { label: 'Next.js', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="10"/><path d="M9 8v8l7-4-7-4z"/></svg>` },
  { label: 'Vue.js', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 4h4l6 11 6-11h4L12 21z"/></svg>` },
  { label: 'Laravel', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M4 4v16M4 4l8 4M4 20l8-4m0 0V8m0 8l8 4M12 8l8-4v12l-8 4"/></svg>` },
  { label: 'Node.js', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M12 22V12M3 7l9 5 9-5"/></svg>` },
  { label: 'PHP', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="12" rx="10" ry="6"/><text x="12" y="15" font-size="7" text-anchor="middle" fill="currentColor" stroke="none">php</text></svg>` },
  { label: 'MySQL', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>` },
  { label: 'MongoDB', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 2c3 4 5 8 5 12a5 5 0 0 1-10 0c0-4 2-8 5-12z"/><line x1="12" y1="14" x2="12" y2="22"/></svg>` },
  { label: 'Firebase', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 18 9 3l3 6 2-2 4 11z"/></svg>` },
  { label: 'Tailwind', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M6 11c1-3 3-4.5 6-4.5s5 1.5 6 4.5c-1-1.5-2.4-2-4-1.5-1 .4-1.7 1.3-2.7 1.8-2 1-4 .3-5.3-1.3z"/><path d="M2 15.5c1-3 3-4.5 6-4.5s5 1.5 6 4.5c-1-1.5-2.4-2-4-1.5-1 .4-1.7 1.3-2.7 1.8-2 1-4 .3-5.3-1.3z"/></svg>` }
]
const stats = [
  { value: '+120', label: 'مشروع مكتمل', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>` },
  { value: '+80', label: 'عميل سعيد', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>` },
  { value: '+6', label: 'سنوات خبرة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>` },
  { value: '+99%', label: 'رضا العملاء', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` }
]

/* ═══ Why us ═══ */
const whyUs = [
  { label: 'كود نظيف ومنظم', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { label: 'تصميم متجاوب مع جميع الأجهزة', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="10" height="16" rx="1"/><rect x="16" y="7" width="6" height="11" rx="1"/></svg>` },
  { label: 'سرعة وأداء عالي', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'أمان وحماية متقدمة', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
  { label: 'دعم فني مستمر', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>` },
  { label: 'أسعار تنافسية', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` }
]

/* ═══ FAQ ═══ */
const faqs = [
  { q: 'كم يستغرق تطوير الموقع أو التطبيق؟', a: 'تختلف المدة حسب حجم المشروع، وعادة ما تتراوح بين 3 إلى 8 أسابيع من التخطيط إلى التسليم النهائي.' },
  { q: 'هل توفرون استضافة وحجز دومين؟', a: 'نعم، نساعدك في اختيار واقتناء الاستضافة والدومين المناسبين لمشروعك وإعدادهما بالكامل.' },
  { q: 'هل يمكنني طلب تعديلات بعد التسليم؟', a: 'بالتأكيد، نوفر فترة دعم مجانية بعد التسليم بالإضافة إلى باقات صيانة وتطوير مستمرة.' },
  { q: 'هل تقدمون دعم بعد إطلاق المشروع؟', a: 'نعم، نقدم دعمًا فنيًا ومتابعة دورية لضمان عمل موقعك أو تطبيقك دون أي مشاكل.' }
]
const openFaq = ref(0)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

.infinity-site {
  --gold: #f8b101;
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1e293b;
  font-family: 'Cairo', 'Tajawal', sans-serif;
  background: var(--white);
  color: var(--gray-800);
  direction: rtl;
  overflow-x: hidden;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }
.section-head.center { text-align: center; margin-bottom: 56px; }
.sec-tag { display: inline-block; background: rgba(248, 177, 1, 0.12); color: var(--gold); padding: 6px 18px; border-radius: 50px; font-size: 13px; font-weight: 700; margin-bottom: 16px; border: 1px solid rgba(248, 177, 1, 0.3); }
.sec-title { font-size: clamp(28px, 3vw, 38px); font-weight: 800; color: var(--gray-800); margin-bottom: 12px; }
.sec-desc { font-size: 16px; color: var(--gray-600); max-width: 600px; margin: 0 auto; }

/* ═══ HERO avec vidéo ═══ */
.hero {
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #f8f9fa;
  padding: 70px 0 80px;
}
.hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
.hero-overlay { position: absolute; inset: 0; z-index: 1; background: rgba(255,255,255,0.75); }
.glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2; }
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.12); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.08); }

.hero-container {
  position: relative; z-index: 3;
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center;
  width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px;
}
.hero-content { text-align: right; }
.hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.2; margin-bottom: 10px; color: var(--gray-800); }
.gold-gradient { background: linear-gradient(to right, #f8b101, #e09d00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-sub { font-size: 20px; font-weight: 700; color: var(--gold); margin-bottom: 16px; }
.hero-desc { font-size: 17px; color: var(--gray-600); line-height: 1.8; margin-bottom: 28px; max-width: 480px; }

.hero-badges { display: flex; flex-wrap: wrap; gap: 22px; margin-bottom: 30px; }
.hero-badge { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12.5px; color: var(--gray-700); text-align: center; width: 84px; }
.hero-badge-icon { width: 46px; height: 46px; border-radius: 12px; border: 1px solid rgba(248,177,1,0.4); display: flex; align-items: center; justify-content: center; color: var(--gold); background: rgba(248,177,1,0.06); }

.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-hero-gold, .btn-hero-outline { display: inline-flex; align-items: center; justify-content: center; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; }
.btn-hero-gold { background: var(--gold); color: #fff; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4); }
.btn-hero-gold:hover { background: #e09d00; transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.6); }
.btn-hero-outline { background: transparent; color: var(--gray-800); border-color: var(--gray-200); }
.btn-hero-outline:hover { background: var(--gray-50); border-color: var(--gold); color: var(--gold); transform: translateY(-3px); }

.hero-visual { display: flex; align-items: center; justify-content: center; }
.code-icon { color: rgba(248, 177, 1, 0.5); animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; }
@media (max-width: 900px) { .hero-container { grid-template-columns: 1fr; } .hero-visual { display: none; } }

/* ═══ SERVICES ═══ */
.services-section { background: var(--white); }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }
.service-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 16px; padding: 30px 24px; text-align: center; transition: all 0.25s ease; }
.service-card:hover { transform: translateY(-6px); box-shadow: 0 16px 30px rgba(0,0,0,0.06); border-color: var(--gold); }
.service-icon { width: 60px; height: 60px; border-radius: 14px; background: #fef3c7; color: var(--gold); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
.service-card h4 { font-size: 17px; font-weight: 800; color: var(--gray-800); margin-bottom: 8px; }
.service-card p { font-size: 13.5px; color: var(--gray-600); line-height: 1.7; }

/* ═══ PROCESS ═══ */
.process-section { background: var(--gray-50); }
.process-track { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
.process-line { position: absolute; top: 26px; left: 5%; right: 5%; height: 2px; background: repeating-linear-gradient(to right, var(--gold) 0 8px, transparent 8px 16px); z-index: 0; }
.process-step { position: relative; z-index: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
.process-dot { width: 54px; height: 54px; border-radius: 50%; background: var(--white); color: var(--gold); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; border: 2px solid var(--gold); }
.process-num { font-weight: 800; color: var(--gold); font-size: 13px; margin-bottom: 6px; }
.process-step h4 { font-size: 15px; font-weight: 800; color: var(--gray-800); margin-bottom: 6px; }
.process-step p { font-size: 12.5px; color: var(--gray-600); line-height: 1.6; }
@media (max-width: 900px) { .process-track { grid-template-columns: repeat(3, 1fr); } .process-line { display: none; } }
@media (max-width: 560px) { .process-track { grid-template-columns: repeat(2, 1fr); } }

/* ═══ PACKS AVEC IMAGES ═══ */
.packs-section { background: var(--white); }
.packs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
@media (max-width: 1024px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .packs-grid { grid-template-columns: 1fr; } }

.pack-card {
  background: var(--white); border: 1px solid var(--gray-200); border-radius: 20px;
  text-align: center; transition: all 0.3s ease; position: relative; display: flex; flex-direction: column;
  overflow: hidden; /* pour que l'image respecte le border-radius */
}
.pack-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--gold); }
.pack-card.popular { border-color: var(--gold); background: #fffbf0; transform: scale(1.02); }

/* Nouvelle classe pour l'image d'illustration */
.pack-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.pack-badge { font-size: 36px; margin: 20px 0 10px; }
.pack-name { font-size: 22px; font-weight: 800; color: var(--gray-800); margin: 0 20px 10px; }
.pack-price { font-size: 28px; font-weight: 800; color: var(--gold); margin: 0 20px 30px; direction: ltr; }
.pack-features { list-style: none; padding: 0; text-align: right; margin: 0 20px 30px; flex: 1; }
.pack-features li { padding: 8px 0; border-bottom: 1px solid var(--gray-200); color: var(--gray-600); font-size: 14px; position: relative; padding-right: 20px; }
.pack-features li::before { content: "✓"; color: var(--gold); position: absolute; right: 0; font-weight: bold; }
.popular-tag {
  background: var(--gold); color: #fff; font-size: 12px; font-weight: 700; padding: 6px 16px;
  border-radius: 50px; margin-bottom: 20px; display: inline-block; position: absolute;
  top: 14px; left: 50%; transform: translateX(-50%);
}
.btn-hero-gold.full-width { width: calc(100% - 40px); margin: 0 20px 30px; }

/* ═══ PORTFOLIO ═══ */
.portfolio-section { background: var(--gray-50); }
.portfolio-tabs { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 36px; }
.tab-btn { background: var(--white); border: 1px solid var(--gray-200); color: var(--gray-600); padding: 9px 20px; border-radius: 50px; font-size: 13.5px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all 0.2s; }
.tab-btn:hover { border-color: var(--gold); color: var(--gold); }
.tab-btn.active { background: var(--gold); color: #fff; border-color: var(--gold); }

.portfolio-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; }
@media (max-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }

.portfolio-card h4 { font-size: 14px; font-weight: 700; color: var(--gray-800); margin-top: 12px; margin-bottom: 4px; }
.portfolio-cat { font-size: 12px; color: var(--gold); }
.portfolio-thumb { position: relative; border-radius: 14px; aspect-ratio: 4/3; overflow: hidden; display: flex; align-items: center; justify-content: center; border: 1px solid var(--gray-200); }
.portfolio-icon { opacity: 0.7; }
.portfolio-more { text-align: center; margin-top: 40px; }

/* ═══ TECH + STATS ═══ */
.tech-stats-section { background: var(--white); }
.tech-stats-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 30px; }
@media (max-width: 900px) { .tech-stats-grid { grid-template-columns: 1fr; } }

.tech-block, .stats-block { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 20px; padding: 34px; }
.tech-block h3, .stats-block h3 { font-size: 19px; font-weight: 800; color: var(--gray-800); margin-bottom: 24px; }
.tech-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; }
@media (max-width: 560px) { .tech-grid { grid-template-columns: repeat(3, 1fr); } }
.tech-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12px; color: var(--gray-700); font-weight: 600; }
.tech-icon-circle { width: 48px; height: 48px; border-radius: 12px; background: rgba(248,177,1,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; }

.stats-inner-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.stat-item { display: flex; align-items: center; gap: 12px; background: var(--white); border: 1px solid var(--gray-200); border-radius: 14px; padding: 16px; }
.stat-icon-circle { width: 40px; height: 40px; border-radius: 10px; background: rgba(248,177,1,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-item strong { display: block; font-size: 20px; font-weight: 800; color: var(--gold); }
.stat-item span { font-size: 12.5px; color: var(--gray-600); }

/* ═══ WHY US ═══ */
.why-section { background: var(--gray-50); }
.why-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 24px; padding: 46px 36px; text-align: center; }
.why-title { font-size: clamp(22px, 2.6vw, 30px); font-weight: 800; color: var(--gray-800); margin-bottom: 34px; }
.why-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px; }
.why-item { display: flex; flex-direction: column; align-items: center; gap: 12px; max-width: 130px; font-size: 13.5px; color: var(--gray-700); font-weight: 600; }
.why-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(248,177,1,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(248,177,1,0.3); }

/* ═══ FAQ + CTA ═══ */
.faq-cta-section { background: var(--white); }
.faq-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: stretch; }
@media (max-width: 900px) { .faq-cta-grid { grid-template-columns: 1fr; } }

.faq-block { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 20px; padding: 34px; }
.faq-title { font-size: 22px; font-weight: 800; color: var(--gray-800); margin-bottom: 24px; }
.faq-item { border-bottom: 1px solid var(--gray-200); padding: 16px 0; cursor: pointer; }
.faq-item:last-child { border-bottom: none; }
.faq-q { display: flex; justify-content: space-between; align-items: center; font-size: 14.5px; font-weight: 700; color: var(--gray-800); }
.faq-toggle { color: var(--gold); font-size: 20px; font-weight: 800; }
.faq-a { margin-top: 12px; font-size: 13.5px; color: var(--gray-600); line-height: 1.8; }

.cta-block { position: relative; overflow: hidden; background: linear-gradient(135deg, #fff8e7, #ffffff); border: 1px solid rgba(248,177,1,0.3); border-radius: 20px; padding: 40px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }
.cta-glow { position: absolute; width: 260px; height: 260px; background: rgba(248,177,1,0.1); filter: blur(90px); border-radius: 50%; top: -60px; left: -60px; }
.cta-icon { color: var(--gold); margin-bottom: 18px; position: relative; z-index: 1; }
.cta-block h3 { font-size: 24px; font-weight: 800; color: var(--gray-800); margin-bottom: 10px; position: relative; z-index: 1; }
.cta-block p { font-size: 14.5px; color: var(--gray-600); line-height: 1.8; margin-bottom: 24px; position: relative; z-index: 1; max-width: 420px; }
.cta-actions { display: flex; gap: 14px; flex-wrap: wrap; position: relative; z-index: 1; }

/* ═══ CONTACT INFO ═══ */
.contact-info-section { background: var(--gray-50); }
.contact-info-simple { max-width: 600px; margin: 0 auto; text-align: center; }
.info-title { font-size: 24px; font-weight: 700; color: var(--gray-800); margin-bottom: 30px; }
.info-items { display: flex; flex-direction: column; align-items: center; gap: 20px; }
.info-item { display: flex; align-items: center; gap: 12px; font-size: 16px; color: var(--gray-700); }
.info-icon { font-size: 22px; }
</style>