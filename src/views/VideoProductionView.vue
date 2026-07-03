<!-- src/views/VideoProductionView.vue -->
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
            إنتاج <span class="gold-gradient">الفيديو</span>
          </h1>
          <p class="hero-sub">نحوّل رسالتك إلى تجربة بصرية لا تُنسى</p>
          <p class="hero-desc">
            نقدم حلول إنتاج فيديو احترافية تُبرز هوية علامتك التجارية
            وتوصل رسالتك بوضوح وإبداع.
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
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M23 7l-3-3h-6l-3 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="13" r="4"/>
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

    <!-- ═══════════════ OFFRES / PACKS (avec images) ═══════════════ -->
    <section class="section packs-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">عروض الإنتاج</span>
          <h2 class="sec-title">باقات إنتاج الفيديو والمونتاج</h2>
          <p class="sec-desc">نحوّل أفكارك إلى محتوى بصري احترافي</p>
        </div>

        <div class="packs-grid">

          <!-- 1. مونتاج الفيديو -->
          <div class="pack-card">
            <div class="pack-image">
              <img src="../assets/video-editing.png" alt="مونتاج الفيديو" />
            </div>
            <h3 class="pack-name">مونتاج الفيديو</h3>
            <p class="pack-price">ابتداءً من 120 DT</p>
            <ul class="pack-features">
              <li>مونتاج فقط</li>
              <li>تصحيح الألوان</li>
              <li>تعديل الصوت</li>
              <li>جودة 2K أو 4K</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'مونتاج الفيديو' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 2. تصوير الفيديو -->
          <div class="pack-card">
            <div class="pack-image">
              <img src="../assets/video-shooting.png" alt="تصوير الفيديو" />
            </div>
            <h3 class="pack-name">تصوير الفيديو</h3>
            <p class="pack-price">ابتداءً من 300 DT</p>
            <ul class="pack-features">
              <li>مدة التصوير: 3 ساعات</li>
              <li>تصوير احترافي</li>
              <li>مقابلات</li>
              <li>مونتاج احترافي</li>
              <li>جودة 2K أو 4K</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'تصوير الفيديو' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 3. تصوير + مونتاج -->
          <div class="pack-card">
            <div class="pack-image">
              <img src="../assets/video-shooting-editing.png" alt="تصوير + مونتاج" />
            </div>
            <h3 class="pack-name">تصوير + مونتاج</h3>
            <p class="pack-price">ابتداءً من 390 DT</p>
            <ul class="pack-features">
              <li>مدة التصوير: 3 ساعات</li>
              <li>تصوير احترافي</li>
              <li>مونتاج متقدم</li>
              <li>جودة 2K أو 4K</li>
              <li>نسخة للسوشيال ميديا</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'تصوير + مونتاج' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 4. فيديو تعريفي (الأكثر طلباً) -->
          <div class="pack-card popular">
            <div class="pack-image">
              <img src="../assets/video-intro.png" alt="فيديو تعريفي" />
            </div>
            <h3 class="pack-name">فيديو تعريفي</h3>
            <p class="pack-price">ابتداءً من 150 DT</p>
            <ul class="pack-features">
              <li>فيديو حتى 90 ثانية</li>
              <li>كتابة السيناريو</li>
              <li>الرسوم المتحركة (Motion Graphics)</li>
              <li>تسجيل الصوت</li>
              <li>Transitions احترافية</li>
            </ul>
            <div class="popular-tag">الأكثر طلباً</div>
            <RouterLink :to="{ name: 'contact', query: { pack: 'فيديو تعريفي' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 5. تغطية الفعاليات -->
          <div class="pack-card">
            <div class="pack-image">
              <img src="../assets/video-event.png" alt="تغطية الفعاليات" />
            </div>
            <h3 class="pack-name">تغطية الفعاليات</h3>
            <p class="pack-price">ابتداءً من 900 DT</p>
            <ul class="pack-features">
              <li>تصوير احترافي</li>
              <li>توثيق التفاصيل</li>
              <li>جودة 2K و 4K</li>
              <li>تسليم محتوى جاهز</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'تغطية الفعاليات' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
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

    <!-- ═══════════════ نماذج من أعمالنا ═══════════════ -->
    <section class="section portfolio-section">
      <div class="wrap">
        <div class="section-head center">
          <h2 class="sec-title">نماذج من أعمالنا</h2>
        </div>

        <div class="portfolio-tabs">
          <button
            v-for="tab in portfolioTabs"
            :key="tab"
            :class="['tab-btn', { active: activeTab === tab }]"
            @click="activeTab = tab"
          >{{ tab }}</button>
        </div>

        <div class="portfolio-grid">
          <div class="portfolio-card" v-for="item in filteredPortfolio" :key="item.title">
            <div class="portfolio-thumb" :style="{ background: item.color }">
              <span class="portfolio-duration">{{ item.duration }}</span>
              <span class="portfolio-play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </div>
            <h4>{{ item.title }}</h4>
            <span class="portfolio-cat">{{ item.category }}</span>
          </div>
        </div>

        <div class="portfolio-more">
          <RouterLink to="/portfolio" class="btn-hero-gold">عرض جميع الأعمال</RouterLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════ لماذا تختار Infinity ═══════════════ -->
    <section class="section why-section">
      <div class="wrap">
        <div class="why-card">
          <h2 class="why-title">لماذا تختار <span class="gold-gradient">Infinity</span> لإنتاج الفيديو؟</h2>
          <div class="why-grid">
            <div class="why-item" v-for="f in whyUs" :key="f.label">
              <div class="why-icon" v-html="f.icon"></div>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="stats-row">
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

    <!-- ═══════════════ FAQ + CTA ═══════════════ -->
    <section class="section faq-cta-section">
      <div class="wrap faq-cta-grid">

        <div class="faq-block">
          <h3 class="faq-title">الأسئلة الشائعة</h3>
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
              <p class="faq-a" v-if="openFaq === i">{{ f.a }}</p>
            </div>
          </div>
        </div>

        <div class="cta-block">
          <div class="cta-glow"></div>
          <div class="cta-icon">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
              <path d="M23 7l-3-3h-6l-3 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
          <h3>أفكارك تستحق أن تُرى!</h3>
          <p>دعنا نساعدك على تحويل أفكارك إلى فيديو احترافي يحقق أهدافك ويميز علامتك التجارية.</p>
          <div class="cta-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>

      </div>
    </section>

    <!-- ═══════════════ COORDONNÉES ═══════════════ -->
    <section class="section contact-info-section">
      <div class="wrap">
        <div class="contact-info-simple">
          <h3 class="info-title">تفاصيل الاتصال</h3>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">📍</span>
              <span>طريق قابس، كم 1.5، مدنين، أمام صيدلية كشو</span>
            </div>
            <div class="info-item">
              <span class="info-icon">📞</span>
              <span dir="ltr">+216 92 105 505</span>
            </div>
            <div class="info-item">
              <span class="info-icon">✉️</span>
              <span>contact@infinity-agency.com</span>
            </div>
            <div class="info-item">
              <span class="info-icon">🌐</span>
              <span>www.infinity-agency.tn</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import heroVideo from '../assets/hero-video.mp4'

