<!-- src/views/admin/AdminView.vue -->
<template>
  <div dir="rtl" class="admin-site">

    <!-- ═══════════════ ÉCRAN DE CONNEXION ═══════════════ -->
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
            <input
              type="password"
              v-model="loginPassword"
              placeholder="كلمة المرور"
              required
              autofocus
            />
            <button type="submit" class="login-btn">دخول</button>
          </div>
          <p v-if="loginError" class="login-error">❌ كلمة المرور غير صحيحة</p>
        </form>

        <div class="login-footer">
          <span>🔒 منطقة محمية</span>
        </div>
      </div>
    </div>

    <!-- ═══════════════ CONTENU ADMIN (visible après login) ═══════════════ -->
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
              تحديث
            </button>
            <RouterLink to="/" class="btn-gold-small">← العودة للموقع</RouterLink>
          </div>
        </header>

        <!-- Dashboard -->
        <div v-if="currentTab === 'dashboard'" class="tab-content">
          <div class="stats-grid">
            <div class="stat-card" v-for="stat in stats" :key="stat.label">
              <div class="stat-icon" :style="{ background: stat.bg, color: stat.color }" v-html="stat.icon"></div>
              <div>
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
          </div>

          <div class="charts-grid">
            <div class="chart-card">
              <h4>📊 Réservations par mois</h4>
              <div class="bar-chart">
                <div v-for="(count, month) in monthlyData" :key="month" class="bar-item">
                  <div class="bar" :style="{ height: (count / maxMonthly) * 120 + 'px', background: 'var(--gold)' }"></div>
                  <span>{{ month }}</span>
                </div>
              </div>
            </div>
            <div class="chart-card">
              <h4>📈 Services les plus demandés</h4>
              <div class="service-stats">
                <div v-for="svc in topServices" :key="svc.name" class="service-row">
                  <span>{{ svc.name }}</span>
                  <div class="service-bar-bg">
                    <div class="service-bar-fill" :style="{ width: svc.percent + '%', background: 'var(--gold)' }"></div>
                  </div>
                  <span class="service-count">{{ svc.count }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rendez-vous -->
        <div v-if="currentTab === 'rdv'" class="tab-content">
          <div class="table-toolbar">
            <input type="text" v-model="rdvSearch" placeholder="🔍 بحث..." class="search-input">
            <div class="table-actions">
              <button class="btn-outline-small" @click="exportData('rdv')">📥 تصدير</button>
              <button class="btn-outline-small" @click="clearAll('rdv')" style="color: #e74c3c;">🗑️ مسح الكل</button>
            </div>
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>الاسم</th>
                  <th>البريد</th>
                  <th>الهاتف</th>
                  <th>التاريخ</th>
                  <th>الوقت</th>
                  <th>الخدمة</th>
                  <th>الحالة</th>
                  <th>إجراء</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(rdv, idx) in filteredRdv" :key="idx">
                  <td>{{ idx + 1 }}</td>
                  <td>{{ rdv.firstName }} {{ rdv.lastName }}</td>
                  <td>{{ rdv.email }}</td>
                  <td>{{ rdv.phone }}</td>
                  <td>{{ rdv.date }}</td>
                  <td>{{ rdv.time }}</td>
                  <td>{{ rdv.service || 'غير محدد' }}</td>
                  <td>
                    <span :class="['status-badge', rdv.status || 'pending']">
                      {{ rdv.status === 'confirmed' ? 'مؤكد' : rdv.status === 'done' ? 'منجز' : 'قيد الانتظار' }}
                    </span>
                  </td>
                  <td>
                    <button class="action-btn confirm" @click="updateStatus(idx, 'confirmed')" title="تأكيد">✅</button>
                    <button class="action-btn done" @click="updateStatus(idx, 'done')" title="إنجاز">✔️</button>
                    <button class="action-btn delete" @click="deleteRdv(idx)" title="حذف">🗑️</button>
                  </td>
                </tr>
                <tr v-if="filteredRdv.length === 0">
                  <td colspan="9" class="empty-state">لا توجد مواعيد مسجلة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Messages -->
        <div v-if="currentTab === 'messages'" class="tab-content">
          <div class="table-toolbar">
            <input type="text" v-model="msgSearch" placeholder="🔍 بحث..." class="search-input">
            <div class="table-actions">
              <button class="btn-outline-small" @click="exportData('messages')">📥 تصدير</button>
              <button class="btn-outline-small" @click="clearAll('messages')" style="color: #e74c3c;">🗑️ مسح الكل</button>
            </div>
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>الاسم</th>
                  <th>البريد</th>
                  <th>الهاتف</th>
                  <th>الباقة</th>
                  <th>الرسالة</th>
                  <th>التاريخ</th>
                  <th>إجراء</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(msg, idx) in filteredMessages" :key="idx">
                  <td>{{ idx + 1 }}</td>
                  <td>{{ msg.name }}</td>
                  <td>{{ msg.email }}</td>
                  <td>{{ msg.phone || '-' }}</td>
                  <td>{{ msg.pack || '-' }}</td>
                  <td class="msg-preview">{{ msg.message.slice(0, 50) }}{{ msg.message.length > 50 ? '...' : '' }}</td>
                  <td>{{ msg.date || 'غير محدد' }}</td>
                  <td>
                    <button class="action-btn view" @click="viewMessage(msg)" title="عرض">👁️</button>
                    <button class="action-btn delete" @click="deleteMessage(idx)" title="حذف">🗑️</button>
                  </td>
                </tr>
                <tr v-if="filteredMessages.length === 0">
                  <td colspan="8" class="empty-state">لا توجد رسائل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <!-- Modal message -->
      <div v-if="showMsgModal" class="modal-overlay" @click.self="showMsgModal = false">
        <div class="modal-content">
          <h3>📩 الرسالة كاملة</h3>
          <div class="modal-body">
            <p><strong>الاسم :</strong> {{ currentMessage.name }}</p>
            <p><strong>البريد :</strong> {{ currentMessage.email }}</p>
            <p><strong>الهاتف :</strong> {{ currentMessage.phone || '-' }}</p>
            <p><strong>الباقة :</strong> {{ currentMessage.pack || '-' }}</p>
            <p><strong>التاريخ :</strong> {{ currentMessage.date || '-' }}</p>
            <hr>
            <p style="white-space: pre-wrap;">{{ currentMessage.message }}</p>
          </div>
          <button class="modal-close" @click="showMsgModal = false">إغلاق</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// ═══ État d'authentification ═══
const isAuthenticated = ref(false)
const loginPassword = ref('')
const loginError = ref(false)
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123' // ⚠️ À changer en production !

// ═══ État de l'app ═══
const sidebarCollapsed = ref(false)
const currentTab = ref('dashboard')
const rdvSearch = ref('')
const msgSearch = ref('')
const showMsgModal = ref(false)
const currentMessage = ref({})
const rdvData = ref([])
const msgData = ref([])

// ═══ Menu ═══
const menuItems = [
  { key: 'dashboard', label: 'لوحة التحكم', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>` },
  { key: 'rdv', label: 'المواعيد', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`, badge: 0 },
  { key: 'messages', label: 'الرسائل', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, badge: 0 }
]

const currentTitle = computed(() => {
  const found = menuItems.find(item => item.key === currentTab.value)
  return found ? found.label : 'لوحة التحكم'
})

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
  router.push('/admin')
}

