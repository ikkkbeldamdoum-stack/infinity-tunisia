<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ HERO FULLSCREEN ═══════════════ -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            وكالة إبداعية متكاملة
          </div>
          <h1 class="hero-title">
            نحول الأفكار إلى
            <span class="gold-gradient">تجارب تصنع الفرق</span>
          </h1>
          <p class="hero-desc">
            من الاستراتيجية والإبداع إلى التنفيذ والانطلاق،
            نحوّل كل ما يحتاجه مشروعك إلى تجربة رقمية متكاملة
            تترك أثراً حقيقياً في السوق.
          </p>
          <div class="hero-actions">
            <RouterLink to="/devis" class="btn-primary-hero">
              ابدأ مشروعك الآن
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M15 18L9 12L15 6"/>
              </svg>
            </RouterLink>
            <RouterLink to="/nos-services" class="btn-secondary-hero">
              استكشف أعمالنا
            </RouterLink>
          </div>
          <div class="scroll-indicator">
            <span>تصفح المزيد</span>
            <div class="scroll-mouse">
              <div class="scroll-dot"></div>
            </div>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="orbit orbit-outer">
            <div class="orbit-dot dot-gold"></div>
          </div>
          <div class="orbit orbit-mid">
            <div class="orbit-dot dot-light"></div>
          </div>
          <div class="logo-orb">
            <img src="../assets/logo.jpg" alt="Infinity" />
          </div>
          <div class="svc-bubble bubble-1">
            <span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>
            <small>إعلانات</small>
          </div>
          <div class="svc-bubble bubble-2">
            <span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/></svg></span>
            <small>تصميم</small>
          </div>
          <div class="svc-bubble bubble-3">
            <span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></span>
            <small>فيديو</small>
          </div>
          <div class="svc-bubble bubble-4">
            <span><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></span>
            <small>مواقع</small>
          </div>
          <div class="mini-stat stat-a">
            <strong>+250</strong>
            <small>مشروع</small>
          </div>
          <div class="mini-stat stat-b">
            <strong>+120</strong>
            <small>عميل</small>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#fafafa"/>
        </svg>
      </div>
    </section>

    <!-- ═══════════ QUICK SERVICES ═══════════ -->
    <section class="section services-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">خدماتنا السريعة</span>
          <h2 class="sec-title">ماذا تحتاج اليوم؟</h2>
          <p class="sec-desc">اختر ما يناسبك وسنساعدك في تنفيذه بأعلى جودة</p>
        </div>
        <div class="services-7-grid">
          <RouterLink :to="s.link" class="svc-card" v-for="s in quickServices" :key="s.title">
            <div class="svc-icon-circle" :style="{ backgroundColor: s.bg, color: s.color }" v-html="s.icon"></div>
            <h4>{{ s.title }}</h4>
            <span class="svc-link-text">اكتشف المزيد ›</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ STATS ═══════════ -->
    <section class="stats-sec">
      <div class="wrap">
        <div class="stats-grid">
          <div class="stat-box" v-for="s in stats" :key="s.value">
            <span class="stat-val">{{ s.value }}</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ WHY US ═══════════ -->
    <section class="section why-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">لماذا نحن</span>
          <h2 class="sec-title">لماذا <span class="gold-text">Infinity</span> ؟</h2>
          <p class="sec-desc">نحن مختلفون لأننا نركز على ما يهمك حقاً</p>
        </div>
        <div class="why-grid">
          <div class="why-card" v-for="item in whyUs" :key="item.title">
            <div class="why-icon-wrap" v-html="item.icon"></div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ ALL SERVICES ═══════════ -->
    

    <!-- ═══════════ PROCESS DARK ═══════════ -->
    <section class="section process-dark-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag sec-tag-light">منهجيتنا</span>
          <h2 class="sec-title white">كيف نعمل؟</h2>
          <p class="sec-desc light">من الفكرة إلى الإنجاز بخطوات واضحة وفعالة</p>
        </div>
        <div class="steps-grid">
          <div class="step-box" v-for="step in processSteps" :key="step.number">
            <div class="step-num">0{{ step.number }}</div>
            <h5>{{ step.title }}</h5>
            <p>{{ step.desc }}</p>
          </div>
        </div>
        <div class="btn-center">
          <RouterLink to="/devis" class="btn btn-gold-hero">اطلب عرض سعر مخصص</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ PORTFOLIO MIXTE (images + vidéos) ═══════════ -->
    <section class="section portfolio-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">معرض الأعمال</span>
          <h2 class="sec-title">أعمالنا</h2>
          <p class="sec-desc">نفتخر بما قدمناه من أعمال لعملائنا في مختلف المجالات</p>
        </div>
        <div class="filter-tabs">
          <button 
            v-for="tab in portfolioTabs" 
            :key="tab" 
            class="filter-tab" 
            :class="{ active: activeTab === tab }" 
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>
        <div class="portfolio-grid">
          <div class="port-item" v-for="item in filteredPortfolio" :key="item.id">
            <div class="port-img-wrapper">
              <!-- ✅ Vidéo pour la catégorie "فيديو" -->
              <video
                v-if="item.cat === 'فيديو'"
                class="port-video"
                :src="item.videoUrl"
                autoplay
                muted
                loop
                playsinline
              ></video>
              <!-- ✅ Image pour les autres catégories -->
              <img
                v-else
                :src="item.image"
                :alt="item.title"
                class="port-img"
                loading="lazy"
              />
              <div class="port-overlay">
                <span class="port-play-icon" v-if="item.cat === 'فيديو'">▶</span>
              </div>
            </div>
            <div class="port-info">
              <span>{{ item.title }}</span>
              <small>{{ item.tag }}</small>
            </div>
          </div>
        </div>
        <div class="btn-center">
          <RouterLink to="/nos-services" class="btn btn-primary">عرض جميع الأعمال</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ TESTIMONIALS ═══════════ -->
    <section class="section testimonials-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">شهادات العملاء</span>
          <h2 class="sec-title">آراء <span class="gold-text">عملائنا</span></h2>
          <p class="sec-desc">نفخر بثقة عملائنا وسعينا دائماً لتقديم الأفضل</p>
        </div>
        <div class="testi-grid">
          <div class="testi-card" v-for="t in testimonials" :key="t.name">
            <div class="quote-mark">"</div>
            <div class="testi-head">
              <span class="tco">{{ t.company }}</span>
              <div class="stars"><span v-for="i in 5" :key="i">★</span></div>
            </div>
            <p class="testi-text">"{{ t.text }}"</p>
            <div class="testi-author">
              <div class="testi-av">{{ t.initials }}</div>
              <div class="testi-info">
                <strong>{{ t.name }}</strong>
                <small>{{ t.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ SECTORS & PARTNERS ═══════════ -->
    <section class="section sectors-partners-sec">
      <div class="wrap">
        <div class="sp-wrap">
          <div class="sp-col">
            <h3 class="sp-col-title">القطاعات التي نخدمها</h3>
            <div class="sectors-flex">
              <div class="sector-item" v-for="sec in sectors" :key="sec.label">
                <div class="sector-icon-wrap" v-html="sec.icon"></div>
                <span>{{ sec.label }}</span>
              </div>
            </div>
          </div>
          <div class="sp-divider"></div>
          <div class="sp-col">
            <h3 class="sp-col-title">شركاء النجاح</h3>
            <div class="partners-flex">
              <span class="partner-chip" v-for="p in partners" :key="p">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ PRICING PREVIEW ═══════════ -->
    <section class="section pricing-preview-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">العروض والأسعار</span>
          <h2 class="sec-title">أسعار شفافة، بدون مفاجآت</h2>
          <p class="sec-desc">اختر الخطة التي تناسب مشروعك — كل التفاصيل في صفحة الخدمات</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-block">
            <h4 class="pricing-block-title"><span>📢</span> الإعلانات الممولة</h4>
            <div class="price-cards">
              <div class="price-card" v-for="p in adsPricing" :key="p.title" :class="{ featured: p.featured }">
                <span v-if="p.featured" class="feat-badge">الأكثر طلباً</span>
                <div class="price-dur">{{ p.dur }}</div>
                <div class="price-amount">{{ p.price }}<small> DT</small></div>
                <ul><li v-for="f in p.feats" :key="f">{{ f }}</li></ul>
              </div>
            </div>
          </div>
          <div class="pricing-block">
            <h4 class="pricing-block-title"><span>📱</span> إدارة التواصل الاجتماعي</h4>
            <div class="price-cards">
              <div class="price-card" v-for="p in socialPricing" :key="p.title" :class="{ featured: p.featured }">
                <span v-if="p.featured" class="feat-badge">الأكثر طلباً</span>
                <div class="price-dur">{{ p.title }}</div>
                <div class="price-amount">{{ p.price }}<small> DT/شهر</small></div>
                <ul><li v-for="f in p.feats" :key="f">{{ f }}</li></ul>
              </div>
            </div>
          </div>
        </div>
        <div class="pricing-formula">
          صيغة الحساب الخاص بالإعلانات :
          <strong>3.5 DT × عدد الأيام × عدد الولايات</strong>
        </div>
        <div class="btn-center">
          <RouterLink to="/nos-services" class="btn btn-primary">عرض جميع الأسعار</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════ FAQ ═══════════ -->
    <section class="section faq-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">الدعم</span>
          <h2 class="sec-title">الأسئلة الشائعة</h2>
          <p class="sec-desc">أجوبة على أكثر الأسئلة التي يطرحها عملاؤنا قبل التعاون</p>
        </div>
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index" :class="{ active: activeFaq === index }">
            <div class="faq-question" @click="activeFaq = activeFaq === index ? null : index">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle-icon">{{ activeFaq === index ? '−' : '+' }}</span>
            </div>
            <transition name="faq-slide">
              <div class="faq-answer" v-show="activeFaq === index"><p>{{ faq.a }}</p></div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ CTA ═══════════ -->
    <section class="cta-section">
      <div class="wrap">
        <div class="cta-card">
          <div class="cta-shape cta-sh1"></div>
          <div class="cta-shape cta-sh2"></div>
          <div class="cta-img-wrap">
            <img src="../assets/logo.jpg" alt="Infinity" />
          </div>
          <div class="cta-copy">
            <h2>هل أنت مستعد للارتقاء بمشروعك؟</h2>
            <p>دع فريق Infinity يساعدك على تحقيق رؤيتك وتحويلها إلى تجربة ناجحة تفوق التوقعات.</p>
          </div>
          <div class="cta-btns">
            <RouterLink to="/devis" class="btn btn-primary">ابدأ مشروعك الآن</RouterLink>
            <a href="https://wa.me/21692105505" target="_blank" rel="noopener" class="btn btn-outline-cta">احجز موعداً</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ═══ استيراد ملفات الفيديو (للقسم "فيديو" فقط) ═══
import video1 from '../assets/video/video1.mp4?url'
import video2 from '../assets/video/video2.mp4?url'
import video3 from '../assets/video/video3.mp4?url'
import video4 from '../assets/video/video4.mp4?url'
import video5 from '../assets/video/video5.mp4?url'

/* ═══════════ ICÔNES SVG ═══════════ */
const iconSolutions = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`
const iconStrategy = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
const iconDesign = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`
const iconVideo = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`
const iconWeb = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`
const iconAds = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`
const iconSupport = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
const iconSocial = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>`
const iconPhoto = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`
const iconPrint = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 12H4a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`
const iconStar = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`
const iconSectors = {
  restaurant: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>`,
  hotel: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 11h4M6 15h4M14 11h4M14 15h4M12 3l-9 4h18l-9-4z"/></svg>`,
  realestate: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7l9-4 9 4M5 12v9M19 12v9M9 21v-6h6v6M10 9h4"/></svg>`,
  education: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>`,
  health: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  tech: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  car: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 16H9M10 6h4l3 8H7l3-8zM17 16h.01M7 16h.01"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
}

/* ═══════════ DATA ═══════════ */
const stats = [
  { value: '+250', label: 'مشروع مكتمل' },
  { value: '+120', label: 'عميل راضٍ' },
  { value: '+8',   label: 'سنوات خبرة' },
  { value: '7',    label: 'خدمات رئيسية' },
]

const quickServices = [
  { title: 'إدارة حسابات التواصل الاجتماعي', icon: iconSocial, bg: '#fef3f3', color: '#e74c3c', link: '/social-media' },
  { title: 'إنتاج فيديو وموشن جرافيك',        icon: iconVideo, bg: '#f0f7ff', color: '#2980b9', link: '/video-production' },
  { title: 'تصميم هوية تجارية',                icon: iconDesign, bg: '#fdf0ff', color: '#8e44ad', link: '/branding' },
  { title: 'إنشاء مواقع وتطبيقات', icon: iconWeb, bg: '#f0fff5', color: '#27ae60', link: '/web-development' },
  { title: 'إعلانات ممولة وحملات تسويقية',    icon: iconAds, bg: '#fffbf0', color: '#d49500', link: '/digital-marketing' },
  { title: 'تصميم جرافيك والمطبوعات',          icon: iconPrint, bg: '#fff5f5', color: '#e74c3c', link: '/print-design' },
  { title: 'تصوير احترافي للمنتجات',           icon: iconPhoto, bg: '#f0f0ff', color: '#6c5ce7', link: '/photo-production' },
]

const whyUs = [
  { title: 'فريق محترف',      desc: 'نخبة من الخبراء في كل مجال إبداعي وتقني، متخصصون ومتمرسون.', icon: iconStar },
  { title: 'دعم مستمر',       desc: 'قبل وأثناء وبعد المشروع لضمان نجاحك على المدى البعيد.', icon: iconSupport },
  { title: 'جودة عالية',      desc: 'نهتم بأدق التفاصيل في كل مشروع حتى تحصل على الأفضل.', icon: iconDesign },
  { title: 'سرعة الإنجاز',   desc: 'نلتزم بالمواعيد بدقة واحترافية دون تأخير أو تنازل.', icon: iconWeb },
  { title: 'حلول مبتكرة',    desc: 'مواكبة لأحدث التقنيات والاتجاهات الإبداعية العالمية.', icon: iconSolutions },
  { title: 'أسعار تنافسية',  desc: 'أفضل قيمة مقابل الجودة العالية، تناسب كل الميزانيات.', icon: iconAds },
]

const allServices = [
  { title: 'إدارة حسابات التواصل الاجتماعي', cat: 'رقمي', icon: iconSocial, gradient: 'linear-gradient(135deg,#1a1a2e,#e74c3c)', link: '/social-media' },
  { title: 'التصميم الجرافيكي والهوية البصرية', cat: 'إبداعي', icon: iconDesign, gradient: 'linear-gradient(135deg,#1a1a2e,#8e44ad)', link: '/branding' },
  { title: 'إنتاج الفيديو والموشن جرافيك',    cat: 'إنتاج', icon: iconVideo, gradient: 'linear-gradient(135deg,#1a1a2e,#2980b9)', link: '/video-production' },
  { title: 'التصوير الاحترافي',                cat: 'إنتاج', icon: iconPhoto, gradient: 'linear-gradient(135deg,#1a1a2e,#6c5ce7)', link: '/photo-production' },
  { title: 'تطوير المواقع والتطبيقات',         cat: 'تقني', icon: iconWeb, gradient: 'linear-gradient(135deg,#1a1a2e,#27ae60)', link: '/web-development' },
  { title: 'الطباعة والمطبوعات',               cat: 'مادي', icon: iconPrint, gradient: 'linear-gradient(135deg,#1a1a2e,#f39c12)', link: '/print-design' },
  { title: 'الإعلانات الممولة (Sponsoring)',   cat: 'رقمي', icon: iconAds, gradient: 'linear-gradient(135deg,#1a1a2e,#f8b101)', link: '/digital-marketing' },
  { title: 'الاستراتيجية والتخطيط التسويقي',  cat: 'استراتيجي', icon: iconStrategy, gradient: 'linear-gradient(135deg,#1a1a2e,#e74c3c)', link: '/nos-services' },
]

const processSteps = [
  { number: 1, title: 'التواصل',           desc: 'نستمع لأفكارك ونفهم احتياجاتك بعمق' },
  { number: 2, title: 'التحليل والتخطيط', desc: 'تحليل وبناء استراتيجية مناسبة لمشروعك' },
  { number: 3, title: 'تصميم العرض',       desc: 'تقديم تصور شامل للعرض المقترح' },
  { number: 4, title: 'التنفيذ والإبداع', desc: 'تحويل الفكرة إلى واقع بأناقة وإتقان' },
  { number: 5, title: 'المراجعة',          desc: 'نراجع العمل معك حتى النتيجة المثالية' },
  { number: 6, title: 'التسليم',           desc: 'تسليم المشروع وإطلاقه بنجاح' },
  { number: 7, title: 'المتابعة والدعم',  desc: 'نستمر في دعمك لضمان استمرارية النجاح' },
]

const portfolioTabs = ['الكل', 'تصميم', 'فيديو', 'إعلانات']
const activeTab = ref('الكل')

/* ═══════════ PORTFOLIO MIXTE (images + vidéos) ═══════════ */
// Les éléments de catégorie "فيديو" possèdent une videoUrl, les autres une image.
const portfolioItems = [
  // === DESIGN (15 éléments) : images ===
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `design-${i + 1}`,
    title: `مشروع تصميم ${i + 1}`,
    tag: i % 3 === 0 ? 'هوية بصرية' : i % 3 === 1 ? 'بروشور' : 'بوستر',
    cat: 'تصميم',
    image: new URL(`../assets/design/design${i + 1}.jpg`, import.meta.url).href,
  })),
  
  // === PUBLICITÉS (10 éléments) : images ===
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `pub-${i + 1}`,
    title: `حملة إعلانية ${i + 1}`,
    tag: i % 3 === 0 ? 'إعلان ممول' : i % 3 === 1 ? 'إعلان صحفي' : 'بانر',
    cat: 'إعلانات',
    image: new URL(`../assets/image/pub${i + 1}.jpg`, import.meta.url).href,
  })),
  
  // === VIDÉOS (5 éléments) : vidéos ===
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `video-${i + 1}`,
    title: `فيديو ${i + 1}`,
    tag: i % 2 === 0 ? 'فيديو ترويجي' : 'موشن جرافيك',
    cat: 'فيديو',
    // on alterne les 5 vidéos importées
    videoUrl: [video1, video2, video3, video4, video5][i],
    // Pas d'image pour ces éléments
  })),
]

const filteredPortfolio = computed(() => {
  if (activeTab.value === 'الكل') return portfolioItems
  return portfolioItems.filter(i => i.cat === activeTab.value)
})

const testimonials = [
  { company: 'Innovex', initials: 'م', name: 'محمد العجمي', role: 'المدير التنفيذي — Innovex', text: 'تعاملنا مع فريق محترف، ساعدونا في تطوير هويتنا التسويقية وتحقيق نتائج فاقت توقعاتنا.' },
  { company: 'Glow Beauty', initials: 'س', name: 'سارة العمري', role: 'مديرة تجربة — Glow Beauty', text: 'فريق رائع واستجابة سريعة. أصبح التعامل معهم مصدر دعم دائم وتجربة Infinity تستحق الثقة.' },
  { company: 'Golden Coffee', initials: 'أ', name: 'أحمد بن سالم', role: 'مؤسس — Golden Coffee', text: 'تصميم إبداعي وتنفيذ احترافي، ساعدونا في تحسين حضورنا الرقمي وزيادة مبيعاتنا بشكل ملحوظ.' },
]

const sectors = [
  { icon: iconSectors.restaurant, label: 'المطاعم' },
  { icon: iconSectors.hotel, label: 'الفندقة' },
  { icon: iconSectors.realestate, label: 'العقارات' },
  { icon: iconSectors.education, label: 'التعليم' },
  { icon: iconSectors.health, label: 'الصحة' },
  { icon: iconSectors.tech, label: 'التكنولوجيا' },
  { icon: iconSectors.car, label: 'السيارات' },
]
const partners = ['SOTUFAB', 'Délice', 'TOPNET', 'Ultra Medical', 'CHERY']

const adsPricing = [
  { dur: '7 أيام',  price: '130', featured: false, feats: ['حتى 5 ولايات', 'إستراتيجية إعلانية', 'تقرير مفصل'] },
  { dur: '14 يوم',  price: '250', featured: true, feats: ['حتى 12 ولاية', 'إستراتيجية إعلانية', 'متابعة يومية', 'تقرير مفصل'] },
  { dur: '30 يوم',  price: '590', featured: false, feats: ['حتى 10 ولايات', 'إستراتيجية متكاملة', 'تقرير شامل'] },
]
const socialPricing = [
  { title: 'Starter',  price: '390', featured: false, feats: ['8 تصاميم', '2 فيديو', 'Sponsoring 5 أيام'] },
  { title: 'Business', price: '990', featured: true, feats: ['35 تصميم', '8 فيديوهات', '2 زيارة ميدانية', 'Sponsoring 20 يوم'] },
  { title: 'Premium',  price: '750', featured: false, feats: ['20 تصميم', '4 فيديوهات', 'Sponsoring 10 أيام'] },
]

const faqs = [
  { q: 'كم تستغرق مدة تنفيذ المشروع؟', a: 'تختلف المدة حسب حجم وتعقيد المشروع. في المتوسط تتراوح بين أسبوعين إلى شهرين.' },
  { q: 'هل يمكن طلب تعديلات بعد التسليم؟', a: 'نعم، نوفر فترة تعديلات مجانية بعد كل تسليم قد تصل إلى 3 جولات تعديلية.' },
  { q: 'كيف أطلب عرض سعر؟', a: 'يمكنك التواصل عبر النموذج في الموقع أو الاتصال المباشر، وسنرد عليك خلال 24 ساعة.' },
  { q: 'ما هي طرق الدفع المتاحة؟', a: 'نوفر طرق دفع متعددة تشمل التحويل البنكي، الدفع الإلكتروني، والدفع عند التسليم.' },
  { q: 'هل تعملون خارج مدنين؟', a: 'نعم، نخدم عملاء في مختلف محافظات تونس ونقدم خدماتنا عن بُعد بالكامل عند الحاجة.' },
  { q: 'هل يمكن الجمع بين عدة خدمات؟', a: 'بالتأكيد، أغلب عملائنا يستفيدون من عدة خدمات بعرض موحد وسعر تفضيلي.' },
]
const activeFaq = ref(null)
</script>

<style scoped>
/* ═══════════════ ROOT ═══════════════ */
.infinity-site {
  --gold:       #f8b101;
  --gold-deep:  #d49500;
  --gold-soft:  #fff8e6;
  --ink:        #1a1a1a;
  --ink-soft:   #3d3d3d;
  --bg:         #fafafa;
  --bg-s:       #f5f5f7;
  --sand:       #f0ebe0;
  --white:      #ffffff;
  --grey:       #6b6b7b;
  --grey-l:     #9a9aae;
  --border:     #e8e8ed;
  --r:          16px;
  --r-xl:       24px;
  --ease:       cubic-bezier(.22,1,.36,1);
  --font:       'Tajawal','Cairo',sans-serif;
  --sh-sm:      0 4px 20px rgba(0,0,0,.06);
  --sh-md:      0 12px 40px rgba(0,0,0,.10);
  --sh-lg:      0 24px 60px rgba(0,0,0,.14);
  direction: rtl;
  font-family: var(--font);
  background: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.infinity-site *, .infinity-site *::before, .infinity-site *::after {
  box-sizing: border-box; margin: 0; padding: 0;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
.section { padding: 100px 0; }
.section-head { margin-bottom: 56px; }
.section-head.center { text-align: center; }
.sec-tag {
  display: inline-block; padding: 6px 18px; background: var(--gold-soft); color: var(--gold-deep);
  border-radius: 50px; font-size: 13px; font-weight: 700; margin-bottom: 14px;
}
.sec-tag-light { background: rgba(255,255,255,.12); color: var(--gold); }
.sec-title { font-size: clamp(28px,3.8vw,40px); font-weight: 800; color: var(--ink); line-height: 1.25; margin-bottom: 8px; }
.sec-title.white { color: #fff; }
.sec-desc { color: var(--grey); font-size: 16px; line-height: 1.75; }
.sec-desc.light { color: #b0b0be; }
.gold-text { color: var(--gold); }
.btn-center { text-align: center; margin-top: 48px; }

/* BUTTONS */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 32px;
  border-radius: 50px; font-weight: 700; font-size: 15px; font-family: var(--font);
  border: 2px solid transparent; cursor: pointer; text-decoration: none;
  transition: transform .28s var(--ease), box-shadow .28s var(--ease), background .28s var(--ease), color .28s var(--ease);
}
.btn-primary { background: var(--gold); color: var(--ink); box-shadow: 0 8px 24px rgba(248,177,1,.28); }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(248,177,1,.40); }
.btn-gold-hero { background: var(--gold); color: var(--ink); box-shadow: 0 8px 24px rgba(248,177,1,.28); display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border-radius: 50px; font-weight: 700; font-size: 15px; font-family: var(--font); border: 2px solid transparent; cursor: pointer; text-decoration: none; transition: transform .28s var(--ease), box-shadow .28s var(--ease); }
.btn-gold-hero:hover { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(251, 196, 0, 0.4); }
.btn-outline-cta { background: transparent; color: var(--ink); border-color: var(--border); display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border-radius: 50px; font-weight: 700; font-size: 15px; font-family: var(--font); border: 2px solid; cursor: pointer; text-decoration: none; transition: all .28s var(--ease); }
.btn-outline-cta:hover { background: var(--ink); color: #fff; border-color: var(--ink); transform: translateY(-3px); }

/* ═══════════════ HERO ═══════════════ */
.hero {
  width: 100%; min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0; z-index: 0;
  background-image: url('../assets/15.png');
  background-repeat: no-repeat; background-position: center center; background-size: cover;
  animation: bgPan 22s ease-in-out infinite alternate;
}
.hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
.glow {
  position: absolute; z-index: 2; border-radius: 50%; filter: blur(90px); pointer-events: none;
}
.glow-1 { width: 480px; height: 480px; top: -120px; left: -90px; background: radial-gradient(circle, rgba(248,177,1,.28), transparent 65%); animation: gFloat1 14s ease-in-out infinite; }
.glow-2 { width: 360px; height: 360px; bottom: -100px; right: -60px; background: radial-gradient(circle, rgba(248,177,1,.20), transparent 65%); animation: gFloat2 17s ease-in-out infinite; }
.glow-3 { width: 280px; height: 280px; top: 50%; left: 50%; transform: translate(-50%,-50%); background: radial-gradient(circle, rgba(248,177,1,.12), transparent 65%); animation: gPulse 9s ease-in-out infinite; }

.shape { position: absolute; border-radius: 20px; pointer-events: none; z-index: 2; animation: shFloat 18s ease-in-out infinite alternate; }
.shape-1 { width:80px;height:80px; top:8%;right:22%; background:rgba(248,177,1,.20); transform:rotate(20deg); animation-delay:0s; }
.shape-2 { width:52px;height:52px; top:22%;left:14%; background:rgba(248,177,1,.14); transform:rotate(45deg); animation-delay:-3s; }
.shape-3 { width:40px;height:40px; bottom:30%;right:9%; background:rgba(248,177,1,.24); transform:rotate(-15deg); animation-delay:-6s; }
.shape-4 { width:66px;height:66px; bottom:16%;left:22%; background:rgba(248,177,1,.12); transform:rotate(30deg); animation-delay:-9s; }
.shape-5 { width:28px;height:28px; top:60%;right:38%; background:rgba(248,177,1,.18); transform:rotate(55deg); animation-delay:-4s; }

.hero-container { width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 48px; position: relative; z-index: 3; padding-top: 80px; padding-bottom: 120px; }
.hero-content { text-align: right; animation: fadeUp .9s var(--ease) both; }
.hero-badge { display: inline-flex; align-items: center; gap: 10px; padding: 8px 20px; background: rgba(248,177,1,.12); border: 1px solid rgba(248,177,1,.30); border-radius: 50px; font-size: 13.5px; font-weight: 600; color: var(--ink); margin-bottom: 24px; }
.badge-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--gold); flex-shrink: 0; animation: blink 2s ease-in-out infinite; }
.hero-title { font-size: clamp(46px,5.8vw,72px); line-height: 1.22; font-weight: 800; color: var(--ink); margin-bottom: 20px; }
.gold-gradient { display: block; background: linear-gradient(135deg, #f8b101 0%, #d49500 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-desc {
  font-size: 17.5px;
  color: var(--ink);
  line-height: 1.9;
  max-width: 500px;
  margin-bottom: 36px;
}
.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-primary-hero { display: inline-flex; align-items: center; gap: 8px; padding: 16px 38px; border-radius: 50px; font-size: 16px; font-weight: 700; font-family: var(--font); background: var(--gold); color: var(--ink); border: 2px solid var(--gold); text-decoration: none; cursor: pointer; box-shadow: 0 8px 28px rgba(248,177,1,.32); transition: all .28s var(--ease); }
.btn-primary-hero:hover { transform: translateY(-3px); box-shadow: 0 16px 38px rgba(248,177,1,.44); }
.btn-primary-hero svg { transition: transform .28s var(--ease); }
.btn-primary-hero:hover svg { transform: translateX(-4px); }
.btn-secondary-hero { display: inline-flex; align-items: center; justify-content: center; padding: 16px 38px; border-radius: 50px; font-size: 16px; font-weight: 700; font-family: var(--font); background: transparent; color: var(--ink); border: 2px solid #d5d5dd; text-decoration: none; cursor: pointer; transition: all .28s var(--ease); }
.btn-secondary-hero:hover { background: var(--ink); color: #fff; border-color: var(--ink); transform: translateY(-3px); }
.scroll-indicator { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; margin-top: 48px; color: var(--grey-l); font-size: 12px; animation: fadeUp 1.2s var(--ease) .4s both; }
.scroll-mouse { width: 26px; height: 40px; border: 2px solid #d5d5dd; border-radius: 20px; position: relative; }
.scroll-dot { width: 5px; height: 5px; background: var(--gold); border-radius: 50%; position: absolute; top: 7px; left: 50%; transform: translateX(-50%); animation: scrollD 2s ease-in-out infinite; }

.hero-visual { position: relative; width: 440px; height: 440px; margin: 0 auto; animation: fadeUp 1s var(--ease) .2s both; }
.orbit { position: absolute; border-radius: 50%; border: 1.5px dashed rgba(248,177,1,.28); pointer-events: none; }
.orbit-outer { inset: 0; animation: spin 30s linear infinite; }
.orbit-mid   { inset: 18%; animation: spin 20s linear infinite reverse; }
.logo-orb { position: absolute; inset: 34%; border-radius: 50%; overflow: hidden; background: #fff; box-shadow: 0 12px 44px rgba(0,0,0,.14), 0 0 0 6px rgba(248,177,1,.12); display: flex; align-items: center; justify-content: center; }
.logo-orb img { width: 100%; height: 100%; object-fit: cover; }
.svc-bubble { position: absolute; display: flex; flex-direction: column; align-items: center; gap: 4px; background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 10px 12px; box-shadow: var(--sh-sm); animation: orbFloat 5s ease-in-out infinite; min-width: 68px; text-align: center; }
.svc-bubble span  { font-size: 22px; color: var(--gold); }
.svc-bubble small { font-size: 11px; font-weight: 600; color: #555; white-space: nowrap; }
.bubble-1 { top: 8%;  right: 10%; animation-delay: 0s; }
.bubble-2 { top: 38%; right: -4%; animation-delay: -1.5s; }
.bubble-3 { bottom: 18%; left: 6%; animation-delay: -3s; }
.bubble-4 { top: 8%; left: 12%; animation-delay: -4.5s; }
.mini-stat { position: absolute; background: var(--gold); color: var(--ink); border-radius: 12px; padding: 10px 16px; text-align: center; box-shadow: 0 8px 24px rgba(248,177,1,.30); }
.mini-stat strong { display: block; font-size: 18px; font-weight: 800; }
.mini-stat small  { font-size: 11px; font-weight: 600; }
.stat-a { bottom: 12%; right: 2%; }
.stat-b { bottom: 32%; left: -2%; }
.hero-wave { position: absolute; bottom: -2px; left: 0; right: 0; z-index: 4; pointer-events: none; }
.hero-wave svg { display: block; width: 100%; }

/* STATS */
.stats-sec { padding: 0; }
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); background: var(--ink); border-radius: var(--r-xl); overflow: hidden; margin: 48px 0; }
.stat-box { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 44px 16px; gap: 6px; border-left: 1px solid rgba(255,255,255,.07); }
.stat-box:last-child { border-left: none; }
.stat-val { font-size: 42px; font-weight: 800; color: var(--gold); letter-spacing: -.5px; }
.stat-lbl { font-size: 14px; color: #c0c0cc; }

/* QUICK SERVICES */
.services-section { background: var(--bg); }
.services-7-grid { display: grid; grid-template-columns: repeat(7,1fr); gap: 14px; }
.svc-card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-xl); padding: 28px 14px; display: flex; flex-direction: column; align-items: center; text-align: center; text-decoration: none; color: var(--ink); gap: 12px; transition: transform .28s var(--ease), box-shadow .28s var(--ease), border-color .28s; }
.svc-card:hover { transform: translateY(-6px); box-shadow: var(--sh-md); border-color: transparent; }
.svc-icon-circle { width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; transition: transform .28s var(--ease); }
.svc-card:hover .svc-icon-circle { transform: scale(1.1); }
.svc-icon-circle :deep(svg) { width: 26px; height: 26px; }
.svc-card h4 { font-size: 12.5px; font-weight: 700; line-height: 1.5; min-height: 38px; display: flex; align-items: center; }
.svc-link-text { font-size: 12px; color: var(--gold); font-weight: 700; }

/* WHY US */
.why-section { background: #fff; }
.why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.why-card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--r-xl); padding: 34px 26px; text-align: center; transition: transform .28s var(--ease), box-shadow .28s var(--ease); }
.why-card:hover { transform: translateY(-5px); box-shadow: var(--sh-md); }
.why-icon-wrap { width: 54px; height: 54px; background: var(--gold-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--gold); margin: 0 auto 18px; }
.why-icon-wrap :deep(svg) { width: 24px; height: 24px; }
.why-card h4 { font-size: 16px; margin-bottom: 8px; }
.why-card p  { font-size: 13.5px; line-height: 1.75; }

/* ALL SERVICES */
.all-services-sec { background: var(--bg-s); }
.all-services-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
.as-card { background: #fff; border-radius: var(--r-xl); overflow: hidden; box-shadow: var(--sh-sm); transition: transform .35s var(--ease), box-shadow .35s var(--ease); text-decoration: none; color: inherit; display: block; }
.as-card:hover { transform: translateY(-8px); box-shadow: var(--sh-lg); }
.as-thumb { height: 180px; position: relative; overflow: hidden; }
.as-thumb-inner { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
.as-thumb-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,.5), transparent); opacity: 0; transition: opacity .35s var(--ease); z-index: 1; }
.as-card:hover .as-thumb-overlay { opacity: 1; }
.as-thumb-icon :deep(svg) { width: 48px; height: 48px; color: rgba(255,255,255,.7); }
.as-body { padding: 20px; }
.as-cat { font-size: 11.5px; font-weight: 700; color: var(--gold-deep); background: var(--gold-soft); padding: 3px 10px; border-radius: 50px; margin-bottom: 8px; display: inline-block; }
.as-body h4 { font-size: 14px; font-weight: 700; margin-bottom: 10px; }
.as-link { font-size: 13px; color: var(--gold); font-weight: 600; text-decoration: none; opacity: 0; transition: opacity .3s var(--ease); display: inline-block; }
.as-card:hover .as-link { opacity: 1; }

/* PROCESS DARK */
.process-dark-sec { background: var(--ink); }
.steps-grid { display: grid; grid-template-columns: repeat(7,1fr); gap: 14px; }
.step-box { text-align: center; }
.step-num { display: block; font-size: 46px; font-weight: 800; color: rgba(255,255,255,.07); margin-bottom: 12px; letter-spacing: -1px; }
.step-box h5 { color: #fff; font-size: 13.5px; margin-bottom: 6px; }
.step-box p  { font-size: 12px; color: #888; line-height: 1.7; }

/* ═══════════ PORTFOLIO MIXTE (images + vidéos) ═══════════ */
.portfolio-sec { background: var(--bg); }
.filter-tabs { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
.filter-tab { padding: 9px 22px; border-radius: 50px; font-size: 14px; font-weight: 600; font-family: var(--font); background: #fff; border: 1.5px solid var(--border); color: var(--grey); cursor: pointer; transition: all .25s var(--ease); }
.filter-tab.active, .filter-tab:hover { background: var(--ink); color: #fff; border-color: var(--ink); transform: translateY(-2px); }
.filter-tab.active { background: var(--gold); color: var(--ink); border-color: var(--gold); }
.portfolio-grid { 
  display: grid; 
  grid-template-columns: repeat(5,1fr); 
  gap: 16px; 
}
.port-item { 
  border-radius: var(--r); 
  overflow: hidden; 
  height: 220px; 
  position: relative; 
  cursor: pointer;
  background: #e8e8ed;
}
.port-img-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
/* Images */
.port-img { 
  width: 100%; 
  height: 100%; 
  object-fit: cover;
  transition: transform .5s var(--ease);
  display: block;
}
.port-item:hover .port-img { 
  transform: scale(1.08); 
}
/* Vidéos */
.port-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.port-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity .35s var(--ease);
}
.port-item:hover .port-overlay {
  opacity: 1;
}
.port-play-icon {
  width: 48px;
  height: 48px;
  background: var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--ink);
  box-shadow: 0 4px 16px rgba(0,0,0,.25);
}
.port-info { 
  position: absolute; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  background: linear-gradient(to top, rgba(0,0,0,.88), transparent); 
  padding: 20px; 
  color: #fff; 
  display: flex; 
  flex-direction: column; 
  transform: translateY(4px); 
  transition: transform .35s var(--ease); 
}
.port-item:hover .port-info { 
  transform: translateY(0); 
}
.port-info span  { font-size: 14px; font-weight: 700; }
.port-info small { font-size: 11.5px; color: var(--gold); margin-top: 4px; }

/* TESTIMONIALS */
.testimonials-sec { background: var(--bg-s); }
.testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
.testi-card { background: #fff; border-radius: var(--r-xl); padding: 32px; box-shadow: var(--sh-sm); position: relative; transition: transform .28s var(--ease), box-shadow .28s var(--ease); }
.testi-card:hover { transform: translateY(-5px); box-shadow: var(--sh-md); }
.quote-mark { font-size: 64px; color: var(--gold-soft); line-height: 1; font-weight: 800; margin-bottom: -10px; }
.testi-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.tco { font-weight: 800; font-size: 14px; color: #555; }
.stars { color: var(--gold); font-size: 14px; letter-spacing: 1px; }
.testi-text { font-size: 14.5px; color: #555; line-height: 1.9; margin-bottom: 22px; min-height: 65px; }
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-av { width: 46px; height: 46px; border-radius: 50%; background: var(--gold); color: var(--ink); font-weight: 800; font-size: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.testi-info strong { display: block; font-size: 14px; color: var(--ink); }
.testi-info small  { color: #999; font-size: 12px; }

/* SECTORS & PARTNERS */
.sectors-partners-sec { background: #fff; }
.sp-wrap { display: grid; grid-template-columns: 1fr auto 1fr; gap: 48px; align-items: start; }
.sp-col-title { font-size: 20px; text-align: center; margin-bottom: 28px; font-weight: 800; }
.sp-col-title::after { content: ''; display: block; width: 44px; height: 3px; background: var(--gold); border-radius: 2px; margin: 10px auto 0; }
.sp-divider { width: 1px; background: var(--border); align-self: stretch; margin-top: 48px; }
.sectors-flex { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; }
.sector-item { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12.5px; color: #555; font-weight: 500; transition: transform .25s; cursor: default; }
.sector-item:hover { transform: translateY(-3px); }
.sector-icon-wrap { width: 52px; height: 52px; border-radius: 50%; background: var(--bg-s); display: flex; align-items: center; justify-content: center; font-size: 20px; transition: all .3s; color: var(--ink); }
.sector-icon-wrap :deep(svg) { width: 22px; height: 22px; }
.sector-item:hover .sector-icon-wrap { background: var(--gold-soft); box-shadow: 0 6px 18px rgba(248,177,1,.2); }
.partners-flex { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
.partner-chip { background: var(--bg-s); padding: 14px 24px; border-radius: 10px; font-weight: 700; color: #666; font-size: 13px; transition: all .3s; cursor: default; }
.partner-chip:hover { background: var(--ink); color: var(--gold); transform: translateY(-3px); box-shadow: var(--sh-sm); }

/* PRICING */
.pricing-preview-sec { background: var(--bg-s); }
.pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
.pricing-block { background: #fff; border-radius: var(--r-xl); padding: 32px; box-shadow: var(--sh-sm); }
.pricing-block-title { font-size: 17px; font-weight: 800; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
.price-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
.price-card { position: relative; background: var(--bg-s); border: 1.5px solid var(--border); border-radius: var(--r); padding: 20px 16px; text-align: center; transition: transform .28s var(--ease), box-shadow .28s var(--ease); }
.price-card:hover { transform: translateY(-3px); box-shadow: var(--sh-sm); }
.price-card.featured { background: var(--ink); border-color: var(--gold); box-shadow: 0 0 0 2px var(--gold); }
.feat-badge { position: absolute; top: -11px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--ink); font-size: 10.5px; font-weight: 700; padding: 3px 10px; border-radius: 50px; white-space: nowrap; }
.price-dur { font-size: 12px; font-weight: 700; background: var(--gold); color: var(--ink); padding: 5px 10px; border-radius: 8px; display: inline-block; margin-bottom: 10px; }
.price-amount { font-size: 26px; font-weight: 800; color: var(--gold); margin-bottom: 12px; }
.price-amount small { font-size: 13px; font-weight: 500; }
.price-card:not(.featured) .price-amount { color: var(--ink); }
.price-card ul { display: flex; flex-direction: column; gap: 6px; }
.price-card li { font-size: 12px; color: var(--grey); padding-right: 14px; position: relative; text-align: right; }
.price-card.featured li { color: rgba(255,255,255,.75); }
.price-card li::before { content: ''; position: absolute; right: 0; top: 6px; width: 5px; height: 5px; background: var(--gold); border-radius: 50%; }
.pricing-formula { text-align: center; margin-top: 32px; font-size: 15px; color: var(--grey); background: #fff; border: 1.5px solid var(--border); border-radius: 14px; padding: 16px 24px; }
.pricing-formula strong { color: var(--gold-deep); }

/* FAQ */
.faq-section { background: var(--bg); }
.faq-grid { max-width: 960px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; align-items: start; }
.faq-item { border-bottom: 1.5px solid #e0e0e6; transition: border-color .3s; }
.faq-item.active { border-color: var(--gold); }
.faq-question { padding: 20px 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 15px; font-weight: 600; color: var(--ink); gap: 14px; transition: color .3s; }
.faq-item.active .faq-question { color: var(--gold-deep); }
.faq-toggle-icon { font-size: 22px; color: var(--gold); font-weight: 300; flex-shrink: 0; }
.faq-answer { padding-bottom: 18px; }
.faq-answer p { font-size: 14px; color: var(--grey); line-height: 1.8; }
.faq-slide-enter-active, .faq-slide-leave-active { transition: opacity .25s, transform .25s var(--ease); }
.faq-slide-enter-from, .faq-slide-leave-to { opacity: 0; transform: translateY(-8px); }

/* CTA */
.cta-section { padding: 40px 0 100px; }
.cta-card { background: var(--sand); border-radius: var(--r-xl); padding: 50px; display: flex; align-items: center; gap: 36px; flex-wrap: wrap; position: relative; overflow: hidden; }
.cta-shape { position: absolute; border-radius: 50%; pointer-events: none; }
.cta-sh1 { width: 280px; height: 280px; top: -80px; left: -60px; background: rgba(248,177,1,.14); filter: blur(60px); }
.cta-sh2 { width: 200px; height: 200px; bottom: -60px; right: -40px; background: rgba(248,177,1,.10); filter: blur(50px); }
.cta-img-wrap { position: relative; z-index: 1; flex-shrink: 0; }
.cta-img-wrap img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 12px 36px rgba(0,0,0,.14); }
.cta-copy { flex: 1; min-width: 240px; position: relative; z-index: 1; }
.cta-copy h2 { font-size: 26px; font-weight: 800; margin-bottom: 10px; }
.cta-copy p  { font-size: 15px; color: var(--grey); line-height: 1.75; }
.cta-btns { display: flex; gap: 14px; flex-wrap: wrap; position: relative; z-index: 1; }

/* KEYFRAMES */
@keyframes bgPan {
  0%   { transform: scale(1.05) translate(0, 0); }
  100% { transform: scale(1.14) translate(-2%, -2%); }
}
@keyframes gFloat1 {
  0%,100% { transform: translate(0,0) scale(1); }
  33%     { transform: translate(28px,20px) scale(1.06); }
  66%     { transform: translate(-10px,-8px) scale(.94); }
}
@keyframes gFloat2 {
  0%,100% { transform: translate(0,0) scale(1); }
  33%     { transform: translate(-24px,-18px) scale(1.05); }
  66%     { transform: translate(12px,10px) scale(.95); }
}
@keyframes gPulse {
  0%,100% { opacity:.5; transform:translate(-50%,-50%) scale(1); }
  50%     { opacity:1;  transform:translate(-50%,-50%) scale(1.08); }
}
@keyframes shFloat {
  0%   { transform: translateY(0px) rotate(20deg); }
  100% { transform: translateY(-22px) rotate(32deg); }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes orbFloat {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-10px); }
}
@keyframes blink {
  0%,100% { opacity:1; }
  50%     { opacity:.4; }
}
@keyframes scrollD {
  0%,100% { top:7px; opacity:1; }
  50%     { top:20px; opacity:.3; }
}
@keyframes fadeUp {
  from { opacity:0; transform:translateY(28px); }
  to   { opacity:1; transform:translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 1200px) {
  .hero-container          { grid-template-columns: 1fr; padding-top: 100px; padding-bottom: 140px; }
  .hero-content            { text-align: center; }
  .hero-desc               { margin-left: auto; }
  .hero-actions            { justify-content: center; }
  .scroll-indicator        { align-items: center; }
  .hero-visual             { display: none; }
  .services-7-grid         { grid-template-columns: repeat(4,1fr); }
  .steps-grid              { grid-template-columns: repeat(4,1fr); }
  .all-services-grid       { grid-template-columns: repeat(3,1fr); }
  .portfolio-grid          { grid-template-columns: repeat(3,1fr); }
}
@media (max-width: 900px) {
  .why-grid                { grid-template-columns: repeat(2,1fr); }
  .testi-grid              { grid-template-columns: repeat(2,1fr); }
  .services-7-grid         { grid-template-columns: repeat(3,1fr); }
  .all-services-grid       { grid-template-columns: repeat(2,1fr); }
  .sp-wrap                 { grid-template-columns: 1fr; }
  .sp-divider              { display: none; }
  .faq-grid                { grid-template-columns: 1fr; }
  .steps-grid              { grid-template-columns: repeat(3,1fr); }
  .stats-grid              { grid-template-columns: repeat(2,1fr); }
  .stat-box                { border-left: none; border-bottom: 1px solid rgba(255,255,255,.07); }
  .pricing-grid            { grid-template-columns: 1fr; }
  .portfolio-grid          { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 640px) {
  .hero-title              { font-size: 36px; }
  .hero-actions            { flex-direction: column; align-items: center; }
  .btn-primary-hero,
  .btn-secondary-hero      { width: 100%; justify-content: center; }
  .section                 { padding: 64px 0; }
  .services-7-grid,
  .why-grid                { grid-template-columns: repeat(2,1fr); }
  .all-services-grid       { grid-template-columns: 1fr; }
  .testi-grid              { grid-template-columns: 1fr; }
  .steps-grid              { grid-template-columns: repeat(2,1fr); }
  .portfolio-grid          { grid-template-columns: 1fr; }
  .price-cards             { grid-template-columns: 1fr; }
  .cta-card                { flex-direction: column; text-align: center; padding: 32px 22px; }
  .cta-btns                { flex-direction: column; width: 100%; }
  .cta-btns .btn,
  .cta-btns .btn-outline-cta { width: 100%; }
  .hero-wave               { display: none; }
  .scroll-indicator        { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-bg, .glow, .shape,
  .orbit, .svc-bubble, .scroll-dot { animation: none !important; }
  .hero-content, .hero-visual       { animation: none !important; }
  .svc-card, .why-card, .as-card,
  .testi-card, .price-card,
  .btn-primary-hero,
  .btn-secondary-hero               { transition: none !important; }
}
</style>