/* ═══ Hero badges ═══ */
const heroBadges = [
  { label: 'تسليم في الوقت', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { label: 'إيداع بلا حدود', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { label: 'فريق احترافي', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { label: 'جودة سينمائية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 16l4-4 4 4 4-6"/></svg>` }
]

/* ═══ ماذا نقدم لك ═══ */
const services = [
  { label: 'إعلانات تجارية', desc: 'إعلانات فيديو ترفع من مبيعاتك ولعزز حضورك.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8l18-5v18L2 16V8z"/><path d="M22 3v18"/></svg>` },
  { label: 'فيديوهات تعريفية', desc: 'نعرّف بعلامتك التجارية وخدماتك بطريقة جذابة.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` },
  { label: 'فيديوهات ترويجية', desc: 'لبيّز منتجاتك أو خدماتك بطريقة جذابة وفعّالة.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 7l-3-3h-6l-3 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { label: 'فيديوهات سوشيال ميديا', desc: 'محتوى قصير ومؤثر لمنصات التواصل الاجتماعي.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>` },
  { label: 'تصوير الفعاليات', desc: 'نوثّق فعالياتك ومؤتمراتك بجودة عالية.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { label: 'موشن جرافيك', desc: 'موشن ومؤثرات احترافية مع رسائل بصرية مؤثرة.', icon: `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` }
]

/* ═══ كيف نعمل ═══ */
const processSteps = [
  { num: '01', title: 'فهم الفكرة', desc: 'نسمع لاحتياجاتك ونحلل أهداف الفيديو والجمهور', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
  { num: '02', title: 'كتابة السيناريو', desc: 'نصنع سيناريو إبداعي يعبر عن رسالتك بوضوح', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
  { num: '03', title: 'التصوير', desc: 'نستخدم أحدث المعدات وفريق عمل محترف', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 7l-3-3h-6l-3 3H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { num: '04', title: 'المونتاج', desc: 'مونتاج احترافي مع مؤثرات بصرية مميزة', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '05', title: 'المراجعة', desc: 'نشاركك العمل لإضافة تعديلاتك وملاحظاتك', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>` },
  { num: '06', title: 'التسليم', desc: 'نسلّم الفيديو بصيغة عالية الجودة جاهز للنشر', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg>` }
]

/* ═══ نماذج من أعمالنا ═══ */
const portfolioTabs = ['الكل', 'اعلانات تجارية', 'فيديوهات تعريفية', 'سوشيال ميديا', 'فعاليات', 'موشن جرافيك']
const activeTab = ref('الكل')

const portfolio = [
  { title: 'إعلان مطعم فونيز', category: 'إعلان تجاري', duration: '01:20', color: 'linear-gradient(135deg,#8a3a1e,#c96a2f)' },
  { title: 'فيديو تعريفي لشركة عقارية', category: 'فيديو تعريفي', duration: '02:15', color: 'linear-gradient(135deg,#1a2430,#2d3e50)' },
  { title: 'إعلان منتج ذكي', category: 'إعلان تجاري', duration: '00:45', color: 'linear-gradient(135deg,#1f2937,#374151)' },
  { title: 'تغطية مؤتمر تقني', category: 'فعاليات', duration: '03:10', color: 'linear-gradient(135deg,#0f2745,#1e4a7a)' },
  { title: 'موشن جرافيك تعريفي', category: 'موشن جرافيك', duration: '03:10', color: 'linear-gradient(135deg,#1a1f2b,#2a2140)' }
]

const filteredPortfolio = computed(() =>
  activeTab.value === 'الكل'
    ? portfolio
    : portfolio.filter(p => p.category === activeTab.value)
)

/* ═══ لماذا تختار Infinity ═══ */
const whyUs = [
  { label: 'دعم ومتابعة حتى بعد التسليم', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>` },
  { label: 'موشن جرافيك جاهز للنشر', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>` },
  { label: 'جودة سينمائية 4K وما فوق', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 16l4-4 4 4 4-6"/></svg>` },
  { label: 'أسعار تنافسية وقيمة مضافة', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2"/></svg>` },
  { label: 'لمحات جدولة والحرفية', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
  { label: 'فريق مبدع ومتخصص', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` }
]

const stats = [
  { value: '+250', label: 'فيديو تم إنتاجه', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>` },
  { value: '+120', label: 'عميل سعيد', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>` },
  { value: '+8', label: 'سنوات خبرة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>` },
  { value: '+50', label: 'مجال عمل متنوع', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>` }
]

/* ═══ FAQ ═══ */
const faqs = [
  { q: 'ما هي المدة اللازمة لإنتاج الفيديو؟', a: 'تختلف المدة حسب نوع الفيديو، وعادة ما تتراوح بين 5 إلى 14 يوم عمل من التصوير إلى التسليم النهائي.' },
  { q: 'هل بإمكانكم توفير أفكار للفيديو؟', a: 'نعم، فريقنا الإبداعي يساعدك في كتابة السيناريو وتطوير الفكرة بما يتناسب مع أهداف علامتك التجارية.' },
  { q: 'هل تشمل الخدمة التصوير والمونتاج؟', a: 'يمكنك اختيار باقة التصوير فقط، المونتاج فقط، أو الباقة الشاملة التي تجمع بين الاثنين.' },
  { q: 'ما هي صيغ تسليم الفيديو؟', a: 'نسلّم الفيديو بجودة 2K أو 4K وبصيغ متوافقة مع جميع المنصات، بما في ذلك نسخة مخصصة للسوشيال ميديا.' }
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
.camera-icon { color: rgba(248, 177, 1, 0.6); animation: float 4s ease-in-out infinite; }
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

/* ═══ PACKS (avec images) ═══ */
.packs-section { background: var(--white); }
.packs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
@media (max-width: 1024px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .packs-grid { grid-template-columns: 1fr; } }

.pack-card {
  background: var(--white); border: 1px solid var(--gray-200); border-radius: 20px; padding: 40px 30px;
  text-align: center; transition: all 0.3s ease; position: relative; display: flex; flex-direction: column;
}
.pack-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--gold); }
.pack-card.popular { border-color: var(--gold); background: #fffbf0; transform: scale(1.02); }

/* Nouveau style pour les images des packs */
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

.pack-name { font-size: 22px; font-weight: 800; color: var(--gray-800); margin-bottom: 10px; }
.pack-price { font-size: 28px; font-weight: 800; color: var(--gold); margin-bottom: 30px; direction: ltr; }
.pack-features { list-style: none; padding: 0; text-align: right; margin-bottom: 30px; flex: 1; }
.pack-features li { padding: 8px 0; border-bottom: 1px solid var(--gray-200); color: var(--gray-600); font-size: 14px; position: relative; padding-right: 20px; }
.pack-features li::before { content: "✓"; color: var(--gold); position: absolute; right: 0; font-weight: bold; }
.popular-tag {
  background: var(--gold); color: #fff; font-size: 12px; font-weight: 700; padding: 6px 16px;
  border-radius: 50px; margin-bottom: 20px; display: inline-block; position: absolute;
  top: -14px; left: 50%; transform: translateX(-50%);
}
.btn-hero-gold.full-width { width: 100%; margin-top: auto; }

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
.portfolio-thumb { position: relative; border-radius: 14px; aspect-ratio: 3/4; overflow: hidden; }
.portfolio-duration { position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.6); color: #fff; font-size: 11px; padding: 3px 8px; border-radius: 6px; }
.portfolio-play { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 44px; height: 44px; border-radius: 50%; background: var(--gold); color: #fff; display: flex; align-items: center; justify-content: center; }
.portfolio-more { text-align: center; margin-top: 40px; }

/* ═══ WHY US ═══ */
.why-section { background: var(--white); }
.why-card { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 24px; padding: 46px 36px; text-align: center; margin-bottom: 40px; }
.why-title { font-size: clamp(22px, 2.6vw, 30px); font-weight: 800; color: var(--gray-800); margin-bottom: 34px; }
.why-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px; }
.why-item { display: flex; flex-direction: column; align-items: center; gap: 12px; max-width: 130px; font-size: 13.5px; color: var(--gray-700); font-weight: 600; }
.why-icon { width: 56px; height: 56px; border-radius: 14px; background: rgba(248,177,1,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(248,177,1,0.3); }

.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
@media (max-width: 700px) { .stats-row { grid-template-columns: repeat(2, 1fr); } }
.stat-item { display: flex; align-items: center; gap: 14px; background: var(--white); border: 1px solid var(--gray-200); border-radius: 16px; padding: 20px; }
.stat-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(248,177,1,0.1); color: var(--gold); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.stat-item strong { display: block; font-size: 22px; font-weight: 800; color: var(--gold); }
.stat-item span { font-size: 13px; color: var(--gray-600); }

/* ═══ FAQ + CTA ═══ */
.faq-cta-section { background: var(--gray-50); }
.faq-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: stretch; }
@media (max-width: 900px) { .faq-cta-grid { grid-template-columns: 1fr; } }

.faq-block { background: var(--white); border: 1px solid var(--gray-200); border-radius: 20px; padding: 34px; }
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
.contact-info-section { background: var(--white); }
.contact-info-simple { max-width: 600px; margin: 0 auto; text-align: center; }
.info-title { font-size: 24px; font-weight: 700; color: var(--gray-800); margin-bottom: 30px; }
.info-items { display: flex; flex-direction: column; align-items: center; gap: 20px; }
.info-item { display: flex; align-items: center; gap: 12px; font-size: 16px; color: var(--gray-700); }
.info-icon { font-size: 22px; }
</style>