// ═══ Vérification de session au chargement ═══
onMounted(() => {
  const auth = localStorage.getItem('admin_auth')
  if (auth === 'true') {
    isAuthenticated.value = true
    loadData()
  }
})

// ═══ Statistiques ═══
const stats = computed(() => [
  { label: 'المواعيد الكلية', value: rdvData.value.length, icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`, bg: '#e8f0fe', color: '#1877f2' },
  { label: 'المواعيد المؤكدة', value: rdvData.value.filter(r => r.status === 'confirmed').length, icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>`, bg: '#e6f7ed', color: '#00a86b' },
  { label: 'الرسائل الواردة', value: msgData.value.length, icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`, bg: '#fde7f1', color: '#d62976' },
  { label: 'في انتظار التأكيد', value: rdvData.value.filter(r => r.status === 'pending').length, icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`, bg: '#fef3c7', color: '#f8b101' }
])

// ═══ Graphiques ═══
const monthlyData = computed(() => {
  const months = {}
  rdvData.value.forEach(r => {
    if (r.date) {
      const m = r.date.substring(0, 7)
      months[m] = (months[m] || 0) + 1
    }
  })
  return months
})
const maxMonthly = computed(() => Math.max(1, ...Object.values(monthlyData.value)))

const topServices = computed(() => {
  const counts = {}
  rdvData.value.forEach(r => {
    if (r.service) {
      counts[r.service] = (counts[r.service] || 0) + 1
    }
  })
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5)
  const total = sorted.reduce((sum, [, count]) => sum + count, 0)
  return sorted.map(([name, count]) => ({
    name,
    count,
    percent: total ? (count / total) * 100 : 0
  }))
})

