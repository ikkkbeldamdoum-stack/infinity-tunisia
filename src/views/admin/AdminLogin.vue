<!-- src/views/admin/AdminLogin.vue -->
<template>
  <div dir="rtl" class="admin-login-page" :class="{ 'is-loading': loading }">
    
    <!-- Particules d'arrière-plan -->
    <div class="particles-container" aria-hidden="true">
      <div v-for="i in 30" :key="i" class="particle" :style="particleStyle(i)"></div>
    </div>

    <!-- Formes géométriques flottantes -->
    <div class="floating-shapes" aria-hidden="true">
      <div class="shape shape-circle shape-1"></div>
      <div class="shape shape-circle shape-2"></div>
      <div class="shape shape-triangle shape-3"></div>
      <div class="shape shape-square shape-4"></div>
      <div class="shape shape-diamond shape-5"></div>
      <div class="shape shape-circle shape-6"></div>
    </div>

    <div class="login-wrapper">

      <!-- ═══ Colonne de marque ═══ -->
      <div class="brand-column">
        <div class="brand-grid-pattern"></div>
        <div class="brand-glow brand-glow-1"></div>
        <div class="brand-glow brand-glow-2"></div>
        
        <!-- Lignes décoratives -->
        <div class="decorative-lines" aria-hidden="true">
          <span class="deco-line deco-line-1"></span>
          <span class="deco-line deco-line-2"></span>
          <span class="deco-line deco-line-3"></span>
        </div>

        <div class="brand-content">
          <!-- Logo avec anneau animé -->
          <div class="brand-mark-wrapper">
            <div class="brand-ring brand-ring-outer"></div>
            <div class="brand-ring brand-ring-inner"></div>
            <div class="brand-mark">
              <img :src="logoSrc" alt="Infinity" class="brand-logo-img" @error="onLogoError" />
            </div>
            <div class="brand-sparkle sparkle-1">✦</div>
            <div class="brand-sparkle sparkle-2">✦</div>
            <div class="brand-sparkle sparkle-3">✧</div>
          </div>

          <div class="welcome-message">
            <div class="eyebrow-container">
              <span class="eyebrow-line"></span>
              <span class="eyebrow">Infinity — لوحة التحكم</span>
              <span class="eyebrow-line"></span>
            </div>
            <h2 class="welcome-title">
              <span class="title-word">التحكّم</span>
              <span class="title-word gold-word">بلا حدود</span>
            </h2>
            <p class="welcome-text">إدارة كاملة وآمنة لكل تفاصيل منصتك، في مكان واحد.</p>
          </div>

          <ul class="brand-points">
            <li>
              <span class="point-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>وصول محمي بصلاحيات المشرف</span>
            </li>
            <li>
              <span class="point-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>مراقبة النشاط في الوقت الحقيقي</span>
            </li>
            <li>
              <span class="point-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>تجربة مصمَّمة خصيصاً لفريقك</span>
            </li>
          </ul>

          <!-- Indicateur de statut -->
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">خوادم آمنة ومشفّرة</span>
          </div>
        </div>
      </div>

      <!-- ═══ Colonne du formulaire ═══ -->
      <div class="form-column">
        <div class="form-card">
          
          <!-- Effet de carte -->
          <div class="card-shine"></div>

          <div class="login-header">
            <div class="header-icon-wrap">
              <div class="icon-ring"></div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h1>تسجيل الدخول</h1>
            <p>أدخل بياناتك للوصول إلى لوحة التحكم</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form" autocomplete="off">

            <!-- Email -->
            <div class="form-group">
              <label for="email">
                <span class="label-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span>البريد الإلكتروني</span>
              </label>
              <div class="input-wrapper">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  placeholder="admin@infinity-agency.com"
                  required
                  autofocus
                  autocomplete="off"
                />
                <span class="input-border"></span>
                <span class="input-glow"></span>
              </div>
            </div>

            <!-- Mot de passe -->
            <div class="form-group">
              <label for="password">
                <span class="label-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <span>كلمة المرور</span>
              </label>
              <div class="input-wrapper password-input-wrapper">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  placeholder="••••••••"
                  required
                  autocomplete="off"
                />
                <span class="input-border"></span>
                <span class="input-glow"></span>
                <button
                  type="button"
                  class="toggle-password"
                  @click="showPassword = !showPassword"
                  :aria-label="showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'"
                >
                  <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" v-model="rememberMe" />
                <span class="checkmark"></span>
                <span>تذكرني</span>
              </label>
            </div>

            <!-- Bouton -->
            <button type="submit" class="login-btn" :disabled="loading">
              <span v-if="!loading" class="btn-content">
                <span>تسجيل الدخول</span>
                <span class="btn-arrow-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M15 18L9 12L15 6"/>
                  </svg>
                </span>
              </span>
              <span v-else class="loading-content">
                <span class="loading-spinner"></span>
                <span>جاري التحقق...</span>
              </span>
              <span class="btn-shine"></span>
            </button>

            <!-- Message d'erreur -->
            <transition name="error-fade">
              <div v-if="error" class="error-message">
                <span class="error-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                </span>
                <span>{{ error }}</span>
              </div>
            </transition>
          </form>

          <div class="login-footer">
            <div class="footer-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <span>منطقة محمية — Infinity Agency</span>
          </div>

        </div>

        <div class="login-footer-bottom">
          <div class="footer-divider"></div>
          <p>© 2026 Infinity Agency — جميع الحقوق محفوظة</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

