/* ════════════════════════════════════════════════════════════
   ▼▼▼  1) أضف أعمالك هنا  /  ADD YOUR WORKS HERE  ▼▼▼
   لكل عمل استخدم مصدراً واحداً:  drive  أو  yt  أو  mp4
   اترك الثلاثة '' لتظهر الخانة فارغة (مع زر رفع للمعاينة).
   ════════════════════════════════════════════════════════════ */
const WORKS = [
  // مثال قوقل درايف:  drive:'https://drive.google.com/file/d/FILE_ID/view?usp=sharing'
  { type:'drone',  orientation:'h', title:'مشروع عقاري — جوي',      titleEn:'Real Estate — Aerial',   drive:'', yt:'', mp4:'' },
  { type:'drone',  orientation:'v', title:'ريلز موقع بناء',         titleEn:'Construction Reel',      drive:'', yt:'', mp4:'' },
  { type:'ground', orientation:'h', title:'تصوير منتج أرضي',        titleEn:'Product — Ground',       drive:'', yt:'', mp4:'' },
  { type:'drone',  orientation:'v', title:'ريلز فعالية',            titleEn:'Event Reel',             drive:'', yt:'', mp4:'' },
  { type:'ground', orientation:'v', title:'مقابلة عمودية',          titleEn:'Vertical Interview',     drive:'', yt:'', mp4:'' },
  { type:'drone',  orientation:'h', title:'استعراض أرض / مخطط',     titleEn:'Land Overview',          drive:'', yt:'', mp4:'' },
  { type:'ground', orientation:'h', title:'فيديو تسويقي',           titleEn:'Marketing Film',         drive:'', yt:'', mp4:'' },
  { type:'drone',  orientation:'v', title:'لقطة غروب جوية',         titleEn:'Aerial Sunset',          drive:'', yt:'', mp4:'' },
];

/* ▼▼▼  2) ضع رابط لينكدإن هنا  /  PUT YOUR LINKEDIN URL HERE  ▼▼▼ */
const LINKEDIN = 'https://www.linkedin.com/';   /* مثال: 'https://www.linkedin.com/in/your-name' */

/* رقم واتساب (لا تغيّره إلا لو تبي) */
const WA = '966569229533';

/* ▼▼▼  3) (اختياري) تحميل كل الفيديوهات تلقائياً من مجلد قوقل درايف  ▼▼▼
   ▼▼▼      AUTO-LOAD ALL VIDEOS FROM ONE GOOGLE DRIVE FOLDER          ▼▼▼

   لو عبّيت الحقلين التاليين، الموقع يقرأ المجلد ويعرض كل فيديوهاته
   تلقائياً (أي فيديو تضيفه للمجلد يظهر في الموقع بدون تعديل الكود).
   لو تركتهما فارغين، يستخدم القائمة اليدوية WORKS في الأعلى.

   الخطوات:
   1) في قوقل درايف: انقر يمين على المجلد > Share > "Anyone with the link" (Viewer).
   2) خذ معرّف المجلد من الرابط:
        https://drive.google.com/drive/folders/THIS_IS_THE_FOLDER_ID
   3) أنشئ مفتاح API مجاني:
        console.cloud.google.com  >  أنشئ مشروع  >  APIs & Services
        >  Enable APIs  >  فعّل "Google Drive API"
        >  Credentials  >  Create credentials  >  API key  >  انسخه.
      (يُفضّل تقييد المفتاح على Google Drive API وعلى رابط موقعك فقط.)

   الكشف التلقائي: العمودي/الأفقي يُحدّد من أبعاد الفيديو،
   و"جوي/أرضي" يُخمّن من اسم الملف (drone / جوي / aerial = جوي).
*/
const DRIVE_FOLDER  = '';   // معرّف مجلد قوقل درايف
const DRIVE_API_KEY = '';   // مفتاح Google API
/* ════════════════════════════════════════════════════════════ */
