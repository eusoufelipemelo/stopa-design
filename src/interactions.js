/* Interações da home — portado do script.js vanilla.
   Chamado em um useEffect após a montagem; retorna função de limpeza. */
export function initInteractions() {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cleanups = [];
  const on = (el, ev, fn, opts) => { if (!el) return; el.addEventListener(ev, fn, opts); cleanups.push(() => el.removeEventListener(ev, fn, opts)); };

  /* Ano no footer */
  const year = $('#year'); if (year) year.textContent = new Date().getFullYear();

  /* Header scroll + barra de progresso */
  const header = $('#header');
  const progress = $('.scroll-progress span');
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle('is-scrolled', y > 40);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  on(window, 'scroll', onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  const burger = $('#burger');
  const nav = $('#nav');
  on(burger, 'click', () => {
    const open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('#nav a').forEach(a => on(a, 'click', () => {
    nav.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  }));

  /* Reveal on scroll */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el, i) => { el.style.transitionDelay = (Math.min(i % 6, 5) * 0.06) + 's'; revealObs.observe(el); });
  cleanups.push(() => revealObs.disconnect());

  /* Scrollspy */
  const sections = ['sobre', 'especialidades', 'galeria', 'numeros', 'depoimentos', 'faq']
    .map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = $$('#nav a:not(.nav__cta)');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) navLinks.forEach(l => l.classList.toggle('is-current', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
  cleanups.push(() => spy.disconnect());

  /* Parallax */
  const parallaxEls = $$('[data-parallax]');
  if (!reduceMotion && parallaxEls.length) {
    let ticking = false;
    const applyParallax = () => {
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    on(window, 'scroll', () => { if (!ticking) { requestAnimationFrame(applyParallax); ticking = true; } }, { passive: true });
    applyParallax();
  }

  /* Cursor customizado */
  const cursor = $('.cursor-dot');
  if (cursor && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let cx = 0, cy = 0, tx = 0, ty = 0, raf;
    on(document, 'mousemove', e => { tx = e.clientX; ty = e.clientY; });
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();
    cleanups.push(() => cancelAnimationFrame(raf));
    $$('a, button, .gitem, .espec__card, summary').forEach(el => {
      on(el, 'mouseenter', () => cursor.classList.add('is-hover'));
      on(el, 'mouseleave', () => cursor.classList.remove('is-hover'));
    });
  }

  /* Cookie banner */
  const cookie = $('#cookieBanner');
  const STORE = 'stopa-cookie-consent';
  let cookieTimer;
  if (cookie && !localStorage.getItem(STORE)) cookieTimer = setTimeout(() => cookie.classList.add('is-visible'), 1400);
  const closeCookie = (val) => { localStorage.setItem(STORE, val); cookie && cookie.classList.remove('is-visible'); };
  on($('#cookieAccept'), 'click', () => closeCookie('accepted'));
  on($('#cookieDecline'), 'click', () => closeCookie('declined'));
  cleanups.push(() => clearTimeout(cookieTimer));

  /* Contadores animados */
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.closest('.counter').classList.add('is-in');
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const dur = 1800, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('.counter__num').forEach(c => counterObs.observe(c));
  cleanups.push(() => counterObs.disconnect());

  /* Rings + Bars */
  const chartObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const card = e.target;
      $$('.ring', card).forEach(r => {
        const val = +r.dataset.value;
        const fg = $('.ring__fg', r);
        const C = 2 * Math.PI * 52;
        fg.style.strokeDasharray = C;
        fg.style.strokeDashoffset = C * (1 - val / 100);
      });
      $$('.bar', card).forEach(b => b.classList.add('is-in'));
      chartObs.unobserve(card);
    });
  }, { threshold: 0.35 });
  $$('.chart-card').forEach(c => chartObs.observe(c));
  cleanups.push(() => chartObs.disconnect());

  /* Galeria: filtros */
  const grid = $('#grid');
  const items = grid ? $$('.gitem', grid) : [];
  $$('#filters .chip').forEach(chip => on(chip, 'click', () => {
    $$('#filters .chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const f = chip.dataset.filter;
    items.forEach(it => it.classList.toggle('is-hidden', !(f === 'all' || it.dataset.cat === f)));
  }));

  /* Lightbox */
  const lb = $('#lightbox');
  const lbImg = $('#lbImg');
  const lbCap = $('#lbCap');
  let current = 0;
  if (lbImg) lbImg.style.transition = 'opacity .2s ease';
  const visibleItems = () => items.filter(it => !it.classList.contains('is-hidden'));
  const renderLb = (item) => {
    const img = $('img', item);
    lbImg.src = img.src; lbImg.alt = img.alt;
    lbCap.textContent = item.dataset.cap || img.alt;
  };
  const openLb = (item) => {
    const vis = visibleItems();
    current = vis.indexOf(item);
    renderLb(vis[current]);
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const stepLb = (dir) => {
    const vis = visibleItems();
    current = (current + dir + vis.length) % vis.length;
    lbImg.style.opacity = 0;
    setTimeout(() => { renderLb(vis[current]); lbImg.style.opacity = 1; }, 160);
  };
  const closeLb = () => { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
  items.forEach(it => on(it, 'click', () => openLb(it)));
  on($('#lbClose'), 'click', closeLb);
  on($('#lbNext'), 'click', () => stepLb(1));
  on($('#lbPrev'), 'click', () => stepLb(-1));
  on(lb, 'click', e => { if (e.target === lb) closeLb(); });
  on(document, 'keydown', e => {
    if (!lb || !lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowRight') stepLb(1);
    if (e.key === 'ArrowLeft') stepLb(-1);
  });

  /* Depoimentos slider */
  const track = $('#depoTrack');
  const slides = track ? $$('.depo__card', track) : [];
  const dotsWrap = $('#depoDots');
  let idx = 0, autoTimer;
  if (dotsWrap) {
    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.setAttribute('aria-label', 'Depoimento ' + (i + 1));
      if (i === 0) d.classList.add('is-active');
      d.addEventListener('click', () => goTo(i, true));
      dotsWrap.appendChild(d);
    });
  }
  const dots = dotsWrap ? $$('button', dotsWrap) : [];
  const goTo = (i, manual) => {
    if (!track || !slides.length) return;
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, k) => d.classList.toggle('is-active', k === idx));
    if (manual) restartAuto();
  };
  const restartAuto = () => { clearInterval(autoTimer); if (!reduceMotion && slides.length) autoTimer = setInterval(() => goTo(idx + 1), 6000); };
  on($('#depoNext'), 'click', () => goTo(idx + 1, true));
  on($('#depoPrev'), 'click', () => goTo(idx - 1, true));
  restartAuto();
  cleanups.push(() => clearInterval(autoTimer));
  let sx = 0;
  on(track, 'touchstart', e => sx = e.touches[0].clientX, { passive: true });
  on(track, 'touchend', e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) goTo(idx + (dx < 0 ? 1 : -1), true);
  }, { passive: true });

  /* Vídeo lazy: só baixa/toca quando entra na viewport */
  const lazyVideo = $('.lazy-video');
  if (lazyVideo) {
    const vObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        if (!lazyVideo.src && lazyVideo.dataset.src) {
          lazyVideo.src = lazyVideo.dataset.src;
          lazyVideo.play?.().catch(() => {});
        }
        vObs.unobserve(lazyVideo);
      });
    }, { rootMargin: '200px' });
    vObs.observe(lazyVideo);
    cleanups.push(() => vObs.disconnect());
  }

  /* FAQ: fecha as outras */
  const details = $$('.faq__item');
  details.forEach(d => on(d, 'toggle', () => { if (d.open) details.forEach(o => { if (o !== d) o.open = false; }); }));

  /* Formulário */
  const form = $('#contactForm');
  const feedback = $('#formFeedback');
  const setInvalid = (field, bad) => field.closest('.field')?.classList.toggle('invalid', bad);
  on(form, 'submit', e => {
    e.preventDefault();
    let ok = true;
    const nome = $('#nome'), tel = $('#telefone'), email = $('#email'), amb = $('#ambiente'), consent = $('#consent');
    [nome, tel, email, amb].forEach(f => { const bad = !f.value.trim(); setInvalid(f, bad); if (bad) ok = false; });
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    if (!emailOk) { setInvalid(email, true); ok = false; }
    if (!consent.checked) ok = false;
    if (!ok) {
      feedback.textContent = !consent.checked
        ? 'Por favor, aceite a Política de Privacidade para continuar.'
        : 'Revise os campos destacados e tente novamente.';
      feedback.className = 'form__feedback err';
      return;
    }
    feedback.textContent = 'Recebemos sua solicitação! Em breve nossa equipe entrará em contato. ✦';
    feedback.className = 'form__feedback ok';
    form.reset();
  });
  $$('.field input, .field textarea, .field select').forEach(f => on(f, 'input', () => setInvalid(f, false)));

  return () => cleanups.forEach(fn => fn());
}