/**
 * IMPORTANT — Correction du logo :
 * Ce fichier se trouve dans : src/views/admin/AdminLogin.vue
 * L'image se trouve dans   : src/assets/pdfver.svg
 * Il faut donc remonter DEUX niveaux (views/admin -> views -> src) puis
 * redescendre dans assets/, d'où le chemin '../../assets/pdfver.svg'.
 *
 * Utiliser un import statique (plutôt qu'un chemin en dur dans le <img src="...">)
 * permet à Vite de résoudre et vérifier le fichier à la compilation :
 * si le chemin est faux, tu auras une erreur claire au build au lieu
 * d'une image cassée silencieuse en prod.
 */
import logoImg from '../../assets/pdfver.svg'

const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const loading = ref(false)
const error = ref('')
const logoSrc = ref(logoImg)

// Filet de sécurité : si jamais le fichier ne charge pas (mauvais chemin,
// fichier supprimé/renommé), on évite l'icône "image cassée" et on masque
// proprement l'image au lieu de casser le design.
function onLogoError() {
  console.warn('[AdminLogin] Le logo n\'a pas pu être chargé depuis src/assets/pdfver.svg. Vérifie que le fichier existe bien à cet emplacement.')
  logoSrc.value = ''
}

function particleStyle(index) {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const top = Math.random() * 100
  const duration = Math.random() * 20 + 15
  const delay = Math.random() * 10
  const opacity = Math.random() * 0.4 + 0.1
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: opacity
  }
}

function handleLogin() {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'يرجى ملء جميع الحقول'
    return
  }

  loading.value = true

  setTimeout(() => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@infinity-agency.com'
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

    if (email.value === adminEmail && password.value === adminPassword) {
      localStorage.setItem('admin_auth', 'true')
      router.push('/admin/dashboard')
    } else {
      error.value = 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
      loading.value = false

      const errorEl = document.querySelector('.error-message')
      if (errorEl) {
        errorEl.classList.add('shake')
        setTimeout(() => errorEl.classList.remove('shake'), 600)
      }
    }
  }, 900)
}

