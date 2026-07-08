<!-- src/views/admin/ServicesAdmin.vue -->
<template>
  <div>
    <div class="table-toolbar">
      <input type="text" v-model="search" placeholder="🔍 بحث..." class="search-input" />
      <div class="table-actions">
        <button class="btn-primary-small" @click="openAddModal">➕ إضافة خدمة</button>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>الخدمة</th>
            <th>السعر</th>
            <th>الوصف</th>
            <th>الحالة</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service, idx) in filteredData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ service.name }}</td>
            <td>{{ service.price || '-' }}</td>
            <td>{{ truncate(service.description, 40) }}</td>
            <td>
              <span :class="['status-badge', service.active ? 'active' : 'inactive']">
                {{ service.active ? 'نشط' : 'غير نشط' }}
              </span>
            </td>
            <td>
              <button class="action-btn edit" @click="editService(idx)" title="تعديل">✏️</button>
              <button class="action-btn toggle" @click="toggleActive(idx)" title="تفعيل/تعطيل">
                {{ service.active ? '⏸️' : '▶️' }}
              </button>
              <button class="action-btn delete" @click="deleteItem(idx)" title="حذف">🗑️</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="6" class="empty-state">لا توجد خدمات</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Ajouter/Modifier -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content add-modal">
        <h3>{{ editIndex !== null ? '✏️ تعديل الخدمة' : '➕ إضافة خدمة جديدة' }}</h3>
        <form @submit.prevent="saveService">
          <div class="form-group">
            <label>اسم الخدمة *</label>
            <input type="text" v-model="currentService.name" required />
          </div>
          <div class="form-group">
            <label>السعر</label>
            <input type="text" v-model="currentService.price" placeholder="مثال: 390 د.ت / شهرياً" />
          </div>
          <div class="form-group">
            <label>الوصف</label>
            <textarea v-model="currentService.description" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>الميزات (كل ميزة في سطر)</label>
            <textarea v-model="currentService.features" rows="4" placeholder="ميزة 1&#10;ميزة 2&#10;ميزة 3"></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>الفئة</label>
              <input type="text" v-model="currentService.category" placeholder="مثال: تسويق، تصميم، تطوير..." />
            </div>
            <div class="form-group">
              <label>الحالة</label>
              <select v-model="currentService.active">
                <option :value="true">نشط</option>
                <option :value="false">غير نشط</option>
              </select>
            </div>
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

const currentService = ref({
  name: '',
  price: '',
  description: '',
  features: '',
  category: '',
  active: true
})

const filteredData = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return props.data
  return props.data.filter(svc =>
    svc.name?.toLowerCase().includes(s) ||
    svc.category?.toLowerCase().includes(s) ||
    svc.description?.toLowerCase().includes(s)
  )
})

function truncate(text, length) {
  if (!text) return '-'
  return text.length > length ? text.slice(0, length) + '...' : text
}

function openAddModal() {
  editIndex.value = null
  currentService.value = { name: '', price: '', description: '', features: '', category: '', active: true }
  showModal.value = true
}

function editService(idx) {
  editIndex.value = idx
  currentService.value = { ...props.data[idx] }
  showModal.value = true
}

function saveService() {
  if (!currentService.value.name) { alert('اسم الخدمة إلزامي'); return }
  const newData = [...props.data]
  if (editIndex.value !== null) {
    newData[editIndex.value] = { ...currentService.value }
  } else {
    newData.push({ ...currentService.value })
  }
  emit('update', 'services', newData)
  showModal.value = false
}

function toggleActive(idx) {
  const newData = [...props.data]
  newData[idx].active = !newData[idx].active
  emit('update', 'services', newData)
}

function deleteItem(idx) {
  if (confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
    const newData = [...props.data]
    newData.splice(idx, 1)
    emit('update', 'services', newData)
  }
}
</script>

<style scoped>
/* Styles identiques aux autres admin pages */
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
.status-badge.active { background: #e6f7ed; color: #00a86b; }
.status-badge.inactive { background: #fde7e7; color: #e74c3c; }

.action-btn {
  background: transparent; border: none; font-size: 16px; cursor: pointer;
  padding: 4px 8px; border-radius: 6px; transition: 0.2s;
}
.action-btn:hover { background: var(--border); }
.action-btn.edit:hover { background: #fef3c7; }
.action-btn.toggle:hover { background: #e8f0fe; }
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
.add-modal .form-group { margin-bottom: 16px; display: flex; flex-direction: column; gap: 4px; }
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
.add-modal .form-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
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