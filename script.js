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
var cvData = {
  aiml: { title: 'Artificial Intelligence, ML Engineer', headline: 'Artificial Intelligence, ML Engineer Intern Candidate', summary: 'Computer Engineering, Artificial Intelligence student at HKUST with hands-on experience building production-level deep learning models, agentic Artificial Intelligence pipelines. Comfortable from dataset curation to deployment.', projects: [{ n: 'Artificial Intelligence-Generated Image Detector (CNN)', d: 'TensorFlow CNN, 94% validation accuracy, 5,000+ samples, dropout regularisation, confusion matrix evaluation.' }, { n: 'Strategic Game Artificial Intelligence (Minimax, Alpha-Beta)', d: '10,000+ board states/sec, custom heuristics for Connect4 and card games.' }, { n: 'Student Support Artificial Intelligence Agent (RAG)', d: 'Dify + RAG, 50+ vectorised pages, empathetic prompt engineering, privacy guards.' }, { n: 'Hot-Topic Automation', d: 'Local LLM via Ollama, sentiment analysis, 90% manual research reduction.' }], skills: 'Python, TensorFlow, RAG, Dify, n8n, Ollama, Prompt Engineering, MCP, AWS ML' },
  swe: { title: 'Software Engineer', headline: 'Software Engineer Intern Candidate', summary: 'Full-stack developer with experience across embedded C++, Python, cloud-integrated applications. Strong algorithmic foundations built through competitive game AI development.', projects: [{ n: 'AI Link-Saver, Summarizer', d: 'Cross-platform, LLM API, cloud-sync database, 100+ daily links handled.' }, { n: 'C++ PvE Combat Engine', d: 'OOP, state-machine combat, 10+ difficulty levels, no external libraries, memory-optimised.' }, { n: 'Minimax Game AI', d: '10,000+ board states/sec, alpha-beta pruning.' }, { n: 'Precision Line-Follower', d: 'Embedded C++, PID-inspired firmware, 90% precision on sharp-turn tracks.' }], skills: 'Python, C++, HTML/CSS, Arduino, Git' },
  pm: { title: 'Product Manager', headline: 'Product Manager Intern Candidate', summary: 'Technically literate product thinker who has led engineering teams, shipped cross-platform tools, managed stakeholder relationships from ideation to live deployment.', projects: [{ n: 'AI Link-Saver, Summarizer', d: 'Identified need, prototyped, shipped cross-platform productivity app.' }, { n: 'Sport Climbing Society Webpage', d: 'Directed Figma-to-code UI/UX overhaul for 200+ member organisation.' }, { n: 'Combat Bot Team Lead', d: 'Led 4-person team, managed build timeline, presented to judges.' }, { n: 'Student Support Agent', d: 'Defined requirements, iterated on UX, ensured privacy compliance.' }], skills: 'Figma, AI Prototyping, Prompt Engineering, Technical Presentation, Stakeholder Management, Git' },
  robotics: { title: 'Robotics, Embedded', headline: 'Robotics, Embedded Intern Candidate', summary: 'Hands-on robotics engineer with competition experience in Arduino embedded systems, C++ firmware, hardware-software co-design.', projects: [{ n: 'Combat Bot 1st Place', d: 'Led 4-man team. Arduino, custom mobile controller, fastest time across 20+ teams.' }, { n: 'Precision Line-Follower', d: 'IR sensor array, PID-inspired C++ firmware, 90% sharp-turn precision, circuit soldering.' }, { n: 'C++ PvE Combat Engine', d: 'Strong OOP, memory management critical for embedded contexts.' }], skills: 'C++, Arduino IDE, PID Control, IR Sensors, Circuit Soldering, Shapr3D' },
  bd: { title: 'Business Development', headline: 'Business Development Intern Candidate', summary: 'Relationship builder with proven experience securing corporate sponsorships, managing large communities, presenting to government bodies, industry partners.', projects: [{ n: 'HKUST Sport Climbing Society VP', d: '5 corporate sponsorships negotiated. LCSD, HKUST Sports Dept presentations. 25% membership growth.' }, { n: 'Lead Climbing Coach', d: '20+ students coached, 300+ entry client database, stakeholder coordination.' }, { n: 'Student Support Agent', d: 'Demonstrates product empathy, user-centric thinking.' }], skills: 'Sponsorship Negotiation, Public Speaking, Stakeholder Management, Excel, Technical Presentation' },
  climbing: { title: 'Sport Climbing Coach', headline: 'Sport Climbing Coach, Instructor', summary: 'Hong Kong National Climbing Team member with commercial coaching experience across lead, bouldering, top-rope disciplines.', projects: [{ n: 'Lead Climbing Coach', d: 'Customised programs for 20+ students. Biomechanics, safety, technique.' }, { n: 'HKUST Sport Climbing Society VP', d: '200+ member operations, competitions, training camps.' }, { n: 'National Team Athlete', d: 'Hong Kong National Climbing Team competitor.' }], skills: 'Lead Climbing, Bouldering Coaching, Belay Certification, Biomechanics, Program Design' },
  frontend: { title: 'Frontend Designer', headline: 'Frontend Designer, UI Engineer Intern', summary: 'UI-focused developer with strong design sensibility. Figma-to-code workflows, Framer animations, AI-augmented development.', projects: [{ n: 'Personal Portfolio', d: 'Cinematic scroll portfolio, mode-switching, CV generator.' }, { n: 'Sport Climbing Society Webpage', d: 'Figma overhaul to live code, responsive, Git-managed, GitHub Pages.' }, { n: 'AI Link-Saver', d: 'Cross-platform UI, cloud sync, mobile/desktop responsive.' }], skills: 'Framer, Figma, HTML/CSS, GitHub Pages, UI/UX' }
};
function buildHTML(k) { var d = cvData[k]; var projects = d.projects.map(function (p) { return '<p><strong>' + p.n + '</strong><br/><span style="color:#666;font-size:0.75rem">' + p.d + '</span></p>'; }).join(''); return '<h1>Lai Man To (Toto)</h1><h2>' + d.headline + '</h2><p style="font-size:0.72rem;color:#888;margin-bottom:1.2rem">tototofu0601@gmail.com &nbsp;|&nbsp; Hong Kong &nbsp;|&nbsp; github.com/tototofu123</p><h3>Summary</h3><p>' + d.summary + '</p><h3>Education</h3><p><strong>HKUST</strong>, BEng Computer Engineering, Artificial Intelligence (Expected 2027)</p><p style="color:#888;font-size:0.72rem">Data Structures &middot; AI Foundations &middot; Robotics &middot; Embedded Systems</p><h3>Projects</h3>' + projects + '<h3>Skills</h3><p>' + d.skills + '</p><h3>Leadership</h3><p><strong>VP, Team Captain</strong> at HKUST Sport Climbing Society (200+ members, 5 sponsorships)</p><p><strong>Lead Climbing Coach</strong> for 20+ students</p><p><strong>National Athlete</strong> with the Hong Kong National Climbing Team</p>'; }
function buildTxt(k) { var d = cvData[k]; var projects = d.projects.map(function (p) { return '- ' + p.n + '\n  ' + p.d; }).join('\n\n'); return 'LAI MAN TO (TOTO)\n' + d.headline + '\ntototofu0601@gmail.com | Hong Kong\n\nSUMMARY\n' + d.summary + '\n\nEDUCATION\nHKUST, BEng Computer Engineering, Artificial Intelligence (Expected 2027)\n\nPROJECTS\n' + projects + '\n\nSKILLS\n' + d.skills + '\n\nLEADERSHIP\n- VP, Team Captain at HKUST Sport Climbing Society\n- Lead Climbing Coach for 20+ students\n- National Athlete with Hong Kong National Climbing Team'; }
function buildMd(k) { var d = cvData[k]; var projects = d.projects.map(function (p) { return '### ' + p.n + '\n' + p.d; }).join('\n\n'); return '# Lai Man To (Toto)\n**' + d.headline + '**\n\ntototofu0601@gmail.com | Hong Kong | github.com/tototofu123\n\n## Summary\n' + d.summary + '\n\n## Education\n**HKUST**, BEng Computer Engineering, Artificial Intelligence *(Expected 2027)*\n\n## Projects\n' + projects + '\n\n## Skills\n' + d.skills + '\n\n## Leadership\n- **VP, Team Captain** at HKUST Sport Climbing Society\n- **Lead Climbing Coach** for 20+ students\n- **National Athlete** with the Hong Kong National Climbing Team'; }
function selectCV(key, btn) { document.querySelectorAll('.cv-variant-btn').forEach(function (b) { b.classList.remove('active'); }); btn.classList.add('active'); activeKey = key; document.getElementById('cvModalTitle').textContent = 'CV: ' + cvData[key].title; document.getElementById('cvPreview').innerHTML = buildHTML(key); document.getElementById('cvModal').classList.add('open'); }
function dl(content, name, type) { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([content], { type: type })); a.download = name; a.click(); }
function dlPDF() { window.print(); }
function dlTxt() { if (activeKey) dl(buildTxt(activeKey), 'LaiManTo_CV_' + activeKey + '.txt', 'text/plain'); }
function dlMd() { if (activeKey) dl(buildMd(activeKey), 'LaiManTo_CV_' + activeKey + '.md', 'text/markdown'); }
function emailCV() { if (!activeKey) return; var link = location.origin + location.pathname + '?cv=' + activeKey; location.href = 'mailto:?subject=Lai Man To\'s CV: ' + cvData[activeKey].title + '&body=' + encodeURIComponent(link); }
function copyLink() { if (!activeKey) return; var link = location.origin + location.pathname + '?cv=' + activeKey; navigator.clipboard.writeText(link).then(function () { var b = document.getElementById('copyBtn'); b.textContent = 'Copied'; b.classList.add('copied'); setTimeout(function () { b.textContent = 'Copy Link'; b.classList.remove('copied'); }, 2000); }); }
// ── CV Picker logic ─────────────────────────────────────────────────────
var picker = document.getElementById('cvPicker');
document.getElementById('openCvBtn').addEventListener('click', function (e) {
  e.stopPropagation();
  picker.classList.toggle('open');
});
document.querySelectorAll('.cv-picker-item').forEach(function (item) {
  item.addEventListener('click', function () {
    var key = item.getAttribute('data-cv');
    picker.classList.remove('open');
    // mirror the variant-btn active state in the CV section
    document.querySelectorAll('.cv-variant-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('onclick') && b.getAttribute('onclick').indexOf("'" + key + "'") !== -1);
    });
    document.getElementById('cvModalTitle').textContent = 'CV — ' + cvData[key].title;
    document.getElementById('cvPreview').innerHTML = buildHTML(key);
    activeKey = key;
    document.getElementById('cvModal').classList.add('open');
  });
});
document.addEventListener('click', function () { picker.classList.remove('open'); });
document.getElementById('closeCvBtn').addEventListener('click', function () { document.getElementById('cvModal').classList.remove('open'); });
document.getElementById('cvModal').addEventListener('click', function (e) { if (e.target === this) this.classList.remove('open'); });
document.querySelectorAll('.cv-picker-item').forEach(function (el) { el.addEventListener('mouseenter', function () { document.body.classList.add('hovering'); }); el.addEventListener('mouseleave', function () { document.body.classList.remove('hovering'); }); });
var params = new URLSearchParams(location.search), cvParam = params.get('cv');
if (cvParam && cvData[cvParam]) { activeKey = cvParam; setTimeout(function () { document.querySelectorAll('.cv-variant-btn').forEach(function (b) { if (b.getAttribute('onclick') && b.getAttribute('onclick').indexOf("'" + cvParam + "'") !== -1) b.classList.add('active'); }); document.getElementById('cvModalTitle').textContent = 'CV — ' + cvData[cvParam].title; document.getElementById('cvPreview').innerHTML = buildHTML(cvParam); document.getElementById('cvModal').classList.add('open'); }, 600); }
