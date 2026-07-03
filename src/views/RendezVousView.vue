<!-- src/views/RendezVousView.vue -->
<template>
  <div dir="rtl" class="infinity-site">

    <!-- ═══════════════ HERO RENDEZ-VOUS ═══════════════ -->
    <section class="rdv-hero">
      <div class="rdv-hero-overlay"></div>
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="rdv-hero-content">
        <h1 class="rdv-hero-title">
          <span class="gold-gradient">احجز موعداً</span>
        </h1>
        <p class="rdv-hero-desc">
          حدد موعداً لاستشارة مجانية مع خبرائنا، وسنكون سعداء بمساعدتك في تطوير أعمالك
        </p>
      </div>
    </section>

    <!-- ═══════════════ FORMULAIRE DE RENDEZ-VOUS ═══════════════ -->
    <section class="rdv-section">
      <div class="wrap">
        <div class="rdv-grid">
          <!-- Colonne informations -->
          <div class="info-col">
            <h3 class="info-title">معلومات الاتصال</h3>
            <div class="info-item">
              <span class="info-icon">📍</span>
              <span>طريق قابس، كم 1.5، مدنين، أمام صيدلية كشو</span>
            </div>
            <div class="info-item">
              <span class="info-icon">📞</span>
              <span dir="ltr">+216 92 105 505</span>
            </div>
            <div class="info-item">
              <span class="info-icon">✉️</span>
              <span>contact@infinity-agency.com</span>
            </div>

            <h4 class="info-subtitle">ساعات العمل</h4>
            <div class="hours">
              <div><span>الإثنين – الجمعة</span> <span>09:00 – 18:00</span></div>
              <div><span>السبت</span> <span>09:00 – 13:00</span></div>
              <div><span>الأحد</span> <span>مغلق</span></div>
            </div>
          </div>

          <!-- Colonne formulaire -->
          <div class="form-col">
            <form @submit.prevent="handleSubmit" class="rdv-form">
              <h3 class="form-title">بيانات الموعد</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">الاسم *</label>
                  <input type="text" id="firstName" v-model="form.firstName" required placeholder="الاسم الأول">
                </div>
                <div class="form-group">
                  <label for="lastName">اللقب</label>
                  <input type="text" id="lastName" v-model="form.lastName" placeholder="اللقب">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">البريد الإلكتروني *</label>
                  <input type="email" id="email" v-model="form.email" required placeholder="example@domain.com">
                </div>
                <div class="form-group">
                  <label for="phone">رقم الهاتف *</label>
                  <input type="tel" id="phone" v-model="form.phone" required placeholder="+216 XX XXX XXX">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="date">التاريخ *</label>
                  <input type="date" id="date" v-model="form.date" required>
                </div>
                <div class="form-group">
                  <label for="time">الوقت *</label>
                  <input type="time" id="time" v-model="form.time" required>
                </div>
              </div>

              <div class="form-group">
                <label for="service">الخدمة المهتم بها</label>
                <select id="service" v-model="form.service">
                  <option value="">اختر الخدمة...</option>

                  <!-- Web Development -->
                  <option value="Landing Page">Landing Page</option>
                  <option value="Site Vitrine">Site Vitrine</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="نظام الحجز">نظام الحجز الإلكتروني</option>
                  <option value="صيانة ودعم فني">الصيانة والدعم الفني</option>

                  <!-- Social Media -->
                  <option value="BUSINESS">BUSINESS (شبكات)</option>
                  <option value="PREMIUM">PREMIUM (شبكات)</option>
                  <option value="STARTER">STARTER (شبكات)</option>

                  <!-- Vidéo -->
                  <option value="مونتاج الفيديو">مونتاج الفيديو</option>
                  <option value="تصوير الفيديو">تصوير الفيديو</option>
                  <option value="تصوير + مونتاج">تصوير + مونتاج</option>
                  <option value="فيديو تعريفي">فيديو تعريفي</option>
                  <option value="تغطية الفعاليات (فيديو)">تغطية الفعاليات</option>

                  <!-- Sponsoring -->
                  <option value="7 أيام - 130 DT">إعلانات ممولة (7 أيام)</option>
                  <option value="14 يوم - 250 DT">إعلانات ممولة (14 يوم)</option>
                  <option value="30 يوم - 590 DT">إعلانات ممولة (30 يوم)</option>

                  <!-- Branding -->
                  <option value="تصميم منشور">تصميم منشور</option>
                  <option value="باقة 10 منشورات">باقة 10 منشورات</option>
                  <option value="Flyer">Flyer</option>
                  <option value="Catalogue PDF">Catalogue PDF</option>
                  <option value="Menu Restaurant">Menu Restaurant</option>
                  <option value="Logo Design">Logo Design</option>
                  <option value="الهوية البصرية">الهوية البصرية</option>

                  <!-- Print & Publicité -->
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

                  <!-- Photographie -->
                  <option value="جلسة تصوير لمدة ساعتين">جلسة تصوير (ساعتين)</option>
                  <option value="جلسة تصوير لمدة 4 ساعات">جلسة تصوير (4 ساعات)</option>
                  <option value="تصوير المنتجات">تصوير المنتجات</option>
                  <option value="تصوير المطاعم والمقاهي">تصوير المطاعم والمقاهي</option>
                  <option value="تغطية الفعاليات (تصوير)">تغطية الفعاليات (تصوير)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">رسالة إضافية</label>
                <textarea id="message" v-model="form.message" rows="4" placeholder="أي تفاصيل إضافية تود إخبارنا بها..."></textarea>
              </div>

              <button type="submit" class="submit-btn">تأكيد الموعد</button>
            </form>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  service: '',
  message: ''
})