onMounted(() => {
  const auth = localStorage.getItem('admin_auth')
  if (auth === 'true') {
    router.push('/admin/dashboard')
  }
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap');

/* ═══════════════════════════════════════════
   VARIABLES GLOBALES
   ═══════════════════════════════════════════ */
.admin-login-page {
  --gold: #f8b101;
  --gold-light: #ffc940;
  --gold-dark: #d49500;
  --gold-soft: rgba(248, 177, 1, 0.08);
  --gold-medium: rgba(248, 177, 1, 0.15);
  --gold-glow: rgba(248, 177, 1, 0.25);
  --dark: #262626;
  --dark-light: #333333;
  --dark-surface: #1f1f1f;
  --dark-elevated: #2d2d2d;
  --light: #fafafa;
  --light-secondary: #f3f3f3;
  --white: #ffffff;
  --gray-50: #f5f5f5;
  --gray-100: #e8e8e8;
  --gray-200: #d0d0d0;
  --gray-300: #a0a0a0;
  --gray-400: #707070;
  --gray-500: #505050;
  --border: #e0e0e0;
  --border-dark: #3a3a3a;
  --error: #ef4444;
  --error-light: #fef2f2;
  --error-border: #fecaca;
  --success: #10b981;
  --r-sm: 8px;
  --r: 14px;
  --r-lg: 20px;
  --r-xl: 30px;
  --r-2xl: 40px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --font: 'Cairo', sans-serif;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-xl: 0 30px 80px rgba(0, 0, 0, 0.18), 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-gold: 0 8px 30px rgba(248, 177, 1, 0.3);
  --shadow-gold-lg: 0 16px 48px rgba(248, 177, 1, 0.4);
}

/* ═══════════════════════════════════════════
   FOND & CONTENEUR PRINCIPAL
   ═══════════════════════════════════════════ */
.admin-login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light);
  font-family: var(--font);
  padding: 40px 32px;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

/* Grille subtile */
.admin-login-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(38, 38, 38, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(38, 38, 38, 0.03) 1px, transparent 1px);
  background-size: 64px 64px;
  pointer-events: none;
  z-index: 0;
}

/* Dégradés d'ambiance */
.admin-login-page::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(248, 177, 1, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(248, 177, 1, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(38, 38, 38, 0.02) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* ═══════════════════════════════════════════
   PARTICULES
   ═══════════════════════════════════════════ */
.particles-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: var(--gold);
  border-radius: 50%;
  animation: particleFloat linear infinite;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px) scale(0);
    opacity: 0;
  }
}

/* ═══════════════════════════════════════════
   FORMES FLOTTANTES
   ═══════════════════════════════════════════ */
.floating-shapes {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.shape {
  position: absolute;
  opacity: 0.06;
}

.shape-circle {
  border-radius: 50%;
  border: 2px solid var(--dark);
}

.shape-triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 50px solid var(--dark);
  background: transparent !important;
  border-radius: 0;
}

.shape-square {
  border-radius: 6px;
  background: var(--dark);
  border: none;
}

.shape-diamond {
  background: var(--dark);
  border: none;
  transform: rotate(45deg);
  border-radius: 4px;
}

.shape-1 {
  width: 120px;
  height: 120px;
  top: 8%;
  left: 5%;
  animation: shapeFloat1 18s ease-in-out infinite;
}

.shape-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  left: 3%;
  animation: shapeFloat2 22s ease-in-out infinite;
}

.shape-3 {
  top: 15%;
  right: 8%;
  animation: shapeFloat3 20s ease-in-out infinite;
}

.shape-4 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  right: 5%;
  animation: shapeFloat1 25s ease-in-out infinite reverse;
}

.shape-5 {
  width: 50px;
  height: 50px;
  bottom: 10%;
  left: 20%;
  animation: shapeFloat2 19s ease-in-out infinite;
}

.shape-6 {
  width: 100px;
  height: 100px;
  top: 40%;
  left: 50%;
  animation: shapeFloat3 23s ease-in-out infinite reverse;
}

@keyframes shapeFloat1 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -20px) rotate(120deg); }
  66% { transform: translate(-15px, 10px) rotate(240deg); }
}

@keyframes shapeFloat2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-25px, -30px) rotate(180deg); }
}

@keyframes shapeFloat3 {
  0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
  50% { transform: translate(20px, 15px) rotate(90deg) scale(1.1); }
}

/* ═══════════════════════════════════════════
   WRAPPER PRINCIPAL
   ═══════════════════════════════════════════ */
