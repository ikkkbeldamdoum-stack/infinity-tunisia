<!-- src/views/FlyerProductView.vue -->
<!--
  ═══════════════════════════════════════════════════════════════════════════
  صفحة منتج مخصصة: فلايرز (Flyers) — نسخة كاملة أصلية بأسلوب Vue 3
  ═══════════════════════════════════════════════════════════════════════════
  ملاحظة مهمة: هذا المكوّن مبني بمحتوى وتصميم أصليين بالكامل. لم يتم نسخ أي
  نص تسويقي أو صور أو بيانات تقييم أو بنية قوائم من أي موقع تجاري حقيقي —
  فقط "شكل الوظيفة" (معرض صور + دليل شراء + ضمانات + مُهيّئ خطوات + مواصفات
  تقنية + قوالب تصميم + أسئلة شائعة + خطوات الطلب) أُعيد بناؤه من الصفر.

  الأقسام:
  1. Breadcrumb + عنوان + شارة تقييم عامة + روابط تنقّل سريع (Anchors)
  2. معرض صور المنتج (Carousel) + شارات الضمان الجانبية
  3. مُهيّئ المنتج بخطوات جانبية (Sidebar Steps) على غرار أنظمة "الخطوات التفاعلية"
     المستخدمة في مواقع الطباعة عند الطلب، لكن بمنطق Vue Composition API خالص
  4. قسم "دليل الشراء" التعليمي (نص طويل يشرح كيفية الاختيار الصحيح)
  5. جدول المواصفات التقنية
  6. قسم تحميل القوالب (Gabarits) لكل مقاس
  7. خطوات "كيف تطلب؟" (4 خطوات مرقّمة)
  8. أسئلة شائعة (Accordion)
  9. تقييمات العملاء (توضيحية / عامة، غير مرتبطة بأي مصدر خارجي حقيقي)
  10. منتجات ذات صلة

  مسار الراوتر المقترح: { path: '/flyers', name: 'flyer-product', component: FlyerProductView }
-->

