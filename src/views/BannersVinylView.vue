<!-- src/views/BannersVinylView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: لفتات وفينيل (Bannières & Vinyle) — نسخة كاملة أصلية
  ═══════════════════════════════════════════════════════════════════════════

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم + روابط تنقّل سريع
  2. معرض صور المنتج + شارات الضمان
  3. مُهيّئ المنتج بخطوات جانبية (المقاس، الخامة، التشطيب، الكمية)
  4. دليل الشراء
  5. جدول المواصفات التقنية
  6. تحميل القوالب
  7. خطوات الطلب
  8. أسئلة شائعة
  9. تقييمات العملاء
  10. منتجات ذات صلة
-->

<template>
  <div dir="rtl" class="bv-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">الفتات والفينيل</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap bv-head">
      <div class="bv-head-top">
        <h1>لفتات وفينيل بجودة احترافية للداخل والخارج — صمم واطبع حسب حاجتك</h1>
        <div class="bv-rating">
          <span class="bv-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="bv-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="bv-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ SECTION PRINCIPALE : GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap bv-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="bv-gallery-col">
        <div class="bv-gallery">
          <div class="bv-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="bv-gallery-badge">طباعة داخلية وخارجية</span>
          </div>
          <div class="bv-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="bv-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="bv-reassurance">
          <h3>لماذا تختار لفتاتنا وفينيلنا؟</h3>
          <ul>
            <li>
              <span class="bv-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>جودة ألوان ثابتة</strong>
                <p>أحبار مقاومة للأشعة فوق البنفسجية، تناسب الاستخدام الخارجي الطويل.</p>
              </div>
            </li>
            <li>
              <span class="bv-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>توصيل سريع وتركيب</strong>
                <p>تجهيز خلال 24–72 ساعة حسب المقاس، مع خيار التركيب في موقعك.</p>
              </div>
            </li>
            <li>
              <span class="bv-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية</strong>
                <p>نقدم أفضل سعر للمتر المربع مع خصومات على الكميات الكبيرة.</p>
              </div>
            </li>
            <li>
              <span class="bv-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>خامات متنوعة</strong>
                <p>فينيل لاصق، قماش مقاوم للماء، شبك مخرّم، لامع ومطفي.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="bv-config-col">
        <div class="bv-config-card">

          <!-- Barre des étapes -->
          <div class="bv-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="bv-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="bv-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="bv-steps-bar-label">{{ s.title }}</span>
              <span class="bv-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="bv-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'format'">
              <h4>اختر المقاس</h4>
              <div class="bv-choice-grid">
                <button
                  v-for="f in formats"
                  :key="f.id"
                  type="button"
                  class="bv-choice-card"
                  :class="{ active: selection.format === f.id }"
                  @click="selectAndNext('format', f.id)"
                >
                  {{ f.label }}
                </button>
              </div>
              <div class="bv-custom-size" v-if="selection.format === 'custom'">
                <div class="bv-custom-size-inputs">
                  <label>
                    <span>العرض (سم)</span>
                    <input type="number" v-model.number="customWidth" min="10" max="500" />
                  </label>
                  <label>
                    <span>الارتفاع (سم)</span>
                    <input type="number" v-model.number="customHeight" min="10" max="500" />
                  </label>
                </div>
                <p class="bv-custom-hint">المقاسات المخصصة متوفرة حتى 500 سم في البعد الأكبر.</p>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'material'">
              <h4>اختر الخامة</h4>
              <div class="bv-choice-grid bv-choice-grid--wide">
                <button
                  v-for="m in materials"
                  :key="m.id"
                  type="button"
                  class="bv-choice-card bv-choice-card--desc"
                  :class="{ active: selection.material === m.id }"
                  @click="selectAndNext('material', m.id)"
                >
                  <span class="bv-choice-name">{{ m.label }}</span>
                  <span class="bv-choice-desc">{{ m.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'finish'">
              <h4>اختر التشطيب والخيارات الإضافية</h4>
              <div class="bv-subgroup">
                <span class="bv-subgroup-label">نوع السطح</span>
                <div class="bv-pill-row">
                  <button
                    v-for="s in surfaces"
                    :key="s.id"
                    type="button"
                    class="bv-pill"
                    :class="{ active: selection.surface === s.id }"
                    @click="selection.surface = s.id"
                  >
                    {{ s.label }}
                  </button>
                </div>
              </div>
              <div class="bv-subgroup">
                <span class="bv-subgroup-label">خيارات إضافية</span>
                <div class="bv-check-grid">
                  <label v-for="opt in options" :key="opt.id" class="bv-check-label">
                    <input type="checkbox" :value="opt.id" v-model="selection.options" />
                    <span>{{ opt.label }}</span>
                  </label>
                </div>
              </div>
              <div class="bv-step-nav-inner">
                <button type="button" class="bv-step-btn bv-step-btn--gold" @click="activeStepIndex++">
                  التالي
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="bv-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="bv-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="bv-qty-hint">الأسعار تشمل الطباعة على وجه واحد، والتشطيب القياسي، والتوصيل داخل البلاد.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="bv-step-nav">
            <button type="button" class="bv-step-btn bv-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="bv-step-btn bv-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1 && configSteps[activeStepIndex].key !== 'finish'"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="bv-price-card">
          <div class="bv-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="bv-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="bv-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FORMULAIRE DE COMMANDE ═══════════════ -->
    <div class="wrap" id="order-form">
      <div class="bv-order-form">
        <h3>أكمل طلبك</h3>
        <div class="bv-order-form-grid">
          <input type="text" v-model="contact.name" placeholder="الاسم الكامل" />
          <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" />
          <input type="email" v-model="contact.email" placeholder="البريد الإلكتروني" />
          <textarea v-model="contact.notes" placeholder="ملاحظات إضافية (مثل: التصميم، التركيب، العنوان...)" rows="2"></textarea>
        </div>
        <button type="button" class="btn-gold bv-order-submit" @click="submitOrder" :disabled="!canOrder || loading">
          <span v-if="loading">
            <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" stroke-dasharray="30" stroke-dashoffset="20"/>
            </svg>
            جاري الإرسال...
          </span>
          <span v-else-if="orderSent || success">✅ تم إرسال طلبك، سنتواصل معك قريباً</span>
          <span v-else>تأكيد الطلب — {{ formatMoney(estimatedPrice) }} د.ت</span>
        </button>
        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </div>

    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="bv-section bv-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار الفتة أو الفينيل المناسب؟</h2>

        <div class="bv-guide-grid">
          <article class="bv-guide-card">
            <h4>1. حدد مكان الاستخدام (داخلي / خارجي)</h4>
            <p>
              الفتات الداخلية تُطبع عادة على قماش خفيف أو فينيل لاصق، بينما الفتات الخارجية
              تحتاج إلى خامات مقاومة للماء والأشعة فوق البنفسجية مثل الفينيل الشبكي أو القماش
              المشمع المضاد للتمزق.
            </p>
          </article>
          <article class="bv-guide-card">
            <h4>2. اختر المقاس المناسب للمساحة</h4>
            <p>
              قم بقياس المساحة المتوفرة للتعليق بدقة، مع مراعاة زوايا الرؤية وارتفاع التثبيت.
              المقاسات الأكبر تحتاج إلى خامات أكثر متانة لتجنب التمزق بفعل الرياح.
            </p>
          </article>
          <article class="bv-guide-card">
            <h4>3. اختر الخامة حسب المتانة المطلوبة</h4>
            <p>
              الفينيل اللاصق مثالي للزجاج والأسطح الملساء، بينما القماش المشمع (Bâche) مناسب
              للواجهات الخارجية والحملات الطويلة. الشبك المخرّم يسمح بمرور الهواء ويقلل من مقاومة الرياح.
            </p>
          </article>
          <article class="bv-guide-card">
            <h4>4. لا تهمل التشطيب والحواف</h4>
            <p>
              اختيار الحواف الملحومة أو المطوية يمنح الفتة مظهراً احترافياً ويزيد من عمرها الافتراضي.
              إضافة الثقوب (Œillets) تسهّل عملية التعليق وتمنع تمزق القماش عند نقاط التثبيت.
            </p>
          </article>
          <article class="bv-guide-card">
            <h4>5. فكّر في جودة الألوان</h4>
            <p>
              الطباعة بالأحبار المقاومة للأشعة فوق البنفسجية تضمن بقاء ألوان الفتة زاهية لمدة
              تصل إلى 3 سنوات في الخارج، وطويلة الأمد للاستخدام الداخلي.
            </p>
          </article>
          <article class="bv-guide-card">
            <h4>6. جهّز ملفك بالدقة والمساحة الصحيحتين</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة PDF أو AI أو EPS، بدقة 150 نقطة في البوصة للمقاسات
              الكبيرة، مع هامش أمان (Bleed) لا يقل عن 5 ملم لتجنب قص العناصر المهمة.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="bv-section bv-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="bv-specs-table-wrap">
          <table class="bv-specs-table">
            <tbody>
              <tr>
                <th>المقاسات المتوفرة</th>
                <td>{{ formats.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>الخامات المتوفرة</th>
                <td>{{ materials.map(m => m.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنواع التشطيب</th>
                <td>{{ surfaces.map(s => s.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>الخيارات الإضافية</th>
                <td>{{ options.map(o => o.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF (موصى به)، AI، EPS، JPG، PNG — بدقة 150 نقطة في البوصة للمقاسات الكبيرة</td>
              </tr>
              <tr>
                <th>هامش الأمان (Bleed)</th>
                <td>5 ملم على كل جانب من التصميم</td>
              </tr>
              <tr>
                <th>مدة التجهيز القياسية</th>
                <td>24 إلى 72 ساعة عمل حسب المقاس والخامة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ═══════════════ COMMENT COMMANDER ═══════════════ -->
    <section class="bv-section bv-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب لفتاتك أو فينيلك في 4 خطوات؟</h2>
        <div class="bv-hto-grid">
          <div class="bv-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="bv-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ ═══════════════ -->
    <section class="bv-section bv-faq" id="faq">
      <div class="wrap">
        <h2>الأسئلة الشائعة</h2>
        <div class="bv-faq-list">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="bv-faq-item"
            :class="{ open: openFaq === idx }"
          >
            <button type="button" class="bv-faq-question" @click="openFaq = openFaq === idx ? null : idx">
              <span>{{ faq.q }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="bv-faq-chevron"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="bv-faq-answer" v-show="openFaq === idx">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ AVIS CLIENTS ═══════════════ -->
    <section class="bv-section bv-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="bv-section-sub bv-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية.</p>
        <div class="bv-reviews-grid">
          <div class="bv-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="bv-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="bv-review-text">{{ r.text }}</p>
            <span class="bv-review-author">{{ r.author }}</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useProductAdmin } from '../composables/useProductAdmin'
import { PRODUCT_CATEGORIES } from '../data/productCategories'

/* ═══════════════════════════════════════════════════════════
   DONNÉES PRODUIT
═══════════════════════════════════════════════════════════ */
const gallery = [
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Banni%C3%A8re+ext%C3%A9rieure', alt: 'لفتة خارجية كبيرة' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Vinyle+adh%C3%A9sif', alt: 'فينيل لاصق للزجاج' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Banni%C3%A8re+int%C3%A9rieure', alt: 'لفتة داخلية' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Vinyle+m%C3%A9ch%C3%A9', alt: 'فينيل شبكي مخرّم' },
]
const activeImage = ref(0)

/* ═══════════════════════════════════════════════════════════
   ADMIN — Connexion à l'administration
═══════════════════════════════════════════════════════════ */
const { submitQuote, loading, error, success } = useProductAdmin(PRODUCT_CATEGORIES.BANNER_VINYL)

/* ═══════════════════════════════════════════════════════════
   CONFIGURATION DU PRODUIT
═══════════════════════════════════════════════════════════ */
const formats = [
  { id: '60x40', label: '60×40 سم', ratio: '1 / 0.67' },
  { id: '90x60', label: '90×60 سم', ratio: '1 / 0.67' },
  { id: '120x80', label: '120×80 سم', ratio: '1 / 0.67' },
  { id: '150x100', label: '150×100 سم', ratio: '1 / 0.67' },
  { id: '200x100', label: '200×100 سم', ratio: '1 / 0.5' },
  { id: 'custom', label: 'مقاس مخصص', ratio: '1 / 0.67' },
]

const templateFormats = [
  { id: '60x40', label: '60×40 سم', ratio: '1 / 0.67' },
  { id: '90x60', label: '90×60 سم', ratio: '1 / 0.67' },
  { id: '120x80', label: '120×80 سم', ratio: '1 / 0.67' },
  { id: '150x100', label: '150×100 سم', ratio: '1 / 0.67' },
]

const materials = [
  { id: 'vinyle-mat', label: 'فينيل مطفي', desc: 'غير لامع، مناسب للداخل والخارج الخفيف' },
  { id: 'vinyle-brillant', label: 'فينيل لامع', desc: 'ألوان زاهية وعاكسة، مثالي للواجهات' },
  { id: 'bache-standard', label: 'قماش مشمع قياسي', desc: 'مقاوم للماء والتمزق، للاستخدام الخارجي' },
  { id: 'bache-renforcee', label: 'قماش مشمع مقوّى', desc: 'سماكة عالية، لظروف الرياح القوية' },
  { id: 'mesh', label: 'شبك مخرّم (Mesh)', desc: 'يسمح بمرور الهواء، مثالي للواجهات العالية' },
  { id: 'tissu-interieur', label: 'قماش داخلي خفيف', desc: 'لمسة أنيقة، مناسب للمعارض والفعاليات' },
]

const surfaces = [
  { id: 'mat', label: 'مطفي' },
  { id: 'glossy', label: 'لامع' },
  { id: 'satin', label: 'ساتان (نصف لامع)' },
]

const options = [
  { id: 'oeillets', label: 'ثقوب (Œillets) للتعليق' },
  { id: 'soudure-bord', label: 'لحام الحواف' },
  { id: 'pliage-bord', label: 'طي الحواف مع خياطة' },
  { id: 'bande-accroche', label: 'شريط تعليق علوي' },
]

const quantities = [1, 2, 5, 10, 25, 50, 100]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  format: '',
  material: '',
  surface: 'mat',
  options: [],
  quantity: null,
})

const customWidth = ref(100)
const customHeight = ref(70)

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
    title: 'المقاس',
    selectedLabel: formats.find((f) => f.id === selection.format)?.label || '',
  },
  {
    key: 'material',
    title: 'الخامة',
    selectedLabel: materials.find((m) => m.id === selection.material)?.label || '',
  },
  {
    key: 'finish',
    title: 'التشطيب',
    selectedLabel: surfaces.find((s) => s.id === selection.surface)?.label || '',
  },
  {
    key: 'quantity',
    title: 'الكمية',
    selectedLabel: selection.quantity ? selection.quantity.toLocaleString('ar') : '',
  },
])

/* ═══════════════════════════════════════════════════════════
   PRIX (logique de démonstration)
═══════════════════════════════════════════════════════════ */
const basePricePerSqm = 12.50

const materialExtra = {
  'vinyle-mat': 0,
  'vinyle-brillant': 0.5,
  'bache-standard': 2.0,
  'bache-renforcee': 4.5,
  'mesh': 6.0,
  'tissu-interieur': 1.5,
}

const surfaceExtra = {
  mat: 0,
  glossy: 0.3,
  satin: 0.2,
}

const optionExtra = {
  oeillets: 2.0,
  'soudure-bord': 1.5,
  'pliage-bord': 2.5,
  'bande-accroche': 1.8,
}

const discountTiers = [
  { minQty: 5, percent: 5 },
  { minQty: 10, percent: 10 },
  { minQty: 25, percent: 18 },
  { minQty: 50, percent: 25 },
]

const areaSqm = computed(() => {
  if (selection.format === 'custom') {
    return (customWidth.value * customHeight.value) / 10000
  }
  const formatMap = {
    '60x40': 0.24,
    '90x60': 0.54,
    '120x80': 0.96,
    '150x100': 1.50,
    '200x100': 2.00,
  }
  return formatMap[selection.format] || 0
})

const unitPrice = computed(() => {
  const mat = materialExtra[selection.material] || 0
  const surf = surfaceExtra[selection.surface] || 0
  const optTotal = (selection.options || []).reduce((sum, oid) => sum + (optionExtra[oid] || 0), 0)
  return basePricePerSqm + mat + surf + optTotal / areaSqm.value
})

const currentDiscountPercent = computed(() => {
  const applicable = discountTiers.filter((t) => (selection.quantity || 0) >= t.minQty)
  return applicable.length ? applicable[applicable.length - 1].percent : 0
})

const estimatedPrice = computed(() => {
  if (!selection.quantity || !areaSqm.value) return 0
  const subtotal = unitPrice.value * areaSqm.value * selection.quantity
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
  const baseDays = selection.format === 'custom' || selection.material === 'mesh' ? 5 : 3
  const optDays = (selection.options || []).length > 2 ? 2 : 0
  const days = baseDays + optDays
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
   FORMULAIRE DE COMMANDE — connecté à l'admin
═══════════════════════════════════════════════════════════ */
const contact = reactive({ name: '', phone: '', email: '', notes: '' })
const orderSent = ref(false)

const canOrder = computed(() =>
  !!selection.format &&
  !!selection.material &&
  !!selection.surface &&
  !!selection.quantity &&
  !!contact.name &&
  !!contact.phone &&
  !!contact.email
)

/* Libellés lisibles pour la sélection courante */
const formatLabel = computed(() => {
  if (selection.format === 'custom') {
    return `مقاس مخصص (${customWidth.value}×${customHeight.value} سم)`
  }
  return formats.find((f) => f.id === selection.format)?.label || '-'
})

const materialLabel = computed(() => materials.find((m) => m.id === selection.material)?.label || '-')
const surfaceLabel = computed(() => surfaces.find((s) => s.id === selection.surface)?.label || '-')

const optionsLabel = computed(() => {
  const labels = (selection.options || []).map((oid) => options.find((o) => o.id === oid)?.label).filter(Boolean)
  return labels.length ? labels.join('، ') : 'بدون خيارات إضافية'
})

async function submitOrder() {
  if (!canOrder.value) return

  const result = await submitQuote({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    message: contact.notes || 'Demande de devis pour l\'impression de bannières et vinyle',
    options: {
      format: formatLabel.value,
      material: materialLabel.value,
      surface: surfaceLabel.value,
      options: optionsLabel.value,
      quantity: selection.quantity,
      estimatedPrice: estimatedPrice.value,
      delivery: estimatedDeliveryLabel.value,
      notes: contact.notes
    },
    price: estimatedPrice.value,
    quantity: selection.quantity
  })

  if (result.success) {
    orderSent.value = true
    // Réinitialiser après 5 secondes
    setTimeout(() => {
      orderSent.value = false
    }, 5000)
  }
}

/* ═══════════════════════════════════════════════════════════
   CONTENU FAQ
═══════════════════════════════════════════════════════════ */
const openFaq = ref(null)
const faqs = [
  {
    q: 'ما هو الفرق بين الفينيل والقماش المشمع؟',
    a: 'الفينيل مادة لدائنية مرنة تُستخدم غالباً كلاصق على الأسطح الملساء، بينما القماش المشمع (Bâche) قماش سميك مقاوم للماء يُستخدم للفتات المعلقة في الهواء الطلق.',
  },
  {
    q: 'هل يمكنني استخدام الفتة في الخارج تحت المطر؟',
    a: 'نعم، إذا اخترت خامة مقاومة للماء مثل القماش المشمع أو الفينيل المخصص للخارج، مع لحام الحواف لحماية التصميم من تسرب المياه.',
  },
  {
    q: 'كم تدوم ألوان الفتة الخارجية؟',
    a: 'مع الأحبار المقاومة للأشعة فوق البنفسجية، تدوم الألوان بين 2 إلى 3 سنوات في الاستخدام الخارجي العادي.',
  },
  {
    q: 'هل توفرون خدمة التركيب؟',
    a: 'نعم، نوفر خدمة التركيب في موقعك مقابل تكلفة إضافية حسب المساحة وارتفاع التثبيت. يُرجى إضافة ملاحظة في الطلب وسنتواصل معك.',
  },
  {
    q: 'ما هي صيغ الملفات التي تقبلونها؟',
    a: 'نقبل ملفات PDF (موصى به)، AI، EPS، JPG، PNG. يجب أن تكون الدقة 150 نقطة في البوصة للمقاسات الكبيرة مع هامش أمان 5 ملم.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'لفتة خارجية بجودة ممتازة، الألوان ثابتة حتى بعد أمطار. أنصح بهم بشدة.', author: 'عميل — واجهة متجر' },
  { stars: 5, text: 'فينيل لاصق على الزجاج بدقة عالية، التركيب كان سهلاً بفضل الثقوب المضافة.', author: 'عميل — حملة إعلانية' },
  { stars: 4, text: 'خدمة سريعة وجودة طباعة جيدة، السعر كان مناسباً جداً للمقاس الكبير.', author: 'عميل — معرض تجاري' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر مواصفات منتجك', desc: 'حدد المقاس والخامة والتشطيب والكمية المناسبة لاستخدامك.' },
  { title: 'ارفع تصميمك أو اطلب مساعدتنا', desc: 'أرفق ملف التصميم بصيغة PDF أو AI، أو اطلب من فريقنا تصميم مخصص.' },
  { title: 'أكّد طلبك', desc: 'راجع السعر النهائي، وأكمل بياناتك لتأكيد الطلب.' },
  { title: 'استلم أو اختر التركيب', desc: 'استلم طلبك من المحل، أو اختر خدمة التركيب في موقعك.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'flyers', name: 'فلايرز إشهارية', priceFrom: 0.15, href: '/flyers' },
  { slug: 'affiches', name: 'ملصقات إشهارية', priceFrom: 1.2, href: '/affiches' },
  { slug: 'depliants', name: 'دبليان (Dépliant)', priceFrom: 0.25, href: '/depliants' },
  { slug: 'brochures', name: 'بروشورات', priceFrom: 0.4, href: '/brochures' },
]
</script>

<style scoped>
.bv-page {
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
.bv-head { padding: 34px 24px 20px; }
.bv-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.bv-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.bv-rating { display: flex; align-items: center; gap: 8px; }
.bv-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.bv-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.bv-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.bv-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.bv-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.bv-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .bv-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.bv-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.bv-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.bv-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.bv-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.bv-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.bv-gallery-thumb.active { border-color: var(--gold); }
.bv-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.bv-reassurance { margin-top: 30px; }
.bv-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bv-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.bv-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.bv-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.bv-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.bv-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.bv-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.bv-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; }
.bv-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.bv-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.bv-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.bv-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.bv-steps-bar-item.active .bv-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.bv-steps-bar-item.done .bv-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bv-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.bv-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.bv-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.bv-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.bv-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
.bv-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.bv-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.bv-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.bv-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.bv-choice-name { font-weight: 800; }
.bv-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.bv-custom-size { margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--border); }
.bv-custom-size-inputs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.bv-custom-size-inputs label { display: flex; flex-direction: column; gap: 4px; font-size: 12px; font-weight: 700; color: var(--text-light); }
.bv-custom-size-inputs input { padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; width: 100%; }
.bv-custom-size-inputs input:focus { outline: none; border-color: var(--gold); }
.bv-custom-hint { font-size: 11px; color: var(--text-muted); margin: 8px 0 0; }

.bv-subgroup { margin-bottom: 18px; }
.bv-subgroup-label { display: block; font-size: 12.5px; font-weight: 800; color: var(--text-light); margin-bottom: 8px; }
.bv-pill-row { display: flex; gap: 8px; flex-wrap: wrap; }
.bv-pill { padding: 8px 16px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 12.5px; cursor: pointer; }
.bv-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.bv-check-grid { display: flex; flex-wrap: wrap; gap: 12px; }
.bv-check-label { display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer; }
.bv-check-label input[type="checkbox"] { width: 16px; height: 16px; accent-color: var(--gold); cursor: pointer; }

.bv-step-nav-inner { margin-top: 14px; }

.bv-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.bv-qty-card { min-width: 70px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.bv-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.bv-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.bv-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.bv-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.bv-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.bv-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.bv-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.bv-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.bv-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.bv-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.bv-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.bv-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.bv-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.bv-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.bv-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.bv-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .bv-order-form-grid { grid-template-columns: 1fr; } }
.bv-order-form-grid input,
.bv-order-form-grid textarea { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; width: 100%; }
.bv-order-form-grid textarea { resize: vertical; min-height: 60px; }
.bv-order-form-grid input:focus,
.bv-order-form-grid textarea:focus { outline: none; border-color: var(--gold); }
.bv-order-form-grid textarea { grid-column: 1 / -1; }
.bv-order-submit { width: 100%; }

.btn-gold, .bv-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .bv-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.bv-cta:hover .arrow { transform: translateX(-4px); }

/* Spinner et message d'erreur */
.error-message {
  color: #e74c3c;
  font-size: 13px;
  margin-top: 8px;
  text-align: center;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Sections génériques */
.bv-section { padding: 56px 0; border-top: 1px solid var(--border); }
.bv-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.bv-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.bv-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.bv-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bv-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.bv-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.bv-specs-table-wrap { overflow-x: auto; }
.bv-specs-table { width: 100%; border-collapse: collapse; }
.bv-specs-table tr { border-bottom: 1px solid var(--border); }
.bv-specs-table th, .bv-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.bv-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.bv-specs-table td { color: var(--text); }

/* Templates */
.bv-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.bv-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.bv-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.bv-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.bv-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.bv-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.bv-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.bv-hto-card { text-align: center; padding: 20px; }
.bv-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.bv-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.bv-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.bv-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.bv-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.bv-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.bv-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.bv-faq-item.open .bv-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.bv-faq-answer { padding: 0 18px 18px; }
.bv-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.bv-reviews-note { margin-top: -20px; }
.bv-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.bv-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.bv-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.bv-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.bv-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.bv-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.bv-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.bv-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.bv-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.bv-related-name { font-size: 13px; font-weight: 700; }
.bv-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>