<!-- src/views/admin/AdminView.vue -->
<template>
  <div dir="rtl" class="admin-site">

    <!-- ═══ LOGIN ═══ -->
    <div v-if="!isAuthenticated" class="login-overlay">
      <div class="login-card">
        <div class="login-brand">
          <span class="brand-icon">∞</span>
          <span>Infinity Admin</span>
        </div>
        <h2>تسجيل الدخول</h2>
        <p class="login-desc">أدخل كلمة المرور للوصول إلى لوحة التحكم</p>
        <form @submit.prevent="handleLogin">
          <div class="login-input-group">
            <input type="password" v-model="loginPassword" placeholder="كلمة المرور" required autofocus />
            <button type="submit" class="login-btn">دخول</button>
          </div>
          <p v-if="loginError" class="login-error">❌ كلمة المرور غير صحيحة</p>
        </form>
        <div class="login-footer"><span>🔒 منطقة محمية</span></div>
      </div>
    </div>

    <!-- ═══ ADMIN ═══ -->
    <template v-else>
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="sidebar-brand">
          <span class="brand-icon">∞</span>
          <span v-if="!sidebarCollapsed" class="brand-text">Infinity Admin</span>
        </div>

        <nav class="sidebar-nav">
          <a
            v-for="item in menuItems"
            :key="item.key"
            :class="['nav-item', { active: currentTab === item.key }]"
            @click="currentTab = item.key"
          >
            <span class="nav-icon" v-html="item.icon"></span>
            <span v-if="!sidebarCollapsed" class="nav-label">{{ item.label }}</span>
            <span v-if="!sidebarCollapsed && item.badge" class="nav-badge">{{ item.badge }}</span>
          </a>
        </nav>

        <div class="sidebar-footer">
          <button class="btn-logout" @click="handleLogout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span v-if="!sidebarCollapsed">تسجيل الخروج</span>
          </button>
          <button class="sidebar-toggle" @click="sidebarCollapsed = !sidebarCollapsed">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline :points="sidebarCollapsed ? '13 17 18 12 13 7' : '11 17 6 12 11 7'"/>
            </svg>
          </button>
        </div>
      </aside>

      <!-- Main content -->
      <main class="main-content">
        <header class="admin-header">
          <h2>{{ currentTitle }}</h2>
          <div class="admin-header-actions">
            <button class="btn-refresh" @click="refreshData">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              تحديث
            </button>
            <RouterLink to="/" class="btn-gold-small">← العودة للموقع</RouterLink>
          </div>
        </header>

        <!-- Contenu dynamique -->
        <div class="tab-content">
          <!-- Dashboard -->
          <div v-if="currentTab === 'dashboard'">
            <DashboardAdmin :data="rdvData" />
          </div>

          <!-- Rendez-vous -->
          <div v-else-if="currentTab === 'rdv'">
            <RendezVousAdmin :data="rdvData" @update="saveData" />
          </div>

          <!-- Messages -->
          <div v-else-if="currentTab === 'messages'">
            <MessagesAdmin :data="msgData" @update="saveData" />
          </div>

          <!-- Clients -->
          <div v-else-if="currentTab === 'clients'">
            <ClientsAdmin :data="clientsData" @update="saveData" />
          </div>

          <!-- Projets -->
          <div v-else-if="currentTab === 'projets'">
            <ProjetsAdmin :data="projetsData" @update="saveData" />
          </div>

          <!-- Services -->
          <div v-else-if="currentTab === 'services'">
            <ServicesAdmin :data="servicesData" @update="saveData" />
          </div>

          <!-- Commandes (formulaires produits: cartes de visite, brochures, NFC...) -->
          <div v-else-if="currentTab === 'commandes'">
            <CommandesAdmin :data="commandesData" @update="saveData" />
          </div>

          <!-- Fallback -->
          <div v-else>
            <div class="empty-state">📋 Sélectionnez un onglet</div>
          </div>
        </div>
      </main>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

