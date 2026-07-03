<template>
  <footer class="inf-footer" dir="rtl">
    <div class="footer-glow"></div>

    <div class="inf-grid">
      <!-- Brand -->
      <div class="brand-col">
        <div class="logo">
          <img src="../assets/logo.jpg" alt="Infinity" class="logo-img" />
          <div>
            <div class="logo-text">Infinity</div>
            <div class="logo-sub">وكالة إبداعية متكاملة</div>
          </div>
        </div>

        <p class="brand-desc">
          نحوّل الأفكار إلى تجارب تصنع الفرق. من الاستراتيجية والإبداع إلى التنفيذ والانطلاق،
          نصنع معاً مشاريع رقمية تترك أثراً حقيقياً.
        </p>

        <div class="socials">
          <a v-for="social in socials" :key="social.name" :href="social.url" :aria-label="social.name" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" v-html="social.icon"></svg>
          </a>
        </div>
      </div>

      <!-- Liens rapides -->
      <div class="col">
        <h4>روابط سريعة</h4>
        <ul>
          <li v-for="link in quickLinks" :key="link.label">
            <RouterLink v-if="link.to" :to="link.to">{{ link.label }}</RouterLink>
            <a v-else :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div class="col">
        <h4>خدماتنا</h4>
        <ul>
          <li v-for="service in servicesList" :key="service">
            <RouterLink to="/nos-services">{{ service }}</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="col">
        <h4>تواصل معنا</h4>

        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
          </svg>
          <a :href="`tel:${contact.phoneRaw}`" dir="ltr">{{ contact.phone }}</a>
        </div>

        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M4 4h16v16H4Z" />
            <path d="m4 5 8 7 8-7" />
          </svg>
          <a :href="`mailto:${contact.email}`" dir="ltr">{{ contact.email }}</a>
        </div>

        <div class="contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          <span>{{ contact.address }}</span>
        </div>

        <!-- Bloc cliquable vers Google Maps -->
        <a
          :href="contact.googleMapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="map-link-box"
          :title="`عرض ${contact.name} على الخريطة`"
        >
          <div class="map-box-content">
            <svg viewBox="0 0 24 24" fill="currentColor" class="map-pin-icon">
              <path
                d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
              />
            </svg>
            <span>افتح الموقع في خرائط Google</span>
          </div>
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div>© {{ currentYear }} Infinity. جميع الحقوق محفوظة</div>
      <div class="bottom-links">
        <RouterLink to="/privacy">سياسة الخصوصية</RouterLink>
        <RouterLink to="/terms">شروط الاستخدام</RouterLink>
        <RouterLink to="/sitemap">خريطة الموقع</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'InfinityFooter',
  data() {
    return {
      socials: [
        {
          name: 'فيسبوك',
          url: 'https://www.facebook.com/societeinfinity',
          icon: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>',
        },
        {
          name: 'انستغرام',
          url: 'https://www.instagram.com/societe.infinity?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
          icon: '<path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.2.4a4.4 4.4 0 0 1 1.6 1c.5.5.8 1 1 1.6.2.4.4 1.1.4 2.2.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.2a4.4 4.4 0 0 1-1 1.6 4.4 4.4 0 0 1-1.6 1c-.4.2-1.1.4-2.2.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.2-.4a4.4 4.4 0 0 1-1.6-1 4.4 4.4 0 0 1-1-1.6c-.2-.4-.4-1.1-.4-2.2C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.4-2.2a4.4 4.4 0 0 1 1-1.6 4.4 4.4 0 0 1 1.6-1c.4-.2 1.1-.4 2.2-.4C8.9 2 9.3 2 12 2Zm0 2.7A5.3 5.3 0 1 0 12 17.3 5.3 5.3 0 0 0 12 4.7Zm0 8.7a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8Zm5.5-8.9a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/>',
        },
        {
          name: 'تويتر',
          url: '#',
          icon: '<path d="M18.9 4h3l-6.6 7.6L23 20h-6.1l-4.8-6.3L6.6 20H3.5l7-8.1L2 4h6.3l4.3 5.8L18.9 4Zm-1 14.4h1.7L7.2 5.6H5.4l12.5 12.8Z"/>',
        },
      ],
      quickLinks: [
        { label: 'الرئيسية', to: '/' },
        { label: 'من نحن', to: '/qui-sommes-nous' },
        { label: 'خدماتنا', to: '/nos-services' },
        { label: 'معرض الأعمال', to: '/portfolio' },
        { label: 'المدونة', href: '#' },
        { label: 'آراء العملاء', to: '/avis' },
        { label: 'تواصل معنا', to: '/contact' },
      ],
      servicesList: [
        'إدارة التواصل الاجتماعي',
        'إنتاج الفيديو والموشن',
        'تصميم الهوية البصرية',
        'تطوير المواقع والتطبيقات',
        'الإعلانات الممولة',
        'التصوير الاحترافي',
        'الطباعة والمطبوعات',
        'الاستراتيجية التسويقية',
      ],
      contact: {
        phone: '+21692151505',
        phoneRaw: '+216 92 105 505',
        email: 'infinity.tunisia@gmail.com',
        address: 'طريق قابس كلم 1.4-مدنين، تونس, 4130',
        lat: 33.3636,
        lng: 10.4880,
        // Lien exact vers la fiche de votre agence
        googleMapsUrl: 'https://maps.app.goo.gl/6i2Gj6Tn7X41gr5ZA',
        name: 'INFINITY Marketing & Production',
      },
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');

.inf-footer {
  --gold: #f8b101;
  --gold-deep: #d49500;
  --gold-soft: rgba(248, 177, 1, 0.08);
  --bg-dark: #0b0b0b;
  --bg-card: #111111;
  --text-main: #e6e6e6;
  --text-dim: #999999;
  --line: rgba(248, 177, 1, 0.15);

  font-family: 'Tajawal', sans-serif;
  background: var(--bg-dark);
  color: var(--text-main);
  padding: 60px 6% 0;
  position: relative;
  overflow: hidden;
  direction: rtl;
}

.footer-glow {
  position: absolute;
  top: 0;
  left: 50%;
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  transform: translateX(-50%);
  opacity: 0.5;
}

.inf-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.2fr 1.2fr;
  gap: 40px;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 40px;
  position: relative;
  z-index: 2;
}

/* Brand */
.brand-col {
  padding-left: 10px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.logo-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--line);
  flex-shrink: 0;
}

