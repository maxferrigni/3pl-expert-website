// nav-loader.js — loads shared nav and footer, sets active link + email mailto
(function() {

  var emailMap = {
    'index.html':       'max+home@3pl-expert.com',
    'selection.html':   'max+selection@3pl-expert.com',
    'looking.html':     'max+looking@3pl-expert.com',
    'fixing.html':       'max+fixing@3pl-expert.com',
    'negotiating.html': 'max+negotiating@3pl-expert.com',
    
    'moving.html':       'max+moving@3pl-expert.com',
    'fighting.html':    'max+fighting@3pl-expert.com',
    'wms2.html':         'max+software@3pl-expert.com',
    'about.html':       'max+about@3pl-expert.com'
  };

  var page = window.location.pathname.split('/').pop() || 'index.html';

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