// ═══ IMPORTS DES COMPOSANTS ═══
import DashboardAdmin from './DashboardAdmin.vue'
import RendezVousAdmin from './RendezVousAdmin.vue'
import MessagesAdmin from './MessagesAdmin.vue'
import ClientsAdmin from './ClientsAdmin.vue'
import ProjetsAdmin from './ProjetsAdmin.vue'
import ServicesAdmin from './ServicesAdmin.vue'
import CommandesAdmin from './CommandesAdmin.vue'

const router = useRouter()

// ═══ Authentification ═══
const isAuthenticated = ref(false)
const loginPassword = ref('')
const loginError = ref(false)
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

// ═══ État ═══
const sidebarCollapsed = ref(false)
const currentTab = ref('dashboard')
const rdvData = ref([])
const msgData = ref([])
const clientsData = ref([])
const projetsData = ref([])
const servicesData = ref([])
const commandesData = ref([])

// ═══ MENU ═══
const menuItems = [
  { 
    key: 'dashboard', 
    label: 'لوحة التحكم', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>` 
  },
  { 
    key: 'rdv', 
    label: 'المواعيد', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` 
  },
  { 
    key: 'messages', 
    label: 'الرسائل', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` 
  },
  { 
    key: 'clients', 
    label: 'العملاء', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` 
  },
  { 
    key: 'projets', 
    label: 'المشاريع', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>` 
  },
  { 
    key: 'services', 
    label: 'الخدمات', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>` 
  },
  { 
    key: 'commandes', 
    label: 'الطلبات', 
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>` 
  }
]

const currentTitle = computed(() => {
  const found = menuItems.find(item => item.key === currentTab.value)
  return found ? found.label : 'لوحة التحكم'
})

// ═══ Écouter les événements de mise à jour ═══
function handleDataUpdate(event) {
  const { key, data } = event.detail
  console.log(`📥 Données mises à jour: ${key}`, data)
  
  if (key === 'infinity_rdv') rdvData.value = data
  if (key === 'infinity_messages') msgData.value = data
  if (key === 'infinity_clients') clientsData.value = data
  if (key === 'infinity_projets') projetsData.value = data
  if (key === 'infinity_commandes') commandesData.value = data
  
  updateBadges()
}

// ═══ Mise à jour des badges ═══
function updateBadges() {
  const pending = rdvData.value.filter(r => r.status === 'pending').length
  const rdvItem = menuItems.find(i => i.key === 'rdv')
  if (rdvItem) rdvItem.badge = pending || 0
  
  const msgItem = menuItems.find(i => i.key === 'messages')
  if (msgItem) msgItem.badge = msgData.value.length || 0

  const pendingCommandes = commandesData.value.filter(c => c.status === 'pending').length
  const commandesItem = menuItems.find(i => i.key === 'commandes')
  if (commandesItem) commandesItem.badge = pendingCommandes || 0
}

// ═══ Login / Logout ═══
function handleLogin() {
  if (loginPassword.value === ADMIN_PASSWORD) {
    isAuthenticated.value = true
    loginError.value = false
    loginPassword.value = ''
    localStorage.setItem('admin_auth', 'true')
    loadData()
  } else {
    loginError.value = true
    loginPassword.value = ''
  }
}

function handleLogout() {
  isAuthenticated.value = false
  localStorage.removeItem('admin_auth')
  router.push('/admin/login')
}

// ═══ Vérification session ═══
let storageInterval = null

onMounted(() => {
  const auth = localStorage.getItem('admin_auth')
  if (auth === 'true') {
    isAuthenticated.value = true
    loadData()
  }
  
  // ═══ Écouter les événements de mise à jour ═══
  window.addEventListener('admin-data-updated', handleDataUpdate)
  
  // ═══ Vérifier les mises à jour toutes les 5 secondes ═══
  storageInterval = setInterval(() => {
    if (isAuthenticated.value) {
      const currentRdv = JSON.parse(localStorage.getItem('infinity_rdv') || '[]')
      const currentMsg = JSON.parse(localStorage.getItem('infinity_messages') || '[]')
      
      const pending = currentRdv.filter(r => r.status === 'pending').length
      const rdvItem = menuItems.find(i => i.key === 'rdv')
      if (rdvItem && rdvItem.badge !== pending) {
        rdvItem.badge = pending || 0
        rdvData.value = currentRdv
      }
      
      const msgItem = menuItems.find(i => i.key === 'messages')
      if (msgItem && msgItem.badge !== currentMsg.length) {
        msgItem.badge = currentMsg.length || 0
        msgData.value = currentMsg
      }

      const currentCommandes = JSON.parse(localStorage.getItem('infinity_commandes') || '[]')
      const pendingCommandes = currentCommandes.filter(c => c.status === 'pending').length
      const commandesItem = menuItems.find(i => i.key === 'commandes')
      if (commandesItem && commandesItem.badge !== pendingCommandes) {
        commandesItem.badge = pendingCommandes || 0
        commandesData.value = currentCommandes
      }
    }
  }, 5000)
})

onBeforeUnmount(() => {
  window.removeEventListener('admin-data-updated', handleDataUpdate)
  if (storageInterval) {
    clearInterval(storageInterval)
  }
})

// ═══ Chargement / Sauvegarde ═══
function loadData() {
  rdvData.value = JSON.parse(localStorage.getItem('infinity_rdv') || '[]')
  msgData.value = JSON.parse(localStorage.getItem('infinity_messages') || '[]')
  clientsData.value = JSON.parse(localStorage.getItem('infinity_clients') || '[]')
  projetsData.value = JSON.parse(localStorage.getItem('infinity_projets') || '[]')
  servicesData.value = JSON.parse(localStorage.getItem('infinity_services') || '[]')
  commandesData.value = JSON.parse(localStorage.getItem('infinity_commandes') || '[]')
  updateBadges()
}

function saveData(type, data) {
  switch (type) {
    case 'rdv':
      rdvData.value = data
      localStorage.setItem('infinity_rdv', JSON.stringify(data))
      break
    case 'messages':
      msgData.value = data
      localStorage.setItem('infinity_messages', JSON.stringify(data))
      break
    case 'clients':
      clientsData.value = data
      localStorage.setItem('infinity_clients', JSON.stringify(data))
      break
    case 'projets':
      projetsData.value = data
      localStorage.setItem('infinity_projets', JSON.stringify(data))
      break
    case 'services':
      servicesData.value = data
      localStorage.setItem('infinity_services', JSON.stringify(data))
      break
    case 'commandes':
      commandesData.value = data
      localStorage.setItem('infinity_commandes', JSON.stringify(data))
      break
  }
  updateBadges()
}

function refreshData() {
  loadData()
  alert('✅ تم تحديث البيانات')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

.admin-site {
  --gold: #f8b101;
  --gold-dark: #d4a63a;
  --bg: #f4f6f9;
  --sidebar-bg: #0c1230;
  --sidebar-text: #b9c0d6;
  --card-bg: #ffffff;
  --border: #e2e8f0;
  --shadow: 0 2px 12px rgba(0,0,0,0.06);
  font-family: 'Cairo', sans-serif;
  background: var(--bg);
  color: #1a202c;
  direction: rtl;
  min-height: 100vh;
  display: flex;
}

.sidebar {
  width: 260px;
  min-height: 100vh;
  background: var(--sidebar-bg);
  color: var(--sidebar-text);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  flex-shrink: 0;
}
.sidebar.collapsed { width: 72px; }
.sidebar-brand { display: flex; align-items: center; gap: 12px; padding: 0 8px 30px; font-size: 20px; font-weight: 800; color: #fff; }
.brand-icon { font-size: 28px; color: var(--gold); }
.brand-text { font-size: 18px; }
.sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 4px; }
.nav-item {
  display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px;
  color: var(--sidebar-text); cursor: pointer; transition: all 0.2s; text-decoration: none; position: relative;
}
.nav-item:hover { background: rgba(255,255,255,0.08); color: #fff; }
.nav-item.active { background: rgba(248, 177, 1, 0.15); color: var(--gold); }
.nav-icon { font-size: 20px; flex-shrink: 0; display: flex; align-items: center; }
.nav-label { font-size: 14px; font-weight: 600; }
.nav-badge { margin-right: auto; background: var(--gold); color: #1a1a1a; font-size: 11px; font-weight: 700; padding: 2px 10px; border-radius: 20px; }
.sidebar-footer { margin-top: 20px; display: flex; flex-direction: column; gap: 8px; }
.btn-logout {
  background: rgba(255,255,255,0.06); border: none; color: var(--sidebar-text);
  padding: 10px 14px; border-radius: 8px; cursor: pointer; display: flex; align-items: center;
  gap: 10px; font-family: inherit; font-size: 14px; font-weight: 600; transition: 0.2s;
}
.btn-logout:hover { background: rgba(255, 0, 0, 0.15); color: #ff6b6b; }
.sidebar-toggle {
  background: rgba(255,255,255,0.06); border: none; color: var(--sidebar-text);
  padding: 10px; border-radius: 8px; cursor: pointer; display: flex; justify-content: center;
}
.sidebar-toggle:hover { background: rgba(255,255,255,0.12); }

.main-content { flex: 1; padding: 28px 32px; overflow-y: auto; }
.admin-header {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
}
.admin-header h2 { font-size: 26px; font-weight: 800; color: #0c1230; }
.admin-header-actions { display: flex; gap: 10px; align-items: center; }
.btn-refresh {
  background: var(--card-bg); border: 1px solid var(--border); border-radius: 8px;
  padding: 8px 16px; font-size: 13px; font-weight: 600; color: #1a202c;
  cursor: pointer; display: flex; align-items: center; gap: 6px; transition: 0.2s;
}
.btn-refresh:hover { background: var(--gold); color: #fff; border-color: var(--gold); }
.btn-gold-small {
  background: var(--gold); color: #1a1a1a; padding: 8px 18px; border-radius: 8px;
  text-decoration: none; font-weight: 700; font-size: 13px; transition: 0.2s;
}
.btn-gold-small:hover { background: var(--gold-dark); transform: translateY(-2px); }

.tab-content { min-height: 400px; }
.empty-state {
  text-align: center;
  color: #a0aec0;
  padding: 60px 20px;
  font-size: 18px;
}

.login-overlay {
  position: fixed; inset: 0; background: linear-gradient(135deg, #0c1230, #1a1a2e);
  display: flex; align-items: center; justify-content: center; z-index: 9999;
}
.login-card {
  background: #fff; border-radius: 24px; padding: 48px 40px; max-width: 420px; width: 90%;
  text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.login-brand {
  display: flex; align-items: center; justify-content: center; gap: 12px;
  font-size: 24px; font-weight: 800; color: #0c1230; margin-bottom: 8px;
}
.login-brand .brand-icon { font-size: 36px; color: var(--gold); }
.login-card h2 { font-size: 28px; font-weight: 800; color: #0c1230; margin: 8px 0 4px; }
.login-desc { color: #718096; font-size: 14px; margin-bottom: 24px; }
.login-input-group { display: flex; flex-direction: column; gap: 12px; }
.login-input-group input {
  padding: 14px 18px; border: 2px solid var(--border); border-radius: 12px;
  font-size: 16px; font-family: inherit; text-align: center; transition: 0.3s;
}
.login-input-group input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 4px rgba(248,177,1,0.15); }
.login-btn {
  background: var(--gold); color: #1a1a1a; border: none; padding: 14px;
  border-radius: 12px; font-weight: 800; font-size: 18px; cursor: pointer; transition: 0.3s;
}
.login-btn:hover { background: var(--gold-dark); transform: translateY(-2px); }
.login-error { color: #e74c3c; font-size: 14px; margin-top: 12px; font-weight: 600; }
.login-footer { margin-top: 20px; font-size: 13px; color: #a0aec0; border-top: 1px solid var(--border); padding-top: 16px; }

@media (max-width: 768px) {
  .sidebar { width: 72px; padding: 16px 10px; }
  .sidebar .brand-text, .sidebar .nav-label, .sidebar .nav-badge, .sidebar .btn-logout span { display: none !important; }
  .sidebar .nav-item { justify-content: center; padding: 12px; }
  .sidebar .btn-logout { justify-content: center; padding: 10px; }
  .main-content { padding: 16px; }
  .admin-header { flex-direction: column; align-items: flex-start; }
  .login-card { padding: 32px 20px; }
}
</style>