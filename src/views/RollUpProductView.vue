<!-- src/views/RollUpProductView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: رول أب (Roll Up) — نسخة كاملة أصلية بأسلوب Vue 3
  ═══════════════════════════════════════════════════════════════════════════
  محتوى وتصميم أصليان بالكامل، بنفس منطق ونظام تصميم صفحات الفلايرز
  وبطاقات الأعمال والبروشورات، لضمان الانسجام البصري بين صفحات المنتجات.

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم + روابط تنقّل سريع
  2. معرض صور المنتج + شارات الضمان
  3. مُهيّئ المنتج بخطوات: نوع الهيكل، المقاس، خامة الطباعة، جهة الطباعة،
     حقيبة النقل، الكمية
  4. دليل الشراء التعليمي
  5. جدول المواصفات التقنية
  6. قوالب التصميم الجاهزة
  7. خطوات الطلب
  8. الأسئلة الشائعة
  9. آراء العملاء (توضيحية)
  10. منتجات ذات صلة

  مسار الراوتر المقترح: { path: '/produit/roll-up', name: 'rollup-product', component: RollUpProductView }
-->

<template>
  <div dir="rtl" class="ru-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">رول أب</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap ru-head">
      <div class="ru-head-top">
        <h1>اطبع ستاند الرول أب الخاص بك بجودة عرض احترافية وثبات عالي</h1>
        <div class="ru-rating">
          <span class="ru-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="ru-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="ru-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap ru-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="ru-gallery-col">
        <div class="ru-gallery">
          <div class="ru-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="ru-gallery-badge">جودة طباعة احترافية</span>
          </div>
          <div class="ru-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="ru-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="ru-reassurance">
          <h3>لماذا تطبع رول أب معنا؟</h3>
          <ul>
            <li>
              <span class="ru-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>توصيل سريع</strong>
                <p>تجهيز الطلبات القياسية خلال 2 إلى 4 أيام عمل، مع توصيل لجميع الولايات.</p>
              </div>
            </li>
            <li>
              <span class="ru-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية ومتدرجة</strong>
                <p>كلما زادت الكمية المطلوبة، انخفض سعر الوحدة تلقائياً.</p>
              </div>
            </li>
            <li>
              <span class="ru-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>هياكل متينة وسهلة النقل</strong>
                <p>من الهيكل الاقتصادي إلى الفاخر، بآليات فتح وطي سريعة وحقيبة نقل مرفقة.</p>
              </div>
            </li>
            <li>
              <span class="ru-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>دعم فني مباشر</strong>
                <p>فريقنا متاح لمساعدتك في اختيار الهيكل والمقاس المناسب لمكان العرض.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="ru-config-col">
        <div class="ru-config-card">

          <!-- Barre des étapes -->
          <div class="ru-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="ru-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="ru-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="ru-steps-bar-label">{{ s.title }}</span>
              <span class="ru-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="ru-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'structure'">
              <h4>اختر نوع الهيكل</h4>
              <div class="ru-choice-grid ru-choice-grid--wide">
                <button
                  v-for="s in structures"
                  :key="s.id"
                  type="button"
                  class="ru-choice-card ru-choice-card--desc"
                  :class="{ active: selection.structure === s.id }"
                  @click="selectAndNext('structure', s.id)"
                >
                  <span class="ru-choice-name">{{ s.label }}</span>
                  <span class="ru-choice-desc">{{ s.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'format'">
              <h4>اختر المقاس</h4>
              <div class="ru-choice-grid">
                <button
                  v-for="f in formats"
                  :key="f.id"
                  type="button"
                  class="ru-choice-card"
                  :class="{ active: selection.format === f.id }"
                  @click="selectAndNext('format', f.id)"
                >
                  {{ f.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'material'">
              <h4>اختر خامة الطباعة</h4>
              <div class="ru-choice-grid ru-choice-grid--wide">
                <button
                  v-for="m in materials"
                  :key="m.id"
                  type="button"
                  class="ru-choice-card ru-choice-card--desc"
                  :class="{ active: selection.material === m.id }"
                  @click="selectAndNext('material', m.id)"
                >
                  <span class="ru-choice-name">{{ m.label }}</span>
                  <span class="ru-choice-desc">{{ m.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'side'">
              <h4>اختر جهة الطباعة</h4>
              <div class="ru-pill-row">
                <button
                  v-for="s in sides"
                  :key="s.id"
                  type="button"
                  class="ru-pill"
                  :class="{ active: selection.side === s.id }"
                  @click="selectAndNext('side', s.id)"
                >
                  {{ s.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'bag'">
              <h4>اختر حقيبة النقل</h4>
              <div class="ru-choice-grid ru-choice-grid--wide">
                <button
                  v-for="b in bags"
                  :key="b.id"
                  type="button"
                  class="ru-choice-card ru-choice-card--desc"
                  :class="{ active: selection.bag === b.id }"
                  @click="selectAndNext('bag', b.id)"
                >
                  <span class="ru-choice-name">{{ b.label }}</span>
                  <span class="ru-choice-desc">{{ b.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="ru-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="ru-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="ru-qty-hint">الأسعار تشمل الهيكل الكامل والطباعة والتركيب المبدئي، وتتضمن التوصيل داخل البلاد.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="ru-step-nav">
            <button type="button" class="ru-step-btn ru-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="ru-step-btn ru-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="ru-price-card">
          <div class="ru-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="ru-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="ru-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FORMULAIRE DE COMMANDE ═══════════════ -->
    <div class="wrap" id="order-form">
      <div class="ru-order-form">
        <h3>أكمل طلبك</h3>
        <div class="ru-order-form-grid">
          <input type="text" v-model="contact.name" placeholder="الاسم الكامل" />
          <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" />
        </div>
        <button type="button" class="btn-gold ru-order-submit" @click="submitOrder" :disabled="!canOrder">
          <span v-if="orderSent">✅ تم إرسال طلبك، سنتواصل معك قريباً</span>
          <span v-else>تأكيد الطلب — {{ formatMoney(estimatedPrice) }} د.ت</span>
        </button>
      </div>
    </div>

    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="ru-section ru-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار الرول أب المناسب لمعرضك أو محلك؟</h2>

        <div class="ru-guide-grid">
          <article class="ru-guide-card">
            <h4>1. حدد مكان ومدة الاستخدام</h4>
            <p>
              الهيكل الاقتصادي مناسب للاستخدام المناسباتي القصير، بينما الهيكل الاحترافي أو
              الفاخر أنسب للاستخدام المتكرر في المعارض والفعاليات المتعددة بفضل متانته الأعلى.
            </p>
          </article>
          <article class="ru-guide-card">
            <h4>2. اختر المقاس حسب المساحة المتاحة</h4>
            <p>
              المقاس القياسي (85×200 سم) مناسب لمعظم الأماكن، بينما المقاسات XXL تمنح حضوراً
              بصرياً أقوى في الفعاليات الكبيرة والمعارض الواسعة.
            </p>
          </article>
          <article class="ru-guide-card">
            <h4>3. اختر الخامة حسب بيئة الاستخدام</h4>
            <p>
              الخامات الداخلية القياسية كافية للعرض في الأماكن المغلقة، بينما الرول أب الخارجي
              يحتاج خامات أثقل ومقاومة للرياح والرطوبة لضمان الثبات في الهواء الطلق.
            </p>
          </article>
          <article class="ru-guide-card">
            <h4>4. فكّر في الطباعة على وجهين</h4>
            <p>
              إذا كان الرول أب سيُعرض في منتصف الممر أو في مكان مرئي من الجهتين، فإن الطباعة
              على وجهين تضمن ظهور رسالتك من أي زاوية.
            </p>
          </article>
          <article class="ru-guide-card">
            <h4>5. لا تنسَ حقيبة النقل</h4>
            <p>
              حقيبة النقل الأساسية تحمي الهيكل أثناء التنقل بين الفعاليات، بينما الحقيبة
              المبطنة أو ذات العجلات تسهّل النقل على المسافات الطويلة أو للاستخدام المتكرر.
            </p>
          </article>
          <article class="ru-guide-card">
            <h4>6. جهّز ملفك بالمقاس والدقة الصحيحين</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة PDF أو JPG عالي الدقة (150 نقطة في البوصة على الأقل
              بالحجم الحقيقي) لضمان وضوح الطباعة على كامل ارتفاع البانر.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="ru-section ru-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="ru-specs-table-wrap">
          <table class="ru-specs-table">
            <tbody>
              <tr>
                <th>أنواع الهياكل</th>
                <td>{{ structures.map(s => s.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>المقاسات المتوفرة</th>
                <td>{{ formats.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>خامات الطباعة</th>
                <td>{{ materials.map(m => m.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>جهة الطباعة</th>
                <td>{{ sides.map(s => s.label).join(' أو ') }}</td>
              </tr>
              <tr>
                <th>خيارات حقيبة النقل</th>
                <td>{{ bags.map(b => b.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF أو JPG — بدقة 150 نقطة في البوصة على الأقل بالحجم الحقيقي</td>
              </tr>
              <tr>
                <th>مدة التجهيز القياسية</th>
                <td>2 إلى 4 أيام عمل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  

    <!-- ═══════════════ COMMENT COMMANDER ═══════════════ -->
    <section class="ru-section ru-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب رول أب في 4 خطوات؟</h2>
        <div class="ru-hto-grid">
          <div class="ru-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="ru-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ ═══════════════ -->
    <section class="ru-section ru-faq" id="faq">
      <div class="wrap">
        <h2>الأسئلة الشائعة</h2>
        <div class="ru-faq-list">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="ru-faq-item"
            :class="{ open: openFaq === idx }"
          >
            <button type="button" class="ru-faq-question" @click="openFaq = openFaq === idx ? null : idx">
              <span>{{ faq.q }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="ru-faq-chevron"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="ru-faq-answer" v-show="openFaq === idx">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ AVIS CLIENTS (illustratifs) ═══════════════ -->
    <section class="ru-section ru-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="ru-section-sub ru-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية موثّقة من عملائك.</p>
        <div class="ru-reviews-grid">
          <div class="ru-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="ru-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="ru-review-text">{{ r.text }}</p>
            <span class="ru-review-author">{{ r.author }}</span>
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
  { src: 'https://placehold.co/700x900/f7f3ea/1a202c?text=Roll+Up+Standard', alt: 'نموذج رول أب هيكل قياسي' },
  { src: 'https://placehold.co/700x900/f7f3ea/1a202c?text=Roll+Up+Premium', alt: 'نموذج رول أب هيكل فاخر' },
  { src: 'https://placehold.co/700x900/f7f3ea/1a202c?text=Roll+Up+XXL', alt: 'نموذج رول أب مقاس XXL' },
  { src: 'https://placehold.co/700x900/f7f3ea/1a202c?text=Roll+Up+Exterieur', alt: 'نموذج رول أب للاستخدام الخارجي' },
]
const activeImage = ref(0)

const structures = [
  { id: 'economique', label: 'اقتصادي', desc: 'حل بسيط وسريع للاستخدام المناسباتي القصير' },
  { id: 'standard', label: 'قياسي', desc: 'أفضل توازن بين الجودة والسعر للاستخدام المتكرر' },
  { id: 'premium', label: 'فاخر', desc: 'هيكل معزز وآلية فتح ناعمة لمظهر احترافي راقٍ' },
  { id: 'ecologique', label: 'إيكولوجي', desc: 'هيكل مصنوع من مواد قابلة لإعادة التدوير' },
  { id: 'exterieur', label: 'للاستخدام الخارجي', desc: 'هيكل معزز بقاعدة ثقيلة مقاوم للرياح' },
]

const formats = [
  { id: '60x160', label: '60×160 سم', ratio: '1 / 2.66' },
  { id: '85x200', label: '85×200 سم (الأكثر طلباً)', ratio: '1 / 2.35' },
  { id: '100x200', label: '100×200 سم', ratio: '1 / 2' },
  { id: '120x200', label: '120×200 سم', ratio: '1 / 1.66' },
  { id: 'xxl', label: 'XXL (150×250 سم)', ratio: '1 / 1.66' },
]

const materials = [
  { id: 'pvc-standard', label: 'PVC قياسي 220 غ', desc: 'خامة اقتصادية مناسبة للاستخدام الداخلي' },
  { id: 'pvc-premium', label: 'PVC فاخر 280 غ', desc: 'مقاومة أعلى للتجعد وألوان أكثر وضوحاً' },
  { id: 'polyester', label: 'قماش بوليستر', desc: 'مظهر غير عاكس ومقاومة ممتازة للطي المتكرر' },
  { id: 'exterieur', label: 'خامة خارجية معززة', desc: 'مقاومة للرطوبة والرياح للاستخدام في الهواء الطلق' },
]

const sides = [
  { id: 'recto', label: 'وجه واحد' },
  { id: 'recto-verso', label: 'وجهين' },
]

const bags = [
  { id: 'standard', label: 'حقيبة نقل أساسية', desc: 'حماية بسيطة أثناء التنقل بين الفعاليات' },
  { id: 'matelassee', label: 'حقيبة مبطنة', desc: 'حماية إضافية للهيكل والقاعدة أثناء النقل' },
  { id: 'roulettes', label: 'حقيبة بعجلات', desc: 'تسهّل النقل على مسافات طويلة أو داخل المعارض' },
]

const quantities = [1, 2, 5, 10, 20, 50]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  structure: '',
  format: '',
  material: '',
  side: '',
  bag: '',
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
    key: 'structure',
    title: 'الهيكل',
    selectedLabel: structures.find((s) => s.id === selection.structure)?.label || '',
  },
  {
    key: 'format',
    title: 'المقاس',
    selectedLabel: formats.find((f) => f.id === selection.format)?.label || '',
  },
  {
    key: 'material',
    title: 'الخامة',
    selectedLabel: materials.find((m) => m.id === selection.material)?.label || '',
  },
  {
    key: 'side',
    title: 'جهة الطباعة',
    selectedLabel: sides.find((s) => s.id === selection.side)?.label || '',
  },
  {
    key: 'bag',
    title: 'حقيبة النقل',
    selectedLabel: bags.find((b) => b.id === selection.bag)?.label || '',
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
const structureBase = {
  economique: 55,
  standard: 85,
  premium: 130,
  ecologique: 95,
  exterieur: 175,
}

const formatExtra = {
  '60x160': -10,
  '85x200': 0,
  '100x200': 15,
  '120x200': 30,
  xxl: 65,
}

const materialExtra = {
  'pvc-standard': 0,
  'pvc-premium': 12,
  polyester: 20,
  exterieur: 35,
}

const sideExtra = { recto: 0, 'recto-verso': 25 }

const bagExtra = { standard: 0, matelassee: 15, roulettes: 30 }

const discountTiers = [
  { minQty: 5, percent: 8 },
  { minQty: 10, percent: 15 },
  { minQty: 20, percent: 22 },
]

const unitPrice = computed(() => {
  return (
    (structureBase[selection.structure] || 0) +
    (formatExtra[selection.format] || 0) +
    (materialExtra[selection.material] || 0) +
    (sideExtra[selection.side] || 0) +
    (bagExtra[selection.bag] || 0)
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
  const days = selection.structure === 'exterieur' || selection.side === 'recto-verso' ? 4 : 2
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
  !!selection.structure &&
  !!selection.format &&
  !!selection.material &&
  !!selection.side &&
  !!selection.bag &&
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
    q: 'ما الفرق بين الهيكل الاقتصادي والفاخر؟',
    a: 'الهيكل الاقتصادي أخف وأبسط ومناسب للاستخدام القصير، بينما الهيكل الفاخر يوفر آلية فتح وطي أكثر سلاسة ومتانة أعلى تناسب الاستخدام المتكرر في المعارض.',
  },
  {
    q: 'هل يمكن استخدام الرول أب في الهواء الطلق؟',
    a: 'نعم، بشرط اختيار الهيكل والخامة المخصصين للاستخدام الخارجي، واللذين يوفران مقاومة أفضل للرياح والرطوبة مقارنة بالنماذج الداخلية القياسية.',
  },
  {
    q: 'كم يستغرق تركيب الرول أب؟',
    a: 'تركيب معظم الهياكل يستغرق أقل من دقيقة واحدة بفضل آلية الفتح والطي البسيطة، دون الحاجة لأي أدوات إضافية.',
  },
  {
    q: 'هل تشمل الحقيبة في السعر الأساسي؟',
    a: 'تأتي معظم الهياكل مرفقة بحقيبة نقل أساسية ضمن السعر، ويمكنك الترقية إلى حقيبة مبطنة أو بعجلات مقابل رسوم إضافية بسيطة.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS (illustratifs)
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'الهيكل الفاخر متين جداً وسهل التركيب، استخدمناه في 3 معارض متتالية بدون أي مشكلة.', author: 'عميل — معرض تجاري' },
  { stars: 5, text: 'الألوان واضحة جداً والخامة البوليستر أعطت مظهراً راقياً في جناحنا.', author: 'عميل — علامة تجارية' },
  { stars: 4, text: 'الحقيبة بالعجلات سهّلت علينا نقل عدة رول أب دفعة واحدة بين القاعات.', author: 'عميل — منظم فعاليات' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر مواصفات الرول أب', desc: 'حدد الهيكل والمقاس والخامة وجهة الطباعة وحقيبة النقل والكمية.' },
  { title: 'ارفع تصميمك أو اطلب مساعدتنا', desc: 'أرفق ملف PDF أو JPG جاهز، أو تواصل مع فريقنا لإنشاء تصميم من الصفر.' },
  { title: 'أكّد طلبك', desc: 'راجع السعر النهائي والمعلومات ثم أكّد الطلب عبر النموذج.' },
  { title: 'استلم طلبك', desc: 'استلم طلبك من المحل أو عبر التوصيل حسب الخيار الذي اخترته.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'banners-vinyl', name: 'اللافتات والفينيل', priceFrom: 25, href: '/produit/banners-vinyl' },
  { slug: 'beach-flag', name: 'Beach Flag', priceFrom: 60, href: '/beach-flag' },
  { slug: 'stand-parapluie', name: 'ستاند مظلة', priceFrom: 150, href: '/stand-parapluie' },
  { slug: 'signage', name: 'اللوحات والإشارات', priceFrom: 80, href: '/produit/signage' },
]
</script>

<style scoped>
.ru-page {
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
.ru-head { padding: 34px 24px 20px; }
.ru-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.ru-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.ru-rating { display: flex; align-items: center; gap: 8px; }
.ru-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.ru-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.ru-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.ru-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.ru-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.ru-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .ru-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.ru-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.ru-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.ru-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.ru-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.ru-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.ru-gallery-thumb.active { border-color: var(--gold); }
.ru-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.ru-reassurance { margin-top: 30px; }
.ru-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.ru-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.ru-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.ru-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.ru-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.ru-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.ru-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.ru-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; max-height: 260px; overflow-y: auto; }
.ru-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.ru-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.ru-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.ru-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.ru-steps-bar-item.active .ru-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.ru-steps-bar-item.done .ru-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.ru-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.ru-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.ru-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.ru-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.ru-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); }
.ru-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.ru-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.ru-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.ru-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.ru-choice-name { font-weight: 800; }
.ru-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.ru-pill-row { display: flex; gap: 8px; flex-wrap: wrap; }
.ru-pill { padding: 10px 20px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 13px; cursor: pointer; }
.ru-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.ru-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.ru-qty-card { min-width: 60px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.ru-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.ru-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.ru-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.ru-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.ru-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.ru-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.ru-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.ru-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.ru-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.ru-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.ru-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.ru-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.ru-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.ru-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.ru-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.ru-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .ru-order-form-grid { grid-template-columns: 1fr; } }
.ru-order-form-grid input { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; }
.ru-order-form-grid input:focus { outline: none; border-color: var(--gold); }
.ru-order-submit { width: 100%; }

.btn-gold, .ru-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .ru-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.ru-cta:hover .arrow { transform: translateX(-4px); }

/* Sections génériques */
.ru-section { padding: 56px 0; border-top: 1px solid var(--border); }
.ru-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.ru-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.ru-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.ru-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.ru-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.ru-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.ru-specs-table-wrap { overflow-x: auto; }
.ru-specs-table { width: 100%; border-collapse: collapse; }
.ru-specs-table tr { border-bottom: 1px solid var(--border); }
.ru-specs-table th, .ru-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.ru-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.ru-specs-table td { color: var(--text); }

/* Templates */
.ru-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.ru-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.ru-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.ru-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.ru-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.ru-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.ru-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.ru-hto-card { text-align: center; padding: 20px; }
.ru-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.ru-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.ru-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.ru-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.ru-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.ru-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.ru-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.ru-faq-item.open .ru-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.ru-faq-answer { padding: 0 18px 18px; }
.ru-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.ru-reviews-note { margin-top: -20px; }
.ru-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.ru-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.ru-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.ru-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.ru-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.ru-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.ru-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.ru-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.ru-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.ru-related-name { font-size: 13px; font-weight: 700; }
.ru-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>