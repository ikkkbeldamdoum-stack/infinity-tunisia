<!-- src/views/ProductConfigView.vue -->
<!--
  صفحة تكوين المنتج — يصل إليها المستخدم بعد الضغط على منتج من صفحة الخدمات.
  يختار هنا: المقاس ← نوع الورق/الخامة ← التشطيب ← الكمية، مع ملخص سعر تقديري وطلب مباشر.
  مسار الراوتر المقترح: { path: '/produit/:slug', name: 'product-config', component: ProductConfigView }
-->
<template>
  <div dir="rtl" class="pc-page">

    <!-- ═══════════════ PRODUIT INTROUVABLE ═══════════════ -->
    <div v-if="!product" class="pc-notfound">
      <p>عذراً، هذا المنتج غير متوفر.</p>
      <RouterLink to="/print-design" class="btn-gold">العودة إلى الخدمات</RouterLink>
    </div>

    <template v-else>
      <!-- ═══════════════ BREADCRUMB ═══════════════ -->
      <div class="breadcrumb">
        <div class="wrap">
          <RouterLink to="/">الرئيسية</RouterLink>
          <span class="sep">/</span>
          <RouterLink to="/print-design">الطباعة والإشهار</RouterLink>
          <span class="sep">/</span>
          <span class="current">{{ product.title }}</span>
        </div>
      </div>

      <!-- ═══════════════ EN-TÊTE PRODUIT ═══════════════ -->
      <div class="pc-header">
        <div class="wrap pc-header-inner">
          <img :src="product.image" :alt="product.title" class="pc-header-img" />
          <div>
            <h1>{{ product.title }}</h1>
            <p>{{ product.subtitle }}</p>
          </div>
        </div>
      </div>

      <!-- ═══════════════ LAYOUT PRINCIPAL ═══════════════ -->
      <div class="wrap pc-layout">

        <!-- ── COLONNE PRINCIPALE : ÉTAPES ── -->
        <div class="pc-main">

          <!-- ÉTAPE 1 — المقاس -->
          <section class="pc-step">
            <h3 class="pc-step-title"><span class="pc-step-num">1</span> اختر المقاس</h3>
            <FormatSelector :formats="product.formats" v-model="selectedFormat" />
          </section>

          <!-- ÉTAPE 2 — نوع الورق / الخامة -->
          <section class="pc-step">
            <h3 class="pc-step-title"><span class="pc-step-num">2</span> اختر نوع الورق / الخامة</h3>
            <div class="pc-option-grid">
              <button
                v-for="p in product.papers"
                :key="p.id"
                type="button"
                class="pc-option-card"
                :class="{ active: selectedPaper === p.id }"
                @click="selectedPaper = p.id"
              >
                <span class="pc-option-name">{{ p.label }}</span>
                <span class="pc-option-desc">{{ p.desc }}</span>
                <span class="pc-option-extra" v-if="p.priceExtra">+{{ formatMoney(p.priceExtra) }} د.ت للوحدة</span>
                <span class="pc-check" v-if="selectedPaper === p.id">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              </button>
            </div>
          </section>

          <!-- ÉTAPE 3 — التشطيب -->
          <section class="pc-step">
            <h3 class="pc-step-title"><span class="pc-step-num">3</span> اختر التشطيب</h3>
            <div class="pc-option-grid">
              <button
                v-for="f in product.finishes"
                :key="f.id"
                type="button"
                class="pc-option-card"
                :class="{ active: selectedFinish === f.id }"
                @click="selectedFinish = f.id"
              >
                <span class="pc-option-name">{{ f.label }}</span>
                <span class="pc-option-extra" v-if="f.priceExtra">+{{ formatMoney(f.priceExtra) }} د.ت للوحدة</span>
                <span class="pc-check" v-if="selectedFinish === f.id">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
              </button>
            </div>
          </section>

          <!-- ÉTAPE 4 — الكمية -->
          <section class="pc-step">
            <h3 class="pc-step-title"><span class="pc-step-num">4</span> اختر الكمية</h3>
            <div class="pc-qty-grid">
              <button
                v-for="q in product.quantities"
                :key="q"
                type="button"
                class="pc-qty-card"
                :class="{ active: !customQuantity && selectedQuantity === q }"
                @click="selectQuantity(q)"
              >
                {{ q.toLocaleString('ar') }}
              </button>
              <div class="pc-qty-custom">
                <input
                  type="number"
                  min="1"
                  v-model="customQuantity"
                  placeholder="كمية أخرى"
                  @focus="selectedQuantity = null"
                />
              </div>
            </div>
          </section>
        </div>

        <!-- ── COLONNE LATÉRALE : RÉSUMÉ + FORMULAIRE ── -->
        <aside class="pc-summary">
          <div class="pc-summary-card">
            <h4>ملخص طلبك</h4>

            <ul class="pc-summary-list">
              <li>
                <span>المنتج</span>
                <strong>{{ product.title }}</strong>
              </li>
              <li v-if="selectedFormatObj">
                <span>المقاس</span>
                <strong>{{ selectedFormatObj.label }}</strong>
              </li>
              <li v-if="selectedPaperObj">
                <span>الخامة</span>
                <strong>{{ selectedPaperObj.label }}</strong>
              </li>
              <li v-if="selectedFinishObj">
                <span>التشطيب</span>
                <strong>{{ selectedFinishObj.label }}</strong>
              </li>
              <li v-if="finalQuantity">
                <span>الكمية</span>
                <strong>{{ finalQuantity.toLocaleString('ar') }}</strong>
              </li>
            </ul>

            <div class="pc-price-box">
              <span>السعر التقديري</span>
              <strong>{{ estimatedPrice ? formatMoney(estimatedPrice) + ' د.ت' : '—' }}</strong>
            </div>
            <p class="pc-price-note">* سعر تقديري غير نهائي، سيتم تأكيده من طرف فريقنا بعد استلام الطلب.</p>

            <!-- نموذج إرسال الطلب -->
            <form class="pc-form" @submit.prevent="submitRequest">
              <input type="text" v-model="contact.name" placeholder="الاسم الكامل" required />
              <input type="tel" v-model="contact.phone" placeholder="رقم الهاتف" required />
              <button type="submit" class="btn-gold pc-submit" :disabled="!canSubmit">
                أرسل الطلب
                <span class="arrow">←</span>
              </button>
            </form>
            <p class="pc-sent-hint" v-if="requestSent">تم إرسال طلبك بنجاح، سنتواصل معك قريباً!</p>
          </div>
        </aside>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct } from '../data/printProducts'