.login-wrapper {
  display: flex;
  max-width: 1100px;
  width: 100%;
  min-height: 650px;
  background: var(--white);
  border-radius: var(--r-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  position: relative;
  z-index: 1;
  transition: transform 0.5s var(--ease), box-shadow 0.5s var(--ease);
}

.login-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* ═══════════════════════════════════════════
   COLONNE DE MARQUE (GAUCHE)
   ═══════════════════════════════════════════ */
.brand-column {
  flex: 1.1;
  background: linear-gradient(160deg, #1a1a1a 0%, var(--dark) 30%, #1f1f1f 60%, #1a1a1a 100%);
  padding: 60px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-left: 1px solid rgba(255, 255, 255, 0.06);
}

.brand-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(248, 177, 1, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(248, 177, 1, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%);
  pointer-events: none;
}

.brand-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.3;
}

.brand-glow-1 {
  width: 300px;
  height: 300px;
  top: -80px;
  right: -60px;
  background: radial-gradient(circle, var(--gold-glow), transparent 70%);
  animation: glowPulse 6s ease-in-out infinite;
}

.brand-glow-2 {
  width: 250px;
  height: 250px;
  bottom: -60px;
  left: -40px;
  background: radial-gradient(circle, rgba(248, 177, 1, 0.12), transparent 70%);
  animation: glowPulse 8s ease-in-out infinite reverse;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.decorative-lines {
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0.3;
}

.deco-line {
  display: block;
  height: 1.5px;
  background: var(--gold);
  border-radius: 1px;
}

.deco-line-1 { width: 40px; }
.deco-line-2 { width: 25px; margin-right: 15px; }
.deco-line-3 { width: 35px; margin-right: 5px; }

.brand-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  max-width: 400px;
}

/* Logo avec anneaux */
.brand-mark-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 28px;
}

.brand-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(248, 177, 1, 0.3);
  pointer-events: none;
}

.brand-ring-outer {
  inset: -12px;
  animation: ringRotate 12s linear infinite;
  border-style: dashed;
  border-width: 1px;
}

.brand-ring-inner {
  inset: -6px;
  animation: ringRotate 8s linear infinite reverse;
  border-style: solid;
  border-width: 1px;
}

@keyframes ringRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.brand-mark {
  width: 100%;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  background: var(--white);
  border: 2.5px solid var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4), 0 0 0 8px rgba(248, 177, 1, 0.06);
  position: relative;
  z-index: 2;
  transition: transform 0.4s var(--ease), box-shadow 0.4s var(--ease);
}

.brand-mark:hover {
  transform: scale(1.05);
  box-shadow: 0 14px 50px rgba(0, 0, 0, 0.5), 0 0 0 12px rgba(248, 177, 1, 0.1);
}

.brand-logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-sparkle {
  position: absolute;
  color: var(--gold);
  font-size: 12px;
  animation: sparkleFloat 3s ease-in-out infinite;
  pointer-events: none;
  z-index: 3;
}

.sparkle-1 { top: -15px; right: -10px; animation-delay: 0s; }
.sparkle-2 { bottom: -12px; left: -8px; animation-delay: 1s; }
.sparkle-3 { top: 50%; right: -20px; animation-delay: 2s; font-size: 8px; }

@keyframes sparkleFloat {
  0%, 100% { opacity: 0; transform: scale(0.5) translateY(0); }
  50% { opacity: 1; transform: scale(1.2) translateY(-5px); }
}

.welcome-message {
  margin-bottom: 36px;
}

.eyebrow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

.eyebrow-line {
  width: 30px;
  height: 1px;
  background: rgba(248, 177, 1, 0.4);
  border-radius: 1px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  white-space: nowrap;
}

