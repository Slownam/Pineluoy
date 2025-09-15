// settings.js - default values (dipakai jika admin tidak mengganti via admin.html)
window.Domain = 'https://pterodactyl.idstore.biz.id';    // isi panelmu
window.ptla   = 'ptla_9zvvTw8oXQ1mwY6qQzImyKkEHtNoUirCZ9umbqOYgcy';
window.ptlc   = 'ptlc_NlRH6nke3h1xYQuNOUGyzXZtnpdaR7IxIFkNCIlPYUe';
window.egg    = '15';
window.nestid = '1';
window.loc    = '1';
window.rootadmin = false;

// optional export for Node
if(typeof module !== 'undefined' && module.exports){
  module.exports = { Domain: window.Domain, ptla: window.ptla, ptlc: window.ptlc, egg: window.egg, nestid: window.nestid, loc: window.loc, rootadmin: window.rootadmin };
}