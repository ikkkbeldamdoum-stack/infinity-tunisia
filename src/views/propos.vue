<template>
  <main class="process-page">

    <!-- ═══════════ HERO MODERNE ═══════════ -->
    <section class="hero-process">
      <!-- Formes géométriques d'arrière-plan -->
      <div class="bg-shapes">
        <div class="bg-circle c1"></div>
        <div class="bg-circle c2"></div>
        <div class="bg-dots"></div>
      </div>

      <div class="wrap hero-grid">
        <div class="hero-text">
          <div class="eyebrow-glass">
            <span class="dot-pulse"></span>
            منهجيتنا
          </div>
          <h1>
            <span class="gold-word">كيف نعمل</span>
            <br />
            <span class="gradient-text">لتحويل فكرتك إلى واقع</span>
          </h1>
          <p class="lead">
            خطوات واضحة ومنظمة تبدأ من الفكرة ولا تنتهي عند التسليم.
            كل مشروع يمر بمنهجية متكاملة تجمع بين الإبداع، التحليل،
            والتنفيذ الدقيق.
          </p>
          <div class="hero-actions">
            <RouterLink to="/devis" class="btn btn-primary-glow">
              <span>ابدأ مشروعك الآن</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18L9 12L15 6"/></svg>
            </RouterLink>
            <a href="https://wa.me/21692105505" target="_blank" rel="noopener" class="btn btn-glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              <span>واتساب</span>
            </a>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="orb-gold"></div>
          <div class="orb-dark"></div>
          <div class="ring r1"></div>
          <div class="ring r2"></div>
          <div class="ring r3"></div>
          <div class="center-dot"></div>
        </div>
      </div>

      <!-- Vague séparatrice -->
      <div class="wave-divider">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C240 100 480 0 720 40C960 80 1200 0 1440 50L1440 100L0 100Z" fill="#fafafa"/>
        </svg>
      </div>
    </section>

    <!-- ═══════════ PROCESSUS DÉTAILLÉ ═══════════ -->
    <section class="process-detail">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow">مسار العمل</span>
          <h2>7 خطوات نحو النجاح</h2>
          <p class="section-subtitle">كل خطوة مصممة بعناية لضمان أفضل نتيجة</p>
        </div>

        <div class="steps-timeline">
          <div
            class="step-card-modern"
            v-for="(step, index) in processSteps"
            :key="step.number"
          >
            <div class="step-number-circle">
              <span class="num">{{ step.number }}</span>
              <svg class="circle-progress" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold-soft)" stroke-width="4"/>
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" stroke-width="4"
                  stroke-dasharray="264" stroke-dashoffset="264"
                  class="progress-ring" :style="{ animationDelay: index * 0.15 + 's' }"/>
              </svg>
            </div>

            <div class="step-body">
              <div class="step-header">
                <span class="step-tag">الخطوة {{ step.number }}</span>
                <span class="step-time">{{ step.time }}</span>
              </div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.desc }}</p>
              <div class="step-tags">
                <span v-for="tag in step.tags" :key="tag" class="mini-tag">{{ tag }}</span>
              </div>
            </div>

            <div class="step-icon-modern" v-html="step.icon"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ POURQUOI CETTE MÉTHODE ═══════════ -->
    <section class="why-method">
      <div class="wrap">
        <div class="section-head center">
          <span class="eyebrow">لماذا هذه المنهجية؟</span>
          <h2>لأن كل مشروع يستحق أكثر من مجرد تنفيذ</h2>
        </div>
        <div class="method-grid-modern">
          <div class="method-card-glass" v-for="(item, i) in methods" :key="i">
            <div class="method-icon-glow" v-html="item.icon"></div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ CTA MODERNE ═══════════ -->
    <section class="cta-process">
      <div class="wrap cta-modern">
        <div class="cta-glow-bg"></div>
        <div class="cta-content">
          <h2>هل أنت مستعد لبدء الرحلة؟</h2>
          <p>معاً نحوّل فكرتك إلى مشروع ناجح. دعنا نناقش التفاصيل.</p>
        </div>
        <div class="cta-actions">
          <RouterLink to="/devis" class="btn btn-gold-lg">
            <span>اطلب عرض سعر</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
          <a href="https://wa.me/21692105505" target="_blank" rel="noopener" class="btn btn-outline-lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            <span>محادثة واتساب</span>
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const processSteps = [
  {
    number: 1,
    title: 'التواصل',
    time: 'يوم 1-2',
    desc: 'نستمع إلى فكرتك ونفهم أهدافك وجمهورك المستهدف. هذه المرحلة هي أساس كل ما سيأتي بعدها.',
    tags: ['استشارة', 'تحليل أولي'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="13" y2="13"/></svg>'
  },
  {
    number: 2,
    title: 'التحليل والتخطيط',
    time: 'يوم 2-4',
    desc: 'نحلل السوق والمنافسين ونبني استراتيجية مخصصة. نحدد الميزانية والجدول الزمني بدقة.',
    tags: ['استراتيجية', 'جدولة'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
  },
  {
    number: 3,
    title: 'تصميم العرض',
    time: 'يوم 4-6',
    desc: 'نقدم تصوراً شاملاً للمشروع يشمل الإبداع والرسالة، مع نماذج أولية وعينات.',
    tags: ['إبداع', 'نماذج'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>'
  },
  {
    number: 4,
    title: 'التنفيذ والإبداع',
    time: 'يوم 6-14',
    desc: 'فريق الإنتاج يبدأ العمل: التصوير، التصميم، البرمجة، أو كتابة المحتوى حسب طبيعة المشروع.',
    tags: ['إنتاج', 'تصميم'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>'
  },
  {
    number: 5,
    title: 'المراجعة والتحسين',
    time: 'يوم 14-16',
    desc: 'نرسل لك النتائج ونأخذ ملاحظاتك. نكرر دورة التحسين حتى تصل إلى نتيجة مثالية.',
    tags: ['مراجعة', 'تحسين'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
  },
  {
    number: 6,
    title: 'التسليم والإطلاق',
    time: 'يوم 16-18',
    desc: 'نسلم المشروع النهائي، ننسق الإطلاق، ونتأكد من أن كل شيء يعمل بسلاسة.',
    tags: ['تسليم', 'إطلاق'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  },
  {
    number: 7,
    title: 'المتابعة والدعم',
    time: 'مستمر',
    desc: 'نبقى على اتصال بعد التسليم لقياس النتائج وتقديم الدعم والتحديثات عند الحاجة.',
    tags: ['دعم', 'تحليل'],
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1-2 4-2 4 2 4 2M9 9h.01M15 9h.01"/></svg>'
  }
]

const methods = [
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    title: 'توفير الوقت',
    desc: 'خطوات واضحة تقلل التعديلات وتسرع الإنجاز.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/></svg>',
    title: 'شفافية كاملة',
    desc: 'أنت على اطلاع دائم بكل مرحلة، لا مفاجآت.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    title: 'جودة متسقة',
    desc: 'نفس العملية الاحترافية لكل عميل.'
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    title: 'نتائج قابلة للقياس',
    desc: 'نضع مؤشرات أداء واضحة منذ البداية.'
  }
]
</script>

<style scoped>
/* ═══════════ FONDATIONS ═══════════ */
.process-page {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: #fff8e6;
  --gold-glow: rgba(248, 177, 1, 0.3);
  --ink: #1a1a1a;
  --ink-light: #2c2c2c;
  --grey: #6b6b7b;
  --grey-light: #9a9aae;
  --paper: #fafafa;
  --border: #e8e8ed;
  --glass: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --r: 16px;
  --r-xl: 24px;
  --r-2xl: 32px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
  color: var(--ink);
  overflow-x: hidden;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

/* ═══════════ EYEBROW ═══════════ */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  background: var(--gold-soft);
  color: var(--gold-deep);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 16px;
  border: 1px solid rgba(248, 177, 1, 0.2);
}
.eyebrow::before {
  content: '';
  width: 8px; height: 8px;
  background: var(--gold);
  border-radius: 50%;
}
.eyebrow-glass {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(248, 177, 1, 0.25);
  border-radius: 50px;
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
}
.dot-pulse {
  width: 9px; height: 9px;
  background: var(--gold);
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

/* ═══════════ SECTION HEAD ═══════════ */
.section-head { margin-bottom: 56px; }
.section-head.center { text-align: center; margin-left: auto; margin-right: auto; max-width: 600px; }
.section-head h2 {
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 800;
  margin: 8px 0 12px;
  color: var(--ink);
}
.section-subtitle {
  font-size: 16px;
  color: var(--grey);
}

/* ═══════════ BOUTONS ═══════════ */
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
  transition: all 0.3s var(--bounce);
}
.btn-primary-glow {
  background: var(--gold);
  color: var(--ink);
  border-color: var(--gold);
  box-shadow: 0 8px 28px rgba(248,177,1,0.35);
  position: relative;
  overflow: hidden;
}
.btn-primary-glow::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
  transform: translateX(-100%);
  transition: transform 0.6s;
}
.btn-primary-glow:hover::after {
  transform: translateX(100%);
}
.btn-primary-glow:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 38px rgba(248,177,1,0.5);
}
.btn-glass {
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
  color: var(--ink);
  border-color: rgba(0,0,0,0.1);
  box-shadow: 0 4px 16px rgba(0,0,0,0.04);
}
.btn-glass:hover {
  background: rgba(255,255,255,0.8);
  border-color: var(--gold);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.btn-gold-lg {
  background: var(--gold);
  color: var(--ink);
  font-size: 16px;
  padding: 16px 36px;
  border-radius: 50px;
  box-shadow: 0 8px 28px rgba(248,177,1,0.35);
  transition: all 0.3s var(--bounce);
}
.btn-gold-lg:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 40px rgba(248,177,1,0.5);
}
.btn-outline-lg {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.4);
  font-size: 16px;
  padding: 16px 36px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
  transition: all 0.3s var(--bounce);
}
.btn-outline-lg:hover {
  background: rgba(255,255,255,0.15);
  border-color: #fff;
  transform: translateY(-3px);
}

/* ═══════════ HERO ═══════════ */
.hero-process {
  padding: 100px 0 60px;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.bg-shapes { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;
}
.bg-circle.c1 {
  width: 600px; height: 600px;
  background: var(--gold);
  top: -200px; left: -100px;
  animation: float-slow 12s ease-in-out infinite;
}
.bg-circle.c2 {
  width: 400px; height: 400px;
  background: var(--ink);
  bottom: -100px; right: -80px;
  animation: float-slow 15s ease-in-out infinite reverse;
}
.bg-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--gold) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.06;
}
.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.hero-text h1 {
  font-size: clamp(44px, 5.5vw, 68px);
  font-weight: 800;
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: 24px;
}
.gold-word { color: var(--gold); }
.gradient-text {
  background: linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.lead {
  font-size: 17.5px;
  color: var(--grey);
  line-height: 1.9;
  max-width: 500px;
  margin-bottom: 36px;
}
.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Visual hero */
.hero-visual {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.orb-gold, .orb-dark {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}
.orb-gold {
  width: 250px; height: 250px;
  background: var(--gold-glow);
  animation: pulse-orb 4s ease-in-out infinite;
}
.orb-dark {
  width: 200px; height: 200px;
  background: rgba(0,0,0,0.08);
  animation: pulse-orb 5s ease-in-out 1s infinite;
}
.ring {
  position: absolute;
  border-radius: 50%;
  border: 2px dashed rgba(248,177,1,0.2);
  animation: spin-slow 25s linear infinite;
}
.ring.r1 { width: 300px; height: 300px; }
.ring.r2 { width: 220px; height: 220px; animation-direction: reverse; animation-duration: 18s; }
.ring.r3 { width: 140px; height: 140px; animation-duration: 12s; }
.center-dot {
  width: 20px; height: 20px;
  background: var(--gold);
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 0 30px rgba(248,177,1,0.6);
}

/* Vague */
.wave-divider {
  position: absolute;
  bottom: -2px;
  left: 0; right: 0;
  z-index: 2;
}
.wave-divider svg { display: block; width: 100%; }

/* ═══════════ STEPS TIMELINE ═══════════ */
.process-detail {
  padding: 80px 0;
  background: var(--paper);
}
.steps-timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}
.step-card-modern {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 28px 32px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r-2xl);
  transition: all 0.35s var(--ease);
  position: relative;
  overflow: hidden;
}
.step-card-modern::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, var(--gold-soft) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.35s;
}
.step-card-modern:hover {
  transform: translateX(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-color: var(--gold);
}
.step-card-modern:hover::before {
  opacity: 1;
}

/* Numéro avec cercle progressif */
.step-number-circle {
  position: relative;
  width: 80px; height: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-number-circle .num {
  font-size: 28px;
  font-weight: 800;
  color: var(--gold);
  z-index: 1;
}
.step-number-circle .circle-progress {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}
.progress-ring {
  animation: fill-progress 1.5s ease-out forwards;
}

/* Corps de la carte */
.step-body {
  flex: 1;
  position: relative;
  z-index: 1;
}
.step-header {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 8px;
}
.step-tag {
  font-size: 12px;
  font-weight: 700;
  color: var(--gold-deep);
  background: var(--gold-soft);
  padding: 4px 10px;
  border-radius: 50px;
}
.step-time {
  font-size: 12px;
  color: var(--grey-light);
}
.step-body h4 {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 6px;
  color: var(--ink);
}
.step-body p {
  font-size: 14.5px;
  color: var(--grey);
  line-height: 1.7;
  margin-bottom: 12px;
}
.step-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.mini-tag {
  font-size: 11px;
  color: var(--grey-light);
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 3px 10px;
  background: #f9f9fb;
}

/* Icône */
.step-icon-modern {
  width: 60px; height: 60px;
  background: var(--gold-soft);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  flex-shrink: 0;
  transition: all 0.3s var(--ease);
}
.step-card-modern:hover .step-icon-modern {
  background: var(--gold);
  color: #fff;
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 8px 20px rgba(248,177,1,0.3);
}

/* ═══════════ WHY METHOD ═══════════ */
.why-method {
  padding: 80px 0;
  background: #fff;
}
.method-grid-modern {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.method-card-glass {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border);
  border-radius: var(--r-2xl);
  padding: 36px 24px;
  text-align: center;
  transition: all 0.35s var(--bounce);
  box-shadow: 0 4px 16px rgba(0,0,0,0.03);
}
.method-card-glass:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: var(--gold);
  background: rgba(255,248,230,0.5);
}
.method-icon-glow {
  width: 64px; height: 64px;
  margin: 0 auto 20px;
  background: var(--gold-soft);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  transition: all 0.3s var(--bounce);
}
.method-card-glass:hover .method-icon-glow {
  background: var(--gold);
  color: #fff;
  box-shadow: 0 12px 28px rgba(248,177,1,0.35);
  transform: scale(1.1);
}
.method-card-glass h4 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--ink);
}
.method-card-glass p {
  font-size: 14px;
  color: var(--grey);
  line-height: 1.7;
}

