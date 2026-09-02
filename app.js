/* Paradis Pizza AS — redesign. Ekte meny-data hentet fra paradispizzaas.no/meny/. */

var MENU = [
  {
    id: 'pizza',
    title: 'Pizza',
    desc: 'Alle pizzaer bakes med ost og pizzasaus i bunn. M = middels, S = stor.',
    img: 'assets/cat-pizza.jpg',
    items: [
      { n: 1, name: 'Napoli', ing: 'Ost, pizzasaus, skinke, salami', m: 180, s: 250 },
      { n: 2, name: 'Mexico', ing: 'Ost, pizzasaus, skinke, biffkjøtt, paprika, chilipepper', m: 190, s: 270 },
      { n: 3, name: 'Norgespizza', ing: 'Ost, pizzasaus, skinke, champignon, løk, kjøttboller, bacon', m: 190, s: 270 },
      { n: 4, name: 'California', ing: 'Biff, ferske tomater, løk, paprika, BBQ-saus, fersk dill', m: 190, s: 270 },
      { n: 5, name: 'Paradis', ing: 'Ost, pizzasaus, champignon, paprika, skinke, biff, italiensk kjøttdeig', m: 190, s: 270 },
      { n: 6, name: 'Milano', ing: 'Ost, pizzasaus, champignon, paprika, skinke, salami, ananas', m: 190, s: 270 },
      { n: 7, name: 'Sarpsborg', ing: 'Ost, pizzasaus, skinke, salami, pepperoni, paprika, italiensk kjøttdeig', m: 190, s: 270 },
      { n: 8, name: 'Hollywood', ing: 'Ost, pizzasaus, skinke, salami, pepperoni, kjøttboller', m: 190, s: 270 },
      { n: 9, name: 'Fransk', ing: 'Ost, pizzasaus, skinke, salami, champignon, biff', m: 190, s: 270 },
      { n: 10, name: 'Spesial', ing: 'Ost, pizzasaus, alt av kjøtt og grønnsaker skåret i små biter', m: 195, s: 280 },
      { n: 11, name: 'American Way', ing: 'Ost, pizzasaus, skinke, salami, kjøttboller (barnepizza)', m: 190, s: 270 },
      { n: 12, name: 'Boston', ing: 'Ost, pizzasaus, champignon, paprika, skinke, salami, pepperoni', m: 190, s: 270 },
      { n: 13, name: 'Grenseløs', ing: 'Sett sammen egen pizza. Fem ingredienser (over fem, M: 190,- S: 270,-)', m: 190, s: 270 },
      { n: 14, name: 'L.A.', ing: 'Ost, pizzasaus, paprika, skinke, salami, biff, kjøttboller', m: 190, s: 270 },
      { n: 15, name: 'Spania', ing: 'Ost, pizzasaus, skinke, salami, pepperoni, champignon, purreløk', m: 190, s: 270 },
      { n: 16, name: 'Turbo', ing: 'Ost, pizzasaus, champignon, paprika, skinke, biff, hvitløk', m: 180, s: 260 },
      { n: 17, name: 'Vegetar', ing: 'Ost, pizzasaus, champignon, paprika, mais, løk, oliven, ananas', m: 180, s: 250 },
      { n: 18, name: 'Kebabpizza', ing: 'Ost, pizzasaus, kebabkjøtt, champignon, paprika, mais, løk, peppermix', m: 190, s: 270 },
      { n: 19, name: 'Pepperoni', ing: 'Ost, pizzasaus, pepperoni, biff, løkringer, bacon', m: 190, s: 270 },
      { n: 20, name: 'Muslimsk pizza', ing: 'Ost, pizzasaus, champignon, paprika, biff, mais, løk, peppermix', m: 190, s: 270 },
      { n: 21, name: 'Kyllingpizza', ing: 'Ost, pizzasaus, marinert kylling, grønnsaker', m: 190, s: 270 }
    ]
  },
  {
    id: 'ekstra',
    title: 'Ekstra til pizza',
    items: [
      { name: 'Ekstra ost', m: 25, s: 35 },
      { name: 'Ekstra saus', ing: 'Hvitløksaus, tomatsaus, bearnaisesaus, BBQ-saus, chilisaus, jalapeños', price: 25 }
    ]
  },
  {
    id: 'kebab',
    title: 'Kebab',
    desc: 'Tyrkisk kebab eller kyllingkebab, i rull eller som middag.',
    img: 'assets/cat-kebab.jpg',
    items: [
      { name: 'Kebab i rull', ing: 'Kebab eller kylling', price: 120 },
      { name: 'Ekstra stor tyrkisk kebab', price: 120 },
      { name: 'Stor tyrkisk kebab', price: 110 },
      { name: 'Liten tyrkisk kebab', price: 100 },
      { name: 'Ekstra stor kyllingkebab', price: 120 },
      { name: 'Stor kyllingkebab', price: 110 },
      { name: 'Liten kyllingkebab', price: 100 },
      { name: 'Kebabmiddag (tyrkisk)', ing: 'Med / uten pommes frites', priceLabel: '170,- / 160,-' },
      { name: 'Kyllingmiddag (tyrkisk)', ing: 'Med / uten pommes frites', priceLabel: '170,- / 160,-' },
      { name: 'Ekstra tilbehør', ing: 'Mais, løk, ost, ananas, hvitløk, jalapeños, tomater, x-dressing', price: 5 }
    ]
  },
  {
    id: 'burger',
    title: 'Hamburgere',
    img: 'assets/cat-burger.jpg',
    items: [
      { name: 'Hamburgermeny 200 g', ing: 'Med salat og pommes frites', price: 140 },
      { name: 'Hamburgermeny 150 g', ing: 'Med salat og pommes frites', price: 125 },
      { name: 'Hamburger 200 g', price: 120 },
      { name: 'Hamburger 150 g', price: 100 },
      { name: 'Tillegg for ost', price: 5 }
    ]
  },
  {
    id: 'salat',
    title: 'Salater',
    img: 'assets/cat-salat.jpg',
    items: [
      { name: 'Kyllingsalat', price: 90 },
      { name: 'Skinkesalat', price: 90 }
    ]
  },
  {
    id: 'pommes',
    title: 'Pommes frites',
    img: 'assets/cat-fries.jpg',
    items: [
      { name: 'Pommes frites, stor', price: 60 },
      { name: 'Pommes frites, liten', price: 40 }
    ]
  },
  {
    id: 'drikke',
    title: 'Drikke',
    img: 'assets/cat-drikke.jpg',
    items: [
      { name: 'Mineralvann 1,5 liter (takeaway)', price: 55 },
      { name: 'Mineralvann 0,5 liter', price: 35 }
    ]
  },
  {
    id: 'sauser',
    title: 'Sauser',
    items: [
      { name: 'Pris per saus', ing: 'Hvitløkssaus, BBQ-saus, tomatsaus, bearnaisesaus, chilisaus', price: 25 }
    ]
  }
];

