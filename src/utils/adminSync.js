// src/utils/adminSync.js
// ═══════════════════════════════════════════════════════════════════════════
// Utilitaire de synchronisation "front produit" → "panneau admin"
// Toute page produit qui reçoit une commande / un devis rapide appelle
// pushAdminRecord() pour que la donnée apparaisse instantanément dans
// AdminView.vue (badge de menu + onglet correspondant), exactement comme
// le fait déjà le flux /contact pour infinity_messages.
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Enregistre une nouvelle entrée dans le localStorage utilisé par l'admin,
 * puis prévient AdminView (s'il est ouvert dans un autre onglet/fenêtre ou
 * déjà monté) via l'événement "admin-data-updated".
 *
 * @param {string} storageKey - ex: 'infinity_commandes', 'infinity_messages'
 * @param {object} record - l'enregistrement à ajouter (id/date/status ajoutés si absents)
 * @returns {object} l'enregistrement final tel qu'il a été sauvegardé
 */
export function pushAdminRecord(storageKey, record) {
  const list = JSON.parse(localStorage.getItem(storageKey) || '[]')

  const finalRecord = {
    id: record.id ?? Date.now(),
    date: record.date ?? new Date().toISOString(),
    status: record.status ?? 'pending',
    ...record,
  }

  list.unshift(finalRecord)
  localStorage.setItem(storageKey, JSON.stringify(list))

  // Prévient AdminView si déjà monté dans la même page (même onglet navigateur)
  window.dispatchEvent(
    new CustomEvent('admin-data-updated', { detail: { key: storageKey, data: list } })
  )

  return finalRecord
}

/**
 * Construit un enregistrement "commande produit" normalisé afin que
 * CommandesAdmin.vue puisse afficher toutes les commandes (Cartes de visite,
 * Brochures, NFC, etc.) de façon homogène, quelles que soient leurs options.
 *
 * @param {string} product - nom lisible du produit, ex: 'بطاقات الأعمال'
 * @param {string} productKey - slug du produit, ex: 'business-card'
 * @param {{name: string, phone: string}} contact
 * @param {Array<{label: string, value: string}>} details - options choisies, déjà formatées pour l'affichage
 * @param {number|null} estimatedPrice - prix estimé si disponible, sinon null
 */
export function buildOrderRecord({ product, productKey, contact, details = [], estimatedPrice = null }) {
  return {
    product,
    productKey,
    name: contact.name,
    phone: contact.phone,
    details,
    estimatedPrice,
  }
}