<template>
  <header dir="rtl" class="nav" :class="{ scrolled: isScrolled }">

    <!-- ═══════════════ LIGNE PRINCIPALE ═══════════════ -->
    <div class="wrap main-row">
      <RouterLink to="/" class="brand" @click="closeAll">
        <img src="../assets/logo.jpg" alt="Infinity" class="brand-logo" />
      </RouterLink>

      <form class="search-bar" @submit.prevent="onSearch">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input v-model="searchQuery" type="text" placeholder="ابحث عن منتجك" />
        <button type="submit" class="search-submit">
          <span class="search-submit-text">بحث</span>
          <svg class="search-submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
      </form>

      <div class="main-actions">
        <RouterLink to="/devis" class="btn btn-gold cta-desktop" @click="closeAll">
          <span class="btn-text">اطلب عرض سعر</span>
          <span class="btn-shine"></span>
        </RouterLink>
        <RouterLink to="/rendez-vous" class="btn btn-outline cta-desktop" @click="closeAll">
          <span class="btn-text">احجز موعدا</span>
          <span class="btn-hover-effect"></span>
        </RouterLink>

        <a href="tel:+21671000000" class="help-link cta-desktop">
          <span class="help-label">بحاجة الى مساعدة؟</span>
          <span class="help-phone">71000000</span>
        </a>

        <button class="icon-btn cta-desktop" type="button" aria-label="حسابي">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c1.8-4 5-6 8-6s6.2 2 8 6" />
          </svg>
        </button>
      </div>

      <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="فتح القائمة">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- ═══════════════ RANGÉE CATÉGORIES + MEGA-MENU ═══════════════ -->
    <nav class="cat-row" :class="{ open: menuOpen }">
      <div class="wrap cat-row-inner">

        <div
          v-for="cat in categories"
          :key="cat.key"
          class="cat-item"
          @mouseenter="openCat = cat.key"
          @mouseleave="openCat = null"
        >
          <button
            type="button"
            class="cat-trigger"
            :class="{ active: openCat === cat.key || mobileOpenCat === cat.key }"
            @click="toggleCatMobile(cat.key)"
          >
            {{ cat.label }}
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <transition name="mega">
            <div class="mega-menu" v-show="openCat === cat.key || mobileOpenCat === cat.key">
              <div class="mega-columns">
                <div class="mega-col" v-for="col in cat.columns" :key="col.title">
                  <h4>{{ col.title }}</h4>
                  <ul>
                    <li v-for="item in col.items" :key="item.to">
                      <RouterLink :to="item.to" @click="closeAll">
                        {{ item.label }}
                        <span v-if="item.badge" class="badge">{{ item.badge }}</span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mega-promo">
                <div class="mega-promo-visual">
                  <span class="mega-promo-emoji">{{ cat.promo.emoji }}</span>
                </div>
                <p>{{ cat.promo.text }}</p>
                <RouterLink :to="cat.promo.to" class="mega-promo-link" @click="closeAll">
                  اكتشف الآن
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </RouterLink>
              </div>
            </div>
          </transition>
        </div>

        <RouterLink to="/nos-services" class="cat-item cat-link special" @click="closeAll">
          <span class="sparkle">✦</span> استوديو التصميم
        </RouterLink>
        <RouterLink to="/nos-services" class="cat-item cat-link" @click="closeAll">خدماتنا</RouterLink>
        <RouterLink to="/qui-sommes-nous" class="cat-item cat-link" @click="closeAll">من نحن</RouterLink>
        <RouterLink to="/avis" class="cat-item cat-link" @click="closeAll">آراء العملاء</RouterLink>

        <div class="cta-mobile-group">
          <RouterLink to="/devis" class="btn btn-gold" @click="closeAll">اطلب عرض سعر</RouterLink>
          <RouterLink to="/rendez-vous" class="btn btn-outline" @click="closeAll">احجز موعدا</RouterLink>
          <a href="tel:+21671000000" class="btn btn-outline">اتصل بنا: 71 000 000</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuOpen = ref(false)
const isScrolled = ref(false)
const openCat = ref(null)
const mobileOpenCat = ref(null)
const searchQuery = ref('')