var FAVORITES = [10, 16, 8, 7, 5];

function findPizza(n) {
  var pizza = MENU[0].items;
  for (var i = 0; i < pizza.length; i++) if (pizza[i].n === n) return pizza[i];
  return null;
}

function priceHtml(item) {
  if (item.priceLabel) return '<div class="price">' + item.priceLabel + '</div>';
  if (item.price != null) return '<div class="price">' + item.price + ',-</div>';
  return '<div class="price">' + item.m + ',-<small>M</small><br>' + item.s + ',-<small>S</small></div>';
}

function sliceIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 21 20a1 1 0 0 1-1.3 1.4L12 18l-7.7 3.4A1 1 0 0 1 3 20L12 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10.5" r="1.1" fill="currentColor"/><circle cx="9.3" cy="14.2" r="1.1" fill="currentColor"/><circle cx="14.8" cy="14.6" r="1.1" fill="currentColor"/></svg>';
}

function renderFavorites() {
  var grid = document.getElementById('fav-grid');
  if (!grid) return;
  var html = FAVORITES.map(function (n) {
    var p = findPizza(n);
    if (!p) return '';
    return '' +
      '<article class="fav-card reveal">' +
        '<span class="fav-num">Nr. ' + p.n + '</span>' +
        '<div class="slice">' + sliceIcon() + '</div>' +
        '<h3>' + p.name + '</h3>' +
        '<p class="desc">' + p.ing + '</p>' +
        '<div class="fav-price">' +
          '<div><span>Middels</span><b>' + p.m + ',-</b></div>' +
          '<div><span>Stor</span><b>' + p.s + ',-</b></div>' +
        '</div>' +
      '</article>';
  }).join('');
  grid.innerHTML = html;
}

