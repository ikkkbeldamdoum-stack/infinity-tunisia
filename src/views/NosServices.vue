<template>
  <main class="services-page">
    <!-- ═══════════ INTRO ═══════════ -->
    <section class="intro">
      <div class="wrap">
        <span class="eyebrow">خدماتنا</span>
        <h1>سبع خدمات تحت سقف واحد،<br />أسعار واضحة منذ البداية.</h1>
        <p class="lead">
          من الإعلانات الممولة إلى اللافتات الضوئية، مروراً بموقعك الإلكتروني وشبكاتك الاجتماعية
          – كل قطب مفصّل مع باقاته وأسعاره، لتعرف بالضبط ما ستحصل عليه.
        </p>
        <div class="quick-nav">
          <a v-for="p in pillars" :key="p.id" :href="`#${p.id}`">{{ p.shortLabel }} ←</a>
        </div>
      </div>
    </section>

    <!-- ═══════════ 1. SPONSORING / ADS ═══════════ -->
    <section id="ads" class="block block--dark">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 01 — شريك ميتا للأعمال</span>
          <h2>الإعلانات الممولة</h2>
          <p>نستهدف جمهورك وندير حملاتك على فيسبوك وإنستغرام من اليوم الأول حتى الأخير.</p>
        </div>

        <div class="plan-grid">
          <article v-for="plan in adsPlans" :key="plan.title" class="plan-card" :class="{ featured: plan.featured }">
            <span v-if="plan.featured" class="featured-tag">الأكثر طلباً</span>
            <span class="plan-duration">{{ plan.duration }}</span>
            <strong class="plan-price">{{ plan.price }} <small>د.ت</small></strong>
            <span class="plan-sub">للحملة</span>
            <ul>
              <li v-for="f in plan.features" :key="f">{{ f }}</li>
            </ul>
          </article>
        </div>

        <p class="formula-note">
          لحملة مخصصة حسب الطلب: <strong>3.5 د.ت × عدد الأيام × عدد الولايات المستهدفة</strong>.
        </p>
      </div>
    </section>

    <!-- ═══════════ 2. SOCIAL MEDIA ═══════════ -->
    <section id="social" class="block block--gold">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 02</span>
          <h2>إدارة الشبكات الاجتماعية</h2>
          <p>ننشئ المحتوى، نبني هويتك وننشر وفق روزنامة مضبوطة.</p>
        </div>

        <div class="plan-grid">
          <article v-for="plan in socialPlans" :key="plan.title" class="plan-card" :class="{ featured: plan.featured }">
            <span v-if="plan.featured" class="featured-tag">الأكثر طلباً</span>
            <span class="plan-duration">{{ plan.title }}</span>
            <strong class="plan-price">{{ plan.price }} <small>د.ت</small></strong>
            <span class="plan-sub">شهرياً</span>
            <ul>
              <li v-for="f in plan.features" :key="f">{{ f }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 3. WEB ═══════════ -->
    <section id="web" class="block block--light">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 03</span>
          <h2>مواقع إلكترونية ومتاجر</h2>
          <p>مواقع مصممة لتعكس هويتك، سريعة وآمنة.</p>
        </div>

        <div class="web-grid">
          <article v-for="item in webOffers" :key="item.title" class="web-card" :class="{ featured: item.featured }">
            <span v-if="item.featured" class="featured-tag">الأكثر طلباً</span>
            <span class="web-icon" aria-hidden="true">{{ item.icon }}</span>
            <h3>{{ item.title }}</h3>
            <strong class="web-price">{{ item.price }}</strong>
            <ul>
              <li v-for="f in item.features" :key="f">{{ f }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 4. VIDEO ═══════════ -->
    <section id="video" class="block block--dark">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 04</span>
          <h2>الفيديو والمونتاج</h2>
          <p>نحوّل أفكاركم إلى محتوى بصري احترافي، من التصوير إلى المونتاج النهائي.</p>
        </div>

        <div class="strip-grid">
          <article v-for="item in videoOffers" :key="item.title" class="strip-card" :class="{ featured: item.featured }">
            <span v-if="item.featured" class="featured-tag">الأكثر طلباً</span>
            <h4>{{ item.title }}</h4>
            <strong>ابتداءً من {{ item.price }} د.ت</strong>
            <ul>
              <li v-for="f in item.features" :key="f">{{ f }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 5. PHOTO ═══════════ -->
    <section id="photo" class="block block--light">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 05</span>
          <h2>التصوير الفوتوغرافي</h2>
          <p>صور تحكي قصتكم بجودة احترافية.</p>
        </div>

        <div class="strip-grid">
          <article v-for="item in photoOffers" :key="item.title" class="strip-card">
            <h4>{{ item.title }}</h4>
            <strong>ابتداءً من {{ item.price }} د.ت</strong>
            <ul>
              <li v-for="f in item.features" :key="f">{{ f }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ 6. DESIGN ═══════════ -->
    <section id="design" class="block block--gold">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 06</span>
          <h2>التصميم الجرافيكي</h2>
          <p>إبداع بصري يعكس هويتكم، من منشور السوشيال ميديا حتى الهوية الكاملة.</p>
        </div>

        <div class="design-grid">
          <article v-for="item in designOffers" :key="item.title" class="design-card" :class="{ featured: item.featured }">
            <span v-if="item.featured" class="featured-tag">الأكثر طلباً</span>
            <h4>{{ item.title }}</h4>
            <strong>{{ item.price }} <small>د.ت</small></strong>
            <span class="design-unit">{{ item.unit }}</span>
          </article>
        </div>

        <article class="identity-card">
          <h3>هوية بصرية متكاملة</h3>
          <strong>300 د.ت <small>/ للمشروع</small></strong>
          <ul>
            <li v-for="f in identityFeatures" :key="f">{{ f }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- ═══════════ 7. PRINT ═══════════ -->
    <section id="print" class="block block--dark">
      <div class="wrap">
        <div class="block-head">
          <span class="block-tag">القطب 07</span>
          <h2>الطباعة والإعلان</h2>
          <p>نُخرج أفكاركم إلى الواقع، من بطاقة الجيب إلى اللافتة الضوئية.</p>
        </div>

        <div class="print-grid">
          <article v-for="item in printOffers" :key="item.title" class="print-card">
            <h4>{{ item.title }}<br /><span class="print-en">{{ item.en }}</span></h4>
            <ul>
              <li v-for="f in item.features" :key="f">{{ f }}</li>
            </ul>
            <span class="print-price">السعر حسب الطلب</span>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ CTA DEVIS ═══════════ -->
    <section class="cta-band">
      <div class="wrap cta-band-inner">
        <div>
          <span class="eyebrow">مستعد للبدء؟</span>
          <h2>أخبرنا أي قطب يثير اهتمامك،<br />ونتولى الباقي.</h2>
        </div>
        <RouterLink to="/devis" class="btn btn-gold">اطلب عرض سعر ←</RouterLink>
      </div>
    </section>

    <!-- ═══════════ FAQ ═══════════ -->
    <section class="faq">
      <div class="wrap faq-grid">
        <div class="section-head">
          <span class="eyebrow">أسئلة شائعة</span>
          <h2>قبل أن تكتب لنا.</h2>
        </div>
        <div class="faq-list">
          <details v-for="q in faq" :key="q.question">
            <summary>{{ q.question }}</summary>
            <p>{{ q.answer }}</p>
          </details>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const pillars = [
  { id: 'ads', shortLabel: 'الإعلانات' },
  { id: 'social', shortLabel: 'التواصل الاجتماعي' },
  { id: 'web', shortLabel: 'المواقع' },
  { id: 'video', shortLabel: 'الفيديو' },
  { id: 'photo', shortLabel: 'التصوير' },
  { id: 'design', shortLabel: 'التصميم' },
  { id: 'print', shortLabel: 'الطباعة' },
]

const adsPlans = [
  {
    title: 'الأساسية', duration: '7 أيام', price: '130', featured: false,
    features: ['تغطية حتى 5 ولايات', 'استراتيجية إعلانية', 'رد آلي', 'متابعة وتحسين', 'تقرير مفصل', 'توصيات تقنية'],
  },
  {
    title: 'الأعمال', duration: '14 يوم', price: '250', featured: true,
    features: ['تغطية حتى 12 ولاية', 'استراتيجية إعلانية', 'رد آلي', 'متابعة وتحسين', 'تقرير مفصل', 'توصيات تقنية'],
  },
  {
    title: 'المميزة', duration: '30 يوم', price: '590', featured: false,
    features: ['تغطية حتى 10 ولايات', 'استراتيجية إعلانية', 'رد آلي', 'متابعة وتحسين', 'تقرير مفصل', 'توصيات تقنية'],
  },
]

const socialPlans = [
  {
    title: 'الأساسية', price: '390', featured: false,
    features: ['إدارة فيسبوك، إنستغرام، تيك توك', '8 تصاميم', '2 فيديو', 'كتابة محتوى', 'إعلانات 5 أيام', 'روزنامة نشر', 'تقرير شهري'],
  },
  {
    title: 'الأعمال', price: '990', featured: true,
    features: ['إدارة فيسبوك، إنستغرام، تيك توك', '35 تصميم', '8 فيديوهات', 'زيارتان ميدانيتان (تصوير)', 'كتابة محتوى', 'إعلانات 20 يوم', 'روزنامة نشر', 'تقرير شهري'],
  },
  {
    title: 'المميزة', price: '750', featured: false,
    features: ['إدارة فيسبوك، إنستغرام، تيك توك', '20 تصميم', '4 فيديوهات', 'زيارة ميدانية واحدة (تصوير)', 'كتابة محتوى', 'إعلانات 10 أيام', 'روزنامة نشر', 'تقرير شهري'],
  },
]

const webOffers = [
  { icon: '▭', title: 'صفحة هبوط', price: 'ابتداءً من 750 د.ت', featured: false, features: ['صفحة واحدة', 'تصميم عصري ومتجاوب', 'نموذج اتصال', 'تحسين السرعة', 'ربط النطاق'] },
  { icon: '▤', title: 'موقع تعريفي', price: 'ابتداءً من 1500 د.ت', featured: false, features: ['من 5 إلى 10 صفحات', 'تصميم احترافي متجاوب', 'نموذج اتصال', 'خرائط غوغل', 'تحسين أساسي لمحركات البحث', 'حماية'] },
  { icon: '▣', title: 'متجر إلكتروني', price: 'ابتداءً من 1900 د.ت', featured: true, features: ['متجر كامل', 'تصميم متجاوب', 'إدارة المنتجات', 'بوابات دفع متعددة', 'إدارة الطلبات والتوصيل', 'كوبونات وخصومات', 'تحسين SEO + حماية متقدمة'] },
  { icon: '◷', title: 'حجز عبر الإنترنت', price: 'حسب المشروع', featured: false, features: ['نظام حجز احترافي', 'حجز طاولة', 'بريد إلكتروني رسمي', 'اشتراكات الموقع', 'تقارير وبيانات'] },
  { icon: '⚙', title: 'صيانة ودعم', price: '200 د.ت / شهرياً', featured: false, features: ['تحديثات دورية', 'نسخ احتياطي', 'حماية', 'دعم فني', 'تحسين الأداء'] },
]

const videoOffers = [
  { title: 'مونتاج فيديو', price: '120', featured: false, features: ['مونتاج فقط', 'تصحيح ألوان', 'تحرير الصوت', 'جودة 2K أو 4K'] },
  { title: 'تصوير فيديو', price: '300', featured: false, features: ['مدة التصوير: 3 ساعات', 'تصوير احترافي', 'مقابلات', 'مونتاج احترافي', 'جودة 2K أو 4K'] },
  { title: 'تصوير + مونتاج', price: '390', featured: false, features: ['مدة التصوير: 3 ساعات', 'تصوير احترافي', 'مونتاج متقدم', 'جودة 2K أو 4K', 'نسخة خاصة بالسوشيال ميديا'] },
  { title: 'فيديو تقديمي', price: '150', featured: true, features: ['فيديو حتى 90 ثانية', 'كتابة السيناريو', 'رسوم متحركة', 'تسجيل صوتي', 'انتقالات احترافية'] },
  { title: 'تغطية فعاليات', price: '900', featured: false, features: ['تصوير احترافي', 'توثيق كامل', 'جودة 2K و 4K', 'محتوى جاهز للاستخدام'] },
]

const photoOffers = [
  { title: 'جلسة ساعتين', price: '190', features: ['تصوير احترافي', 'معالجة وتعديل', 'تسليم كل الصور', 'من 25 إلى 40 صورة'] },
  { title: 'جلسة 4 ساعات', price: '300', features: ['تصوير احترافي', 'معالجة وتعديل', 'تسليم كل الصور', 'من 60 إلى 100 صورة'] },
  { title: 'منتجات', price: '120', features: ['صور عالية الجودة', 'خلفيات متنوعة', 'إضاءة احترافية', 'معالجة وتعديل'] },
  { title: 'مطاعم', price: '200', features: ['صور أطباق ومشروبات', 'أجواء داخلية', 'إضاءة احترافية', 'معالجة وتعديل'] },
  { title: 'تغطية فعاليات', price: '800', features: ['تصوير احترافي للفعالية', 'تغطية شاملة', 'معالجة وتعديل', 'تسليم عالي الجودة'] },
]

const designOffers = [
  { title: 'تصميم منشور (سوشيال ميديا)', price: '40', unit: 'للتصميم', featured: false },
  { title: 'باقة 10 منشورات', price: '300', unit: '10 تصاميم', featured: true },
  { title: 'منشور A3 / A4 / A5 / A6', price: '100', unit: 'للتصميم', featured: false },
  { title: 'كتالوج PDF', price: 'ابتداءً من 180', unit: 'للمشروع', featured: false },
  { title: 'قائمة مطعم', price: '150', unit: 'للتصميم', featured: false },
  { title: 'تصميم شعار', price: '120', unit: 'للتصميم', featured: false },
]

const identityFeatures = ['تصميم الشعار', 'نظام الألوان', 'الخطوط', 'أساسيات مطبوعة', 'دليل استخدام الهوية']

const printOffers = [
  { title: 'بطاقات عمل', en: 'Carte Visite', features: ['تصميم احترافي', 'طباعة عالية الجودة', 'جميع أنواع الورق', 'بطاقات NFC متوفرة'] },
  { title: 'منشورات', en: 'Flyers', features: ['تصميم فريد', 'طباعة بالألوان', 'أحجام متعددة', 'ورق عالي الجودة'] },
  { title: 'بروشورات', en: 'Dépliants', features: ['تصميم مخصص', 'طباعة عالية الجودة', 'هيكل متين', 'سهولة التركيب'] },
  { title: 'رول أب', en: 'Roll Up', features: ['تصميم مخصص', 'طباعة عالية الجودة', 'هيكل متين', 'سهولة التركيب'] },
  { title: 'لافتات وفينيل', en: 'Baches et Vinyl', features: ['جودة عالية', 'مقاوم للعوامل الجوية', 'أحجام متنوعة', 'ألوان زاهية'] },
  { title: 'لافتات ضوئية ولوحات', en: 'Enseignes', features: ['لوحات ضوئية', 'حروف بارزة', 'تصميم وتنفيذ', 'تركيب احترافي'] },
]

const faq = [
  { question: 'كيف يتم حساب سعر الحملة الإعلانية المخصصة؟', answer: 'نطبق المعادلة 3.5 د.ت × عدد الأيام × عدد الولايات المستهدفة، لأي حملة خارج باقاتنا الثلاث القياسية.' },
  { question: 'هل يمكنني الجمع بين عدة أقطاب (موقع + شبكات اجتماعية مثلاً)؟', answer: 'نعم، أغلب عملائنا يجمعون بين خدمات متعددة. نقدم عرض سعر مجمع مع جهة اتصال واحدة للمشروع بأكمله.' },
  { question: 'هل الأسعار المعروضة تشمل الإعلانات الممولة؟', answer: 'بالنسبة لباقات إدارة الشبكات الاجتماعية، يتم تضمين عدد أيام الإعلانات مباشرة في الباقة الشهرية، كما هو موضح في كل خطة.' },
  { question: 'كم يستغرق إنشاء متجر إلكتروني؟', answer: 'في المتوسط من 4 إلى 6 أسابيع بين الموافقة على دفتر الشروط والإطلاق الفعلي، حسب عدد المنتجات المراد إدماجها.' },
]
</script>

<style scoped>
/* ═══════════ FONDATIONS MODERNES ═══════════ */
.services-page {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: #fff8e6;
  --ink: #1a1a1a;
  --ink-light: #2c2c2c;
  --grey: #6b6b7b;
  --paper: #fafafa;
  --white: #ffffff;
  --border: #e8e8ed;
  --radius: 20px;
  --radius-sm: 14px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
  background: var(--paper);
  color: var(--ink);
  overflow-x: hidden;
}

.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

/* EYEBROW */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;
  background: var(--gold-soft);
  color: var(--gold-deep);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 16px;
}
.eyebrow::before {
  content: '';
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
}

/* SECTION HEAD */
.section-head { margin-bottom: 48px; }
.section-head h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin-top: 8px;
  color: var(--ink);
}

/* ═══════════ INTRO ═══════════ */
.intro {
  padding: 80px 0 60px;
}
.intro h1 {
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 800;
  margin: 16px 0 20px;
  line-height: 1.25;
}
.lead {
  font-size: 17px;
  color: var(--grey);
  line-height: 1.85;
  max-width: 600px;
  margin-bottom: 32px;
}
.quick-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  font-size: 14px;
  font-weight: 600;
}
.quick-nav a {
  color: var(--ink);
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}
.quick-nav a:hover {
  border-color: var(--gold);
}

/* ═══════════ BLOCKS ═══════════ */
.block {
  padding: 80px 0;
}
.block--dark {
  background: var(--ink);
  color: #fff;
}
.block--dark .block-tag { color: var(--gold); }
.block--dark .block-head p { color: rgba(255,255,255,0.7); }
.block--gold {
  background: linear-gradient(135deg, #fff8e6 0%, #fff 100%);
}
.block--gold .block-tag { color: var(--gold-deep); }
.block--light {
  background: #fff;
}
.block-head {
  max-width: 600px;
  margin-bottom: 48px;
}
.block-tag {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.block-head h2 {
  font-size: clamp(30px, 4vw, 42px);
  margin: 12px 0;
}
.block--dark .block-head h2 { color: #fff; }
.block--gold .block-head h2 { color: var(--ink); }
.block--light .block-head h2 { color: var(--ink); }

/* ═══════════ PLAN GRID (ads, social) ═══════════ */
.plan-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.plan-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 30px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
  position: relative;
  overflow: hidden;
}
.plan-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px rgba(0,0,0,0.08);
}
.block--dark .plan-card {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.1);
}
.block--dark .plan-card:hover {
  background: rgba(255,255,255,0.08);
}
.plan-card.featured {
  border-color: var(--gold);
  box-shadow: 0 0 0 2px var(--gold);
}
.featured-tag {
  position: absolute;
  top: -12px;
  right: 20px;
  background: var(--gold);
  color: var(--ink);
  font-size: 11px;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 50px;
}
.plan-duration {
  display: inline-block;
  padding: 6px 14px;
  background: var(--gold-soft);
  color: var(--gold-deep);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 12px;
}
.plan-price {
  font-size: 36px;
  font-weight: 800;
  color: var(--ink);
}
.block--dark .plan-price { color: #fff; }
.plan-price small { font-size: 18px; font-weight: 500; }
.plan-sub {
  font-size: 13px;
  color: var(--grey);
  margin-bottom: 18px;
}
.plan-card ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.plan-card li {
  font-size: 13.5px;
  color: var(--grey);
  padding-right: 18px;
  position: relative;
}
.plan-card li::before {
  content: '';
  position: absolute;
  right: 0;
  top: 6px;
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
}

.formula-note {
  margin-top: 32px;
  font-size: 14.5px;
  color: rgba(255,255,255,0.7);
  background: rgba(255,255,255,0.06);
  padding: 14px 20px;
  border-radius: 12px;
  display: inline-block;
}
.formula-note strong { color: var(--gold); }

/* ═══════════ WEB GRID ═══════════ */
.web-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}
.web-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 22px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.web-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}
.web-card.featured {
  border-color: var(--gold);
  box-shadow: 0 0 0 2px var(--gold);
}
.web-icon {
  font-size: 24px;
  color: var(--gold);
}
.web-card h3 {
  font-size: 16px;
  font-weight: 700;
}
.web-price {
  font-size: 17px;
  font-weight: 800;
  color: var(--ink);
}
.web-card ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.web-card li {
  font-size: 12.5px;
  color: var(--grey);
  padding-right: 16px;
  position: relative;
}
.web-card li::before {
  content: '';
  position: absolute;
  right: 0;
  top: 5px;
  width: 5px;
  height: 5px;
  background: var(--gold);
  border-radius: 50%;
}

/* ═══════════ STRIP GRID (video, photo) ═══════════ */
.strip-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
.strip-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.25s var(--ease);
}
.strip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.06);
}
.block--dark .strip-card {
  background: rgba(255,255,255,0.04);
  border-color: rgba(255,255,255,0.1);
}
.strip-card h4 {
  font-size: 15px;
  font-weight: 700;
}
.block--dark .strip-card h4 { color: #fff; }
.strip-card strong {
  color: var(--gold-deep);
  font-weight: 700;
}
.block--dark .strip-card strong { color: var(--gold); }
.strip-card ul {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.strip-card li {
  font-size: 12px;
  color: var(--grey);
  padding-right: 14px;
  position: relative;
}
.block--dark .strip-card li { color: rgba(255,255,255,0.7); }
.strip-card li::before {
  content: '';
  position: absolute;
  right: 0;
  top: 5px;
  width: 5px;
  height: 5px;
  background: var(--gold);
  border-radius: 50%;
}

/* ═══════════ DESIGN GRID ═══════════ */
.design-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 20px;
}
.design-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 20px;
  transition: all 0.25s var(--ease);
}
.design-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.05);
}
.design-card.featured {
  border-color: var(--gold);
  box-shadow: 0 0 0 2px var(--gold);
}
.design-card h4 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
}
.design-card strong {
  font-size: 22px;
  color: var(--ink);
}
.design-card strong small {
  font-size: 13px;
}
.design-unit {
  font-size: 12px;
  color: var(--grey);
  display: block;
  margin-top: 4px;
}

