<!-- src/views/admin/ClientsAdmin.vue -->
<template>
  <div>
    <!-- Bouton Ajouter -->
    <div class="table-toolbar">
      <input type="text" v-model="search" placeholder="🔍 بحث..." class="search-input" />
      <div class="table-actions">
        <button class="btn-primary-small" @click="openAddModal">➕ إضافة عميل</button>
        <button class="btn-outline-small" @click="exportData">📥 تصدير</button>
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
            <th>الشركة</th>
            <th>الخدمات</th>
            <th>التاريخ</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, idx) in filteredData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.email }}</td>
            <td>{{ client.phone || '-' }}</td>
            <td>{{ client.company || '-' }}</td>
            <td>{{ client.services || '-' }}</td>
            <td>{{ client.date || '-' }}</td>
            <td>
              <button class="action-btn view" @click="viewClient(client)" title="عرض">👁️</button>
              <button class="action-btn delete" @click="deleteItem(idx)" title="حذف">🗑️</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="8" class="empty-state">لا توجد عملاء</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Ajouter -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="showAddModal = false">
      <div class="modal-content add-modal">
        <h3>➕ إضافة عميل جديد</h3>
        <form @submit.prevent="addClient">
          <div class="form-row">
            <div class="form-group">
              <label>الاسم الكامل *</label>
              <input type="text" v-model="newClient.name" required />
            </div>
            <div class="form-group">
              <label>البريد الإلكتروني *</label>
              <input type="email" v-model="newClient.email" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>رقم الهاتف</label>
              <input type="tel" v-model="newClient.phone" />
            </div>
            <div class="form-group">
              <label>الشركة / العلامة</label>
              <input type="text" v-model="newClient.company" />
            </div>
          </div>
          <div class="form-group">
            <label>الخدمات المهتم بها</label>
            <input type="text" v-model="newClient.services" placeholder="مثال: تصميم، تسويق، تصوير..." />
          </div>
          <div class="form-group">
            <label>ملاحظات</label>
            <textarea v-model="newClient.notes" rows="3"></textarea>
          </div>
          <div class="modal-actions">
            <button type="button" class="btn-cancel" @click="showAddModal = false">إلغاء</button>
            <button type="submit" class="btn-primary-small">إضافة العميل</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Vue -->
    <div v-if="showViewModal" class="modal-overlay" @click.self="showViewModal = false">
      <div class="modal-content">
        <h3>👤 معلومات العميل</h3>
        <div class="modal-body">
          <p><strong>الاسم :</strong> {{ viewClientData.name }}</p>
          <p><strong>البريد :</strong> {{ viewClientData.email }}</p>
          <p><strong>الهاتف :</strong> {{ viewClientData.phone || '-' }}</p>
          <p><strong>الشركة :</strong> {{ viewClientData.company || '-' }}</p>
          <p><strong>الخدمات :</strong> {{ viewClientData.services || '-' }}</p>
          <p><strong>التاريخ :</strong> {{ viewClientData.date || '-' }}</p>
          <hr>
          <p><strong>ملاحظات :</strong></p>
          <p style="white-space: pre-wrap;">{{ viewClientData.notes || 'لا توجد ملاحظات' }}</p>
        </div>
        <button class="modal-close" @click="showViewModal = false">إغلاق</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ data: { type: Array, default: () => [] } })
const emit = defineEmits(['update'])

const search = ref('')
const showAddModal = ref(false)
const showViewModal = ref(false)
const viewClientData = ref({})

const newClient = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  services: '',
  notes: '',
  date: new Date().toISOString().slice(0, 10)
})

const filteredData = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return props.data
  return props.data.filter(c =>
    c.name?.toLowerCase().includes(s) ||
    c.email?.toLowerCase().includes(s) ||
    c.company?.toLowerCase().includes(s)
  )
})

function openAddModal() {
  newClient.value = { name: '', email: '', phone: '', company: '', services: '', notes: '', date: new Date().toISOString().slice(0, 10) }
  showAddModal.value = true
}

function addClient() {
  if (!newClient.value.name || !newClient.value.email) { alert('الاسم والبريد إلزاميان'); return }
  const newData = [...props.data, { ...newClient.value }]
  emit('update', 'clients', newData)
  showAddModal.value = false
}

function viewClient(client) {
  viewClientData.value = client
  showViewModal.value = true
}

function deleteItem(idx) {
  if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
    const newData = [...props.data]
    newData.splice(idx, 1)
    emit('update', 'clients', newData)
  }
}

function exportData() {
  if (props.data.length === 0) { alert('لا توجد بيانات للتصدير'); return }
  const json = JSON.stringify(props.data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `clients_${new Date().toISOString().slice(0,10)}.json`
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

.action-btn {
  background: transparent; border: none; font-size: 16px; cursor: pointer;
  padding: 4px 8px; border-radius: 6px; transition: 0.2s;
}
.action-btn:hover { background: var(--border); }
.action-btn.view:hover { background: #fef3c7; }
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
.modal-body p { margin: 6px 0; line-height: 1.7; }
.modal-body hr { margin: 16px 0; border: none; border-top: 1px solid var(--border); }
.modal-close {
  margin-top: 20px; background: var(--gold); border: none; padding: 12px 24px;
  border-radius: 10px; font-weight: 700; font-size: 15px; cursor: pointer; width: 100%;
}
.modal-close:hover { background: var(--gold-dark); }

.add-modal .form-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
}
.add-modal .form-group { display: flex; flex-direction: column; gap: 4px; }
.add-modal .form-group label { font-size: 14px; font-weight: 600; color: #4a5568; }
.add-modal .form-group input,
.add-modal .form-group textarea {
  padding: 10px 14px; border: 1px solid var(--border); border-radius: 8px;
  font-family: inherit; font-size: 14px;
}
.add-modal .form-group input:focus,
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