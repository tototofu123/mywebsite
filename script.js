var dot = document.getElementById('cur-dot'), ring = document.getElementById('cur-ring');
var mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
(function ringLoop() { rx += (mx - rx) * .1; ry += (my - ry) * .1; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(ringLoop); })();
document.querySelectorAll('a,button,.mag-btn,.skill-tag,.project-card').forEach(function (el) { el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); }); el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); }); });
var pLine = document.getElementById('progressLine');
window.addEventListener('scroll', function () {
  var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  pLine.style.height = pct + '%';
});

// ── Smart Header Logic ──────────────────────────────────────────────────
var nav = document.getElementById('mainNav');
var lastScroll = 0;
var heroHeight = window.innerHeight * 0.8;

window.addEventListener('scroll', function () {
  var currentScroll = window.scrollY;

  if (currentScroll > heroHeight) {
    nav.classList.add('visible');
    if (currentScroll > lastScroll && currentScroll > heroHeight + 100) {
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
  } else {
    nav.classList.remove('visible');
  }
  lastScroll = currentScroll;
});
function charReveal(el, text, baseDelay) { el.innerHTML = ''; text.split('').forEach(function (c, i) { var s = document.createElement('span'); s.className = 'char'; s.textContent = c === ' ' ? '\u00a0' : c; s.style.animationDelay = (baseDelay + i * .045) + 's'; el.appendChild(s); }); }
charReveal(document.getElementById('heroName1'), 'Toto', 0.3);
document.querySelectorAll('[data-magnetic]').forEach(function (btn) { var inner = btn.querySelector('.mag-btn-inner'); btn.addEventListener('mousemove', function (e) { var r = btn.getBoundingClientRect(); var x = e.clientX - r.left - r.width / 2; var y = e.clientY - r.top - r.height / 2; inner.style.transition = 'transform 0.1s ease'; inner.style.transform = 'translate(' + (x * .28) + 'px,' + (y * .28) + 'px)'; }); btn.addEventListener('mouseleave', function () { inner.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'; inner.style.transform = 'translate(0,0)'; }); });
var revealObs = new IntersectionObserver(function (entries) { entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });
var panel = document.getElementById('pagePanel');
document.querySelectorAll('a[href^="#"]').forEach(function (a) { a.addEventListener('click', function (e) { var href = a.getAttribute('href'); if (href === '#') return; var target = document.querySelector(href); if (!target) return; e.preventDefault(); target.scrollIntoView({ behavior: 'auto' }); }); });
// ── CV Picker logic ─────────────────────────────────────────────────────
var picker = document.getElementById('cvPicker');
if (picker) {
  var openCvBtn = document.getElementById('openCvBtn');
  if (openCvBtn) {
    openCvBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      picker.classList.toggle('open');
    });
  }
  document.addEventListener('click', function () { picker.classList.remove('open'); });
  document.querySelectorAll('.cv-picker-item').forEach(function (el) {
    el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); });
    el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); });
  });
}