/* ═══════════ CTA MODERNE ═══════════ */
.cta-process {
  padding: 60px 0 80px;
}
.cta-modern {
  background: linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%);
  border-radius: 40px;
  padding: 64px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.cta-glow-bg {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(248,177,1,0.15) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.cta-content h2 {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
  z-index: 1;
}
.cta-content p {
  font-size: 16px;
  opacity: 0.8;
  line-height: 1.7;
  max-width: 500px;
  position: relative;
  z-index: 1;
}
.cta-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

/* ═══════════ ANIMATIONS ═══════════ */
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.5); }
}
@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}
@keyframes pulse-orb {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.15); opacity: 1; }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes fill-progress {
  from { stroke-dashoffset: 264; }
  to { stroke-dashoffset: 0; }
}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-text .lead { max-width: 100%; }
  .hero-actions { justify-content: center; }
  .hero-visual { height: 250px; order: -1; }
  .method-grid-modern { grid-template-columns: repeat(2, 1fr); }
  .step-card-modern { flex-direction: column; text-align: center; padding: 24px; }
  .step-number-circle { margin: 0 auto; }
  .step-icon-modern { margin: 0 auto; }
  .step-header { justify-content: center; }
  .step-tags { justify-content: center; }
}
@media (max-width: 600px) {
  .method-grid-modern { grid-template-columns: 1fr; }
  .hero-text h1 { font-size: 36px; }
  .cta-modern { padding: 40px 24px; text-align: center; flex-direction: column; }
  .cta-actions { justify-content: center; }
  .hero-actions { flex-direction: column; align-items: center; }
}
</style>