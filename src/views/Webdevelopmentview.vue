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
      <div class="particles">
        <span v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)"></span>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge-tag">🚀 شركة تطوير معتمدة</div>
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
            <RouterLink to="/devis" class="btn-hero-gold">
              <span>اطلب عرض سعر</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">
              <span>تواصل معنا</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </RouterLink>
          </div>

          <div class="hero-trust">
            <div class="trust-avatars">
              <div class="trust-avatar" v-for="i in 4" :key="i" :style="{ background: avatarColors[i-1] }">
                {{ avatarInitials[i-1] }}
              </div>
            </div>
            <span class="trust-text">موثوق من <strong>+80 عميل</strong></span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="floating-mockup">
            <div class="mockup-screen">
              <div class="mockup-header">
                <div class="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div class="mockup-url">infinity.tn</div>
              </div>
              <div class="mockup-content">
                <div class="mockup-line" v-for="i in 6" :key="i" :style="{ width: mockupWidths[i-1] }"></div>
              </div>
            </div>
            <div class="mockup-shadow"></div>
          </div>
          <div class="floating-elements">
            <div class="float-el el-1">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div class="float-el el-2">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div class="float-el el-3">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
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
          <span class="sec-tag">خدماتنا</span>
          <h2 class="sec-title">ماذا نقدم لك؟</h2>
          <p class="sec-desc">نقدم مجموعة متكاملة من خدمات تطوير الويب والتطبيقات</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-for="(s, index) in services" :key="s.label" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="service-icon" v-html="s.icon"></div>
            <h4>{{ s.label }}</h4>
            <p>{{ s.desc }}</p>
            <div class="service-hover-line"></div>
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
          <div class="pack-card" data-aos="fade-up" data-aos-delay="100">
            <div class="pack-image-wrapper">
              <img :src="landingImg" alt="Landing Page" class="pack-image">
              <div class="pack-image-overlay"></div>
            </div>
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
            <RouterLink :to="{ name: 'contact', query: { pack: 'Landing Page' } }" class="btn-hero-gold full-width">
              <span>احصل على العرض</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>

          <!-- Site Vitrine -->
          <div class="pack-card" data-aos="fade-up" data-aos-delay="200">
            <div class="pack-image-wrapper">
              <img :src="vitrineImg" alt="Site Vitrine" class="pack-image">
              <div class="pack-image-overlay"></div>
            </div>
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
            <RouterLink :to="{ name: 'contact', query: { pack: 'Site Vitrine' } }" class="btn-hero-gold full-width">
              <span>احصل على العرض</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>

          <!-- E-Commerce -->
          <div class="pack-card popular" data-aos="fade-up" data-aos-delay="300">
            <div class="pack-image-wrapper">
              <img :src="ecommerceImg" alt="E-Commerce" class="pack-image">
              <div class="pack-image-overlay"></div>
              <div class="popular-tag">🔥 الأكثر طلباً</div>
            </div>
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
            <RouterLink :to="{ name: 'contact', query: { pack: 'E-Commerce' } }" class="btn-hero-gold full-width">
              <span>احصل على العرض</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>

          <!-- Système de réservation -->
          <div class="pack-card" data-aos="fade-up" data-aos-delay="400">
            <div class="pack-image-wrapper">
              <img :src="reservationImg" alt="Réservation" class="pack-image">
              <div class="pack-image-overlay"></div>
            </div>
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
            <RouterLink :to="{ name: 'contact', query: { pack: 'نظام الحجز' } }" class="btn-hero-gold full-width">
              <span>احصل على العرض</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>

          <!-- Maintenance -->
          <div class="pack-card" data-aos="fade-up" data-aos-delay="500">
            <div class="pack-image-wrapper">
              <img :src="maintenanceImg" alt="Maintenance" class="pack-image">
              <div class="pack-image-overlay"></div>
            </div>
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
            <RouterLink :to="{ name: 'contact', query: { pack: 'صيانة ودعم فني' } }" class="btn-hero-gold full-width">
              <span>احصل على العرض</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ كيف نعمل ═══════════════ -->
    <section class="section process-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">منهجية العمل</span>
          <h2 class="sec-title">كيف نعمل؟</h2>
          <p class="sec-desc">نتبع منهجية واضحة لضمان نجاح مشروعك</p>
        </div>
        <div class="process-track">
          <div class="process-line"></div>
          <div class="process-step" v-for="(p, index) in processSteps" :key="p.num" :style="{ animationDelay: `${index * 0.15}s` }">
            <div class="process-dot-wrapper">
              <div class="process-dot" v-html="p.icon"></div>
              <div class="process-dot-pulse"></div>
            </div>
            <span class="process-num">{{ p.num }}</span>
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PORTFOLIO ═══════════════ -->
    <section class="section portfolio-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">أعمالنا</span>
          <h2 class="sec-title">معرض الأعمال</h2>
          <p class="sec-desc">بعض من مشاريعنا التي نفخر بها</p>
        </div>

        <div class="portfolio-tabs">
          <button
            v-for="tab in portfolioTabs"
            :key="tab"
            class="tab-btn"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>
        </div>

        <div class="portfolio-grid">
          <div
            v-for="item in filteredPortfolio"
            :key="item.title"
            class="portfolio-card"
          >
            <div class="portfolio-thumb" :style="{ background: item.color }">
              <span class="portfolio-icon" v-html="item.icon"></span>
              <div class="portfolio-hover">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/>
                </svg>
                <span>عرض المشروع</span>
              </div>
            </div>
            <h4>{{ item.title }}</h4>
            <p class="portfolio-cat">{{ item.category }}</p>
          </div>
        </div>
        
        <div class="portfolio-more">
          <RouterLink to="/nos-services" class="btn-hero-outline">شاهد كل الأعمال</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════ TECHNOLOGIES + STATS ═══════════════ -->
    <section class="section tech-stats-section">
      <div class="wrap">
        <div class="tech-stats-grid">
          <div class="tech-block" data-aos="fade-right">
            <h3>🛠️ التقنيات التي نستخدمها</h3>
            <div class="tech-grid">
              <div class="tech-item" v-for="tech in technologies" :key="tech.label">
                <div class="tech-icon-circle" v-html="tech.icon"></div>
                <span>{{ tech.label }}</span>
              </div>
            </div>
          </div>
          <div class="stats-block" data-aos="fade-left">
            <h3>📊 إحصائياتنا</h3>
            <div class="stats-inner-grid">
              <div class="stat-item" v-for="stat in stats" :key="stat.label">
                <div class="stat-icon-circle" v-html="stat.icon"></div>
                <div>
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ WHY US ═══════════════ -->
    <section class="section why-section">
      <div class="wrap">
        <div class="why-card" data-aos="zoom-in">
          <h3 class="why-title">لماذا تختارنا لتطوير موقعك؟</h3>
          <div class="why-grid">
            <div class="why-item" v-for="(item, index) in whyUs" :key="item.label" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="why-icon" v-html="item.icon"></div>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ + CTA ═══════════════ -->
    <section class="section faq-cta-section">
      <div class="wrap">
        <div class="faq-cta-grid">
          <div class="faq-block" data-aos="fade-up">
            <h3 class="faq-title">❓ الأسئلة الشائعة</h3>
            <div class="faq-item" v-for="(faq, i) in faqs" :key="i" @click="openFaq = openFaq === i ? null : i">
              <div class="faq-q">
                <span>{{ faq.q }}</span>
                <span class="faq-toggle" :class="{ open: openFaq === i }">+</span>
              </div>
              <transition name="faq">
                <div v-if="openFaq === i" class="faq-a">{{ faq.a }}</div>
              </transition>
            </div>
          </div>

          <div class="cta-block" data-aos="fade-up" data-aos-delay="200">
            <div class="cta-glow"></div>
            <div class="cta-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>هل لديك فكرة مشروع؟</h3>
            <p>دعنا نناقش فكرتك ونحولها إلى واقع. فريقنا جاهز للإجابة على استفساراتك.</p>
            <div class="cta-actions">
              <RouterLink to="/devis" class="btn-hero-gold">ابدأ مشروعك الآن</RouterLink>
              <a href="tel:+21671000000" class="btn-hero-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                71 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CONTACT INFO ═══════════════ -->
    <section class="section contact-info-section">
      <div class="wrap">
        <div class="contact-info-simple">
          <h3 class="info-title">📞 تواصل معنا</h3>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">📧</span>
              <span>contact@infinity.tn</span>
            </div>
            <div class="info-item">
              <span class="info-icon">📱</span>
              <span>+216 71 000 000</span>
            </div>
            <div class="info-item">
              <span class="info-icon">📍</span>
              <span>تونس، تونس العاصمة</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SCROLL TO TOP ═══════════════ -->
    <button class="scroll-top" :class="{ visible: showScrollTop }" @click="scrollToTop">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import landingImg from '../assets/landing-page.jpg'
