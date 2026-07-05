<!-- src/components/CarteNfcPricingModern.vue -->
<template>
  <div class="nfc-pricing-wrapper">
    <!-- ═══ SÉLECTEUR QUANTITÉ ═══ -->
    <div class="qty-container">
      <span class="qty-hint">عدد البطاقات</span>
      <div class="qty-selector">
        <button
          class="qty-btn"
          :class="{ active: quantity === 1 }"
          @click="quantity = 1"
        >
          <span class="qty-value">01</span>
          <span class="qty-label">بطاقة واحدة</span>
        </button>
        <button
          class="qty-btn"
          :class="{ active: quantity === 2 }"
          @click="quantity = 2"
        >
          <span class="qty-save-badge">وفر أكثر</span>
          <span class="qty-value">02</span>
          <span class="qty-label">بطاقتين</span>
        </button>
        <div 
          class="qty-background" 
          :class="{ 'position-right': quantity === 2 }"
        ></div>
      </div>
    </div>

    <!-- ═══ GRILLE DES OFFRES ═══ -->
    <div class="pricing-grid">
      <!-- Plan Standard -->
      <div 
        class="pricing-card"
        :class="{ 'is-hovered': hoveredCard === 'standard' }"
        @mouseenter="hoveredCard = 'standard'"
        @mouseleave="hoveredCard = null"
      >
        <div class="card-inner">
          <div class="card-header">
            <div class="plan-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <path d="M9 9h6M9 13h4M9 17h2"/>
              </svg>
            </div>
            <div>
              <h3 class="plan-name">الباقة الأساسية</h3>
              <p class="plan-desc">للاستخدام الشخصي</p>
            </div>
          </div>

          <div class="price-section">
            <div class="price-main">
              <span class="price-currency">د.ت</span>
              <span class="price-amount">{{ displayedPrices.standard }}</span>
            </div>
            <span class="price-period">{{ priceLabel }}</span>
          </div>

          <div class="divider"></div>

          <ul class="features-list">
            <li v-for="feat in standardFeatures" :key="feat" class="feature-item">
              <span class="feature-check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <RouterLink 
            :to="standardLink" 
            class="cta-btn cta-outline"
          >
            <span>اختر هذه الباقة</span>
            <span class="btn-arrow">←</span>
          </RouterLink>
        </div>
      </div>

      <!-- Plan Premium -->
      <div 
        class="pricing-card featured"
        :class="{ 'is-hovered': hoveredCard === 'premium' }"
        @mouseenter="hoveredCard = 'premium'"
        @mouseleave="hoveredCard = null"
      >
        <div class="popular-tag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>الأكثر طلباً</span>
        </div>
        
        <div class="card-inner">
          <div class="card-header">
            <div class="plan-icon-wrapper premium-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <h3 class="plan-name">الباقة المميزة</h3>
              <p class="plan-desc">للعلامات التجارية والمحترفين</p>
            </div>
          </div>

          <div class="price-section">
            <div class="price-main">
              <span class="price-currency">د.ت</span>
              <span class="price-amount premium-price">{{ displayedPrices.premium }}</span>
            </div>
            <span class="price-period">{{ priceLabel }}</span>
          </div>

          <div class="divider"></div>

          <ul class="features-list">
            <li v-for="feat in premiumFeatures" :key="feat" class="feature-item">
              <span class="feature-check premium-check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span>{{ feat }}</span>
            </li>
          </ul>

          <RouterLink 
            :to="premiumLink" 
            class="cta-btn cta-primary"
          >
            <span>اختر هذه الباقة</span>
            <span class="btn-arrow">←</span>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- ═══ TRUST BADGES ═══ -->
    <div class="trust-section">
      <div class="trust-item">
        <span class="trust-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </span>
        <div>
          <strong>ضمان الجودة</strong>
          <span>بطاقات أصلية 100%</span>
        </div>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <span class="trust-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </span>
        <div>
          <strong>توصيل سريع</strong>
          <span>خلال 3-5 أيام</span>
        </div>
      </div>
      <div class="trust-divider"></div>
      <div class="trust-item">
        <span class="trust-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="1" y="4" width="22" height="16" rx="2"/>
            <path d="M1 10h22"/>
          </svg>
        </span>
        <div>
          <strong>دفع آمن</strong>
          <span>طرق متعددة</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const quantity = ref(1)
const hoveredCard = ref(null)

const priceStandard = ref(0)
const pricePremium = ref(0)

