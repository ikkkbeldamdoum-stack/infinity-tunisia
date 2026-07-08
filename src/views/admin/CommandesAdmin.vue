<!-- src/views/admin/CommandesAdmin.vue -->
<template>
  <div class="commandes-admin">

    <!-- ═══ Filtres statut ═══ -->
    <div class="filters">
      <button
        v-for="f in statusFilters"
        :key="f.key"
        class="filter-btn"
        :class="{ active: activeFilter === f.key }"
        @click="activeFilter = f.key"
      >
        {{ f.label }}
        <span class="filter-count">{{ countFor(f.key) }}</span>
      </button>
    </div>

    <!-- ═══ Liste vide ═══ -->
    <div v-if="filteredOrders.length === 0" class="empty-state">
      📭 لا توجد طلبات في هذه الفئة
    </div>

    <!-- ═══ Liste des commandes ═══ -->
    <div v-else class="orders-list">
      <div
        v-for="order in filteredOrders"
        :key="order.id"
        class="order-card"
        :class="{ open: expandedId === order.id }"
      >
        <div class="order-summary" @click="toggleExpand(order.id)">
          <div class="order-main">
            <span class="order-product">{{ order.product }}</span>
            <span class="order-contact">{{ order.name }} — {{ order.phone }}</span>
          </div>

          <div class="order-side">
            <span v-if="order.estimatedPrice" class="order-price">{{ formatPrice(order.estimatedPrice) }} د.ت</span>
            <span class="order-date">{{ formatDate(order.date) }}</span>
            <span class="status-badge" :class="'status-' + order.status">{{ statusLabel(order.status) }}</span>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

        <div v-if="expandedId === order.id" class="order-details">
          <table class="details-table">
            <tbody>
              <tr v-for="(d, idx) in order.details" :key="idx">
                <th>{{ d.label }}</th>
                <td>{{ d.value || '—' }}</td>
              </tr>
            </tbody>
          </table>

          <div class="order-actions">
            <select class="status-select" :value="order.status" @change="changeStatus(order, $event.target.value)">
              <option value="pending">قيد الانتظار</option>
              <option value="contacted">تم التواصل</option>
              <option value="completed">مكتملة</option>
              <option value="cancelled">ملغاة</option>
            </select>
            <a :href="'tel:' + order.phone" class="btn-call" @click.stop>📞 اتصال</a>
            <button class="btn-delete" @click.stop="deleteOrder(order)">🗑️ حذف</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] }
})
const emit = defineEmits(['update'])

const activeFilter = ref('all')
const expandedId = ref(null)

const statusFilters = [
  { key: 'all', label: 'الكل' },
  { key: 'pending', label: 'قيد الانتظار' },
  { key: 'contacted', label: 'تم التواصل' },
  { key: 'completed', label: 'مكتملة' },
  { key: 'cancelled', label: 'ملغاة' },
]

function countFor(key) {
  if (key === 'all') return props.data.length
  return props.data.filter(o => o.status === key).length
}

const filteredOrders = computed(() => {
  const list = activeFilter.value === 'all'
    ? props.data
    : props.data.filter(o => o.status === activeFilter.value)
  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date))
})

function toggleExpand(id) {
  expandedId.value = expandedId.value === id ? null : id
}

function statusLabel(status) {
  return statusFilters.find(f => f.key === status)?.label || status
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('ar-TN', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatPrice(n) {
  return Number(n || 0).toLocaleString('ar', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function changeStatus(order, newStatus) {
  const updated = props.data.map(o => o.id === order.id ? { ...o, status: newStatus } : o)
  emit('update', 'commandes', updated)
}

function deleteOrder(order) {
  if (!confirm('هل تريد حذف هذا الطلب نهائياً؟')) return
  const updated = props.data.filter(o => o.id !== order.id)
  emit('update', 'commandes', updated)
  if (expandedId.value === order.id) expandedId.value = null
}
</script>

<style scoped>
.commandes-admin { display: flex; flex-direction: column; gap: 20px; }

.filters { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-btn {
  display: flex; align-items: center; gap: 6px; background: #fff; border: 1px solid var(--border, #e2e8f0);
  border-radius: 20px; padding: 8px 16px; font-family: inherit; font-size: 13px; font-weight: 700;
  color: #4a5568; cursor: pointer; transition: 0.2s;
}
.filter-btn:hover { border-color: var(--gold, #f8b101); }
.filter-btn.active { background: var(--gold, #f8b101); border-color: var(--gold, #f8b101); color: #1a1a1a; }
.filter-count {
  background: rgba(0,0,0,0.08); border-radius: 10px; padding: 1px 8px; font-size: 11px;
}
.filter-btn.active .filter-count { background: rgba(0,0,0,0.15); }

.empty-state { text-align: center; color: #a0aec0; padding: 60px 20px; font-size: 16px; }

.orders-list { display: flex; flex-direction: column; gap: 10px; }
.order-card {
  background: #fff; border: 1px solid var(--border, #e2e8f0); border-radius: 12px;
  box-shadow: var(--shadow, 0 2px 12px rgba(0,0,0,0.06)); overflow: hidden;
}
.order-summary {
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
  padding: 16px 20px; cursor: pointer; flex-wrap: wrap;
}
.order-main { display: flex; flex-direction: column; gap: 4px; }
.order-product { font-weight: 800; font-size: 14.5px; color: #0c1230; }
.order-contact { font-size: 12.5px; color: #718096; }

.order-side { display: flex; align-items: center; gap: 14px; }
.order-price { font-weight: 800; color: #d4a63a; font-size: 13.5px; }
.order-date { font-size: 12px; color: #a0aec0; }

.status-badge { padding: 4px 12px; border-radius: 20px; font-size: 11.5px; font-weight: 800; }
.status-pending { background: rgba(248,177,1,0.15); color: #b8860b; }
.status-contacted { background: rgba(66,133,244,0.15); color: #2563eb; }
.status-completed { background: rgba(34,197,94,0.15); color: #16a34a; }
.status-cancelled { background: rgba(239,68,68,0.15); color: #dc2626; }

.chevron { color: #a0aec0; transition: transform 0.2s; }
.order-card.open .chevron { transform: rotate(180deg); }

.order-details { border-top: 1px solid var(--border, #e2e8f0); padding: 16px 20px; background: #fafbfc; }
.details-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
.details-table tr { border-bottom: 1px solid var(--border, #e2e8f0); }
.details-table tr:last-child { border-bottom: none; }
.details-table th, .details-table td { text-align: right; padding: 8px 10px; font-size: 13px; }
.details-table th { width: 160px; color: #718096; font-weight: 700; }
.details-table td { color: #1a202c; font-weight: 600; }

.order-actions { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
.status-select {
  padding: 8px 14px; border-radius: 8px; border: 1px solid var(--border, #e2e8f0);
  font-family: inherit; font-size: 13px; font-weight: 700; background: #fff; cursor: pointer;
}
.btn-call, .btn-delete {
  padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 700; border: none;
  cursor: pointer; text-decoration: none; font-family: inherit;
}
.btn-call { background: rgba(34,197,94,0.12); color: #16a34a; }
.btn-call:hover { background: rgba(34,197,94,0.22); }
.btn-delete { background: rgba(239,68,68,0.1); color: #dc2626; }
.btn-delete:hover { background: rgba(239,68,68,0.2); }

@media (max-width: 640px) {
  .order-summary { flex-direction: column; align-items: flex-start; }
  .order-side { width: 100%; justify-content: space-between; }
}
</style>