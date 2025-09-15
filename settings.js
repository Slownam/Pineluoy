// settings.js - edit sesuai kebutuhanmu (WORKING)
window.Domain = 'https://pterodactyl.idstore.biz.id';       // domain panel (boleh pakai https://)
window.ptla   = 'ptla_9zvvTw8oXQ1mwY6qQzImyKkEHtNoUirCZ9umbqOYgcy'; // apikey ptero -> apikeyptero
window.ptlc   = 'ptlc_NlRH6nke3h1xYQuNOUGyzXZtnpdaR7IxIFkNCIlPYUe';     // capikey ptero -> capikeyptero

// default (boleh tetap atau kosong)
window.egg    = '15';
window.nestid = '1';
window.loc    = '1';

// jika perlu agar API membuat sebagai root admin
window.rootadmin = false;

// export optional untuk Node
if(typeof module !== 'undefined' && module.exports){
  module.exports = { Domain: window.Domain, ptla: window.ptla, ptlc: window.ptlc, egg: window.egg, nestid: window.nestid, loc: window.loc, rootadmin: window.rootadmin };
}