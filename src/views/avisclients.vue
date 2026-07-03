<template>
  <main class="testimonials-page">

    <!-- ═══════════ HERO ═══════════ -->
    <section class="hero-testimonials">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <span class="eyebrow">آراء العملاء</span>
          <h1>
            ماذا يقول <span class="gold-word">عملاؤنا</span> عنا؟
          </h1>
          <p class="lead">
            لا شيء يعكس جودة عملنا أكثر من كلمات شركائنا الحقيقيين.
            كل مشروع هو قصة نجاح نفتخر بها.
          </p>
          <div class="hero-rating">
            <div class="stars-big">
              <svg v-for="i in 5" :key="i" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <span class="rating-text">4.9 من 5 — تقييم عملائنا</span>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="floating-card card-a">
            <div class="mini-avatar">م</div>
            <div class="mini-info">
              <strong>محمد</strong>
              <small>★★★★★</small>
            </div>
          </div>
          <div class="floating-card card-b">
            <div class="mini-avatar">س</div>
            <div class="mini-info">
              <strong>سارة</strong>
              <small>★★★★★</small>
            </div>
          </div>
          <div class="floating-card card-c">
            <div class="mini-avatar">أ</div>
            <div class="mini-info">
              <strong>أحمد</strong>
              <small>★★★★★</small>
            </div>
          </div>
          <div class="circle-glow"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════ STATS SATISFACTION ═══════════ -->
    <section class="stats-satisfaction">
      <div class="wrap stats-grid">
        <div class="stat-item" v-for="stat in satisfactionStats" :key="stat.label">
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ═══════════ GRILLE TÉMOIGNAGES ═══════════ -->
    <section class="testimonials-grid-section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">شركاء النجاح</span>
          <h2>آراء صادقة من عملاء حقيقيين</h2>
        </div>

        <div class="testi-grid">
          <article class="testi-card" v-for="t in testimonials" :key="t.name">
            <div class="testi-quote-icon">“</div>
            <div class="testi-stars">
              <svg v-for="i in 5" :key="i" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <p class="testi-text">"{{ t.text }}"</p>
            <div class="testi-author">
              <div class="testi-avatar">{{ t.initials }}</div>
              <div class="testi-info">
                <strong>{{ t.name }}</strong>
                <small>{{ t.role }}</small>
              </div>
            </div>
            <div class="testi-company">{{ t.company }}</div>
          </article>
        </div>
      </div>
    </section>


  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const satisfactionStats = [
  { value: '+120', label: 'عميل سعيد' },
  { value: '4.9/5', label: 'متوسط التقييم' },
  { value: '+250', label: 'مشروع مكتمل' },
  { value: '98%', label: 'نسبة إعادة التعامل' },
]

const testimonials = [
  {
    initials: 'م',
    name: 'محمد العجمي',
    role: 'المدير التنفيذي — Innovex',
    company: 'Innovex',
    text: 'تعاملنا مع فريق محترف، ساعدونا في تطوير هويتنا التسويقية وتحقيق نتائج فاقت توقعاتنا. أنصح بهم بشدة.',
  },
  {
    initials: 'س',
    name: 'سارة العمري',
    role: 'مديرة تجربة — Glow Beauty',
    company: 'Glow Beauty',
    text: 'فريق رائع واستجابة سريعة. أصبح التعامل معهم مصدر دعم دائم وتجربة Infinity تستحق الثقة.',
  },
  {
    initials: 'أ',
    name: 'أحمد بن سالم',
    role: 'مؤسس — Golden Coffee',
    company: 'Golden Coffee',
    text: 'تصميم إبداعي وتنفيذ احترافي، ساعدونا في تحسين حضورنا الرقمي وزيادة مبيعاتنا بشكل ملحوظ.',
  },
  {
    initials: 'ن',
    name: 'نور الهدى',
    role: 'صاحبة علامة — Nour Couture',
    company: 'Nour Couture',
    text: 'الهوية البصرية التي صمموها لنا كانت رائعة، عكست شخصية علامتنا بدقة وجذبت عملاء جدد.',
  },
  {
    initials: 'ك',
    name: 'كريم الزواري',
    role: 'مدير مبيعات — AutoPro Tunisie',
    company: 'AutoPro',
    text: 'حملات الإعلانات الممولة معهم حققت لنا عائداً استثمارياً ممتازاً. فريق يفهم السوق التونسي.',
  },
  {
    initials: 'ف',
    name: 'فاطمة بالنصر',
    role: 'مديرة — Centre Médical El Farabi',
    company: 'CMEF',
    text: 'موقعنا الجديد سهل الاستخدام وسريع. المرضى أصبحوا يحجزون المواعيد بسهولة أكبر.',
  },
  {
    initials: 'ي',
    name: 'ياسين المولهي',
    role: 'مؤسس — Yassin Food',
    company: 'Yassin Food',
    text: 'فيديو البراند الذي أنتجوه لنا لاقى تفاعلاً هائلاً على السوشيال ميديا. عمل احترافي بكل المقاييس.',
  },
  {
    initials: 'ل',
    name: 'ليلى السويسي',
    role: 'مديرة تسويق — Dar Sabrine',
    company: 'Dar Sabrine',
    text: 'صور المنتجات كانت مذهلة. الفريق محترف في التصوير والإخراج. سنعمل معهم مجدداً.',
  },
  {
    initials: 'ت',
    name: 'توفيق الجريء',
    role: 'رئيس جمعية — تونس الخير',
    company: 'تونس الخير',
    text: 'صمموا لنا حملة تطوعية كاملة مجاناً. إنسانية واحترافية في نفس الوقت. شكراً إنفينيتي.',
  },
]
</script>

