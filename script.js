var dot = document.getElementById('cur-dot'), ring = document.getElementById('cur-ring');
var winW = window.innerWidth, winH = window.innerHeight;
var mx = winW / 2, my = winH / 2, rx = mx, ry = my;

document.addEventListener('mousemove', function (e) { 
  mx = e.clientX; 
  my = e.clientY; 
  dot.style.transform = 'translate3d(' + (mx - 3) + 'px,' + (my - 3) + 'px, 0)'; 
});

(function ringLoop() { 
  rx += (mx - rx) * .1; 
  ry += (my - ry) * .1; 
  ring.style.transform = 'translate3d(' + (rx - 16) + 'px,' + (ry - 16) + 'px, 0)'; 
  requestAnimationFrame(ringLoop); 
})();

document.querySelectorAll('a,button,.mag-btn,.skill-tag,.project-card').forEach(function (el) { 
  el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); }); 
  el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); }); 
});

var pLine = document.getElementById('progressLine');
var bodyHeight = document.body.scrollHeight;
window.addEventListener('resize', function() {
  winW = window.innerWidth;
  winH = window.innerHeight;
  bodyHeight = document.body.scrollHeight;
});

window.addEventListener('scroll', function () {
  var pct = window.scrollY / (bodyHeight - winH) * 100;
  pLine.style.height = pct + '%';
}, { passive: true });

// ── Smart Header Logic ──────────────────────────────────────────────────
var nav = document.getElementById('mainNav');
var lastScroll = 0;
var heroHeight = winH * 0.8;

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
}, { passive: true });

function charReveal(el, text, baseDelay) { 
  el.innerHTML = ''; 
  text.split('').forEach(function (c, i) { 
    var s = document.createElement('span'); 
    s.className = 'char'; 
    s.textContent = c === ' ' ? '\u00a0' : c; 
    s.style.animationDelay = (baseDelay + i * .045) + 's'; 
    el.appendChild(s); 
  }); 
}
charReveal(document.getElementById('heroName1'), 'Toto', 0.3);

document.querySelectorAll('[data-magnetic]').forEach(function (btn) { 
  var inner = btn.querySelector('.mag-btn-inner'); 
  var r = null;
  btn.addEventListener('mouseenter', function() {
    r = btn.getBoundingClientRect();
  });
  btn.addEventListener('mousemove', function (e) { 
    if(!r) return;
    var x = e.clientX - r.left - r.width / 2; 
    var y = e.clientY - r.top - r.height / 2; 
    inner.style.transform = 'translate3d(' + (x * .28) + 'px,' + (y * .28) + 'px, 0)'; 
  }); 
  btn.addEventListener('mouseleave', function () { 
    inner.style.transform = 'translate3d(0,0,0)'; 
  }); 
});

var revealObs = new IntersectionObserver(function (entries) { 
  entries.forEach(function (e) { 
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Lazy load video if present
      var vid = e.target.querySelector('video[data-src]');
      if (vid) {
        vid.src = vid.getAttribute('data-src');
        vid.load();
        vid.removeAttribute('data-src');
      }
    }
  }); 
}, { threshold: .08 });
document.querySelectorAll('.reveal, .project-card').forEach(function (el) { revealObs.observe(el); });

document.querySelectorAll('a[href^="#"]').forEach(function (a) { 
  a.addEventListener('click', function (e) { 
    var href = a.getAttribute('href'); 
    if (href === '#') return; 
    var target = document.querySelector(href); 
    if (!target) return; 
    e.preventDefault(); 
    target.scrollIntoView({ behavior: 'auto' }); 
  }); 
});

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