function renderMenu() {
  var root = document.getElementById('menu-content');
  var nav = document.getElementById('cat-nav-list');
  if (!root) return;

  var navHtml = MENU.map(function (cat) {
    return '<a href="#' + cat.id + '">' + cat.title + '</a>';
  }).join('');
  if (nav) nav.innerHTML = navHtml;

  var html = MENU.map(function (cat, i) {
    var head = '<div class="cat-head">' +
      (cat.img ? '<img src="' + cat.img + '" alt="" loading="eager">' : '') +
      '<div><h2>' + cat.title + '</h2>' + (cat.desc ? '<p>' + cat.desc + '</p>' : '') + '</div>' +
    '</div>';

    var useGrid = cat.id === 'pizza';
    var itemsHtml = cat.items.map(function (it) {
      return '<div class="menu-item">' +
        '<div class="txt">' +
          '<div class="name">' + (it.n ? '<span class="n">' + it.n + '.</span>' : '') + ' ' + it.name + '</div>' +
          (it.ing ? '<div class="ing">' + it.ing + '</div>' : '') +
        '</div>' +
        priceHtml(it) +
      '</div>';
    }).join('');

    return '<section class="menu-category' + (i % 2 === 1 ? ' odd' : '') + '" id="' + cat.id + '">' +
      '<div class="container">' +
        head +
        '<div class="' + (useGrid ? 'menu-grid' : 'menu-list') + '">' + itemsHtml + '</div>' +
      '</div>' +
    '</section>';
  }).join('');

  root.innerHTML = html;
}

/* ---------- Header scroll state ---------- */
function initHeader() {
  var header = document.querySelector('.site-header');
  if (!header) return;
  function onScroll() {
    if (window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Mobile menu ---------- */
function initMobileMenu() {
  var toggle = document.querySelector('.hamburger');
  var menu = document.querySelector('.mobile-menu');
  var scrim = document.querySelector('.scrim');
  var closeBtn = document.querySelector('.mobile-close');
  if (!toggle || !menu) return;

  function open() {
    menu.classList.add('open');
    scrim.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function close() {
    menu.classList.remove('open');
    scrim.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (scrim) scrim.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
}

/* ---------- Cookie consent (egenbygd, ordrett tekst fra originalsiden, ingen ekstern avhengighet) ---------- */
function initCookieConsent() {
  var scrim = document.getElementById('cookie-scrim');
  if (!scrim) return;
  var moreBox = document.getElementById('cookie-more');
  var moreBtn = document.getElementById('cookie-more-btn');
  var accept = document.getElementById('cookie-accept');
  var decline = document.getElementById('cookie-decline');
  var reopenLinks = document.querySelectorAll('.js-cookie-settings');

  var KEY = 'ppz-cookie-consent';

  function hide() { scrim.classList.remove('show'); }
  function show() { scrim.classList.add('show'); }

  try {
    if (!localStorage.getItem(KEY)) show();
  } catch (e) { show(); }

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      var isOpen = moreBox.classList.toggle('show');
      moreBtn.textContent = isOpen ? 'LES MINDRE' : 'LES MER';
    });
  }
  if (accept) accept.addEventListener('click', function () {
    try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
    hide();
  });
  if (decline) decline.addEventListener('click', function () {
    try { localStorage.setItem(KEY, 'declined'); } catch (e) {}
    hide();
  });
  reopenLinks.forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); show(); });
  });
}

/* ---------- Åpningstider: ekte, faste tider (14:00-23:00 alle dager) sjekket mot ekte klokkeslett ---------- */
function initOpenStatus() {
  var els = document.querySelectorAll('.hero-status');
  if (!els.length) return;
  var now = new Date();
  var h = now.getHours() + now.getMinutes() / 60;
  var isOpen = h >= 14 && h < 23;
  els.forEach(function (el) {
    var label = el.querySelector('.label');
    if (isOpen) {
      el.classList.remove('closed');
      if (label) label.textContent = 'Åpent nå · Stenger 23:00';
    } else {
      el.classList.add('closed');
      if (label) label.textContent = 'Stengt nå · Åpner 14:00';
    }
  });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function (el) { io.observe(el); });

  /* Sikkerhetsnett: innhold skal aldri bli usynlig for alltid om IO av en eller annen grunn ikke trigger. */
  setTimeout(function () {
    items.forEach(function (el) { el.classList.add('in'); });
  }, 2500);
}

/* ---------- Meny scroll-spy ---------- */
function initCatSpy() {
  var sections = document.querySelectorAll('.menu-category');
  var links = document.querySelectorAll('#cat-nav-list a');
  if (!sections.length || !links.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        links.forEach(function (l) { l.classList.remove('active'); });
        var link = document.querySelector('#cat-nav-list a[href="#' + entry.target.id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(function (s) { io.observe(s); });
}

document.addEventListener('DOMContentLoaded', function () {
  renderFavorites();
  renderMenu();
  initHeader();
  initMobileMenu();
  initCookieConsent();
  initOpenStatus();
  initReveal();
  initCatSpy();

  var year = document.querySelectorAll('.js-year');
  year.forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