import vitrineImg from '../assets/site-vitrine.jpg'
import ecommerceImg from '../assets/webcommerce.png'
import reservationImg from '../assets/reservation.jpg'
import maintenanceImg from '../assets/maintenance.jpg'

const showScrollTop = ref(false)

/* ═══ Hero ═══ */
const heroBadges = [
  { label: 'كود نظيف', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { label: 'تصميم متجاوب', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="10" height="16" rx="1"/><rect x="16" y="7" width="6" height="11" rx="1"/></svg>` },
  { label: 'أداء وسرعة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'أمان عالي', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` }
]

const avatarColors = ['#f8b101', '#e09d00', '#c48a00', '#a87500']
const avatarInitials = ['أ', 'م', 'س', 'ن']
const mockupWidths = ['80%', '95%', '65%', '90%', '75%', '85%']

function particleStyle(i) {
  const size = Math.random() * 4 + 2
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 3 + 2}s`
  }
}

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

/* ═══ Portfolio ═══ */
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
  { label: 'تصميم متجاوب', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="10" height="16" rx="1"/><rect x="16" y="7" width="6" height="11" rx="1"/></svg>` },
  { label: 'سرعة وأداء عالي', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'أمان وحماية', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
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

/* ═══ Scroll to top ═══ */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

/* ═══════════════ ANIMATIONS ═══════════════ */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(248, 177, 1, 0.4); }
  70% { box-shadow: 0 0 0 15px rgba(248, 177, 1, 0); }
  100% { box-shadow: 0 0 0 0 rgba(248, 177, 1, 0); }
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes particle {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-100px) scale(0); opacity: 0; }
}

