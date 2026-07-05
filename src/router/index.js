import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import QuiSommesNous from '../views/QuiSommesNous.vue'
import NosServices from '../views/NosServices.vue'
import Devis from '../views/Devis.vue'
import propos from '../views/propos.vue'
import avis from '../views/avisclients.vue'
import SocialMediaView from '../views/SocialMediaView.vue'
import ContactView from '../views/ContactView.vue'
import VideoProductionView from '../views/VideoProductionView.vue'
import BrandingView from '../views/BrandingView.vue'
import WebDevelopmentView from "../views/Webdevelopmentview.vue"
import digitalMarketing from '../views/SponsoredAdsView.vue'
import RendezVousView from '../views/RendezVousView.vue'
import PrintDesignView from '../views/PrintDesignView.vue'
import PhotoProductionView from '../views/PhotoProductionView.vue'
import AdminView from '../views/admin/AdminView.vue'
import ProductConfigView from '../views/ProductConfigView.vue'
import BusinessCardProductView from '../views/BusinessCardProductView.vue'
import BrochureProductView from '../views/BrochureProductView.vue'
// ⚠️ Import corrigé : le nom du fichier est RollUpProductView.vue (U majuscule)
import RollUpProductView from '../views/RollUpProductView.vue'
import FlyerProductView from '../views/FlyerProductView.vue'
import BannersVinylProductView from '../views/BannersVinylView.vue'
import SignageProductView from '../views/SignageView.vue'
import NfcProductView from '../views/NfcProductView.vue'

const routes = [
  { path: '/', name: 'accueil', component: Accueil, meta: { title: 'Infinity — Digital Marketing Solutions, Tunis' } },
  { path: '/qui-sommes-nous', name: 'qui-sommes-nous', component: QuiSommesNous, meta: { title: 'Qui sommes-nous ? — Infinity' } },
  { path: '/nos-services', name: 'nos-services', component: NosServices, meta: { title: 'Nos Services — Infinity' } },
  { path: '/devis', name: 'devis', component: Devis, meta: { title: 'Demander un devis — Infinity' } },
  { path: '/propos', name: 'propos', component: propos, meta: { title: 'كيف نعمل — Infinity' } },
  { path: '/avis', alias: '/avisclients', name: 'avis', component: avis, meta: { title: 'آراء العملاء — Infinity' } },
  {
    path: '/social-media',
    name: 'socialMedia',
    component: SocialMediaView,
    meta: { title: 'إدارة التواصل الاجتماعي — Infinity' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contactez-nous — Infinity' }
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
  {
    path: '/rendez-vous',
    name: 'rendez-vous',
    component: RendezVousView,
    meta: { title: 'احجز موعداً — Infinity' }
  },
  {
    path: '/produit/:slug',
    name: 'product-config',
    component: ProductConfigView
  },
  { path: '/produit/business-cards', name: 'business-card-product', component: BusinessCardProductView },
  { path: '/produit/brochures', name: 'brochure-product', component: BrochureProductView },
  // ⚠️ Route corrigée : utilisation du composant importé sous le bon nom
  { path: '/produit/rollup', name: 'rollup-product', component: RollUpProductView },
  { path: '/produit/flyers', name: 'flyer-product', component: FlyerProductView },
  { path: '/produit/signage', name: 'signage-product', component: SignageProductView },
  { path: '/produit/banners-vinyl', name: 'banners-vinyl-product', component: BannersVinylProductView },
  { path: '/produit/cartes-nfc', name: 'nfc-product', component: NfcProductView },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { title: 'لوحة التحكم — Infinity' }
  },
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
}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Infinity'
})

export default router