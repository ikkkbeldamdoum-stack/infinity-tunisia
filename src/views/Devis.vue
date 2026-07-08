<!-- src/views/Devis.vue -->
<template>
  <main class="devis-page">

    <!-- ═══════════ HERO ═══════════ -->
    <section class="hero-devis">
      <div class="wrap hero-grid">
        <div class="hero-visual" aria-hidden="true">
          <div class="visual-card">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="13" rx="1.5"/>
              <line x1="2" y1="14" x2="22" y2="14"/>
              <path d="M8 20h8"/>
              <path d="M12 17v3"/>
              <polyline points="6 11 9 8 12 10 16 6" />
            </svg>
          </div>
          <div class="glow-ring"></div>
          <div class="glow-ring-small"></div>
        </div>

        <div class="hero-text">
          <h1>
            اطلب عرض سعر<br />
            <span class="gold-gradient">مخصص لمشروعك</span>
          </h1>
          <p class="lead">
            اخبرنا عن مشروعك واحتياجاتك. وسنقوم بإعداد عرض سعر
            مفضل يناسب أهدافك وميزانيتك في أسرع وقت.
          </p>

          <div class="hero-badges">
            <div class="hero-badge" v-for="b in heroBadges" :key="b.label">
              <span class="hero-badge-icon" v-html="b.icon"></span>
              <div>
                <strong>{{ b.title }}</strong>
                <span>{{ b.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ STEP INDICATOR ═══════════ -->
    <section class="steps-nav">
      <div class="wrap">
        <div class="steps-track">
          <div class="steps-line"></div>
          <div class="steps-line-fill" :style="{ width: fillWidth }"></div>
          <div
            class="step-node"
            v-for="s in steps"
            :key="s.num"
            :class="{ active: currentStep === s.num, done: currentStep > s.num }"
          >
            <span class="step-circle">
              <svg v-if="currentStep > s.num" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              <template v-else>{{ s.num }}</template>
            </span>
            <span class="step-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════ FORMULAIRE ═══════════ -->
    <section class="form-section" v-if="!submitted">
      <div class="wrap form-grid">

        <div class="quote-form">

          <!-- ═══ STEP 1 : SERVICE ═══ -->
          <transition name="step-fade" mode="out-in">
            <div v-if="currentStep === 1" key="step1">
              <div class="step-head">
                <span class="step-dash"></span>
                <h2>اختر الخدمة أو المنتج المطلوب</h2>
                <span class="step-dash"></span>
              </div>

              <div class="services-grid">
                <label
                  v-for="s in services"
                  :key="s.value"
                  class="service-choice"
                  :class="{ checked: form.services.includes(s.value) }"
                >
                  <input type="checkbox" :value="s.value" v-model="form.services" />
                  <span class="service-icon" v-html="s.icon"></span>
                  <span class="service-label">{{ s.label }}</span>
                  <span class="service-check" v-if="form.services.includes(s.value)">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                </label>
              </div>

              <transition name="fade">
                <input
                  v-if="form.services.includes('autre')"
                  v-model="form.serviceOther"
                  type="text"
                  class="field-other"
                  placeholder="حدد الخدمة التي تهمك"
                />
              </transition>

              <div class="info-note">
                <span class="info-note-icon">ⓘ</span>
                يمكنك اختيار أكثر من خدمة واحدة
              </div>
            </div>

            <!-- ═══ STEP 2 : PROJET ═══ -->
            <div v-else-if="currentStep === 2" key="step2">
              <div class="step-head">
                <span class="step-dash"></span>
                <h2>معلومات عن المشروع</h2>
                <span class="step-dash"></span>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label">ما هو اسم مشروعك؟</label>
                  <input v-model="form.projectName" type="text" placeholder="مثال: مطعم لذيذ - متجر إلكتروني..." />
                </div>
                <div class="field">
                  <label class="field-label">ما هو نوع مشروعك؟</label>
                  <div class="custom-select-wrapper">
                    <select v-model="form.projectType">
                      <option value="" disabled>اختر نوع المشروع</option>
                      <option v-for="p in projectTypes" :key="p" :value="p">{{ p }}</option>
                    </select>
                    <svg class="select-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label">ما هو وصف مختصر للمشروع؟</label>
                  <textarea v-model="form.shortDesc" rows="4" placeholder="اكتب وصف مختصر عن مشروعك وخدماتك أو منتجاتك..."></textarea>
                </div>
                <div class="field">
                  <label class="field-label">ما هي أهدافك من المشروع؟</label>
                  <textarea v-model="form.goals" rows="4" placeholder="اكتب أهدافك وتفاصيل ما تريد تحقيقه..."></textarea>
                </div>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label">ما هو موعد التسليم المتوقع؟</label>
                  <input v-model="form.deadline" type="date" />
                </div>
                <div class="field">
                  <label class="field-label">ما هي ميزانيتك المتوقعة؟</label>
                  <div class="custom-select-wrapper">
                    <select v-model="form.budget">
                      <option value="">اختر النطاق السعري</option>
                      <option>0 — 500 د.ت</option>
                      <option>500 — 1 000 د.ت</option>
                      <option>1 000 — 1 500 د.ت</option>
                      <option>1 500 — 2 000 د.ت</option>
                      <option>2 000 — 3 000 د.ت</option>
                      <option>3 000 — 5 000 د.ت</option>
                      <option>أكثر من 5 000 د.ت</option>
                    </select>
                    <svg class="select-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- ═══ STEP 3 : CONTACT ═══ -->
            <div v-else-if="currentStep === 3" key="step3">
              <div class="step-head">
                <span class="step-dash"></span>
                <h2>معلومات التواصل</h2>
                <span class="step-dash"></span>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label">
                    <span class="label-icon">👤</span>
                    الاسم واللقب <span class="req">*</span>
                  </label>
                  <input v-model="form.name" type="text" required placeholder="اسمك الكامل" />
                </div>
                <div class="field">
                  <label class="field-label">
                    <span class="label-icon">🏷️</span>
                    الشركة / العلامة التجارية
                  </label>
                  <input v-model="form.company" type="text" placeholder="اسم شركتك (اختياري)" />
                </div>
              </div>

              <div class="field-row">
                <div class="field">
                  <label class="field-label">
                    <span class="label-icon">📞</span>
                    رقم الهاتف <span class="req">*</span>
                  </label>
                  <input v-model="form.phone" type="tel" required placeholder="+216 ..." />
                </div>
                <div class="field">
                  <label class="field-label">
                    <span class="label-icon">📧</span>
                    البريد الإلكتروني
                  </label>
                  <input v-model="form.email" type="email" placeholder="vous@exemple.com" />
                </div>
              </div>

              <div class="field">
                <label class="field-label">
                  <span class="label-icon">💬</span>
                  ملاحظات إضافية
                </label>
                <textarea v-model="form.message" rows="4" placeholder="أي تفاصيل إضافية تريد إخبارنا بها..."></textarea>
              </div>
            </div>

            <!-- ═══ STEP 4 : REVIEW ═══ -->
            <div v-else key="step4">
              <div class="step-head">
                <span class="step-dash"></span>
                <h2>مراجعة الطلب قبل الإرسال</h2>
                <span class="step-dash"></span>
              </div>

              <div class="review-list">
                <div class="review-block">
                  <h4>الخدمات / المنتجات المطلوبة</h4>
                  <p v-if="selectedServiceLabels.length">{{ selectedServiceLabels.join('، ') }}</p>
                  <p class="muted" v-else>لم يتم اختيار أي خدمة</p>
                </div>
                <div class="review-block">
                  <h4>معلومات المشروع</h4>
                  <p><strong>الاسم:</strong> {{ form.projectName || '—' }}</p>
                  <p><strong>النوع:</strong> {{ form.projectType || '—' }}</p>
                  <p><strong>الميزانية:</strong> {{ form.budget || '—' }}</p>
                  <p><strong>موعد التسليم:</strong> {{ form.deadline || '—' }}</p>
                </div>
                <div class="review-block">
                  <h4>معلومات التواصل</h4>
                  <p><strong>الاسم:</strong> {{ form.name || '—' }}</p>
                  <p><strong>الهاتف:</strong> {{ form.phone || '—' }}</p>
                  <p><strong>البريد:</strong> {{ form.email || '—' }}</p>
                </div>
              </div>
            </div>
          </transition>

          <!-- ═══ NAVIGATION ═══ -->
          <div class="step-nav-buttons">
            <button
              v-if="currentStep > 1"
              type="button"
              class="btn btn-back"
              @click="prevStep"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18L15 12L9 6"/></svg>
              <span>السابق</span>
            </button>
            <span v-else></span>

            <button
              v-if="currentStep < 4"
              type="button"
              class="btn btn-submit"
              :disabled="!canProceed"
              @click="nextStep"
            >
              <span>التالي</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18L9 12L15 6"/></svg>
            </button>
            <button
              v-else
              type="button"
              class="btn btn-submit"
              :disabled="!canProceed"
              @click="handleSubmit"
            >
              <span>أرسل طلبي</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18L9 12L15 6"/></svg>
            </button>
          </div>
        </div>

        <!-- SIDE INFO -->
        <aside class="side-info">
          <div class="info-card dark">
            <span class="info-tag">لماذا تختار Infinity؟</span>
            <div class="why-list">
              <div class="why-item" v-for="w in whyItems" :key="w.title">
                <span class="why-icon" v-html="w.icon"></span>
                <div>
                  <strong>{{ w.title }}</strong>
                  <span>{{ w.desc }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="info-card glass">
            <span class="info-tag light">⚡ لديك استفسار؟</span>
            <h3>تواصل معنا مباشرة</h3>
            <a href="https://wa.me/21692105505" target="_blank" rel="noopener" class="btn btn-ghost">تواصل معنا</a>
          </div>
        </aside>

      </div>
    </section>

    <!-- ═══════════ SUCCESS ═══════════ -->
    <section class="form-section" v-else>
      <div class="wrap">
        <div class="success-card">
          <div class="success-icon">✓</div>
          <h2>تم إرسال طلبك بنجاح.</h2>
          <p>
            شكراً{{ form.name ? `، ${form.name}` : '' }}. سيعود إليك فريقنا خلال 24 ساعة
            بعرض مناسب لمشروعك.
          </p>
          <a href="https://wa.me/21692105505" target="_blank" rel="noopener" class="btn btn-gold">
            تحدث معنا على واتساب ←
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useAdminStorage } from '../composables/useAdminStorage'

const { saveMessage, saveClient, saveProjet } = useAdminStorage()

/* ═══ Étapes ═══ */
const steps = [
  { num: 1, label: 'اختر الخدمة' },
  { num: 2, label: 'معلومات المشروع' },
  { num: 3, label: 'معلومات التواصل' },
  { num: 4, label: 'مراجعة وإرسال' }
]
const currentStep = ref(1)
const fillWidth = computed(() => `${((currentStep.value - 1) / (steps.length - 1)) * 100}%`)

/* ═══ Badges hero ═══ */
const heroBadges = [
  { title: 'عرض سعر مجاني', label: 'بدون أي التزام', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { title: 'استجابة سريعة', label: 'خلال 24 ساعة', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { title: 'حلول مخصصة', label: 'تناسب احتياجاتك', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>` }
]

/* ═══ SERVICES ═══ */
const defaultIcon = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M8 8h8M8 12h6M8 16h4"/></svg>`

const services = [
  { value: 'social', label: 'إدارة صفحات التواصل الإجتماعي', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="10" r="2.5"/><path d="M7 18c1-2.5 3-3.5 5-3.5s4 1 5 3.5"/></svg>` },
  { value: 'design', label: 'التصميم الجرافيكي والهوية البصرية', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { value: 'video', label: 'إنتاج الفيديو', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="6" width="14" height="12" rx="2"/><polygon points="16 10 22 7 22 17 16 14"/></svg>` },
  { value: 'photo', label: 'التصوير', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
  { value: 'motion', label: 'Motion Design', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/></svg>` },
  { value: 'web', label: 'تطوير المواقع والتطبيقات', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="4" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="18" x2="12" y2="21"/></svg>` },
  { value: 'ads', label: 'الإعلانات الممولة', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 11l18-7-7 18-3-8-8-3z"/></svg>` },
  { value: 'marketing', label: 'تسويق رقمي متكامل', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>` },
  { value: 'cartes-visite', label: 'بطاقات الأعمال', icon: defaultIcon },
  { value: 'flyers', label: 'Flyers (مطويات)', icon: defaultIcon },
  { value: 'cartes-nfc', label: 'بطاقات NFC', icon: defaultIcon },
  { value: 'baches', label: 'بَاشات إعلانية', icon: defaultIcon },
  { value: 'carnets-factures', label: 'كشوفات الفواتير', icon: defaultIcon },
  { value: 'porte-documents', label: 'مجلدات وحافظات', icon: defaultIcon },
  { value: 'rollup', label: 'رول أب (Roll‑up)', icon: defaultIcon },
  { value: 'mugs', label: 'أكواب مخصصة', icon: defaultIcon },
  { value: 'stylos', label: 'أقلام إعلانية', icon: defaultIcon },
  { value: 'porte-cles', label: 'مفاتيح شخصية', icon: defaultIcon },
  { value: 'calendriers', label: 'تقاويم', icon: defaultIcon },
  { value: 'trophees', label: 'جوائز وتذكارات', icon: defaultIcon },
  { value: 'stickers', label: 'ملصقات (Stickers)', icon: defaultIcon },
  { value: 'catalogues', label: 'كتالوجات', icon: defaultIcon },
  { value: 'porte-affiches', label: 'حاملات الملصقات', icon: defaultIcon },
  { value: 'habillage-vehicules', label: 'تغليف المركبات', icon: defaultIcon },
  { value: 'cachets', label: 'أختام مهنية', icon: defaultIcon },
  { value: 'autre', label: 'أخرى (حدد لاحقًا)', icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>` }
]

/* ═══ Pourquoi Infinity ═══ */
const whyItems = [
  { title: 'خبرة واحترافية', desc: 'فريق متخصص يقدم حلول إبداعية بجودة عالية', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6z"/><polyline points="9 12 11 14 15 10"/></svg>` },
  { title: 'الالتزام بالمواعيد', desc: 'نلتزم بتسليم المشاريع في الوقت المحدد', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
  { title: 'دعم ومتابعة', desc: 'نحن معك من بداية المشروع إلى ما بعد التسليم', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
  { title: 'حلول مخصصة', desc: 'نصمم حلول تناسب أهدافك وميزانيتك', icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>` }
]

const projectTypes = [
  'مشروع جديد بالكامل',
  'تحسين / إعادة تصميم مشروع قائم',
  'حملة موسمية أو مؤقتة',
  'مشروع مستمر شهريًا'
]

const form = reactive({
  services: [],
  serviceOther: '',
  projectName: '',
  projectType: '',
  shortDesc: '',
  goals: '',
  deadline: '',
  budget: '',
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
})

const selectedServiceLabels = computed(() =>
  form.services.map(v => {
    if (v === 'autre' && form.serviceOther) return form.serviceOther
    const s = services.find(x => x.value === v)
    return s ? s.label : v
  })
)

const canProceed = computed(() => {
  if (currentStep.value === 1) return form.services.length > 0
  if (currentStep.value === 3) return form.name.trim() !== '' && form.phone.trim() !== ''
  return true
})

const nextStep = () => {
  if (!canProceed.value) return
  if (currentStep.value < 4) currentStep.value++
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const submitted = ref(false)

function handleSubmit() {
  if (!canProceed.value) return
  
  // ═══ SAUVEGARDE DANS L'ADMIN ═══
  const servicesList = selectedServiceLabels.value.join(', ')
  
  // 1. Sauvegarder le message
  saveMessage({
    name: form.name,
    email: form.email || '',
    phone: form.phone,
    company: form.company || '',
    pack: servicesList,
    message: `
      Projet: ${form.projectName || ''}
      Type: ${form.projectType || ''}
      Budget: ${form.budget || ''}
      Date souhaitée: ${form.deadline || ''}
      ${form.shortDesc ? 'Description: ' + form.shortDesc : ''}
      ${form.goals ? 'Objectifs: ' + form.goals : ''}
      ${form.message ? 'Notes: ' + form.message : ''}
    `.trim(),
    source: 'devis'
  })

  // 2. Sauvegarder le client
  saveClient({
    name: form.name,
    email: form.email || '',
    phone: form.phone,
    company: form.company || '',
    services: servicesList,
    notes: form.message || '',
    source: 'devis'
  })

  // 3. Sauvegarder le projet
  if (form.projectName) {
    saveProjet({
      name: form.projectName,
      client: form.name,
      service: servicesList,
      status: 'en-attente',
      description: form.shortDesc || '',
      budget: form.budget || '',
      deadline: form.deadline || ''
    })
  }

  submitted.value = true
}
</script>

<style scoped>
/* ═══════════ FONDATIONS ═══════════ */
.devis-page {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: #fff8e6;
  --ink: #0f0f0f;
  --ink-light: #2a2a2a;
  --grey: #6b6b7b;
  --grey-light: #9a9aae;
  --paper: #fafafa;
  --white: #ffffff;
  --border: #e8e8ed;
  --radius: 24px;
  --radius-sm: 14px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  direction: rtl;
  font-family: 'Tajawal', 'Cairo', sans-serif;
  color: var(--ink);
  background: var(--paper);
  overflow-x: hidden;
}
.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

.hero-devis {
  padding: 60px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0c1230, #070b1e);
}
.hero-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  align-items: center;
}
.hero-text h1 {
  font-size: clamp(34px, 5vw, 52px);
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 16px;
  color: #fff;
}
.gold-gradient {
  background: linear-gradient(135deg, #f8b101 0%, #ffd04b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.lead {
  font-size: 16.5px;
  color: #b9c0d6;
  line-height: 1.9;
  max-width: 520px;
  margin-bottom: 30px;
}
.hero-badges { display: flex; flex-wrap: wrap; gap: 20px; }
.hero-badge {
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(248,177,1,0.25);
  border-radius: 14px; padding: 14px 18px;
}
.hero-badge-icon {
  width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: rgba(248,177,1,0.12); color: var(--gold);
}
.hero-badge div { display: flex; flex-direction: column; }
.hero-badge strong { font-size: 13.5px; color: #fff; font-weight: 700; }
.hero-badge span { font-size: 12px; color: #b9c0d6; }

.hero-visual { position: relative; height: 220px; display: flex; align-items: center; justify-content: center; }
.visual-card {
  width: 150px; height: 150px; border-radius: 24px;
  background: rgba(248,177,1,0.08); border: 1px solid rgba(248,177,1,0.3);
  color: var(--gold); display: flex; align-items: center; justify-content: center;
  animation: float-up 4s ease-in-out infinite; z-index: 2;
}
.glow-ring { position: absolute; width: 220px; height: 220px; border: 2px dashed rgba(248,177,1,0.35); border-radius: 50%; animation: spin-slow 25s linear infinite; }
.glow-ring-small { position: absolute; width: 160px; height: 160px; border: 2px dashed rgba(248,177,1,0.2); border-radius: 50%; animation: spin-slow 18s linear infinite reverse; }

.steps-nav { padding: 46px 0 10px; background: var(--paper); }
.steps-track { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); }
.steps-line { position: absolute; top: 19px; left: 12%; right: 12%; height: 2px; background: var(--border); z-index: 0; }
.steps-line-fill { position: absolute; top: 19px; right: 12%; height: 2px; background: var(--gold); z-index: 1; transition: width 0.4s var(--ease); max-width: 76%; }
.step-node { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 10px; }
.step-circle {
  width: 40px; height: 40px; border-radius: 50%;
  background: #fff; border: 2px solid var(--border);
  color: var(--grey-light); font-weight: 800; font-size: 15px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s var(--ease);
}
.step-node.active .step-circle { border-color: var(--gold); color: var(--gold); background: var(--gold-soft); box-shadow: 0 0 0 5px rgba(248,177,1,0.14); }
.step-node.done .step-circle { border-color: var(--gold); background: var(--gold); color: #1a1a1a; }
.step-label { font-size: 13px; font-weight: 700; color: var(--grey); text-align: center; }
.step-node.active .step-label { color: var(--ink); }
@media (max-width: 700px) { .step-label { display: none; } }

.step-head { display: flex; align-items: center; gap: 16px; justify-content: center; margin-bottom: 30px; }
.step-head h2 { font-size: 22px; font-weight: 800; white-space: nowrap; }
.step-dash { flex: 1; height: 1px; background: var(--border); max-width: 100px; }

.form-section { padding: 40px 0 80px; }
.form-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 40px;
  align-items: start;
}

.quote-form {
  background: rgba(255,255,255,0.9);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
}

.field { display: flex; flex-direction: column; gap: 8px; }
.field-row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px; }
.field-label {
  display: flex; align-items: center; gap: 8px;
  font-size: 14.5px; font-weight: 700; color: var(--ink);
}
.label-icon { font-size: 17px; }
.req { color: var(--gold-deep); margin-right: 2px; }

.custom-select-wrapper { position: relative; }
select, input, textarea {
  width: 100%; padding: 13px 16px; font-family: inherit; font-size: 14.5px;
  border: 1px solid var(--border); border-radius: var(--radius-sm);
  background: rgba(255,255,255,0.9); color: var(--ink);
  transition: border-color 0.25s, box-shadow 0.25s; appearance: none;
}
.custom-select-wrapper select { padding-left: 40px; }
.select-chevron { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none; color: var(--grey); }
input:focus, textarea:focus, select:focus { outline: none; border-color: var(--gold); box-shadow: 0 0 0 4px rgba(248,177,1,0.1); background: #fff; }
.field-other { margin-top: 14px; }

.services-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-bottom: 20px; }
.service-choice {
  position: relative;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  padding: 22px 12px; background: #fff; border: 1px solid var(--border);
  border-radius: var(--radius-sm); cursor: pointer; text-align: center;
  transition: all 0.25s var(--ease);
}
.service-choice:hover { border-color: var(--gold); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
.service-choice.checked { border-color: var(--gold); background: var(--gold-soft); box-shadow: 0 0 0 2px rgba(248,177,1,0.3); }
.service-choice input { display: none; }
.service-icon { color: var(--ink-light); display: flex; }
.service-choice.checked .service-icon { color: var(--gold-deep); }
.service-label { font-size: 13px; font-weight: 700; color: var(--ink); line-height: 1.4; }
.service-check {
  position: absolute; top: 10px; left: 10px; width: 20px; height: 20px; border-radius: 50%;
  background: var(--gold); color: #fff; display: flex; align-items: center; justify-content: center;
}
@media (max-width: 1100px) { .services-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }

.info-note {
  display: flex; align-items: center; gap: 10px;
  background: var(--gold-soft); border: 1px solid rgba(248,177,1,0.35);
  border-radius: 12px; padding: 12px 16px; font-size: 13.5px; color: var(--ink-light); font-weight: 600;
}
.info-note-icon { color: var(--gold-deep); font-size: 15px; }

.review-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 10px; }
.review-block { background: var(--paper); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 20px 22px; }
.review-block h4 { font-size: 14.5px; font-weight: 800; color: var(--gold-deep); margin-bottom: 10px; }
.review-block p { font-size: 14px; color: var(--ink-light); line-height: 1.8; }
.review-block p.muted { color: var(--grey-light); }

.step-nav-buttons { display: flex; justify-content: space-between; align-items: center; margin-top: 30px; }
.btn { display: inline-flex; align-items: center; gap: 10px; border: none; cursor: pointer; font-family: inherit; }
.btn-back {
  background: transparent; color: var(--ink-light); font-weight: 700; font-size: 14.5px;
  padding: 12px 20px; border-radius: 50px; border: 1px solid var(--border);
  transition: all 0.25s;
}
.btn-back:hover { border-color: var(--gold); background: var(--gold-soft); }
.btn-submit {
  padding: 16px 36px; border-radius: 50px; font-weight: 700; font-size: 16px;
  background: var(--gold); color: var(--ink);
  box-shadow: 0 8px 24px rgba(248,177,1,0.35);
  transition: all 0.3s var(--bounce);
  position: relative; overflow: hidden;
}
.btn-submit:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 16px 36px rgba(248,177,1,0.5); }
.btn-submit:disabled { opacity: 0.45; cursor: not-allowed; box-shadow: none; }

.success-card {
  background: var(--ink); color: #fff; border-radius: var(--radius);
  padding: 56px 40px; text-align: center; max-width: 600px; margin: 0 auto;
}
.success-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 56px; height: 56px; border-radius: 50%; background: var(--gold); color: var(--ink);
  font-size: 28px; font-weight: 800; margin-bottom: 24px;
}
.success-card h2 { font-size: 28px; margin-bottom: 14px; }
.success-card p { color: rgba(255,255,255,0.75); margin: 0 auto 28px; max-width: 400px; }
.btn-gold {
  display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border-radius: 50px;
  font-weight: 700; background: var(--gold); color: var(--ink); text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}
.btn-gold:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(248,177,1,0.4); }

.side-info { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 100px; }
.info-card { border-radius: var(--radius); padding: 28px 26px; transition: transform 0.3s; }
.info-card:hover { transform: translateY(-4px); }
.glass { background: rgba(255,255,255,0.6); backdrop-filter: blur(10px); border: 1px solid var(--border); }
.dark { background: var(--ink); color: #fff; }
.dark h3 { color: #fff; }
.info-tag {
  font-size: 12px; font-weight: 700; letter-spacing: 0.04em;
  color: var(--gold-deep); display: inline-block; margin-bottom: 16px;
  background: rgba(248,177,1,0.15); padding: 4px 12px; border-radius: 50px;
}
.dark .info-tag { background: rgba(255,255,255,0.1); color: var(--gold); }
.info-tag.light { color: var(--gold-deep); }
.info-card h3 { font-size: 19px; margin-bottom: 16px; }
.why-list { display: flex; flex-direction: column; gap: 18px; }
.why-item { display: flex; align-items: flex-start; gap: 12px; }
.why-icon {
  width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0;
  background: rgba(248,177,1,0.12); color: var(--gold);
  display: flex; align-items: center; justify-content: center;
}
.why-item div { display: flex; flex-direction: column; gap: 2px; }
.why-item strong { font-size: 14px; color: #fff; }
.why-item span { font-size: 12.5px; color: rgba(255,255,255,0.65); line-height: 1.6; }
.btn-ghost {
  display: inline-flex; align-items: center; gap: 6px; padding: 12px 24px; border-radius: 50px;
  font-weight: 700; font-size: 14px; text-decoration: none; color: var(--ink);
  border: 1px solid var(--border); background: rgba(255,255,255,0.5);
  transition: all 0.25s; width: 100%; justify-content: center;
}
.btn-ghost:hover { background: #fff; border-color: var(--gold); }

@keyframes float-up { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-10px); }
.step-fade-enter-active, .step-fade-leave-active { transition: opacity 0.25s var(--ease), transform 0.25s var(--ease); }
.step-fade-enter-from { opacity: 0; transform: translateX(-12px); }
.step-fade-leave-to { opacity: 0; transform: translateX(12px); }

@media (max-width: 960px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; }
  .hero-visual { height: 180px; }
  .hero-badges { justify-content: center; }
  .form-grid { grid-template-columns: 1fr; }
  .side-info { position: static; }
  .field-row { grid-template-columns: 1fr; }
  .quote-form { padding: 26px; }
  .step-head h2 { font-size: 18px; }
}
</style>