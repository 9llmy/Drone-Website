export default async function handler(req, res) {
  const KEY = process.env.DRIVE_API_KEY;
  const FOLDER = process.env.DRIVE_FOLDER;

  if (!KEY || !FOLDER) {
    return res.status(500).json({
      error: 'Missing environment variables',
      detail: 'Set DRIVE_API_KEY and DRIVE_FOLDER in Vercel → Project → Settings → Environment Variables.'
    });
  }

  const params = new URLSearchParams({
    q: `'${FOLDER}' in parents and mimeType contains 'video/' and trashed = false`,
    key: KEY,
    fields: 'files(id,name,videoMediaMetadata(width,height))',
    pageSize: '1000',
    orderBy: 'name'
  });

  try {
    const r = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`);
    if (!r.ok) {
      const detail = await r.text();
      return res.status(r.status).json({ error: 'Google Drive API error', detail });
    }
    const data = await r.json();

    // return only what the site needs — never the key
    const files = (data.files || []).map(f => {
      const m = f.videoMediaMetadata || {};
      const vertical = m.width && m.height ? m.height > m.width : false;
      return {
        id: f.id,
        name: (f.name || '').replace(/\.[^.]+$/, ''),
        orientation: vertical ? 'v' : 'h'
      };
    });

    // cache at Vercel's edge for 10 min to limit Drive API calls
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=86400');
    return res.status(200).json({ files });
  } catch (e) {
    return res.status(500).json({ error: 'Request failed', detail: String(e) });
  }
}