import FormatSelector from '../components/FormatSelector.vue'

const route = useRoute()
const product = computed(() => getProduct(route.params.slug))

/* ═══════════════════════════════════════════════════════════
   SÉLECTIONS
═══════════════════════════════════════════════════════════ */
const selectedFormat = ref('')
const selectedPaper = ref('')
const selectedFinish = ref('')
const selectedQuantity = ref(null)
const customQuantity = ref('')

// إعادة ضبط الاختيارات الافتراضية عند تغيّر المنتج (تنقل بين منتجات مختلفة)
watch(product, (p) => {
  if (!p) return
  selectedFormat.value = p.formats[0]?.id || ''
  selectedPaper.value = p.papers[0]?.id || ''
  selectedFinish.value = p.finishes[0]?.id || ''
  selectedQuantity.value = p.quantities[0] || null
  customQuantity.value = ''
}, { immediate: true })

function selectQuantity(q) {
  selectedQuantity.value = q
  customQuantity.value = ''
}

/* ═══════════════════════════════════════════════════════════
   OBJETS SÉLECTIONNÉS
═══════════════════════════════════════════════════════════ */
const selectedFormatObj = computed(() => product.value?.formats.find(f => f.id === selectedFormat.value))
const selectedPaperObj = computed(() => product.value?.papers.find(p => p.id === selectedPaper.value))
const selectedFinishObj = computed(() => product.value?.finishes.find(f => f.id === selectedFinish.value))
const finalQuantity = computed(() => {
  const custom = Number(customQuantity.value)
  if (custom > 0) return custom
  return selectedQuantity.value || 0
})

/* ═══════════════════════════════════════════════════════════
   PRIX ESTIMÉ
═══════════════════════════════════════════════════════════ */
const estimatedPrice = computed(() => {
  if (!product.value || !finalQuantity.value) return 0
  const unit =
    product.value.basePricePerUnit +
    (selectedPaperObj.value?.priceExtra || 0) +
    (selectedFinishObj.value?.priceExtra || 0)
  return Math.round(unit * finalQuantity.value * 100) / 100
})

