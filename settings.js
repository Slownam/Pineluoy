// settings.js - isi sesuai kebutuhanmu

// domain panel (dipakai sebagai value query "domain" ke endpoint VSUNSEE)
window.Domain = 'https://pterodactyl.idstore.biz.id';   // <-- ISI tanpa protocol (atau bisa pake https://panel...)

// apikey ptero (apikey untuk panel, akan dikirim sebagai apikeyptero)
window.ptla = 'ptla_9zvvTw8oXQ1mwY6qQzImyKkEHtNoUirCZ9umbqOYgcy';

// capi key ptero (capikey untuk user/account, akan dikirim sebagai capikeyptero)
window.ptlc = 'ptlc_NlRH6nke3h1xYQuNOUGyzXZtnpdaR7IxIFkNCIlPYUe';

// default egg/nest/loc (tidak dipakai langsung oleh endpoint VSUNSEE tetapi tetap disimpan)
// kamu bisa kosongkan jika tidak perlu
window.egg = '15';
window.nestid = '1';
window.loc = '1';

// jika ingin endpoint meng-create dengan rootadmin=true, set ke true
window.rootadmin = false;

// (opsional) export untuk Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Domain: window.Domain,
    ptla: window.ptla,
    ptlc: window.ptlc,
    egg: window.egg,
    nestid: window.nestid,
    loc: window.loc,
    rootadmin: window.rootadmin
  };
}
