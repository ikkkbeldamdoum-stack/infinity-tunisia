<!-- src/components/FormatSelector.vue -->
<!--
  خطوة اختيار المقاس (Format) — على نمط صفحة printoclock.com/flyers-c-12.html#menu
  لكن بهوية Infinity (ذهبي/كحلي) وبالعربية RTL.

  الاستخدام:
    <FormatSelector :formats="myFormats" v-model="selectedFormatId" />

  كل عنصر format:
    { id, label, dims, ratio: {w,h}, badge?, refBox?: {w,h} }
    - ratio: النسبة الحقيقية للمقاس (عرض/ارتفاع) لرسم المستطيل الملون
    - refBox: مقاس مرجعي (عادة A4) يُرسم كخلفية رمادية لإظهار النسبة بالمقارنة
-->
<template>
  <section class="fmt-section" dir="rtl">
    <div class="fmt-wrap">
      <h3 class="fmt-title">
        <span class="fmt-step">1</span>
        اختر مقاس المطوية
      </h3>

      <div class="fmt-grid">
        <button
          v-for="f in formats"
          :key="f.id"
          type="button"
          class="fmt-card"
          :class="{ active: modelValue === f.id }"
          @click="select(f.id)"
        >
          <span v-if="f.badge" class="fmt-badge">{{ f.badge }}</span>

          <span class="fmt-preview">
            <!-- الصندوق المرجعي (رمادي فاتح) -->
            <span
              class="fmt-ref"
              :style="refBoxStyle(f)"
            >
              <span class="fmt-ref-label" v-if="f.refLabel">{{ f.refLabel }}</span>
              <!-- الصندوق الملون = المقاس الفعلي، منسوب لداخل المرجعي -->
              <span
                class="fmt-real"
                :style="realBoxStyle(f)"
              ></span>
            </span>
          </span>

          <span class="fmt-name">{{ f.label }}</span>
          <span class="fmt-dims">{{ f.dims }}</span>

          <span class="fmt-check" v-if="modelValue === f.id">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
/* ═══════════════════════════════════════════════════════════
   PROPS / MODEL
═══════════════════════════════════════════════════════════ */
const props = defineProps({
  formats: {
    type: Array,
    default: () => [
      { id: 'a5',  label: 'A5',  dims: '14.8×21 سم — نصف A4',       badge: 'الأكثر طلباً', ratio: { w: 14.8, h: 21 },   refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a6',  label: 'A6',  dims: '10.5×14.8 سم — بحجم بطاقة بريدية', ratio: { w: 10.5, h: 14.8 }, refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'dl',  label: 'DL',  dims: '9.9×21 سم — ثلث A4',          ratio: { w: 9.9, h: 21 },    refBox: { w: 21, h: 29.7 }, refLabel: 'A4' },
      { id: 'a4',  label: 'A4',  dims: '21×29.7 سم',                  ratio: { w: 21, h: 29.7 },   refBox: null },
      { id: 'a3',  label: 'A3',  dims: '29.7×42 سم',                  ratio: { w: 29.7, h: 42 },   refBox: { w: 29.7, h: 42 } },
      { id: '10x30', label: '10×30', dims: '10×30 سم — شكل مستطيل طويل', ratio: { w: 10, h: 30 }, refBox: { w: 21, h: 30 } },
      { id: '10x10', label: '10×10', dims: '10×10 سم — شكل مربع',      ratio: { w: 10, h: 10 },   refBox: { w: 21, h: 21 } },
    ]
  },
  modelValue: { type: String, default: '' }
})
const emit = defineEmits(['update:modelValue', 'change'])

function select(id) {
  emit('update:modelValue', id)
  emit('change', id)
}

/* ═══════════════════════════════════════════════════════════
   حساب أبعاد المعاينة (نِسَب حقيقية داخل صندوق ثابت الارتفاع)
═══════════════════════════════════════════════════════════ */
const MAX_H = 92 // px — أقصى ارتفاع للصندوق المرجعي داخل البطاقة

function boxPx(dimsObj) {
  if (!dimsObj) return null
  const scale = MAX_H / Math.max(dimsObj.w, dimsObj.h)
  return { w: Math.round(dimsObj.w * scale), h: Math.round(dimsObj.h * scale) }
}

function refBoxStyle(f) {
  const ref = f.refBox || f.ratio
  const px = boxPx(ref)
  return { width: px.w + 'px', height: px.h + 'px' }
}

function realBoxStyle(f) {
  const ref = f.refBox || f.ratio
  const refScale = MAX_H / Math.max(ref.w, ref.h)
  const w = Math.round(f.ratio.w * refScale)
  const h = Math.round(f.ratio.h * refScale)
  // المستطيل الملون يُلصق في الزاوية السفلية (نفس منطق printoclock)
  return { width: w + 'px', height: h + 'px' }
}
</script>

<style scoped>
.fmt-section {
  --gold: #f8b101;
  --gold-light: #ffd04b;
  --gold-dark: #db9c00;
  --navy: #0c1230;
  --border: #e6e8ec;
  --text: #1a202c;
  --text-muted: #718096;
  --radius-md: 16px;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Cairo', 'Tajawal', sans-serif;
  padding: 40px 0;
  direction: rtl;
}
.fmt-wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

.fmt-title {
  display: flex; align-items: center; gap: 12px;
  font-size: 20px; font-weight: 800; color: var(--text);
  margin-bottom: 24px;
}
.fmt-step {
  width: 30px; height: 30px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 800; flex-shrink: 0;
}

.fmt-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
@media (max-width: 900px) { .fmt-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .fmt-grid { grid-template-columns: 1fr; } }

.fmt-card {
  position: relative;
  display: flex; flex-direction: column; align-items: center;
  gap: 6px;
  background: #fff;
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  padding: 22px 14px 18px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s var(--ease);
  text-align: center;
}
.fmt-card:hover { border-color: rgba(248,177,1,0.5); transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0,0,0,0.06); }
.fmt-card.active { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(248,177,1,0.18); }

.fmt-badge {
  position: absolute; top: -1px; right: -1px;
  background: var(--gold); color: #1a1a1a;
  font-size: 10.5px; font-weight: 800;
  padding: 5px 12px; border-radius: 0 14px 0 12px;
}

.fmt-preview {
  height: 96px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 8px;
}
.fmt-ref {
  position: relative;
  background: #eef0f3;
  border: 1px solid var(--border);
  border-radius: 3px;
  display: block;
}
.fmt-ref-label {
  position: absolute; top: 3px; left: 5px;
  font-size: 9px; font-weight: 800; color: var(--text-muted);
}
.fmt-real {
  position: absolute; bottom: 0; right: 0;
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(248,177,1,0.35);
}

.fmt-name { font-size: 16px; font-weight: 800; color: var(--text); }
.fmt-dims { font-size: 12px; color: var(--text-muted); }

.fmt-check {
  position: absolute; bottom: -1px; left: 50%; transform: translate(-50%, 50%);
  width: 26px; height: 26px; border-radius: 50%;
  background: var(--gold); color: #1a1a1a;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 10px rgba(248,177,1,0.45);
}
</style>