function formatMoney(n) {
  return Number(n).toLocaleString('ar', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

/* ═══════════════════════════════════════════════════════════
   FORMULAIRE DE DEMANDE
═══════════════════════════════════════════════════════════ */
const contact = ref({ name: '', phone: '' })
const requestSent = ref(false)
const canSubmit = computed(() => !!finalQuantity.value && !!selectedFormat.value)

function submitRequest() {
  // TODO: برمجة الإرسال الفعلي (API / بريد إلكتروني / باكاند).
  // البيانات المتوفرة هنا: product.value.slug, selectedFormat.value, selectedPaper.value,
  // selectedFinish.value, finalQuantity.value, estimatedPrice.value, contact.value
  requestSent.value = true
  contact.value = { name: '', phone: '' }
  setTimeout(() => { requestSent.value = false }, 5000)
}
</script>

<style scoped>
.pc-page {
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
  min-height: 60vh;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

.pc-notfound { text-align: center; padding: 100px 20px; display: flex; flex-direction: column; align-items: center; gap: 20px; }

/* Breadcrumb */
.breadcrumb { background: var(--bg-panel); padding: 14px 0; border-bottom: 1px solid var(--border); }
.breadcrumb .wrap { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-muted); }
.breadcrumb a { color: var(--text-light); text-decoration: none; }
.breadcrumb a:hover { color: var(--gold); }
.breadcrumb .sep { opacity: 0.5; }
.breadcrumb .current { color: var(--gold); font-weight: 700; }

/* Header produit */
.pc-header { background: var(--bg-panel); padding: 32px 0; border-bottom: 1px solid var(--border); }
.pc-header-inner { display: flex; align-items: center; gap: 22px; }
.pc-header-img { width: 74px; height: 74px; object-fit: contain; background: #fff; border-radius: 14px; border: 1px solid var(--border); padding: 10px; }
.pc-header h1 { font-size: 26px; font-weight: 800; margin: 0 0 4px; }
.pc-header p { font-size: 14px; color: var(--text-muted); margin: 0; }

/* Layout */
.pc-layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; padding: 46px 24px 90px; align-items: start; }
@media (max-width: 960px) { .pc-layout { grid-template-columns: 1fr; } }

.pc-step { margin-bottom: 46px; }
.pc-step-title { display: flex; align-items: center; gap: 12px; font-size: 18px; font-weight: 800; margin-bottom: 20px; }
.pc-step-num {
  width: 28px; height: 28px; border-radius: 50%; background: var(--gold); color: #1a1a1a;
  display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 800; flex-shrink: 0;
}

/* Options papier / finition */
.pc-option-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 14px; }
.pc-option-card {
  position: relative; text-align: right; background: #fff; border: 2px solid var(--border);
  border-radius: 12px; padding: 16px; cursor: pointer; font-family: inherit; transition: all 0.2s var(--ease);
  display: flex; flex-direction: column; gap: 4px;
}
.pc-option-card:hover { border-color: rgba(248,177,1,0.5); }
.pc-option-card.active { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(248,177,1,0.15); }
.pc-option-name { font-weight: 800; font-size: 14.5px; color: var(--text); }
.pc-option-desc { font-size: 12px; color: var(--text-muted); }
.pc-option-extra { font-size: 11.5px; color: var(--gold-dark); font-weight: 700; margin-top: 2px; }
.pc-check {
  position: absolute; top: -8px; left: -8px; width: 22px; height: 22px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 3px 8px rgba(248,177,1,0.4);
}

/* Quantité */
.pc-qty-grid { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.pc-qty-card {
  min-width: 74px; padding: 12px 16px; border-radius: 10px; border: 2px solid var(--border);
  background: #fff; font-family: inherit; font-weight: 800; font-size: 14px; cursor: pointer;
  transition: all 0.2s var(--ease);
}
.pc-qty-card:hover { border-color: rgba(248,177,1,0.5); }
.pc-qty-card.active { background: var(--gold); border-color: var(--gold); color: #1a1a1a; }
.pc-qty-custom input {
  width: 130px; padding: 12px 14px; border-radius: 10px; border: 2px solid var(--border);
  font-family: inherit; font-size: 14px;
}
.pc-qty-custom input:focus { outline: none; border-color: var(--gold); }

/* Résumé latéral */
.pc-summary { position: sticky; top: 20px; }
.pc-summary-card {
  background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md);
  padding: 26px 22px;
}
.pc-summary-card h4 { font-size: 17px; font-weight: 800; margin: 0 0 16px; }
.pc-summary-list { list-style: none; margin: 0 0 18px; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.pc-summary-list li { display: flex; justify-content: space-between; font-size: 13.5px; color: var(--text-light); border-bottom: 1px dashed var(--border); padding-bottom: 8px; }
.pc-summary-list strong { color: var(--text); }

.pc-price-box {
  display: flex; justify-content: space-between; align-items: center; background: #fff;
  border: 1px solid rgba(248,177,1,0.35); border-radius: 12px; padding: 14px 18px; margin-bottom: 6px;
}
.pc-price-box span { font-size: 13.5px; color: var(--text-muted); font-weight: 700; }
.pc-price-box strong { font-size: 20px; color: var(--gold-dark); font-weight: 800; }
.pc-price-note { font-size: 11px; color: var(--text-muted); margin: 0 0 20px; line-height: 1.6; }

.pc-form { display: flex; flex-direction: column; gap: 10px; }
.pc-form input {
  padding: 12px 16px; border-radius: 10px; border: 1px solid var(--border); font-family: inherit; font-size: 14px;
}
.pc-form input:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 3px rgba(248,177,1,0.15); }

.btn-gold {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--gold); color: #1a1a1a; font-weight: 800; font-size: 14.5px;
  padding: 13px 20px; border-radius: 10px; border: none; text-decoration: none; cursor: pointer;
  transition: all 0.25s var(--ease);
}
.btn-gold:hover { background: var(--gold-dark); transform: translateY(-2px); }
.btn-gold:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.arrow { transition: transform 0.25s var(--ease); }
.btn-gold:hover .arrow { transform: translateX(-4px); }

.pc-sent-hint { color: #16a34a; font-weight: 700; font-size: 13px; margin: 10px 0 0; text-align: center; }
</style>