const standardFeatures = [
  'بطاقة NFC Know Me',
  'بروفايل رقمي أساسي',
  'روابط التواصل الاجتماعي',
  'صورة شخصية وشعار',
  'موقع خرائط جوجل',
  'تصميم قياسي احترافي'
]

const premiumFeatures = [
  'بطاقة NFC Know Me بريميوم',
  'كتالوج رقمي تفاعلي',
  'سيرة ذاتية متكاملة',
  'بروفايل رقمي محترف',
  'ملفات PDF قابلة للتحميل',
  'تطبيق knowme-services',
  'تصميم مخصص بالكامل',
  'دعم فني متميز 24/7',
  'تحليلات الزوار'
]

const basePrices = {
  standard: { 1: 75, 2: 125 },
  premium: { 1: 220, 2: 270 }
}

const priceLabel = computed(() =>
  quantity.value === 1 ? '/ للبطاقة الواحدة' : '/ السعر الإجمالي لبطاقتين'
)

const targetPrices = computed(() => ({
  standard: basePrices.standard[quantity.value],
  premium: basePrices.premium[quantity.value]
}))

const displayedPrices = computed(() => ({
  standard: priceStandard.value,
  premium: pricePremium.value
}))

// ═══ LIENS VERS LE FORMULAIRE DE CONTACT ═══
const standardLink = computed(() => ({
  name: 'contact',
  query: {
    service: 'nfc-standard',
    quantite: quantity.value,
    prix: basePrices.standard[quantity.value]
  }
}))

const premiumLink = computed(() => ({
  name: 'contact',
  query: {
    service: 'nfc-premium',
    quantite: quantity.value,
    prix: basePrices.premium[quantity.value]
  }
}))

const animateValue = (target, current) => {
  const step = (target - current) / 10
  if (Math.abs(step) < 0.5) return target
  return current + step
}

let animationFrame
const startAnimation = () => {
  const targets = targetPrices.value

  const animate = () => {
    priceStandard.value = Math.round(animateValue(targets.standard, priceStandard.value))
    pricePremium.value = Math.round(animateValue(targets.premium, pricePremium.value))

    if (priceStandard.value !== targets.standard || pricePremium.value !== targets.premium) {
      animationFrame = requestAnimationFrame(animate)
    }
  }

  if (animationFrame) cancelAnimationFrame(animationFrame)
  animate()
}

watch(quantity, startAnimation)

onMounted(() => {
  priceStandard.value = basePrices.standard[1]
  pricePremium.value = basePrices.premium[1]
})
</script>

<style scoped>
/* ═══ DESIGN SYSTEM (cohérent avec PrintDesignView) ═══ */
.nfc-pricing-wrapper {
  --gold: #f8b101;
  --gold-light: #ffd04b;
  --gold-dark: #db9c00;
  --navy: #0c1230;
  --bg: #ffffff;
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
  direction: rtl;
}

/* ═══ SÉLECTEUR QUANTITÉ ═══ */
.qty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
}

.qty-hint {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 1px;
}

.qty-selector {
  position: relative;
  display: inline-flex;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 60px;
  padding: 5px;
  box-shadow: var(--shadow-sm);
}

.qty-btn {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 32px;
  border: none;
  border-radius: 60px;
  background: transparent;
  color: var(--text-light);
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s var(--ease);
  min-width: 120px;
  gap: 2px;
}

.qty-btn.active {
  color: var(--text);
}

.qty-value {
  font-size: 22px;
  font-weight: 900;
  line-height: 1;
  transition: all 0.3s var(--ease);
}

.qty-label {
  font-size: 11px;
  opacity: 0.7;
}

.qty-save-badge {
  position: absolute;
  top: -8px;
  right: 10px;
  background: var(--gold);
  color: #1a1a1a;
  font-size: 9px;
  font-weight: 800;
  padding: 3px 10px;
  border-radius: 50px;
  z-index: 3;
  box-shadow: 0 2px 8px rgba(248, 177, 1, 0.3);
}

.qty-background {
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 5px;
  width: calc(50% - 5px);
  height: calc(100% - 10px);
  background: var(--gold);
  border-radius: 60px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(248, 177, 1, 0.35);
}

.qty-background.position-right {
  transform: translateX(100%);
}

/* ═══ GRILLE DES OFFRES ═══ */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 48px;
}