// ═══ Filtres ═══
const filteredRdv = computed(() => {
  const search = rdvSearch.value.trim().toLowerCase()
  return rdvData.value.filter(r =>
    r.firstName?.toLowerCase().includes(search) ||
    r.lastName?.toLowerCase().includes(search) ||
    r.email?.toLowerCase().includes(search) ||
    r.phone?.includes(search) ||
    r.service?.toLowerCase().includes(search)
  )
})

const filteredMessages = computed(() => {
  const search = msgSearch.value.trim().toLowerCase()
  return msgData.value.filter(m =>
    m.name?.toLowerCase().includes(search) ||
    m.email?.toLowerCase().includes(search) ||
    m.message?.toLowerCase().includes(search) ||
    m.pack?.toLowerCase().includes(search)
  )
})

// ═══ Mise à jour des badges ═══
function updateBadges() {
  const pending = rdvData.value.filter(r => r.status === 'pending').length
  const rdvItem = menuItems.find(i => i.key === 'rdv')
  if (rdvItem) rdvItem.badge = pending || 0
  const msgItem = menuItems.find(i => i.key === 'messages')
  if (msgItem) msgItem.badge = msgData.value.length || 0
}

// ═══ Chargement / sauvegarde ═══
function loadData() {
  const storedRdv = localStorage.getItem('infinity_rdv')
  const storedMsg = localStorage.getItem('infinity_messages')
  rdvData.value = storedRdv ? JSON.parse(storedRdv) : []
  msgData.value = storedMsg ? JSON.parse(storedMsg) : []
  updateBadges()
}

function saveData() {
  localStorage.setItem('infinity_rdv', JSON.stringify(rdvData.value))
  localStorage.setItem('infinity_messages', JSON.stringify(msgData.value))
  updateBadges()
}

// ═══ Actions RDV ═══
function updateStatus(idx, status) {
  if (rdvData.value[idx]) {
    rdvData.value[idx].status = status
    saveData()
  }
}

function deleteRdv(idx) {
  if (confirm('هل أنت متأكد من حذف هذا الموعد؟')) {
    rdvData.value.splice(idx, 1)
    saveData()
  }
}

// ═══ Actions Messages ═══
function viewMessage(msg) {
  currentMessage.value = msg
  showMsgModal.value = true
}

function deleteMessage(idx) {
  if (confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
    msgData.value.splice(idx, 1)
    saveData()
  }
}

// ═══ Actions générales ═══
function refreshData() {
  loadData()
  alert('تم تحديث البيانات')
}

