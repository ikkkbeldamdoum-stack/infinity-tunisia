<!-- src/views/BusinessCardProductView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: بطاقات الأعمال (Business Cards) — نسخة كاملة أصلية بأسلوب Vue 3
  ═══════════════════════════════════════════════════════════════════════════
  محتوى وتصميم أصليان بالكامل، بنفس منطق ونظام تصميم صفحة الفلايرز
  (FlyerProductView.vue) لضمان الانسجام البصري بين صفحات المنتجات.

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم + روابط تنقّل سريع
  2. معرض صور المنتج + شارات الضمان
  3. مُهيّئ المنتج بخطوات: المقاس، الورق، جهة الطباعة، الفينيش والتغليف،
     الأشكال والحواف، الكمية
  4. دليل الشراء التعليمي
  5. جدول المواصفات التقنية
  6. قوالب التصميم الجاهزة
  7. خطوات الطلب
  8. الأسئلة الشائعة
  9. آراء العملاء (توضيحية)
  10. منتجات ذات صلة

  مسار الراوتر المقترح: { path: '/produit/business-cards', name: 'business-card-product', component: BusinessCardProductView }
-->

<template>
  <div dir="rtl" class="bc-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">بطاقات الأعمال</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap bc-head">
      <div class="bc-head-top">
        <h1>اطبع بطاقات أعمالك بلمسة فاخرة تعكس احترافيتك</h1>
        <div class="bc-rating">
          <span class="bc-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="bc-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="bc-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap bc-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="bc-gallery-col">
        <div class="bc-gallery">
          <div class="bc-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="bc-gallery-badge">جودة طباعة احترافية</span>
          </div>
          <div class="bc-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="bc-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="bc-reassurance">
          <h3>لماذا تطبع بطاقاتك معنا؟</h3>
          <ul>
            <li>
              <span class="bc-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>توصيل سريع</strong>
                <p>تجهيز الطلبات القياسية خلال 24 إلى 48 ساعة، مع توصيل لجميع الولايات.</p>
              </div>
            </li>
            <li>
              <span class="bc-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية ومتدرجة</strong>
                <p>كلما زادت الكمية المطلوبة، انخفض سعر الوحدة تلقائياً.</p>
              </div>
            </li>
            <li>
              <span class="bc-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>خامات وتشطيبات فاخرة</strong>
                <p>من الورق المعياري إلى التذهيب والفينيش الحريري، بجودة قص دقيقة.</p>
              </div>
            </li>
            <li>
              <span class="bc-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>دعم فني مباشر</strong>
                <p>فريقنا متاح لمساعدتك في اختيار المقاس والخامة والتشطيب المناسب لهويتك.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="bc-config-col">
        <div class="bc-config-card">

          <!-- Barre des étapes -->
          <div class="bc-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="bc-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="bc-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="bc-steps-bar-label">{{ s.title }}</span>
              <span class="bc-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="bc-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'format'">
              <h4>اختر الشكل</h4>
              <div class="bc-choice-grid">
                <button
                  v-for="f in formats"
                  :key="f.id"
                  type="button"
                  class="bc-choice-card"
                  :class="{ active: selection.format === f.id }"
                  @click="selectAndNext('format', f.id)"
                >
                  {{ f.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'paper'">
              <h4>اختر نوع الورق</h4>
              <div class="bc-choice-grid bc-choice-grid--wide">
                <button
                  v-for="p in papers"
                  :key="p.id"
                  type="button"
                  class="bc-choice-card bc-choice-card--desc"
                  :class="{ active: selection.paper === p.id }"
                  @click="selectAndNext('paper', p.id)"
                >
                  <span class="bc-choice-name">{{ p.label }}</span>
                  <span class="bc-choice-desc">{{ p.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'side'">
              <h4>اختر جهة الطباعة</h4>
              <div class="bc-pill-row">
                <button
                  v-for="s in sides"
                  :key="s.id"
                  type="button"
                  class="bc-pill"
                  :class="{ active: selection.side === s.id }"
                  @click="selectAndNext('side', s.id)"
                >
                  {{ s.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'finish'">
              <h4>اختر الفينيش والتغليف</h4>
              <div class="bc-choice-grid bc-choice-grid--wide">
                <button
                  v-for="f in finishes"
                  :key="f.id"
                  type="button"
                  class="bc-choice-card bc-choice-card--desc"
                  :class="{ active: selection.finish === f.id }"
                  @click="selectAndNext('finish', f.id)"
                >
                  <span class="bc-choice-name">{{ f.label }}</span>
                  <span class="bc-choice-desc">{{ f.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'corners'">
              <h4>اختر شكل الحواف</h4>
              <div class="bc-choice-grid">
                <button
                  v-for="c in corners"
                  :key="c.id"
                  type="button"
                  class="bc-choice-card"
                  :class="{ active: selection.corner === c.id }"
                  @click="selectAndNext('corner', c.id)"
                >
                  {{ c.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="bc-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="bc-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="bc-qty-hint">الأسعار تشمل التصميم على وجه واحد ما لم يُحدد خلاف ذلك، وتتضمن التوصيل داخل البلاد.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="bc-step-nav">
            <button type="button" class="bc-step-btn bc-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="bc-step-btn bc-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="bc-price-card">
          <div class="bc-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="bc-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="bc-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>



    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="bc-section bc-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار بطاقة الأعمال المناسبة؟</h2>

        <div class="bc-guide-grid">
          <article class="bc-guide-card">
            <h4>1. حدد الانطباع الذي تريد تركه</h4>
            <p>
              بطاقة الأعمال غالباً أول تواصل مادي مع عميلك المحتمل. القطاعات الراقية كالعقارات
              والاستشارات تستفيد من ورق سميك وتشطيب فاخر، بينما القطاعات الإبداعية قد تفضل
              تصاميم جريئة وألوان حية.
            </p>
          </article>
          <article class="bc-guide-card">
            <h4>2. اختر الشكل حسب هويتك البصرية</h4>
            <p>
              الشكل القياسي (Standard) هو الأكثر عملية وتوافقاً مع حافظات البطاقات، بينما الأشكال
              المزدوجة (Double) تمنحك مساحة إضافية لعرض خدماتك أو معلومات تواصل أوسع.
            </p>
          </article>
          <article class="bc-guide-card">
            <h4>3. اختر الورق حسب الإحساس المطلوب</h4>
            <p>
              الورق المعياري اقتصادي ومناسب للاستخدام اليومي، بينما أوراق التصميم الخاصة
              (كالمعدنية أو اللؤلؤية) تمنح لمسة تميّز فوري عند تسليم البطاقة يدوياً.
            </p>
          </article>
          <article class="bc-guide-card">
            <h4>4. لا تهمل الفينيش والتغليف</h4>
            <p>
              التغليف اللامع يبرز الألوان، أما Soft Touch فيمنح ملمساً مخملياً راقياً. يمكن
              أيضاً دمج الفينيش مع الفرنيش الانتقائي أو التذهيب لإبراز شعارك بشكل بارز.
            </p>
          </article>
          <article class="bc-guide-card">
            <h4>5. فكّر في شكل الحواف</h4>
            <p>
              الحواف الحادة تعطي طابعاً كلاسيكياً ورسمياً، بينما الحواف المدوّرة تمنح إحساساً
              عصرياً وودوداً أكثر، وغالباً ما تُفضَّل في القطاعات الإبداعية والتقنية.
            </p>
          </article>
          <article class="bc-guide-card">
            <h4>6. جهّز ملفك بالمقاس والدقة الصحيحين</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة PDF بدقة 300 نقطة في البوصة (DPI) مع هامش أمان (Bleed)
              لا يقل عن 2 ملم لتفادي قص أي عنصر مهم عند القطع.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="bc-section bc-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="bc-specs-table-wrap">
          <table class="bc-specs-table">
            <tbody>
              <tr>
                <th>الأشكال المتوفرة</th>
                <td>{{ formats.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنواع الورق</th>
                <td>{{ papers.map(p => p.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>جهة الطباعة</th>
                <td>{{ sides.map(s => s.label).join(' أو ') }}</td>
              </tr>
              <tr>
                <th>خيارات الفينيش والتغليف</th>
                <td>{{ finishes.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أشكال الحواف</th>
                <td>{{ corners.map(c => c.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF (موصى به)، JPG، PNG — بدقة 300 نقطة في البوصة على الأقل</td>
              </tr>
              <tr>
                <th>هامش الأمان (Bleed)</th>
                <td>2 ملم على كل جانب من التصميم</td>
              </tr>
              <tr>
                <th>مدة التجهيز القياسية</th>
                <td>24 إلى 48 ساعة عمل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ═══════════════ GABARITS / TEMPLATES ═══════════════ -->
    <section class="bc-section bc-templates" id="templates">
      <div class="wrap">
        <h2>حمّل القالب الجاهز حسب شكل بطاقتك</h2>
        <p class="bc-section-sub">استخدم قوالبنا الجاهزة لتصميم برنامج التصميم المفضل لديك، وتجنّب أخطاء الهامش والقصّ.</p>
        <div class="bc-templates-grid">
          <div class="bc-template-card" v-for="f in formats" :key="f.id">
            <div class="bc-template-preview" :style="{ aspectRatio: f.ratio || '1.6 / 1' }"></div>
            <span class="bc-template-name">{{ f.label }}</span>
            <button type="button" class="bc-template-download">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              تحميل القالب
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ COMMENT COMMANDER ═══════════════ -->
    <section class="bc-section bc-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب بطاقات أعمالك في 4 خطوات؟</h2>
        <div class="bc-hto-grid">
          <div class="bc-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="bc-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- ═══════════════ AVIS CLIENTS (illustratifs) ═══════════════ -->
    <section class="bc-section bc-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="bc-section-sub bc-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية موثّقة من عملائك.</p>
        <div class="bc-reviews-grid">
          <div class="bc-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="bc-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="bc-review-text">{{ r.text }}</p>
            <span class="bc-review-author">{{ r.author }}</span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

/* ═══════════════════════════════════════════════════════════
   DONNÉES PRODUIT (contenu original)
═══════════════════════════════════════════════════════════ */
const gallery = [
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Carte+Standard', alt: 'نموذج بطاقة أعمال قياسية' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Carte+Double', alt: 'نموذج بطاقة أعمال مزدوجة' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Carte+Carree', alt: 'نموذج بطاقة أعمال مربعة' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Carte+Ronde', alt: 'نموذج بطاقة أعمال بحواف مدورة' },
]
const activeImage = ref(0)

const formats = [
  { id: 'standard', label: 'قياسي (8.5×5.4 سم)', ratio: '1.57 / 1' },
  { id: 'double-paysage', label: 'مزدوج أفقي (8.5×5.4 سم مطوي)', ratio: '1.57 / 1' },
  { id: 'double-portrait', label: 'مزدوج عمودي (5.4×8.5 سم مطوي)', ratio: '1 / 1.57' },
  { id: 'carre', label: 'مربع (6.5×6.5 سم)', ratio: '1 / 1' },
  { id: 'us', label: 'مقاس أمريكي (8.9×5.1 سم)', ratio: '1.74 / 1' },
]

const papers = [
  { id: 'standard', label: 'ورق قياسي 350 غ', desc: 'خيار اقتصادي وموثوق للاستخدام اليومي' },
  { id: 'couche350mat', label: '350 غ مطفي', desc: 'إحساس أنيق غير عاكس بسماكة ممتازة' },
  { id: 'recycle', label: 'ورق معاد تدويره', desc: 'خيار صديق للبيئة بمظهر طبيعي خام' },
  { id: 'texture', label: 'ورق مُجسّم (Texturé)', desc: 'ملمس مميز يضيف بُعداً لمسياً للبطاقة' },
  { id: 'creation-argent', label: 'ورق تصميم فضي 300 غ', desc: 'بريق معدني راقٍ يلفت الأنظار' },
  { id: 'creation-or', label: 'ورق تصميم ذهبي 300 غ', desc: 'لمسة فخامة ذهبية لعلامتك التجارية' },
  { id: 'kraft', label: 'ورق كرافت', desc: 'مظهر عضوي وحرفي يناسب العلامات الطبيعية' },
]

const sides = [
  { id: 'recto', label: 'وجه واحد' },
  { id: 'recto-verso', label: 'وجهين' },
]

const finishes = [
  { id: 'standard', label: 'بدون تغليف (قياسي)', desc: 'مظهر طبيعي بدون طبقة إضافية' },
  { id: 'pell-brillant', label: 'تغليف لامع', desc: 'يبرز الألوان بدرجة سطوع عالية' },
  { id: 'pell-mat', label: 'تغليف مطفي', desc: 'مظهر ناعم غير عاكس وأنيق' },
  { id: 'soft-touch', label: 'تغليف Soft Touch', desc: 'ملمس مخملي فاخر عند اللمس' },
  { id: 'vernis-selectif', label: 'فرنيش انتقائي بارز', desc: 'إبراز عناصر محددة كالشعار بلمعان موضعي' },
  { id: 'dorure', label: 'تذهيب أو تفضيض جزئي', desc: 'تفاصيل معدنية دقيقة تعطي طابعاً راقياً' },
]

const corners = [
  { id: 'droits', label: 'حواف حادة' },
  { id: 'arrondis', label: 'حواف مدورة' },
]

const quantities = [50, 100, 250, 500, 1000, 2500, 5000]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  format: '',
  paper: '',
  side: '',
  finish: '',
  corner: '',
  quantity: null,
})

const activeStepIndex = ref(0)

function selectAndNext(field, value) {
  selection[field] = value
  if (activeStepIndex.value < configSteps.value.length - 1) {
    activeStepIndex.value++
  }
}

const configSteps = computed(() => [
  {
    key: 'format',
    title: 'الشكل',
    selectedLabel: formats.find((f) => f.id === selection.format)?.label || '',
  },
  {
    key: 'paper',
    title: 'الورق',
    selectedLabel: papers.find((p) => p.id === selection.paper)?.label || '',
  },
  {
    key: 'side',
    title: 'جهة الطباعة',
    selectedLabel: sides.find((s) => s.id === selection.side)?.label || '',
  },
  {
    key: 'finish',
    title: 'الفينيش',
    selectedLabel: finishes.find((f) => f.id === selection.finish)?.label || '',
  },
  {
    key: 'corners',
    title: 'الحواف',
    selectedLabel: corners.find((c) => c.id === selection.corner)?.label || '',
  },
  {
    key: 'quantity',
    title: 'الكمية',
    selectedLabel: selection.quantity ? selection.quantity.toLocaleString('ar') : '',
  },
])

/* ═══════════════════════════════════════════════════════════
   PRIX (logique de démonstration — à adapter à ta grille réelle)
═══════════════════════════════════════════════════════════ */
const basePricePerUnit = 0.06

const paperExtra = {
  standard: 0,
  couche350mat: 0.015,
  recycle: 0.01,
  texture: 0.03,
  'creation-argent': 0.045,
  'creation-or': 0.045,
  kraft: 0.02,
}
const finishExtra = {
  standard: 0,
  'pell-brillant': 0.015,
  'pell-mat': 0.015,
  'soft-touch': 0.035,
  'vernis-selectif': 0.05,
  dorure: 0.07,
}
const sideExtra = { recto: 0, 'recto-verso': 0.02 }
const cornerExtra = { droits: 0, arrondis: 0.01 }

const discountTiers = [
  { minQty: 250, percent: 5 },
  { minQty: 1000, percent: 12 },
  { minQty: 5000, percent: 20 },
]

const unitPrice = computed(() => {
  return (
    basePricePerUnit +
    (paperExtra[selection.paper] || 0) +
    (finishExtra[selection.finish] || 0) +
    (sideExtra[selection.side] || 0) +
    (cornerExtra[selection.corner] || 0)
  )
})

const currentDiscountPercent = computed(() => {
  const applicable = discountTiers.filter((t) => (selection.quantity || 0) >= t.minQty)
  return applicable.length ? applicable[applicable.length - 1].percent : 0
})

const estimatedPrice = computed(() => {
  if (!selection.quantity) return 0
  const subtotal = unitPrice.value * selection.quantity
  const discount = (subtotal * currentDiscountPercent.value) / 100
  return Math.round((subtotal - discount) * 100) / 100
})

function formatMoney(n) {
  return Number(n || 0).toLocaleString('ar', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

/* ═══════════════════════════════════════════════════════════
   ESTIMATION DE LIVRAISON
═══════════════════════════════════════════════════════════ */
const estimatedDeliveryLabel = computed(() => {
  const days = selection.finish && !['standard', 'pell-brillant', 'pell-mat'].includes(selection.finish) ? 3 : 2
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('ar-TN', { weekday: 'long', day: 'numeric', month: 'long' })
})

/* ═══════════════════════════════════════════════════════════
   NAVIGATION ANCRES
═══════════════════════════════════════════════════════════ */
function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ═══════════════════════════════════════════════════════════
   FORMULAIRE DE COMMANDE
═══════════════════════════════════════════════════════════ */
const contact = reactive({ name: '', phone: '' })
const orderSent = ref(false)
const canOrder = computed(() =>
  !!selection.format &&
  !!selection.paper &&
  !!selection.side &&
  !!selection.finish &&
  !!selection.corner &&
  !!selection.quantity &&
  !!contact.name &&
  !!contact.phone
)

function submitOrder() {
  if (!canOrder.value) return
  // TODO: ربط هذا الزر بواجهة API الحقيقية لإرسال الطلب
  orderSent.value = true
  setTimeout(() => (orderSent.value = false), 5000)
}

/* ═══════════════════════════════════════════════════════════
   CONTENU FAQ
═══════════════════════════════════════════════════════════ */
const openFaq = ref(null)
const faqs = [
  {
    q: 'ما هو أفضل ورق لبطاقة أعمال فاخرة؟',
    a: 'أوراق التصميم الخاصة مثل الفضي أو الذهبي 300 غ، أو الورق المطفي 350 غ مع تغليف Soft Touch، تمنح إحساساً بالفخامة والجودة العالية.',
  },
  {
    q: 'هل يمكنني دمج أكثر من تشطيب في نفس البطاقة؟',
    a: 'نعم، يمكن الجمع بين تغليف Soft Touch والفرنيش الانتقائي أو التذهيب الجزئي للحصول على تأثير بصري ولمسي مميز.',
  },
  {
    q: 'ما الفرق بين الحواف الحادة والمدورة؟',
    a: 'الحواف الحادة تعطي طابعاً كلاسيكياً ورسمياً، بينما الحواف المدورة تمنح إحساساً عصرياً وأكثر أماناً عند الاستخدام اليومي.',
  },
  {
    q: 'كم من الوقت يستغرق التجهيز؟',
    a: 'التجهيز القياسي يستغرق 24 إلى 48 ساعة عمل، وقد يطول قليلاً عند اختيار تشطيبات خاصة مثل التذهيب أو الفرنيش الانتقائي.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS (illustratifs)
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'الورق الفضي مع التغليف المطفي أعطى بطاقتي مظهراً احترافياً جداً، والجودة تفوق السعر.', author: 'عميل — مستشار أعمال' },
  { stars: 5, text: 'التذهيب الجزئي على الشعار كان بالضبط ما كنت أبحث عنه، تنفيذ دقيق جداً.', author: 'عميل — علامة تجارية فاخرة' },
  { stars: 4, text: 'التسليم كان سريعاً والحواف المدورة أعطت لمسة عصرية لطيفة.', author: 'عميل — مصمم مستقل' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر مواصفات بطاقتك', desc: 'حدد الشكل ونوع الورق والفينيش والحواف والكمية المناسبة لهويتك.' },
  { title: 'ارفع تصميمك أو اطلب مساعدتنا', desc: 'أرفق ملف PDF جاهز، أو تواصل مع فريقنا لإنشاء تصميم من الصفر.' },
  { title: 'أكّد طلبك', desc: 'راجع السعر النهائي والمعلومات ثم أكّد الطلب عبر النموذج.' },
  { title: 'استلم طلبك', desc: 'استلم طلبك من المحل أو عبر التوصيل حسب الخيار الذي اخترته.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'flyers', name: 'فلايرز إشهارية', priceFrom: 0.09, href: '/produit/flyers' },
  { slug: 'brochures', name: 'بروشورات', priceFrom: 0.4, href: '/brochures' },
  { slug: 'cartes-fidelite', name: 'بطاقات الولاء', priceFrom: 0.08, href: '/cartes-de-visite/carte-fidelite' },
  { slug: 'tampons', name: 'أختام مخصصة', priceFrom: 12, href: '/tampon' },
]
</script>

<style scoped>
.bc-page {
  --gold: #f8b101;
  --gold-light: #ffd04b;
  --gold-dark: #db9c00;
  --navy: #0c1230;
  --bg: #ffffff;
  --bg-panel: #f7f8fa;
  --border: #e6e8ec;
  --text: #1a202c;
  --text-light: #4a5568;
  --text-muted: #718096;
  --radius-md: 16px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Cairo', 'Tajawal', sans-serif;
  background: var(--bg);
  color: var(--text);
  direction: rtl;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

/* Breadcrumb */
.breadcrumb { background: var(--bg-panel); padding: 14px 0; border-bottom: 1px solid var(--border); }
.breadcrumb .wrap { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-muted); }
.breadcrumb a { color: var(--text-light); text-decoration: none; }
.breadcrumb a:hover { color: var(--gold); }
.breadcrumb .sep { opacity: 0.5; }
.breadcrumb .current { color: var(--gold); font-weight: 700; }

/* Header */
.bc-head { padding: 34px 24px 20px; }
.bc-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.bc-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.bc-rating { display: flex; align-items: center; gap: 8px; }
.bc-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.bc-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.bc-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.bc-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.bc-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.bc-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .bc-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.bc-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.bc-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.bc-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.bc-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.bc-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.bc-gallery-thumb.active { border-color: var(--gold); }
.bc-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.bc-reassurance { margin-top: 30px; }
.bc-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bc-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.bc-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.bc-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.bc-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.bc-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.bc-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.bc-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; }
.bc-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.bc-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.bc-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.bc-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.bc-steps-bar-item.active .bc-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.bc-steps-bar-item.done .bc-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bc-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.bc-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.bc-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.bc-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.bc-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
.bc-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.bc-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.bc-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.bc-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.bc-choice-name { font-weight: 800; }
.bc-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.bc-pill-row { display: flex; gap: 8px; flex-wrap: wrap; }
.bc-pill { padding: 10px 20px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 13px; cursor: pointer; }
.bc-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.bc-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.bc-qty-card { min-width: 70px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.bc-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bc-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.bc-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.bc-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.bc-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.bc-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.bc-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.bc-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.bc-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.bc-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.bc-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.bc-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.bc-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.bc-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.bc-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bc-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .bc-order-form-grid { grid-template-columns: 1fr; } }
.bc-order-form-grid input { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; }
.bc-order-form-grid input:focus { outline: none; border-color: var(--gold); }
.bc-order-submit { width: 100%; }

.btn-gold, .bc-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .bc-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.bc-cta:hover .arrow { transform: translateX(-4px); }

/* Sections génériques */
.bc-section { padding: 56px 0; border-top: 1px solid var(--border); }
.bc-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.bc-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.bc-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.bc-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bc-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.bc-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.bc-specs-table-wrap { overflow-x: auto; }
.bc-specs-table { width: 100%; border-collapse: collapse; }
.bc-specs-table tr { border-bottom: 1px solid var(--border); }
.bc-specs-table th, .bc-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.bc-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.bc-specs-table td { color: var(--text); }

/* Templates */
.bc-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.bc-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.bc-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.bc-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.bc-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.bc-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.bc-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.bc-hto-card { text-align: center; padding: 20px; }
.bc-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.bc-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.bc-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.bc-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.bc-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.bc-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.bc-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.bc-faq-item.open .bc-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.bc-faq-answer { padding: 0 18px 18px; }
.bc-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.bc-reviews-note { margin-top: -20px; }
.bc-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.bc-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bc-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.bc-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.bc-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.bc-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.bc-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.bc-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.bc-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.bc-related-name { font-size: 13px; font-weight: 700; }
.bc-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>