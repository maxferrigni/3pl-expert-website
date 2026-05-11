// nav-loader.js — loads shared nav and footer, sets active link + email mailto
(function() {

  var emailMap = {};  // all pages use solutions@3pl-expert.com

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
      var email = 'solutions@3pl-expert.com';
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