function clearAll(type) {
  if (confirm(`هل أنت متأكد من حذف جميع ${type === 'rdv' ? 'المواعيد' : 'الرسائل'}؟`)) {
    if (type === 'rdv') rdvData.value = []
    else msgData.value = []
    saveData()
  }
}

function exportData(type) {
  const data = type === 'rdv' ? rdvData.value : msgData.value
  if (data.length === 0) {
    alert('لا توجد بيانات للتصدير')
    return
  }
  const json = JSON.stringify(data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${type}_data_${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// ═══ Exposer les fonctions pour les autres pages ═══
window.addRendezVous = (data) => {
  const rdv = { ...data, status: 'pending', date: data.date || new Date().toLocaleDateString('fr-CA') }
  rdvData.value.push(rdv)
  saveData()
}

window.addContactMessage = (data) => {
  const msg = { ...data, date: new Date().toLocaleDateString('fr-CA') }
  msgData.value.push(msg)
  saveData()
}
</script>

<style scoped>
/* ═══ TOUS LES STYLES EXISTANTS (inchangés) ═══ */
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
/* ... (tous les styles précédents sont conservés) ... */
/* Je les réécris en entier pour être complet */

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
.sidebar.collapsed {
  width: 72px;
}
.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px 30px 8px;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
}
.brand-icon {
  font-size: 28px;
  color: var(--gold);
}
.brand-text {
  font-size: 18px;
}
.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  color: var(--sidebar-text);
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  position: relative;
}
.nav-item:hover {
  background: rgba(255,255,255,0.08);
  color: #fff;
}
.nav-item.active {
  background: rgba(248, 177, 1, 0.15);
  color: var(--gold);
}
.nav-icon {
  font-size: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}
.nav-label {
  font-size: 14px;
  font-weight: 600;
}
.nav-badge {
  margin-right: auto;
  background: var(--gold);
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 20px;
}
.sidebar-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.btn-logout {
  background: rgba(255,255,255,0.06);
  border: none;
  color: var(--sidebar-text);
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;
}
.btn-logout:hover {
  background: rgba(255, 0, 0, 0.15);
  color: #ff6b6b;
}
.sidebar-toggle {
  background: rgba(255,255,255,0.06);
  border: none;
  color: var(--sidebar-text);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.sidebar-toggle:hover {
  background: rgba(255,255,255,0.12);
}

.main-content {
  flex: 1;
  padding: 28px 32px;
  overflow-y: auto;
}
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 12px;
}
.admin-header h2 {
  font-size: 26px;
  font-weight: 800;
  color: #0c1230;
}
.admin-header-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
.btn-refresh {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #1a202c;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 0.2s;
}
.btn-refresh:hover {
  background: var(--gold);
  color: #fff;
  border-color: var(--gold);
}
.btn-gold-small {
  background: var(--gold);
  color: #1a1a1a;
  padding: 8px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  transition: 0.2s;
}
.btn-gold-small:hover {
  background: var(--gold-dark);
  transform: translateY(-2px);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.stat-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}
.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.stat-card strong {
  display: block;
  font-size: 28px;
  font-weight: 800;
  color: #0c1230;
}
.stat-card span {
  font-size: 13px;
  color: #718096;
}

.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.chart-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.chart-card h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.bar-chart {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  height: 150px;
}
.bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 6px;
}
.bar {
  width: 100%;
  max-width: 36px;
  border-radius: 6px 6px 0 0;
  min-height: 4px;
  transition: height 0.5s;
}
.bar-item span {
  font-size: 11px;
  color: #718096;
}
.service-stats {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.service-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}
.service-row span:first-child {
  width: 100px;
  font-weight: 600;
  color: #1a202c;
}
.service-bar-bg {
  flex: 1;
  height: 8px;
  background: var(--border);
  border-radius: 10px;
  overflow: hidden;
}
.service-bar-fill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s;
}
.service-count {
  font-weight: 700;
  color: #0c1230;
}