const handleSubmit = () => {
  // Ici, vous pouvez envoyer les données à votre API ou les traiter
  console.log('Données du rendez-vous :', form)
  alert('تم تأكيد موعدك بنجاح! سنتواصل معك قريباً لتأكيد التفاصيل.')
  // Réinitialisation du formulaire
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.date = ''
  form.time = ''
  form.service = ''
  form.message = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@400;600;700;800&display=swap');

.infinity-site {
  --gold: #f8b101;
  --white: #ffffff;
  --gray-50: #f8fafc;
  --gray-100: #f1f5f9;
  --gray-200: #e2e8f0;
  --gray-600: #475569;
  --gray-700: #334155;
  --gray-800: #1e293b;
  font-family: 'Cairo', 'Tajawal', sans-serif;
  background: var(--white);
  color: var(--gray-800);
  direction: rtl;
  overflow-x: hidden;
  min-height: 100vh;
}

.wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

/* ═══ HERO RENDEZ-VOUS ═══ */
.rdv-hero {
  position: relative;
  background-image: url('../assets/hero-bg.png');
  background-size: cover;
  background-position: center;
  padding: 120px 0 80px;
  text-align: center;
  overflow: hidden;
}
.rdv-hero-overlay {
  position: absolute; inset: 0; z-index: 1;
  background: rgba(255, 255, 255, 0.75);
}
.glow {
  position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; z-index: 2;
}
.glow-1 { width: 500px; height: 500px; top: -100px; right: -50px; background: rgba(248, 177, 1, 0.12); }
.glow-2 { width: 300px; height: 300px; bottom: 0; left: -50px; background: rgba(248, 177, 1, 0.08); }
.rdv-hero-content {
  position: relative; z-index: 3;
}
.rdv-hero-title {
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--gray-800);
}
.gold-gradient {
  background: linear-gradient(to right, #f8b101, #e09d00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.rdv-hero-desc {
  font-size: 18px;
  color: var(--gray-700);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

/* ═══ SECTION RENDEZ-VOUS ═══ */
.rdv-section {
  padding: 80px 0;
  background: var(--white);
}
.rdv-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 50px;
  align-items: start;
}

/* ═══ COLONNE INFOS ═══ */
.info-col {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 20px;
  padding: 40px 30px;
}
.info-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}
.info-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 3px;
  background: var(--gold);
}
.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 15px;
  color: var(--gray-700);
}
.info-icon {
  font-size: 22px;
  flex-shrink: 0;
}
.info-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: var(--gray-800);
  margin-top: 30px;
  margin-bottom: 15px;
}
.hours {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14.5px;
  color: var(--gray-700);
}
.hours div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed var(--gray-200);
  padding-bottom: 6px;
}

/* ═══ COLONNE FORMULAIRE ═══ */
.form-col {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 20px;
  padding: 40px 30px;
}
.form-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 30px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 8px;
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--gray-800);
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--gold);
  background: #fff;
}
.submit-btn {
  background: var(--gold);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 20px rgba(248, 177, 1, 0.4);
  transition: all 0.3s ease;
  margin-top: 10px;
}
.submit-btn:hover {
  background: #e09d00;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(248, 177, 1, 0.6);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 900px) {
  .rdv-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>