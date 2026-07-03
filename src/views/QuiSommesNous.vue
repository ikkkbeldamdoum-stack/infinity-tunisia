<template>
  <main class="about-page">

    <!-- ═══════════ INTRO HERO ═══════════ -->
    <section class="intro-hero">
      <div class="wrap intro-grid">
        <div class="intro-text">
          <span class="eyebrow">من نحن؟</span>
          <h1>
            وكالة وُلدت في
            <span class="gold-word">تونس</span>،
            <br />صُممت للميدان.
          </h1>
          <p class="lead">
            إنفينيتي هي وكالة إنتاج وتسويق تجمع بين الإبداع والاستراتيجية.
            نرافق علامات تجارية تونسية وإقليمية بمحتوى احترافي
            يُنتج ويُوزع بمنهجية واضحة.
          </p>
          <RouterLink to="/devis" class="btn btn-primary">
            ابدأ مشروعك الآن
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18L9 12L15 6"/></svg>
          </RouterLink>
        </div>
        <div class="intro-visual" aria-hidden="true">
          <div class="visual-frame">
            <img src="../assets/logo.jpg" alt="Infinity logo" />
            <div class="frame-deco"></div>
          </div>
          <div class="floating-shape shape-a"></div>
          <div class="floating-shape shape-b"></div>
        </div>
      </div>
    </section>

    <!-- ═══════════ HISTOIRE & CHIFFRES ═══════════ -->
    <section class="story-section">
      <div class="wrap story-grid">
        <div class="story-text">
          <span class="eyebrow">قصتنا</span>
          <h2>من التصوير إلى الاستراتيجية، بدافع الضرورة.</h2>
          <p>
            بدأنا كاستوديو صغير لإنتاج الفيديو. وسرعان ما أدركنا أن المحتوى الجميل
            يحتاج إلى خطة توزيع ذكية. لذلك بنينا قطباً تسويقياً متكاملاً، ليخدم
            كل فيلم ننتجه هدفاً قابلاً للقياس.
          </p>
          <p>
            اليوم، تعمل فرق الإخراج والاستراتيجية معاً منذ اللحظة الأولى.
            والنتيجة: محتوى يُفكر في نشره قبل حتى أن يُصور.
          </p>
        </div>
        <div class="story-numbers">
          <div class="num-card" v-for="s in stats" :key="s.label">
            <span class="num-value">{{ s.value }}</span>
            <span class="num-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ MISSION / VISION ═══════════ -->
    <section class="mv-section">
      <div class="wrap mv-grid">
        <article class="mv-card mv-mission">
          <div class="mv-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <span class="mv-tag">مهمتنا</span>
          <p>
            منح العلامات التجارية التونسية القدرة على سرد قصتها بأعلى معايير
            الإنتاج والاستراتيجية.
          </p>
        </article>
        <article class="mv-card mv-vision">
          <div class="mv-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <span class="mv-tag">رؤيتنا</span>
          <p>
            أن نصبح الشريك المرجعي للعلامات التي ترغب في النمو في تونس وخارجها
            بالمحتوى والبيانات.
          </p>
        </article>
      </div>
    </section>

    <!-- ═══════════ VALEURS ═══════════ -->
    <section class="values-section">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">قيمنا</span>
          <h2>ما يوجه كل مشروع.</h2>
        </div>
        <div class="values-grid">
          <article v-for="v in values" :key="v.title" class="value-card">
            <div class="value-icon" v-html="v.icon"></div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ ÉQUIPE ═══════════ -->
    <section class="team-section">
      <div class="wrap">
        <div class="section-head light">
          <span class="eyebrow">الفريق</span>
          <h2>فريق واحد، أربعة أقطاب خبرة.</h2>
        </div>
        <div class="team-grid">
          <article v-for="p in poles" :key="p.title" class="pole-card">
            <div class="pole-icon" v-html="p.icon"></div>
            <h4>{{ p.title }}</h4>
            <p>{{ p.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════ شركاء النجاح / PARTENAIRES ═══════════ -->
    <section class="partners-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow">شركاء النجاح</span>
          <h2>أكثر من {{ partnersCount }} علامة تجارية وثقت بنا.</h2>
          <p class="partners-lead">
            من المطاعم والفنادق إلى وكالات الأسفار والعقارات، رافقنا علامات
            تجارية من مختلف القطاعات في تونس وخارجها.
          </p>
        </div>
      </div>

      <div class="marquee-wrap">
        <div class="marquee-row" aria-hidden="false">
          <div class="marquee-track">
            <span class="partner-badge" v-for="(p, i) in partnersRow1" :key="'r1a-' + i">{{ p }}</span>
            <span class="partner-badge" v-for="(p, i) in partnersRow1" :key="'r1b-' + i" aria-hidden="true">{{ p }}</span>
          </div>
        </div>
        <div class="marquee-row reverse">
          <div class="marquee-track">
            <span class="partner-badge" v-for="(p, i) in partnersRow2" :key="'r2a-' + i">{{ p }}</span>
            <span class="partner-badge" v-for="(p, i) in partnersRow2" :key="'r2b-' + i" aria-hidden="true">{{ p }}</span>
          </div>
        </div>
        <div class="marquee-row">
          <div class="marquee-track">
            <span class="partner-badge" v-for="(p, i) in partnersRow3" :key="'r3a-' + i">{{ p }}</span>
            <span class="partner-badge" v-for="(p, i) in partnersRow3" :key="'r3b-' + i" aria-hidden="true">{{ p }}</span>
          </div>
        </div>
      </div>

      <div class="wrap">
        <div class="partners-cta">
          <RouterLink to="/devis" class="btn btn-primary">
            انضم إلى شركائنا
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18L9 12L15 6"/></svg>
          </RouterLink>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const stats = [
  { value: '2018', label: 'سنة التأسيس' },
  { value: '+45', label: 'علامة تجارية مرافقة' },
  { value: '+120', label: 'مشروع منجز' },
]

const values = [
  {
    title: 'الاحترافية',
    desc: 'كل ما نسلّمه يمر بمراجعة دقيقة، وكأنه يمثل اسمنا الشخصي.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>'
  },
  {
    title: 'الوضوح',
    desc: 'موجز مكتوب، ميزانية واضحة، وجدول زمني ملتزم به.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="13" y2="13"/></svg>'
  },
  {
    title: 'النتائج',
    desc: 'نقيس أثر كل محتوى، فالجمال دون عائد ليس كافياً.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>'
  },
  {
    title: 'القرب',
    desc: 'فريق موجود في تونس، يعرف السوق المحلي ويفهم تحدياته.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  }
]

const poles = [
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
    title: 'الإخراج',
    desc: 'مخرجون، مصورون ومصورو فوتوغرافيا يقودون عمليات التصوير.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'ما بعد الإنتاج',
    desc: 'مونتير، ملونون ومصممو حركة يعطون الصورة شكلها النهائي.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>',
    title: 'الاستراتيجية',
    desc: 'خبراء استراتيجية المحتوى الذين يحولون أهدافكم إلى خطة عمل.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    title: 'النمو والتواصل',
    desc: 'مدراء مجتمعات ومشترو وسائل إعلام يحيون محتواكم.'
  }
]

/* ═══════════ شركاء النجاح ═══════════ */
/* NB: remplacer ces libellés textuels par <img> des logos réels
   (v.g. depuis ../assets/partners/*.png) dès qu'ils sont disponibles. */
const partnersRow1 = [
  'العربية للتجميل', 'Lami Ziana', 'Smile One', 'كوجينتي العزيزة',
  'Show Off Lounge', 'Oficina', 'Gharsallah Change', 'El Gobbaa',
  'Safar', 'Caprices', 'Massaya Beauty', 'Folara', 'FIMAK'
]

const partnersRow2 = [
  'ATDE', 'DEI Tunisie', 'Auto Plus', 'Pika Beauty', 'Diari Traiteur',
  'Voyages D\'or', 'Savy Travel', 'Dhrifi Déco', 'Alumnize International',
  'Bacha Rideaux', 'Sameh Couture', 'Poules BTK', 'Hos Inox'
]

const partnersRow3 = [
  'Taxi Driver Privé', 'Dheyafa Tourism', 'Baraa Rent Car', 'Miqat Travel',
  'Nimou Travel', 'Abak El Janna', 'Ben Ayed Rent Car', 'Zjejaa Delivery',
  'Rivages Travel', 'TILI', 'Bachraoui Tours', 'Chawech Events', 'SAVA'
]

const partnersCount = 80
</script>

<style scoped>
/* ═══════════ FONDATIONS MODERNES ═══════════ */
.about-page {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: #fff8e6;
  --ink: #1a1a1a;
  --ink-light: #2c2c2c;
  --grey: #6b6b7b;
  --grey-light: #9a9aae;
  --paper: #fafafa;
  --border: #e8e8ed;
  --r: 16px;
  --r-sm: 10px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
  overflow-x: hidden;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }
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
  width: 8px;
  height: 8px;
  background: var(--gold);
  border-radius: 50%;
  display: inline-block;
}
.section-head {
  margin-bottom: 48px;
  max-width: 600px;
}
.section-head h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin-top: 8px;
  color: var(--ink);
}
.section-head.light h2 { color: #fff; }
.section-head.light .eyebrow {
  background: rgba(255,255,255,0.1);
  color: var(--gold);
}
.section-head.light .eyebrow::before {
  background: var(--gold);
}
.section-head.center {
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

/* BOUTON GÉNÉRIQUE */
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
  transition: all 0.28s var(--ease);
  cursor: pointer;
}
.btn-primary {
  background: var(--gold);
  color: var(--ink);
  box-shadow: 0 8px 24px rgba(248,177,1,0.28);
}
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(248,177,1,0.4);
}

