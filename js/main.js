(function () {
  "use strict";

  const R = window.RESUME;
  const track = document.getElementById("track");
  const walker = document.getElementById("walker");
  const hint = document.getElementById("hint");
  const clouds = document.querySelector(".layer-clouds");
  const far = document.querySelector(".layer-far");
  const mid = document.querySelector(".layer-mid");
  const road = document.querySelector(".road");
  const progress = document.querySelector(".progress-fill");
  const navButtons = document.querySelectorAll("[data-goto]");
  const LEVELS = ["", "Beginner", "Elementary", "Intermediate", "Advanced"];

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const firstName = R.name.split(" ")[0];

  // ---------- Rendering ----------
  const icons = {
    pin: '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    cap: '<svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6 9.2V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.8l-6 3.3-6-3.3z"/></svg>',
    badge: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1.5 15.5-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z"/></svg>',
    star: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="m12 17.3 6.2 3.7-1.6-7 5.4-4.7-7.2-.6L12 2 9.2 8.7 2 9.3l5.4 4.7-1.6 7z"/></svg>',
    globe: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16zM8 8H5.1a8 8 0 0 1 4.3-3.6C8.8 5.5 8.3 6.7 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2zM8 19H5V9h3v10zM6.5 7.7a1.8 1.8 0 1 1 0-3.5 1.8 1.8 0 0 1 0 3.5zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7S12.5 12.6 12.5 14v5h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10z"/></svg>'
  };

  const introHTML = `
    <section class="scene scene-intro" id="intro" data-label="Intro">
      <div class="intro-copy">
        <p class="eyebrow reveal">Welcome to my interactive resume</p>
        <h1 class="reveal">Hi, I'm <span class="hl">${esc(firstName)}</span>.</h1>
        <p class="lead reveal">${esc(R.headline)}</p>
        <p class="tagline reveal">${esc(R.tagline)}</p>
        <p class="location reveal">${icons.pin} ${esc(R.location)}</p>
      </div>
      <div class="signpost reveal" aria-hidden="true">
        <div class="sign">Start the journey →</div>
        <div class="pole"></div>
      </div>
    </section>`;

  const toMonths = (ym) => {
    if (ym === "present") {
      const d = new Date();
      return d.getFullYear() * 12 + d.getMonth() + 1;
    }
    const [y, m] = ym.split("-").map(Number);
    return y * 12 + m;
  };
  const inds = R.about.industries.map((s) => ({ ...s, months: Math.max(1, toMonths(s.to) - toMonths(s.from)) }));
  const totalMonths = inds.reduce((sum, s) => sum + s.months, 0);
  const totalYears = Math.floor((toMonths(inds[inds.length - 1].to) - toMonths(inds[0].from)) / 12);
  const industryCount = inds.filter((s) => !s.study).length;
  const yrs = (m) => `${(m / 12).toFixed(1).replace(/\.0$/, "")} yrs`;

  const industriesHTML = `
      <div class="panel industries reveal" style="--d:150ms">
        <p class="eyebrow">Career at a glance</p>
        <h3 class="ind-title"><strong>${totalYears} years</strong> across ${industryCount} industries</h3>
        <div class="ind-bar" role="img" aria-label="${esc(inds.map((s) => `${s.name} (${s.org}): ${yrs(s.months)}`).join(", "))}">
          ${inds
            .map(
              (s) =>
                `<span class="ind-seg${s.study ? " study" : ""}" style="--c:${s.color};flex-grow:${s.months}">${
                  s.months / totalMonths >= 0.15 ? `<em>${esc(yrs(s.months))}</em>` : ""
                }</span>`
            )
            .join("")}
        </div>
        <div class="ind-axis" aria-hidden="true"><span>${esc(inds[0].from.slice(0, 4))}</span><span>Today</span></div>
        <ul class="ind-legend">
          ${inds
            .map(
              (s, i) => `
            <li class="reveal" style="--c:${s.color};--d:${300 + i * 90}ms">
              <i class="${s.study ? "study" : ""}"></i>
              <span><strong>${esc(s.name)}</strong><small>${esc(s.org)}</small></span>
              <b>${esc(yrs(s.months))}</b>
            </li>`
            )
            .join("")}
        </ul>
      </div>`;

  const aboutHTML = `
    <section class="scene scene-about" id="about" data-label="About">
      <div class="panel about-panel reveal">
        <p class="eyebrow">About me</p>
        <h2>${esc(R.about.title)}</h2>
        ${R.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
      </div>
      ${industriesHTML}
    </section>`;

  const skillsHTML = `
    <section class="scene scene-skills" id="skills" data-label="Skills">
      <div class="panel skills-panel reveal">
        <p class="eyebrow">Skills</p>
        <h2>What I bring to the table</h2>
        <div class="legend" aria-hidden="true">${LEVELS.slice(1).map((l) => `<span>${l}</span>`).join("")}</div>
        <ul class="skills">
          ${R.skills
            .map(
              (s, i) => `
            <li class="skill reveal" style="--lvl:${s.level};--d:${i * 70}ms">
              <span class="skill-name">${esc(s.name)}</span>
              <span class="bar" role="img" aria-label="${esc(s.name)}: ${LEVELS[s.level]}"><span class="fill"></span></span>
              <span class="skill-level">${LEVELS[s.level]}</span>
            </li>`
            )
            .join("")}
        </ul>
      </div>
    </section>`;

  const stopHTML = (j) => {
    if (j.type === "milestone") {
      return `
        <div class="stop milestone">
          <div class="card milestone-card reveal">
            <span class="cap">${icons.cap}</span>
            <span class="dates">${esc(j.dates)}</span>
            <h3>${esc(j.title)}</h3>
            <p>${esc(j.note)}</p>
          </div>
          <div class="flagpole reveal"><div class="flag"></div></div>
        </div>`;
    }
    return `
      <article class="stop">
        <div class="card reveal" style="--c:${j.color}">
          <span class="dates">${esc(j.dates)}</span>
          <h3>${esc(j.role)}</h3>
          <p class="company">${esc(j.company)}</p>
          ${j.summary ? `<p class="summary">${esc(j.summary)}</p>` : ""}
          <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
          ${j.tags ? `<div class="tags">${j.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
        </div>
        <div class="building reveal" style="--c:${j.color};--h:${(j.height || 0.6) * 46}vh">
          <span class="building-name">${esc(j.company)}</span>
          <span class="door"></span>
        </div>
      </article>`;
  };

  const journeyHTML = `
    <section class="scene scene-journey" id="journey" data-label="Experience">
      <div class="stop intro-stop">
        <div class="panel reveal">
          <p class="eyebrow">Experience</p>
          <h2>The career road</h2>
          <p>From finance to product — keep walking to see each stop along the way.</p>
        </div>
      </div>
      ${R.journey.map(stopHTML).join("")}
    </section>`;

  const educationHTML = `
    <section class="scene scene-education" id="education" data-label="Education">
      <div class="panel edu-panel reveal">
        <p class="eyebrow">Education</p>
        <h2>Where I learned</h2>
        <div class="edu-grid">
          ${R.education
            .map(
              (e, i) => `
            <div class="edu reveal" style="--d:${i * 90}ms">
              <span class="cap">${icons.cap}</span>
              <div><h3>${esc(e.school)}</h3><p>${esc(e.degree)}</p><span class="dates">${esc(e.dates)}</span></div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const credentialsHTML = `
    <section class="scene scene-credentials" id="credentials" data-label="Credentials">
      <div class="cred-grid">
        <div class="panel reveal" style="--d:0ms">
          <p class="eyebrow">${icons.badge} Certifications</p>
          <ul class="chips">${R.certifications.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
        </div>
        <div class="panel reveal" style="--d:120ms">
          <p class="eyebrow">${icons.globe} Languages</p>
          <ul class="chips">${R.languages.map((l) => `<li>${esc(l.name)} <small>${esc(l.level)}</small></li>`).join("")}</ul>
        </div>
      </div>
    </section>`;

  const awards = R.honors.flatMap((g) => g.items.map((a) => ({ ...a, org: g.org, color: g.color })));
  const awardsHTML = `
    <section class="scene scene-awards" id="awards" data-label="Awards">
      <div class="panel awards-panel reveal">
        <p class="eyebrow">${icons.star} Honors & awards</p>
        <h2>Recognition along the way</h2>
        <ul class="awards">
          ${awards
            .map(
              (a, i) => `
            <li class="award reveal" style="--c:${a.color};--d:${i * 70}ms">
              <p class="award-meta"><span class="award-org">${esc(a.org)}</span>${a.date ? `<span class="award-date">${esc(a.date)}</span>` : ""}</p>
              <h3>${esc(a.title)}</h3>
              ${a.text ? `<p class="award-text">${esc(a.text)}</p>` : ""}
            </li>`
            )
            .join("")}
        </ul>
      </div>
    </section>`;
  const c = R.contact;
  const contactHTML = `
    <section class="scene scene-contact" id="contact" data-label="Contact">
      <div class="panel contact-panel reveal">
        <p class="eyebrow">Contact</p>
        <h2>Let's build something together</h2>
        <form class="letter" id="contact-form">
          <p class="to">To: <strong>${esc(firstName)}</strong></p>
          <label>Your name<input name="name" required autocomplete="name" /></label>
          <label>Message<textarea name="message" rows="3" required></textarea></label>
          <button type="submit" class="btn btn-primary">Send ➜</button>
        </form>
        <div class="links">
          <a class="btn" href="mailto:${esc(c.email)}">${icons.mail} Email</a>
          <a class="btn" href="${esc(c.linkedin)}" target="_blank" rel="noopener">${icons.linkedin} LinkedIn</a>
          <a class="btn" href="${esc(c.topmate)}" target="_blank" rel="noopener">${icons.calendar} Book a call</a>
        </div>
      </div>
      <div class="finish reveal" aria-hidden="true">
        <div class="finish-flag">Thanks for visiting!</div>
        <div class="pole"></div>
      </div>
      <p class="footer">© ${new Date().getFullYear()} ${esc(R.name)}</p>
    </section>`;

  track.innerHTML = introHTML + aboutHTML + skillsHTML + journeyHTML + educationHTML + credentialsHTML + awardsHTML + contactHTML;

  walker.innerHTML = `
    <svg viewBox="0 0 60 112" class="person">
      <g class="body-bob">
        <g class="leg leg-back"><rect x="26" y="62" width="8" height="40" rx="4" fill="#2a3557"/><rect x="25" y="98" width="14" height="6" rx="3" fill="#1b2033"/></g>
        <g class="arm arm-back"><rect x="26.5" y="34" width="7" height="28" rx="3.5" fill="#26335a"/><circle cx="30" cy="62" r="3.5" fill="#c98b62"/></g>
        <path d="M27 18 C16 18 16 40 20 44 L27 40Z" fill="#2b1d16"/>
        <path d="M18 36 Q30 28 42 36 L44 68 H16Z" fill="#1f2a44"/>
        <path d="M26 31 L30 42 L34 31Z" fill="#ffffff"/>
        <rect x="27" y="25" width="6" height="7" fill="#c98b62"/>
        <circle cx="30" cy="18" r="10" fill="#d69a70"/>
        <path d="M20 18 A10 10 0 0 1 40 15 Q33 10 25 13 Q22 15 20 20Z" fill="#2b1d16"/>
        <circle cx="21" cy="10" r="5.5" fill="#2b1d16"/>
        <circle cx="35" cy="18" r="1.3" fill="#1b1b1b"/>
        <path d="M33 23 Q35.5 24.5 38 23" stroke="#8a4b3a" stroke-width="1.3" fill="none" stroke-linecap="round"/>
        <g class="leg leg-front"><rect x="26" y="62" width="8" height="40" rx="4" fill="#33406a"/><rect x="25" y="98" width="14" height="6" rx="3" fill="#1b2033"/></g>
        <g class="arm arm-front">
          <rect x="26.5" y="34" width="7" height="28" rx="3.5" fill="#2c3a66"/>
          <circle cx="30" cy="62" r="3.5" fill="#d69a70"/>
          <rect x="22" y="62" width="18" height="13" rx="2.5" fill="#ff7a59"/>
          <rect x="28" y="59" width="6" height="4" rx="1.5" fill="none" stroke="#ff7a59" stroke-width="1.6"/>
        </g>
      </g>
    </svg>`;

  // ---------- Contact form → mailto ----------
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.target;
    const subject = encodeURIComponent(`Hello from ${f.name.value.trim()} (via your interactive resume)`);
    const body = encodeURIComponent(f.message.value.trim());
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
  });

  // ---------- Horizontal scroll engine ----------
  const scenes = Array.from(track.querySelectorAll(".scene"));
  const reveals = Array.from(track.querySelectorAll(".reveal"));
  let maxX = 0;
  let lastX = -1;
  let idleTimer = null;
  let ticking = false;

  function layout() {
    maxX = Math.max(0, track.scrollWidth - window.innerWidth);
    document.body.style.height = `${maxX + window.innerHeight}px`;
    lastX = -1;
    render();
  }

  function render() {
    ticking = false;
    const x = Math.min(window.scrollY, maxX);
    if (x === lastX) return;

    if (lastX >= 0) {
      walker.classList.add("walking");
      walker.classList.toggle("back", x < lastX);
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => walker.classList.remove("walking"), 160);
      if (x > 20) hint.classList.add("hidden");
    }
    lastX = x;

    track.style.transform = `translate3d(${-x}px,0,0)`;
    clouds.style.backgroundPositionX = `${-x * 0.08}px`;
    far.style.backgroundPositionX = `${-x * 0.2}px`;
    mid.style.backgroundPositionX = `${-x * 0.45}px`;
    road.style.backgroundPositionX = `${-x}px`;
    progress.style.transform = `scaleX(${maxX ? x / maxX : 0})`;

    const vw = window.innerWidth;
    for (const el of reveals) {
      if (!el.classList.contains("in") && el.getBoundingClientRect().left < vw * 0.92) el.classList.add("in");
    }

    let active = scenes[0].id;
    for (const s of scenes) if (s.offsetLeft <= x + vw * 0.45) active = s.id;
    if (active === "credentials") active = "education";
    navButtons.forEach((b) => b.classList.toggle("active", b.dataset.goto === active));
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  }

  function goTo(id) {
    const s = document.getElementById(id);
    if (s) window.scrollTo({ top: Math.min(s.offsetLeft, maxX), behavior: "smooth" });
  }

  navButtons.forEach((b) =>
    b.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(b.dataset.goto);
    })
  );

  window.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea, button, a")) return;
    const step = window.innerWidth * 0.6;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      window.scrollBy({ top: step, behavior: "smooth" });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      window.scrollBy({ top: -step, behavior: "smooth" });
    }
  });

  // Trackpads: map sideways swipes to the same scroll.
  window.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        window.scrollBy(0, e.deltaX);
      }
    },
    { passive: false }
  );

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", layout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(layout);
  layout();
})();