<template>
  <div dir="rtl" class="fp-page">

    <!-- ═══════════════ BREADCRUMB ═══════════════ -->
    <div class="breadcrumb">
      <div class="wrap">
        <RouterLink to="/">الرئيسية</RouterLink>
        <span class="sep">/</span>
        <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
        <span class="sep">/</span>
        <span class="current">فلايرز</span>
      </div>
    </div>

    <!-- ═══════════════ EN-TÊTE ═══════════════ -->
    <div class="wrap fp-head">
      <div class="fp-head-top">
        <h1>اطبع فلايراتك الإشهارية بجودة احترافية وأسعار تنافسية</h1>
        <div class="fp-rating">
          <span class="fp-rating-stars">
            <svg v-for="i in 5" :key="i" width="15" height="15" viewBox="0 0 24 24" :fill="i <= 5 ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
          </span>
          <span class="fp-rating-text">تقييم ممتاز من عملائنا</span>
        </div>
      </div>
      <nav class="fp-anchors">
        <a href="#guide" @click.prevent="scrollToId('guide')">دليل الشراء</a>
        <a href="#specs" @click.prevent="scrollToId('specs')">المواصفات التقنية</a>
        <a href="#templates" @click.prevent="scrollToId('templates')">القوالب الجاهزة</a>
        <a href="#faq" @click.prevent="scrollToId('faq')">الأسئلة الشائعة</a>
        <a href="#how-to-order" @click.prevent="scrollToId('how-to-order')">كيف تطلب؟</a>
      </nav>
    </div>

    <!-- ═══════════════ SECTION PRINCIPALE : GALERIE + CONFIGURATEUR ═══════════════ -->
    <div class="wrap fp-main-grid">

      <!-- ── GALERIE + RÉASSURANCE ── -->
      <div class="fp-gallery-col">
        <div class="fp-gallery">
          <div class="fp-gallery-main">
            <img :src="gallery[activeImage].src" :alt="gallery[activeImage].alt" />
            <span class="fp-gallery-badge">جودة طباعة احترافية</span>
          </div>
          <div class="fp-gallery-thumbs">
            <button
              v-for="(img, idx) in gallery"
              :key="idx"
              type="button"
              class="fp-gallery-thumb"
              :class="{ active: idx === activeImage }"
              @click="activeImage = idx"
            >
              <img :src="img.src" :alt="img.alt" />
            </button>
          </div>
        </div>

        <div class="fp-reassurance">
          <h3>لماذا تطبع فلايراتك معنا؟</h3>
          <ul>
            <li>
              <span class="fp-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></span>
              <div>
                <strong>توصيل سريع</strong>
                <p>تجهيز الطلبات القياسية خلال 24 إلى 48 ساعة، مع توصيل لجميع الولايات.</p>
              </div>
            </li>
            <li>
              <span class="fp-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7M2 7h20M12 2v10"/></svg></span>
              <div>
                <strong>أسعار تنافسية ومتدرجة</strong>
                <p>كلما زادت الكمية المطلوبة، انخفض سعر الوحدة تلقائياً.</p>
              </div>
            </li>
            <li>
              <span class="fp-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
              <div>
                <strong>جودة ألوان مضمونة</strong>
                <p>طباعة رقمية وأوفست بألوان دقيقة ومطابقة لتصميمك الأصلي.</p>
              </div>
            </li>
            <li>
              <span class="fp-reassurance-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M9 8h1m4 0h1M9 12h1m4 0h1M9 16h1m4 0h1M5 21V5a1 1 0 0 1 1-1h5v17M14 21V9h4a1 1 0 0 1 1 1v11"/></svg></span>
              <div>
                <strong>دعم فني مباشر</strong>
                <p>فريقنا متاح لمساعدتك في اختيار المقاس والخامة والتشطيب المناسب.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- ── CONFIGURATEUR PAR ÉTAPES ── -->
      <div class="fp-config-col">
        <div class="fp-config-card">

          <!-- Barre des étapes -->
          <div class="fp-steps-bar">
            <button
              v-for="(s, idx) in configSteps"
              :key="s.key"
              type="button"
              class="fp-steps-bar-item"
              :class="{ active: idx === activeStepIndex, done: idx < activeStepIndex }"
              @click="activeStepIndex = idx"
            >
              <span class="fp-steps-bar-num">
                <svg v-if="idx < activeStepIndex" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                <template v-else>{{ idx + 1 }}</template>
              </span>
              <span class="fp-steps-bar-label">{{ s.title }}</span>
              <span class="fp-steps-bar-value" v-if="s.selectedLabel">{{ s.selectedLabel }}</span>
            </button>
          </div>

          <!-- Contenu de l'étape active -->
          <div class="fp-step-content">
            <template v-if="configSteps[activeStepIndex].key === 'format'">
              <h4>اختر المقاس</h4>
              <div class="fp-choice-grid">
                <button
                  v-for="f in formats"
                  :key="f.id"
                  type="button"
                  class="fp-choice-card"
                  :class="{ active: selection.format === f.id }"
                  @click="selectAndNext('format', f.id)"
                >
                  {{ f.label }}
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'paper'">
              <h4>اختر نوع الورق</h4>
              <div class="fp-choice-grid fp-choice-grid--wide">
                <button
                  v-for="p in papers"
                  :key="p.id"
                  type="button"
                  class="fp-choice-card fp-choice-card--desc"
                  :class="{ active: selection.paper === p.id }"
                  @click="selectAndNext('paper', p.id)"
                >
                  <span class="fp-choice-name">{{ p.label }}</span>
                  <span class="fp-choice-desc">{{ p.desc }}</span>
                </button>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'finish'">
              <h4>اختر جهة الطباعة والتشطيب</h4>
              <div class="fp-subgroup">
                <span class="fp-subgroup-label">جهة الطباعة</span>
                <div class="fp-pill-row">
                  <button
                    v-for="s in sides"
                    :key="s.id"
                    type="button"
                    class="fp-pill"
                    :class="{ active: selection.side === s.id }"
                    @click="selection.side = s.id"
                  >
                    {{ s.label }}
                  </button>
                </div>
              </div>
              <div class="fp-subgroup">
                <span class="fp-subgroup-label">التشطيب</span>
                <div class="fp-choice-grid">
                  <button
                    v-for="f in finishes"
                    :key="f.id"
                    type="button"
                    class="fp-choice-card"
                    :class="{ active: selection.finish === f.id }"
                    @click="selectAndNext('finish', f.id)"
                  >
                    {{ f.label }}
                  </button>
                </div>
              </div>
            </template>

            <template v-else-if="configSteps[activeStepIndex].key === 'quantity'">
              <h4>اختر الكمية</h4>
              <div class="fp-qty-grid">
                <button
                  v-for="q in quantities"
                  :key="q"
                  type="button"
                  class="fp-qty-card"
                  :class="{ active: selection.quantity === q }"
                  @click="selection.quantity = q"
                >
                  {{ q.toLocaleString('ar') }}
                </button>
              </div>
              <p class="fp-qty-hint">الأسعار تشمل التصميم على وجه واحد ما لم يُحدد خلاف ذلك، وتتضمن التوصيل داخل البلاد.</p>
            </template>
          </div>

          <!-- Navigation étapes -->
          <div class="fp-step-nav">
            <button type="button" class="fp-step-btn fp-step-btn--ghost" v-if="activeStepIndex > 0" @click="activeStepIndex--">
              السابق
            </button>
            <button
              type="button"
              class="fp-step-btn fp-step-btn--gold"
              v-if="activeStepIndex < configSteps.length - 1"
              @click="activeStepIndex++"
            >
              التالي
            </button>
          </div>
        </div>

        <!-- Résumé prix -->
        <div class="fp-price-card">
          <div class="fp-price-row">
            <span>السعر المقدّر</span>
            <strong>{{ formatMoney(estimatedPrice) }} د.ت</strong>
          </div>
          <p class="fp-delivery-estimate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            التسليم المتوقع: <strong>{{ estimatedDeliveryLabel }}</strong>
          </p>
          <button type="button" class="fp-cta" @click="scrollToId('order-form')">
            أطلب الآن
            <span class="arrow">←</span>
          </button>
        </div>
      </div>
    </div>

    <!-- ═══════════════ FORMULAIRE DE COMMANDE ═══════════════ -->
    <div class="wrap" id="order-form">
      <div class="fp-order-form">
        <h3>أكمل طلبك</h3>
        <div class="fp-order-form-grid">
          <input type="text" v-model="contact.name" placeholder="الاسم الكامل" />
          <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" />
        </div>
        <button type="button" class="btn-gold fp-order-submit" @click="submitOrder" :disabled="!canOrder">
          <span v-if="orderSent">✅ تم إرسال طلبك، سنتواصل معك قريباً</span>
          <span v-else>تأكيد الطلب — {{ formatMoney(estimatedPrice) }} د.ت</span>
        </button>
      </div>
    </div>

    <!-- ═══════════════ GUIDE D'ACHAT ═══════════════ -->
    <section class="fp-section fp-guide" id="guide">
      <div class="wrap">
        <h2>دليل الشراء: كيف تختار الفلاير المناسب لحملتك؟</h2>

        <div class="fp-guide-grid">
          <article class="fp-guide-card">
            <h4>1. حدد الهدف من الفلاير أولاً</h4>
            <p>
              الفلاير المخصص للتوزيع اليدوي في الشارع يختلف عن الفلاير الذي يُترك في صندوق البريد
              أو يُقدَّم داخل المحل. حدد طريقة التوزيع قبل اختيار المقاس والورق، لأن هذا يؤثر مباشرة
              على متانة الخامة المطلوبة.
            </p>
          </article>
          <article class="fp-guide-card">
            <h4>2. اختر المقاس حسب المحتوى</h4>
            <p>
              المقاسات الصغيرة مثل A6 مناسبة للعروض السريعة وكلمة واحدة قوية، بينما A5 وA4 تمنحك
              مساحة أكبر لعرض تفاصيل الخدمة أو المنتج مع صور توضيحية.
            </p>
          </article>
          <article class="fp-guide-card">
            <h4>3. اختر الورق المناسب للانطباع الذي تريده</h4>
            <p>
              الورق اللامع (Glossy) يبرز الألوان والصور، بينما الورق المطفي (Matte) يمنح إحساساً
              أكثر رقيّاً وفخامة، وهو مناسب أكثر للعلامات التجارية الراقية.
            </p>
          </article>
          <article class="fp-guide-card">
            <h4>4. لا تهمل التشطيب</h4>
            <p>
              التغليف اللامع أو المطفي يزيد من متانة الفلاير ويحميه من التجعد والرطوبة أثناء
              التوزيع اليدوي، خصوصاً إذا كانت الحملة تمتد لعدة أيام.
            </p>
          </article>
          <article class="fp-guide-card">
            <h4>5. فكّر في الكمية على المدى الطويل</h4>
            <p>
              طلب كمية أكبر من حاجتك الفورية غالباً ما يكون أوفر على المدى الطويل بفضل الأسعار
              المتدرجة، بشرط ألا يكون التصميم مرتبطاً بتاريخ أو عرض محدود الصلاحية.
            </p>
          </article>
          <article class="fp-guide-card">
            <h4>6. جهّز ملفك بالمقاس والدقة الصحيحين</h4>
            <p>
              يُفضّل تجهيز التصميم بصيغة PDF بدقة 300 نقطة في البوصة (DPI) مع هامش أمان (Bleed)
              لا يقل عن 3 ملم لتفادي قص أي عنصر مهم من التصميم عند القطع.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ═══════════════ SPÉCIFICATIONS TECHNIQUES ═══════════════ -->
    <section class="fp-section fp-specs" id="specs">
      <div class="wrap">
        <h2>المواصفات التقنية</h2>
        <div class="fp-specs-table-wrap">
          <table class="fp-specs-table">
            <tbody>
              <tr>
                <th>المقاسات المتوفرة</th>
                <td>{{ formats.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>أنواع الورق</th>
                <td>{{ papers.map(p => p.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>خيارات التشطيب</th>
                <td>{{ finishes.map(f => f.label).join('، ') }}</td>
              </tr>
              <tr>
                <th>جهة الطباعة</th>
                <td>{{ sides.map(s => s.label).join(' أو ') }}</td>
              </tr>
              <tr>
                <th>صيغ الملفات المقبولة</th>
                <td>PDF (موصى به)، JPG، PNG — بدقة 300 نقطة في البوصة على الأقل</td>
              </tr>
              <tr>
                <th>هامش الأمان (Bleed)</th>
                <td>3 ملم على كل جانب من التصميم</td>
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
    <section class="fp-section fp-how-to-order" id="how-to-order">
      <div class="wrap">
        <h2>كيف تطلب فلايراتك في 4 خطوات؟</h2>
        <div class="fp-hto-grid">
          <div class="fp-hto-card" v-for="(step, idx) in howToOrderSteps" :key="idx">
            <span class="fp-hto-num">{{ idx + 1 }}</span>
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ FAQ ═══════════════ -->
    <section class="fp-section fp-faq" id="faq">
      <div class="wrap">
        <h2>الأسئلة الشائعة</h2>
        <div class="fp-faq-list">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="fp-faq-item"
            :class="{ open: openFaq === idx }"
          >
            <button type="button" class="fp-faq-question" @click="openFaq = openFaq === idx ? null : idx">
              <span>{{ faq.q }}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="fp-faq-chevron"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="fp-faq-answer" v-show="openFaq === idx">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ AVIS CLIENTS (illustratifs) ═══════════════ -->
    <section class="fp-section fp-reviews">
      <div class="wrap">
        <h2>ماذا يقول عملاؤنا؟</h2>
        <p class="fp-section-sub fp-reviews-note">آراء توضيحية لتجربة الاستخدام — يمكن استبدالها بآراء حقيقية موثّقة من عملائك.</p>
        <div class="fp-reviews-grid">
          <div class="fp-review-card" v-for="(r, idx) in reviews" :key="idx">
            <div class="fp-review-stars">
              <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 24 24" :fill="i <= r.stars ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>
            </div>
            <p class="fp-review-text">{{ r.text }}</p>
            <span class="fp-review-author">{{ r.author }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ PRODUITS SIMILAIRES ═══════════════ -->
    <section class="fp-section fp-related">
      <div class="wrap">
        <h2>منتجات ذات صلة</h2>
        <div class="fp-related-grid">
          <a v-for="rp in relatedProducts" :key="rp.slug" :href="rp.href" class="fp-related-card">
            <div class="fp-related-thumb"></div>
            <span class="fp-related-name">{{ rp.name }}</span>
            <span class="fp-related-price">ابتداءً من {{ formatMoney(rp.priceFrom) }} د.ت</span>
          </a>
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
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Flyer+A5', alt: 'نموذج فلاير مقاس A5' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Flyer+A6', alt: 'نموذج فلاير مقاس A6' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Flyer+DL', alt: 'نموذج فلاير مقاس DL' },
  { src: 'https://placehold.co/700x520/f7f3ea/1a202c?text=Flyer+A4', alt: 'نموذج فلاير مقاس A4' },
]
const activeImage = ref(0)

const formats = [
  { id: 'a6', label: 'A6 (10.5×14.8 سم)', ratio: '1 / 1.41' },
  { id: 'a5', label: 'A5 (14.8×21 سم)', ratio: '1 / 1.42' },
  { id: 'dl', label: 'DL (10×21 سم)', ratio: '1 / 2.1' },
  { id: 'a4', label: 'A4 (21×29.7 سم)', ratio: '1 / 1.41' },
  { id: 'square15', label: 'مربع 15×15 سم', ratio: '1 / 1' },
]

const papers = [
  { id: 'couche135', label: '135 غ لامع', desc: 'خفيف واقتصادي، مناسب للتوزيع الكبير' },
  { id: 'couche170mat', label: '170 غ مطفي', desc: 'وزن متوسط بلمسة أنيقة غير عاكسة' },
  { id: 'couche250', label: '250 غ لامع', desc: 'أكثر صلابة، إحساس بجودة أعلى' },
  { id: 'couche350mat', label: '350 غ مطفي', desc: 'سماكة بطاقة تقريباً، فخامة ومتانة' },
  { id: 'recycle115', label: '115 غ معاد تدويره', desc: 'خيار صديق للبيئة بمظهر طبيعي' },
]

const sides = [
  { id: 'recto', label: 'وجه واحد' },
  { id: 'recto-verso', label: 'وجهين' },
]

const finishes = [
  { id: 'standard', label: 'بدون تغليف (قياسي)' },
  { id: 'pell-brillant', label: 'تغليف لامع' },
  { id: 'pell-mat', label: 'تغليف مطفي' },
  { id: 'soft-touch', label: 'تغليف Soft Touch' },
]

const quantities = [100, 250, 500, 1000, 2500, 5000, 10000]

/* ═══════════════════════════════════════════════════════════
   SÉLECTION / ÉTAT DU CONFIGURATEUR
═══════════════════════════════════════════════════════════ */
const selection = reactive({
  format: '',
  paper: '',
  side: 'recto',
  finish: '',
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
    title: 'المقاس',
    selectedLabel: formats.find((f) => f.id === selection.format)?.label || '',
  },
  {
    key: 'paper',
    title: 'الورق',
    selectedLabel: papers.find((p) => p.id === selection.paper)?.label || '',
  },
  {
    key: 'finish',
    title: 'التشطيب',
    selectedLabel: finishes.find((f) => f.id === selection.finish)?.label || '',
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
const basePricePerUnit = 0.09

const paperExtra = {
  couche135: 0,
  couche170mat: 0.01,
  couche250: 0.02,
  couche350mat: 0.035,
  recycle115: 0.015,
}
const finishExtra = {
  standard: 0,
  'pell-brillant': 0.02,
  'pell-mat': 0.02,
  'soft-touch': 0.045,
}
const sideExtra = { recto: 0, 'recto-verso': 0.03 }

const discountTiers = [
  { minQty: 250, percent: 5 },
  { minQty: 1000, percent: 10 },
  { minQty: 5000, percent: 18 },
]

const unitPrice = computed(() => {
  return (
    basePricePerUnit +
    (paperExtra[selection.paper] || 0) +
    (finishExtra[selection.finish] || 0) +
    (sideExtra[selection.side] || 0)
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
  const days = selection.finish && selection.finish !== 'standard' ? 3 : 2
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
const canOrder = computed(() => !!selection.format && !!selection.paper && !!selection.finish && !!selection.quantity && !!contact.name && !!contact.phone)

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
    q: 'ما هو أفضل مقاس للفلايرز الترويجية؟',
    a: 'يعتمد ذلك على طريقة التوزيع؛ A6 مناسب للتوزيع اليدوي السريع، بينما A5 وA4 يمنحانك مساحة أكبر لعرض التفاصيل والصور.',
  },
  {
    q: 'هل يمكنني طباعة وجهين بنفس السعر؟',
    a: 'الطباعة على وجهين تضيف تكلفة بسيطة لكل وحدة مقارنة بوجه واحد، ويظهر الفرق تلقائياً في السعر المقدّر عند اختيار الخيار.',
  },
  {
    q: 'كم من الوقت يستغرق التجهيز؟',
    a: 'التجهيز القياسي يستغرق 24 إلى 48 ساعة عمل، وقد يطول قليلاً عند اختيار تشطيبات إضافية مثل التغليف.',
  },
  {
    q: 'هل تقدمون قوالب تصميم جاهزة؟',
    a: 'نعم، نوفر قوالب جاهزة لكل مقاس بصيغ متوافقة مع برامج التصميم الشائعة لتفادي أخطاء الهامش والقص.',
  },
]

/* ═══════════════════════════════════════════════════════════
   AVIS CLIENTS (illustratifs)
═══════════════════════════════════════════════════════════ */
const reviews = [
  { stars: 5, text: 'جودة طباعة ممتازة والألوان طابقت التصميم تماماً، والتسليم كان في الوقت المحدد.', author: 'عميل — حملة مطعم' },
  { stars: 5, text: 'أسعار معقولة جداً مقارنة بالجودة، وسأطلب مرة أخرى بالتأكيد.', author: 'عميل — إطلاق منتج' },
  { stars: 4, text: 'التصميم وصل بسرعة والتشطيب المطفي أعطى لمسة راقية للفلاير.', author: 'عميل — حملة تسويقية' },
]

/* ═══════════════════════════════════════════════════════════
   COMMENT COMMANDER
═══════════════════════════════════════════════════════════ */
const howToOrderSteps = [
  { title: 'اختر مواصفات منتجك', desc: 'حدد المقاس ونوع الورق والتشطيب والكمية المناسبة لحملتك.' },
  { title: 'ارفع تصميمك أو اطلب مساعدتنا', desc: 'أرفق ملف PDF جاهز، أو تواصل مع فريقنا لإنشاء تصميم من الصفر.' },
  { title: 'أكّد طلبك', desc: 'راجع السعر النهائي والمعلومات ثم أكّد الطلب عبر النموذج.' },
  { title: 'استلم طلبك', desc: 'استلم طلبك من المحل أو عبر التوصيل حسب الخيار الذي اخترته.' },
]

/* ═══════════════════════════════════════════════════════════
   PRODUITS SIMILAIRES
═══════════════════════════════════════════════════════════ */
const relatedProducts = [
  { slug: 'depliants', name: 'دبليان (Dépliant)', priceFrom: 0.25, href: '/depliants' },
  { slug: 'affiches', name: 'ملصقات إشهارية', priceFrom: 1.2, href: '/affiches' },
  { slug: 'cartes-visite', name: 'بطاقات أعمال', priceFrom: 0.05, href: '/cartes-de-visite' },
  { slug: 'brochures', name: 'بروشورات', priceFrom: 0.4, href: '/brochures' },
]
</script>

<style scoped>
.fp-page {
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
.fp-head { padding: 34px 24px 20px; }
.fp-head-top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 20px; }
.fp-head h1 { font-size: 26px; font-weight: 800; margin: 0; max-width: 640px; line-height: 1.4; }
.fp-rating { display: flex; align-items: center; gap: 8px; }
.fp-rating-stars { display: flex; gap: 2px; color: var(--gold); }
.fp-rating-text { font-size: 12.5px; color: var(--text-muted); font-weight: 700; }

.fp-anchors { display: flex; flex-wrap: wrap; gap: 22px; border-top: 1px solid var(--border); padding-top: 16px; }
.fp-anchors a { font-size: 13.5px; font-weight: 700; color: var(--text-light); text-decoration: none; transition: color 0.2s var(--ease); }
.fp-anchors a:hover { color: var(--gold-dark); }

/* Layout principal */
.fp-main-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; padding: 20px 24px 60px; align-items: start; }
@media (max-width: 960px) { .fp-main-grid { grid-template-columns: 1fr; } }

/* Galerie */
.fp-gallery-main { border-radius: var(--radius-md); overflow: hidden; position: relative; border: 1px solid var(--border); background: var(--bg-panel); }
.fp-gallery-main img { width: 100%; display: block; aspect-ratio: 4 / 3; object-fit: cover; }
.fp-gallery-badge {
  position: absolute; top: 14px; right: 14px; background: var(--gold); color: #1a1a1a; font-size: 11.5px;
  font-weight: 800; padding: 6px 12px; border-radius: 20px;
}
.fp-gallery-thumbs { display: flex; gap: 10px; margin-top: 12px; overflow-x: auto; }
.fp-gallery-thumb { width: 72px; height: 72px; flex-shrink: 0; border-radius: 10px; overflow: hidden; border: 2px solid var(--border); cursor: pointer; padding: 0; background: none; }
.fp-gallery-thumb.active { border-color: var(--gold); }
.fp-gallery-thumb img { width: 100%; height: 100%; object-fit: cover; }

/* Réassurance */
.fp-reassurance { margin-top: 30px; }
.fp-reassurance h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.fp-reassurance ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }
.fp-reassurance li { display: flex; gap: 12px; align-items: flex-start; }
.fp-reassurance-icon { width: 34px; height: 34px; flex-shrink: 0; border-radius: 10px; background: rgba(248,177,1,0.12); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; }
.fp-reassurance strong { display: block; font-size: 13.5px; margin-bottom: 2px; }
.fp-reassurance p { margin: 0; font-size: 12.5px; color: var(--text-muted); line-height: 1.6; }

/* Configurateur */
.fp-config-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 22px; }
.fp-steps-bar { display: flex; flex-direction: column; gap: 4px; margin-bottom: 22px; border-bottom: 1px solid var(--border); padding-bottom: 18px; }
.fp-steps-bar-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; padding: 8px 6px;
  border-radius: 8px; cursor: pointer; font-family: inherit; text-align: right; transition: background 0.2s var(--ease);
}
.fp-steps-bar-item:hover { background: rgba(0,0,0,0.03); }
.fp-steps-bar-item.active { background: rgba(248,177,1,0.1); }
.fp-steps-bar-num {
  width: 22px; height: 22px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center;
  justify-content: center; font-size: 10.5px; font-weight: 800; color: var(--text-muted); flex-shrink: 0;
}
.fp-steps-bar-item.active .fp-steps-bar-num { border-color: var(--gold); color: var(--gold-dark); }
.fp-steps-bar-item.done .fp-steps-bar-num { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.fp-steps-bar-label { font-size: 13.5px; font-weight: 700; }
.fp-steps-bar-value { margin-right: auto; font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }

.fp-step-content h4 { font-size: 15px; font-weight: 800; margin: 0 0 14px; }
.fp-choice-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 10px; }
.fp-choice-grid--wide { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
.fp-choice-card {
  background: #fff; border: 2px solid var(--border); border-radius: 10px; padding: 12px; font-family: inherit;
  font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s var(--ease); text-align: right;
}
.fp-choice-card:hover { border-color: rgba(248,177,1,0.5); }
.fp-choice-card.active { border-color: var(--gold); background: rgba(248,177,1,0.08); }
.fp-choice-card--desc { display: flex; flex-direction: column; gap: 4px; }
.fp-choice-name { font-weight: 800; }
.fp-choice-desc { font-size: 11px; color: var(--text-muted); font-weight: 500; }

.fp-subgroup { margin-bottom: 18px; }
.fp-subgroup-label { display: block; font-size: 12.5px; font-weight: 800; color: var(--text-light); margin-bottom: 8px; }
.fp-pill-row { display: flex; gap: 8px; }
.fp-pill { padding: 8px 16px; border-radius: 30px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 700; font-size: 12.5px; cursor: pointer; }
.fp-pill.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }

.fp-qty-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.fp-qty-card { min-width: 70px; padding: 10px 14px; border-radius: 10px; border: 2px solid var(--border); background: #fff; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; }
.fp-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.fp-qty-hint { font-size: 11.5px; color: var(--text-muted); margin-top: 12px; }

.fp-step-nav { display: flex; justify-content: space-between; margin-top: 20px; }
.fp-step-btn { padding: 10px 18px; border-radius: 10px; font-family: inherit; font-weight: 800; font-size: 13px; cursor: pointer; border: none; }
.fp-step-btn--ghost { background: none; border: 1px solid var(--border); color: var(--text-light); }
.fp-step-btn--gold { background: var(--gold); color: #1a1a1a; margin-right: auto; }
.fp-step-btn--gold:hover { background: var(--gold-dark); }

/* Prix */
.fp-price-card { background: #fff; border: 1px solid rgba(248,177,1,0.35); border-radius: var(--radius-md); padding: 20px; margin-top: 18px; }
.fp-price-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.fp-price-row span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.fp-price-row strong { font-size: 22px; color: var(--gold-dark); font-weight: 800; }
.fp-delivery-estimate { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); margin: 0 0 16px; }
.fp-delivery-estimate strong { color: var(--text); }

/* Formulaire commande */
.fp-order-form { background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 24px; margin-bottom: 60px; }
.fp-order-form h3 { font-size: 16px; font-weight: 800; margin: 0 0 16px; }
.fp-order-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }
@media (max-width: 600px) { .fp-order-form-grid { grid-template-columns: 1fr; } }
.fp-order-form-grid input { padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px; }
.fp-order-form-grid input:focus { outline: none; border-color: var(--gold); }
.fp-order-submit { width: 100%; }

.btn-gold, .fp-cta {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; cursor: pointer; transition: all 0.25s var(--ease);
}
.btn-gold:hover, .fp-cta:hover { background: var(--gold-dark); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; }
.arrow { transition: transform 0.25s var(--ease); }
.fp-cta:hover .arrow { transform: translateX(-4px); }

/* Sections génériques */
.fp-section { padding: 56px 0; border-top: 1px solid var(--border); }
.fp-section h2 { font-size: 22px; font-weight: 800; margin: 0 0 24px; text-align: center; }
.fp-section-sub { text-align: center; color: var(--text-muted); font-size: 13.5px; margin: -14px 0 30px; }

/* Guide d'achat */
.fp-guide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
.fp-guide-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.fp-guide-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 10px; }
.fp-guide-card p { font-size: 13px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Specs */
.fp-specs-table-wrap { overflow-x: auto; }
.fp-specs-table { width: 100%; border-collapse: collapse; }
.fp-specs-table tr { border-bottom: 1px solid var(--border); }
.fp-specs-table th, .fp-specs-table td { text-align: right; padding: 14px 16px; font-size: 13.5px; }
.fp-specs-table th { width: 220px; color: var(--text-light); font-weight: 800; background: var(--bg-panel); }
.fp-specs-table td { color: var(--text); }

/* Templates */
.fp-templates-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
.fp-template-card { border: 1px solid var(--border); border-radius: 12px; padding: 14px; text-align: center; }
.fp-template-preview { background: var(--bg-panel); border-radius: 8px; margin-bottom: 10px; border: 1px dashed var(--border); }
.fp-template-name { display: block; font-size: 12.5px; font-weight: 700; margin-bottom: 10px; }
.fp-template-download {
  display: inline-flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--gold); color: var(--gold-dark);
  font-family: inherit; font-size: 11.5px; font-weight: 800; padding: 8px 12px; border-radius: 20px; cursor: pointer;
}
.fp-template-download:hover { background: var(--gold); color: #1a1a1a; }

/* Comment commander */
.fp-hto-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }
.fp-hto-card { text-align: center; padding: 20px; }
.fp-hto-num {
  display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 16px; margin-bottom: 14px;
}
.fp-hto-card h4 { font-size: 14.5px; font-weight: 800; margin: 0 0 8px; }
.fp-hto-card p { font-size: 12.5px; color: var(--text-muted); line-height: 1.7; margin: 0; }

/* FAQ */
.fp-faq-list { display: flex; flex-direction: column; gap: 10px; max-width: 800px; margin: 0 auto; }
.fp-faq-item { border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
.fp-faq-question {
  width: 100%; display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: none; padding: 16px 18px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
  text-align: right; color: var(--text);
}
.fp-faq-chevron { transition: transform 0.2s var(--ease); flex-shrink: 0; color: var(--text-muted); }
.fp-faq-item.open .fp-faq-chevron { transform: rotate(180deg); color: var(--gold-dark); }
.fp-faq-answer { padding: 0 18px 18px; }
.fp-faq-answer p { font-size: 13.5px; color: var(--text-light); line-height: 1.8; margin: 0; }

/* Avis clients */
.fp-reviews-note { margin-top: -20px; }
.fp-reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
.fp-review-card { background: var(--bg-panel); border-radius: 14px; padding: 20px; border: 1px solid var(--border); }
.fp-review-stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 10px; }
.fp-review-text { font-size: 13px; color: var(--text-light); line-height: 1.7; margin: 0 0 12px; }
.fp-review-author { font-size: 11.5px; color: var(--text-muted); font-weight: 700; }

/* Produits similaires */
.fp-related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
.fp-related-card { display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: inherit; border: 1px solid var(--border); border-radius: 12px; padding: 14px; transition: all 0.2s var(--ease); }
.fp-related-card:hover { border-color: var(--gold); transform: translateY(-3px); }
.fp-related-thumb { background: var(--bg-panel); border-radius: 8px; aspect-ratio: 4 / 3; }
.fp-related-name { font-size: 13px; font-weight: 700; }
.fp-related-price { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; }
</style>