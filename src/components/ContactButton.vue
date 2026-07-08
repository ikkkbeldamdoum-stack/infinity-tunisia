<!-- src/components/ContactButton.vue -->
<template>
  <button 
    @click="handleClick" 
    class="btn-contact" 
    :class="[variant, size]"
    :disabled="loading"
  >
    <span v-if="loading" class="spinner">⏳</span>
    <span v-else><slot>Demander un devis</slot></span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStorage } from '../composables/useAdminStorage'

const props = defineProps({
  pack: { type: String, default: '' },
  variant: { type: String, default: 'gold' },
  size: { type: String, default: 'md' },
  message: { type: String, default: '' }
})

const router = useRouter()
const { saveMessage } = useAdminStorage()
const loading = ref(false)

function handleClick() {
  loading.value = true
  
  // Sauvegarder la demande
  saveMessage({
    name: 'Visiteur site',
    email: '',
    phone: '',
    pack: props.pack || 'Demande de devis',
    message: props.message || `Demande d'information pour : ${props.pack || 'service non spécifié'}`,
    source: 'contact-button'
  })
  
  // Rediriger
  setTimeout(() => {
    router.push({ 
      name: 'contact', 
      query: { pack: props.pack } 
    })
    loading.value = false
  }, 300)
}
</script>

<style scoped>
.btn-contact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
}

.btn-contact.gold {
  background: #f8b101;
  color: #1a1a1a;
  box-shadow: 0 4px 20px rgba(248, 177, 1, 0.35);
}
.btn-contact.gold:hover {
  background: #db9c00;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(248, 177, 1, 0.45);
}

.btn-contact.outline {
  background: transparent;
  color: #1a1a1a;
  border-color: #e2e8f0;
}
.btn-contact.outline:hover {
  background: #f8fafc;
  border-color: #f8b101;
  transform: translateY(-3px);
}

.btn-contact.dark {
  background: rgba(255,255,255,0.05);
  color: #fff;
  border-color: rgba(255,255,255,0.3);
  backdrop-filter: blur(6px);
}
.btn-contact.dark:hover {
  background: rgba(255,255,255,0.12);
  border-color: #f8b101;
  transform: translateY(-3px);
}

.btn-contact.md { padding: 14px 32px; font-size: 15px; }
.btn-contact.sm { padding: 10px 20px; font-size: 13px; }
.btn-contact.lg { padding: 18px 40px; font-size: 17px; }

.btn-contact:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>