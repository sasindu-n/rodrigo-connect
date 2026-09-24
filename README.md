# Rodrigo Enterprises — Premium QR Digital Showroom (Version 1)

An authorized Hero MotoCorp motorcycle dealership mobile-first digital showroom landing page for **Rodrigo Enterprises**, Kaduwela, Sri Lanka.

Designed specifically for showroom table QR code scans on mobile devices (360px – 430px) with an automotive obsidian & Hero red design aesthetic, instant English/Sinhala switching, and direct customer conversion actions.

---

## 📁 Project Structure

```
Social Media go/
├── index.html               # Semantic, mobile-first showroom landing page
├── assets/
│   ├── css/
│   │   ├── variables.css    # Design tokens (Hero red, automotive darks, fonts, shadows)
│   │   ├── main.css         # Reset, mobile container, Sinhala typography rules
│   │   └── components.css   # Hero card, VIP action tiles, social cards, details, modal
│   ├── js/
│   │   ├── config.js        # Centralized business contacts & external link configurations
│   │   ├── i18n.js          # Bilingual dictionary (English & Sinhala)
│   │   └── app.js           # Engine for language switcher, dynamic links & notices
│   └── images/
│       ├── rodrigo-logo.png # (Place your real Rodrigo Enterprises logo here)
│       └── hero-logo.png    # (Place your real Hero MotoCorp logo here)
└── README.md
```

---

## 🏍️ Verified Business Information Configured

* **Dealership Name**: Rodrigo Enterprises
* **Status**: Authorized Hero Motorcycle Dealer
* **Location**: Kaduwela, Sri Lanka
* **Address**: 137/B, Awissawella Road, Hewagama, Kaduwela
* **Phone**: `076 276 88 88` (`tel:+94762768888`)
* **WhatsApp**: `076 276 88 88` (`https://wa.me/94762768888`) with pre-filled English & Sinhala greetings
* **Email**: `rodrigoenterpises00@gmail.com`
* **Instagram**: `https://www.instagram.com/rodrigoenterprises`
* **TikTok**: `https://www.tiktok.com/@rodrigo.enterpris`
* **Google Maps Directions**: Direct navigation targeting `137/B, Awissawella Road, Hewagama, Kaduwela`

---

## 🔗 Configurable External Links (To Be Updated by You)

In [assets/js/config.js](file:///c:/Users/Admin/OneDrive%20-%20KBSL%20Information%20Technologies%20Limited/Desktop/Social%20Media%20go/assets/js/config.js), the following links are kept configurable:

1. **Facebook Page URL**:
   ```javascript
   facebookUrl: "", // Paste your official Facebook page URL here
   ```
2. **Google Review URL**:
   ```javascript
   googleReviewUrl: "", // Paste your official Google Review URL here
   ```
3. **Google Business Profile URL**:
   ```javascript
   googleBusinessProfileUrl: "", // Paste your official Google profile URL here
   ```

*When any of these URLs are empty, clicking them in the showroom opens a graceful notice informing the customer that the official link will be updated shortly, avoiding broken or generic redirects.*

---

## 🖼️ How to Add Your Official Logos

Place your original image files directly into the `assets/images/` directory:
1. `assets/images/rodrigo-logo.png` — Your original Rodrigo Enterprises logo.
2. `assets/images/hero-logo.png` — Your original Hero MotoCorp logo.

The page automatically displays them with strict aspect-ratio preservation and high-DPI clarity. If the files are not yet in the folder, clean typographic badges appear automatically so nothing looks broken.

---

## 🚀 Running Locally

You can run the project locally using Python's built-in HTTP server:

```powershell
python -m http.server 8080
```

Then open your browser and navigate to:
```
http://localhost:8080
```

---

## 🌐 Deployment Instructions

Because this is a high-speed, zero-dependency static web application, it can be deployed in seconds with zero build steps to any hosting platform:

### 1. Vercel / Netlify
* Simply drag and drop the folder, or connect your Git repository.
* Build command: *(leave empty)*
* Publish directory: `./`

### 2. GitHub Pages
1. Initialize git: `git init`
2. Push to GitHub.
3. In GitHub repo settings, navigate to **Pages** and select `Branch: main`, `Folder: / (root)`.

---

## 📱 Features Included in Version 1
* **Pure Mobile First**: Engineered for 360px – 430px smartphone screens, centered cleanly on larger screens.
* **Instant Bilingual Toggle**: Seamless transition between English and authentic Sinhala without page reloads. Remembers user choice with `localStorage`.
* **Hero MotoCorp Cockpit Aesthetic**: Dark obsidian slate, subtle Hero Red glow accents, frosted glass cards (`backdrop-filter: blur()`).
* **Sub-50KB Lightweight Weight**: Instant load times on mobile 4G/cellular.
