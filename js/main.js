
const tEl = el => document.documentElement.lang === 'en'
  ? (el.titleEn || el.title) : el.title;

// extract IDs / build embed for any source type
function ytId(v){
  if(!v) return '';
  const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{6,})/);
  return m ? m[1] : v.trim();
}
function driveId(v){
  if(!v) return '';
  const m = v.match(/\/d\/([\w-]+)/) || v.match(/[?&]id=([\w-]+)/);
  return m ? m[1] : v.trim();
}
function hasSource(w){ return !!(w.drive || w.yt || w.mp4); }
function embedFor(w){
  if(w.drive) return `<iframe src="https://drive.google.com/file/d/${driveId(w.drive)}/preview" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  if(w.yt)    return `<iframe src="https://www.youtube.com/embed/${ytId(w.yt)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
  if(w.mp4)   return `<video src="${w.mp4}" controls autoplay playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000"></video>`;
  return '';
}

// build gallery
const gallery = document.getElementById('gallery');

function buildCard(w){
  const card = document.createElement('div');
  card.className = 'work ' + w.orientation;
  card.dataset.type = w.type;
  card.dataset.or = w.orientation;
  const tagTxtAr = w.type==='drone' ? 'تصوير جوي' : 'تصوير أرضي';
  const tagTxtEn = w.type==='drone' ? 'AERIAL' : 'GROUND';
  const filled = hasSource(w);
  card.innerHTML = `
    <div class="frame">
      <div class="poster"><div class="sky"></div><div class="ridge"></div>
        <div class="play"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        ${filled ? '' : `<div class="empty-tag">
            <div data-ar="أضف رابط الفيديو في الكود" data-en="Add the video link in the code">أضف رابط الفيديو في الكود</div>
            <label class="up-btn"><input type="file" accept="video/*" hidden>
              <span data-ar="أو ارفع من جهازك (معاينة)" data-en="Or upload from device (preview)">أو ارفع من جهازك (معاينة)</span>
            </label>
          </div>`}
      </div>
    </div>
    <div class="meta">
      <b data-ar="${w.title}" data-en="${w.titleEn||w.title}">${w.title}</b>
      <span class="tag ${w.type}" data-ar="${tagTxtAr}" data-en="${tagTxtEn}">${tagTxtAr}</span>
    </div>`;

  const frame = card.querySelector('.frame');

  // click poster -> play hosted source
  card.querySelector('.poster').addEventListener('click', e=>{
    if(e.target.closest('.up-btn')) return;     // don't trigger when using uploader
    if(!filled) return;
    frame.innerHTML = embedFor(w);
  });

  // local file -> preview only (does NOT persist after refresh / on a deployed site)
  const fileInput = card.querySelector('input[type=file]');
  if(fileInput){
    fileInput.addEventListener('change', ev=>{
      const file = ev.target.files[0]; if(!file) return;
      const url = URL.createObjectURL(file);
      frame.innerHTML = `<video src="${url}" controls autoplay playsinline style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000"></video>`;
    });
  }
  return card;
}

function applyLangTo(root, lang){
  root.querySelectorAll('[data-ar]').forEach(el=>{
    const val = el.getAttribute('data-'+lang);
    if(val!==null) el.textContent = val;
  });
}

function renderWorks(list){
  gallery.innerHTML = '';
  list.forEach(w=> gallery.appendChild(buildCard(w)));
  // localize the freshly built cards for the current language
  applyLangTo(gallery, document.documentElement.lang || 'ar');
  // keep the active filter applied
  const active = document.querySelector('.filter.active');
  if(active) applyFilter(active.dataset.f);
}

// guess category from a filename
function guessType(name){
  return /drone|جوي|aerial|fly|air|سماء|طيار/i.test(name||'') ? 'drone' : 'ground';
}

// Auto-load videos via our own serverless function (/api/videos).
// The Google API key stays SECRET on the server (Vercel env var) —
// it is never sent to the browser and never committed to GitHub.
async function loadDriveFolder(){
  const res = await fetch('/api/videos');
  if(!res.ok) throw new Error('api error ' + res.status);
  const data = await res.json();
  const files = data.files || [];
  if(!files.length) throw new Error('no videos found');
  return files.map(f=>({
    type: guessType(f.name),
    orientation: f.orientation || 'h',
    title: f.name, titleEn: f.name,
    drive: f.id, yt:'', mp4:''
  }));
}

// choose source: secure Drive function if enabled, else manual WORKS
if(typeof USE_DRIVE_API !== 'undefined' && USE_DRIVE_API){
  renderWorks(WORKS); // show fallback instantly while videos load
  loadDriveFolder()
    .then(driveWorks => renderWorks(driveWorks))
    .catch(err => { console.warn('Drive load failed, using manual list:', err); renderWorks(WORKS); });
} else {
  renderWorks(WORKS);
}

// filters
function applyFilter(f){
  document.querySelectorAll('.work').forEach(c=>{
    const show = f==='all' || c.dataset.type===f || c.dataset.or===f;
    c.style.display = show ? '' : 'none';
  });
}
document.getElementById('filters').addEventListener('click', e=>{
  const b = e.target.closest('.filter'); if(!b) return;
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  applyFilter(b.dataset.f);
});

// marquee
const items = {
  ar:['التصوير الجوي بالدرون','المونتاج الاحترافي','تصوير أرضي','فيديو عمودي وأفقي','تسليم خلال 24 ساعة','معتمد من GACA','جودة سينمائية 4K'],
  en:['Aerial Drone Footage','Pro Video Editing','Ground Photography','Vertical & Horizontal','24h Delivery','GACA Certified','Cinematic 4K']
};
function buildMarquee(lang){
  const m = document.getElementById('marquee');
  const set = items[lang].map(t=>`<span>${t}</span>`).join('');
  m.innerHTML = set + set + set;
}

// whatsapp + linkedin links
function waLink(msg){ return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`; }
const lang0 = 'ar';
document.getElementById('navCta').href = waLink('السلام عليكم، أرغب بحجز خدمة تصوير جوي 🚁');
document.getElementById('heroWa').href = waLink('السلام عليكم، أرغب بالاستفسار عن خدمات التصوير الجوي');
document.getElementById('waMain').href = waLink('السلام عليكم، أرغب بالتواصل بخصوص مشروعي');
document.getElementById('liMain').href = LINKEDIN;
document.querySelectorAll('.pkg-cta').forEach(a=>{
  a.href = waLink(`السلام عليكم، أرغب بحجز "${a.dataset.pkg}" 🚁`);
});

// language toggle
function setLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==='ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-ar]').forEach(el=>{
    const val = el.getAttribute('data-'+lang);
    if(val===null) return;
    if(/<em>|<\/em>/.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });
  document.getElementById('langBtn').textContent = lang==='ar' ? 'EN' : 'AR';
  buildMarquee(lang);
}
document.getElementById('langBtn').addEventListener('click', ()=>{
  setLang(document.documentElement.lang==='ar' ? 'en' : 'ar');
});
setLang('ar');

// nav scrolled state
const hdr = document.getElementById('hdr');
addEventListener('scroll', ()=> hdr.classList.toggle('scrolled', scrollY>40));

// reveal on scroll
const io = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
