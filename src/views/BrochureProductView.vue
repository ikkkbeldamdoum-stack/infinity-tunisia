<!-- src/views/BrochureProductView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: بروشورات (Brochures) — نسخة كاملة أصلية بأسلوب Vue 3
  ═══════════════════════════════════════════════════════════════════════════
  محتوى وتصميم أصليان بالكامل، بنفس منطق ونظام تصميم صفحة الفلايرز
  (FlyerProductView.vue) وصفحة بطاقات الأعمال (BusinessCardProductView.vue)
  لضمان الانسجام البصري بين صفحات المنتجات.

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم + روابط تنقّل سريع
  2. معرض صور المنتج + شارات الضمان
  3. مُهيّئ المنتج بخطوات: المقاس، نوع التجليد، الورق الداخلي، الألوان،
     الغلاف والتشطيب، عدد الصفحات، الكمية
  4. دليل الشراء التعليمي
  5. جدول المواصفات التقنية
  6. قوالب التصميم الجاهزة
  7. خطوات الطلب
  8. الأسئلة الشائعة
  9. آراء العملاء (توضيحية)
  10. منتجات ذات صلة

  مسار الراوتر المقترح: { path: '/produit/brochures', name: 'brochure-product', component: BrochureProductView }
-->

<template>
  <div dir="rtl" class="bro-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">بروشورات</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap bro-head">
      <div class="bro-head-top">
        <h1>اطبع بروشوراتك التعريفية بجودة احترافية وتفاصيل دقيقة</h1>
        <div class="bro-rating">
          <span class="bro-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="bro-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="bro-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap bro-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="bro-gallery-col">
        <div class="bro-gallery">
          <div class="bro-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="bro-gallery-badge">جودة طباعة احترافية</span>
          </div>
          <div class="bro-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="bro-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="bro-reassurance">
          <h3>لماذا تطبع بروشوراتك معنا؟</h3>
          <ul>
            <li>
              <span class="bro-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>توصيل سريع</strong>
                <p>تجهيز الطلبات القياسية خلال 3 إلى 5 أيام عمل، مع توصيل لجميع الولايات.</p>
              </div>
            </li>
            <li>
              <span class="bro-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية ومتدرجة</strong>
                <p>كلما زادت الكمية المطلوبة، انخفض سعر النسخة الواحدة تلقائياً.</p>
              </div>
            </li>
            <li>
              <span class="bro-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>تجليد وتشطيب احترافي</strong>
                <p>تجليد بدبابيس معدنية أو دوسيه لاصق، مع خيارات تغليف متعددة للغلاف.</p>
              </div>
            </li>
            <li>
              <span class="bro-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>دعم فني مباشر</strong>
                <p>فريقنا متاح لمساعدتك في اختيار عدد الصفحات والورق المناسب لمحتواك.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="bro-config-col">
        <div class="bro-config-card">

          <!-- Barre des étapes -->
          <div class="bro-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="bro-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="bro-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="bro-steps-bar-label">{{ s.title }}</span>
              <span class="bro-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="bro-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'binding'">
              <h4>اختر نوع التجليد</h4>
              <div class="bro-choice-grid bro-choice-grid--wide">
                <button
                  v-for="b in bindings"
                  :key="b.id"
                  type="button"
                  class="bro-choice-card bro-choice-card--desc"
                  :class="{ active: selection.binding === b.id }"
                  @click="selectAndNext('binding', b.id)"
                >
                  <span class="bro-choice-name">{{ b.label }}</span>
                  <span class="bro-choice-desc">{{ b.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'format'">
              <h4>اختر المقاس</h4>
              <div class="bro-choice-grid">
                <button
                  v-for="f in formats"
                  :key="f.id"
                  type="button"
                  class="bro-choice-card"
                  :class="{ active: selection.format === f.id }"
                  @click="selectAndNext('format', f.id)"
                >
                  {{ f.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'paper'">
              <h4>اختر ورق الصفحات الداخلية</h4>
              <div class="bro-choice-grid bro-choice-grid--wide">
                <button
                  v-for="p in innerPapers"
                  :key="p.id"
                  type="button"
                  class="bro-choice-card bro-choice-card--desc"
                  :class="{ active: selection.paper === p.id }"
                  @click="selectAndNext('paper', p.id)"
                >
                  <span class="bro-choice-name">{{ p.label }}</span>
                  <span class="bro-choice-desc">{{ p.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'color'">
              <h4>اختر ألوان الطباعة الداخلية</h4>
              <div class="bro-pill-row">
                <button
                  v-for="c in colors"
                  :key="c.id"
                  type="button"
                  class="bro-pill"
                  :class="{ active: selection.color === c.id }"
                  @click="selectAndNext('color', c.id)"
                >
                  {{ c.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'cover'">
              <h4>اختر تشطيب الغلاف</h4>
              <div class="bro-choice-grid bro-choice-grid--wide">
                <button
                  v-for="c in covers"
                  :key="c.id"
                  type="button"
                  class="bro-choice-card bro-choice-card--desc"
                  :class="{ active: selection.cover === c.id }"
                  @click="selectAndNext('cover', c.id)"
                >
                  <span class="bro-choice-name">{{ c.label }}</span>
                  <span class="bro-choice-desc">{{ c.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'pages'">
              <h4>اختر عدد الصفحات الداخلية</h4>
              <div class="bro-qty-grid">
                <button
                  v-for="p in pageCounts"
                  :key="p"
                  type="button"
                  class="bro-qty-card"
                  :class="{ active: selection.pages === p }"
                  @click="selectAndNext('pages', p)"
                >
                  {{ p }} صفحة
                </button>
              </div>
              <p class="bro-qty-hint">يُحتسب عدد الصفحات بدون احتساب الغلاف، ويجب أن يكون رقماً زوجياً لضمان التجليد الصحيح.</p>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="bro-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="bro-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="bro-qty-hint">الأسعار تشمل التجليد النهائي وتتضمن التوصيل داخل البلاد.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="bro-step-nav">
            <button type="button" class="bro-step-btn bro-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="bro-step-btn bro-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="bro-price-card">
          <div class="bro-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="bro-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="bro-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FORMULAIRE DE COMMANDE ═══════════════ -->
    <div class="wrap" id="order-form">
      <div class="bro-order-form">
        <h3>أكمل طلبك</h3>
        <div class="bro-order-form-grid">
          <input type="text" v-model="contact.name" placeholder="الاسم الكامل" />
          <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" />
        </div>
        <button type="button" class="btn-gold bro-order-submit" @click="submitOrder" :disabled="!canOrder">
          <span v-if="orderSent">✅ تم إرسال طلبك، سنتواصل معك قريباً</span>
          <span v-else>تأكيد الطلب — {{ formatMoney(estimatedPrice) }} د.ت</span>
        </button>
      </div>
    </div>

    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="bro-section bro-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار البروشور المناسب لمحتواك؟</h2>

        <div class="bro-guide-grid">
          <article class="bro-guide-card">
            <h4>1. حدد نوع التجليد حسب سُمك المحتوى</h4>
            <p>
              التجليد بدبابيس معدنية مناسب للبروشورات القصيرة (حتى 48 صفحة تقريباً)، بينما
              الدوسيه اللاصق (Dos carré collé) يناسب الكتيبات الأثخن ويمنح مظهراً أكثر احترافية
              على الرف.
            </p>
          </article>
          <article class="bro-guide-card">
            <h4>2. اختر المقاس حسب طريقة الاستخدام</h4>
            <p>
              A5 مناسب للتوزيع اليدوي والكتيبات المدمجة، بينما A4 يمنحك مساحة أكبر لعرض الصور
              والجداول التفصيلية، والمقاسات المربعة تمنح طابعاً تصميمياً مميزاً.
            </p>
          </article>
          <article class="bro-guide-card">
            <h4>3. اختر الورق الداخلي حسب طبيعة المحتوى</h4>
            <p>
              الورق الأوفست غير اللامع مريح للقراءة الطويلة، بينما الورق الكوشيه اللامع يبرز
              الصور والألوان بشكل أفضل، وهو الخيار الأنسب للكتالوجات المصوّرة.
            </p>
          </article>
          <article class="bro-guide-card">
            <h4>4. لا تهمل تشطيب الغلاف</h4>
            <p>
              غلاف مُغلَّف (Pelliculage) يحمي البروشور من التلف أثناء التوزيع والتخزين، بينما
              إضافة فرنيش انتقائي أو تذهيب على الغلاف يمنح انطباعاً أولياً أكثر فخامة.
            </p>
          </article>
          <article class="bro-guide-card">
            <h4>5. احسب عدد الصفحات بدقة</h4>
            <p>
              يجب أن يكون عدد الصفحات الداخلية رقماً زوجياً (من مضاعفات 4 عادة) لضمان تجليد
              صحيح بدون صفحات فارغة غير مقصودة في نهاية الكتيب.
            </p>
          </article>
          <article class="bro-guide-card">
            <h4>6. جهّز ملفك بالترتيب الصحيح للصفحات</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة PDF مع كل صفحة بترتيبها الصحيح (وليس بشكل "امبوزيشن")
              بدقة 300 نقطة في البوصة وهامش أمان 3 ملم، ونترك عملية التنضيد لفريقنا.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="bro-section bro-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="bro-specs-table-wrap">
          <table class="bro-specs-table">
            <tbody>
              <tr>
                <th>أنواع التجليد</th>
                <td>{{ bindings.map(b => b.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>المقاسات المتوفرة</th>
                <td>{{ formats.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنواع الورق الداخلي</th>
                <td>{{ innerPapers.map(p => p.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>ألوان الطباعة الداخلية</th>
                <td>{{ colors.map(c => c.label).join(' أو ') }}</td>
              </tr>
              <tr>
                <th>خيارات تشطيب الغلاف</th>
                <td>{{ covers.map(c => c.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>عدد الصفحات الداخلية</th>
                <td>من {{ pageCounts[0] }} إلى {{ pageCounts[pageCounts.length - 1] }} صفحة (بمضاعفات 4)</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF (موصى به، صفحة بصفحة)، بدقة 300 نقطة في البوصة على الأقل</td>
              </tr>
              <tr>
                <th>هامش الأمان (Bleed)</th>
                <td>3 ملم على كل جانب من التصميم</td>
              </tr>
              <tr>
                <th>مدة التجهيز القياسية</th>
                <td>3 إلى 5 أيام عمل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>



    <!-- ═══════════════ COMMENT COMMANDER ═══════════════ -->
    <section class="bro-section bro-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب بروشوراتك في 4 خطوات؟</h2>
        <div class="bro-hto-grid">
          <div class="bro-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="bro-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- ═══════════════ AVIS CLIENTS (illustratifs) ═══════════════ -->
    <section class="bro-section bro-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="bro-section-sub bro-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية موثّقة من عملائك.</p>
        <div class="bro-reviews-grid">
          <div class="bro-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="bro-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="bro-review-text">{{ r.text }}</p>
            <span class="bro-review-author">{{ r.author }}</span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { pushAdminRecord, buildOrderRecord } from '../utils/adminSync'

/* ═══════════════════════════════════════════════════════════
   DONNÉES PRODUIT (contenu original)
═══════════════════════════════════════════════════════════ */
const gallery = [
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Brochure+A4', alt: 'نموذج بروشور مقاس A4' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Brochure+A5', alt: 'نموذج بروشور مقاس A5' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Brochure+Carre', alt: 'نموذج بروشور مربع' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Brochure+DL', alt: 'نموذج بروشور مقاس DL' },
]
const activeImage = ref(0)

const bindings = [
  { id: 'agrafe', label: 'دبابيس معدنية (نقطتان)', desc: 'الخيار الأسرع والأكثر اقتصادية للكتيبات القصيرة' },
  { id: 'dos-carre', label: 'دوسيه لاصق (Dos carré collé)', desc: 'مظهر احترافي بغلاف مسطح للكتيبات الأثخن' },
]

const formats = [
  { id: 'a5', label: 'A5 (14.8×21 سم)', ratio: '1 / 1.42' },
  { id: 'a4', label: 'A4 (21×29.7 سم)', ratio: '1 / 1.41' },
  { id: 'a4-paysage', label: 'A4 أفقي (29.7×21 سم)', ratio: '1.41 / 1' },
  { id: 'dl', label: 'DL (10×21 سم)', ratio: '1 / 2.1' },
  { id: 'carre', label: 'مربع (21×21 سم)', ratio: '1 / 1' },
]

const innerPapers = [
  { id: 'offset90', label: '90 غ أوفست', desc: 'سطح غير لامع مريح للقراءة الطويلة' },
  { id: 'couche135', label: '135 غ كوشيه لامع', desc: 'يبرز الصور والألوان بوضوح عالٍ' },
  { id: 'couche170demimat', label: '170 غ نصف مطفي', desc: 'توازن بين وضوح الألوان وراحة القراءة' },
  { id: 'recycle130', label: '130 غ معاد تدويره', desc: 'خيار صديق للبيئة بمظهر طبيعي' },
  { id: 'couche250', label: '250 غ كوشيه لامع', desc: 'سماكة أعلى تمنح إحساساً بجودة الكتالوج' },
]

const colors = [
  { id: 'couleur', label: 'ألوان كاملة (CMJN)' },
  { id: 'nb', label: 'أبيض وأسود' },
]

const covers = [
  { id: 'identique', label: 'مطابق للورق الداخلي', desc: 'خيار موحّد واقتصادي لكامل البروشور' },
  { id: 'couche170mat', label: '170 غ كوشيه مطفي', desc: 'غلاف أثقل بمظهر أنيق غير عاكس' },
  { id: 'pell-mat', label: 'غلاف مُغلّف مطفي', desc: 'حماية إضافية مع لمسة راقية غير لامعة' },
  { id: 'pell-brillant', label: 'غلاف مُغلّف لامع', desc: 'حماية إضافية مع سطوع يبرز الألوان' },
  { id: 'soft-touch', label: 'غلاف Soft Touch + فرنيش انتقائي', desc: 'ملمس مخملي فاخر مع إبراز موضعي للشعار' },
  { id: 'dorure', label: 'غلاف Soft Touch + تذهيب', desc: 'أعلى درجات الفخامة لكتيبات العلامات الراقية' },
]

const pageCounts = [8, 12, 16, 24, 32, 48, 64]
const quantities = [50, 100, 250, 500, 1000, 2500]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  binding: '',
  format: '',
  paper: '',
  color: '',
  cover: '',
  pages: null,
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
    key: 'binding',
    title: 'التجليد',
    selectedLabel: bindings.find((b) => b.id === selection.binding)?.label || '',
  },
  {
    key: 'format',
    title: 'المقاس',
    selectedLabel: formats.find((f) => f.id === selection.format)?.label || '',
  },
  {
    key: 'paper',
    title: 'الورق الداخلي',
    selectedLabel: innerPapers.find((p) => p.id === selection.paper)?.label || '',
  },
  {
    key: 'color',
    title: 'الألوان',
    selectedLabel: colors.find((c) => c.id === selection.color)?.label || '',
  },
  {
    key: 'cover',
    title: 'الغلاف',
    selectedLabel: covers.find((c) => c.id === selection.cover)?.label || '',
  },
  {
    key: 'pages',
    title: 'عدد الصفحات',
    selectedLabel: selection.pages ? `${selection.pages} صفحة` : '',
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
const basePricePerCopy = 0.9

const bindingExtra = { agrafe: 0, 'dos-carre': 0.6 }
const paperExtra = {
  offset90: 0,
  couche135: 0.15,
  couche170demimat: 0.22,
  recycle130: 0.1,
  couche250: 0.35,
}
const colorMultiplier = { couleur: 1, nb: 0.6 }
const coverExtra = {
  identique: 0,
  couche170mat: 0.3,
  'pell-mat': 0.5,
  'pell-brillant': 0.5,
  'soft-touch': 0.9,
  dorure: 1.6,
}

const discountTiers = [
  { minQty: 100, percent: 5 },
  { minQty: 500, percent: 12 },
  { minQty: 2000, percent: 18 },
]

const unitPrice = computed(() => {
  const pagesFactor = selection.pages ? selection.pages / 16 : 1
  const base =
    (basePricePerCopy +
      (bindingExtra[selection.binding] || 0) +
      (paperExtra[selection.paper] || 0) * pagesFactor +
      (coverExtra[selection.cover] || 0)) *
    (colorMultiplier[selection.color] ?? 1)
  return base
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
  const days = selection.binding === 'dos-carre' || (selection.cover && selection.cover !== 'identique') ? 5 : 3
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
  !!selection.binding &&
  !!selection.format &&
  !!selection.paper &&
  !!selection.color &&
  !!selection.cover &&
  !!selection.pages &&
  !!selection.quantity &&
  !!contact.name &&
  !!contact.phone
)

function submitOrder() {
  if (!canOrder.value) return

  // ═══ Envoi de la commande vers le panneau admin (onglet "الطلبات") ═══
  pushAdminRecord('infinity_commandes', buildOrderRecord({
    product: 'الكتيبات والبروشورات',
    productKey: 'brochure',
    contact,
    estimatedPrice: estimatedPrice.value,
    details: [
      { label: 'التجليد', value: bindings.find((b) => b.id === selection.binding)?.label || '' },
      { label: 'المقاس', value: formats.find((f) => f.id === selection.format)?.label || '' },
      { label: 'الورق الداخلي', value: innerPapers.find((p) => p.id === selection.paper)?.label || '' },
      { label: 'الألوان', value: colors.find((c) => c.id === selection.color)?.label || '' },
      { label: 'الغلاف', value: covers.find((c) => c.id === selection.cover)?.label || '' },
      { label: 'عدد الصفحات', value: selection.pages ? `${selection.pages} صفحة` : '' },
      { label: 'الكمية', value: selection.quantity ? String(selection.quantity) : '' },
      { label: 'التوصيل المتوقع', value: estimatedDeliveryLabel.value },
    ],
  }))

  orderSent.value = true
  setTimeout(() => (orderSent.value = false), 5000)
}

/* ═══════════════════════════════════════════════════════════
   CONTENU FAQ
═══════════════════════════════════════════════════════════ */
const openFaq = ref(null)
const faqs = [
  {
    q: 'ما الفرق بين التجليد بدبابيس والدوسيه اللاصق؟',
    a: 'الدبابيس المعدنية مناسبة للكتيبات القصيرة وأسرع تجهيزاً، بينما الدوسيه اللاصق (Dos carré collé) يمنح غلافاً مسطحاً ومظهراً أكثر احترافية للكتيبات الأثخن (عادة أكثر من 48 صفحة).',
  },
  {
    q: 'كيف أحدد عدد الصفحات الصحيح؟',
    a: 'يجب أن يكون عدد الصفحات الداخلية من مضاعفات 4 لضمان تجليد سليم بدون صفحات فارغة زائدة في نهاية الكتيب.',
  },
  {
    q: 'هل يمكنني طباعة الغلاف بورق مختلف عن الداخل؟',
    a: 'نعم، يمكنك اختيار غلاف أثقل أو مغلّف أو حتى مذهّب، مستقل تماماً عن نوع الورق المستخدم في الصفحات الداخلية.',
  },
  {
    q: 'كم من الوقت يستغرق التجهيز؟',
    a: 'التجهيز القياسي يستغرق 3 إلى 5 أيام عمل، وقد يطول قليلاً عند اختيار تجليد الدوسيه اللاصق أو تشطيبات غلاف خاصة.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS (illustratifs)
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'كتيب المنتجات وصل بجودة طباعة رائعة، والدوسيه اللاصق أعطى مظهراً احترافياً جداً.', author: 'عميل — كتالوج منتجات' },
  { stars: 5, text: 'الألوان طابقت تصميمنا الأصلي تماماً، وسرعة التسليم كانت ممتازة.', author: 'عميل — تقرير سنوي' },
  { stars: 4, text: 'الغلاف المغلّف حمى الكتيب جيداً أثناء التوزيع في المعرض.', author: 'عميل — كتيب معرض تجاري' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر مواصفات بروشورك', desc: 'حدد نوع التجليد والمقاس والورق وعدد الصفحات والكمية المناسبة.' },
  { title: 'ارفع تصميمك أو اطلب مساعدتنا', desc: 'أرفق ملف PDF مرتب صفحة بصفحة، أو تواصل مع فريقنا لإنشاء تصميم من الصفر.' },
  { title: 'أكّد طلبك', desc: 'راجع السعر النهائي والمعلومات ثم أكّد الطلب عبر النموذج.' },
  { title: 'استلم طلبك', desc: 'استلم طلبك من المحل أو عبر التوصيل حسب الخيار الذي اخترته.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'flyers', name: 'فلايرز إشهارية', priceFrom: 0.09, href: '/produit/flyers' },
  { slug: 'business-cards', name: 'بطاقات الأعمال', priceFrom: 0.06, href: '/produit/business-cards' },
  { slug: 'affiches', name: 'ملصقات إشهارية', priceFrom: 1.2, href: '/affiches' },
  { slug: 'depliants', name: 'دبليان (Dépliant)', priceFrom: 0.25, href: '/depliants' },
]
</script>

<style scoped>
.bro-page {
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
.bro-head { padding: 34px 24px 20px; }
.bro-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.bro-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.bro-rating { display: flex; align-items: center; gap: 8px; }
.bro-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.bro-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.bro-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.bro-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.bro-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.bro-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .bro-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.bro-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.bro-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.bro-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.bro-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.bro-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.bro-gallery-thumb.active { border-color: var(--gold); }
.bro-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.bro-reassurance { margin-top: 30px; }
.bro-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bro-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.bro-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.bro-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.bro-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.bro-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.bro-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.bro-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; max-height: 260px; overflow-y: auto; }
.bro-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.bro-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.bro-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.bro-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.bro-steps-bar-item.active .bro-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.bro-steps-bar-item.done .bro-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bro-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.bro-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.bro-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.bro-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.bro-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
.bro-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.bro-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.bro-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.bro-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.bro-choice-name { font-weight: 800; }
.bro-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.bro-pill-row { display: flex; gap: 8px; flex-wrap: wrap; }
.bro-pill { padding: 10px 20px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 13px; cursor: pointer; }
.bro-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.bro-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.bro-qty-card { min-width: 70px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.bro-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bro-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.bro-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.bro-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.bro-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.bro-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.bro-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.bro-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.bro-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.bro-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.bro-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.bro-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.bro-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.bro-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.bro-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bro-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .bro-order-form-grid { grid-template-columns: 1fr; } }
.bro-order-form-grid input { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; }
.bro-order-form-grid input:focus { outline: none; border-color: var(--gold); }
.bro-order-submit { width: 100%; }

.btn-gold, .bro-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .bro-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.bro-cta:hover .arrow { transform: translateX(-4px); }

/* Sections génériques */
.bro-section { padding: 56px 0; border-top: 1px solid var(--border); }
.bro-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.bro-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.bro-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.bro-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bro-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.bro-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.bro-specs-table-wrap { overflow-x: auto; }
.bro-specs-table { width: 100%; border-collapse: collapse; }
.bro-specs-table tr { border-bottom: 1px solid var(--border); }
.bro-specs-table th, .bro-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.bro-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.bro-specs-table td { color: var(--text); }

/* Templates */
.bro-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.bro-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.bro-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.bro-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.bro-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.bro-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.bro-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.bro-hto-card { text-align: center; padding: 20px; }
.bro-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.bro-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.bro-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.bro-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.bro-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.bro-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.bro-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.bro-faq-item.open .bro-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.bro-faq-answer { padding: 0 18px 18px; }
.bro-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.bro-reviews-note { margin-top: -20px; }
.bro-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.bro-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bro-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.bro-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.bro-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.bro-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.bro-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.bro-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.bro-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.bro-related-name { font-size: 13px; font-weight: 700; }
.bro-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>