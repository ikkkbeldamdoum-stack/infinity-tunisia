<!-- src/views/SignageView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: اللوحات والإشارات (Enseignes & Signalétique)
  ═══════════════════════════════════════════════════════════════════════════

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم + روابط تنقّل سريع
  2. معرض صور المنتج + شارات الضمان
  3. مُهيّئ المنتج بخطوات (المقاس، الخامة، الإضاءة، الكمية)
  4. دليل الشراء
  5. جدول المواصفات التقنية
  6. تحميل القوالب
  7. خطوات الطلب
  8. أسئلة شائعة
  9. تقييمات العملاء
  10. منتجات ذات صلة
-->

<template>
  <div dir="rtl" class="sg-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">اللوحات والإشارات</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap sg-head">
      <div class="sg-head-top">
        <h1>لوحات وإشارات احترافية لمحلاتك وشركتك — تصاميم تنافسية وجودة تدوم</h1>
        <div class="sg-rating">
          <span class="sg-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="sg-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="sg-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ SECTION PRINCIPALE : GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap sg-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="sg-gallery-col">
        <div class="sg-gallery">
          <div class="sg-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="sg-gallery-badge">تصميم وتنفيذ احترافي</span>
          </div>
          <div class="sg-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="sg-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="sg-reassurance">
          <h3>لماذا تختار لوحاتنا وإشاراتنا؟</h3>
          <ul>
            <li>
              <span class="sg-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>جودة تصنيع عالية</strong>
                <p>خامات متينة ومقاومة للعوامل الجوية، مع ضمان على جودة التصنيع.</p>
              </div>
            </li>
            <li>
              <span class="sg-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>تركيب احترافي</strong>
                <p>فريقنا يتولى التركيب في موقعك مع ضمان الجودة والمتانة.</p>
              </div>
            </li>
            <li>
              <span class="sg-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية</strong>
                <p>نقدم أفضل الأسعار مع خصومات على الكميات الكبيرة والطلبات المتكررة.</p>
              </div>
            </li>
            <li>
              <span class="sg-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>تصاميم مخصصة</strong>
                <p>فريق تصميم متخصص يبتكر هوية بصرية مميزة تناسب علامتك التجارية.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="sg-config-col">
        <div class="sg-config-card">

          <!-- Barre des étapes -->
          <div class="sg-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="sg-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="sg-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="sg-steps-bar-label">{{ s.title }}</span>
              <span class="sg-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="sg-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'type'">
              <h4>اختر نوع اللوحة أو الإشارة</h4>
              <div class="sg-choice-grid">
                <button
                  v-for="t in signTypes"
                  :key="t.id"
                  type="button"
                  class="sg-choice-card sg-choice-card--desc"
                  :class="{ active: selection.type === t.id }"
                  @click="selectAndNext('type', t.id)"
                >
                  <span class="sg-choice-name">{{ t.label }}</span>
                  <span class="sg-choice-desc">{{ t.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'size'">
              <h4>اختر المقاس</h4>
              <div class="sg-choice-grid">
                <button
                  v-for="s in sizes"
                  :key="s.id"
                  type="button"
                  class="sg-choice-card"
                  :class="{ active: selection.size === s.id }"
                  @click="selectAndNext('size', s.id)"
                >
                  {{ s.label }}
                </button>
              </div>
              <div class="sg-custom-size" v-if="selection.size === 'custom'">
                <div class="sg-custom-size-inputs">
                  <label>
                    <span>العرض (سم)</span>
                    <input type="number" v-model.number="customWidth" min="10" max="1000" />
                  </label>
                  <label>
                    <span>الارتفاع (سم)</span>
                    <input type="number" v-model.number="customHeight" min="10" max="1000" />
                  </label>
                </div>
                <p class="sg-custom-hint">المقاسات المخصصة متوفرة حتى 1000 سم في البعد الأكبر.</p>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'material'">
              <h4>اختر الخامة والتشطيب</h4>
              <div class="sg-subgroup">
                <span class="sg-subgroup-label">الخامة الأساسية</span>
                <div class="sg-choice-grid sg-choice-grid--wide">
                  <button
                    v-for="m in materials"
                    :key="m.id"
                    type="button"
                    class="sg-choice-card sg-choice-card--desc"
                    :class="{ active: selection.material === m.id }"
                    @click="selection.material = m.id"
                  >
                    <span class="sg-choice-name">{{ m.label }}</span>
                    <span class="sg-choice-desc">{{ m.desc }}</span>
                  </button>
                </div>
              </div>
              <div class="sg-subgroup">
                <span class="sg-subgroup-label">نوع السطح</span>
                <div class="sg-pill-row">
                  <button
                    v-for="f in finishes"
                    :key="f.id"
                    type="button"
                    class="sg-pill"
                    :class="{ active: selection.finish === f.id }"
                    @click="selection.finish = f.id"
                  >
                    {{ f.label }}
                  </button>
                </div>
              </div>
              <div class="sg-step-nav-inner">
                <button type="button" class="sg-step-btn sg-step-btn--gold" @click="activeStepIndex++">
                  التالي
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'lighting'">
              <h4>اختر نظام الإضاءة (اختياري)</h4>
              <div class="sg-choice-grid">
                <button
                  v-for="l in lightingOptions"
                  :key="l.id"
                  type="button"
                  class="sg-choice-card sg-choice-card--desc"
                  :class="{ active: selection.lighting === l.id }"
                  @click="selectAndNext('lighting', l.id)"
                >
                  <span class="sg-choice-name">{{ l.label }}</span>
                  <span class="sg-choice-desc">{{ l.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="sg-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="sg-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="sg-qty-hint">الأسعار تشمل التصميم الأساسي، التصنيع، والتوصيل داخل البلاد. التركيب متاح كخدمة إضافية.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="sg-step-nav">
            <button type="button" class="sg-step-btn sg-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="sg-step-btn sg-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1 && configSteps[activeStepIndex].key !== 'material'"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="sg-price-card">
          <div class="sg-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="sg-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="sg-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FORMULAIRE DE COMMANDE ═══════════════ -->
    <div class="wrap" id="order-form">
      <div class="sg-order-form">
        <h3>أكمل طلبك</h3>
        <div class="sg-order-form-grid">
          <input type="text" v-model="contact.name" placeholder="الاسم الكامل" />
          <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" />
          <input type="email" v-model="contact.email" placeholder="البريد الإلكتروني" />
          <textarea v-model="contact.notes" placeholder="ملاحظات إضافية (نوع اللوحة، الموقع، التصميم، التركيب...)" rows="2"></textarea>
        </div>
        <button type="button" class="btn-gold sg-order-submit" @click="submitOrder" :disabled="!canOrder">
          <span v-if="orderSent">✅ تم إرسال طلبك، سنتواصل معك قريباً</span>
          <span v-else>تأكيد الطلب — {{ formatMoney(estimatedPrice) }} د.ت</span>
        </button>
      </div>
    </div>

    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="sg-section sg-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار اللوحة أو الإشارة المناسبة؟</h2>

        <div class="sg-guide-grid">
          <article class="sg-guide-card">
            <h4>1. حدد نوع اللوحة أو الإشارة</h4>
            <p>
              اللوحات المضيفة تُستخدم في مداخل المباني والشركات، بينما لوحات المحلات
              والإشارات التجارية تختلف في التصميم والحجم حسب النشاط التجاري والموقع.
            </p>
          </article>
          <article class="sg-guide-card">
            <h4>2. اختر المقاس المناسب للموقع</h4>
            <p>
              قم بقياس المساحة المتوفرة للتركيب بدقة، مع مراعاة زوايا الرؤية وارتفاع
              التثبيت لضمان وضوح الإشارة من جميع الاتجاهات.
            </p>
          </article>
          <article class="sg-guide-card">
            <h4>3. اختر الخامة المناسبة للاستخدام</h4>
            <p>
              الألمنيوم والفولاذ المقاوم للصدأ مناسبان للاستخدام الخارجي الطويل، بينما
              الأكريليك والخشب يمنحان لمسة أنيقة للاستخدام الداخلي.
            </p>
          </article>
          <article class="sg-guide-card">
            <h4>4. فكّر في الإضاءة</h4>
            <p>
              الإشارات المضيئة (LED أو النيون) تزيد من وضوح اللوحة ليلاً وتجذب الانتباه،
              بينما اللوحات غير المضيئة مناسبة للاستخدام النهاري أو الداخلي.
            </p>
          </article>
          <article class="sg-guide-card">
            <h4>5. لا تهمل جودة التصنيع والتركيب</h4>
            <p>
              التصنيع الجيد يضمن متانة اللوحة لعمر طويل، والتركيب الاحترافي يثبت اللوحة
              بإحكام ويحميها من العوامل الجوية والاهتزازات.
            </p>
          </article>
          <article class="sg-guide-card">
            <h4>6. جهّز التصميم بالصيغة والمقاس الصحيحين</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة Vector (AI، EPS، PDF) لضمان جودة الطباعة على
              المقاسات الكبيرة، مع مراعاة دقة الطباعة 150 نقطة في البوصة.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="sg-section sg-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="sg-specs-table-wrap">
          <table class="sg-specs-table">
            <tbody>
              <tr>
                <th>أنواع اللوحات</th>
                <td>{{ signTypes.map(t => t.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>المقاسات المتوفرة</th>
                <td>{{ sizes.map(s => s.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>الخامات الأساسية</th>
                <td>{{ materials.map(m => m.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنواع التشطيب</th>
                <td>{{ finishes.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنظمة الإضاءة</th>
                <td>{{ lightingOptions.map(l => l.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF، AI، EPS (موصى بها)، JPG، PNG — بدقة 150 نقطة في البوصة</td>
              </tr>
              <tr>
                <th>هامش الأمان (Bleed)</th>
                <td>5 ملم على كل جانب من التصميم</td>
              </tr>
              <tr>
                <th>مدة التصنيع القياسية</th>
                <td>5 إلى 10 أيام عمل حسب التعقيد والمقاس</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  

    <!-- ═══════════════ COMMENT COMMANDER ═══════════════ -->
    <section class="sg-section sg-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب لوحتك أو إشارتك في 4 خطوات؟</h2>
        <div class="sg-hto-grid">
          <div class="sg-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="sg-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ AVIS CLIENTS ═══════════════ -->
    <section class="sg-section sg-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="sg-section-sub sg-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية.</p>
        <div class="sg-reviews-grid">
          <div class="sg-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="sg-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="sg-review-text">{{ r.text }}</p>
            <span class="sg-review-author">{{ r.author }}</span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

/* ═══════════════════════════════════════════════════════════
   DONNÉES PRODUIT
═══════════════════════════════════════════════════════════ */
const gallery = [
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Enseigne+ext%C3%A9rieure', alt: 'لوحة خارجية لمحل' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Enseigne+int%C3%A9rieure', alt: 'لوحة داخلية لشركة' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Enseigne+lumineuse', alt: 'لوحة مضيئة بإضاءة LED' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Signal%C3%A9tique', alt: 'إشارات توجيهية' },
]
const activeImage = ref(0)

const signTypes = [
  { id: 'enseigne-murale', label: 'لوحة حائطية', desc: 'تثبت على واجهة المبنى أو الحائط' },
  { id: 'enseigne-sur-pied', label: 'لوحة على عمود', desc: 'مثبتة على عمود أو قاعدة أرضية' },
  { id: 'enseigne-suspendue', label: 'لوحة معلقة', desc: 'تعلق من السقف أو الهيكل العلوي' },
  { id: 'enseigne-lumineuse', label: 'لوحة مضيئة', desc: 'مع إضاءة LED أو نيون للرؤية الليلية' },
  { id: 'signaletique-interieure', label: 'إشارات داخلية', desc: 'للتوجيه داخل المباني والمرافق' },
  { id: 'totem', label: 'توتوم (Totem)', desc: 'لوحة قائمة بذاتها في المداخل والساحات' },
]

const sizes = [
  { id: '30x20', label: '30×20 سم' },
  { id: '50x35', label: '50×35 سم' },
  { id: '70x50', label: '70×50 سم' },
  { id: '100x70', label: '100×70 سم' },
  { id: '120x80', label: '120×80 سم' },
  { id: '150x100', label: '150×100 سم' },
  { id: 'custom', label: 'مقاس مخصص' },
]

const templateTypes = [
  { id: 'murale', label: 'لوحة حائطية', ratio: '1 / 0.7' },
  { id: 'totem', label: 'توتوم', ratio: '1 / 2.5' },
  { id: 'lumineuse', label: 'لوحة مضيئة', ratio: '1 / 0.7' },
  { id: 'interieure', label: 'إشارات داخلية', ratio: '1 / 0.7' },
]

const materials = [
  { id: 'aluminium-bross', label: 'ألمنيوم مصقول', desc: 'خفيف ومقاوم للصدأ، مناسب للداخل والخارج' },
  { id: 'aluminium-laque', label: 'ألمنيوم مطلي', desc: 'مقاوم للخدوش، بلمسات نهائية متعددة' },
  { id: 'acier-inox', label: 'فولاذ مقاوم للصدأ', desc: 'متين وفاخر، للاستخدام الخارجي الطويل' },
  { id: 'acier-peint', label: 'فولاذ مطلي', desc: 'قوي ومتين، مع طلاء مقاوم للصدأ' },
  { id: 'acrylique', label: 'أكريليك', desc: 'شفاف أو ملون، خفيف وأنيق للاستخدام الداخلي' },
  { id: 'bois', label: 'خشب طبيعي', desc: 'لمسة دافئة وكلاسيكية، مناسب للداخل' },
  { id: 'pvc', label: 'PVC', desc: 'خفيف ومقاوم للرطوبة، خيار اقتصادي' },
]

const finishes = [
  { id: 'mat', label: 'مطفي' },
  { id: 'glossy', label: 'لامع' },
  { id: 'texture', label: 'منقوش' },
  { id: 'brillant', label: 'براق (معدني)' },
]

const lightingOptions = [
  { id: 'none', label: 'بدون إضاءة', desc: 'لوحة غير مضيئة' },
  { id: 'led-avant', label: 'إضاءة LED أمامية', desc: 'إضاءة من الأمام لزيادة الوضوح' },
  { id: 'led-arriere', label: 'إضاءة LED خلفية', desc: 'تأثير هالة (Backlight) أنيق' },
  { id: 'led-interne', label: 'إضاءة LED داخلية', desc: 'لوحة مضيئة بالكامل' },
  { id: 'neon', label: 'نيون (Neon)', desc: 'إضاءة نيون كلاسيكية جذابة' },
]

const quantities = [1, 2, 3, 5, 10, 25, 50]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  type: '',
  size: '',
  material: '',
  finish: 'mat',
  lighting: 'none',
  quantity: null,
})

const customWidth = ref(120)
const customHeight = ref(80)

const activeStepIndex = ref(0)

function selectAndNext(field, value) {
  selection[field] = value
  if (activeStepIndex.value < configSteps.value.length - 1) {
    activeStepIndex.value++
  }
}

const configSteps = computed(() => [
  {
    key: 'type',
    title: 'النوع',
    selectedLabel: signTypes.find((t) => t.id === selection.type)?.label || '',
  },
  {
    key: 'size',
    title: 'المقاس',
    selectedLabel: sizes.find((s) => s.id === selection.size)?.label || '',
  },
  {
    key: 'material',
    title: 'الخامة',
    selectedLabel: materials.find((m) => m.id === selection.material)?.label || '',
  },
  {
    key: 'lighting',
    title: 'الإضاءة',
    selectedLabel: lightingOptions.find((l) => l.id === selection.lighting)?.label || '',
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
const basePrice = 45.00

const typeExtra = {
  'enseigne-murale': 0,
  'enseigne-sur-pied': 15.0,
  'enseigne-suspendue': 20.0,
  'enseigne-lumineuse': 35.0,
  'signaletique-interieure': -5.0,
  'totem': 50.0,
}

const materialExtra = {
  'aluminium-bross': 0,
  'aluminium-laque': 3.0,
  'acier-inox': 25.0,
  'acier-peint': 10.0,
  'acrylique': 8.0,
  'bois': 12.0,
  'pvc': -5.0,
}

const finishExtra = {
  mat: 0,
  glossy: 2.0,
  texture: 4.0,
  brillant: 6.0,
}

const lightingExtra = {
  none: 0,
  'led-avant': 18.0,
  'led-arriere': 25.0,
  'led-interne': 40.0,
  neon: 55.0,
}

const discountTiers = [
  { minQty: 3, percent: 5 },
  { minQty: 5, percent: 10 },
  { minQty: 10, percent: 15 },
  { minQty: 25, percent: 22 },
]

const areaFactor = computed(() => {
  if (selection.size === 'custom') {
    return (customWidth.value * customHeight.value) / 5000
  }
  const sizeMap = {
    '30x20': 0.6,
    '50x35': 1.75,
    '70x50': 3.5,
    '100x70': 7.0,
    '120x80': 9.6,
    '150x100': 15.0,
  }
  return sizeMap[selection.size] || 0
})

const unitPrice = computed(() => {
  const type = typeExtra[selection.type] || 0
  const mat = materialExtra[selection.material] || 0
  const finish = finishExtra[selection.finish] || 0
  const light = lightingExtra[selection.lighting] || 0
  return basePrice + type + mat + finish + light + areaFactor.value * 1.2
})

const currentDiscountPercent = computed(() => {
  const applicable = discountTiers.filter((t) => (selection.quantity || 0) >= t.minQty)
  return applicable.length ? applicable[applicable.length - 1].percent : 0
})

const estimatedPrice = computed(() => {
  if (!selection.quantity || !areaFactor.value) return 0
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
  let days = 7
  if (selection.type === 'totem' || selection.size === 'custom') days += 3
  if (selection.lighting && selection.lighting !== 'none') days += 2
  if (selection.quantity && selection.quantity > 10) days += 2
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
const contact = reactive({ name: '', phone: '', email: '', notes: '' })
const orderSent = ref(false)
const canOrder = computed(() =>
  !!selection.type &&
  !!selection.size &&
  !!selection.material &&
  !!selection.lighting &&
  !!selection.quantity &&
  !!contact.name &&
  !!contact.phone &&
  !!contact.email
)

function submitOrder() {
  if (!canOrder.value) return
  orderSent.value = true
  setTimeout(() => (orderSent.value = false), 5000)
}

/* ═══════════════════════════════════════════════════════════
   CONTENU FAQ
═══════════════════════════════════════════════════════════ */
const openFaq = ref(null)
const faqs = [
  {
    q: 'ما هو أفضل نوع لوحة لمحلي التجاري؟',
    a: 'يعتمد ذلك على موقع المحل وطبيعة النشاط. للواجهات الخارجية، نوصي بلوحات الألمنيوم أو الفولاذ المقاوم للصدأ مع إضاءة LED. للداخل، الأكريليك أو الخشب يعطيان لمسة أنيقة.',
  },
  {
    q: 'هل تقدمون خدمة التصميم؟',
    a: 'نعم، لدينا فريق تصميم متخصص يمكنه إنشاء هوية بصرية كاملة للوحة أو الإشارة بما يتناسب مع علامتك التجارية.',
  },
  {
    q: 'كم تدوم اللوحات الخارجية؟',
    a: 'مع الخامات عالية الجودة والطلاء المناسب، تدوم اللوحات الخارجية بين 5 إلى 10 سنوات حسب الظروف الجوية.',
  },
  {
    q: 'هل تركيب اللوحة مشمول بالسعر؟',
    a: 'التركيب غير مشمول في السعر الأساسي، ولكننا نقدم خدمة التركيب مقابل تكلفة إضافية حسب الموقع والارتفاع.',
  },
  {
    q: 'ما هي الصيغ التي تقبلونها للتصميم؟',
    a: 'نقبل ملفات PDF، AI، EPS (موصى بها)، بالإضافة إلى JPG و PNG بدقة 150 نقطة في البوصة على الأقل.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'لوحة المحل رائعة جداً، التصميم والجودة والألوان كلها ممتازة. التركيب كان احترافياً.', author: 'عميل — محل تجاري' },
  { stars: 5, text: 'طلبنا توتوم لمدخل الشركة، النتيجة تفوق التوقعات. الجميع معجب بها.', author: 'عميل — شركة خدمات' },
  { stars: 4, text: 'إشارات داخلية بجودة عالية وسعر مناسب. التوصيل كان في الوقت المحدد.', author: 'عميل — مركز تجاري' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر نوع اللوحة', desc: 'حدد نوع اللوحة أو الإشارة التي تناسب احتياجك ومكان التركيب.' },
  { title: 'حدد المواصفات', desc: 'اختر المقاس والخامة والتشطيب ونظام الإضاءة المناسب.' },
  { title: 'أرفق التصميم أو اطلب التصميم', desc: 'أرفق ملف التصميم الجاهز، أو اطلب من فريقنا تصميم مخصص.' },
  { title: 'أكّد الطلب واستلم', desc: 'راجع السعر النهائي، أكد الطلب، واستلم لوحتك مع خيار التركيب.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'flyers', name: 'فلايرز إشهارية', priceFrom: 0.15, href: '/flyers' },
  { slug: 'banners-vinyl', name: 'فتات وفينيل', priceFrom: 12.5, href: '/banners-vinyl' },
  { slug: 'affiches', name: 'ملصقات إشهارية', priceFrom: 1.2, href: '/affiches' },
  { slug: 'cartes-visite', name: 'بطاقات أعمال', priceFrom: 0.05, href: '/cartes-de-visite' },
]
</script>

<style scoped>
.sg-page {
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
.sg-head { padding: 34px 24px 20px; }
.sg-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.sg-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.sg-rating { display: flex; align-items: center; gap: 8px; }
.sg-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.sg-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.sg-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.sg-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.sg-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.sg-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .sg-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.sg-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.sg-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.sg-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.sg-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.sg-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.sg-gallery-thumb.active { border-color: var(--gold); }
.sg-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.sg-reassurance { margin-top: 30px; }
.sg-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.sg-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.sg-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.sg-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.sg-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.sg-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.sg-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.sg-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; }
.sg-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.sg-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.sg-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.sg-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.sg-steps-bar-item.active .sg-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.sg-steps-bar-item.done .sg-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.sg-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.sg-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.sg-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.sg-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
.sg-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); }
.sg-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.sg-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.sg-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.sg-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.sg-choice-name { font-weight: 800; }
.sg-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.sg-custom-size { margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--border); }
.sg-custom-size-inputs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.sg-custom-size-inputs label { display: flex; flex-direction: column; gap: 4px; font-size: 12px; font-weight: 700; color: var(--text-light); }
.sg-custom-size-inputs input { padding: 8px 12px; border-radius: 8px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; width: 100%; }
.sg-custom-size-inputs input:focus { outline: none; border-color: var(--gold); }
.sg-custom-hint { font-size: 11px; color: var(--text-muted); margin: 8px 0 0; }

.sg-subgroup { margin-bottom: 18px; }
.sg-subgroup-label { display: block; font-size: 12.5px; font-weight: 800; color: var(--text-light); margin-bottom: 8px; }
.sg-pill-row { display: flex; gap: 8px; flex-wrap: wrap; }
.sg-pill { padding: 8px 16px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 12.5px; cursor: pointer; }
.sg-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.sg-step-nav-inner { margin-top: 14px; }

.sg-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.sg-qty-card { min-width: 70px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.sg-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.sg-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.sg-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.sg-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.sg-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.sg-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.sg-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.sg-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.sg-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.sg-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.sg-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.sg-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.sg-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.sg-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.sg-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.sg-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .sg-order-form-grid { grid-template-columns: 1fr; } }
.sg-order-form-grid input,
.sg-order-form-grid textarea { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; width: 100%; }
.sg-order-form-grid textarea { resize: vertical; min-height: 60px; grid-column: 1 / -1; }
.sg-order-form-grid input:focus,
.sg-order-form-grid textarea:focus { outline: none; border-color: var(--gold); }
.sg-order-submit { width: 100%; }

.btn-gold, .sg-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .sg-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.sg-cta:hover .arrow { transform: translateX(-4px); }

/* Sections génériques */
.sg-section { padding: 56px 0; border-top: 1px solid var(--border); }
.sg-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.sg-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.sg-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.sg-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.sg-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.sg-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.sg-specs-table-wrap { overflow-x: auto; }
.sg-specs-table { width: 100%; border-collapse: collapse; }
.sg-specs-table tr { border-bottom: 1px solid var(--border); }
.sg-specs-table th, .sg-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.sg-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.sg-specs-table td { color: var(--text); }

/* Templates */
.sg-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.sg-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.sg-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.sg-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.sg-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.sg-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.sg-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.sg-hto-card { text-align: center; padding: 20px; }
.sg-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.sg-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.sg-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.sg-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.sg-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.sg-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.sg-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.sg-faq-item.open .sg-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.sg-faq-answer { padding: 0 18px 18px; }
.sg-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.sg-reviews-note { margin-top: -20px; }
.sg-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.sg-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.sg-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.sg-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.sg-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.sg-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.sg-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.sg-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.sg-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.sg-related-name { font-size: 13px; font-weight: 700; }
.sg-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>