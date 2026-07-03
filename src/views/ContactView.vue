<template>
  <div dir="rtl" class="contact-page">

    <!-- ═══════════════ HERO ═══════════════ -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="highlight">تواصل معنا</span>
        </h1>
        <p class="hero-subtitle">
          نحن هنا للإجابة على استفساراتكم وتقديم الحلول المناسبة لأعمالكم
        </p>
      </div>
      <div class="hero-shape"></div>
    </section>

    <!-- ═══════════════ CALCULATOR ═══════════════ -->
    <section id="price-calculator" class="calculator-section">
      <div class="container">
        <div class="calculator-card">
          <div class="calc-header">
            <span class="badge">حاسبة الأسعار</span>
            <h2>احسب تكلفة حملتك الإعلانية</h2>
            <p>اختر الولايات وعدد الأيام لمعرفة السعر التقريبي</p>
          </div>

          <div class="calc-body">
            <!-- Days -->
            <div class="calc-field">
              <label for="calc-days">عدد الأيام</label>
              <input id="calc-days" type="number" min="1" v-model.number="calcDays" />
            </div>

            <!-- Wilayas -->
            <div class="calc-field wilayas-field">
              <label>الولايات المستهدفة</label>
              <div class="wilayas-grid">
                <label
                  v-for="w in allWilayas"
                  :key="w"
                  class="wilaya-option"
                  :class="{ active: selectedWilayas.includes(w) }"
                >
                  <input type="checkbox" :value="w" v-model="selectedWilayas" @change="updateCalcWilayas" />
                  {{ w }}
                </label>
              </div>
            </div>

            <!-- Result -->
            <div class="calc-result">
              <span class="result-label">السعر الإجمالي</span>
              <span class="result-value">{{ totalPrice }} <small>د.ت</small></span>
            </div>
          </div>

          <button type="button" class="btn-use" @click="useCalculatedPrice">
            استخدم هذا السعر في طلبي
          </button>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CONTACT & FORM ═══════════════ -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">

          <!-- Left: Info -->
          <div class="info-card">
            <h3 class="info-title">معلومات الاتصال</h3>
            <ul class="info-list">
              <li>
                <span class="icon">📍</span>
                <span>طريق قابس، كم 1.5، مدنين، أمام صيدلية كشو</span>
              </li>
              <li>
                <span class="icon">📞</span>
                <span dir="ltr">+216 92 105 505</span>
              </li>
              <li>
                <span class="icon">✉️</span>
                <span>contact@infinity-agency.com</span>
              </li>
            </ul>

            <h4 class="social-title">تابعنا</h4>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Site Web">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="form-card">
            <form @submit.prevent="handleSubmit" class="contact-form" ref="formRef">
              <h3 class="form-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                أرسل رسالة
              </h3>

              <div class="form-row">
                <div class="float-group">
                  <input type="text" id="name" v-model="form.name" required placeholder=" " />
                  <label for="name">الاسم الكامل *</label>
                  <span class="input-icon">👤</span>
                </div>
                <div class="float-group">
                  <input type="email" id="email" v-model="form.email" required placeholder=" " />
                  <label for="email">البريد الإلكتروني *</label>
                  <span class="input-icon">✉️</span>
                </div>
              </div>

              <div class="form-row">
                <div class="float-group">
                  <input type="tel" id="phone" v-model="form.phone" placeholder=" " />
                  <label for="phone">رقم الهاتف</label>
                  <span class="input-icon">📞</span>
                </div>
                <div class="float-group">
                  <select id="pack" v-model="form.pack">
                    <option value="" disabled selected>اختر الباقة...</option>
                    <optgroup label="تطوير مواقع">
                      <option value="Landing Page">Landing Page - ابتداءً من 750 د.ت</option>
                      <option value="Site Vitrine">Site Vitrine - ابتداءً من 1500 د.ت</option>
                      <option value="E-Commerce">E-Commerce - ابتداءً من 1900 د.ت</option>
                      <option value="نظام الحجز">نظام الحجز الإلكتروني - حسب المشروع</option>
                      <option value="صيانة ودعم فني">الصيانة والدعم الفني - 200 د.ت شهريًا</option>
                    </optgroup>
                    <optgroup label="التسويق الرقمي">
                      <option value="BUSINESS">BUSINESS - 990 DT</option>
                      <option value="PREMIUM">PREMIUM - 750 DT</option>
                      <option value="STARTER">STARTER - 390 DT</option>
                    </optgroup>
                    <optgroup label="الفيديو">
                      <option value="مونتاج الفيديو">مونتاج الفيديو - 120 DT</option>
                      <option value="تصوير الفيديو">تصوير الفيديو - 300 DT</option>
                      <option value="تصوير + مونتاج">تصوير + مونتاج - 390 DT</option>
                      <option value="فيديو تعريفي">فيديو تعريفي - 150 DT</option>
                      <option value="تغطية الفعاليات">تغطية الفعاليات - 900 DT</option>
                    </optgroup>
                    <optgroup label="الإعلانات الممولة">
                      <option value="7 أيام - 130 DT">7 أيام - 130 DT</option>
                      <option value="14 يوم - 250 DT">14 يوم - 250 DT</option>
                      <option value="30 يوم - 590 DT">30 يوم - 590 DT</option>
                      <option value="حملة مخصصة">حملة مخصصة (حسب الحاسبة)</option>
                    </optgroup>
                    <optgroup label="التصميم والهوية">
                      <option value="تصميم منشور">تصميم منشور - 40 DT</option>
                      <option value="باقة 10 منشورات">باقة 10 منشورات - 300 DT</option>
                      <option value="Flyer">Flyer - 100 DT</option>
                      <option value="Catalogue PDF">Catalogue PDF - 180 DT</option>
                      <option value="Menu Restaurant">Menu Restaurant - 150 DT</option>
                      <option value="Logo Design">Logo Design - 120 DT</option>
                      <option value="الهوية البصرية">الهوية البصرية - 300 DT</option>
                    </optgroup>
                    <optgroup label="الطباعة والدعاية">
                      <option value="بطاقات الأعمال">بطاقات الأعمال</option>
                      <option value="المطويات (Flyers)">المطويات (Flyers)</option>
                      <option value="البروشورات">البروشورات</option>
                      <option value="رول أب (Roll Up)">رول أب (Roll Up)</option>
                      <option value="اللافتات والفينيل">اللافتات والفينيل</option>
                      <option value="اللوحات والإشارات">اللوحات والإشارات</option>
                      <option value="استيكرات السيارات">استيكرات السيارات</option>
                      <option value="واجهات المحلات">واجهات المحلات</option>
                      <option value="الطباعة الدعائية">الطباعة الدعائية</option>
                      <option value="الملصقات (Stickers)">الملصقات (Stickers)</option>
                      <option value="الكتالوجات">الكتالوجات</option>
                      <option value="البانرات الإعلانية">البانرات الإعلانية</option>
                    </optgroup>
                    <optgroup label="التصوير الفوتوغرافي">
                      <option value="جلسة تصوير لمدة ساعتين - ابتداءً من 190 د.ت">جلسة تصوير لمدة ساعتين - ابتداءً من 190 د.ت</option>
                      <option value="جلسة تصوير لمدة 4 ساعات - ابتداءً من 300 د.ت">جلسة تصوير لمدة 4 ساعات - ابتداءً من 300 د.ت</option>
                      <option value="تصوير المنتجات - ابتداءً من 120 د.ت">تصوير المنتجات - ابتداءً من 120 د.ت</option>
                      <option value="تصوير المطاعم والمقاهي - ابتداءً من 200 د.ت">تصوير المطاعم والمقاهي - ابتداءً من 200 د.ت</option>
                      <option value="تغطية الفعاليات - ابتداءً من 800 د.ت">تغطية الفعاليات - ابتداءً من 800 د.ت</option>
                    </optgroup>
                  </select>
                  <label for="pack">الباقة المهتم بها</label>
                  <span class="input-icon select-icon">▼</span>
                </div>
              </div>

              <div class="float-group full-width">
                <textarea id="message" v-model="form.message" rows="5" required placeholder=" "></textarea>
                <label for="message">الرسالة *</label>
                <span class="input-icon textarea-icon">✏️</span>
              </div>

              <button type="submit" class="submit-btn">
                <span class="btn-text">إرسال الرسالة</span>
                <span class="btn-shimmer"></span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Wilayas
