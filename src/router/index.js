// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// ═══ Pages principales ═══
import Accueil from '../views/Accueil.vue'
import QuiSommesNous from '../views/QuiSommesNous.vue'
import NosServices from '../views/NosServices.vue'
import Devis from '../views/Devis.vue'
import propos from '../views/propos.vue'
import avis from '../views/avisclients.vue'
import ContactView from '../views/ContactView.vue'
import RendezVousView from '../views/RendezVousView.vue'

// ═══ Services ═══
import SocialMediaView from '../views/SocialMediaView.vue'
import VideoProductionView from '../views/VideoProductionView.vue'
import BrandingView from '../views/BrandingView.vue'
import WebDevelopmentView from '../views/Webdevelopmentview.vue'
import digitalMarketing from '../views/SponsoredAdsView.vue'
import PrintDesignView from '../views/PrintDesignView.vue'
import PhotoProductionView from '../views/PhotoProductionView.vue'

// ═══ Admin ═══
import AdminView from '../views/admin/AdminView.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'

// ═══ Produits (imports statiques) ═══
import ProductConfigView from '../views/ProductConfigView.vue'
import BusinessCardProductView from '../views/BusinessCardProductView.vue'
import BrochureProductView from '../views/BrochureProductView.vue'
import RollUpProductView from '../views/RollUpProductView.vue'
import FlyerProductView from '../views/FlyerProductView.vue'
import BannersVinylProductView from '../views/BannersVinylView.vue'
import SignageProductView from '../views/SignageView.vue'
import NfcProductView from '../views/NfcProductView.vue'

