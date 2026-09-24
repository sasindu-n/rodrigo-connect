/**
 * Rodrigo Enterprises - Digital Showroom App Engine
 */
import { SHOWROOM_CONFIG } from './config.js';
import { TRANSLATIONS } from './i18n.js';

class DigitalShowroom {
  constructor() {
    this.currentLang = localStorage.getItem('rodrigo_lang') || 'en';
    this.init();
  }

  init() {
    this.setupLogos();
    this.setupLanguageSwitcher();
    this.applyTranslations(this.currentLang);
    this.setupLinks();
    this.setupCopyButtons();
  }

  setupLogos() {
    const rodrigoImg = document.getElementById('logo-rodrigo');
    const heroBadgeImg = document.getElementById('logo-hero-badge');

    const updateRodrigoLogo = () => {
      const logosRow = document.getElementById('brand-logos-row');
      const rodrigoSlot = document.getElementById('slot-rodrigo');
      const rodrigoVisible = rodrigoSlot && getComputedStyle(rodrigoSlot).display !== 'none';
      if (logosRow) {
        logosRow.style.display = rodrigoVisible ? 'flex' : 'none';
      }
    };

    const hideLogoSlot = (slotId, callback) => {
      document.getElementById(slotId)?.style.setProperty('display', 'none');
      callback?.();
    };

    if (rodrigoImg) {
      rodrigoImg.addEventListener('load', updateRodrigoLogo);
      rodrigoImg.addEventListener('error', () => hideLogoSlot('slot-rodrigo', updateRodrigoLogo));
    }

    if (heroBadgeImg) {
      heroBadgeImg.addEventListener('error', () => hideLogoSlot('slot-hero-badge'));
    }

    updateRodrigoLogo();
    setTimeout(updateRodrigoLogo, 150);
  }

  setupLanguageSwitcher() {
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.addEventListener('click', () => this.switchLanguage(button.dataset.lang));
    });
  }

  switchLanguage(lang) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    localStorage.setItem('rodrigo_lang', lang);
    this.applyTranslations(lang);
    this.updateDynamicLinks();
  }

  updateLanguageButtons() {
    const pill = document.querySelector('.lang-pill-indicator');
    const activeLang = TRANSLATIONS[this.currentLang] ? this.currentLang : 'en';

    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === activeLang);
    });

    pill?.classList.remove('pos-si', 'pos-ta');
    if (activeLang === 'si') {
      pill?.classList.add('pos-si');
    } else if (activeLang === 'ta') {
      pill?.classList.add('pos-ta');
    }

    document.documentElement.lang = activeLang;
  }

  applyTranslations(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    this.updateLanguageButtons();
    this.updateCopyLabels();
  }

  getWhatsAppUrl() {
    if (this.currentLang === 'si') return SHOWROOM_CONFIG.links.whatsappSi;
    if (this.currentLang === 'ta') return SHOWROOM_CONFIG.links.whatsappTa;
    return SHOWROOM_CONFIG.links.whatsappEn;
  }

  updateDynamicLinks() {
    // Update WhatsApp link language on language switch
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
      btnWhatsapp.href = this.getWhatsAppUrl();
    }
  }

  setupLinks() {
    // 1. WhatsApp
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
      btnWhatsapp.href = this.getWhatsAppUrl();
      btnWhatsapp.target = '_blank';
      btnWhatsapp.rel = 'noopener noreferrer';
    }

    // 2. Call Now
    const btnCall = document.getElementById('btn-call');
    if (btnCall) {
      btnCall.href = `tel:${SHOWROOM_CONFIG.contact.phoneTel}`;
    }

    // 3. Directions
    const btnDirections = document.getElementById('btn-directions');
    if (btnDirections) {
      btnDirections.href = SHOWROOM_CONFIG.links.directionsUrl;
      btnDirections.target = '_blank';
      btnDirections.rel = 'noopener noreferrer';
    }

    // 4. Google Review — hide cleanly if not yet configured
    const btnReview = document.getElementById('btn-review');
    if (btnReview) {
      if (SHOWROOM_CONFIG.links.googleReviewUrl) {
        btnReview.href = SHOWROOM_CONFIG.links.googleReviewUrl;
        btnReview.target = '_blank';
        btnReview.rel = 'noopener noreferrer';
      } else {
        btnReview.style.display = 'none';
      }
    }

    // 5. Facebook — hide cleanly if not yet configured
    const btnFacebook = document.getElementById('btn-facebook');
    if (btnFacebook) {
      if (SHOWROOM_CONFIG.links.facebookUrl) {
        btnFacebook.href = SHOWROOM_CONFIG.links.facebookUrl;
        btnFacebook.target = '_blank';
        btnFacebook.rel = 'noopener noreferrer';
      } else {
        btnFacebook.style.display = 'none';
      }
    }

    // 6. Instagram
    const btnInstagram = document.getElementById('btn-instagram');
    if (btnInstagram) {
      btnInstagram.href = SHOWROOM_CONFIG.links.instagramUrl;
      btnInstagram.target = '_blank';
      btnInstagram.rel = 'noopener noreferrer';
    }

    // 7. TikTok
    const btnTikTok = document.getElementById('btn-tiktok');
    if (btnTikTok) {
      btnTikTok.href = SHOWROOM_CONFIG.links.tiktokUrl;
      btnTikTok.target = '_blank';
      btnTikTok.rel = 'noopener noreferrer';
    }

    // 8. Email
    const btnEmail = document.getElementById('btn-email');
    if (btnEmail) {
      btnEmail.href = SHOWROOM_CONFIG.links.emailMailto;
    }
  }

  getText(key) {
    const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    return dict[key] || TRANSLATIONS.en[key] || key;
  }

  updateCopyLabels() {
    document.querySelectorAll('[data-copy]').forEach((button) => {
      if (button.classList.contains('copied')) return;
      button.setAttribute('aria-label', this.getText('copy_label'));
      button.title = this.getText('copy_label');
    });
  }

  async copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }

  showCopyToast() {
    const toast = document.querySelector('.copy-toast');
    if (!toast) return;

    toast.textContent = this.getText('copy_toast');
    toast.classList.add('visible');
    window.clearTimeout(this.copyToastTimer);
    this.copyToastTimer = window.setTimeout(() => {
      toast.classList.remove('visible');
    }, 1300);
  }

  setupCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach((button) => {
      let resetTimer = null;

      button.addEventListener('click', async () => {
        const value = button.getAttribute('data-copy');
        if (!value) return;

        try {
          await this.copyText(value);
          window.clearTimeout(resetTimer);
          button.classList.add('copied');
          button.setAttribute('aria-label', this.getText('copied_label'));
          button.title = this.getText('copied_label');
          this.showCopyToast();

          resetTimer = window.setTimeout(() => {
            button.classList.remove('copied');
            button.setAttribute('aria-label', this.getText('copy_label'));
            button.title = this.getText('copy_label');
          }, 1300);
        } catch (error) {
          button.setAttribute('aria-label', this.getText('copy_label'));
          button.title = this.getText('copy_label');
        }
      });
    });
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new DigitalShowroom();
});

