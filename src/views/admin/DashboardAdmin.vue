<!-- src/views/admin/DashboardAdmin.vue -->
<template>
  <div>
    <!-- Statistiques -->
    <div class="stats-grid">
      <div class="stat-card" v-for="stat in stats" :key="stat.label">
        <div class="stat-icon" :style="{ background: stat.bg, color: stat.color }" v-html="stat.icon"></div>
        <div>
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Graphiques -->
    <div class="charts-grid">
      <div class="chart-card">
        <h4>📊 المواعيد حسب الشهر</h4>
        <div class="bar-chart">
          <div v-for="(count, month) in monthlyData" :key="month" class="bar-item">
            <div class="bar" :style="{ height: (count / maxMonthly) * 120 + 'px', background: 'var(--gold)' }"></div>
            <span>{{ month }}</span>
          </div>
        </div>
      </div>

      <div class="chart-card">
        <h4>📈 الخدمات الأكثر طلباً</h4>
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

    <!-- Dernières activités -->
    <div class="activities-card">
      <h4>🔄 آخر النشاطات</h4>
      <div v-if="recentActivities.length === 0" class="empty-state">لا توجد نشاطات حديثة</div>
      <div v-for="act in recentActivities" :key="act.id" class="activity-item">
        <span class="activity-icon">{{ act.icon }}</span>
        <span class="activity-text">{{ act.text }}</span>
        <span class="activity-time">{{ act.time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ data: { type: Array, default: () => [] } })

// ═══ Récupération des données ═══
const rdvData = computed(() => {
  const stored = localStorage.getItem('infinity_rdv')
  return stored ? JSON.parse(stored) : []
})

const msgData = computed(() => {
  const stored = localStorage.getItem('infinity_messages')
  return stored ? JSON.parse(stored) : []
})

// ═══ Statistiques ═══
const stats = computed(() => [
  {
    label: 'المواعيد الكلية',
    value: rdvData.value.length,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    bg: '#e8f0fe', color: '#1877f2'
  },
  {
    label: 'المواعيد المؤكدة',
    value: rdvData.value.filter(r => r.status === 'confirmed').length,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    bg: '#e6f7ed', color: '#00a86b'
  },
  {
    label: 'الرسائل الواردة',
    value: msgData.value.length,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    bg: '#fde7f1', color: '#d62976'
  },
  {
    label: 'في انتظار التأكيد',
    value: rdvData.value.filter(r => r.status === 'pending').length,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    bg: '#fef3c7', color: '#f8b101'
  }
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

// ═══ Dernières activités ═══
const recentActivities = computed(() => {
  const activities = []

  // Ajouter les derniers RDV
  rdvData.value.slice(-5).forEach(r => {
    activities.push({
      id: `rdv-${Date.now()}-${Math.random()}`,
      icon: '📅',
      text: `موعد جديد من ${r.firstName} ${r.lastName || ''}`,
      time: r.date || 'اليوم'
    })
  })

  // Ajouter les derniers messages
  msgData.value.slice(-5).forEach(m => {
    activities.push({
      id: `msg-${Date.now()}-${Math.random()}`,
      icon: '💬',
      text: `رسالة جديدة من ${m.name}`,
      time: m.date || 'اليوم'
    })
  })

  // Trier par date (du plus récent au plus ancien)
  return activities.sort((a, b) => b.time.localeCompare(a.time)).slice(0, 10)
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
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
.stat-card strong { display: block; font-size: 28px; font-weight: 800; color: #0c1230; }
.stat-card span { font-size: 13px; color: #718096; }

.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 30px;
}
.chart-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.chart-card h4 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }

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
.bar-item span { font-size: 11px; color: #718096; }

.service-stats { display: flex; flex-direction: column; gap: 10px; }
.service-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}
.service-row span:first-child { width: 100px; font-weight: 600; color: #1a202c; }
.service-bar-bg { flex: 1; height: 8px; background: var(--border); border-radius: 10px; overflow: hidden; }
.service-bar-fill { height: 100%; border-radius: 10px; transition: width 0.5s; }
.service-count { font-weight: 700; color: #0c1230; }

.activities-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}
.activities-card h4 { font-size: 16px; font-weight: 700; margin-bottom: 16px; }

.activity-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}
.activity-item:last-child { border-bottom: none; }
.activity-icon { font-size: 18px; }
.activity-text { flex: 1; font-size: 14px; color: #1a202c; }
.activity-time { font-size: 12px; color: #718096; }

.empty-state {
  text-align: center;
  color: #a0aec0;
  padding: 20px;
}

@media (max-width: 1024px) { .stats-grid { grid-template-columns: repeat(2, 1fr); } .charts-grid { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr; } }
</style>