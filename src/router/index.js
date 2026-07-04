// router/index.js
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
import WebDevelopmentView from "../views/Webdevelopmentview.vue";
import digitalMarketing from '../views/SponsoredAdsView.vue'
  import RendezVousView from '../views/RendezVousView.vue'
// ═══ NOUVELLES IMPORTATIONS ═══
import PrintDesignView from '../views/PrintDesignView.vue'
import PhotoProductionView from '../views/PhotoProductionView.vue'
// router/index.js
import AdminView from '../views/admin/AdminView.vue'
import ProductConfigView from '../views/ProductConfigView.vue'

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
  // ═══ NOUVELLES ROUTES ═══
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


// Dans le tableau routes :
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
{
  path: '/admin',
  name: 'admin',
  component: AdminView,
  meta: { title: 'لوحة التحكم — Infinity' }
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