.pricing-card {
  position: relative;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all 0.4s var(--ease);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.pricing-card:hover,
.pricing-card.is-hovered {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
  border-color: rgba(248, 177, 1, 0.3);
}

.pricing-card.featured {
  border-color: var(--gold);
  background: linear-gradient(135deg, #fffcf0 0%, #ffffff 100%);
  box-shadow: 0 8px 40px rgba(248, 177, 1, 0.12);
  transform: scale(1.02);
}

.pricing-card.featured:hover,
.pricing-card.featured.is-hovered {
  transform: scale(1.02) translateY(-8px);
  box-shadow: 0 12px 50px rgba(248, 177, 1, 0.18);
}

.popular-tag {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--gold);
  color: #1a1a1a;
  font-size: 12px;
  font-weight: 800;
  padding: 6px 20px;
  border-radius: 50px;
  box-shadow: 0 4px 16px rgba(248, 177, 1, 0.4);
  white-space: nowrap;
  z-index: 2;
}

.popular-tag svg {
  width: 14px;
  height: 14px;
}

.card-inner {
  padding: 40px 32px 34px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.plan-icon-wrapper {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: rgba(248, 177, 1, 0.1);
  color: var(--gold-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s var(--ease);
}

.premium-icon {
  background: rgba(248, 177, 1, 0.2);
  color: var(--gold-dark);
}

.pricing-card:hover .plan-icon-wrapper {
  transform: rotate(-5deg) scale(1.08);
}

.plan-name {
  font-size: 20px;
  font-weight: 800;
  color: var(--text);
  margin: 0;
}

.plan-desc {
  font-size: 13px;
  color: var(--text-muted);
  margin: 4px 0 0;
}

/* Prix */
.price-section {
  margin-bottom: 24px;
}

.price-main {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 4px;
}

.price-currency {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-muted);
}

.price-amount {
  font-size: 52px;
  font-weight: 900;
  color: var(--text);
  line-height: 1;
  transition: all 0.3s var(--ease);
}

.premium-price {
  color: var(--gold-dark);
}

.price-period {
  display: block;
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 4px;
}

.divider {
  height: 1px;
  background: var(--border);
  margin-bottom: 24px;
}

/* Features */
.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: right;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 14px;
  color: var(--text-light);
  border-bottom: 1px solid var(--border);
  transition: all 0.25s var(--ease);
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-item:hover {
  color: var(--text);
  transform: translateX(-4px);
}

.feature-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(248, 177, 1, 0.12);
  color: var(--gold-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.premium-check {
  background: rgba(248, 177, 1, 0.2);
}

/* CTA */
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 24px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s var(--ease);
  cursor: pointer;
  font-family: inherit;
}

.cta-primary {
  background: var(--gold);
  color: #1a1a1a;
  border: 1px solid transparent;
  box-shadow: 0 4px 20px rgba(248, 177, 1, 0.35);
}

.cta-primary:hover {
  background: var(--gold-dark);
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(248, 177, 1, 0.5);
}

.cta-outline {
  background: var(--bg);
  color: var(--text);
  border: 1px solid var(--border);
  box-shadow: none;
}

.cta-outline:hover {
  border-color: var(--gold);
  color: var(--gold-dark);
  background: var(--bg);
  box-shadow: var(--shadow-sm);
  transform: translateY(-3px);
}

.btn-arrow {
  transition: transform 0.3s var(--ease);
}

.cta-btn:hover .btn-arrow {
  transform: translateX(-4px);
}

/* ═══ TRUST SECTION ═══ */
.trust-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px 40px;
  box-shadow: var(--shadow-sm);
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.trust-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(248, 177, 1, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold-dark);
  flex-shrink: 0;
}

.trust-item strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}

.trust-item span {
  font-size: 12px;
  color: var(--text-muted);
}

.trust-divider {
  width: 1px;
  height: 32px;
  background: var(--border);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 968px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto 40px;
  }
  
  .pricing-card.featured {
    transform: scale(1);
  }
  
  .pricing-card.featured:hover,
  .pricing-card.featured.is-hovered {
    transform: translateY(-8px);
  }
  
  .trust-section {
    flex-direction: column;
    gap: 16px;
    padding: 24px;
  }
  
  .trust-divider {
    width: 80%;
    height: 1px;
  }
  
  .qty-btn {
    padding: 10px 20px;
    min-width: auto;
  }
}

@media (max-width: 540px) {
  .qty-btn {
    font-size: 13px;
    padding: 8px 16px;
  }
  
  .price-amount {
    font-size: 42px;
  }
  
  .card-inner {
    padding: 30px 20px;
  }
}
</style>