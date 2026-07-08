<!-- src/views/admin/MessagesAdmin.vue -->
<template>
  <div>
    <div class="table-toolbar">
      <input type="text" v-model="search" placeholder="🔍 بحث..." class="search-input" />
      <div class="table-actions">
        <button class="btn-outline-small" @click="exportData">📥 تصدير JSON</button>
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
            <th>الباقة</th>
            <th>الرسالة</th>
            <th>التاريخ</th>
            <th>إجراء</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(msg, idx) in filteredData" :key="idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ msg.name }}</td>
            <td>{{ msg.email }}</td>
            <td>{{ msg.phone || '-' }}</td>
            <td>{{ msg.pack || '-' }}</td>
            <td class="msg-preview">{{ truncate(msg.message, 50) }}</td>
            <td>{{ msg.date || 'غير محدد' }}</td>
            <td>
              <button class="action-btn view" @click="viewMessage(msg)" title="عرض">👁️</button>
              <button class="action-btn delete" @click="deleteItem(idx)" title="حذف">🗑️</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="8" class="empty-state">لا توجد رسائل</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
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
        <button class="modal-close" @click="showModal = false">إغلاق</button>
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
const currentMessage = ref({})

const filteredData = computed(() => {
  const s = search.value.trim().toLowerCase()
  if (!s) return props.data
  return props.data.filter(m =>
    m.name?.toLowerCase().includes(s) ||
    m.email?.toLowerCase().includes(s) ||
    m.message?.toLowerCase().includes(s) ||
    m.pack?.toLowerCase().includes(s)
  )
})

function truncate(text, length) {
  if (!text) return '-'
  return text.length > length ? text.slice(0, length) + '...' : text
}

function viewMessage(msg) {
  currentMessage.value = msg
  showModal.value = true
}

function deleteItem(idx) {
  if (confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
    const newData = [...props.data]
    newData.splice(idx, 1)
    emit('update', 'messages', newData)
  }
}

function clearAll() {
  if (confirm('هل أنت متأكد من حذف جميع الرسائل؟')) {
    emit('update', 'messages', [])
  }
}

function exportData() {
  if (props.data.length === 0) { alert('لا توجد بيانات للتصدير'); return }
  const json = JSON.stringify(props.data, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `messages_${new Date().toISOString().slice(0,10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
/* Styles hérités de RendezVousAdmin */
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
.msg-preview { color: #4a5568; max-width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

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
</style>