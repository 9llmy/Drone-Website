موقع سليمان الغفيلي — التصوير الجوي والمونتاج
Sulaiman Alghofaili — Aerial Cinematography Website
=====================================================

هيكل المشروع:
  index.html        المحتوى
  css/styles.css    التصميم
  js/config.js  ★   إعداداتك: الأعمال + لينكدإن + تفعيل درايف
  js/main.js        المنطق (لا تعدّله)
  api/videos.js     دالة خادم آمنة تقرأ مجلد درايف (المفتاح يبقى سرّياً)
  package.json      إعداد المشروع

=====================================================
🔒 الطريقة الآمنة (المفتاح لا يظهر في GitHub ولا المتصفح)
=====================================================
المفتاح يُحفظ في Vercel فقط كـ Environment Variable.
الموقع ينادي /api/videos، والدالة تقرأ المجلد بالمفتاح السرّي.

خطوات النشر على Vercel:
1) ارفع المشروع على GitHub (بدون أي مفتاح — config.js نظيف).
2) ادخل vercel.com > Add New > Project > اختر مستودع GitHub.
3) اتركه على الإعدادات الافتراضية (Vercel يكتشف /api تلقائياً) > Deploy.
4) بعد النشر:  Project > Settings > Environment Variables
   أضف متغيّرين:
     الاسم: DRIVE_API_KEY   القيمة: مفتاح Google السرّي
     الاسم: DRIVE_FOLDER    القيمة: 1Gv9z8J4lFedzyP2YcRTDwQRGiFiTGZ-b
   اختر البيئات (Production / Preview / Development) > Save.
5) أعد النشر:  Deployments > آخر نشر > ⋯ > Redeploy
   (لازم إعادة نشر حتى تُقرأ المتغيّرات الجديدة.)

شروط قوقل درايف:
- المجلد مشارَك: Anyone with the link (Viewer).
- مفتاح Google من console.cloud.google.com مع تفعيل "Google Drive API".

التجربة محلياً (VS Code):
- دالة /api لا تعمل مع Live Server العادي، فستظهر القائمة اليدوية WORKS.
- لتجربة الدالة محلياً:  npm i -g vercel  ثم  vercel dev
- أو ببساطة جرّبها مباشرة بعد النشر على Vercel.

=====================================================
بدون درايف (طريقة بديلة):
في js/config.js اجعل:  const USE_DRIVE_API = false;
ثم عدّل القائمة WORKS يدوياً (روابط drive / yt / mp4).

لينكدإن:  const LINKEDIN =
واتساب:   0569229533
