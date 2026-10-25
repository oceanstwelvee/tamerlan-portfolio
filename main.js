// Clients: to use a real logo, drop img/<file>.png into img/ and set `logo` below.
const CLIENTS = [
  { handle: "luicoffee", name: "Lui Coffee", niche: "coffee", tags: ["smm", "ads"] },
  { handle: "coffeeshopgeorgia", name: "Coffee Shop Georgia", niche: "coffee", tags: ["smm", "ads"] },
  { handle: "panoramakakhetiresort", name: "Panorama Kakheti Resort", niche: "resort", tags: ["smm", "ads", "content"] },
  { handle: "car.fat.ge", name: "Car Fat", niche: "auto", tags: ["ads", "content"] },
  { handle: "crocus.tbilisi", name: "Crocus Tbilisi", niche: "business", tags: ["smm", "ads"] },
  { handle: "beko.georgia", name: "Beko Georgia", niche: "tech", tags: ["ads", "content"] },
  { handle: "silkmedical.tbilisi", name: "Silk Medical Tbilisi", niche: "medical", tags: ["smm", "ads", "funnel"], logo: "img/silkmedical.png", wide: true },
  { handle: "silkmedical.batumi", name: "Silk Medical Batumi", niche: "medical", tags: ["smm", "ads", "funnel"], logo: "img/silkmedical.png", wide: true },
  { handle: "dr_irkaliev", name: "Dr. Irkaliev", niche: "doctor", tags: ["brand", "content", "ads"] },
  { handle: "rcheuli_medical_center", name: "Rcheuli Medical Center", niche: "medical", tags: ["smm", "ads", "auto"], logo: "img/rcheuli_medical_center.png", wide: true },
  { handle: "shahruza_tbilisi", name: "Shahruza Tbilisi", niche: "food", tags: ["smm", "ads"] },
  { handle: "es.buro", name: "ES Buro", niche: "buro", tags: ["smm", "content"] },
];

const SERVICES = [
  { ico: "📱", key: "smm" },
  { ico: "🎯", key: "ads" },
  { ico: "🎬", key: "content" },
  { ico: "🧲", key: "funnel" },
  { ico: "🤖", key: "auto" },
  { ico: "🧭", key: "strategy" },
];

