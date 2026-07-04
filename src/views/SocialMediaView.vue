
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ HERO AVEC IMAGE + TEXTE CÔTE À CÔTE ═══════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            إدارة حسابات <br>
            <span class="gold-gradient">التواصل الاجتماعي</span>
          </h1>
          <p class="hero-desc">
            ندير حساباتك باحترافية لنبني لك حضوراً رقمياً قوياً، <br>
            وندخل جمهورك إلى عمالء حقيقيين.
          </p>
          <div class="hero-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ OFFRES / PACKS ═══════════════ -->
    <section class="section packs-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">عروضنا</span>
          <h2 class="sec-title">عروض إدارة مواقع التواصل الاجتماعي</h2>
          <p class="sec-desc">نحن نصنع المحتوى – نبني هويتك – نحقق النتائج</p>
        </div>

        <div class="packs-grid">
          <!-- Carte BUSINESS -->
          <div class="pack-card">
            <span class="pack-badge"><img src="../assets/offersbusniess.png" alt="Premium Badge"></span>
            <h3 class="pack-name">بزنس</h3>
            <p class="pack-price">990 د.ت / شهرياً</p>
            <ul class="pack-features">
              <li>إدارة صفحات فيسبوك – انستغرام – تيك توك</li>
              <li>35 تصميم منشور</li>
              <li>8 فيديوهات تسويقية</li>
              <li>جلسة تصوير وإنتاج (مرتان)</li>
              <li>كتابة المحتوى</li>
              <li>إعلانات ممولة لمدة 20 يوماً</li>
              <li>جدولة المنشورات</li>
              <li>تقرير شهري</li>
              <li>خدمة العملاء واستشارة يومية</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'BUSINESS' } }" class="btn-hero-gold full-width">تواصل معنا</RouterLink>
          </div>

          <!-- Carte PREMIUM -->
          <div class="pack-card popular">
            <span class="pack-badge"><img src="../assets/offerpremium.png" alt="Premium Badge"></span>
            <h3 class="pack-name">بريميوم</h3>
            <p class="pack-price">750 د.ت / شهرياً</p>
            <ul class="pack-features">
              <li>إدارة صفحات فيسبوك – انستغرام – تيك توك</li>
              <li>20 تصميم منشور</li>
              <li>4 فيديوهات تسويقية</li>
              <li>جلسة تصوير وإنتاج (مرة واحدة)</li>
              <li>كتابة المحتوى</li>
              <li>إعلانات ممولة لمدة 10 أيام</li>
              <li>جدولة المنشورات</li>
              <li>تقرير شهري</li>
              <li>خدمة العملاء واستشارة يومية</li>
            </ul>
            <div class="popular-tag">الأكثر طلباً</div>
            <RouterLink :to="{ name: 'contact', query: { pack: 'PREMIUM' } }" class="btn-hero-gold full-width">تواصل معنا</RouterLink>
          </div>

          <!-- Carte STARTER -->
          <div class="pack-card">
            <span class="pack-badge"><img src="../assets/offerstarterr.png" alt="Starter Badge"></span>
            <h3 class="pack-name">ستارتر</h3>
            <p class="pack-price">390 د.ت / شهرياً</p>
            <ul class="pack-features">
              <li>إدارة صفحات فيسبوك – انستغرام – تيك توك</li>
              <li>8 تصاميم منشورات</li>
              <li>2 فيديو تسويقي</li>
              <li>كتابة المحتوى</li>
              <li>إعلانات ممولة لمدة 5 أيام</li>
              <li>جدولة المنشورات</li>
              <li>تقرير شهري</li>
              <li>خدمة العملاء واستشارة يومية</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'STARTER' } }" class="btn-hero-gold full-width">تواصل معنا</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SERVICES ═══════════════ -->
    <section class="section services-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">خدماتنا المتكاملة</span>
          <h2 class="sec-title">ماذا نقدم لك؟</h2>
          <p class="sec-desc">نقدم لك مجموعة من الخدمات المتخصصة لتنمية علامتك التجارية</p>
        </div>
        <div class="services-6-grid">
          <div class="svc-card" v-for="s in services" :key="s.title">
            <div class="svc-icon-wrap" v-html="s.icon"></div>
            <h4>{{ s.title }}</h4>
            <span class="svc-desc">{{ s.desc }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PROCESS ═══════════════ -->
    <section class="process-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">منهجيتنا</span>
          <h2 class="sec-title">كيف نعمل؟</h2>
        </div>
        <div class="process-steps">
          <div class="step-item" v-for="(step, idx) in process" :key="idx">
            <div class="step-content">
              <div class="step-icon" v-html="step.icon"></div>
              <h5>{{ step.title }}</h5>
            </div>
            <div class="step-line" v-if="idx < process.length - 1"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ STATS ═══════════════ -->
    <section class="stats-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">منجزاتنا</span>
          <h2 class="sec-title">النتائج التي نحققها</h2>
        </div>
        <div class="stats-grid">
          <div class="stat-box" v-for="s in stats" :key="s.value">
            <span class="stat-val">{{ s.value }}</span>
            <span class="stat-lbl">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PORTFOLIO ═══════════════ -->
    <section class="portfolio-sec">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">معرض أعمالنا</span>
          <h2 class="sec-title">نماذج من أعمالنا</h2>
        </div>
        <div class="portfolio-grid">
          <div class="port-item" v-for="item in portfolio" :key="item.title">
            <div class="port-img" :style="{ backgroundImage: item.bg }">
              <div class="port-info">
                <div class="port-stats">
                </div>
                <span class="port-cat">{{ item.cat }}</span>
                <h4>{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ + CTA ═══════════════ -->
    <section class="faq-cta-sec">
      <div class="wrap">
        <div class="faq-cta-grid">
          <div class="faq-col">
            <h4 class="faq-col-title">الأسئلة الشائعة</h4>
            <div class="faq-item" v-for="(faq, idx) in faqs" :key="idx">
              <div class="faq-q" @click="activeFaq = activeFaq === idx ? null : idx">
                <span>{{ faq.q }}</span>
                <span class="faq-icon">{{ activeFaq === idx ? '−' : '+' }}</span>
              </div>
              <div class="faq-a" v-show="activeFaq === idx"><p>{{ faq.a }}</p></div>
            </div>
          </div>

          <div class="cta-col">
            <div class="cta-box">
              <div class="cta-content">
                <h3>جاهز للارتقاء بحساباتك؟</h3>
                <p>دعنا نبدأ معاً. نقدم لك حلولاً مبتكرة تساعدك على تحقيق أهدافك الرقمية.</p>
                <div class="cta-actions">
                  <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
                  <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
                </div>
              </div>
              <div class="cta-icon">
                <div class="cta-phone-mockup"><span>📱</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeFaq = ref(null)

const icons = {
  design: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  ads: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12h16M12 4v16M4 9h16M8 15h8"/><circle cx="12" cy="12" r="10"/></svg>`,
  group: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  publish: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
  content: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  strategy: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M22 12h-4M12 20v4M4 12H2M20 12h2M6 6l2 2M18 18l-2-2M6 18l2-2M18 6l-2 2"/></svg>`,
  growth: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  measure: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="3" height="18" rx="1"/><rect x="7" y="9" width="3" height="13" rx="1"/><rect x="13" y="2" width="3" height="20" rx="1"/><rect x="19" y="12" width="3" height="10" rx="1"/></svg>`,
  gears: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  target: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="1"/></svg>`,
  glass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  hand: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 11V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4M12 11V3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4M6 11V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6a8 8 0 0 0 16 0v-4"/></svg>`
}

const services = [
  { title: 'التصميم والتطوير', desc: 'تصميم وتطوير هويات تجارية وتجارب رقمية مبتكرة', icon: icons.design },
  { title: 'الإعلانات الممولة', desc: 'إدارة حملات إعلانية على المنصات الأكثر تأثيراً', icon: icons.ads },
  { title: 'إدارة المجموعات', desc: 'إدارة التفاعل وبناء مجتمع قوي حول علامتك', icon: icons.group },
  { title: 'النشر والإدارة', desc: 'جدولة المحتوى وتنظيم التواصل اليومي', icon: icons.publish },
  { title: 'صناعة المحتوى', desc: 'إنتاج محتوى إبداعي جذاب بالصور والفيديو', icon: icons.content },
  { title: 'استراتيجية التسويق', desc: 'وضع خطط استراتيجية لتحقيق أهدافك التسويقية', icon: icons.strategy },
]

const process = [
  { title: 'النمو المستمر', icon: icons.growth },
  { title: 'قياس النتائج', icon: icons.measure },
  { title: 'التنفيذ والإدارة', icon: icons.gears },
  { title: 'استراتيجية متخصصة', icon: icons.target },
  { title: 'تحليل المنافسين', icon: icons.glass },
  { title: 'دراسة السوق', icon: icons.hand },
]

const stats = [
  { value: '+300%', label: 'زيادة في المبيعات' },
  { value: '+250%', label: 'نمو في المتابعين' },
  { value: '+200%', label: 'زيادة في الزيارات' },
  { value: '+150%', label: 'نمو في المشاريع' },
]

const portfolio = [
  {  bg: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("src/assets/restaurant.png")' },
  {  bg: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("src/assets/clinic.png")' },
  {  bg: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("src/assets/hotel.png")' },
  {  bg: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("src/assets/construction.png")' },
]

const faqs = [
  { q: 'ما هي الخدمات التي تقدمونها؟', a: 'نقدم مجموعة من الخدمات الرقمية المتكاملة مثل إدارة الحسابات، الإعلانات الممولة، والتصميم الجرافيكي.' },
  { q: 'كم تكلفة بناء موقع إلكتروني؟', a: 'تختلف التكلفة حسب حجم الموقع واحتياجاتك. تواصل معنا للحصول على عرض سعر دقيق.' },
  { q: 'هل تقدمون خدماتكم عن بعد؟', a: 'نعم، نقدم خدماتنا عن بعد للعملاء في جميع أنحاء العالم.' },
]
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

/* ═══ HERO ═══ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url('../assets/hero-bg.png');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 100px 0 80px;
}
.hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: rgba(255, 255, 255, 0.75);
}
.glow {
  position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2;
}
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.12); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.08); }

.hero-container {
  position: relative; z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}
.hero-content { max-width: 700px; }
.hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.2; margin-bottom: 16px; color: var(--gray-800); }
.gold-gradient { background: linear-gradient(to right, #f8b101, #e09d00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-desc { font-size: 16px; color: var(--gray-700); line-height: 1.8; margin-bottom: 24px; }

.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
.btn-hero-gold, .btn-hero-outline { display: inline-flex; align-items: center; justify-content: center; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; }
.btn-hero-gold { background: var(--gold); color: #fff; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4); }
.btn-hero-gold:hover { background: #e09d00; transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.6); }
.btn-hero-outline { background: transparent; color: var(--gray-800); border-color: var(--gray-200); }
.btn-hero-outline:hover { background: var(--gray-50); border-color: var(--gold); color: var(--gold); transform: translateY(-3px); }

/* ═══ PACKS ═══ */
.packs-section { background: var(--white); }
.packs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
.pack-card {
  background: var(--white); border: 1px solid var(--gray-200); border-radius: 20px; padding: 40px 30px;
  text-align: center; transition: all 0.3s ease; position: relative; display: flex; flex-direction: column;
}
.pack-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--gold); }
.pack-card.popular { border-color: var(--gold); background: #fffbf0; transform: scale(1.02); }
.pack-badge { font-size: 36px; margin-bottom: 10px; }
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

/* ═══ SERVICES ═══ */
.services-section { background: var(--gray-50); color: var(--gray-800); }
.services-6-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.svc-card { background: var(--white); padding: 32px 24px; border-radius: 16px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); transition: all 0.3s ease; border: 1px solid var(--gray-200); }
.svc-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08); border-color: var(--gold); }
.svc-icon-wrap { display: flex; align-items: center; justify-content: center; width: 64px; height: 64px; margin: 0 auto 16px; border-radius: 12px; background: #fef3c7; color: var(--gold); }
.svc-icon-wrap svg { width: 32px; height: 32px; }
.svc-card h4 { font-size: 18px; font-weight: 700; color: var(--gray-800); margin-bottom: 8px; }
.svc-desc { font-size: 14px; color: var(--gray-600); line-height: 1.6; }

/* ═══ PROCESS ═══ */
.process-sec { background: var(--white); padding: 80px 0; border-bottom: 1px solid var(--gray-200); }
.process-steps { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.step-item { flex: 1; min-width: 140px; position: relative; text-align: center; }
.step-content { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.step-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(248, 177, 1, 0.1); display: flex; align-items: center; justify-content: center; color: var(--gold); transition: all 0.3s; }
.step-item:hover .step-icon { background: rgba(248, 177, 1, 0.2); transform: scale(1.1); }
.step-icon svg { width: 20px; height: 20px; }
.step-item h5 { font-size: 14px; font-weight: 600; color: var(--gray-700); }
.step-line { width: 100%; height: 2px; background: rgba(248, 177, 1, 0.25); margin-top: 4px; position: absolute; top: 24px; left: 50%; z-index: -1; }

/* ═══ STATS ═══ */
.stats-sec { background: var(--gray-50); padding: 60px 0 80px; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.stat-box { text-align: center; padding: 30px 16px; border-radius: 16px; border: 1px solid var(--gray-200); background: var(--white); transition: all 0.3s; }
.stat-box:hover { border-color: var(--gold); transform: translateY(-4px); }
.stat-val { display: block; font-size: 36px; font-weight: 800; color: var(--gold); margin-bottom: 6px; }
.stat-lbl { font-size: 14px; color: var(--gray-600); }

/* ═══ PORTFOLIO ═══ */
.portfolio-sec { background: var(--white); }
.portfolio-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.port-item { border-radius: 16px; overflow: hidden; position: relative; aspect-ratio: 4/5; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); transition: all 0.3s ease; }
.port-item:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15); }
.port-img { width: 100%; height: 100%; background-size: cover; background-position: center; position: relative; display: flex; align-items: flex-end; }
.port-info { position: relative; z-index: 2; padding: 20px; width: 100%; color: #fff; }
.port-stats { display: flex; gap: 20px; margin-bottom: 12px; }
.port-stats strong { font-size: 20px; font-weight: 800; }
.port-stats small { font-size: 12px; color: #eee; display: block; }
.port-cat { display: inline-block; padding: 4px 12px; background: var(--gold); color: #fff; font-size: 12px; font-weight: 700; border-radius: 50px; margin-bottom: 8px; }
.port-info h4 { font-size: 16px; font-weight: 700; margin: 0; }

/* ═══ FAQ + CTA ═══ */
.faq-cta-sec { padding: 80px 0; background: var(--gray-50); }
.faq-cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.faq-col-title { font-size: 20px; font-weight: 700; margin-bottom: 24px; color: var(--gray-800); }
.faq-item { border-bottom: 1px solid var(--gray-200); padding: 16px 0; }
.faq-q { display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-size: 15px; font-weight: 600; color: var(--gray-700); transition: color 0.3s; }
.faq-q:hover { color: var(--gold); }
.faq-icon { color: var(--gold); font-size: 20px; }
.faq-a { padding-top: 12px; }
.faq-a p { color: var(--gray-600); font-size: 14px; line-height: 1.8; }
.cta-box { background: var(--white); border-radius: 16px; padding: 32px; display: flex; align-items: center; gap: 24px; border: 1px solid var(--gray-200); position: relative; box-shadow: 0 8px 30px rgba(0,0,0,0.03); }
.cta-content { flex: 1; }
.cta-content h3 { font-size: 24px; font-weight: 800; color: var(--gray-800); margin-bottom: 12px; }
.cta-content p { color: var(--gray-600); font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
.cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.cta-icon { flex-shrink: 0; }
.cta-phone-mockup { width: 80px; height: 120px; background: var(--gray-50); border-radius: 16px; border: 2px solid var(--gray-200); display: flex; align-items: center; justify-content: center; font-size: 32px; transform: rotate(6deg); box-shadow: 0 8px 24px rgba(0,0,0,0.05); }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .packs-grid { grid-template-columns: repeat(2, 1fr); }
  .services-6-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .faq-cta-grid { grid-template-columns: 1fr; }
  .cta-box { flex-direction: column; text-align: center; }
  .cta-actions { justify-content: center; }
}
@media (max-width: 640px) {
  .packs-grid { grid-template-columns: 1fr; }
  .services-6-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr; }
  .portfolio-grid { grid-template-columns: 1fr; }
  .process-steps { flex-direction: column; align-items: center; }
  .step-line { display: none; }
  .cta-actions { flex-direction: column; }
}
</style>