.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.search-input {
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card-bg);
  font-family: inherit;
  font-size: 14px;
  min-width: 220px;
}
.search-input:focus {
  outline: none;
  border-color: var(--gold);
}
.table-actions {
  display: flex;
  gap: 8px;
}
.btn-outline-small {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}
.btn-outline-small:hover {
  border-color: var(--gold);
  color: var(--gold);
}
.table-wrapper {
  background: var(--card-bg);
  border-radius: 16px;
  border: 1px solid var(--border);
  overflow-x: auto;
  box-shadow: var(--shadow);
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  min-width: 700px;
}
thead {
  background: #f8fafc;
  border-bottom: 2px solid var(--border);
}
th {
  padding: 14px 16px;
  text-align: right;
  font-weight: 700;
  color: #4a5568;
}
td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  color: #1a202c;
}
tr:hover td {
  background: #f8fafc;
}
.empty-state {
  text-align: center;
  color: #a0aec0;
  padding: 40px !important;
}
.msg-preview {
  color: #4a5568;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}
.status-badge.pending {
  background: #fef3c7;
  color: #d69e2e;
}
.status-badge.confirmed {
  background: #e6f7ed;
  color: #00a86b;
}
.status-badge.done {
  background: #e8f0fe;
  color: #1877f2;
}

.action-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: 0.2s;
}
.action-btn:hover {
  background: var(--border);
}
.action-btn.confirm:hover { background: #e6f7ed; }
.action-btn.done:hover { background: #e8f0fe; }
.action-btn.delete:hover { background: #fde7e7; }
.action-btn.view:hover { background: #fef3c7; }

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  border-radius: 20px;
  padding: 32px;
  max-width: 560px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
}
.modal-content h3 {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 20px;
}
.modal-body p {
  margin: 6px 0;
  line-height: 1.7;
}
.modal-body hr {
  margin: 16px 0;
  border: none;
  border-top: 1px solid var(--border);
}
.modal-close {
  margin-top: 20px;
  background: var(--gold);
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  width: 100%;
}
.modal-close:hover {
  background: var(--gold-dark);
}

/* ═══ LOGIN OVERLAY ═══ */
.login-overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #0c1230, #1a1a2e);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.login-card {
  background: #fff;
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 420px;
  width: 90%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}
.login-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 800;
  color: #0c1230;
  margin-bottom: 8px;
}
.login-brand .brand-icon {
  font-size: 36px;
  color: var(--gold);
}
.login-card h2 {
  font-size: 28px;
  font-weight: 800;
  color: #0c1230;
  margin: 8px 0 4px;
}
.login-desc {
  color: #718096;
  font-size: 14px;
  margin-bottom: 24px;
}
.login-input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.login-input-group input {
  padding: 14px 18px;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  transition: 0.3s;
}
.login-input-group input:focus {
  outline: none;
  border-color: var(--gold);
  box-shadow: 0 0 0 4px rgba(248,177,1,0.15);
}
.login-btn {
  background: var(--gold);
  color: #1a1a1a;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}
.login-btn:hover {
  background: var(--gold-dark);
  transform: translateY(-2px);
}
.login-error {
  color: #e74c3c;
  font-size: 14px;
  margin-top: 12px;
  font-weight: 600;
}
.login-footer {
  margin-top: 20px;
  font-size: 13px;
  color: #a0aec0;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .charts-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .sidebar {
    width: 72px;
    padding: 16px 10px;
  }
  .sidebar .brand-text,
  .sidebar .nav-label,
  .sidebar .nav-badge,
  .sidebar .btn-logout span {
    display: none !important;
  }
  .sidebar .nav-item {
    justify-content: center;
    padding: 12px;
  }
  .sidebar .btn-logout {
    justify-content: center;
    padding: 10px;
  }
  .main-content {
    padding: 16px;
  }
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .login-card {
    padding: 32px 20px;
  }
}
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .table-toolbar {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>