const categories = [
  {
    key: 'imprimerie',
    label: 'الطباعة',
    columns: [
      {
        title: 'بطاقات وأوراق',
        items: [
          { label: 'بطاقات العمل', to: '/produit/business-cards' },
          { label: 'البروشورات', to: '/produit/brochures' },
          { label: 'الفلايرز', to: '/produit/flyers' },
          { label: 'الكتالوجات', to: '/produit/catalogues' },
        ],
      },
      {
        title: 'المطبوعات الإدارية',
        items: [
          { label: 'كرانيه الفواتير', to: '/produit/carnets-factures' },
          { label: 'الأختام المهنية', to: '/produit/cachets-professionnels' },
          { label: 'حافظات المستندات', to: '/produit/porte-documents' },
        ],
      },
    ],
    promo: { emoji: '🖨️', text: 'جودة طباعة احترافية وأسعار تنافسية', to: '/produit/flyers' },
  },
  {
    key: 'exterieure',
    label: 'الإشهار الخارجي',
    columns: [
      {
        title: 'اللافتات والبانرات',
        items: [
          { label: 'اللوحات الإشهارية', to: '/produit/signage' },
          { label: 'بانرات فينيل', to: '/produit/banners-vinyl' },
          { label: 'بافانات إشهارية', to: '/produit/baches-publicitaires' },
        ],
      },
      {
        title: 'الحوامل والواجهات',
        items: [
          { label: 'حوامل الملصقات', to: '/produit/porte-affiches' },
          { label: 'تلبيس السيارات', to: '/produit/habillage-vehicules' },
          { label: 'رول أب', to: '/produit/rollup' },
        ],
      },
    ],
    promo: { emoji: '🚗', text: 'صمّم واجهتك الإشهارية ولافتاتك بمقاسات كبيرة', to: '/produit/baches-publicitaires' },
  },
  {
    key: 'plv',
    label: 'PLV والأستاندات',
    columns: [
      {
        title: 'أنظمة العرض',
        items: [
          { label: 'رول أب', to: '/produit/rollup' },
          { label: 'حوامل الملصقات', to: '/produit/porte-affiches' },
          { label: 'حافظات المستندات', to: '/produit/porte-documents' },
        ],
      },
      {
        title: 'المكتب والتقويم',
        items: [{ label: 'التقاويم الإشهارية', to: '/produit/calendriers', badge: '2027' }],
      },
    ],
    promo: { emoji: '📐', text: 'حلول عرض جاهزة لمعارضك ونقاط بيعك', to: '/produit/rollup' },
  },
  {
    key: 'objets',
    label: 'الهدايا والتيشيرت',
    columns: [
      {
        title: 'الهدايا الإشهارية',
        items: [
          { label: 'الأكواب المخصصة', to: '/produit/mugs-personnalises' },
          { label: 'الأقلام الإشهارية', to: '/produit/stylos-publicitaires' },
          { label: 'ميداليات المفاتيح', to: '/produit/porte-cles' },
          { label: 'الدروع والجوائز', to: '/produit/trophees' },
        ],
      },
      {
        title: 'الملصقات والتقنية',
        items: [
          { label: 'ستيكرات وملصقات', to: '/produit/stickers-autocollants' },
          { label: 'بطاقات NFC', to: '/produit/cartes-nfc', badge: 'NEW' },
        ],
      },
    ],
    promo: { emoji: '🎁', text: 'هدايا وأدوات ترويجية تحمل هويتك', to: '/produit/mugs-personnalises' },
  },
]

function closeAll() {
  menuOpen.value = false
  openCat.value = null
  mobileOpenCat.value = null
}

function toggleCatMobile(key) {
  if (window.innerWidth > 860) return
  mobileOpenCat.value = mobileOpenCat.value === key ? null : key
}