.welcome-title {
  font-size: 38px;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 14px;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.title-word {
  display: block;
}

.gold-word {
  background: linear-gradient(135deg, #ffe28a 0%, #f8b101 40%, #d49500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-text {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin: 0;
  max-width: 320px;
  margin: 0 auto;
}

.brand-points {
  list-style: none;
  margin: 36px 0 0;
  padding: 0;
  text-align: right;
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
}

.brand-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
  transition: transform 0.3s var(--ease), color 0.3s var(--ease);
}

.brand-points li:hover {
  color: #ffffff;
  transform: translateX(-4px);
}

.point-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(248, 177, 1, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  flex-shrink: 0;
  transition: all 0.3s var(--ease);
}

.brand-points li:hover .point-icon {
  background: rgba(248, 177, 1, 0.25);
  box-shadow: 0 0 16px rgba(248, 177, 1, 0.2);
}

.status-indicator {
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { box-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
  50% { box-shadow: 0 0 16px rgba(16, 185, 129, 0.7); }
}

.status-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

/* ═══════════════════════════════════════════
   COLONNE FORMULAIRE (DROITE)
   ═══════════════════════════════════════════ */
.form-column {
  flex: 1;
  padding: 60px 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  position: relative;
}

.form-card {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  position: relative;
}

.card-shine {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(248, 177, 1, 0.06), transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: var(--gold-soft);
  border: 1.5px solid rgba(248, 177, 1, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  color: var(--dark);
  position: relative;
  transition: all 0.4s var(--ease);
}

.header-icon-wrap:hover {
  transform: scale(1.08);
  box-shadow: 0 0 30px rgba(248, 177, 1, 0.15);
}

.icon-ring {
  position: absolute;
  inset: -4px;
  border-radius: 20px;
  border: 1px dashed rgba(248, 177, 1, 0.3);
  animation: ringRotate 10s linear infinite;
}

.login-header h1 {
  font-size: 28px;
  font-weight: 800;
  color: var(--dark);
  margin: 0 0 8px;
  letter-spacing: -0.3px;
}

.login-header p {
  font-size: 14px;
  color: var(--gray-400);
  margin: 0;
  line-height: 1.6;
}

/* ═══════════════════════════════════════════
   FORMULAIRE
   ═══════════════════════════════════════════ */
.login-form {
  position: relative;
}

.form-group {
  margin-bottom: 24px;
  position: relative;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-500);
  margin-bottom: 8px;
  transition: color 0.3s;
}

.label-icon {
  display: flex;
  align-items: center;
  color: var(--gray-300);
  transition: color 0.3s;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 18px;
  background: var(--light);
  border: 2px solid var(--border);
  border-radius: var(--r);
  color: var(--dark);
  font-size: 15px;
  font-family: var(--font);
  font-weight: 500;
  transition: all 0.4s var(--ease);
  position: relative;
  z-index: 1;
}

.input-wrapper input::placeholder {
  color: var(--gray-300);
  font-weight: 400;
}

.input-wrapper input:focus {
  outline: none;
  border-color: var(--gold);
  background: var(--white);
  box-shadow: 0 0 0 5px rgba(248, 177, 1, 0.06), 0 2px 10px rgba(0, 0, 0, 0.04);
}

.input-border {
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2.5px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transition: width 0.6s var(--ease), left 0.6s var(--ease);
  z-index: 2;
  border-radius: 0 0 var(--r) var(--r);
}

.input-wrapper input:focus ~ .input-border {
  width: 100%;
  left: 0;
}

.input-glow {
  position: absolute;
  inset: -4px;
  border-radius: 18px;
  background: transparent;
  transition: all 0.5s var(--ease);
  z-index: 0;
  pointer-events: none;
}

.input-wrapper input:focus ~ .input-glow {
  box-shadow: 0 0 30px rgba(248, 177, 1, 0.1);
}

.form-group:focus-within label {
  color: var(--dark);
}

.form-group:focus-within .label-icon {
  color: var(--gold);
}

.password-input-wrapper input {
  padding-left: 52px;
}

.toggle-password {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gray-300);
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  z-index: 3;
  transition: all 0.3s var(--ease);
}

.toggle-password:hover {
  color: var(--gold);
  background: var(--gold-soft);
}

.toggle-password svg {
  stroke: currentColor;
  transition: stroke 0.3s;
}

/* Options */
.form-options {
  display: flex;
  justify-content: flex-end;
  margin: -6px 0 28px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--gray-400);
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type='checkbox'] {
  display: none;
}

.checkmark {
  width: 18px;
  height: 18px;
  border: 2px solid var(--gray-200);
  border-radius: 5px;
  position: relative;
  transition: all 0.3s var(--ease);
  flex-shrink: 0;
}

.checkbox-label input[type='checkbox']:checked + .checkmark {
  background: var(--gold);
  border-color: var(--gold);
}

.checkbox-label input[type='checkbox']:checked + .checkmark::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* ═══════════════════════════════════════════
   BOUTON DE CONNEXION
   ═══════════════════════════════════════════ */
.login-btn {
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #f8b101 0%, #e5a200 100%);
  border: none;
  border-radius: var(--r);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font);
  cursor: pointer;
  transition: all 0.4s var(--ease);
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-gold);
  letter-spacing: 0.3px;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: var(--shadow-gold-lg);
}

.login-btn:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-gold);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
  filter: grayscale(20%);
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.btn-arrow-wrap {
  display: flex;
  transition: transform 0.3s var(--ease);
}