// ═══ Routes ═══
const routes = [
  // ═══ Pages principales ═══
  { 
    path: '/', 
    name: 'accueil', 
    component: Accueil, 
    meta: { title: 'Infinity — Digital Marketing Solutions, Tunis' } 
  },
  { 
    path: '/qui-sommes-nous', 
    name: 'qui-sommes-nous', 
    component: QuiSommesNous, 
    meta: { title: 'Qui sommes-nous ? — Infinity' } 
  },
  { 
    path: '/nos-services', 
    name: 'nos-services', 
    component: NosServices, 
    meta: { title: 'Nos Services — Infinity' } 
  },
  { 
    path: '/devis', 
    name: 'devis', 
    component: Devis, 
    meta: { title: 'Demander un devis — Infinity' } 
  },
  { 
    path: '/propos', 
    name: 'propos', 
    component: propos, 
    meta: { title: 'كيف نعمل — Infinity' } 
  },
  { 
    path: '/avis', 
    alias: '/avisclients', 
    name: 'avis', 
    component: avis, 
    meta: { title: 'آراء العملاء — Infinity' } 
  },
  { 
    path: '/contact', 
    name: 'contact', 
    component: ContactView, 
    meta: { title: 'Contactez-nous — Infinity' } 
  },
  { 
    path: '/rendez-vous', 
    name: 'rendez-vous', 
    component: RendezVousView, 
    meta: { title: 'احجز موعداً — Infinity' } 
  },

  // ═══ Services ═══
  {
    path: '/social-media',
    name: 'socialMedia',
    component: SocialMediaView,
    meta: { title: 'إدارة التواصل الاجتماعي — Infinity' }
  },
  {
    path: '/video-production',
    name: 'videoProduction',
    component: VideoProductionView,
    meta: { title: 'إنتاج الفيديو — Infinity' }
  },
  {
    path: '/branding',
    name: 'branding',
    component: BrandingView,
    meta: { title: 'تصميم جرافيك والمطبوعات — Infinity' }
  },
  {
    path: '/web-development',
    name: 'webDevelopment',
    component: WebDevelopmentView,
    meta: { title: 'تطوير المواقع والتطبيقات — Infinity' }
  },
  {
    path: '/digital-marketing',
    name: 'digitalMarketing',
    component: digitalMarketing,
    meta: { title: 'التسويق الرقمي — Infinity' }
  },
  {
    path: '/print-design',
    name: 'printDesign',
    component: PrintDesignView,
    meta: { title: 'الطباعة والإشهار — Infinity' }
  },
  {
    path: '/photo-production',
    name: 'photoProduction',
    component: PhotoProductionView,
    meta: { title: 'التصوير الاحترافي — Infinity' }
  },

  // ═══ Produits (statiques) ═══
  {
    path: '/produit/:slug',
    name: 'product-config',
    component: ProductConfigView,
    meta: { title: 'Configurer votre produit — Infinity' }
  },
  { 
    path: '/produit/business-cards', 
    name: 'business-card-product', 
    component: BusinessCardProductView,
    meta: { title: 'بطاقات الأعمال — Infinity' }
  },
  { 
    path: '/produit/brochures', 
    name: 'brochure-product', 
    component: BrochureProductView,
    meta: { title: 'البروشورات — Infinity' }
  },
  { 
    path: '/produit/rollup', 
    name: 'rollup-product', 
    component: RollUpProductView,
    meta: { title: 'رول أب — Infinity' }
  },
  { 
    path: '/produit/flyers', 
    name: 'flyer-product', 
    component: FlyerProductView,
    meta: { title: 'المطويات — Infinity' }
  },
  { 
    path: '/produit/signage', 
    name: 'signage-product', 
    component: SignageProductView,
    meta: { title: 'اللوحات والإشارات — Infinity' }
  },
  { 
    path: '/produit/banners-vinyl', 
    name: 'banners-vinyl-product', 
    component: BannersVinylProductView,
    meta: { title: 'اللافتات والفينيل — Infinity' }
  },
  { 
    path: '/produit/cartes-nfc', 
    name: 'nfc-product', 
    component: NfcProductView,
    meta: { title: 'بطاقات NFC — Infinity' }
  },

  // ═══ Produits (lazy loading) ═══
  {
    path: '/produit/stickers-autocollants',
    name: 'stickers-product',
    component: () => import('../views/StickersProductView.vue'),
    meta: { title: 'ستيكرات وملصقات — Infinity' }
  },
  {
    path: '/produit/porte-affiches',
    name: 'porte-affiches-product',
    component: () => import('../views/PorteAffichesProductView.vue'),
    meta: { title: 'حوامل الملصقات — Infinity' }
  },
  {
    path: '/produit/baches-publicitaires',
    name: 'baches-publicitaires-product',
    component: () => import('../views/BachesPublicitairesProductView.vue'),
    meta: { title: 'بافانات إشهارية — Infinity' }
  },
  {
    path: '/produit/habillage-vehicules',
    name: 'habillage-vehicules-product',
    component: () => import('../views/HabillageVehiculesProductView.vue'),
    meta: { title: 'تلبيس السيارات — Infinity' }
  },
  {
    path: '/produit/carnets-factures',
    name: 'carnets-factures-product',
    component: () => import('../views/CarnetsFacturesProductView.vue'),
    meta: { title: 'كرانيه الفواتير — Infinity' }
  },
  {
    path: '/produit/porte-documents',
    name: 'porte-documents-product',
    component: () => import('../views/PorteDocumentsProductView.vue'),
    meta: { title: 'حافظات المستندات — Infinity' }
  },
  {
    path: '/produit/cachets-professionnels',
    name: 'cachets-professionnels-product',
    component: () => import('../views/CachetsProfessionnelsProductView.vue'),
    meta: { title: 'الأختام المهنية — Infinity' }
  },
  {
    path: '/produit/calendriers',
    name: 'calendriers-product',
    component: () => import('../views/CalendriersProductView.vue'),
    meta: { title: 'التقاويم الإشهارية — Infinity' }
  },
  {
    path: '/produit/mugs-personnalises',
    name: 'mugs-personnalises-product',
    component: () => import('../views/MugsPersonnalisesProductView.vue'),
    meta: { title: 'الأكواب المخصصة — Infinity' }
  },
  {
    path: '/produit/stylos-publicitaires',
    name: 'stylos-publicitaires-product',
    component: () => import('../views/StylosPublicitairesProductView.vue'),
    meta: { title: 'الأقلام الإشهارية — Infinity' }
  },
  {
    path: '/produit/porte-cles',
    name: 'porte-cles-product',
    component: () => import('../views/PorteClesProductView.vue'),
    meta: { title: 'ميداليات المفاتيح — Infinity' }
  },
  {
    path: '/produit/trophees',
    name: 'trophees-product',
    component: () => import('../views/TropheesProductView.vue'),
    meta: { title: 'الدروع والجوائز — Infinity' }
  },
  {
    path: '/produit/catalogues',
    name: 'catalogue-product',
    component: () => import('../views/CataloguesProductView.vue'),
    meta: { title: 'الكتالوجات — Infinity' }
  },

  // ═══ Admin ═══
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin,
    meta: { title: 'Connexion Admin — Infinity' }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { title: 'لوحة التحكم — Infinity' }
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: AdminView,
    meta: { title: 'لوحة التحكم — Infinity' }
  },

  // ═══ Redirection 404 ═══
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

// ═══ Création du routeur ═══
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// ═══ Meta title ═══
router.afterEach((to) => {
  document.title = to.meta.title || 'Infinity'
})

// ═══ Protection des routes admin ═══
router.beforeEach((to, from, next) => {
  const isAdminRoute = to.path.startsWith('/admin')
  const isLoginRoute = to.path === '/admin/login'
  const isAuthenticated = localStorage.getItem('admin_auth') === 'true'

  // Si c'est une route admin et pas login, vérifier l'authentification
  if (isAdminRoute && !isLoginRoute && !isAuthenticated) {
    next('/admin/login')
  } 
  // Si déjà connecté et va vers login, rediriger vers dashboard
  else if (isLoginRoute && isAuthenticated) {
    next('/admin/dashboard')
  } 
  // Sinon, continuer
  else {
    next()
  }
})

export default router