/* settings.js
   Konfigurasi frontend.
   - Letakkan file ini di folder login/create/admin atau di shared folder.
   - Ganti API_BASE sesuai alamat panel-api mu (contoh: 'http://152.42.204.241:3000' atau 'https://api.domain.com')
   - Jangan simpan token sensitif (ptla/ptlc/github pat) di file ini bila repo publik.
   - Untuk egg/nest/loc: pilih default yang akan dipakai create.html
*/
window.API_CONFIG = {
  // ganti sesuai environment / nginx
  API_BASE: 'http://152.42.204.241:3000',

  // Pterodactyl defaults (frontend only — actual token must be on server)
  PTERO_DOMAIN: 'https://pterodactyl.idstore.biz.id', // contoh
  PTLA: '',  // jangan isi di repo publik
  PTLC: '',  // jangan isi di repo publik

  // defaults untuk create (frontend fallback)
  EGG: 15,
  NESTID: 1,
  LOC: 1
};

// Helper: allow overriding per-browser (localStorage) without editing file
// Set local override (dev/testing):
// localStorage.setItem('panel_api_cfg', JSON.stringify({ api_base: 'http://127.0.0.1:3000' }));