.login-btn:hover:not(:disabled) .btn-arrow-wrap {
  transform: translateX(-4px);
}

.btn-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 70%
  );
  transform: translateX(-100%) rotate(25deg);
  transition: transform 0.8s;
}

.login-btn:hover:not(:disabled) .btn-shine {
  transform: translateX(100%) rotate(25deg);
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2.5px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ═══════════════════════════════════════════
   MESSAGE D'ERREUR
   ═══════════════════════════════════════════ */
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--error);
  font-size: 13px;
  font-weight: 600;
  margin-top: 18px;
  padding: 14px 18px;
  background: var(--error-light);
  border: 1.5px solid var(--error-border);
  border-radius: var(--r);
  text-align: center;
  animation: errorSlideIn 0.4s var(--ease);
}

@keyframes errorSlideIn {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.error-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.error-icon svg {
  stroke: var(--error);
}

.shake {
  animation: shake 0.6s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 50%, 90% { transform: translateX(-6px); }
  30%, 70% { transform: translateX(6px); }
}

/* Transitions */
.error-fade-enter-active {
  transition: all 0.4s var(--ease);
}

.error-fade-leave-active {
  transition: all 0.25s var(--ease);
}

.error-fade-enter-from {
  opacity: 0;
  transform: translateY(-12px) scale(0.95);
}

.error-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ═══════════════════════════════════════════
   FOOTERS
   ═══════════════════════════════════════════ */
.login-footer {
  margin-top: 32px;
  padding-top: 22px;
  border-top: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.footer-icon {
  color: var(--gray-300);
  display: flex;
  align-items: center;
}

.footer-icon svg {
  stroke: var(--gray-300);
}

.login-footer span {
  font-size: 12px;
  color: var(--gray-300);
  font-weight: 500;
  letter-spacing: 0.2px;
}

.login-footer-bottom {
  margin-top: 28px;
  text-align: center;
}

.footer-divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--gray-200), transparent);
  margin: 0 auto 14px;
  border-radius: 1px;
}

.login-footer-bottom p {
  font-size: 12px;
  color: var(--gray-300);
  margin: 0;
  letter-spacing: 0.3px;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════ */
@media (max-width: 1024px) {
  .login-wrapper {
    max-width: 900px;
  }
  
  .brand-column {
    padding: 50px 40px;
  }
  
  .form-column {
    padding: 50px 40px;
  }
  
  .welcome-title {
    font-size: 32px;
  }
}

@media (max-width: 900px) {
  .login-wrapper {
    flex-direction: column;
    min-height: unset;
    max-width: 500px;
  }
  
  .brand-column {
    padding: 48px 32px;
    border-left: none;
    border-bottom: 1px solid var(--border-dark);
  }
  
  .brand-points {
    display: none;
  }
  
  .status-indicator {
    margin-top: 24px;
  }
  
  .welcome-title {
    font-size: 28px;
  }
  
  .brand-mark-wrapper {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
  
  .form-column {
    padding: 48px 32px;
  }
  
  .decorative-lines {
    display: none;
  }
  
  .floating-shapes {
    display: none;
  }
}

@media (max-width: 480px) {
  .admin-login-page {
    padding: 16px;
  }
  
  .login-wrapper {
    border-radius: var(--r-xl);
  }
  
  .brand-column {
    padding: 40px 20px;
  }
  
  .form-column {
    padding: 40px 20px;
  }
  
  .welcome-title {
    font-size: 24px;
  }
  
  .login-header h1 {
    font-size: 22px;
  }
  
  .header-icon-wrap {
    width: 48px;
    height: 48px;
  }
  
  .particles-container {
    display: none;
  }
}

/* ═══════════════════════════════════════════
   ACCESSIBILITÉ
   ═══════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .shape,
  .brand-ring,
  .icon-ring,
  .brand-glow,
  .brand-sparkle,
  .status-dot,
  .btn-shine {
    animation: none !important;
    transition: none !important;
  }
  
  .login-btn,
  .brand-mark,
  .header-icon-wrap {
    transition: none !important;
  }
  
  .loading-spinner {
    animation: none !important;
    border-top-color: transparent;
  }
}

/* Mode sombre (optionnel) */
@media (prefers-color-scheme: dark) {
  /* Le design est déjà optimisé avec la colonne sombre */
}
</style>