.identity-card {
  background: var(--ink);
  border-radius: var(--radius);
  padding: 34px 32px;
  color: #fff;
}
.identity-card h3 {
  font-size: 20px;
  margin-bottom: 12px;
}
.identity-card strong {
  font-size: 28px;
  color: var(--gold);
  display: block;
  margin-bottom: 18px;
}
.identity-card strong small {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
}
.identity-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.identity-card li {
  font-size: 13.5px;
  padding-right: 18px;
  position: relative;
  color: rgba(255,255,255,0.8);
}
.identity-card li::before {
  content: '';
  position: absolute;
  right: 0;
  top: 6px;
  width: 5px;
  height: 5px;
  background: var(--gold);
  border-radius: 50%;
}

/* ═══════════ PRINT ═══════════ */
.print-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.print-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 26px 22px;
  transition: all 0.25s var(--ease);
}
.print-card:hover {
  background: rgba(255,255,255,0.08);
  transform: translateY(-4px);
}
.print-card h4 {
  color: #fff;
  font-size: 17px;
  margin-bottom: 8px;
}
.print-en {
  font-size: 12px;
  color: var(--gold);
  font-weight: 400;
}
.print-card ul {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.print-card li {
  font-size: 12.5px;
  color: rgba(255,255,255,0.7);
  padding-right: 16px;
  position: relative;
}
.print-card li::before {
  content: '';
  position: absolute;
  right: 0;
  top: 5px;
  width: 5px;
  height: 5px;
  background: var(--gold);
  border-radius: 50%;
}
.print-price {
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--gold);
  display: inline-block;
}

