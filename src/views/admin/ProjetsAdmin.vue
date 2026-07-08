<!-- src/views/admin/ProjetsAdmin.vue -->
<template>
  <div>
    <div class="table-toolbar">
      <input type="text" v-model="search" placeholder="🔍 بحث..." class="search-input" />
      <div class="table-actions">
        <button class="btn-primary-small" @click="openAddModal">➕ إضافة مشروع</button>
        <button class="btn-outline-small" @click="exportData">📥 تصدير</button>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>اسم المشروع</th>
            <th>العميل</th>
            <th>الخدمة</th>
            <th>الحالة</th>
            <th>التاريخ</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(projet, idx) in filteredData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ projet.name }}</td>
            <td>{{ projet.client }}</td>
            <td>{{ projet.service }}</td>
            <td>
              <span :class="['status-badge', projet.status]">
                {{ statusLabels[projet.status] || projet.status }}
              </span>
            </td>
            <td>{{ projet.date || '-' }}</td>
            <td>
              <button class="action-btn edit" @click="editProjet(idx)" title="تعديل">✏️</button>
              <button class="action-btn delete" @click="deleteItem(idx)" title="حذف">🗑️</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="7" class="empty-state">لا توجد مشاريع</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Ajouter/Modifier -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content add-modal">
        <h3>{{ editIndex !== null ? '✏️ تعديل المشروع' : '➕ إضافة مشروع جديد' }}</h3>
        <form @submit.prevent="saveProjet">
          <div class="form-row">
            <div class="form-group">
              <label>اسم المشروع *</label>
              <input type="text" v-model="currentProjet.name" required />
            </div>
            <div class="form-group">
              <label>اسم العميل *</label>
              <input type="text" v-model="currentProjet.client" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>الخدمة *</label>
              <input type="text" v-model="currentProjet.service" required />
            </div>
            <div class="form-group">
              <label>الحالة</label>
              <select v-model="currentProjet.status">
                <option value="en-cours">قيد التنفيذ</option>
                <option value="termine">منجز</option>
                <option value="en-attente">في انتظار</option>
                <option value="annule">ملغى</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>الوصف</label>
            <textarea v-model="currentProjet.description" rows="3"></textarea>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn-cancel" @click="showModal = false">إلغاء</button>
            <button type="submit" class="btn-primary-small">{{ editIndex !== null ? 'تحديث' : 'إضافة' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ data: { type: Array, default: () => [] } })
const emit = defineEmits(['update'])

const search = ref('')
const showModal = ref(false)
const editIndex = ref(null)

const statusLabels = {
  'en-cours': 'قيد التنفيذ',
  'termine': 'منجز',
  'en-attente': 'في انتظار',
  'annule': 'ملغى'
}

const currentProjet = ref({
  name: '',
  client: '',
  service: '',
  status: 'en-cours',
  description: '',
  date: new Date().toISOString().slice(0, 10)
})

const filteredData = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return props.data
  return props.data.filter(p =>
    p.name?.toLowerCase().includes(s) ||
    p.client?.toLowerCase().includes(s) ||
    p.service?.toLowerCase().includes(s)
  )
})

function openAddModal() {
  editIndex.value = null
  currentProjet.value = {
    name: '', client: '', service: '', status: 'en-cours',
    description: '', date: new Date().toISOString().slice(0, 10)
  }
  showModal.value = true
}

function editProjet(idx) {
  editIndex.value = idx
  currentProjet.value = { ...props.data[idx] }
  showModal.value = true
}

function saveProjet() {
  if (!currentProjet.value.name || !currentProjet.value.client || !currentProjet.value.service) {
    alert('الاسم والعميل والخدمة إلزامية')
    return
  }
  const newData = [...props.data]
  if (editIndex.value !== null) {
    newData[editIndex.value] = { ...currentProjet.value }
  } else {
    newData.push({ ...currentProjet.value })
  }
  emit('update', 'projets', newData)
  showModal.value = false
}

function deleteItem(idx) {
  if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
    const newData = [...props.data]
    newData.splice(idx, 1)
    emit('update', 'projets', newData)
  }
}

function exportData() {
  if (props.data.length === 0) { alert('لا توجد بيانات للتصدير'); return }
  const json = JSON.stringify(props.data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `projets_${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
/* Styles identiques à ClientsAdmin */
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
.btn-primary-small {
  background: var(--gold); color: #1a1a1a; border: none; padding: 8px 16px;
  border-radius: 6px; font-weight: 700; font-size: 13px; cursor: pointer; transition: 0.2s;
}
.btn-primary-small:hover { background: var(--gold-dark); transform: translateY(-2px); }
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
.status-badge.en-cours { background: #fef3c7; color: #d69e2e; }
.status-badge.termine { background: #e6f7ed; color: #00a86b; }
.status-badge.en-attente { background: #e8f0fe; color: #1877f2; }
.status-badge.annule { background: #fde7e7; color: #e74c3c; }

.action-btn {
  background: transparent; border: none; font-size: 16px; cursor: pointer;
  padding: 4px 8px; border-radius: 6px; transition: 0.2s;
}
.action-btn:hover { background: var(--border); }
.action-btn.edit:hover { background: #fef3c7; }
.action-btn.delete:hover { background: #fde7e7; }

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
}
.modal-content {
  background: #fff; border-radius: 20px; padding: 32px; max-width: 560px;
  width: 90%; max-height: 80vh; overflow-y: auto;
}
.modal-content h3 { font-size: 22px; font-weight: 800; margin-bottom: 20px; }
.add-modal .form-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
}
.add-modal .form-group { display: flex; flex-direction: column; gap: 4px; }
.add-modal .form-group label { font-size: 14px; font-weight: 600; color: #4a5568; }
.add-modal .form-group input,
.add-modal .form-group select,
.add-modal .form-group textarea {
  padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px;
  font-family: inherit; font-size: 14px;
}
.add-modal .form-group input:focus,
.add-modal .form-group select:focus,
.add-modal .form-group textarea:focus {
  outline: none; border-color: var(--gold);
}
.modal-actions {
  display: flex; gap: 12px; justify-content: flex-end; margin-top: 20px;
}
.btn-cancel {
  background: transparent; border: 1px solid var(--border); padding: 10px 20px;
  border-radius: 8px; font-weight: 600; cursor: pointer;
}
.btn-cancel:hover { background: #f8fafc; }

@media (max-width: 600px) {
  .add-modal .form-row { grid-template-columns: 1fr; }
}
</style>