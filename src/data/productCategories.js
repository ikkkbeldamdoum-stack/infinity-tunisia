// src/data/productCategories.js
export const PRODUCT_CATEGORIES = {
  BACHE: 'bache',
  BANNER_VINYL: 'banner-vinyl',
  BRANDING: 'branding',
  BROCHURE: 'brochure',
  BUSINESS_CARD: 'business-card',
  CACHET: 'cachet',
  CALENDRIER: 'calendrier',
  CARNET_FACTURE: 'carnet-facture',
  CATALOGUE: 'catalogue',
  MUG: 'mug',
  NFC: 'nfc',
  PHOTO: 'photo',
  PORTE_AFFICHE: 'porte-affiche',
  PORTE_CLE: 'porte-cle',
  PORTE_DOCUMENT: 'porte-document'
}

export const PRODUCT_LABELS = {
  [PRODUCT_CATEGORIES.BACHE]: 'بافانات إشهارية',
  [PRODUCT_CATEGORIES.BANNER_VINYL]: 'لفتات وفينيل',
  [PRODUCT_CATEGORIES.BRANDING]: 'تصميم جرافيك',
  [PRODUCT_CATEGORIES.BROCHURE]: 'بروشورات',
  [PRODUCT_CATEGORIES.BUSINESS_CARD]: 'بطاقات أعمال',
  [PRODUCT_CATEGORIES.CACHET]: 'أختام مهنية',
  [PRODUCT_CATEGORIES.CALENDRIER]: 'تقاويم إشهارية',
  [PRODUCT_CATEGORIES.CARNET_FACTURE]: 'كرانيه فواتير',
  [PRODUCT_CATEGORIES.CATALOGUE]: 'كتالوجات',
  [PRODUCT_CATEGORIES.MUG]: 'أكواب مخصصة',
  [PRODUCT_CATEGORIES.NFC]: 'بطاقات NFC',
  [PRODUCT_CATEGORIES.PHOTO]: 'تصوير احترافي',
  [PRODUCT_CATEGORIES.PORTE_AFFICHE]: 'حوامل ملصقات',
  [PRODUCT_CATEGORIES.PORTE_CLE]: 'ميداليات مفاتيح',
  [PRODUCT_CATEGORIES.PORTE_DOCUMENT]: 'حافظات مستندات'
}

export function getProductCategory(slug) {
  return Object.keys(PRODUCT_CATEGORIES).find(
    key => PRODUCT_CATEGORIES[key] === slug
  ) || null
}