const I18N = {
  ru: {
    title: "Тамерлан Караев — Digital-маркетинг",
    name: "Тамерлан Караев",
    name_short: "Тамерлан Караев",
    nav_about: "Обо мне", nav_work: "Проекты", nav_services: "Услуги", nav_contact: "Контакты",
    hero_eyebrow: "Digital-маркетолог · Тбилиси",
    hero_lead: "Помогаю бизнесу расти в соцсетях: контент, таргетированная реклама, воронки продаж и автоматизация — всё в одной команде.",
    cta_write: "Написать в WhatsApp", cta_work: "Смотреть проекты",
    stat_years: "года в маркетинге", stat_brands: "брендов", stat_niches: "ниш бизнеса",
    chip_ads: "Таргет Meta Ads", chip_content: "Reels и контент", chip_auto: "Автоматизация",
    about_kicker: "01 — Обо мне",
    about_title: "Маркетинг, который приводит клиентов, а не просто лайки",
    about_p1: "Меня зовут Тамерлан Караев. Уже более 4 лет я занимаюсь маркетингом и digital-маркетингом — за это время за плечами множество успешных, завершённых проектов: кофейни, курорты, медицинские центры, рестораны, авто- и техно-бренды.",
    about_p2: "Мы с командой помогаем бизнесу на каждом этапе: создаём контент, запускаем таргетированную рекламу, выстраиваем воронки продаж и автоматизируем обработку заявок — чтобы реклама превращалась в реальные продажи.",
    p1_t: "Стратегия", p1_d: "Анализ ниши и конкурентов, позиционирование",
    p2_t: "Контент", p2_d: "Reels, съёмки, дизайн, тексты",
    p3_t: "Реклама", p3_d: "Таргет в Instagram и Facebook",
    p4_t: "Продажи", p4_d: "Воронки, чат-боты, CRM",
    work_kicker: "02 — Проекты",
    work_title: "Бренды, с которыми я работал",
    work_lead: "Нажмите на карточку, чтобы открыть Instagram проекта.",
    more_title: "И другие проекты", more_text: "Локальный бизнес, личные бренды и стартапы по всей Грузии.",
    services_kicker: "03 — Что мы можем сделать",
    services_title: "Услуги под ключ",
    contact_kicker: "04 — Контакты",
    contact_title: "Давайте обсудим ваш проект",
    contact_lead: "Напишите в любой удобный мессенджер — отвечу и предложу план продвижения.",
    footer: "Digital-маркетинг · Грузия",
    niche: {
      coffee: "Кофейня", resort: "Курорт и отель", auto: "Автобизнес", business: "Бизнес в Тбилиси",
      tech: "Бытовая техника", medical: "Медицинский центр", doctor: "Личный бренд врача",
      food: "Ресторан", buro: "Бюро",
    },
    tag: {
      smm: "SMM", ads: "Таргет", content: "Контент", funnel: "Воронка", auto: "Автоматизация", brand: "Личный бренд",
    },
    svc: {
      smm: ["SMM под ключ", "Ведение Instagram и Facebook: контент-план, визуал, тексты, сторис и работа с аудиторией."],
      ads: ["Таргетированная реклама", "Запуск и оптимизация Meta Ads: аудитории, креативы, A/B-тесты и контроль стоимости заявки."],
      content: ["Контент и Reels", "Сценарии, съёмка и монтаж вертикальных видео, которые набирают охваты и продают."],
      funnel: ["Воронки продаж", "Путь клиента от рекламы до покупки: лид-формы, лендинги, прогрев и повторные продажи."],
      auto: ["Автоматизация", "Чат-боты в Instagram и WhatsApp, CRM и автоответы — ни одна заявка не теряется."],
      strategy: ["Стратегия и аналитика", "Аудит аккаунта, анализ конкурентов, позиционирование и понятные отчёты по цифрам."],
    },
  },
  ka: {
    title: "ტამერლან კარაევი — ციფრული მარკეტინგი",
    name: "ტამერლან კარაევი",
    name_short: "ტამერლან კარაევი",
    nav_about: "ჩემ შესახებ", nav_work: "პროექტები", nav_services: "სერვისები", nav_contact: "კონტაქტი",
    hero_eyebrow: "ციფრული მარკეტოლოგი · თბილისი",
    hero_lead: "ვეხმარები ბიზნესს სოციალურ ქსელებში ზრდაში: კონტენტი, ტარგეტირებული რეკლამა, გაყიდვების ძაბრი და ავტომატიზაცია — ყველაფერი ერთ გუნდში.",
    cta_write: "მომწერეთ WhatsApp-ში", cta_work: "პროექტების ნახვა",
    stat_years: "წელი მარკეტინგში", stat_brands: "ბრენდი", stat_niches: "ბიზნეს ნიშა",
    chip_ads: "Meta Ads ტარგეტი", chip_content: "Reels და კონტენტი", chip_auto: "ავტომატიზაცია",
    about_kicker: "01 — ჩემ შესახებ",
    about_title: "მარკეტინგი, რომელსაც მოჰყავს კლიენტები და არა მხოლოდ მოწონებები",
    about_p1: "მე ვარ ტამერლან კარაევი. 4 წელზე მეტია ვმუშაობ მარკეტინგსა და ციფრულ მარკეტინგში — ამ დროში ბევრი წარმატებული, დასრულებული პროექტი მაქვს: ყავის მაღაზიები, კურორტები, სამედიცინო ცენტრები, რესტორნები, ავტო და ტექნიკის ბრენდები.",
    about_p2: "ჩემს გუნდთან ერთად ბიზნესს ყველა ეტაპზე ვეხმარებით: ვქმნით კონტენტს, ვუშვებთ ტარგეტირებულ რეკლამას, ვაწყობთ გაყიდვების ძაბრს და ვაავტომატებთ განაცხადების დამუშავებას — რომ რეკლამა რეალურ გაყიდვებად იქცეს.",
    p1_t: "სტრატეგია", p1_d: "ნიშისა და კონკურენტების ანალიზი, პოზიციონირება",
    p2_t: "კონტენტი", p2_d: "Reels, გადაღება, დიზაინი, ტექსტები",
    p3_t: "რეკლამა", p3_d: "ტარგეტი Instagram-სა და Facebook-ში",
    p4_t: "გაყიდვები", p4_d: "ძაბრები, ჩატბოტები, CRM",
    work_kicker: "02 — პროექტები",
    work_title: "ბრენდები, რომლებთანაც ვიმუშავე",
    work_lead: "დააჭირეთ ბარათს, რომ გახსნათ პროექტის Instagram.",
    more_title: "და სხვა პროექტები", more_text: "ადგილობრივი ბიზნესი, პირადი ბრენდები და სტარტაპები მთელ საქართველოში.",
    services_kicker: "03 — რისი გაკეთება შეგვიძლია",
    services_title: "სერვისები სრული ციკლით",
    contact_kicker: "04 — კონტაქტი",
    contact_title: "მოდით, განვიხილოთ თქვენი პროექტი",
    contact_lead: "მომწერეთ ნებისმიერ მესენჯერში — გიპასუხებთ და შემოგთავაზებთ პოპულარიზაციის გეგმას.",
    footer: "ციფრული მარკეტინგი · საქართველო",
    niche: {
      coffee: "ყავის მაღაზია", resort: "კურორტი და სასტუმრო", auto: "ავტობიზნესი", business: "ბიზნესი თბილისში",
      tech: "საყოფაცხოვრებო ტექნიკა", medical: "სამედიცინო ცენტრი", doctor: "ექიმის პირადი ბრენდი",
      food: "რესტორანი", buro: "ბიურო",
    },
    tag: {
      smm: "SMM", ads: "ტარგეტი", content: "კონტენტი", funnel: "ძაბრი", auto: "ავტომატიზაცია", brand: "პირადი ბრენდი",
    },
    svc: {
      smm: ["SMM სრული ციკლით", "Instagram-ისა და Facebook-ის მართვა: კონტენტ-გეგმა, ვიზუალი, ტექსტები, სთორები და აუდიტორიასთან მუშაობა."],
      ads: ["ტარგეტირებული რეკლამა", "Meta Ads-ის გაშვება და ოპტიმიზაცია: აუდიტორიები, კრეატივები, A/B ტესტები და განაცხადის ფასის კონტროლი."],
      content: ["კონტენტი და Reels", "სცენარები, გადაღება და ვერტიკალური ვიდეოების მონტაჟი, რომლებიც აგროვებს ნახვებს და ყიდის."],
      funnel: ["გაყიდვების ძაბრი", "კლიენტის გზა რეკლამიდან შეძენამდე: ლიდ-ფორმები, ლენდინგები, გათბობა და განმეორებითი გაყიდვები."],
      auto: ["ავტომატიზაცია", "ჩატბოტები Instagram-სა და WhatsApp-ში, CRM და ავტოპასუხები — არც ერთი განაცხადი არ იკარგება."],
      strategy: ["სტრატეგია და ანალიტიკა", "ანგარიშის აუდიტი, კონკურენტების ანალიზი, პოზიციონირება და გასაგები რიცხვითი ანგარიშები."],
    },
  },
};