const allWilayas = [
  'أريانة', 'باجة', 'بن عروس', 'بنزرت', 'قابس', 'قفصة', 'جندوبة',
  'القيروان', 'القصرين', 'قبلي', 'الكاف', 'مهدية', 'منوبة', 'مدنين',
  'المنستير', 'نابل', 'صفاقس', 'سيدي بوزيد', 'سليانة', 'سوسة',
  'تطاوين', 'توزر', 'تونس', 'زغوان'
]

// Calculator
const calcDays = ref(14)
const selectedWilayas = ref([])
const calcWilayas = ref(0)

const updateCalcWilayas = () => {
  calcWilayas.value = selectedWilayas.value.length
}

const totalPrice = computed(() => {
  const days = Number(calcDays.value) || 0
  const count = selectedWilayas.value.length || 0
  return (3.5 * days * count).toFixed(1).replace(/\.0$/, '')
})

const useCalculatedPrice = () => {
  if (selectedWilayas.value.length === 0) {
    alert('يرجى اختيار ولاية واحدة على الأقل')
    return
  }
  form.pack = 'حملة مخصصة'
  const wilayasList = selectedWilayas.value.join('، ')
  const note = `طلب حملة مخصصة: ${calcDays.value} يوم × ${selectedWilayas.value.length} ولاية (${wilayasList}) = ${totalPrice.value} DT`
  form.message = form.message ? `${form.message}\n${note}` : note
  const formEl = document.querySelector('.contact-form')
  if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Form
const form = reactive({
  name: '',
  email: '',
  phone: '',
  pack: '',
  message: ''
})

const formRef = ref(null)

const allPacks = [
  'Landing Page', 'Site Vitrine', 'E-Commerce', 'نظام الحجز', 'صيانة ودعم فني',
  'BUSINESS', 'PREMIUM', 'STARTER',
  'مونتاج الفيديو', 'تصوير الفيديو', 'تصوير + مونتاج', 'فيديو تعريفي', 'تغطية الفعاليات',
  '7 أيام - 130 DT', '14 يوم - 250 DT', '30 يوم - 590 DT', 'حملة مخصصة',
  'تصميم منشور', 'باقة 10 منشورات', 'Flyer', 'Catalogue PDF', 'Menu Restaurant', 'Logo Design', 'الهوية البصرية',
  'بطاقات الأعمال', 'المطويات (Flyers)', 'البروشورات', 'رول أب (Roll Up)',
  'اللافتات والفينيل', 'اللوحات والإشارات', 'استيكرات السيارات', 'واجهات المحلات',
  'الطباعة الدعائية', 'الملصقات (Stickers)', 'الكتالوجات', 'البانرات الإعلانية',
  'جلسة تصوير لمدة ساعتين - ابتداءً من 190 د.ت',
  'جلسة تصوير لمدة 4 ساعات - ابتداءً من 300 د.ت',
  'تصوير المنتجات - ابتداءً من 120 د.ت',
  'تصوير المطاعم والمقاهي - ابتداءً من 200 د.ت',
  'تغطية الفعاليات - ابتداءً من 800 د.ت'
]

onMounted(() => {
  const packFromQuery = route.query.pack
  if (packFromQuery && allPacks.includes(packFromQuery)) {
    form.pack = packFromQuery
  }
  if (route.hash === '#price-calculator') {
    const el = document.getElementById('price-calculator')
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
  }
})

const handleSubmit = () => {
  const btn = formRef.value?.querySelector('.submit-btn')
  if (btn) {
    btn.classList.add('sent')
    const textEl = btn.querySelector('.btn-text')
    if (textEl) textEl.textContent = 'تم الإرسال ✅'
    setTimeout(() => {
      btn.classList.remove('sent')
      if (textEl) textEl.textContent = 'إرسال الرسالة'
    }, 3000)
  }

  console.log('Données du formulaire :', form)
  // Reset
  form.name = ''
  form.email = ''
  form.phone = ''
  form.pack = ''
  form.message = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

/* ─── Base ─── */
.contact-page {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
  background: #f9fafc;
  color: #1e293b;
  min-height: 100vh;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── Hero ─── */
.hero {
  position: relative;
  background: linear-gradient(135deg, #0b1120 0%, #1a2744 100%);
  padding: 100px 0 80px;
  text-align: center;
  overflow: hidden;
}
.hero-content {
  position: relative;
  z-index: 2;
}
.hero-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  margin-bottom: 16px;
}
.highlight {
  background: linear-gradient(to right, #f8b101, #e09d00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-subtitle {
  font-size: 18px;
  color: #b0c4de;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}
.hero-shape {
  position: absolute;
  bottom: -60px;
  left: -10%;
  width: 120%;
  height: 120px;
  background: #f9fafc;
  border-radius: 50% 50% 0 0 / 30% 30% 0 0;
  transform: rotate(-2deg);
  z-index: 1;
}

/* ─── Calculator ─── */
.calculator-section {
  padding: 60px 0 40px;
  background: #f9fafc;
}
.calculator-card {
  background: #fff;
  border-radius: 32px;
  padding: 48px 40px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid rgba(248, 177, 1, 0.1);
}
.calc-header {
  text-align: center;
  margin-bottom: 32px;
}
.badge {
  display: inline-block;
  background: rgba(248, 177, 1, 0.12);
  color: #f8b101;
  padding: 4px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.calc-header h2 {
  font-size: 26px;
  font-weight: 800;
  margin: 10px 0 6px;
  color: #1e293b;
}
.calc-header p {
  color: #64748b;
  font-size: 15px;
}

.calc-body {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 28px;
}
.calc-field {
  flex: 1 1 200px;
  min-width: 140px;
}
.calc-field label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: #334155;
  margin-bottom: 8px;
}
.calc-field input[type="number"] {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  background: #f8fafc;
  transition: 0.2s;
}
.calc-field input:focus {
  border-color: #f8b101;
  box-shadow: 0 0 0 4px rgba(248, 177, 1, 0.15);
  outline: none;
}
.wilayas-field {
  flex: 2 1 300px;
}
.wilayas-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 180px;
  overflow-y: auto;
  padding: 12px;
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}
.wilaya-option {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #334155;
  cursor: pointer;
  padding: 6px 14px;
  border-radius: 30px;
  background: #fff;
  border: 1px solid #e2e8f0;
  transition: all 0.15s;
}
.wilaya-option:hover {
  border-color: #f8b101;
}
.wilaya-option.active {
  background: #f8b101;
  color: #fff;
  border-color: #f8b101;
}
.wilaya-option input {
  accent-color: #f8b101;
  width: 16px;
  height: 16px;
}

.calc-result {
  background: #f8fafc;
  border-radius: 16px;
  padding: 14px 24px;
  text-align: center;
  border: 1px solid #e2e8f0;
  min-width: 140px;
}
.result-label {
  display: block;
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
}
.result-value {
  font-size: 28px;
  font-weight: 800;
  color: #f8b101;
}
.result-value small {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
}

.btn-use {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  background: #f8b101;
  color: #1a1a1a;
  border: none;
  padding: 16px 28px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(248, 177, 1, 0.3);
}
.btn-use:hover {
  background: #db9c00;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(248, 177, 1, 0.4);
}

/* ─── Contact Section ─── */
.contact-section {
  padding: 60px 0 100px;
  background: #f9fafc;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 40px;
  align-items: start;
}

/* Info Card */
.info-card {
  background: #fff;
  border-radius: 28px;
  padding: 40px 32px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  border: 1px solid #edf2f7;
}
.info-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 3px solid #f8b101;
  display: inline-block;
}
.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
}
.info-list li {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 15px;
  color: #334155;
}
.info-list li:last-child {
  border-bottom: none;
}
.info-list .icon {
  font-size: 22px;
  flex-shrink: 0;
  width: 32px;
  text-align: center;
}
.social-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e293b;
}
.social-links {
  display: flex;
  gap: 12px;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f1f5f9;
  color: #475569;
  transition: all 0.25s;
}
.social-link:hover {
  background: #f8b101;
  color: #fff;
  transform: translateY(-4px);
}

/* Form Card */
.form-card {
  background: #fff;
  border-radius: 28px;
  padding: 40px 36px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  border: 1px solid #edf2f7;
}
.form-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: #1e293b;
}
.form-title svg {
  stroke: #f8b101;
  stroke-width: 2.5;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.float-group {
  position: relative;
  display: flex;
  flex-direction: column;
}
.float-group input,
.float-group select,
.float-group textarea {
  width: 100%;
  padding: 14px 44px 14px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: #f8fafc;
  font-family: inherit;
  font-size: 15px;
  color: #1e293b;
  transition: all 0.25s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.01);
}
.float-group input:focus,
.float-group select:focus,
.float-group textarea:focus {
  outline: none;
  border-color: #f8b101;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(248, 177, 1, 0.1);
}
.float-group label {
  position: absolute;
  right: 44px;
  top: 14px;
  font-size: 14px;
  color: #94a3b8;
  pointer-events: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  padding: 0 4px;
}
.float-group input:focus + label,
.float-group input:not(:placeholder-shown) + label,
.float-group textarea:focus + label,
.float-group textarea:not(:placeholder-shown) + label,
.float-group select:focus + label,
.float-group select:not([value=""]) + label {
  top: -12px;
  right: 16px;
  font-size: 11px;
  color: #f8b101;
  background: #fff;
  padding: 2px 8px;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.float-group .input-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 18px;
  pointer-events: none;
  transition: color 0.2s;
}
.float-group input:focus ~ .input-icon,
.float-group select:focus ~ .input-icon,
.float-group textarea:focus ~ .input-icon {
  color: #f8b101;
}
.float-group .select-icon {
  font-size: 14px;
  right: 14px;
}
.float-group .textarea-icon {
  top: 20px;
  transform: none;
}
.full-width {
  grid-column: 1 / -1;
  margin-bottom: 8px;
}
.float-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #f8b101, #e09d00);
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 18px 32px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(248, 177, 1, 0.3);
  transition: all 0.3s;
}
.submit-btn .btn-text {
  position: relative;
  z-index: 2;
}
.submit-btn .btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: left 0.6s;
}
.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(248, 177, 1, 0.5);
}
.submit-btn:hover .btn-shimmer {
  left: 100%;
}
.submit-btn:active {
  transform: scale(0.97);
}
.submit-btn.sent {
  background: #2ecc71;
  pointer-events: none;
  animation: pulse 0.5s;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
}

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .calc-body {
    flex-direction: column;
    align-items: stretch;
  }
  .calc-result {
    min-width: unset;
  }
  .calculator-card {
    padding: 32px 24px;
  }
}
@media (max-width: 480px) {
  .hero { padding: 60px 0 50px; }
  .calculator-card { padding: 24px 16px; }
  .info-card, .form-card { padding: 24px 16px; }
}
</style>