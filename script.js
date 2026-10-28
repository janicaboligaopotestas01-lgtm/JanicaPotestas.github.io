/* ===== EDIT YOUR DETAILS HERE ===== */
const ME = {
  first: "JANICA", last: "Potestas",
  role: "Executive Virtual Assistant & Web Designer",
  about: "I'm Janica, an Executive Virtual Assistant who helps busy clients and business owners carry a heavy daily workload. From managing inboxes and calendars to preparing documents, data entry and research, I keep your tasks organized, on schedule and off your plate.",
  address: "Davao del Sur, Philippines",
  mapUrl: "https://www.google.com/maps/place/Pacquiao+Boxing+Gym/@6.7514655,125.3531988,18z/data=!4m10!1m2!2m1!1sCabrillos,+MP+gym!3m6!1s0x32f9b0fbce031b3b:0x7f00f16c2632cfe6!8m2!3d6.7514655!4d125.3545385!15sChFDYWJyaWxsb3MsIE1QIGd5bZIBA2d5beABAA!16s%2Fg%2F11g8g3s70g?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  education: [
    { level: "College", school: "Davao del Sur State College University", detail: "BS Information System (2025 - 2026)" }
  ],
  email: "janicaboligaopotestas01@gmail.com",
  whatsapp: "639913640980",              // 09913640980 in international format
  telegram: "janicapotestas",
  facebookUrl: "https://www.facebook.com/janica.potestas.2025",

  // WEB DESIGN SAMPLE: paste the link of your website here. It is shown in a browser frame in Skills.
  websiteUrl: " https://janicaboligaopotestas01-lgtm.github.io/JanicaPotestas.github.io/",

  // GRAPHIC DESIGN SAMPLES (optional): put files in an "images" folder and type the names, or click a frame to upload.
  photos: { gfx1: "red.png", gfx2: "white.png", gfx3: "blue.png", gfx4: "black.png" },

  // SAMPLE WORK LINKS: paste your links between the quotes.
  samples: [
    { title: "Spreadsheet", desc: "Sample spreadsheet", url: "https://docs.google.com/spreadsheets/d/1alhvywOzQc3VGNWO2X_m1QdzXdlXaTkvnlHrNP6wD0M/edit?gid=0#gid=0" },
    { title: "Report", desc: "Sample report", url: "https://docs.google.com/document/d/14ESuy7wqkWG3bOXPGSKpnrKL0YR2G6OeQoUZw7UYi7Y/edit?tab=t.0" },
    { title: "Blogs", desc: "Sample post blog", url: "https://lnkd.in/p/g9Cze2hZ" },
    { title: "Project management",desc: "Sample project management", url: "https://app.clickup.com/1300420000008258/dashboards/14yq6g2hj22-136" }
  ],

  tools: ["Google Workspace", "Microsoft Office", "ClickUp", "Trello", "WhatsApp", "Telegram", "Canva", "CapCut", "LinkedIn"],
  workflow: [
    ["Understand & Communicate", "Discuss the client's goals, expectations, priorities, deadlines, and preferred communication methods."],
    ["Organize & Prioritize", "Review emails, appointments, and pending tasks. Identify urgent responsibilities and organize everything into a clear task list or tracker."],
    ["Plan the Daily Workflow", "Schedule appointments, set reminders, track deadlines, and allocate time for each task using tools such as Google Calendar and ClickUp."],
    ["Execute & Manage Tasks", "Handle administrative work, prepare documents, update spreadsheets, conduct research, manage inboxes, and create marketing materials as requested."],
    ["Review & Quality Check", "Check completed work for accuracy, completeness, proper formatting, and compliance with the client's instructions before submission."],
    ["Report & Follow Up", "Send progress updates, report completed tasks, flag pending items or blockers, and confirm the next priorities with the client."]
  ]
};
/* =================================== */
const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const toast = t => { const e = $('#toast'); e.textContent = t; e.classList.add('show'); setTimeout(() => e.classList.remove('show'), 3800); };

// Fill in text
$$('[data-b]').forEach(el => el.textContent = ME[el.dataset.b]);
document.title = ME.first + ' ' + ME.last + ' | Portfolio';
$('#edu').innerHTML = ME.education.map(e => `<div><b>${e.level}</b>${e.school}<br>${e.detail}</div>`).join('');
$('#map').href = ME.mapUrl;
$('#mailLink').href = 'mailto:' + ME.email; $('#mailLink').textContent = ME.email;
$('#waLink').href = 'https://wa.me/' + ME.whatsapp; $('#waLink').textContent = '+' + ME.whatsapp;
$('#tgLink').href = 'https://t.me/' + ME.telegram; $('#tgLink').textContent = '@' + ME.telegram;
$('#fbLink').href = ME.facebookUrl; $('#fbLink').textContent = 'Janica Potestas';
$('#socials').innerHTML = [['Facebook', ME.facebookUrl], ['Telegram', 'https://t.me/' + ME.telegram], ['WhatsApp', 'https://wa.me/' + ME.whatsapp]].map(x => `<a class="pill" href="${x[1]}" target="_blank" rel="noopener">${x[0]}</a>`).join('');
$('#yr').textContent = new Date().getFullYear();