@keyframes dotPulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(2); opacity: 0; }
}

/* ═══════════════ BASE ═══════════════ */
.infinity-site {
  --gold: #f8b101;
  --gold-dark: #e09d00;
  --gold-light: #fef3c7;
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
.section { padding: 100px 0; position: relative; }
.section-head.center { text-align: center; margin-bottom: 60px; }
.sec-tag { 
  display: inline-block; 
  background: rgba(248, 177, 1, 0.12); 
  color: var(--gold); 
  padding: 8px 20px; 
  border-radius: 50px; 
  font-size: 13px; 
  font-weight: 700; 
  margin-bottom: 16px; 
  border: 1px solid rgba(248, 177, 1, 0.3);
  animation: slideUp 0.6s ease;
}
.sec-title { 
  font-size: clamp(32px, 3.5vw, 42px); 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 14px;
  animation: slideUp 0.6s ease 0.1s both;
}
.sec-desc { 
  font-size: 17px; 
  color: var(--gray-600); 
  max-width: 600px; 
  margin: 0 auto;
  animation: slideUp 0.6s ease 0.2s both;
}

/* ═══ HERO ═══ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
}
.hero-video { 
  position: absolute; 
  top: 0; left: 0; 
  width: 100%; height: 100%; 
  object-fit: cover; 
  z-index: 0; 
}
.hero-overlay { 
  position: absolute; 
  inset: 0; 
  z-index: 1; 
  background: rgba(255,255,255,0.85); 
}
.glow { 
  position: absolute; 
  border-radius: 50%; 
  filter: blur(120px); 
  pointer-events: none; 
  z-index: 2; 
}
.glow-1 { 
  width: 600px; height: 600px; 
  top: -150px; right: -100px; 
  background: rgba(248, 177, 1, 0.15);
  animation: float 8s ease-in-out infinite;
}
.glow-2 { 
  width: 400px; height: 400px; 
  bottom: -50px; left: -80px; 
  background: rgba(248, 177, 1, 0.1);
  animation: float 6s ease-in-out infinite reverse;
}

.particles {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}
.particle {
  position: absolute;
  background: var(--gold);
  border-radius: 50%;
  animation: particle 3s ease-in-out infinite;
}

.hero-container {
  position: relative; 
  z-index: 3;
  display: grid; 
  grid-template-columns: 1.2fr 0.8fr; 
  gap: 60px; 
  align-items: center;
  width: 100%; 
  max-width: 1240px; 
  margin: 0 auto; 
  padding: 0 24px;
}
.hero-content { 
  text-align: right;
  animation: slideUp 0.8s ease;
}
.hero-badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid var(--gold);
  color: var(--gold-dark);
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
  animation: pulse 2s infinite;
}
.hero-title { 
  font-size: clamp(42px, 5.5vw, 64px); 
  font-weight: 800; 
  line-height: 1.15; 
  margin-bottom: 16px; 
  color: var(--gray-800); 
}
.gold-gradient { 
  background: linear-gradient(135deg, #f8b101 0%, #e09d00 50%, #c48a00 100%);
  background-size: 200% auto;
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  background-clip: text;
  animation: shimmer 3s linear infinite;
}
.hero-sub { 
  font-size: 22px; 
  font-weight: 700; 
  color: var(--gold); 
  margin-bottom: 18px; 
}
.hero-desc { 
  font-size: 18px; 
  color: var(--gray-600); 
  line-height: 1.9; 
  margin-bottom: 32px; 
  max-width: 520px; 
}

.hero-badges { 
  display: flex; 
  flex-wrap: wrap; 
  gap: 20px; 
  margin-bottom: 34px; 
}
.hero-badge { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  font-size: 12.5px; 
  color: var(--gray-700); 
  text-align: center; 
  width: 90px;
  transition: transform 0.3s ease;
}
.hero-badge:hover {
  transform: translateY(-5px);
}
.hero-badge-icon { 
  width: 52px; 
  height: 52px; 
  border-radius: 14px; 
  border: 2px solid rgba(248,177,1,0.4); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  color: var(--gold); 
  background: rgba(248,177,1,0.06);
  transition: all 0.3s ease;
}
.hero-badge:hover .hero-badge-icon {
  background: rgba(248,177,1,0.15);
  border-color: var(--gold);
  transform: scale(1.1);
}

.hero-actions { 
  display: flex; 
  gap: 16px; 
  flex-wrap: wrap; 
  margin-bottom: 24px;
}
.btn-hero-gold, .btn-hero-outline { 
  display: inline-flex; 
  align-items: center; 
  gap: 8px;
  padding: 16px 36px; 
  border-radius: 14px; 
  font-weight: 700; 
  font-size: 16px; 
  text-decoration: none; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
  cursor: pointer; 
  border: 2px solid transparent; 
}
.btn-hero-gold { 
  background: linear-gradient(135deg, var(--gold), var(--gold-dark)); 
  color: #fff; 
  box-shadow: 0 8px 25px rgba(248, 177, 1, 0.4); 
  position: relative;
  overflow: hidden;
}
.btn-hero-gold::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}
.btn-hero-gold:hover::before {
  left: 100%;
}
.btn-hero-gold:hover { 
  transform: translateY(-4px); 
  box-shadow: 0 12px 35px rgba(248, 177, 1, 0.6); 
}
.btn-hero-outline { 
  background: transparent; 
  color: var(--gray-800); 
  border-color: var(--gray-300); 
}
.btn-hero-outline:hover { 
  background: var(--gray-50); 
  border-color: var(--gold); 
  color: var(--gold-dark); 
  transform: translateY(-4px); 
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 16px;
}
.trust-avatars {
  display: flex;
}
.trust-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 700;
  margin-left: -12px;
}
.trust-avatar:first-child {
  margin-left: 0;
}
.trust-text {
  font-size: 13px;
  color: var(--gray-600);
}

/* Hero Visual */
.hero-visual { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  position: relative;
}
.floating-mockup {
  position: relative;
  animation: float 4s ease-in-out infinite;
}
.mockup-screen {
  width: 300px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 25px 50px rgba(0,0,0,0.1);
  overflow: hidden;
  border: 2px solid var(--gray-200);
}
.mockup-header {
  background: var(--gray-100);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.mockup-dots {
  display: flex;
  gap: 6px;
}
.mockup-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
}
.mockup-dots span:nth-child(1) { background: #ff5f56; }
.mockup-dots span:nth-child(2) { background: #ffbd2e; }
.mockup-dots span:nth-child(3) { background: #27c93f; }
.mockup-url {
  font-size: 12px;
  color: var(--gray-600);
}
.mockup-content {
  padding: 24px;
}
.mockup-line {
  height: 8px;
  background: var(--gray-200);
  border-radius: 4px;
  margin-bottom: 16px;
}
.mockup-shadow {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 20px;
  background: rgba(0,0,0,0.1);
  border-radius: 50%;
  filter: blur(10px);
}

.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.float-el {
  position: absolute;
  color: var(--gold);
  opacity: 0.6;
}
.el-1 {
  top: -20px;
  right: -30px;
  animation: float 3s ease-in-out infinite;
}
.el-2 {
  bottom: -10px;
  left: -20px;
  animation: float-slow 4s ease-in-out infinite;
}
.el-3 {
  top: 50%;
  right: -40px;
  animation: float 5s ease-in-out infinite reverse;
}

.hero-wave { 
  position: absolute; 
  bottom: 0; 
  left: 0; 
  right: 0; 
  z-index: 3; 
  pointer-events: none; 
}

@media (max-width: 1024px) {
  .hero-container { 
    grid-template-columns: 1fr; 
    text-align: center;
  }
  .hero-content {
    text-align: center;
  }
  .hero-badges {
    justify-content: center;
  }
  .hero-actions {
    justify-content: center;
  }
  .hero-trust {
    justify-content: center;
  }
  .hero-visual { 
    display: none; 
  }
}

/* ═══ SERVICES ═══ */
.services-section { 
  background: var(--white);
}
.services-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 28px; 
}
.service-card { 
  background: var(--white); 
  border: 2px solid var(--gray-200); 
  border-radius: 20px; 
  padding: 36px 28px; 
  text-align: center; 
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
  position: relative;
  overflow: hidden;
  animation: slideUp 0.6s ease both;
}
.service-card:hover { 
  transform: translateY(-10px); 
  box-shadow: 0 20px 40px rgba(0,0,0,0.08); 
  border-color: var(--gold); 
}
.service-hover-line {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background: var(--gold);
  transition: all 0.4s ease;
  transform: translateX(-50%);
}
.service-card:hover .service-hover-line {
  width: 80%;
}
.service-icon { 
  width: 70px; 
  height: 70px; 
  border-radius: 16px; 
  background: var(--gold-light); 
  color: var(--gold-dark); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin: 0 auto 20px;
  transition: all 0.3s ease;
}
.service-card:hover .service-icon {
  transform: scale(1.1) rotate(-5deg);
  background: var(--gold);
  color: white;
}
.service-card h4 { 
  font-size: 19px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 10px; 
}
.service-card p { 
  font-size: 14px; 
  color: var(--gray-600); 
  line-height: 1.8; 
}

@media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }

/* ═══ PROCESS ═══ */
.process-section { 
  background: var(--gray-50);
}
.process-track { 
  position: relative; 
  display: grid; 
  grid-template-columns: repeat(6, 1fr); 
  gap: 24px; 
}
.process-line { 
  position: absolute; 
  top: 35px; 
  left: 8%; 
  right: 8%; 
  height: 2px; 
  background: linear-gradient(90deg, var(--gold), var(--gold-dark), var(--gold));
  z-index: 0; 
}
.process-step { 
  position: relative; 
  z-index: 1; 
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  align-items: center;
  animation: scaleIn 0.5s ease both;
}
.process-dot-wrapper {
  position: relative;
  margin-bottom: 16px;
}
.process-dot { 
  width: 64px; 
  height: 64px; 
  border-radius: 50%; 
  background: var(--white); 
  color: var(--gold); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border: 3px solid var(--gold);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}
.process-step:hover .process-dot {
  background: var(--gold);
  color: white;
  transform: scale(1.1);
}
.process-dot-pulse {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  animation: dotPulse 2s ease-out infinite;
}
.process-num { 
  font-weight: 800; 
  color: var(--gold); 
  font-size: 14px; 
  margin-bottom: 8px; 
}
.process-step h4 { 
  font-size: 16px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 8px; 
}
.process-step p { 
  font-size: 13px; 
  color: var(--gray-600); 
  line-height: 1.7; 
}

@media (max-width: 900px) { 
  .process-track { grid-template-columns: repeat(3, 1fr); } 
  .process-line { display: none; } 
}
@media (max-width: 560px) { 
  .process-track { grid-template-columns: repeat(2, 1fr); } 
}

/* ═══ PACKS ═══ */
.packs-section { 
  background: var(--white);
}
.packs-grid { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 32px; 
  margin-top: 50px; 
}
.pack-card {
  background: var(--white); 
  border: 2px solid var(--gray-200); 
  border-radius: 24px;
  text-align: center; 
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
  position: relative; 
  display: flex; 
  flex-direction: column;
  overflow: hidden;
}
.pack-card:hover { 
  transform: translateY(-12px); 
  box-shadow: 0 30px 60px rgba(0,0,0,0.1); 
  border-color: var(--gold); 
}
.pack-card.popular { 
  border-color: var(--gold); 
  background: #fffdf5;
  transform: scale(1.03); 
}
.pack-card.popular:hover {
  transform: scale(1.03) translateY(-12px);
}

.pack-image-wrapper {
  position: relative;
  overflow: hidden;
}
.pack-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.pack-card:hover .pack-image {
  transform: scale(1.1);
}
.pack-image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1));
}