.logo-text {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #ffffff;
  line-height: 1.2;
}

.logo-sub {
  font-size: 11px;
  font-weight: 500;
  color: var(--gold);
  letter-spacing: 1px;
  margin-top: 2px;
}

.brand-desc {
  font-size: 14px;
  line-height: 1.9;
  color: var(--text-dim);
  max-width: 300px;
  margin-bottom: 24px;
}

.socials {
  display: flex;
  gap: 12px;
}

.socials a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  text-decoration: none;
  transition: all 0.3s ease;
}

.socials a:hover {
  background: var(--gold);
  color: #0b0b0b;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(248, 177, 1, 0.3);
}

.socials svg {
  width: 16px;
  height: 16px;
}

/* Colonnes */
.col h4 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px;
  position: relative;
  padding-bottom: 12px;
}

.col h4::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 36px;
  height: 3px;
  background: var(--gold);
  border-radius: 2px;
}

.col ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.col li {
  margin-bottom: 12px;
}

.col a {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 13.5px;
  transition: color 0.25s ease, padding-right 0.25s ease;
  display: inline-block;
}

.col a:hover {
  color: var(--gold);
  padding-right: 6px;
}

/* Contact */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 13.5px;
  color: var(--text-dim);
}

.contact-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--gold);
}

.contact-item a,
.contact-item span {
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.25s;
}

.contact-item a:hover {
  color: var(--gold);
}

/* Bloc carte cliquable */
.map-link-box {
  display: block;
  margin-top: 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  text-decoration: none;
  overflow: hidden;
  transition: all 0.3s ease;
}

.map-link-box:hover {
  border-color: var(--gold);
  background: rgba(248, 177, 1, 0.06);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.map-box-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px 14px;
  color: var(--gold);
  font-size: 14px;
  font-weight: 600;
}

.map-pin-icon {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  color: var(--gold);
}

/* Barre du bas */
.footer-bottom {
  border-top: 1px solid var(--line);
  padding: 20px 0;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 13px;
  color: var(--text-dim);
  position: relative;
  z-index: 2;
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-links a {
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.25s;
}

.bottom-links a:hover {
  color: var(--gold);
}

@media (max-width: 900px) {
  .inf-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .bottom-links {
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .inf-grid {
    grid-template-columns: 1fr;
  }
  .brand-col {
    text-align: center;
    padding-left: 0;
  }
  .logo {
    justify-content: center;
  }
  .brand-desc {
    max-width: 100%;
  }
  .socials {
    justify-content: center;
  }
  .col h4::after {
    right: 50%;
    transform: translateX(50%);
  }
  .col ul {
    text-align: center;
  }
}
</style>