// Build portfolio frames
$('#g2').innerHTML = [1,2,3,4].map(i => `<div><div class="slot" data-slot="gfx${i}" data-hint="Attach your design"></div><div class="cap"><b>Sample work ${i}</b>Graphic design</div></div>`).join('');
$('#toolgrid').innerHTML = ME.tools.map(t => `<span>${t}</span>`).join('');
$('#steps').innerHTML = ME.workflow.map(w => `<li><b>${w[0]}</b>${w[1]}</li>`).join('');
$('#samples').innerHTML = ME.samples.map(x => x.url
  ? `<a class="lk" href="${x.url}" target="_blank" rel="noopener"><b>${x.title}</b>${x.desc}<br><em>Open link</em></a>`
  : `<div class="lk empty"><b>${x.title}</b>${x.desc}<br><em>Attach link in script.js</em></div>`).join('');
$('#webshow').innerHTML = `<div class="bar"><i></i><i></i><i></i>${ME.websiteUrl ? `<a href="${ME.websiteUrl}" target="_blank" rel="noopener">${ME.websiteUrl}</a>` : '<span>your-website.com</span>'}</div>` +
  (ME.websiteUrl ? `<iframe src="${ME.websiteUrl}" title="Web design sample" loading="lazy"></iframe>` : '<div class="ph"><div><b>Web designing</b>Paste your website link in <code>websiteUrl</code> inside script.js and it will appear here.</div></div>');
$$('.job,.steps li,.pk,.lk,#webshow').forEach(el => el.classList.add('reveal'));

// ===== Picture upload (saved in this browser) =====
const store = (k, v) => { try { v ? localStorage.setItem('pf_' + k, v) : localStorage.removeItem('pf_' + k); } catch (e) { toast('Browser storage is full. Try a smaller picture.'); } };
const load = k => { try { return localStorage.getItem('pf_' + k); } catch (e) { return null; } };
function show(slot, src) {
  slot.querySelector('img')?.remove();
  slot.classList.toggle('has', !!src);
  if (src) { const i = new Image(); i.src = src; i.alt = ''; slot.prepend(i); }
}
$$('.slot').forEach(slot => {
  const key = slot.dataset.slot;
  slot.tabIndex = 0; slot.setAttribute('role', 'button'); slot.setAttribute('aria-label', slot.dataset.hint || 'Add image');
  slot.insertAdjacentHTML('beforeend', `<span class="hint">${slot.dataset.hint || 'Add image'}</span><button class="x" aria-label="Remove picture">×</button><input type="file" accept="image/*">`);
  const input = slot.querySelector('input');
  show(slot, load(key) || ME.photos[key] || null);
  slot.addEventListener('click', e => { if (e.target.classList.contains('x')) { store(key, null); show(slot, null); input.value = ''; } else input.click(); });
  slot.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
  input.addEventListener('click', e => e.stopPropagation());
  input.addEventListener('change', () => {
    const f = input.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => { const im = new Image(); im.onload = () => {
      const s = Math.min(1, 900 / Math.max(im.width, im.height)), c = document.createElement('canvas');
      c.width = im.width * s; c.height = im.height * s; c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      const data = c.toDataURL('image/jpeg', .82); show(slot, data); store(key, data);
    }; im.src = r.result; };
    r.readAsDataURL(f);
  });
});

// ===== Scroll reveal =====
const io = new IntersectionObserver((en, o) => en.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); o.unobserve(e.target); } }), { threshold: .15 });
$$('.reveal').forEach(el => io.observe(el));

// ===== Contact buttons: Gmail, Facebook, Telegram, WhatsApp =====
const message = () => { const n = $('#name').value.trim(), m = $('#msg').value.trim(); return (m || 'Hi ' + ME.first + '! I saw your portfolio and would like to talk.') + (n ? '\n\n- ' + n : ''); };
const copy = async t => { try { await navigator.clipboard.writeText(t); return true; } catch (e) { return false; } };
$$('[data-ch]').forEach(b => b.addEventListener('click', async () => {
  const msg = message(), enc = encodeURIComponent(msg), ch = b.dataset.ch;
  if (ch === 'gmail') window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + ME.email + '&su=' + encodeURIComponent('Hello from your portfolio') + '&body=' + enc, '_blank', 'noopener');
  else if (ch === 'whatsapp') window.open('https://wa.me/' + ME.whatsapp + '?text=' + enc, '_blank', 'noopener');
  else { const ok = await copy(msg); toast(ok ? 'Message copied. Paste it in the chat.' : 'Opening chat. Type your message there.');
    window.open(ch === 'telegram' ? 'https://t.me/' + ME.telegram : ME.facebookUrl, '_blank', 'noopener'); }
}));