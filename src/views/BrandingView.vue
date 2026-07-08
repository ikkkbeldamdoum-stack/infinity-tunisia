<!-- src/views/BrandingView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            تصميم <span class="gold-gradient">جرافيك</span> والمطبوعات
          </h1>
          <p class="hero-desc">
            إبداع بصري يعكس هوية علامتك
          </p>
          <div class="hero-actions">
            <RouterLink to="/devis" class="btn-hero-gold">اطلب عرض سعر</RouterLink>
            <RouterLink to="/contact" class="btn-hero-outline">تواصل معنا</RouterLink>
          </div>
        </div>

        <div class="hero-visual">
          <div class="design-icon">
            <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 19l7-7 3 3-7 7-3-3z"/>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
              <path d="M2 2l7.586 7.586"/>
              <circle cx="11" cy="11" r="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none"><path d="M0 60C240 120 480 0 720 40C960 80 1200 0 1440 50L1440 120L0 120Z" fill="#fafafa"/></svg>
      </div>
    </section>

    <!-- ═══════════════ OFFRES ═══════════════ -->
    <section class="section packs-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">عروض الخدمات</span>
          <h2 class="sec-title">التصميم الجرافيكي</h2>
          <p class="sec-desc">إبداع بصري يعكس هوية علامتك</p>
        </div>

        <div class="packs-grid">

          <!-- 1. تصميم منشور (Social Media) -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
                <circle cx="12" cy="12" r="4" fill="#f8b101" stroke="none" opacity="0.1"/>
              </svg>
            </div>
            <h3 class="pack-name">تصميم منشور</h3>
            <p class="pack-price">40 DT</p>
            <ul class="pack-features">
              <li>تصميم منشور واحد</li>
              <li>جودة عالية</li>
              <li>تسليم خلال 24 ساعة</li>
            <button @click="handleDesignClick('تصميم منشور')" class="btn-hero-gold full-width">احصل على العرض