<style scoped>
/* ═══════════ FONDATIONS ═══════════ */
.testimonials-page {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: #fff8e6;
  --ink: #1a1a1a;
  --grey: #6b6b7b;
  --paper: #fafafa;
  --white: #ffffff;
  --border: #e8e8ed;
  --r: 20px;
  --r-sm: 14px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
  color: var(--ink);
  overflow-x: hidden;
  background: var(--paper);
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

/* ═══════════ EYEBROW ═══════════ */
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

/* ═══════════ HERO ═══════════ */
.hero-testimonials {
  padding: 80px 0 60px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.hero-text h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 20px;
}
.gold-word { color: var(--gold); }
.lead {
  font-size: 17px;
  color: var(--grey);
  line-height: 1.85;
  max-width: 480px;
  margin-bottom: 32px;
}
.hero-rating {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.stars-big {
  display: flex;
  gap: 4px;
  color: var(--gold);
}
.rating-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-card {
  position: absolute;
  background: #fff;
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
  animation: floatCard 6s ease-in-out infinite;
}
.card-a { top: 10%; right: 5%; animation-delay: 0s; }
.card-b { top: 45%; left: 2%; animation-delay: -2s; }
.card-c { bottom: 10%; right: 15%; animation-delay: -4s; }
.mini-avatar {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--ink);
  font-weight: 800;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mini-info strong { display: block; font-size: 14px; }
.mini-info small { color: var(--gold); font-weight: 700; }
.circle-glow {
  position: absolute;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(248,177,1,0.15), transparent 70%);
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

/* ═══════════ STATS ═══════════ */
.stats-satisfaction {
  padding: 0 0 60px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--ink);
  border-radius: var(--r);
  padding: 40px 20px;
  gap: 16px;
}
.stat-item {
  text-align: center;
  color: #fff;
  border-left: 1px solid rgba(255,255,255,0.1);
  padding: 0 16px;
}
.stat-item:last-child { border-left: none; }
.stat-number {
  display: block;
  font-size: 38px;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 6px;
}
.stat-label {
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}

/* ═══════════ SECTION HEAD ═══════════ */
.section-head {
  text-align: center;
  margin-bottom: 56px;
}
.section-head h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin-top: 8px;
}

/* ═══════════ TESTIMONIALS GRID ═══════════ */
.testimonials-grid-section {
  padding: 0 0 80px;
  background: var(--paper);
}
.testi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.testi-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 32px 28px;
  position: relative;
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.testi-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: var(--gold);
}
.testi-quote-icon {
  font-size: 64px;
  color: var(--gold-soft);
  line-height: 1;
  font-weight: 800;
  margin-bottom: 8px;
}
.testi-stars {
  display: flex;
  gap: 2px;
  color: var(--gold);
  margin-bottom: 16px;
}
.testi-text {
  font-size: 14.5px;
  color: var(--grey);
  line-height: 1.85;
  margin-bottom: 20px;
  min-height: 70px;
}
.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
}
.testi-avatar {
  width: 48px; height: 48px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--ink);
  font-weight: 800;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.testi-info strong {
  display: block;
  font-size: 14px;
  color: var(--ink);
}
.testi-info small {
  font-size: 12px;
  color: var(--grey);
}
.testi-company {
  margin-top: 12px;
  font-size: 13px;
  font-weight: 700;
  color: var(--gold-deep);
  text-align: left;
}

/* ═══════════ CTA ═══════════ */
.cta-section {
  padding: 0 0 80px;
}
.cta-card {
  background: linear-gradient(135deg, var(--ink) 0%, #2c2c2c 100%);
  border-radius: 32px;
  padding: 56px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.cta-card::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -10%;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(248,177,1,0.2) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.cta-content h2 {
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
}
.cta-content p {
  font-size: 16px;
  opacity: 0.85;
  line-height: 1.7;
  position: relative;
}
.cta-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

/* ═══════════ BUTTONS ═══════════ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  border: 2px solid transparent;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-gold {
  background: var(--gold);
  color: var(--ink);
  box-shadow: 0 8px 24px rgba(248,177,1,0.3);
}
.btn-gold:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(248,177,1,0.45);
}
.btn-outline {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.4);
}
.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: #fff;
  transform: translateY(-3px);
}

/* ═══════════ ANIMATIONS ═══════════ */
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-visual { height: 240px; margin-top: 32px; }
  .testi-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
  .stat-item:nth-child(2) { border-left: none; }
}
@media (max-width: 600px) {
  .testi-grid { grid-template-columns: 1fr; }
  .cta-card { flex-direction: column; text-align: center; padding: 40px 24px; }
  .cta-actions { justify-content: center; }
  .hero-rating { justify-content: center; }
}
</style>