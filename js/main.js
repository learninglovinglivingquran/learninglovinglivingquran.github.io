/* ==========================================================================
   LQ — Shared Site JS
   Every block below checks that its target elements exist before wiring up
   behavior, so this one file can be safely included on every page — pages
   that don't have a progress bar or filter tabs simply skip those blocks.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Nav burger / mobile menu ──
     Expects: button.nav-burger#navBurger, div.mobile-menu#mobileMenu */
  (function () {
    var burger = document.getElementById('navBurger');
    var menu   = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    function openMenu() {
      burger.classList.add('active');
      menu.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }
    function closeMenu() {
      burger.classList.remove('active');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }

    burger.addEventListener('click', function () {
      burger.classList.contains('active') ? closeMenu() : openMenu();
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  })();

  /* ── Reading progress bar ──
     Expects: #progress-bar (present on individual post/essay pages) */
  (function () {
    var bar = document.getElementById('progress-bar');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      var scrollTop  = window.scrollY;
      var docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    });
  })();

  /* ── Filter tabs ──
     Expects: a.filter-tab[data-filter] inside .filter-bar, and matching
     div.stage-group[data-stage] sections to show/hide. Used both for the
     hub page's top-level categories and a category page's sub-tracks
     (e.g. The Argument / The Signs). Supports deep-linking via #hash. */
  (function () {
    var tabs   = document.querySelectorAll('.filter-tab');
    var groups = document.querySelectorAll('.stage-group[data-stage]');
    if (!tabs.length || !groups.length) return;

    function applyFilter(filter) {
      tabs.forEach(function (t) {
        t.classList.toggle('active', t.dataset.filter === filter);
      });
      groups.forEach(function (group) {
        group.style.display = (filter === 'all' || group.dataset.stage === filter) ? '' : 'none';
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function (e) {
        e.preventDefault();
        applyFilter(tab.dataset.filter);
        history.replaceState(null, '', '#' + tab.dataset.filter);
      });
    });

    // Land on the right tab if arriving via a link like page.html#the-signs
    var initialHash = window.location.hash.replace('#', '');
    var validHashes = Array.prototype.map.call(tabs, function (t) { return t.dataset.filter; });
    if (initialHash && validHashes.indexOf(initialHash) !== -1) {
      applyFilter(initialHash);
    }
  })();

});
