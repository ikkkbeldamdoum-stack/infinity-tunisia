<!-- src/views/admin/RendezVousAdmin.vue -->
<template>
  <div>
    <div class="table-toolbar">
      <input type="text" v-model="search" placeholder="🔍 بحث..." class="search-input" />
      <div class="table-actions">
        <button class="btn-outline-small" @click="exportData">📥 تصدير JSON</button>
        <button class="btn-outline-small" @click="exportExcel">📊 تصدير Excel</button>
        <button class="btn-outline-small" @click="clearAll" style="color: #e74c3c;">🗑️ مسح الكل</button>
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
          <tr v-for="(rdv, idx) in filteredData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ rdv.firstName }} {{ rdv.lastName || '' }}</td>
            <td>{{ rdv.email }}</td>
            <td>{{ rdv.phone }}</td>
            <td>{{ rdv.date }}</td>
            <td>{{ rdv.time }}</td>
            <td>{{ rdv.service || 'غير محدد' }}</td>
            <td>
              <span :class="['status-badge', rdv.status || 'pending']">
                {{ statusLabels[rdv.status] || 'قيد الانتظار' }}
              </span>
            </td>
            <td>
              <button class="action-btn confirm" @click="updateStatus(idx, 'confirmed')" title="تأكيد">✅</button>
              <button class="action-btn done" @click="updateStatus(idx, 'done')" title="إنجاز">✔️</button>
              <button class="action-btn delete" @click="deleteItem(idx)" title="حذف">🗑️</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="9" class="empty-state">لا توجد مواعيد مسجلة</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <span>إجمالي: {{ data.length }} موعد</span>
      <span>مؤكد: {{ confirmedCount }}</span>
      <span>في انتظار: {{ pendingCount }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ data: { type: Array, default: () => [] } })
const emit = defineEmits(['update'])

const search = ref('')
const statusLabels = { pending: 'قيد الانتظار', confirmed: 'مؤكد', done: 'منجز' }

const filteredData = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return props.data
  return props.data.filter(r =>
    r.firstName?.toLowerCase().includes(s) ||
    r.lastName?.toLowerCase().includes(s) ||
    r.email?.toLowerCase().includes(s) ||
    r.phone?.includes(s) ||
    r.service?.toLowerCase().includes(s)
  )
})

const confirmedCount = computed(() => props.data.filter(r => r.status === 'confirmed').length)
const pendingCount = computed(() => props.data.filter(r => r.status === 'pending').length)

function updateStatus(idx, status) {
  const newData = [...props.data]
  if (newData[idx]) {
    newData[idx].status = status
    emit('update', 'rdv', newData)
  }
}

function deleteItem(idx) {
  if (confirm('هل أنت متأكد من حذف هذا الموعد؟')) {
    const newData = [...props.data]
    newData.splice(idx, 1)
    emit('update', 'rdv', newData)
  }
}

function clearAll() {
  if (confirm('هل أنت متأكد من حذف جميع المواعيد؟')) {
    emit('update', 'rdv', [])
  }
}

function exportData() {
  if (props.data.length === 0) { alert('لا توجد بيانات للتصدير'); return }
  const json = JSON.stringify(props.data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `rdv_${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function exportExcel() {
  if (props.data.length === 0) { alert('لا توجد بيانات للتصدير'); return }
  const headers = ['الاسم', 'البريد', 'الهاتف', 'التاريخ', 'الوقت', 'الخدمة', 'الحالة']
  const rows = props.data.map(r => [
    `${r.firstName} ${r.lastName || ''}`,
    r.email, r.phone, r.date, r.time,
    r.service || 'غير محدد',
    statusLabels[r.status] || 'قيد الانتظار'
  ])
  let csv = headers.join(',') + '\n'
  rows.forEach(row => { csv += row.join(',') + '\n' })
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `rdv_${new Date().toISOString().slice(0,10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.table-toolbar {
  display: flex; justify-content: space-between; align-items: center;
  gap: 16px; margin-bottom: 18px; flex-wrap: wrap;
}
.search-input {
  padding: 10px 16px; border: 1px solid var(--border); border-radius: 8px;
  background: var(--card-bg); font-family: inherit; font-size: 14px; min-width: 220px;
}
.search-input:focus { outline: none; border-color: var(--gold); }
.table-actions { display: flex; gap: 8px; flex-wrap: wrap; }
.btn-outline-small {
  background: transparent; border: 1px solid var(--border); border-radius: 6px;
  padding: 6px 14px; font-size: 13px; font-weight: 600; cursor: pointer; transition: 0.2s;
}
.btn-outline-small:hover { border-color: var(--gold); color: var(--gold); }

.table-wrapper {
  background: #fff; border-radius: 16px; border: 1px solid var(--border);
  overflow-x: auto; box-shadow: var(--shadow);
}
table { width: 100%; border-collapse: collapse; font-size: 14px; min-width: 700px; }
thead { background: #f8fafc; border-bottom: 2px solid var(--border); }
th { padding: 14px 16px; text-align: right; font-weight: 700; color: #4a5568; }
td { padding: 12px 16px; border-bottom: 1px solid var(--border); color: #1a202c; }
tr:hover td { background: #f8fafc; }
.empty-state { text-align: center; color: #a0aec0; padding: 40px !important; }

.status-badge {
  display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;
}
.status-badge.pending { background: #fef3c7; color: #d69e2e; }
.status-badge.confirmed { background: #e6f7ed; color: #00a86b; }
.status-badge.done { background: #e8f0fe; color: #1877f2; }

.action-btn {
  background: transparent; border: none; font-size: 16px; cursor: pointer;
  padding: 4px 8px; border-radius: 6px; transition: 0.2s;
}
.action-btn:hover { background: var(--border); }
.action-btn.confirm:hover { background: #e6f7ed; }
.action-btn.done:hover { background: #e8f0fe; }
.action-btn.delete:hover { background: #fde7e7; }

.table-footer {
  display: flex; gap: 20px; padding: 12px 0; font-size: 14px; color: #4a5568; font-weight: 600;
}
</style>