const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const igUrl = (h) => `https://www.instagram.com/${h}/`;

function initials(name) {
  const w = name.replace(/[^A-Za-z ]/g, " ").split(/\s+/).filter(Boolean);
  return (w[0][0] + (w[1] ? w[1][0] : w[0][1] || "")).toUpperCase();
}

function logoHTML(c, extra = "") {
  if (c.logo) return `<span class="logo has-img ${extra}"><img src="${c.logo}" alt="${esc(c.name)}" loading="lazy"></span>`;
  return `<span class="logo ${extra}">${initials(c.name)}</span>`;
}

function render(lang) {
  const t = I18N[lang];

  const half = Math.ceil(CLIENTS.length / 2);
  const row = (list) => list.map((c) =>
    `<a class="pill" href="${igUrl(c.handle)}" target="_blank" rel="noopener">${logoHTML(c)}${esc(c.name)}</a>`).join("");
  // Duplicate each row so the -50% translate loops seamlessly.
  const r1 = row([...CLIENTS.slice(0, half), ...CLIENTS.slice(0, half)]);
  const r2 = row([...CLIENTS.slice(half), ...CLIENTS.slice(half)]);
  $("#track-1").innerHTML = r1 + r1;
  $("#track-2").innerHTML = r2 + r2;

  $("#grid").innerHTML = CLIENTS.map((c) => `
    <a class="card reveal" href="${igUrl(c.handle)}" target="_blank" rel="noopener">
      <span class="arrow" aria-hidden="true">↗</span>
      <div class="card-top">${logoHTML(c, c.wide ? "wide" : "")}</div>
      <div>
        <h3>${esc(c.name)}</h3>
        <div class="handle">@${esc(c.handle)}</div>
      </div>
      <div class="niche">${t.niche[c.niche]}</div>
      <div class="tags">${c.tags.map((k) => `<span class="tag">${t.tag[k]}</span>`).join("")}</div>
    </a>`).join("") + `
    <div class="card more reveal">
      <h3>+ ${t.more_title}</h3>
      <p>${t.more_text}</p>
    </div>`;

  $("#services-list").innerHTML = SERVICES.map((s) => `
    <div class="service reveal">
      <div class="ico" aria-hidden="true">${s.ico}</div>
      <h3>${t.svc[s.key][0]}</h3>
      <p>${t.svc[s.key][1]}</p>
    </div>`).join("");

  observe();
  bindGlow();
}

