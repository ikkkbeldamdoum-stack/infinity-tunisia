// src/data/printProducts.js
//
// قاعدة بيانات منتجات الطباعة والإشهار.
// كل منتج يحتوي على: slug, title, subtitle, image, basePricePerUnit,
// formats (المقاسات), papers (نوع الورق/الخامة), finishes (التشطيب), quantities (الكميات المقترحة).
//
// getProduct(slug) تُرجع المنتج المطابق أو undefined إن لم يوجد.
// getAllProducts() تُرجع القائمة كاملة (مفيدة لصفحة "الطباعة والإشهار").

export const printProducts = [
  // ────────────────────────────────────────────────
  // 1. Cartes de visite
  // ────────────────────────────────────────────────
  {
    slug: 'cartes-de-visite',
    title: 'بطاقات أعمال (فيزيت)',
    subtitle: 'بطاقات زيارة احترافية بخامات وتشطيبات متعددة',
    image: '/images/products/cartes-de-visite.jpg',
    basePricePerUnit: 0.150,
    formats: [
      { id: 'std-85x55', label: '8.5 × 5.5 سم (قياسي)' },
      { id: 'square-55x55', label: '5.5 × 5.5 سم (مربع)' },
      { id: 'mini-70x40', label: '7 × 4 سم (ميني)' },
    ],
    papers: [
      { id: 'couche-300', label: 'ورق كوشيه 300g', desc: 'ناعم ولامع، الأكثر طلباً', priceExtra: 0 },
      { id: 'couche-350', label: 'ورق كوشيه 350g', desc: 'أكثر سماكة وصلابة', priceExtra: 0.020 },
      { id: 'texture-350', label: 'ورق مُنَقَّش 350g', desc: 'ملمس مميز فاخر', priceExtra: 0.040 },
      { id: 'kraft-300', label: 'ورق كرافت 300g', desc: 'مظهر طبيعي/بيئي', priceExtra: 0.030 },
    ],
    finishes: [
      { id: 'mat', label: 'مطفي (Mat)', priceExtra: 0 },
      { id: 'brillant', label: 'لامع (Brillant)', priceExtra: 0 },
      { id: 'vernis-uv', label: 'ورنيش UV موضعي', priceExtra: 0.060 },
      { id: 'dorure', label: 'تذهيب (Dorure à chaud)', priceExtra: 0.090 },
    ],
    quantities: [100, 250, 500, 1000, 2000],
  },

  // ────────────────────────────────────────────────
  // 2. Flyers
  // ────────────────────────────────────────────────
  {
    slug: 'flyers',
    title: 'فلايرز (منشورات إعلانية)',
    subtitle: 'منشورات دعائية للتوزيع والحملات الإشهارية',
    image: '/images/products/flyers.jpg',
    basePricePerUnit: 0.090,
    formats: [
      { id: 'a6', label: 'A6 (10.5 × 14.8 سم)' },
      { id: 'a5', label: 'A5 (14.8 × 21 سم)' },
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
      { id: 'dl', label: 'DL (10 × 21 سم)' },
    ],
    papers: [
      { id: 'couche-135', label: 'ورق كوشيه 135g', desc: 'اقتصادي وخفيف', priceExtra: 0 },
      { id: 'couche-170', label: 'ورق كوشيه 170g', desc: 'أكثر متانة', priceExtra: 0.010 },
      { id: 'couche-250', label: 'ورق كوشيه 250g', desc: 'يشبه البطاقة السميكة', priceExtra: 0.025 },
    ],
    finishes: [
      { id: 'mat', label: 'مطفي (Mat)', priceExtra: 0 },
      { id: 'brillant', label: 'لامع (Brillant)', priceExtra: 0 },
      { id: 'recto', label: 'طباعة وجه واحد', priceExtra: 0 },
      { id: 'recto-verso', label: 'طباعة الوجهين', priceExtra: 0.015 },
    ],
    quantities: [500, 1000, 2500, 5000, 10000],
  },

  // ────────────────────────────────────────────────
  // 3. Cartes NFC
  // ────────────────────────────────────────────────
  {
    slug: 'cartes-nfc',
    title: 'بطاقات NFC',
    subtitle: 'بطاقات ذكية لمشاركة معلوماتك بلمسة واحدة',
    image: '/images/products/cartes-nfc.jpg',
    basePricePerUnit: 12.000,
    formats: [
      { id: 'std-85x55', label: '8.5 × 5.5 سم (قياسي)' },
    ],
    papers: [
      { id: 'pvc-blanc', label: 'PVC أبيض', desc: 'خامة بلاستيكية قياسية', priceExtra: 0 },
      { id: 'pvc-noir', label: 'PVC أسود', desc: 'مظهر أنيق وداكن', priceExtra: 1.500 },
      { id: 'metal', label: 'معدنية (Metal Card)', desc: 'فخامة عالية ووزن ملموس', priceExtra: 8.000 },
      { id: 'bois', label: 'خشبية', desc: 'مظهر طبيعي مميز', priceExtra: 5.000 },
    ],
    finishes: [
      { id: 'mat', label: 'مطفي (Mat)', priceExtra: 0 },
      { id: 'brillant', label: 'لامع (Brillant)', priceExtra: 0 },
      { id: 'uv-spot', label: 'ورنيش UV موضعي', priceExtra: 1.000 },
    ],
    quantities: [1, 5, 10, 25, 50],
  },

  // ────────────────────────────────────────────────
  // 4. Bâches publicitaires
  // ────────────────────────────────────────────────
  {
    slug: 'baches-publicitaires',
    title: 'باشات إعلانية',
    subtitle: 'لافتات قماشية كبيرة الحجم للواجهات والفعاليات',
    image: '/images/products/baches-publicitaires.jpg',
    basePricePerUnit: 18.000,
    formats: [
      { id: '1x1', label: '1 × 1 متر' },
      { id: '2x1', label: '2 × 1 متر' },
      { id: '3x2', label: '3 × 2 متر' },
      { id: '4x3', label: '4 × 3 أمتار' },
      { id: 'sur-mesure', label: 'مقاس خاص (حسب الطلب)' },
    ],
    papers: [
      { id: 'bache-440g', label: 'باش PVC 440g', desc: 'خامة قياسية للاستعمال الخارجي', priceExtra: 0 },
      { id: 'bache-510g', label: 'باش PVC 510g', desc: 'أكثر سماكة ومقاومة للرياح', priceExtra: 3.000 },
      { id: 'mesh', label: 'باش Mesh (مُخرَّم)', desc: 'يسمح بمرور الهواء، مثالي للواجهات الكبيرة', priceExtra: 4.000 },
    ],
    finishes: [
      { id: 'oeillets', label: 'مع عُرى تعليق (Œillets)', priceExtra: 0 },
      { id: 'ourlet', label: 'حواف مُطَبَّقة (Ourlet)', priceExtra: 2.000 },
      { id: 'laminage', label: 'تلميع واقٍ من الأشعة', priceExtra: 4.000 },
    ],
    quantities: [1, 2, 3, 5, 10],
  },

  // ────────────────────────────────────────────────
  // 5. Carnets de factures
  // ────────────────────────────────────────────────
  {
    slug: 'carnets-factures',
    title: 'دفاتر فواتير',
    subtitle: 'دفاتير فواتير مرقمة ومخصصة لنشاطك التجاري',
    image: '/images/products/carnets-factures.jpg',
    basePricePerUnit: 3.500,
    formats: [
      { id: 'a5', label: 'A5 (14.8 × 21 سم)' },
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
    ],
    papers: [
      { id: '2-feuillets', label: 'نسختان (أصل + نسخة)', desc: 'ورق عادي 60g', priceExtra: 0 },
      { id: '3-feuillets', label: '3 نسخ (أصل + نسختان)', desc: 'ورق عادي 60g', priceExtra: 0.800 },
    ],
    finishes: [
      { id: 'agrafe', label: 'تجليد بالدبوس', priceExtra: 0 },
      { id: 'colle', label: 'تجليد بالغراء', priceExtra: 0.300 },
      { id: 'numerotation', label: 'ترقيم تلقائي متسلسل', priceExtra: 0.200 },
    ],
    quantities: [1, 5, 10, 20, 50],
  },

  // ────────────────────────────────────────────────
  // 6. Carnets autocopiants
  // ────────────────────────────────────────────────
  {
    slug: 'carnets-autocopiants',
    title: 'دفاتير ذاتية النسخ',
    subtitle: 'دفاتير أوتوكوبي بدون كربون للفوترة السريعة',
    image: '/images/products/carnets-autocopiants.jpg',
    basePricePerUnit: 4.500,
    formats: [
      { id: 'a5', label: 'A5 (14.8 × 21 سم)' },
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
    ],
    papers: [
      { id: '2-nc', label: 'نسختان (NCR)', desc: 'ورق ذاتي النسخ', priceExtra: 0 },
      { id: '3-nc', label: '3 نسخ (NCR)', desc: 'ورق ذاتي النسخ', priceExtra: 1.000 },
    ],
    finishes: [
      { id: 'agrafe', label: 'تجليد بالدبوس', priceExtra: 0 },
      { id: 'souche', label: 'مع كعب/جذاذة (Souche)', priceExtra: 0.400 },
      { id: 'numerotation', label: 'ترقيم تلقائي متسلسل', priceExtra: 0.200 },
    ],
    quantities: [1, 5, 10, 20, 50],
  },

  // ────────────────────────────────────────────────
  // 7. Porte-documents
  // ────────────────────────────────────────────────
  {
    slug: 'porte-documents',
    title: 'حافظات مستندات',
    subtitle: 'حافظات أنيقة لتقديم ملفاتك ومستنداتك',
    image: '/images/products/porte-documents.jpg',
    basePricePerUnit: 2.800,
    formats: [
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
      { id: 'a5', label: 'A5 (14.8 × 21 سم)' },
    ],
    papers: [
      { id: 'carton-350', label: 'كرتون 350g', desc: 'صلابة قياسية', priceExtra: 0 },
      { id: 'carton-400', label: 'كرتون 400g', desc: 'أكثر سماكة', priceExtra: 0.400 },
    ],
    finishes: [
      { id: 'mat-pelliculage', label: 'تغليف مطفي', priceExtra: 0 },
      { id: 'brillant-pelliculage', label: 'تغليف لامع', priceExtra: 0 },
      { id: 'vernis-uv', label: 'ورنيش UV موضعي', priceExtra: 0.500 },
    ],
    quantities: [50, 100, 250, 500],
  },

  // ────────────────────────────────────────────────
  // 8. Carnets de tickets
  // ────────────────────────────────────────────────
  {
    slug: 'carnets-tickets',
    title: 'دفاتر تذاكر',
    subtitle: 'دفاتر تذاكر مرقمة لمختلف الاستعمالات',
    image: '/images/products/carnets-tickets.jpg',
    basePricePerUnit: 2.500,
    formats: [
      { id: 'petit', label: 'صغير (5 × 10 سم)' },
      { id: 'moyen', label: 'متوسط (7 × 15 سم)' },
    ],
    papers: [
      { id: 'papier-80', label: 'ورق عادي 80g', desc: 'خامة اقتصادية', priceExtra: 0 },
      { id: 'papier-couleur', label: 'ورق ملون', desc: 'لتمييز الفئات', priceExtra: 0.200 },
    ],
    finishes: [
      { id: 'numerotation', label: 'ترقيم تلقائي متسلسل', priceExtra: 0 },
      { id: 'perforation', label: 'تخريم للفصل بسهولة', priceExtra: 0.150 },
    ],
    quantities: [1, 5, 10, 20, 50],
  },

  // ────────────────────────────────────────────────
  // 9. Roll-up
  // ────────────────────────────────────────────────
  {
    slug: 'roll-up',
    title: 'رول أب (Roll-up)',
    subtitle: 'لافتات قابلة للطي لمعارضك وفعالياتك',
    image: '/images/products/roll-up.jpg',
    basePricePerUnit: 95.000,
    formats: [
      { id: '80x200', label: '80 × 200 سم' },
      { id: '100x200', label: '100 × 200 سم' },
      { id: '120x200', label: '120 × 200 سم' },
    ],
    papers: [
      { id: 'bache-standard', label: 'باش قياسي', desc: 'خامة داخلية عادية', priceExtra: 0 },
      { id: 'bache-premium', label: 'باش Premium', desc: 'ألوان أكثر حدة ومتانة', priceExtra: 15.000 },
    ],
    finishes: [
      { id: 'support-standard', label: 'حامل ألمنيوم قياسي', priceExtra: 0 },
      { id: 'support-premium', label: 'حامل ألمنيوم فاخر + حقيبة نقل', priceExtra: 25.000 },
    ],
    quantities: [1, 2, 3, 5],
  },

  // ────────────────────────────────────────────────
  // 10. Mugs personnalisés
  // ────────────────────────────────────────────────
  {
    slug: 'mugs-personnalises',
    title: 'أكواب مخصصة',
    subtitle: 'أكواب مطبوعة بشعارك أو تصميمك الخاص',
    image: '/images/products/mugs-personnalises.jpg',
    basePricePerUnit: 6.500,
    formats: [
      { id: 'standard-11oz', label: 'قياسي 11 أونصة' },
      { id: 'magique', label: 'كوب سحري (يتغيّر لونه)' },
    ],
    papers: [
      { id: 'ceramique-blanc', label: 'سيراميك أبيض', desc: 'الخيار القياسي', priceExtra: 0 },
      { id: 'ceramique-couleur', label: 'سيراميك ملون (داخل/يد)', desc: 'لمسة مميزة', priceExtra: 1.000 },
    ],
    finishes: [
      { id: 'impression-standard', label: 'طباعة رقمية قياسية', priceExtra: 0 },
      { id: 'impression-full', label: 'طباعة شاملة 360°', priceExtra: 1.500 },
    ],
    quantities: [1, 6, 12, 24, 50],
  },

  // ────────────────────────────────────────────────
  // 11. Stylos publicitaires
  // ────────────────────────────────────────────────
  {
    slug: 'stylos-publicitaires',
    title: 'أقلام إشهارية',
    subtitle: 'أقلام مطبوعة بشعارك كهدايا دعائية',
    image: '/images/products/stylos-publicitaires.jpg',
    basePricePerUnit: 0.650,
    formats: [
      { id: 'bille-classique', label: 'قلم حبر جاف كلاسيكي' },
      { id: 'bille-metal', label: 'قلم معدني فاخر' },
    ],
    papers: [
      { id: 'plastique', label: 'بلاستيك', desc: 'خامة اقتصادية', priceExtra: 0 },
      { id: 'metal', label: 'معدن', desc: 'مظهر راقي', priceExtra: 1.200 },
    ],
    finishes: [
      { id: 'tampographie', label: 'طباعة تامبوغرافية', priceExtra: 0 },
      { id: 'gravure', label: 'حفر بالليزر', priceExtra: 0.400 },
    ],
    quantities: [50, 100, 250, 500, 1000],
  },

  // ────────────────────────────────────────────────
  // 12. Porte-clés personnalisés
  // ────────────────────────────────────────────────
  {
    slug: 'porte-cles-personnalises',
    title: 'ميداليات مفاتيح مخصصة',
    subtitle: 'ميداليات مفاتيح مطبوعة بهويتك التجارية',
    image: '/images/products/porte-cles-personnalises.jpg',
    basePricePerUnit: 1.200,
    formats: [
      { id: 'rond', label: 'دائري' },
      { id: 'rectangulaire', label: 'مستطيل' },
      { id: 'forme-libre', label: 'شكل حر (Découpe sur mesure)' },
    ],
    papers: [
      { id: 'acrylique', label: 'أكريليك', desc: 'خفيف وشفاف', priceExtra: 0 },
      { id: 'metal', label: 'معدن', desc: 'أكثر متانة', priceExtra: 0.800 },
      { id: 'cuir', label: 'جلد', desc: 'مظهر كلاسيكي أنيق', priceExtra: 0.600 },
    ],
    finishes: [
      { id: 'impression-uv', label: 'طباعة UV مباشرة', priceExtra: 0 },
      { id: 'gravure-laser', label: 'حفر بالليزر', priceExtra: 0.500 },
    ],
    quantities: [25, 50, 100, 250, 500],
  },

  // ────────────────────────────────────────────────
  // 13. Calendriers
  // ────────────────────────────────────────────────
  {
    slug: 'calendriers',
    title: 'تقاويم',
    subtitle: 'تقاويم سنوية مطبوعة بشعارك لهدايا نهاية السنة',
    image: '/images/products/calendriers.jpg',
    basePricePerUnit: 1.900,
    formats: [
      { id: 'mural-13-pages', label: 'حائط (13 صفحة)' },
      { id: 'bureau-chevalet', label: 'مكتب (Chevalet)' },
      { id: 'poche', label: 'جيب' },
    ],
    papers: [
      { id: 'couche-170', label: 'ورق كوشيه 170g', desc: 'خيار قياسي', priceExtra: 0 },
      { id: 'couche-250', label: 'ورق كوشيه 250g', desc: 'أكثر سماكة', priceExtra: 0.300 },
    ],
    finishes: [
      { id: 'agrafe', label: 'تجليد بالدبوس', priceExtra: 0 },
      { id: 'spirale', label: 'تجليد حلزوني (Spirale)', priceExtra: 0.700 },
    ],
    quantities: [50, 100, 250, 500, 1000],
  },

  // ────────────────────────────────────────────────
  // 14. Trophées
  // ────────────────────────────────────────────────
  {
    slug: 'trophees',
    title: 'كؤوس تكريمية',
    subtitle: 'كؤوس وميداليات تكريمية لمختلف المناسبات',
    image: '/images/products/trophees.jpg',
    basePricePerUnit: 35.000,
    formats: [
      { id: 'petit', label: 'صغير (حتى 20 سم)' },
      { id: 'moyen', label: 'متوسط (20-30 سم)' },
      { id: 'grand', label: 'كبير (أكثر من 30 سم)' },
    ],
    papers: [
      { id: 'verre', label: 'زجاج (Crystal)', desc: 'مظهر فاخر وشفاف', priceExtra: 0 },
      { id: 'metal', label: 'معدن', desc: 'مظهر كلاسيكي', priceExtra: 10.000 },
      { id: 'bois-metal', label: 'خشب ومعدن', desc: 'مزيج عصري', priceExtra: 15.000 },
    ],
    finishes: [
      { id: 'gravure-laser', label: 'حفر بالليزر', priceExtra: 0 },
      { id: 'plaque-personnalisee', label: 'لوحة نقش مخصصة', priceExtra: 8.000 },
    ],
    quantities: [1, 3, 5, 10, 20],
  },

  // ────────────────────────────────────────────────
  // 15. Stickers & autocollants
  // ────────────────────────────────────────────────
  {
    slug: 'stickers-autocollants',
    title: 'ستيكرز ولواصق',
    subtitle: 'ملصقات مقصوصة بأشكال مخصصة لمنتجاتك وحملاتك',
    image: '/images/products/stickers-autocollants.jpg',
    basePricePerUnit: 0.080,
    formats: [
      { id: '3x3', label: '3 × 3 سم' },
      { id: '5x5', label: '5 × 5 سم' },
      { id: '10x10', label: '10 × 10 سم' },
      { id: 'sur-mesure', label: 'مقاس خاص (Découpe sur mesure)' },
    ],
    papers: [
      { id: 'vinyle-mat', label: 'فينيل مطفي', desc: 'مقاوم للماء', priceExtra: 0 },
      { id: 'vinyle-brillant', label: 'فينيل لامع', desc: 'مقاوم للماء وألوان زاهية', priceExtra: 0 },
      { id: 'transparent', label: 'شفاف', desc: 'مظهر عصري', priceExtra: 0.020 },
    ],
    finishes: [
      { id: 'decoupe-simple', label: 'قص عادي (شكل مربع/دائري)', priceExtra: 0 },
      { id: 'decoupe-forme', label: 'قص حسب الشكل (Découpe sur contour)', priceExtra: 0.030 },
    ],
    quantities: [50, 100, 250, 500, 1000],
  },

  // ────────────────────────────────────────────────
  // 16. Catalogues
  // ────────────────────────────────────────────────
  {
    slug: 'catalogues',
    title: 'كتالوجات',
    subtitle: 'كتالوجات احترافية لعرض منتجاتك وخدماتك',
    image: '/images/products/catalogues.jpg',
    basePricePerUnit: 2.200,
    formats: [
      { id: 'a5', label: 'A5 (14.8 × 21 سم)' },
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
      { id: 'carre-21x21', label: 'مربع 21 × 21 سم' },
    ],
    papers: [
      { id: 'couche-135', label: 'ورق كوشيه 135g (داخلي)', desc: 'للصفحات الداخلية', priceExtra: 0 },
      { id: 'couche-170', label: 'ورق كوشيه 170g (داخلي)', desc: 'جودة أعلى', priceExtra: 0.150 },
      { id: 'couverture-300', label: 'غلاف كوشيه 300g', desc: 'صلابة إضافية للغلاف', priceExtra: 0.250 },
    ],
    finishes: [
      { id: 'agrafe', label: 'تجليد بالدبوس', priceExtra: 0 },
      { id: 'dos-carre-colle', label: 'تجليد بالغراء (Dos carré)', priceExtra: 0.600 },
      { id: 'spirale', label: 'تجليد حلزوني (Spirale)', priceExtra: 0.500 },
    ],
    quantities: [50, 100, 250, 500, 1000],
  },

  // ────────────────────────────────────────────────
  // 17. Porte-affiches
  // ────────────────────────────────────────────────
  {
    slug: 'porte-affiches',
    title: 'حوامل ملصقات (ستاندات)',
    subtitle: 'حوامل عرض للملصقات والمعلومات الترويجية',
    image: '/images/products/porte-affiches.jpg',
    basePricePerUnit: 65.000,
    formats: [
      { id: 'a4', label: 'A4 (21 × 29.7 سم)' },
      { id: 'a3', label: 'A3 (29.7 × 42 سم)' },
      { id: 'a2', label: 'A2 (42 × 59.4 سم)' },
      { id: 'a1', label: 'A1 (59.4 × 84.1 سم)' },
    ],
    papers: [
      { id: 'sol-standard', label: 'حامل أرضي قياسي', desc: 'ألمنيوم خفيف', priceExtra: 0 },
      { id: 'sol-premium', label: 'حامل أرضي Premium', desc: 'قاعدة أثقل وأكثر ثباتاً', priceExtra: 20.000 },
      { id: 'comptoir', label: 'حامل مكتبي (Comptoir)', desc: 'حجم مصغّر لسطح المكتب', priceExtra: -30.000 },
    ],
    finishes: [
      { id: 'simple-face', label: 'وجه واحد', priceExtra: 0 },
      { id: 'double-face', label: 'وجهين', priceExtra: 15.000 },
    ],
    quantities: [1, 2, 3, 5],
  },

  // ────────────────────────────────────────────────
  // 18. Habillage de véhicules
  // ────────────────────────────────────────────────
  {
    slug: 'habillage-vehicules',
    title: 'تلبيس السيارات (إشهار)',
    subtitle: 'تغليف إعلاني كامل أو جزئي لسياراتك ومركباتك',
    image: '/images/products/habillage-vehicules.jpg',
    basePricePerUnit: 250.000,
    formats: [
      { id: 'partiel', label: 'تغليف جزئي (أبواب + خلفية)' },
      { id: 'total-citadine', label: 'تغليف كامل - سيارة صغيرة' },
      { id: 'total-utilitaire', label: 'تغليف كامل - مركبة نفعية/فان' },
    ],
    papers: [
      { id: 'vinyle-standard', label: 'فينيل قياسي', desc: 'مدة استعمال 3-5 سنوات', priceExtra: 0 },
      { id: 'vinyle-premium', label: 'فينيل Premium', desc: 'مدة استعمال أطول ومقاومة أعلى', priceExtra: 150.000 },
    ],
    finishes: [
      { id: 'mat', label: 'تشطيب مطفي', priceExtra: 0 },
      { id: 'brillant', label: 'تشطيب لامع', priceExtra: 0 },
      { id: 'laminage-protection', label: 'تلميع حماية إضافي', priceExtra: 80.000 },
    ],
    quantities: [1],
  },

  // ────────────────────────────────────────────────
  // 19. Cachets professionnels
  // ────────────────────────────────────────────────
  {
    slug: 'cachets-professionnels',
    title: 'أختام مهنية',
    subtitle: 'أختام احترافية للشركات والمهنيين',
    image: '/images/products/cachets-professionnels.jpg',
    basePricePerUnit: 18.000,
    formats: [
      { id: 'petit-38x14', label: 'صغير (38 × 14 مم)' },
      { id: 'moyen-47x18', label: 'متوسط (47 × 18 مم)' },
      { id: 'grand-58x22', label: 'كبير (58 × 22 مم)' },
      { id: 'rond', label: 'دائري (Ø 40 مم)' },
    ],
    papers: [
      { id: 'auto-encreur', label: 'ختم ذاتي الحبر (Auto-encreur)', desc: 'الأكثر عملية وطلباً', priceExtra: 0 },
      { id: 'bois', label: 'ختم خشبي تقليدي', desc: 'يتطلب طابع حبر منفصل', priceExtra: -5.000 },
    ],
    finishes: [
      { id: 'encre-noire', label: 'حبر أسود', priceExtra: 0 },
      { id: 'encre-couleur', label: 'حبر ملون (أزرق/أحمر)', priceExtra: 1.500 },
    ],
    quantities: [1, 2, 3, 5],
  },
]

/**
 * إرجاع منتج واحد حسب الـ slug
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getProduct(slug) {
  return printProducts.find((p) => p.slug === slug)
}

/**
 * إرجاع كل المنتجات (لصفحة عرض الخدمات مثلاً)
 * @returns {object[]}
 */
export function getAllProducts() {
  return printProducts
}