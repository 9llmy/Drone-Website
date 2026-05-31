موقع سليمان الغفيلي — التصوير الجوي والمونتاج
Sulaiman Alghofaili — Aerial Cinematography Website
=====================================================

هيكل المشروع (الطريقة الاحترافية):
  index.html        المحتوى فقط
  css/styles.css    التصميم والألوان
  js/config.js  ★   هنا تعدّل: الفيديوهات + لينكدإن + مجلد درايف
  js/main.js        المنطق البرمجي (لا تعدّله)

▶ كل تعديلاتك تكون في ملف واحد فقط:  js/config.js

كيف تفتح المشروع:
1. افتح المجلد في VS Code  (File > Open Folder).
2. للمعاينة: يمين على index.html > Open with Live Server.
   (مهم: استخدم Live Server وليس فتح الملف مباشرة،
    لأن تحميل مجلد درايف يحتاج تشغيل عبر خادم محلي.)

-----------------------------------------------------
إضافة الفيديوهات — افتح js/config.js
-----------------------------------------------------
الطريقة (أ) تلقائياً من مجلد درايف (مُفضّلة):
  - شارك المجلد: Anyone with the link (Viewer).
  - معرّف المجلد من الرابط:
      drive.google.com/drive/folders/THE_ID
  - مفتاح API مجاني من console.cloud.google.com
      (فعّل Google Drive API ثم أنشئ API key).
  - ضع القيمتين في:
      const DRIVE_FOLDER  = '';
      const DRIVE_API_KEY = '';

الطريقة (ب) يدوياً: عدّل القائمة  const WORKS = [
  لكل فيديو استخدم:  drive  أو  yt  أو  mp4

لينكدإن:  const LINKEDIN =
واتساب:   0569229533  (مربوط بكل الأزرار)

-----------------------------------------------------
الربط مع GitHub من VS Code:
  Source Control > Initialize Repository > Commit > Publish Branch.
النشر المجاني:  GitHub Pages  أو  Netlify  أو  Vercel.