/* ═══════════ INTRO HERO ═══════════ */
.intro-hero {
  padding: 80px 0;
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #fbfaf7 100%);
  overflow: hidden;
}
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.intro-text h1 {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 800;
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: 24px;
}
.gold-word {
  color: var(--gold);
  position: relative;
}
.lead {
  font-size: 17px;
  color: var(--grey);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 32px;
}
.intro-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.visual-frame {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid rgba(248,177,1,0.3);
  box-shadow: 0 32px 64px rgba(0,0,0,0.08);
  z-index: 2;
}
.visual-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.frame-deco {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 2px dashed rgba(248,177,1,0.25);
  animation: spinSlow 25s linear infinite;
}
.floating-shape {
  position: absolute;
  border-radius: 20px;
  background: rgba(248,177,1,0.15);
  z-index: 1;
}
.shape-a {
  width: 80px;
  height: 80px;
  top: -10px;
  right: 10%;
  animation: float 6s ease-in-out infinite;
}
.shape-b {
  width: 50px;
  height: 50px;
  bottom: 0;
  left: 5%;
  border-radius: 14px;
  background: rgba(248,177,1,0.2);
  animation: float 7s ease-in-out 1s infinite;
}

/* ═══════════ STORY ═══════════ */
.story-section {
  padding: 80px 0;
  background: #fff;
}
.story-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 56px;
  align-items: center;
}
.story-text h2 {
  font-size: clamp(28px, 4vw, 40px);
  margin: 14px 0 24px;
  color: var(--ink);
}
.story-text p {
  font-size: 16px;
  color: var(--grey);
  line-height: 1.85;
}
.story-text p + p {
  margin-top: 16px;
}
.story-numbers {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}
.num-card {
  background: #f9f9fb;
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px 24px;
  text-align: center;
  transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease);
}
.num-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.06);
}
.num-value {
  display: block;
  font-size: 38px;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 6px;
}
.num-label {
  font-size: 14px;
  color: var(--grey);
}

