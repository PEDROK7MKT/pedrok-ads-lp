/* PK7 · medição e WhatsApp, num lugar só para todas as páginas do site.
   Para ligar a medição, preencha os dois IDs abaixo (e só aqui):
   ga4: 'G-XXXXXXXXXX'   ·   metaPixel: '1234567890123456' */
window.PK7_TRACKING = window.PK7_TRACKING || { ga4: '', metaPixel: '' };
(function () {
  if (window.__pk7) return; window.__pk7 = 1;
  var T = window.PK7_TRACKING, tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  function ready(f) { if (document.readyState !== 'loading') f(); else document.addEventListener('DOMContentLoaded', f); }
  // visitante na Europa: o WhatsApp abre no número da Holanda
  ready(function () {
    if (tz.indexOf('Europe/') !== 0) return;
    document.querySelectorAll('a[href*="wa.me/5562993684568"]').forEach(function (a) { a.href = a.href.replace('wa.me/5562993684568', 'wa.me/31685412747'); });
  });
  if (T.ga4) {
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + T.ga4; document.head.appendChild(s);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', T.ga4);
  }
  if (T.metaPixel) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', T.metaPixel); fbq('track', 'PageView');
  }
  // lead = clique no WhatsApp, com a página de origem
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href*="wa.me/"]'); if (!a) return;
    var pg = location.pathname;
    if (window.gtag) gtag('event', 'generate_lead', { method: 'whatsapp', page_path: pg });
    if (window.fbq) fbq('track', 'Contact', { content_name: pg });
  }, true);
})();
