// nav-loader.js — loads shared nav and footer, sets active link + email mailto
(function() {

  var emailMap = {
    'index2.html':       'max+home@3pl-expert.com',
    'selection2.html':   'max+selection@3pl-expert.com',
    'problems2.html':    'max+problems@3pl-expert.com',
    'negotiation2.html': 'max+negotiation@3pl-expert.com',
    'onboarding2.html':  'max+onboarding@3pl-expert.com',
    'leaving2.html':     'max+leaving@3pl-expert.com',
    'fighting2.html':    'max+fighting@3pl-expert.com',
    'wms2.html':         'max+software@3pl-expert.com',
    'about2.html':       'max+about@3pl-expert.com'
  };

  var page = window.location.pathname.split('/').pop() || 'index2.html';

  // Load NAV
  fetch('/includes/nav.html')
    .then(function(r) { return r.text(); })
    .then(function(html) {
      var el = document.getElementById('main-nav');
      if (!el) return;
      el.innerHTML = html;

      // Set active link based on current page
      var links = el.querySelectorAll('.mb-nav a');
      links.forEach(function(a) {
        if (a.getAttribute('href') === '/' + page) {
          a.classList.add('active');
        }
      });

      // Set email button
      var email = emailMap[page] || 'max@3pl-expert.com';
      var btn = el.querySelector('#nav-email-btn');
      if (btn) btn.href = 'mailto:' + email + '?subject=3PL%20Consultation%20Request';
    });

  // Load FOOTER
  fetch('/includes/footer.html')
    .then(function(r) { return r.text(); })
    .then(function(html) {
      var el = document.getElementById('main-footer');
      if (el) el.innerHTML = html;
    });

})();
