// settings.js (WORKING) — isi sesuai permintaan user
// WARNING: file ini berisi token/API keys. Jangan dipublikasi tanpa backend/proxy.

window.GITHUB_OWNER  = 'Slownam'; // isi di admin/localStorage jika perlu
window.GITHUB_REPO   = 'Pineluoy'; // isi di admin/localStorage jika perlu
window.GITHUB_PATH   = 'database.json';
window.GITHUB_BRANCH = 'main';

// <-- GitHub PAT yang kamu kirim (fine-grained or classic) -->
window.GITHUB_TOKEN  = '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';

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
    GITHUB_OWNER: window.GITHUB_OWNER,
    GITHUB_REPO: window.GITHUB_REPO,
    GITHUB_PATH: window.GITHUB_PATH,
    GITHUB_BRANCH: window.GITHUB_BRANCH,
    GITHUB_TOKEN: window.GITHUB_TOKEN,
    Domain: window.Domain, ptla: window.ptla, ptlc: window.ptlc,
    egg: window.egg, nestid: window.nestid, loc: window.loc, rootadmin: window.rootadmin
  };
}