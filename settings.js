// settings.js (WORKING) — isi sesuai permintaan user
// WARNING: file ini berisi token/API keys. Jangan dipublikasi tanpa backend/proxy.

// Pterodactyl panel (sesuai requestmu)
window.Domain = 'https://pterodactyl.idstore.biz.id';
window.ptla   = 'ptla_9zvvTw8oXQ1mwY6qQzImyKkEHtNoUirCZ9umbqOYgcy';
window.ptlc   = 'ptlc_NlRH6nke3h1xYQuNOUGyzXZtnpdaR7IxIFkNCIlPYUe.';

// Defaults (egg/nest/loc)
window.egg    = '15';
window.nestid = '1';
window.loc    = '1';
window.rootadmin = false;

// (optional) export for Node if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Domain: window.Domain, ptla: window.ptla, ptlc: window.ptlc,
    egg: window.egg, nestid: window.nestid, loc: window.loc, rootadmin: window.rootadmin
  };
}
