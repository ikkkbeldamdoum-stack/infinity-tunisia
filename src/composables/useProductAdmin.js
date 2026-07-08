// src/composables/useProductAdmin.js
import { ref } from 'vue'
import { useAdminStorage } from './useAdminStorage'
import { getProductCategory, PRODUCT_LABELS } from '../data/productCategories'

export function useProductAdmin(productSlug) {
  const { saveMessage } = useAdminStorage()
  const loading = ref(false)
  const error = ref(null)
  const success = ref(false)

  const category = getProductCategory(productSlug)
  const productName = PRODUCT_LABELS[category] || productSlug

  /**
   * Soumettre une demande de devis
   */
  const submitQuote = async (data) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      const messageData = {
        name: data.name || 'Visiteur',
        email: data.email || '',
        phone: data.phone || '',
        pack: productName,
        message: data.message || `Demande d'information pour : ${productName}`,
        source: 'product-page',
        productSlug: productSlug,
        category: category,
        selectedOptions: data.options || {},
        estimatedPrice: data.price || null,
        quantity: data.quantity || null
      }

      await saveMessage(messageData)
      success.value = true
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Une erreur est survenue'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    success,
    category,
    productName,
    submitQuote
  }
}