/* ═══════════ MISSION / VISION ═══════════ */
.mv-section {
  padding: 60px 0 80px;
}
.mv-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.mv-card {
  padding: 40px;
  border-radius: 32px;
  background: var(--ink);
  color: #fff;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
}
.mv-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.2);
}
.mv-mission {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
}
.mv-vision {
  background: linear-gradient(135deg, #f8b101 0%, #d49500 100%);
  color: #1a1a1a;
}
.mv-icon {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--gold);
}
.mv-vision .mv-icon {
  background: rgba(0,0,0,0.1);
  color: #1a1a1a;
}
.mv-tag {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.7;
  margin-bottom: 12px;
}
.mv-card p {
  font-size: 21px;
  font-weight: 600;
  line-height: 1.45;
  color: inherit;
}

/* ═══════════ VALEURS ═══════════ */
.values-section {
  padding: 80px 0;
  background: var(--paper);
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.value-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 28px;
  text-align: center;
  transition: all 0.3s var(--ease);
}
.value-card:hover {
  border-color: var(--gold);
  box-shadow: 0 16px 32px rgba(248,177,1,0.1);
  transform: translateY(-4px);
}
.value-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  background: var(--gold-soft);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  transition: background 0.3s;
}
.value-card:hover .value-icon {
  background: var(--gold);
  color: #fff;
}
.value-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--ink);
}
.value-card p {
  font-size: 14px;
  color: var(--grey);
  line-height: 1.7;
}

