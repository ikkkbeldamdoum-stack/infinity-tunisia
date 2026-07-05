<!-- src/views/PrintDesignView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/nos-services">خدماتنا</RouterLink>
        <span class="sep">/</span>
        <span class="current">الطباعة والإشهار</span>
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
            Print &amp; Publicité
          </span>
          <h1 class="hero-title">
            الطباعة <span class="gold-gradient">والإشهار</span>
          </h1>
          <p class="hero-sub">نحوّل أفكارك إلى واقع يبرز علامتك التجارية</p>
          <p class="hero-desc">
            نقدم حلولاً متكاملة في الطباعة والإشهار بتصاميم احترافية وجودة عالية،
            لنساعدك على إبراز هوية نشاطك التجاري وجذب انتباه عملائك.
          </p>

          <div class="hero-badges">
            <div class="hero-badge" v-for="b in heroBadges" :key="b.label">
              <span class="hero-badge-icon" v-html="b.icon"></span>
              <span>{{ b.label }}</span>
            </div>
          </div>

          <div class="hero-actions">
            <RouterLink to="/devis" class="btn-hero-gold">
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
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M18 9H6" />
                <path d="M18 5v4" />
                <rect x="6" y="5" width="12" height="4" />
                <rect x="4" y="9" width="16" height="11" rx="1" />
                <line x1="8" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="12" y2="18" />
              </svg>
            </div>
          </div>

          <div class="glass-chip chip-1">
            <span class="chip-icon" v-html="icons.checkBadge"></span>
            <div>
              <strong>+500</strong>
              <small>مشروع طباعة منجز</small>
            </div>
          </div>

          <div class="glass-chip chip-2">
            <span class="chip-icon" v-html="icons.smile"></span>
            <div>
              <strong>+98%</strong>
              <small>رضا العملاء</small>
            </div>
          </div>

          <div class="glass-chip chip-3">
            <span class="chip-icon" v-html="icons.clock"></span>
            <div>
              <strong>24h</strong>
              <small>زمن استجابة</small>
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

    <!-- ═══════════════ ماذا نقدم لك؟ (SERVICES) ═══════════════ -->
    <section class="section services-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">خدمات الطباعة</span>
          <h2 class="sec-title">ماذا نقدم لك؟</h2>
          <p class="sec-desc">حلول طباعة متكاملة تجمع بين الإبداع والدقة لتعزيز حضور علامتك التجارية</p>
        </div>

        <div class="services-filters">
          <button
            v-for="cat in serviceCategories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeServiceCategory === cat }"
            @click="activeServiceCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="services-grid">
          <div class="service-card" v-for="s in filteredServices" :key="s.slug">
            <div class="service-card-glow" :style="{ background: s.glow }"></div>
            <div class="service-icon">
              <img :src="s.image" :alt="s.label" loading="lazy" />
            </div>
            <div class="service-content">
              <h4>{{ s.label }}</h4>
              <p>{{ s.desc }}</p>
              <RouterLink :to="`/produit/${s.slug}`" class="service-link">
                اطلب الآن
                <span class="link-arrow">←</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ لماذا تختار Infinity ═══════════════ -->
    <section class="section why-section">
      <div class="why-bg-shape shape-1"></div>
      <div class="why-bg-shape shape-2"></div>
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">مزايانا</span>
          <h2 class="sec-title">لماذا تختار Infinity؟</h2>
          <p class="sec-desc">فريق متخصص وتجهيزات حديثة لضمان أفضل تجربة طباعة ممكنة</p>
        </div>
        <div class="why-grid">
          <div class="why-card" v-for="(w, idx) in whyItems" :key="w.label">
            <div class="why-num">{{ String(idx + 1).padStart(2, '0') }}</div>
            <div class="why-icon" v-html="w.icon"></div>
            <h4>{{ w.label }}</h4>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ كيف نعمل ═══════════════ -->
    <section class="section process-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">مسار العمل</span>
          <h2 class="sec-title">كيف نعمل؟</h2>
          <p class="sec-desc">منهجية واضحة من الفكرة إلى التسليم النهائي</p>
        </div>
        <div class="process-track">
          <div class="process-line"></div>
          <div class="process-line-fill"></div>
          <div class="process-step" v-for="p in processSteps" :key="p.num">
            <div class="process-dot" v-html="p.icon"></div>
            <span class="process-num">{{ p.num }}</span>
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ نماذج من أعمالنا ═══════════════ -->
    <section class="section portfolio-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">أعمالنا</span>
          <h2 class="sec-title">نماذج من أعمالنا</h2>
          <p class="sec-desc">مجموعة مختارة من المشاريع التي نفخر بتنفيذها لعملائنا</p>
        </div>

        <div class="portfolio-filters">
          <button
            v-for="cat in portfolioCategories"
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <div class="portfolio-grid">
          <div
            class="portfolio-item"
            v-for="item in filteredPortfolio"
            :key="item.title"
          >
            <div class="portfolio-thumb" :style="{ backgroundImage: `url(${item.image})` }">
              <div class="portfolio-overlay">
                <span class="portfolio-category">{{ item.category }}</span>
                <span class="portfolio-tag">{{ item.title }}</span>
                <span class="portfolio-view">عرض التفاصيل ←</span>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-actions">
          <RouterLink to="/contact" class="btn-hero-gold">عرض جميع الأعمال</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════ عملاؤنا الموثوقون ═══════════════ -->
    <section class="clients-section">
      <div class="wrap">
        <p class="clients-label">شركاء النجاح الذين وثقوا بنا</p>
        <div class="clients-track">
          <div class="client-chip" v-for="c in clientNames" :key="c">{{ c }}</div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ آراء عملائنا ═══════════════ -->
    <section class="section testimonials-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">آراء العملاء</span>
          <h2 class="sec-title">ماذا يقول عملاؤنا؟</h2>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
            <div class="testimonial-stars">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="testimonial-text">{{ t.text }}</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ t.initial }}</div>
              <div>
                <strong>{{ t.name }}</strong>
                <small>{{ t.role }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ مميزات خدماتنا ═══════════════ -->
    <section class="section features-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">الجودة أولاً</span>
          <h2 class="sec-title">مميزات خدماتنا</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f">
            <span class="feature-check">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span>{{ f }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CTA ═══════════════ -->
    <section class="section cta-simple-section">
      <div class="wrap">
        <div class="cta-simple">
          <div class="cta-glow"></div>
          <div class="cta-glow cta-glow-2"></div>
          <div class="cta-pattern"></div>
          <h3>لديك فكرة إعلان مميزة؟</h3>
          <p>دعنا نحولها إلى تصميم احترافي يلفت الأنظار ويبرز علامتك التجارية.</p>

          <!-- نموذج طلب عرض سعر سريع -->
          <form class="quick-quote-form" @submit.prevent="submitQuickQuote">
            <div class="qq-field">
              <input type="text" v-model="quickQuote.name" placeholder="الاسم الكامل" required />
            </div>
            <div class="qq-field">
              <input type="tel" v-model="quickQuote.phone" placeholder="رقم الهاتف" required />
            </div>
            <div class="qq-field">
              <select v-model="quickQuote.service">
                <option value="" disabled selected>اختر الخدمة المطلوبة</option>
                <option v-for="s in services" :key="s.label" :value="s.label">{{ s.label }}</option>
              </select>
            </div>
            <button type="submit" class="btn-hero-gold qq-submit">
              أرسل الطلب
              <span class="btn-arrow">←</span>
            </button>
          </form>
          <p class="qq-hint" v-if="quickQuoteSent">تم إرسال طلبك بنجاح، سنتواصل معك قريباً!</p>

          <div class="cta-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline btn-hero-outline-dark">تواصل معنا</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ ═══════════════ -->
    <section class="section faq-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">دعم العملاء</span>
          <h2 class="sec-title">الأسئلة الشائعة</h2>
        </div>
        <div class="faq-list">
          <div
            class="faq-item"
            v-for="(f, i) in faqs"
            :key="f.q"
            :class="{ open: openFaq === i }"
            @click="openFaq = openFaq === i ? -1 : i"
          >
            <div class="faq-q">
              <span>{{ f.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </div>
            <transition name="faq-expand">
              <p class="faq-a" v-if="openFaq === i">{{ f.a }}</p>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CONTACT INFO ═══════════════ -->
    <section class="contact-info-section">
      <div class="wrap contact-info-simple">
        <h3 class="info-title">تواصل معنا</h3>
        <div class="info-items">
          <div class="info-item">
            <span class="info-icon">📍</span>
            طريق قابس كلم 1.5 مدنين، قبالة صيدلية كشو
          </div>
          <div class="info-item">
            <span class="info-icon">📞</span>
            +216 92 105 505
          </div>
          <div class="info-item">
            <span class="info-icon">✉️</span>
            contact@infinity-agency.com
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ═══════════════ IMPORTS DES IMAGES SERVICES ═══════════════
import businessImg from '../assets/business.png'
import flyerImg from '../assets/flyer.png'
import brochureImg from '../assets/brochure.png'
import rollupImg from '../assets/rollup.png'
import bannerImg from '../assets/banner.png'
import signImg from '../assets/sign.png'
import catalogueImg from '../assets/cathalogue.png'
import stickerImg from '../assets/sticker.png'
import portAfficheImg from '../assets/portaffiche.png'
import habillageVoitureImg from '../assets/habillagevoiture.png'
import carnetFactureImg from '../assets/carnetfacture.png'
import porteDocumentImg from '../assets/portedocument.png'
import cachetImg from '../assets/cachet.png'
import calendrierImg from '../assets/calendrier.png'
import mugImg from '../assets/mug.png'
import styloImg from '../assets/stylo.png'
import porteCleImg from '../assets/portecle.png'
import trophesImg from '../assets/trophés.png'
import nfcImg from '../assets/nfc.png'
import bachImg from '../assets/bach.png'

// ═══════════════ IMPORTS DES IMAGES PORTFOLIO ═══════════════
// Noms EXACTS de vos fichiers (d'après l'image)

// Fonction pour importer les images
function getImageUrl(name) {
  return new URL(`../assets/printdesign/${name}`, import.meta.url).href
}

// Images avec les noms EXACTS
const bannerShowroom = getImageUrl('banner-showroom-1.jpg')
const bonDepense = getImageUrl('Bon-de-dépense.jpg')
const casquette = getImageUrl('casquette.jpg')
const gilet = getImageUrl('gilet-1.jpg')
const menuA3Back = getImageUrl('menu-a3-back.jpg')
const menuA3Face = getImageUrl('menu-a3-face.jpg')
const mockup2Bleu = getImageUrl('mockup-2 BLEU.png')
const mockup2 = getImageUrl('MOCKUP-2.jpg')
const mockup2Marron = getImageUrl('mockup-2-MARRON.png')
const mockup3 = getImageUrl('mockup-31.jpg')
const mockup3Alt = getImageUrl('MOCKUP-3.jpg')
const mockup4 = getImageUrl('mockup-4.jpg')
const mockupAgenda1 = getImageUrl('mockup-agenda-1.jpg')
const mockupAgenda2 = getImageUrl('mockup-agenda-2.jpg')
const panneauDroit = getImageUrl('panneau-droite.png')
const panneauGauche = getImageUrl('panneau-gauche.png')
const porteDocumentPortfolio = getImageUrl('PORTE-DOCUMENT.jpg')
const recuj = getImageUrl('recu.jpg')
const tenue = getImageUrl('TENUE.png')
const veste = getImageUrl('veste-1-m.jpg')

/* ═══════════════════════════════════════════════════════════
   ICÔNES — Hero
═══════════════════════════════════════════════════════════ */
const icons = {
  checkBadge: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.39 1.94 3.02-.44 1.02 2.9 2.9 1.02-.44 3.02L23 12l-1.94 2.39.44 3.02-2.9 1.02-1.02 2.9-3.02-.44L12 23l-2.39-1.94-3.02.44-1.02-2.9-2.9-1.02.44-3.02L1 12l1.94-2.39-.44-3.02 2.9-1.02 1.02-2.9 3.02.44z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  smile: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
}

/* ═══════════════════════════════════════════════════════════
   HERO BADGES
═══════════════════════════════════════════════════════════ */
const heroBadges = [
  { label: 'جودة طباعة عالية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M18 9H6"/><rect x="4" y="9" width="16" height="11" rx="1"/><line x1="8" y1="14" x2="16" y2="14"/></svg>` },
  { label: 'تنفيذ احترافي', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><polyline points="12 2 12 10 15 7 12 10 9 7"/></svg>` },
  { label: 'تسليم سريع', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'أسعار تنافسية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` }
]

/* ═══════════════════════════════════════════════════════════
   STATS BAND
═══════════════════════════════════════════════════════════ */
const statItems = [
  { value: '+500', label: 'مشروع منجز', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>` },
  { value: '+120', label: 'عميل راضٍ', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { value: '+8', label: 'سنوات خبرة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { value: '98%', label: 'نسبة الرضا', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` }
]

/* ═══════════════════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════════════════ */
const services = [
  {
    slug: 'business-cards',
    category: 'بطاقات وأوراق',
    label: 'بطاقات الأعمال',
    desc: 'تصميم وطباعة بطاقات احترافية بجميع أنواع الورق مع إمكانية إضافة تقنية NFC.',
    image: businessImg,
    glow: 'radial-gradient(circle, rgba(248,177,1,0.18), transparent 70%)'
  },
  {
    slug: 'cartes-nfc',
    category: 'بطاقات وأوراق',
    label: 'بطاقات NFC',
    desc: 'بطاقات ذكية بتقنية NFC لمشاركة معلوماتك المهنية بلمسة واحدة.',
    image: nfcImg,
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    slug: 'flyers',
    category: 'إشهار مطبوع',
    label: 'المطويات (Flyers)',
    desc: 'مطويات دعائية بجودة عالية ومقاسات متعددة تناسب مختلف الحملات الإعلانية.',
    image: flyerImg,
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    slug: 'brochures',
    category: 'إشهار مطبوع',
    label: 'البروشورات',
    desc: 'تصميم احترافي وطباعة فاخرة تعكس هوية علامتك التجارية.',
    image: brochureImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'catalogues',
    category: 'إشهار مطبوع',
    label: 'كتالوجات',
    desc: 'كتالوجات منتجات بتجليد وصفحات داخلية عالية الجودة لعرض عروضك بشكل احترافي.',
    image: catalogueImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'stickers-autocollants',
    category: 'إشهار مطبوع',
    label: 'ستيكرات وملصقات',
    desc: 'ملصقات وستيكرات مقصوصة بالشكل المطلوب، بخامات مقاومة للماء والاحتكاك.',
    image: stickerImg,
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    slug: 'porte-affiches',
    category: 'إشهار مطبوع',
    label: 'حوامل الملصقات',
    desc: 'حوامل ملصقات أنيقة لعرض إعلاناتك داخل المحلات ونقاط البيع.',
    image: portAfficheImg,
    glow: 'radial-gradient(circle, rgba(17,17,17,0.10), transparent 70%)'
  },
  {
    slug: 'rollup',
    category: 'عرض ومعارض',
    label: 'رول أب (Roll Up)',
    desc: 'ستاندات رول أب عالية الجودة سهلة النقل والتركيب.',
    image: rollupImg,
    glow: 'radial-gradient(circle, rgba(17,17,17,0.10), transparent 70%)'
  },
  {
    slug: 'banners-vinyl',
    category: 'عرض ومعارض',
    label: 'اللافتات والفينيل',
    desc: 'طباعة لافتات وفينيل بمختلف الأحجام والخامات للاستخدام الداخلي والخارجي.',
    image: bannerImg,
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    slug: 'baches-publicitaires',
    category: 'عرض ومعارض',
    label: 'بافانات إشهارية (Bâches)',
    desc: 'بافانات كبيرة الحجم للواجهات والفعاليات، بخامة مقاومة للعوامل الجوية.',
    image: bachImg,
    glow: 'radial-gradient(circle, rgba(66,133,244,0.16), transparent 70%)'
  },
  {
    slug: 'signage',
    category: 'عرض ومعارض',
    label: 'اللوحات والإشارات',
    desc: 'تصميم وتنفيذ اللوحات المضيئة، ولوحات المحلات، والإشارات التجارية باحترافية.',
    image: signImg,
    glow: 'radial-gradient(circle, rgba(255,0,0,0.10), transparent 70%)'
  },
  {
    slug: 'habillage-vehicules',
    category: 'عرض ومعارض',
    label: 'تلبيس السيارات',
    desc: 'تغليف وتلبيس السيارات بالفينيل الإعلاني لتحويل أسطولك إلى وسيلة إشهار متحركة.',
    image: habillageVoitureImg,
    glow: 'radial-gradient(circle, rgba(255,0,0,0.10), transparent 70%)'
  },
  {
    slug: 'carnets-factures',
    category: 'قرطاسية إدارية',
    label: 'كرانيه الفواتير',
    desc: 'كرانيه فواتير مرقمة وجاهزة للاستخدام اليومي في نشاطك التجاري.',
    image: carnetFactureImg,
    glow: 'radial-gradient(circle, rgba(248,177,1,0.18), transparent 70%)'
  },
  {
    slug: 'porte-documents',
    category: 'قرطاسية إدارية',
    label: 'حافظات المستندات',
    desc: 'حافظات مستندات مطبوعة بشعارك، مثالية لتسليم العروض والملفات الإدارية.',
    image: porteDocumentImg,
    glow: 'radial-gradient(circle, rgba(248,177,1,0.18), transparent 70%)'
  },
  {
    slug: 'cachets-professionnels',
    category: 'قرطاسية إدارية',
    label: 'الأختام المهنية',
    desc: 'أختام مطاطية احترافية لختم الفواتير والمستندات الرسمية بسرعة ودقة.',
    image: cachetImg,
    glow: 'radial-gradient(circle, rgba(17,17,17,0.10), transparent 70%)'
  },
  {
    slug: 'calendriers',
    category: 'هدايا وغوديز',
    label: 'التقاويم الإشهارية',
    desc: 'تقاويم مكتبية أو حائطية مخصصة تبقي علامتك حاضرة طوال السنة.',
    image: calendrierImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'mugs-personnalises',
    category: 'هدايا وغوديز',
    label: 'الأكواب المخصصة',
    desc: 'أكواب وماغات مطبوعة بشعارك، هدية عملية ودائمة الحضور لعملائك وموظفيك.',
    image: mugImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'stylos-publicitaires',
    category: 'هدايا وغوديز',
    label: 'الأقلام الإشهارية',
    desc: 'أقلام مطبوعة بشعارك، من أكثر الهدايا الترويجية استخداماً وفعالية.',
    image: styloImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'porte-cles',
    category: 'هدايا وغوديز',
    label: 'ميداليات المفاتيح',
    desc: 'ميداليات مفاتيح مخصصة بأشكال وخامات متعددة كهدية ترويجية مميزة.',
    image: porteCleImg,
    glow: 'radial-gradient(circle, rgba(214,41,118,0.14), transparent 70%)'
  },
  {
    slug: 'trophees',
    category: 'هدايا وغوديز',
    label: 'الدروع والجوائز',
    desc: 'دروع وجوائز تكريمية مخصصة للمناسبات والفعاليات والتكريمات السنوية.',
    image: trophesImg,
    glow: 'radial-gradient(circle, rgba(255,0,0,0.10), transparent 70%)'
  }
]

const serviceCategories = ['الكل', ...new Set(services.map((s) => s.category))]
const activeServiceCategory = ref('الكل')
const filteredServices = computed(() =>
  activeServiceCategory.value === 'الكل'
    ? services
    : services.filter((s) => s.category === activeServiceCategory.value)
)

/* ═══════════════════════════════════════════════════════════
   WHY US
═══════════════════════════════════════════════════════════ */
const whyItems = [
  { label: 'جودة عالية ومواد احترافية', desc: 'نستخدم أفضل الخامات والآلات لضمان نتيجة تدوم طويلاً.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { label: 'تصاميم عصرية وهوية بصرية متكاملة', desc: 'فريق تصميم مختص يبني هوية بصرية متناسقة لعلامتك.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v4l2 1"/></svg>` },
  { label: 'تنفيذ سريع واحترام مواعيد التسليم', desc: 'نلتزم بالمواعيد المتفق عليها مهما كان حجم الطلب.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'دقة وإتقان في جميع التفاصيل', desc: 'مراقبة جودة صارمة في كل مرحلة من مراحل الإنتاج.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>` },
  { label: 'استشارة مجانية ودعم متواصل', desc: 'فريقنا متواجد لمساعدتك في اختيار الحل الأنسب.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { label: 'أسعار مناسبة لجميع المشاريع', desc: 'باقات مرنة تناسب مختلف الميزانيات والاحتياجات.', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` }
]

/* ═══════════════════════════════════════════════════════════
   PROCESS STEPS
═══════════════════════════════════════════════════════════ */
const processSteps = [
  { num: '01', title: 'فهم احتياجاتك', desc: 'نستمع إلى فكرتك ونحدد جميع متطلبات المشروع.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { num: '02', title: 'التصميم', desc: 'يقوم فريقنا بإعداد تصميم احترافي يعكس هوية علامتك.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '03', title: 'المراجعة', desc: 'نرسل لك نموذج العمل لاعتماده قبل التنفيذ.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>` },
  { num: '04', title: 'الطباعة والتنفيذ', desc: 'نستخدم أحدث تقنيات الطباعة للحصول على أفضل جودة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M18 9H6"/><rect x="4" y="9" width="16" height="11" rx="1"/><line x1="8" y1="14" x2="16" y2="14"/></svg>` },
  { num: '05', title: 'مراقبة الجودة', desc: 'نفحص جميع المنتجات قبل التسليم لضمان الجودة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` },
  { num: '06', title: 'التسليم', desc: 'نسلم طلبك في الوقت المحدد وبأفضل حالة.', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` }
]

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO
═══════════════════════════════════════════════════════════ */

const portfolio = [
  { 
    title: 'بانر عرض المتجر', 
    category: 'لافتات', 
    image: bannerShowroom
  },
  { 
    title: 'بطاقة أعمال فاخرة', 
    category: 'بطاقات', 
    image: bonDepense
  },
  { 
    title: 'بطاقة تعريفية مميزة', 
    category: 'بطاقات', 
    image: recuj
  },
  { 
    title: 'قائمة طعام - الوجه الأمامي', 
    category: 'مطويات', 
    image: menuA3Face
  },
  { 
    title: 'قائمة طعام - الوجه الخلفي', 
    category: 'مطويات', 
    image: menuA3Back
  },
  { 
    title: 'موكب تصميم إعلاني', 
    category: 'موكبات', 
    image: mockup2
  },
  { 
    title: 'موكب تصميم - أزرق', 
    category: 'موكبات', 
    image: mockup2Bleu
  },
  { 
    title: 'موكب تصميم - بني', 
    category: 'موكبات', 
    image: mockup2Marron
  },
  { 
    title: 'موكب تصميم 3', 
    category: 'موكبات', 
    image: mockup3
  },
  { 
    title: 'موكب تصميم 3 - بديل', 
    category: 'موكبات', 
    image: mockup3Alt
  },
  { 
    title: 'موكب تصميم 4', 
    category: 'موكبات', 
    image: mockup4
  },
  { 
    title: 'أجندة مخصصة 1', 
    category: 'أجندات', 
    image: mockupAgenda1
  },
  { 
    title: 'أجندة مخصصة 2', 
    category: 'أجندات', 
    image: mockupAgenda2
  },
  { 
    title: 'حافظة مستندات احترافية', 
    category: 'قرطاسية', 
    image: porteDocumentPortfolio
  },
  { 
    title: 'قبعة رياضية مخصصة', 
    category: 'ملابس', 
    image: casquette
  },
  { 
    title: 'سترة رياضية احترافية', 
    category: 'ملابس', 
    image: veste
  },
  { 
    title: 'سترة موحدة', 
    category: 'ملابس', 
    image: gilet
  },
  { 
    title: 'الزي الموحد للموظفين', 
    category: 'ملابس', 
    image: tenue
  }
]

// Catégories uniques
const portfolioCategories = ['الكل', ...new Set(portfolio.map(p => p.category))]
const activeCategory = ref('الكل')

// Portfolio filtré
const filteredPortfolio = computed(() =>
  activeCategory.value === 'الكل'
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory.value)
)

/* ═══════════════════════════════════════════════════════════
   CLIENTS
═══════════════════════════════════════════════════════════ */
const clientNames = [
  'مطاعم الأصالة', 'عقارات النخبة', 'صيدلية كشو', 'متجر الأناقة',
  'مقهى الوسيط', 'شركة النقل السريع', 'معرض السيارات الذهبي', 'مركز التجميل'
]

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════ */
const testimonials = [
  { name: 'أحمد بن سالم', role: 'صاحب مطعم', initial: 'أ', text: 'تعاملت مع Infinity لطباعة قائمة الطعام واللوحات، النتيجة فاقت التوقعات من حيث الجودة والسرعة.' },
  { name: 'سامية الطرابلسي', role: 'مديرة تسويق', initial: 'س', text: 'فريق محترف جداً، ساعدونا في تصميم وطباعة كامل موادنا الدعائية بأسعار تنافسية جداً.' },
  { name: 'خالد المنصوري', role: 'صاحب متجر', initial: 'خ', text: 'اللوحة المضيئة التي نفذوها لمحلي غيرت شكل الواجهة بالكامل، شكراً Infinity.' }
]

/* ═══════════════════════════════════════════════════════════
   FEATURES
═══════════════════════════════════════════════════════════ */
const features = [
  'أحدث آلات الطباعة',
  'خامات عالية الجودة',
  'مقاومة للعوامل الخارجية',
  'ألوان ثابتة ودقيقة',
  'تشطيبات احترافية',
  'أسعار تنافسية',
  'تصميم مجاني عند الطلب',
  'خدمة ما بعد البيع'
]

/* ═══════════════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════════════ */
const faqs = [
  { q: 'ما أقل كمية يمكن طلبها؟', a: 'يمكنك طلب قطعة واحدة أو أي كمية حسب احتياجاتك.' },
  { q: 'كم تستغرق مدة التنفيذ؟', a: 'تختلف حسب نوع المنتج والكمية، وعادة من يوم إلى خمسة أيام عمل.' },
  { q: 'هل يمكن تنفيذ تصميم خاص؟', a: 'نعم، نوفر خدمة التصميم الاحترافي بما يتوافق مع هوية نشاطك.' },
  { q: 'هل تقدمون خدمة التركيب؟', a: 'نعم، نوفر خدمة تركيب اللوحات واللافتات داخل وخارج المدينة.' },
  { q: 'هل يمكن الشحن إلى جميع الولايات؟', a: 'نعم، نوفر خدمة الشحن إلى جميع أنحاء البلاد.' }
]

const openFaq = ref(0)

/* ═══════════════════════════════════════════════════════════
   FORMULAIRE DE DEVIS RAPIDE (CTA)
═══════════════════════════════════════════════════════════ */
const quickQuote = ref({ name: '', phone: '', service: '' })
const quickQuoteSent = ref(false)
function submitQuickQuote() {
  quickQuoteSent.value = true
  quickQuote.value = { name: '', phone: '', service: '' }
  setTimeout(() => { quickQuoteSent.value = false }, 5000)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

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
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 70px 0 80px;
  background-image:
    linear-gradient(135deg, rgba(12, 18, 48, 0.4), rgba(7, 11, 30, 0.55)),
    url('../assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(
    to left,
    rgba(7, 11, 30, 0.96) 0%,
    rgba(7, 11, 30, 0.88) 32%,
    rgba(7, 11, 30, 0.55) 55%,
    rgba(7, 11, 30, 0.18) 78%,
    rgba(7, 11, 30, 0) 100%
  );
}
.hero-grid-pattern {
  position: absolute; inset: 0; z-index: 1; opacity: 0.05; pointer-events: none;
  background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px);
  background-size: 40px 40px;
}
.hero::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(to top, rgba(7, 11, 30, 0.65) 0%, rgba(7, 11, 30, 0) 30%);
  pointer-events: none;
}
.glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2; }
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.18); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.08); }
.glow-3 { width: 260px; height: 260px; top: 40%; left: 20%; background: rgba(66, 133, 244, 0.08); }

.hero-container {
  position: relative; z-index: 3;
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center;
  width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px;
}
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
.hero-badge-icon {
  width: 46px; height: 46px; border-radius: 12px; border: 1px solid rgba(248,177,1,0.4);
  display: flex; align-items: center; justify-content: center; color: var(--gold);
  background: rgba(255,255,255,0.06); backdrop-filter: blur(6px); transition: transform 0.3s var(--ease);
}
.hero-badge:hover .hero-badge-icon { transform: translateY(-4px); border-color: var(--gold); }

.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-hero-gold, .btn-hero-outline {
  display: inline-flex; align-items: center; gap: 8px; justify-content: center;
  padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px;
  text-decoration: none; transition: all 0.3s var(--ease); cursor: pointer; border: 1px solid transparent;
}
.btn-hero-gold { background: var(--gold); color: #1a1a1a; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4); }
.btn-hero-gold:hover { background: var(--gold-dark); transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.5); }
.btn-arrow { transition: transform 0.3s var(--ease); }
.btn-hero-gold:hover .btn-arrow { transform: translateX(-4px); }
.btn-hero-outline { background: rgba(255,255,255,0.05); color: #fff; border-color: rgba(255,255,255,0.3); backdrop-filter: blur(6px); }
.btn-hero-outline:hover { background: rgba(255, 255, 255, 0.12); border-color: var(--gold); transform: translateY(-3px); }
.btn-hero-outline-dark { color: var(--text); border-color: rgba(26,32,44,0.2); background: rgba(255,255,255,0.5); }
.btn-hero-outline-dark:hover { background: rgba(255,255,255,0.9); border-color: var(--gold); }

.hero-visual { position: relative; display: flex; align-items: center; justify-content: center; min-height: 340px; }
.visual-frame {
  position: relative;
  width: 260px; height: 260px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(248, 177, 1, 0.35);
  backdrop-filter: blur(14px);
  box-shadow: 0 30px 70px rgba(0,0,0,0.45), inset 0 0 40px rgba(248,177,1,0.08);
}
.visual-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(248,177,1,0.2); }
.ring-1 { width: 320px; height: 320px; animation: spin-slow 30s linear infinite; }
.ring-2 { width: 380px; height: 380px; border-style: dashed; animation: spin-slow 50s linear infinite reverse; }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.print-icon { color: var(--gold); opacity: 0.9; animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

.glass-chip {
  position: absolute; display: flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.08); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.2); border-radius: 14px; padding: 12px 16px;
  box-shadow: 0 14px 34px rgba(0,0,0,0.35); animation: float 5s ease-in-out infinite;
}
.chip-1 { top: 4%; left: -18px; animation-delay: 0s; }
.chip-2 { bottom: 14%; left: 8px; animation-delay: 1.6s; }
.chip-3 { top: 42%; left: -40px; animation-delay: 0.8s; }
.chip-icon { width: 36px; height: 36px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.18); color: var(--gold); display: flex; align-items: center; justify-content: center; }
.glass-chip strong { display: block; font-size: 16px; font-weight: 800; color: #fff; line-height: 1.3; }
.glass-chip small { font-size: 11.5px; color: #d3d8ec; }

.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; line-height: 0; }

@media (max-width: 900px) {
  .hero-container { grid-template-columns: 1fr; }
  .hero-visual { display: none; }
  .hero { background-attachment: scroll; }
}

/* STATS BAND */
.stats-band { background: var(--navy); padding: 40px 0; position: relative; z-index: 4; margin-top: -2px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.stat-item { display: flex; align-items: center; gap: 14px; justify-content: center; color: #fff; }
.stat-icon { width: 46px; height: 46px; border-radius: 12px; background: rgba(248,177,1,0.14); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-item strong { display: block; font-size: 22px; font-weight: 800; }
.stat-item span { font-size: 12.5px; color: #aab0c8; }
@media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } }

/* SERVICES */
.services-section { background: #f9fafb; position: relative; overflow: hidden; }
.services-section::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(248, 177, 1, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(30, 60, 114, 0.04) 0%, transparent 50%);
  pointer-events: none;
}
.services-filters { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 40px; position: relative; z-index: 1; }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; position: relative; z-index: 1; }

.service-card {
  background: #fff; border: 1px solid var(--border); border-radius: var(--radius-lg);
  overflow: hidden; text-align: center; transition: all 0.4s var(--ease);
  box-shadow: var(--shadow-sm); position: relative;
}
.service-card:hover { transform: translateY(-12px); box-shadow: var(--shadow-lg); border-color: rgba(248, 177, 1, 0.5); }

.service-card-glow {
  position: absolute; inset: 0; opacity: 0; transition: opacity 0.4s var(--ease); pointer-events: none;
}
.service-card:hover .service-card-glow { opacity: 1; }

.service-icon {
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 20px 15px;
  background: transparent;
  transition: transform 0.4s ease;
  position: relative;
  z-index: 1;
}
.service-card:hover .service-icon { transform: scale(1.04); }
.service-icon img {
  width: 100%;
  max-width: 200px;
  max-height: 180px;
  object-fit: contain;
  background: transparent;
  mix-blend-mode: multiply;
  filter: drop-shadow(0 8px 15px rgba(0,0,0,0.1));
  transition: transform 0.4s ease;
}
.service-card:hover .service-icon img { transform: scale(1.12); }

.service-content { padding: 0 24px 30px; position: relative; z-index: 1; }
.service-card h4 { font-size: 18px; font-weight: 800; margin-bottom: 10px; color: var(--text); letter-spacing: -0.2px; }
.service-card h4::after {
  content: ''; display: block; width: 40px; height: 3px; background: var(--gold);
  margin: 12px auto 0; border-radius: 3px; opacity: 0; transform: scaleX(0); transition: all 0.3s ease;
}
.service-card:hover h4::after { opacity: 1; transform: scaleX(1); }
.service-card p { font-size: 14px; color: var(--text-muted); line-height: 1.8; margin: 0 0 16px; }
.service-link {
  display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 700;
  color: var(--gold); text-decoration: none; opacity: 0; transform: translateY(6px);
  transition: all 0.35s var(--ease);
}
.service-card:hover .service-link { opacity: 1; transform: translateY(0); }
.link-arrow { transition: transform 0.3s var(--ease); }
.service-link:hover .link-arrow { transform: translateX(-4px); }

@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .service-icon { height: 190px; }
  .service-icon img { max-width: 150px; max-height: 140px; }
}
@media (max-width: 560px) {
  .services-grid { grid-template-columns: 1fr; }
  .service-icon { height: 180px; }
  .service-icon img { max-width: 130px; max-height: 120px; }
}

/* WHY US */
.why-section { background: var(--bg-panel); position: relative; overflow: hidden; }
.why-bg-shape { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.5; pointer-events: none; }
.shape-1 { width: 320px; height: 320px; background: rgba(248,177,1,0.08); top: -100px; left: -80px; }
.shape-2 { width: 260px; height: 260px; background: rgba(66,133,244,0.06); bottom: -80px; right: -60px; }
.why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; position: relative; z-index: 1; }
.why-card {
  background: #fff; border: 1px solid var(--border); border-radius: var(--radius-md);
  padding: 32px 26px; position: relative; transition: all 0.35s var(--ease); text-align: right;
}
.why-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: rgba(248,177,1,0.4); }
.why-num { position: absolute; top: 20px; left: 24px; font-size: 34px; font-weight: 800; color: rgba(248,177,1,0.15); }
.why-icon {
  width: 56px; height: 56px; border-radius: 14px; background: #fef3c7; color: var(--gold);
  display: flex; align-items: center; justify-content: center; border: 1px solid rgba(248,177,1,0.3); margin-bottom: 18px;
}
.why-card h4 { font-size: 16px; font-weight: 800; margin-bottom: 8px; color: var(--text); }
.why-card p { font-size: 13.5px; color: var(--text-muted); line-height: 1.7; }
@media (max-width: 900px) { .why-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .why-grid { grid-template-columns: 1fr; } }

/* PROCESS */
.process-section { background: var(--bg); }
.process-track { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
.process-line { position: absolute; top: 26px; left: 5%; right: 5%; height: 2px; background: repeating-linear-gradient(to right, var(--gold) 0 8px, transparent 8px 16px); z-index: 0; opacity: 0.4; }
.process-line-fill { position: absolute; top: 26px; right: 5%; width: 0; height: 2px; background: var(--gold); z-index: 0; }
.process-step { position: relative; z-index: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
.process-dot {
  width: 54px; height: 54px; border-radius: 50%; background: #fff; color: var(--gold);
  display: flex; align-items: center; justify-content: center; margin-bottom: 12px;
  border: 2px solid var(--gold); box-shadow: var(--shadow-sm); transition: all 0.3s var(--ease);
}
.process-step:hover .process-dot { background: var(--gold); color: #fff; transform: scale(1.1); }
.process-num { font-weight: 800; color: var(--gold); font-size: 13px; margin-bottom: 6px; }
.process-step h4 { font-size: 15px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
.process-step p { font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }
@media (max-width: 900px) { .process-track { grid-template-columns: repeat(3, 1fr); } .process-line, .process-line-fill { display: none; } }
@media (max-width: 560px) { .process-track { grid-template-columns: repeat(2, 1fr); } }

/* PORTFOLIO */
.portfolio-section { background: var(--bg-panel); padding: 90px 0; }
.portfolio-filters { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 40px; }

.filter-btn {
  padding: 9px 24px; 
  border-radius: 50px; 
  border: 1px solid var(--border); 
  background: #fff;
  color: var(--text-light); 
  font-size: 13.5px; 
  font-weight: 700; 
  cursor: pointer; 
  transition: all 0.25s var(--ease);
  font-family: 'Cairo', sans-serif;
}
.filter-btn:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-2px); }
.filter-btn.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; box-shadow: 0 4px 15px rgba(248, 177, 1, 0.3); }

.portfolio-grid { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
}

.portfolio-item {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s var(--ease);
  aspect-ratio: 1 / 1;
}
.portfolio-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.portfolio-thumb {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: transform 0.5s var(--ease);
}
.portfolio-item:hover .portfolio-thumb {
  transform: scale(1.05);
}

.portfolio-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 20px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    transparent 100%
  );
  color: #fff;
  opacity: 0;
  transition: all 0.4s var(--ease);
}
.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.portfolio-category {
  font-size: 11px;
  color: var(--gold);
  font-weight: 700;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(10px);
  transition: transform 0.4s var(--ease);
}
.portfolio-item:hover .portfolio-category {
  transform: translateY(0);
}

.portfolio-tag {
  font-weight: 800;
  font-size: 15px;
  margin-bottom: 8px;
  transform: translateY(10px);
  transition: transform 0.4s var(--ease) 0.05s;
}
.portfolio-item:hover .portfolio-tag {
  transform: translateY(0);
}

.portfolio-view {
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.7);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(10px);
  transition: all 0.4s var(--ease) 0.1s;
}
.portfolio-item:hover .portfolio-view {
  transform: translateY(0);
  color: var(--gold);
}

.portfolio-actions { margin-top: 48px; text-align: center; }

@media (max-width: 1200px) {
  .portfolio-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 992px) {
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
  .portfolio-section { padding: 60px 0; }
  .portfolio-grid { grid-template-columns: 1fr; gap: 16px; }
  .portfolio-item { aspect-ratio: 4 / 3; }
  .portfolio-filters { gap: 8px; }
  .filter-btn { padding: 7px 16px; font-size: 12px; }
  .portfolio-actions { margin-top: 32px; }
}

/* CLIENTS */
.clients-section { background: var(--bg); padding: 50px 0 60px; border-bottom: 1px solid var(--border); }
.clients-label { text-align: center; font-size: 13.5px; color: var(--text-muted); font-weight: 700; margin-bottom: 26px; letter-spacing: 0.3px; }
.clients-track { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; }
.client-chip {
  padding: 10px 22px; border-radius: 50px; background: var(--bg-panel); border: 1px solid var(--border);
  font-size: 13.5px; font-weight: 700; color: var(--text-light); transition: all 0.25s var(--ease);
}
.client-chip:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-2px); background: #fff; }

/* TESTIMONIALS */
.testimonials-section { background: var(--bg); }
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.testimonial-card {
  background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md);
  padding: 30px 26px; transition: all 0.3s var(--ease);
}
.testimonial-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
.testimonial-stars { color: var(--gold); font-size: 15px; margin-bottom: 14px; letter-spacing: 2px; }
.testimonial-text { font-size: 14px; color: var(--text-light); line-height: 1.85; margin-bottom: 22px; }
.testimonial-author { display: flex; align-items: center; gap: 12px; }
.author-avatar {
  width: 44px; height: 44px; border-radius: 50%; background: var(--gold); color: #1a1a1a;
  display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0;
}
.testimonial-author strong { display: block; font-size: 14.5px; color: var(--text); }
.testimonial-author small { font-size: 12px; color: var(--text-muted); }
@media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr; } }

/* FEATURES */
.features-section { background: var(--bg-panel); }
.features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.feature-item {
  display: flex; align-items: center; gap: 12px; background: #fff; border: 1px solid var(--border);
  border-radius: 12px; padding: 16px 20px; font-size: 14px; color: var(--text-light); transition: all 0.25s var(--ease);
}
.feature-item:hover { border-color: var(--gold); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
.feature-check {
  width: 22px; height: 22px; border-radius: 50%; background: rgba(248,177,1,0.15); color: var(--gold);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
@media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .features-grid { grid-template-columns: 1fr; } }

/* CTA */
.cta-simple-section { background: var(--bg); }
.cta-simple {
  position: relative; overflow: hidden; background: linear-gradient(135deg, #fff8e6, #fffaf0);
  border: 1px solid rgba(248,177,1,0.3); border-radius: var(--radius-lg); padding: 64px 40px; text-align: center;
}
.cta-glow { position: absolute; width: 300px; height: 300px; background: rgba(248,177,1,0.12); filter: blur(90px); border-radius: 50%; top: -80px; left: 50%; transform: translateX(-50%); }
.cta-glow-2 { width: 220px; height: 220px; background: rgba(66,133,244,0.08); top: auto; bottom: -80px; left: 10%; transform: none; }
.cta-pattern {
  position: absolute; inset: 0; opacity: 0.4; pointer-events: none;
  background-image: radial-gradient(rgba(248,177,1,0.15) 1.5px, transparent 1.5px);
  background-size: 22px 22px;
}
.cta-simple h3 { font-size: 30px; font-weight: 800; color: var(--text); margin-bottom: 12px; position: relative; z-index: 1; }
.cta-simple p { font-size: 16px; color: var(--text-light); max-width: 500px; margin: 0 auto 30px; position: relative; z-index: 1; }
.cta-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }

.quick-quote-form {
  position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
  max-width: 720px; margin: 0 auto 8px;
}
.qq-field { flex: 1 1 200px; }
.qq-field input, .qq-field select {
  width: 100%; padding: 13px 18px; border-radius: 12px; border: 1px solid var(--border);
  background: #fff; font-family: inherit; font-size: 14px; color: var(--text);
  transition: all 0.25s var(--ease);
}
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

/* CONTACT */
.contact-info-section { background: var(--bg); padding: 70px 0; }
.contact-info-simple { max-width: 640px; margin: 0 auto; text-align: center; }
.info-title { font-size: 22px; font-weight: 800; color: var(--text); margin-bottom: 30px; }
.info-items { display: flex; flex-direction: column; align-items: center; gap: 16px; }
.info-item {
  display: flex; align-items: center; gap: 12px; font-size: 15px; color: var(--text-light);
  background: var(--bg-panel); border: 1px solid var(--border); border-radius: 50px;
  padding: 12px 26px; transition: all 0.25s var(--ease);
}
.info-item:hover { border-color: var(--gold); box-shadow: var(--shadow-sm); }
.info-icon { font-size: 18px; }
</style>