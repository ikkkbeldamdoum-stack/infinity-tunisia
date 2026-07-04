// src/data/printProducts.js
// كتالوج المنتجات: كل منتج يحتوي على مقاساته وأنواع الورق والتشطيبات والكميات المتاحة.
// يُستعمل من طرف صفحة ProductConfigView.vue لبناء واجهة الطلب خطوة بخطوة (على نمط PrintOclock).

import businessImg from '../assets/business.png'
import flyerImg from '../assets/flyer.png'
import brochureImg from '../assets/brochure.png'
import rollupImg from '../assets/rollup.png'
import bannerImg from '../assets/banner.png'
import signImg from '../assets/sign.png'

export const printProducts = {
  /* ═══════════════════════════ بطاقات الأعمال ═══════════════════════════ */
  'business-cards': {
    slug: 'business-cards',
    title: 'بطاقات الأعمال',
    subtitle: 'تصميم وطباعة بطاقات احترافية مع إمكانية إضافة تقنية NFC',
    image: businessImg,
    formats: [
      { id: 'std',   label: 'مقاس قياسي', dims: '9×5 سم',            ratio: { w: 9, h: 5 },   refBox: { w: 9, h: 5 }, badge: 'الأكثر طلباً' },
      { id: 'sq',    label: 'مربع',        dims: '6.5×6.5 سم',        ratio: { w: 6.5, h: 6.5 }, refBox: { w: 9, h: 6.5 } },
      { id: 'mini',  label: 'ميني',        dims: '8.5×4.8 سم',        ratio: { w: 8.5, h: 4.8 }, refBox: { w: 9, h: 5 } }
    ],
    papers: [
      { id: 'mat350',   label: 'ورق مطفي 350g',   desc: 'مظهر أنيق غير لامع',        priceExtra: 0 },
      { id: 'brillant350', label: 'ورق لامع 350g', desc: 'ألوان زاهية وبراقة',        priceExtra: 0.02 },
      { id: 'kraft',    label: 'ورق كرافت',        desc: 'مظهر طبيعي وخام',           priceExtra: 0.05 },
      { id: 'nfc',      label: 'بطاقة NFC ذكية',   desc: 'مشاركة بيانات التواصل بلمسة واحدة', priceExtra: 1.2 }
    ],
    finishes: [
      { id: 'none',      label: 'بدون تشطيب إضافي',   priceExtra: 0 },
      { id: 'vernis',     label: 'ورنيش موضعي UV',      priceExtra: 0.03 },
      { id: 'gold-foil',  label: 'تذهيب حراري (Foil)', priceExtra: 0.08 },
      { id: 'coins-ronds',label: 'زوايا مدورة',         priceExtra: 0.015 }
    ],
    quantities: [100, 250, 500, 1000, 2500, 5000],
    basePricePerUnit: 0.12
  },

  /* ═══════════════════════════ المطويات (Flyers) ═══════════════════════════ */
  'flyers': {
    slug: 'flyers',
    title: 'المطويات (Flyers)',
    subtitle: 'مطويات دعائية بجودة عالية ومقاسات متعددة',
    image: flyerImg,
    formats: [
      { id: 'a5',  label: 'A5',  dims: '14.8×21 سم — نصف A4',       badge: 'الأكثر طلباً', ratio: { w: 14.8, h: 21 }, refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a6',  label: 'A6',  dims: '10.5×14.8 سم — بحجم بطاقة بريدية', ratio: { w: 10.5, h: 14.8 }, refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'dl',  label: 'DL',  dims: '9.9×21 سم — ثلث A4',         ratio: { w: 9.9, h: 21 },  refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a4',  label: 'A4',  dims: '21×29.7 سم',                 ratio: { w: 21, h: 29.7 }, refBox: null }
    ],
    papers: [
      { id: 'couche135', label: 'ورق كوشيه 135g',  desc: 'مناسب للاستخدام اليومي',  priceExtra: 0 },
      { id: 'couche170', label: 'ورق كوشيه 170g',  desc: 'أكثر سماكة وفخامة',       priceExtra: 0.01 },
      { id: 'recycle',   label: 'ورق معاد تدويره',  desc: 'خيار صديق للبيئة',        priceExtra: 0.008 }
    ],
    finishes: [
      { id: 'mat',      label: 'تشطيب مطفي',  priceExtra: 0 },
      { id: 'brillant', label: 'تشطيب لامع',  priceExtra: 0 }
    ],
    quantities: [250, 500, 1000, 2500, 5000, 10000],
    basePricePerUnit: 0.045
  },

  /* ═══════════════════════════ البروشورات ═══════════════════════════ */
  'brochures': {
    slug: 'brochures',
    title: 'البروشورات',
    subtitle: 'تصميم احترافي وطباعة فاخرة تعكس هوية علامتك',
    image: brochureImg,
    formats: [
      { id: 'a4-2v', label: 'A4 مطوي ثنية واحدة',  dims: 'A4 → A5 مطوي',  badge: 'الأكثر طلباً', ratio: { w: 10.5, h: 29.7 }, refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a4-3v', label: 'A4 مطوي 3 ثنيات',      dims: 'A4 → DL مطوي',  ratio: { w: 7, h: 29.7 },   refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a3-2v', label: 'A3 مطوي ثنية واحدة',   dims: 'A3 → A4 مطوي',  ratio: { w: 14.85, h: 42 }, refBox: { w: 29.7, h: 42 }, refLabel: 'A3' }
    ],
    papers: [
      { id: 'couche170', label: 'ورق كوشيه 170g', desc: 'جودة قياسية',   priceExtra: 0 },
      { id: 'couche250', label: 'ورق كوشيه 250g', desc: 'أكثر صلابة',    priceExtra: 0.05 },
      { id: 'couche350', label: 'ورق كوشيه 350g', desc: 'فخامة عالية',   priceExtra: 0.12 }
    ],
    finishes: [
      { id: 'mat',      label: 'تشطيب مطفي', priceExtra: 0 },
      { id: 'brillant', label: 'تشطيب لامع', priceExtra: 0 },
      { id: 'pelliculage', label: 'تغليف بلاستيكي (Pelliculage)', priceExtra: 0.08 }
    ],
    quantities: [100, 250, 500, 1000, 2500],
    basePricePerUnit: 0.35
  },

  /* ═══════════════════════════ رول أب ═══════════════════════════ */
  'rollup': {
    slug: 'rollup',
    title: 'رول أب (Roll Up)',
    subtitle: 'ستاندات رول أب عالية الجودة سهلة النقل والتركيب',
    image: rollupImg,
    formats: [
      { id: '85x200',  label: '85×200 سم',  dims: 'مقاس قياسي', badge: 'الأكثر طلباً', ratio: { w: 85, h: 200 }, refBox: { w: 100, h: 200 } },
      { id: '100x200', label: '100×200 سم', dims: 'مقاس عريض',   ratio: { w: 100, h: 200 }, refBox: { w: 100, h: 200 } },
      { id: '60x160',  label: '60×160 سم',  dims: 'مقاس صغير',   ratio: { w: 60, h: 160 },  refBox: { w: 100, h: 160 } }
    ],
    papers: [
      { id: 'banner440', label: 'قماش بانر 440g', desc: 'قياسي ومقاوم',   priceExtra: 0 },
      { id: 'tissu',      label: 'قماش نسيجي',     desc: 'مظهر فاخر وألوان أعمق', priceExtra: 40 }
    ],
    finishes: [
      { id: 'standard',  label: 'حامل قياسي',       priceExtra: 0 },
      { id: 'premium',   label: 'حامل فاخر مزدوج',   priceExtra: 60 },
      { id: 'sac',       label: 'حقيبة نقل',         priceExtra: 25 }
    ],
    quantities: [1, 2, 3, 5, 10],
    basePricePerUnit: 180
  },

  /* ═══════════════════════════ اللافتات والفينيل ═══════════════════════════ */
  'banners-vinyl': {
    slug: 'banners-vinyl',
    title: 'اللافتات والفينيل',
    subtitle: 'طباعة لافتات وفينيل بمختلف الأحجام والخامات',
    image: bannerImg,
    formats: [
      { id: '100x70',  label: '100×70 سم',  dims: 'صغير',  ratio: { w: 100, h: 70 }, refBox: { w: 200, h: 100 } },
      { id: '200x100', label: '200×100 سم', dims: 'متوسط', badge: 'الأكثر طلباً', ratio: { w: 200, h: 100 }, refBox: { w: 200, h: 100 } },
      { id: 'custom',  label: 'مقاس حسب الطلب', dims: 'يُحدد لاحقاً', ratio: { w: 200, h: 100 }, refBox: { w: 200, h: 100 } }
    ],
    papers: [
      { id: 'vinyl-adh',  label: 'فينيل لاصق',   desc: 'للواجهات والزجاج', priceExtra: 0 },
      { id: 'bache',      label: 'باش PVC',      desc: 'للاستخدام الخارجي المقاوم', priceExtra: 12 },
      { id: 'mesh',       label: 'شبك ميش (Mesh)', desc: 'يسمح بمرور الهواء - مناسب للمباني', priceExtra: 18 }
    ],
    finishes: [
      { id: 'none',     label: 'بدون تجهيز إضافي', priceExtra: 0 },
      { id: 'oeillets', label: 'تركيب عروات معدنية', priceExtra: 15 },
      { id: 'ourlet',    label: 'حياكة الأطراف',     priceExtra: 10 }
    ],
    quantities: [1, 2, 5, 10, 20],
    basePricePerUnit: 25
  },

  /* ═══════════════════════════ اللوحات والإشارات ═══════════════════════════ */
  'signage': {
    slug: 'signage',
    title: 'اللوحات والإشارات',
    subtitle: 'تصميم وتنفيذ اللوحات المضيئة ولوحات المحلات',
    image: signImg,
    formats: [
      { id: '100x50',  label: '100×50 سم',  dims: 'صغير',  ratio: { w: 100, h: 50 }, refBox: { w: 200, h: 100 } },
      { id: '200x100', label: '200×100 سم', dims: 'متوسط', badge: 'الأكثر طلباً', ratio: { w: 200, h: 100 }, refBox: { w: 200, h: 100 } },
      { id: 'custom',  label: 'مقاس حسب الطلب', dims: 'يُحدد لاحقاً', ratio: { w: 200, h: 100 }, refBox: { w: 200, h: 100 } }
    ],
    papers: [
      { id: 'pvc',       label: 'لوحة PVC',       desc: 'خفيفة واقتصادية',   priceExtra: 0 },
      { id: 'dibond',     label: 'لوحة Dibond',    desc: 'متانة عالية',       priceExtra: 45 },
      { id: 'plexiglas',  label: 'بليكسيغلاس',    desc: 'مظهر فاخر شفاف',    priceExtra: 60 }
    ],
    finishes: [
      { id: 'non-lumineux', label: 'غير مضيئة',      priceExtra: 0 },
      { id: 'led',           label: 'إضاءة LED خلفية', priceExtra: 120 },
      { id: 'caisson',       label: 'لوحة صندوقية مضيئة', priceExtra: 220 }
    ],
    quantities: [1, 2, 3, 5],
    basePricePerUnit: 90
  }
}

export function getProduct(slug) {
  return printProducts[slug] || null
}

export function getAllProducts() {
  return Object.values(printProducts)
}