/* ═══════════ ÉQUIPE ═══════════ */
.team-section {
  padding: 80px 0;
  background: var(--ink);
  color: #fff;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.pole-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 32px 24px;
  backdrop-filter: blur(12px);
  transition: all 0.3s var(--ease);
}
.pole-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: var(--gold);
  transform: translateY(-4px);
}
.pole-icon {
  width: 52px;
  height: 52px;
  background: var(--gold);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink);
  margin-bottom: 20px;
  transition: transform 0.3s;
}
.pole-card:hover .pole-icon {
  transform: scale(1.1) rotate(5deg);
}
.pole-card h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
}
.pole-card p {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
}

/* ═══════════ PARTENAIRES (شركاء النجاح) ═══════════ */
.partners-section {
  padding: 80px 0 96px;
  background: #fff;
  position: relative;
}
.partners-lead {
  margin-top: 12px;
  font-size: 15px;
  color: var(--grey);
  line-height: 1.8;
}
.marquee-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 40px 0 48px;
  position: relative;
}
.marquee-wrap::before,
.marquee-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90px;
  z-index: 2;
  pointer-events: none;
}
.marquee-wrap::before {
  right: 0;
  background: linear-gradient(to left, #fff, rgba(255,255,255,0));
}
.marquee-wrap::after {
  left: 0;
  background: linear-gradient(to right, #fff, rgba(255,255,255,0));
}
.marquee-row {
  overflow: hidden;
  width: 100%;
}
.marquee-track {
  display: flex;
  gap: 14px;
  width: max-content;
  animation: marqueeScroll 42s linear infinite;
}
.marquee-row.reverse .marquee-track {
  animation-direction: reverse;
  animation-duration: 50s;
}
.partner-badge {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 26px;
  background: #f9f9fb;
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink-light);
  white-space: nowrap;
  transition: all 0.25s var(--ease);
}
.partner-badge:hover {
  border-color: var(--gold);
  color: var(--gold-deep);
  background: var(--gold-soft);
  transform: translateY(-3px);
}
.partners-cta {
  text-align: center;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ═══════════ ANIMATIONS ═══════════ */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 960px) {
  .intro-grid,
  .story-grid {
    grid-template-columns: 1fr;
  }
  .intro-visual {
    order: -1;
    margin-bottom: 32px;
  }
  .visual-frame {
    width: 240px;
    height: 240px;
  }
  .values-grid,
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .mv-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  .story-numbers {
    grid-template-columns: 1fr;
  }
  .partner-badge {
    padding: 10px 18px;
    font-size: 13px;
  }
}
</style>