function onSearch() {
  const q = searchQuery.value.trim()
  if (!q) return
  router.push({ path: '/nos-services', query: { q } })
  closeAll()
}

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* ═══════════════ ANIMATIONS KEYFRAMES ═══════════════ */
@keyframes shine {
  0% { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(200%) skewX(-15deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(224, 192, 132, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(224, 192, 132, 0); }
}

@keyframes sparkle-anim {
  0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.7; transform: scale(1.2) rotate(180deg); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes borderGlow {
  0%, 100% { border-color: var(--line); }
  50% { border-color: var(--gold); }
}

/* ═══════════════ BASE ═══════════════ */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--paper, #faf7f2);
  border-bottom: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav.scrolled {
  border-color: var(--line);
  box-shadow: 0 6px 30px -16px rgba(28, 27, 25, 0.2);
  backdrop-filter: blur(10px);
  background: rgba(250, 247, 242, 0.95);
}

/* ── Main row ── */
.main-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
}
.brand { 
  display: flex; 
  align-items: center; 
  flex-shrink: 0; 
  text-decoration: none;
  transition: transform 0.3s ease;
}
.brand:hover {
  transform: scale(1.05);
}
.brand-logo { 
  height: 46px; 
  width: auto; 
  display: block;
  transition: filter 0.3s ease;
}
.brand:hover .brand-logo {
  filter: brightness(1.1);
}

/* ── Search bar avec animation ── */
.search-bar {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border: 2px solid var(--line);
  border-radius: 999px;
  padding: 4px 6px 4px 16px;
  max-width: 560px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: borderGlow 3s ease-in-out infinite;
}
.search-bar:focus-within {
  border-color: var(--gold);
  box-shadow: 0 0 0 4px rgba(224, 192, 132, 0.15);
  transform: translateY(-1px);
}
.search-icon { 
  width: 18px; 
  height: 18px; 
  color: var(--ink-soft); 
  flex-shrink: 0;
  transition: color 0.3s ease;
}
.search-bar:focus-within .search-icon {
  color: var(--gold-deep);
}
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-family: inherit;
  color: var(--ink);
  padding: 8px 0;
}
.search-bar input::placeholder { 
  color: var(--ink-soft);
  transition: opacity 0.3s ease;
}
.search-bar:focus-within input::placeholder {
  opacity: 0.5;
}
.search-submit {
  flex-shrink: 0;
  background: var(--gold);
  color: var(--ink);
  border: none;
  border-radius: 999px;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.search-submit:hover { 
  filter: brightness(1.05);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(224, 192, 132, 0.3);
}
.search-submit:active {
  transform: translateY(0);
}
.search-submit-text {
  position: relative;
  z-index: 1;
}
.search-submit-icon {
  display: none;
}

/* ── Boutons avec animations ── */
.main-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}
.btn-text {
  position: relative;
  z-index: 1;
}

/* Bouton gold avec effet shine */
.btn-gold {
  background: linear-gradient(135deg, var(--gold-light, #e0c084), var(--gold));
  color: var(--ink);
  animation: pulse 2s ease-in-out infinite;
}
.btn-gold:hover { 
  filter: brightness(1.05);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(224, 192, 132, 0.4);
}
.btn-gold:active {
  transform: translateY(0);
}
.btn-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: shine 2s ease-in-out infinite;
}

/* Bouton outline avec effet hover */
.btn-outline {
  background: transparent;
  border-color: var(--line);
  color: var(--ink);
}
.btn-outline:hover { 
  border-color: var(--gold); 
  color: var(--gold-deep);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(224, 192, 132, 0.2);
}
.btn-outline:active {
  transform: translateY(0);
}
.btn-hover-effect {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--gold-light) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.btn-outline:hover .btn-hover-effect {
  opacity: 0.1;
}

.help-link {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  text-decoration: none;
  color: var(--ink);
  transition: transform 0.3s ease;
}
.help-link:hover {
  transform: translateY(-2px);
}
.help-label { 
  font-size: 11px; 
  color: var(--ink-soft);
  transition: color 0.3s ease;
}
.help-link:hover .help-label {
  color: var(--gold-deep);
}
.help-phone { 
  font-size: 13.5px; 
  font-weight: 700;
  transition: color 0.3s ease;
}
.help-link:hover .help-phone {
  color: var(--gold-deep);
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 2px solid var(--line);
  background: #fff;
  color: var(--ink);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.icon-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--gold-light) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.icon-btn:hover { 
  border-color: var(--gold); 
  color: var(--gold-deep);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(224, 192, 132, 0.3);
}
.icon-btn:hover::before {
  opacity: 0.2;
}
.icon-btn:active {
  transform: translateY(0) scale(0.98);
}
.icon-btn svg { 
  width: 18px; 
  height: 18px;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}
.icon-btn:hover svg {
  transform: scale(1.1);
}

/* ── Category row avec animation ── */
.cat-row {
  border-top: 1px solid var(--line);
  background: var(--paper, #faf7f2);
  transition: all 0.3s ease;
}
.nav.scrolled .cat-row {
  background: rgba(250, 247, 242, 0.98);
  backdrop-filter: blur(10px);
}
.cat-row-inner {
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
}

.cat-item { 
  position: relative;
  animation: slideDown 0.5s ease backwards;
}
.cat-item:nth-child(1) { animation-delay: 0.1s; }
.cat-item:nth-child(2) { animation-delay: 0.2s; }
.cat-item:nth-child(3) { animation-delay: 0.3s; }
.cat-item:nth-child(4) { animation-delay: 0.4s; }

.cat-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  padding: 14px 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
}
.cat-trigger::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.cat-trigger:hover::after,
.cat-trigger.active::after {
  width: 60%;
}
.cat-trigger:hover {
  color: var(--gold-deep);
}
.chevron { 
  width: 13px; 
  height: 13px; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
}
.cat-trigger.active .chevron { 
  transform: rotate(180deg); 
  color: var(--gold-deep); 
}
.cat-trigger.active { 
  color: var(--gold-deep); 
}

.cat-link {
  padding: 14px 14px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  position: relative;
}
.cat-link::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}
.cat-link:hover { 
  color: var(--ink); 
}
.cat-link:hover::after {
  width: 50%;
}
.cat-link.special { 
  color: var(--gold-deep); 
  font-weight: 700; 
}
.sparkle {
  display: inline-block;
  animation: sparkle-anim 2s ease-in-out infinite;
}

.cta-mobile-group { display: none; }

/* ── Mega menu avec transitions ── */
.mega-enter-active {
  animation: slideDown 0.3s ease;
}
.mega-leave-active {
  animation: slideDown 0.2s ease reverse;
}

.mega-menu {
  position: absolute;
  top: 100%;
  right: 0;
  min-width: 560px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  box-shadow: 0 20px 40px -20px rgba(28, 27, 25, 0.3);
  padding: 24px;
  display: flex;
  gap: 28px;
  z-index: 60;
}
.mega-columns { display: flex; gap: 36px; flex: 1; }
.mega-col h4 {
  font-size: 12px;
  font-weight: 800;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin: 0 0 12px;
}
.mega-col ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.mega-col a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--ink);
  font-size: 13.5px;
  font-weight: 600;
  transition: all 0.2s ease;
  padding: 4px 0;
}
.mega-col a:hover { 
  color: var(--gold-deep);
  transform: translateX(-4px);
}
.badge {
  font-size: 9.5px;
  font-weight: 800;
  background: var(--gold);
  color: var(--ink);
  padding: 1px 7px;
  border-radius: 999px;
  animation: pulse 2s ease-in-out infinite;
}