.pack-badge { 
  font-size: 42px; 
  margin: 24px 0 12px;
}
.pack-name { 
  font-size: 24px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin: 0 24px 14px; 
}
.pack-price { 
  font-size: 32px; 
  font-weight: 800; 
  color: var(--gold); 
  margin: 0 24px 28px; 
  direction: ltr; 
}
.pack-features { 
  list-style: none; 
  padding: 0; 
  text-align: right; 
  margin: 0 24px 28px; 
  flex: 1; 
}
.pack-features li { 
  padding: 10px 0; 
  border-bottom: 1px solid var(--gray-200); 
  color: var(--gray-600); 
  font-size: 14.5px; 
  position: relative; 
  padding-right: 24px; 
}
.pack-features li::before { 
  content: "✓"; 
  color: var(--gold); 
  position: absolute; 
  right: 0; 
  font-weight: bold; 
}
.popular-tag {
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: #fff; 
  font-size: 13px; 
  font-weight: 700; 
  padding: 8px 20px;
  border-radius: 50px; 
  position: absolute;
  top: 16px; 
  left: 50%; 
  transform: translateX(-50%);
  box-shadow: 0 4px 15px rgba(248, 177, 1, 0.4);
  animation: pulse 2s infinite;
  white-space: nowrap;
}
.btn-hero-gold.full-width { 
  width: calc(100% - 48px); 
  margin: 0 24px 28px; 
  justify-content: center;
}

