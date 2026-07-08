// src/composables/useAdminStorage.js
export function useAdminStorage() {

  // ═══ Fonction générique pour sauvegarder ═══
  function saveToStorage(key, data) {
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    const newEntry = {
      ...data,
      id: Date.now() + Math.random().toString(36).slice(2, 6),
      date: data.date || new Date().toISOString().slice(0, 10),
      createdAt: new Date().toISOString()
    }
    existing.push(newEntry)
    localStorage.setItem(key, JSON.stringify(existing))
    
    // ═══ Déclencher un événement pour l'admin ═══
    window.dispatchEvent(new CustomEvent('admin-data-updated', { 
      detail: { key, data: existing }
    }))
    
    return existing
  }

  // ═══ Sauvegarder un message (contact / devis) ═══
  function saveMessage(data) {
    return saveToStorage('infinity_messages', {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      pack: data.pack || '',
      message: data.message || '',
      source: data.source || 'site'
    })
  }

  // ═══ Sauvegarder un rendez-vous ═══
  function saveRendezVous(data) {
    return saveToStorage('infinity_rdv', {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || '',
      date: data.date || '',
      time: data.time || '',
      service: data.service || '',
      message: data.message || '',
      status: 'pending'
    })
  }

  // ═══ Sauvegarder un client ═══
  function saveClient(data) {
    return saveToStorage('infinity_clients', {
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      company: data.company || '',
      services: data.services || '',
      notes: data.notes || '',
      source: data.source || 'site'
    })
  }

  // ═══ Sauvegarder un projet ═══
  function saveProjet(data) {
    return saveToStorage('infinity_projets', {
      name: data.name || '',
      client: data.client || '',
      service: data.service || '',
      status: data.status || 'en-cours',
      description: data.description || '',
      budget: data.budget || '',
      deadline: data.deadline || ''
    })
  }

  // ═══ Récupérer toutes les données ═══
  function getAllData() {
    return {
      rdv: JSON.parse(localStorage.getItem('infinity_rdv') || '[]'),
      messages: JSON.parse(localStorage.getItem('infinity_messages') || '[]'),
      clients: JSON.parse(localStorage.getItem('infinity_clients') || '[]'),
      projets: JSON.parse(localStorage.getItem('infinity_projets') || '[]'),
      services: JSON.parse(localStorage.getItem('infinity_services') || '[]')
    }
  }

  // ═══ Exporter les données ═══
  function exportAllData() {
    const data = getAllData()
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `infinity_backup_${new Date().toISOString().slice(0,10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return {
    saveMessage,
    saveRendezVous,
    saveClient,
    saveProjet,
    getAllData,
    exportAllData
  }
}