</button>
</ul>

          </div>

          <!-- 2. Pack 10 منشورات (الأكثر طلباً) -->
          <div class="pack-card popular">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="9"/>
                <line x1="9" y1="13" x2="15" y2="13"/>
                <line x1="9" y1="17" x2="12" y2="17"/>
              </svg>
            </div>
            <h3 class="pack-name">باقة 10 منشورات</h3>
            <p class="pack-price">300 DT</p>
            <ul class="pack-features">
              <li>10 تصاميم</li>
              <li>موضوع موحد أو متنوع</li>
              <li>تعديلات مجانية</li>
            </ul>
            <div class="popular-tag">الأكثر طلباً</div>
            <RouterLink :to="{ name: 'contact', query: { pack: 'باقة 10 منشورات' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 3. Flyer -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 class="pack-name">Flyer</h3>
            <p class="pack-price">100 DT</p>
            <ul class="pack-features">
              <li>Formats : A3 - A4 - A5 - A6</li>
              <li>تصميم فلاير</li>
              <li>جاهز للطباعة</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Flyer' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 4. Catalogue PDF -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3 class="pack-name">Catalogue PDF</h3>
            <p class="pack-price">ابتداءً من 180 DT</p>
            <ul class="pack-features">
              <li>تصميم كتالوج احترافي</li>
              <li>يشمل صور ونصوص</li>
              <li>جاهز للطباعة أو النشر الرقمي</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Catalogue PDF' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 5. Menu Restaurant -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <h3 class="pack-name">Menu Restaurant</h3>
            <p class="pack-price">150 DT</p>
            <ul class="pack-features">
              <li>تصميم قائمة مطعم</li>
              <li>تصميم جذاب ومناسب</li>
              <li>جاهز للطباعة</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Menu Restaurant' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 6. Logo Design -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <h3 class="pack-name">Logo Design</h3>
            <p class="pack-price">120 DT</p>
            <ul class="pack-features">
              <li>تصميم شعار</li>
              <li>عدة مقترحات</li>
              <li>تعديلات مجانية</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'Logo Design' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

          <!-- 7. Visual Identity -->
          <div class="pack-card">
            <div class="pack-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f8b101" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 class="pack-name">الهوية البصرية</h3>
            <p class="pack-price">300 DT / مشروع</p>
            <ul class="pack-features">
              <li>تصميم الشعار</li>
              <li>نظام الألوان</li>
              <li>الخطوط</li>
              <li>المطبوعات الأساسية</li>
              <li>دليل استخدام الهوية</li>
            </ul>
            <RouterLink :to="{ name: 'contact', query: { pack: 'الهوية البصرية' } }" class="btn-hero-gold full-width">احصل على العرض</RouterLink>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════ CARACTÉRISTIQUES / المميزات ═══════════════ -->
    <section class="section features-section">
      <div class="wrap">
        <div class="section-head center">
          <span class="sec-tag">المميزات</span>
          <h2 class="sec-title">لماذا خدماتنا؟</h2>
        </div>
        <div class="features-grid">
          <div class="feature-item" v-for="f in features" :key="f.label">
            <div class="feature-icon" v-html="f.icon"></div>
            <span class="feature-label">{{ f.label }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<!-- src/views/BrandingView.vue -->
<script setup>
import { useRouter } from 'vue-router'
import { useAdminStorage } from '../composables/useAdminStorage'

const router = useRouter()
const { saveMessage } = useAdminStorage()

function handleDesignClick(packName) {
  saveMessage({
    name: 'Visiteur site',
    email: '',
    phone: '',
    pack: packName,
    message: `Demande d'information pour : ${packName}`,
    source: 'branding'
  })
  router.push({ name: 'contact', query: { pack: packName } })
}

// ═══ Remplacer tous les RouterLink par des buttons ═══
// <RouterLink :to="{ name: 'contact', query: { pack: 'تصميم منشور' } }" class="btn-hero-gold full-width">
//   احصل على العرض
// </RouterLink>
// 
// Par :
// <button @click="handleDesignClick('تصميم منشور')" class="btn-hero-gold full-width">
//   احصل على العرض
// </button>

const features = [
  { 
    label: 'جودة عالية وإبداع بلا حدود', 
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>` 
  },
  { 
    label: 'فرص تعديلات مفتوحة', 
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` 
  },
  { 
    label: 'تصاميم احترافية تعكس هويتك', 
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 16l4-4 4 4 4-6"/></svg>` 
  },
  { 
    label: 'إلتزام بالمواعيد ونشر منتظم', 
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` 
  }
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
  display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center;
  width: 100%; max-width: 1240px; margin: 0 auto; padding: 0 24px;
}
.hero-content { text-align: right; }
.hero-title { font-size: clamp(36px, 5vw, 56px); font-weight: 800; line-height: 1.2; margin-bottom: 16px; color: var(--gray-800); }
.gold-gradient { background: linear-gradient(to right, #f8b101, #e09d00); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-desc { font-size: 17px; color: var(--gray-700); line-height: 1.8; margin-bottom: 24px; max-width: 500px; }

.hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-hero-gold, .btn-hero-outline { display: inline-flex; align-items: center; justify-content: center; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 15px; text-decoration: none; transition: all 0.3s ease; cursor: pointer; border: 1px solid transparent; }
.btn-hero-gold { background: var(--gold); color: #fff; box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4); }
.btn-hero-gold:hover { background: #e09d00; transform: translateY(-3px); box-shadow: 0 8px 30px rgba(248, 177, 1, 0.6); }
.btn-hero-outline { background: transparent; color: var(--gray-800); border-color: var(--gray-200); }
.btn-hero-outline:hover { background: var(--gray-50); border-color: var(--gold); color: var(--gold); transform: translateY(-3px); }

.hero-visual { display: flex; align-items: center; justify-content: center; }
.design-icon { color: rgba(248, 177, 1, 0.6); animation: float 4s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.hero-wave { position: absolute; bottom: 0; left: 0; right: 0; z-index: 3; pointer-events: none; }
@media (max-width: 900px) { .hero-container { grid-template-columns: 1fr; } .hero-visual { display: none; } }

/* ═══ PACKS ═══ */
.packs-section { background: var(--gray-50); }
.packs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-top: 40px; }
@media (max-width: 1024px) { .packs-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .packs-grid { grid-template-columns: 1fr; } }

.pack-card {
  background: var(--white); border: 1px solid var(--gray-200); border-radius: 20px; padding: 30px 24px;
  text-align: center; transition: all 0.3s ease; position: relative; display: flex; flex-direction: column;
}
.pack-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); border-color: var(--gold); }
.pack-card.popular { border-color: var(--gold); background: #fffbf0; }

/* Remplacement du style image par le style icône SVG */
.pack-icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: #ffffff;
  border: 2px solid #f8b101;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.pack-card:hover .pack-icon-wrapper {
  transform: scale(1.08);
  box-shadow: 0 8px 16px rgba(248, 177, 1, 0.25);
}

.pack-name { font-size: 18px; font-weight: 800; color: var(--gray-800); margin-bottom: 8px; }
.pack-price { font-size: 22px; font-weight: 800; color: var(--gold); margin-bottom: 24px; direction: ltr; }
.pack-features { list-style: none; padding: 0; text-align: right; margin-bottom: 24px; flex: 1; }
.pack-features li { padding: 6px 0; border-bottom: 1px solid var(--gray-200); color: var(--gray-600); font-size: 13px; position: relative; padding-right: 18px; }
.pack-features li::before { content: "✓"; color: var(--gold); position: absolute; right: 0; font-weight: bold; }
.popular-tag {
  background: var(--gold); color: #fff; font-size: 12px; font-weight: 700; padding: 5px 14px;
  border-radius: 50px; margin-bottom: 16px; display: inline-block; position: absolute;
  top: -14px; left: 50%; transform: translateX(-50%);
}
.btn-hero-gold.full-width { width: 100%; margin-top: auto; font-size: 14px; padding: 12px 20px; }

/* ═══ FEATURES ═══ */
.features-section { background: var(--white); }
.features-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; }
.feature-item { text-align: center; max-width: 150px; }
.feature-icon { width: 64px; height: 64px; background: #fef3c7; color: var(--gold); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
.feature-label { font-weight: 600; font-size: 14px; color: var(--gray-700); }
</style>