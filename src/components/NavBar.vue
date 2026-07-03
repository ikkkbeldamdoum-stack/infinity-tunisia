<template>
  <header dir="rtl" class="nav" :class="{ scrolled: isScrolled }">
    <div class="wrap nav-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <img src="../assets/logo.jpg" alt="Infinity" class="brand-logo" />
      </RouterLink>

      <nav class="links" :class="{ open: menuOpen }">
        <RouterLink to="/" @click="closeMenu">الرئيسية</RouterLink>
        <RouterLink to="/qui-sommes-nous" @click="closeMenu">من نحن</RouterLink>
        <RouterLink to="/propos" @click="closeMenu">كيف نعمل</RouterLink>
        <RouterLink to="/nos-services" @click="closeMenu">خدماتنا</RouterLink>
        <RouterLink to="/avis" @click="closeMenu">آراء العملاء</RouterLink>

        <div class="cta-mobile-group">
          <RouterLink to="/devis" class="btn btn-gold" @click="closeMenu">اطلب عرض سعر</RouterLink>
          <RouterLink to="/rendez-vous" class="btn btn-outline" @click="closeMenu">احجز موعدا</RouterLink>
        </div>
      </nav>

      <div class="actions-desktop">
        <RouterLink to="/devis" class="btn btn-gold cta-desktop">اطلب عرض سعر</RouterLink>
        <RouterLink to="/rendez-vous" class="btn btn-outline cta-desktop">احجز موعدا</RouterLink>

        <button class="lang-switch cta-desktop" @click="toggleLang" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z" />
          </svg>
          <span>{{ lang === 'ar' ? 'العربية' : 'Français' }}</span>
        </button>
      </div>

      <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="فتح القائمة">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)
const lang = ref('ar')

function closeMenu() {
  menuOpen.value = false
}

function toggleLang() {
  lang.value = lang.value === 'ar' ? 'fr' : 'ar'
}

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* ═══ TOUS LES STYLES (inchangés) ═══ */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 247, 242, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.nav.scrolled {
  border-color: var(--line);
  box-shadow: 0 6px 24px -16px rgba(28, 27, 25, 0.25);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  text-decoration: none;
}
.brand-logo {
  height: 50px;
  width: auto;
  flex-shrink: 0;
  display: block;
}

.links {
  display: flex;
  align-items: center;
  gap: 28px;
  font-weight: 600;
  font-size: 15px;
}
.links a {
  position: relative;
  padding: 6px 0;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.2s ease;
}
.links a:hover {
  color: var(--ink);
}
.links a.router-link-exact-active {
  color: var(--ink);
}
.links a.router-link-exact-active::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--gold);
  border-radius: 2px;
}

/* Style spécifique pour le lien admin dans le menu mobile - SUPPRIMÉ */

.actions-desktop {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn-gold {
  background: linear-gradient(135deg, var(--gold-light, #e0c084), var(--gold));
  color: var(--ink);
}
.btn-gold:hover {
  filter: brightness(1.05);
}

.btn-outline {
  background: transparent;
  border-color: var(--line);
  color: var(--ink);
}
.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold-deep);
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: var(--ink-soft);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 4px;
}
.lang-switch:hover {
  color: var(--gold-deep);
}
.lang-switch svg {
  width: 17px;
  height: 17px;
}

.cta-mobile-group {
  display: none;
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 26px;
  padding: 4px;
  background: none;
  border: none;
  cursor: pointer;
}
.burger span {
  height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .links {
    gap: 20px;
    font-size: 14px;
  }
}

@media (max-width: 860px) {
  .actions-desktop { display: none; }
  .burger { display: flex; }
  .links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding: 22px 20px 28px;
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }
  .links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .cta-mobile-group {
    display: flex;
    gap: 10px;
    margin-top: 6px;
    width: 100%;
  }
  .cta-mobile-group .btn {
    flex: 1;
    text-align: center;
  }
  .brand-text {
    font-size: 16px;
  }
}
</style>