@media (max-width: 1100px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .packs-grid { grid-template-columns: 1fr; } }

/* ═══ PORTFOLIO ═══ */
.portfolio-section { 
  background: var(--gray-50); 
}
.portfolio-tabs { 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 12px; 
  margin-bottom: 44px; 
}
.tab-btn { 
  background: var(--white); 
  border: 2px solid var(--gray-200); 
  color: var(--gray-600); 
  padding: 10px 24px; 
  border-radius: 50px; 
  font-size: 14px; 
  font-weight: 600; 
  cursor: pointer; 
  font-family: inherit; 
  transition: all 0.3s ease; 
}
.tab-btn:hover { 
  border-color: var(--gold); 
  color: var(--gold); 
  transform: translateY(-2px);
}
.tab-btn.active { 
  background: var(--gold); 
  color: #fff; 
  border-color: var(--gold); 
  box-shadow: 0 4px 15px rgba(248, 177, 1, 0.3);
}

.portfolio-grid { 
  display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  gap: 24px; 
}
.portfolio-card {
  animation: scaleIn 0.5s ease both;
}
.portfolio-card h4 { 
  font-size: 15px; 
  font-weight: 700; 
  color: var(--gray-800); 
  margin-top: 14px; 
  margin-bottom: 4px; 
}
.portfolio-cat { 
  font-size: 12px; 
  color: var(--gold); 
  font-weight: 600;
}
.portfolio-thumb { 
  position: relative; 
  border-radius: 16px; 
  aspect-ratio: 4/3; 
  overflow: hidden; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border: 2px solid var(--gray-200); 
  cursor: pointer;
  transition: all 0.3s ease;
}
.portfolio-thumb:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border-color: var(--gold);
}
.portfolio-icon { 
  opacity: 0.7;
  transition: all 0.3s ease;
}
.portfolio-hover {
  position: absolute;
  inset: 0;
  background: rgba(248, 177, 1, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  opacity: 0;
  transition: all 0.3s ease;
  color: white;
  font-weight: 600;
  font-size: 14px;
}
.portfolio-thumb:hover .portfolio-hover {
  opacity: 1;
}
.portfolio-thumb:hover .portfolio-icon {
  opacity: 0;
}
.portfolio-more { 
  text-align: center; 
  margin-top: 48px; 
}

@media (max-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }

/* ═══ TECH + STATS ═══ */
.tech-stats-section { 
  background: var(--white); 
}
.tech-stats-grid { 
  display: grid; 
  grid-template-columns: 1.3fr 1fr; 
  gap: 32px; 
}
.tech-block, .stats-block { 
  background: var(--gray-50); 
  border: 2px solid var(--gray-200); 
  border-radius: 24px; 
  padding: 40px; 
  transition: all 0.3s ease;
}
.tech-block:hover, .stats-block:hover {
  border-color: var(--gold);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.tech-block h3, .stats-block h3 { 
  font-size: 20px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 28px; 
}
.tech-grid { 
  display: grid; 
  grid-template-columns: repeat(5, 1fr); 
  gap: 20px; 
}
.tech-item { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 10px; 
  font-size: 12px; 
  color: var(--gray-700); 
  font-weight: 600; 
  transition: transform 0.3s ease;
}
.tech-item:hover {
  transform: translateY(-5px);
}
.tech-icon-circle { 
  width: 56px; 
  height: 56px; 
  border-radius: 14px; 
  background: rgba(248,177,1,0.1); 
  color: var(--gold); 
  display: flex; 
  align-items: center; 
  justify-content: center;
  transition: all 0.3s ease;
}
.tech-item:hover .tech-icon-circle {
  background: var(--gold);
  color: white;
  transform: rotate(10deg);
}

.stats-inner-grid { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 18px; 
}
.stat-item { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
  background: var(--white); 
  border: 2px solid var(--gray-200); 
  border-radius: 16px; 
  padding: 20px;
  transition: all 0.3s ease;
}
.stat-item:hover {
  border-color: var(--gold);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
}
.stat-icon-circle { 
  width: 48px; 
  height: 48px; 
  border-radius: 12px; 
  background: rgba(248,177,1,0.1); 
  color: var(--gold); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-shrink: 0; 
}
.stat-item strong { 
  display: block; 
  font-size: 22px; 
  font-weight: 800; 
  color: var(--gold); 
}
.stat-item span { 
  font-size: 13px; 
  color: var(--gray-600); 
}

@media (max-width: 900px) { 
  .tech-stats-grid { grid-template-columns: 1fr; } 
  .tech-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 560px) { 
  .tech-grid { grid-template-columns: repeat(3, 1fr); } 
}

/* ═══ WHY US ═══ */
.why-section { 
  background: var(--gray-50); 
}
.why-card { 
  background: var(--white); 
  border: 2px solid var(--gray-200); 
  border-radius: 28px; 
  padding: 52px 40px; 
  text-align: center;
  transition: all 0.3s ease;
}
.why-card:hover {
  border-color: var(--gold);
  box-shadow: 0 20px 40px rgba(0,0,0,0.06);
}
.why-title { 
  font-size: clamp(24px, 2.8vw, 32px); 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 40px; 
}
.why-grid { 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 40px; 
}
.why-item { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 14px; 
  max-width: 140px; 
  font-size: 14px; 
  color: var(--gray-700); 
  font-weight: 600;
  animation: scaleIn 0.5s ease both;
  transition: transform 0.3s ease;
}
.why-item:hover {
  transform: translateY(-8px);
}
.why-icon { 
  width: 64px; 
  height: 64px; 
  border-radius: 16px; 
  background: rgba(248,177,1,0.1); 
  color: var(--gold); 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border: 2px solid rgba(248,177,1,0.3);
  transition: all 0.3s ease;
}
.why-item:hover .why-icon {
  background: var(--gold);
  color: white;
  border-color: var(--gold);
  transform: scale(1.1) rotate(-5deg);
}

/* ═══ FAQ + CTA ═══ */
.faq-cta-section { 
  background: var(--white); 
}
.faq-cta-grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 32px; 
  align-items: stretch; 
}
.faq-block { 
  background: var(--gray-50); 
  border: 2px solid var(--gray-200); 
  border-radius: 24px; 
  padding: 40px; 
}
.faq-title { 
  font-size: 24px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 28px; 
}
.faq-item { 
  border-bottom: 2px solid var(--gray-200); 
  padding: 18px 0; 
  cursor: pointer; 
  transition: all 0.3s ease;
}
.faq-item:last-child { 
  border-bottom: none; 
}
.faq-item:hover {
  padding-right: 10px;
}
.faq-q { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  font-size: 15px; 
  font-weight: 700; 
  color: var(--gray-800); 
}
.faq-toggle { 
  color: var(--gold); 
  font-size: 24px; 
  font-weight: 800;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-right: 16px;
}
.faq-toggle.open {
  transform: rotate(45deg);
}
.faq-a { 
  margin-top: 14px; 
  font-size: 14px; 
  color: var(--gray-600); 
  line-height: 1.9; 
}

.faq-enter-active, .faq-leave-active {
  transition: all 0.3s ease;
}
.faq-enter-from, .faq-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.cta-block { 
  position: relative; 
  overflow: hidden; 
  background: linear-gradient(135deg, #fff8e7, #ffffff); 
  border: 2px solid rgba(248,177,1,0.3); 
  border-radius: 24px; 
  padding: 44px; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: center; 
}
.cta-glow { 
  position: absolute; 
  width: 300px; 
  height: 300px; 
  background: rgba(248,177,1,0.15); 
  filter: blur(100px); 
  border-radius: 50%; 
  top: -80px; 
  left: -80px;
  animation: float 6s ease-in-out infinite;
}
.cta-icon { 
  color: var(--gold); 
  margin-bottom: 20px; 
  position: relative; 
  z-index: 1; 
}
.cta-block h3 { 
  font-size: 28px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 14px; 
  position: relative; 
  z-index: 1; 
}
.cta-block p { 
  font-size: 15px; 
  color: var(--gray-600); 
  line-height: 1.9; 
  margin-bottom: 28px; 
  position: relative; 
  z-index: 1; 
  max-width: 440px; 
}
.cta-actions { 
  display: flex; 
  gap: 16px; 
  flex-wrap: wrap; 
  position: relative; 
  z-index: 1; 
}

@media (max-width: 900px) { 
  .faq-cta-grid { grid-template-columns: 1fr; } 
}

/* ═══ CONTACT INFO ═══ */
.contact-info-section { 
  background: var(--gray-50); 
}
.contact-info-simple { 
  max-width: 600px; 
  margin: 0 auto; 
  text-align: center; 
}
.info-title { 
  font-size: 28px; 
  font-weight: 800; 
  color: var(--gray-800); 
  margin-bottom: 36px; 
}
.info-items { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 24px; 
}
.info-item { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
  font-size: 17px; 
  color: var(--gray-700);
  transition: transform 0.3s ease;
  cursor: default;
}
.info-item:hover {
  transform: translateY(-3px);
  color: var(--gold-dark);
}
.info-icon { 
  font-size: 24px; 
}

/* ═══ SCROLL TO TOP ═══ */
.scroll-top {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: var(--gold);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(248, 177, 1, 0.3);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 100;
}
.scroll-top.visible {
  opacity: 1;
  pointer-events: auto;
}
.scroll-top:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(248, 177, 1, 0.5);
}
</style>