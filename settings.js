// settings.js - edit sesuai panelmu (versi WORKING)
window.Domain = 'https://pterodactyl.idstore.biz.id';  // tanpa slash akhir
window.ptla   = 'ptla_9zvvTw8oXQ1mwY6qQzImyKkEHtNoUirCZ9umbqOYgcy'; // Application API key
window.ptlc   = 'ptlc_NlRH6nke3h1xYQuNOUGyzXZtnpdaR7IxIFkNCIlPYUe';     // (opsional, tidak dipakai di flow ini)

// Konfigurasi default yang diperlukan (egg/nest/loc) — ubah sesuai panel
window.egg    = '15';   // egg id default (string atau angka)
window.nestid = '1';    // nest id
window.loc    = '1';    // location id

// (opsional) export untuk Node jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Domain: window.Domain, ptla: window.ptla, ptlc: window.ptlc, egg: window.egg, nestid: window.nestid, loc: window.loc };
}