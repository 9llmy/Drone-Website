<div align="center">

# 🚁 Aerial Cinematography Portfolio

### Professional Drone Photography & Video Editing — Sulaiman Alghofaili

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-brightgreen?style=for-the-badge)](https://drone-website-two.vercel.app)

[![HTML5](https://img.shields.io/badge/HTML5-Semantic-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Custom_Design-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com)
[![Google Drive](https://img.shields.io/badge/Google_Drive-API_v3-4285F4?logo=googledrive&logoColor=white)](https://developers.google.com/drive)
[![GACA Certified](https://img.shields.io/badge/GACA-Certified_Pilot-E8B44C)](https://www.gaca.gov.sa)
[![License](https://img.shields.io/badge/License-All_Rights_Reserved-red.svg)](LICENSE)

**A bilingual (Arabic / English) portfolio showcasing aerial drone cinematography, video editing, and advertising work.**

### 🚀 [Visit the Live Site →](https://drone-website-two.vercel.app)

</div>

---

## 🌟 Overview

A modern, cinematic portfolio website for a **GACA-certified drone operator** based in Al-Rass, Qassim, Saudi Arabia. It showcases aerial and ground video work for real estate, construction, events, and marketing — and lets clients explore services, pricing, and packages, then book instantly via WhatsApp.

The gallery handles **both horizontal (16:9) and vertical (9:16)** videos and can auto-load every clip from a single Google Drive folder — through a **secure serverless function** that keeps the API key entirely server-side.

---

## ✨ Features

- 🌍 **Bilingual Support** — Seamless Arabic & English with full RTL layout
- 🎬 **Mixed-Orientation Gallery** — Masonry layout for vertical reels and horizontal films
- 📂 **Auto Drive Sync** — Reads an entire Google Drive folder; new videos appear automatically
- 🔒 **Secure by Design** — API key stored as a Vercel environment variable, never in the code or browser
- 🧭 **Smart Filters** — Filter work by aerial / ground / vertical
- 🎥 **Multi-Source Playback** — Google Drive, YouTube, or direct MP4
- 🛡️ **GACA Credentials** — Verified remote-pilot license and registered aircraft on display
- 💸 **Services & Packages** — Transparent price list and three booking tiers
- 💬 **One-Tap Booking** — Pre-filled WhatsApp messages on every CTA
- 🌗 **Cinematic Dark Theme** — Golden-hour palette, film-grain texture, scroll animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop

---

## 📊 Project Highlights

| Metric | Value |
|--------|-------|
| 🪪 Certification | **GACA RPC-O-19237** (Open Category) |
| 🛩️ Aircraft | **DJI Mini 3 Pro** (Reg. KSA-259883) |
| 🧰 Experience | **7+ years** |
| 🌍 Languages | **2** (AR / EN) |
| 📦 Booking Packages | **3** tiers (450 / 650 / 950 SAR) |
| ⚡ Delivery | **24-hour** express option |

---

## 🏗️ Architecture

```
Browser (HTML / CSS / JS)
        │
        ▼
  /api/videos  ──▶  Vercel Serverless Function (Node)
                          │  (reads secret env vars)
                          ▼
              Google Drive API v3  ──▶  Public video folder
```

The browser never contacts Google directly and never receives the API key — it only calls the site's own `/api/videos` endpoint, which returns a clean list of videos.

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** — Semantic, accessible markup
- **CSS3** — Custom design system (CSS variables, masonry, animations)
- **Vanilla JavaScript** — No framework; lightweight and fast
- **Google Fonts** — Reem Kufi, Tajawal, Sora

### Backend
- **Vercel Serverless Functions** — Node.js endpoint that hides the API key
- **Google Drive API v3** — Folder listing & video metadata

### Deployment
- **Vercel** — Hosting, CDN, edge caching, and encrypted environment variables
- **GitHub** — Source control & CI

---

## 📂 Project Structure

```
drone-website/
├── index.html          # Main page (content only)
├── css/
│   └── styles.css       # Design system, layout, animations
├── js/
│   ├── config.js   ★    # Your settings: works, LinkedIn, Drive toggle
│   └── main.js          # App logic (gallery, filters, i18n)
├── api/
│   └── videos.js        # Secure serverless function (reads Drive folder)
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A Google account with a public Drive folder
- A Vercel account

### 1. Clone the repository
```bash
git clone https://github.com/9llmy/Drone-Website.git
cd Drone-Website
```

### 2. Run locally
```bash
# Static preview (gallery uses the manual fallback list):
#   open index.html with VS Code "Live Server"

# To test the serverless /api function locally:
npm i -g vercel
vercel dev
```

### 3. Configure your videos
Edit **`js/config.js`**:
- `USE_DRIVE_API = true` → auto-load from the Drive folder (via the secure function)
- `USE_DRIVE_API = false` → use the manual `WORKS` list (Drive / YouTube / MP4 links)
- Set your `LINKEDIN` URL

---

## ☁️ Deployment (Vercel)

1. Push the project to GitHub (the code contains **no secrets**).
2. On **Vercel** → *Add New → Project* → import the repo → **Deploy**.
3. Add **Environment Variables** in *Settings → Environment Variables*:

   | Key | Value | Sensitive |
   |-----|-------|-----------|
   | `DRIVE_API_KEY` | *your Google API key* | ✅ Yes |
   | `DRIVE_FOLDER` | `1Gv9z8J4lFwQRGiFiTGZ-b` | No |

4. **Redeploy** so the variables load.

> 🔒 The API key lives only inside Vercel's encrypted storage — it never appears in GitHub or in the browser. As defense-in-depth, restrict the key in Google Cloud Console to the **Drive API** and to your site's **domain**.

---

## 👤 About

**Sulaiman Alghofaili** — GACA-certified remote pilot specializing in aerial cinematography, ground videography, and professional video editing for real estate, construction, events, and marketing.

- 📍 **Location:** Al-Rass, Qassim, Saudi Arabia
- 💬 **WhatsApp:** 0569229533
- 🪪 **License:** GACA RPC-O-19237 (Open Category)

---

## 📜 License

This project is proprietary. **© 2026 Sulaiman Alghofaili — All Rights Reserved.** No part of the code, design, or media may be used, copied, or reused without prior written permission. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for capturing the world from above**

[🌐 Live Site](https://drone-website-two.vercel.app) • [📦 GitHub](https://github.com/9llmy/Drone-Website) • [💬 WhatsApp](https://wa.me/966569229533)

</div>