.mega-promo {
  width: 190px;
  flex-shrink: 0;
  background: var(--bg-panel, #f6f1e8);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
}
.mega-promo:hover {
  transform: translateY(-2px);
}
.mega-promo-visual {
  height: 90px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--gold-light, #e0c084), var(--gold));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.mega-promo-visual::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
  animation: shine 3s ease-in-out infinite;
}
.mega-promo-emoji { 
  font-size: 34px;
  position: relative;
  z-index: 1;
  animation: float 3s ease-in-out infinite;
}
.mega-promo p { 
  font-size: 12.5px; 
  color: var(--ink-soft); 
  line-height: 1.6; 
  margin: 0; 
}
.mega-promo-link { 
  font-size: 12.5px; 
  font-weight: 700; 
  color: var(--gold-deep); 
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
}
.mega-promo-link:hover {
  gap: 10px;
}
.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}
.mega-promo-link:hover .arrow-icon {
  transform: translateX(-4px);
}

/* ── Burger animé ── */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 26px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.burger:hover {
  transform: scale(1.1);
}
.burger span { 
  height: 2px; 
  background: var(--ink); 
  border-radius: 2px; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
}
.burger.open span:nth-child(1) { 
  transform: translateY(7px) rotate(45deg); 
}
.burger.open span:nth-child(2) { 
  opacity: 0;
  transform: scale(0);
}
.burger.open span:nth-child(3) { 
  transform: translateY(-7px) rotate(-45deg); 
}

/* ── Responsive ── */
@media (max-width: 1080px) {
  .mega-menu { min-width: 460px; }
  .mega-columns { gap: 22px; }
}

@media (max-width: 860px) {
  .search-bar { display: none; }
  .cta-desktop { display: none; }
  .burger { display: flex; }

  .main-row { justify-content: space-between; }

  .cat-row {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: calc(100vh - 100%);
    overflow-y: auto;
    border-bottom: 1px solid var(--line);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .cat-row.open { 
    transform: translateY(0); 
    opacity: 1; 
    pointer-events: auto; 
  }

  .cat-row-inner {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 20px 26px;
  }
  .cat-trigger, .cat-link { 
    width: 100%; 
    justify-content: space-between; 
    padding: 13px 4px; 
    border-bottom: 1px solid var(--line); 
  }

  .mega-menu {
    position: static;
    min-width: 0;
    width: 100%;
    flex-direction: column;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 8px 4px 16px;
  }
  .mega-columns { flex-direction: column; gap: 18px; }
  .mega-promo { width: 100%; flex-direction: row; align-items: center; }
  .mega-promo-visual { width: 70px; height: 70px; flex-shrink: 0; }

  .cta-mobile-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 16px;
  }
  .cta-mobile-group .btn { width: 100%; text-align: center; }
}
</style>