/* ═══════════ CTA BAND ═══════════ */
.cta-band {
  background: var(--ink);
  padding: 70px 0;
}
.cta-band-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}
.cta-band .eyebrow {
  color: var(--gold);
  background: rgba(248,177,1,0.1);
}
.cta-band h2 {
  color: #fff;
  font-size: clamp(26px, 4vw, 36px);
  margin-top: 12px;
}
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gold);
  color: var(--ink);
  padding: 16px 36px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s var(--ease);
  box-shadow: 0 8px 24px rgba(248,177,1,0.3);
}
.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(248,177,1,0.45);
}

/* ═══════════ FAQ ═══════════ */
.faq {
  padding: 80px 0;
  background: #fff;
}
.faq-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: start;
}
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
details {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 20px 24px;
  background: var(--paper);
  transition: all 0.25s;
}
details[open] {
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
}
summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
summary::-webkit-details-marker { display: none; }
summary::after {
  content: "+";
  color: var(--gold);
  font-weight: 700;
  font-size: 20px;
}
details[open] summary::after { content: "−"; }
details p {
  margin-top: 14px;
  font-size: 14px;
  color: var(--grey);
  line-height: 1.7;
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 1000px) {
  .web-grid,
  .strip-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .print-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 760px) {
  .plan-grid,
  .design-grid {
    grid-template-columns: 1fr;
  }
  .web-grid,
  .strip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .print-grid {
    grid-template-columns: 1fr;
  }
  .faq-grid {
    grid-template-columns: 1fr;
  }
  .cta-band-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>