function setLang(lang, animate) {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t[el.dataset.i18n];
    if (typeof v !== "string") return;
    el.textContent = v;
    if (animate) { el.classList.remove("i18n-swap"); void el.offsetWidth; el.classList.add("i18n-swap"); }
  });
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  render(lang);
  if (animate) document.querySelectorAll("#grid .reveal, #services-list .reveal").forEach((el) => el.classList.add("in"));
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

let io;
function observe() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    return;
  }
  io = io || new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const sibs = [...e.target.parentElement.children].filter((n) => n.classList.contains("reveal"));
      e.target.style.transitionDelay = `${Math.min(sibs.indexOf(e.target), 6) * 70}ms`;
      e.target.classList.add("in");
      io.unobserve(e.target);
      if (e.target.querySelector(".count")) countUp();
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
}

let counted = false;
function countUp() {
  if (counted) return;
  counted = true;
  document.querySelectorAll(".count").forEach((el) => {
    const to = +el.dataset.to, start = performance.now(), dur = 1400;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function bindGlow() {
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang, true)));

let saved = "ru";
try { saved = localStorage.getItem("lang") || ((navigator.language || "").startsWith("ka") ? "ka" : "ru"); } catch (e) {}
const params = new URLSearchParams(location.search);
const urlLang = params.get("lang");
if (params.has("shot")) document.documentElement.classList.add("shot");
setLang(urlLang && I18N[urlLang] ? urlLang : saved, false);
$("#year").textContent = new Date().getFullYear();
if (matchMedia("(prefers-reduced-motion: reduce)").matches || params.has("shot")) countUp();
