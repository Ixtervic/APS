/* ═══════════════════════════════════════════════════════════════
   script.js
   Evidencia de Estudio – Administración de Proyectos de Software
   ═══════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  /* ─────────────────────────────────────
     1. SCROLL REVEAL
  ───────────────────────────────────── */
  const revealEls = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  /* ─────────────────────────────────────
     2. NAVBAR – scroll class
  ───────────────────────────────────── */
  const nav = document.getElementById("topnav");

  function onScroll() {
    if (window.scrollY > 48) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // run once on load

  /* ─────────────────────────────────────
     3. HAMBURGER / MOBILE DRAWER
  ───────────────────────────────────── */
  const hamburger = document.getElementById("hamburger");
  const mobileDrawer = document.getElementById("mobileDrawer");
  let drawerOpen = false;

  function toggleDrawer(force) {
    drawerOpen = force !== undefined ? force : !drawerOpen;
    mobileDrawer.classList.toggle("open", drawerOpen);
    hamburger.setAttribute("aria-expanded", drawerOpen);
    mobileDrawer.setAttribute("aria-hidden", !drawerOpen);

    // Animate hamburger lines
    const spans = hamburger.querySelectorAll("span");
    if (drawerOpen) {
      spans[0].style.transform = "translateY(6.5px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-6.5px) rotate(-45deg)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  }

  hamburger.addEventListener("click", () => toggleDrawer());

  // Close drawer when a link is clicked
  document.querySelectorAll(".drawer-link").forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  // Close drawer on outside click
  document.addEventListener("click", (e) => {
    if (
      drawerOpen &&
      !mobileDrawer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      toggleDrawer(false);
    }
  });

  /* ─────────────────────────────────────
     4. SMOOTH SCROLL OFFSET (fixed nav)
  ───────────────────────────────────── */
  const NAV_HEIGHT = 64;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ─────────────────────────────────────
     5. KPI GAUGE ANIMATION on scroll
  ───────────────────────────────────── */
  const gauges = document.querySelec(
    /* script.js · APS – Evidencia de Estudio */
    function () {
      "use strict";

      /* ── 1. SCROLL REVEAL ── */
      const revealEls = document.querySelectorAll(".reveal");
      const ro = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              ro.unobserve(e.target);
            }
          }),
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );
      revealEls.forEach((el) => ro.observe(el));

      /* ── 2. NAV SCROLL CLASS ── */
      const nav = document.getElementById("topnav");
      window.addEventListener(
        "scroll",
        () => nav.classList.toggle("scrolled", window.scrollY > 40),
        { passive: true }
      );

      /* ── 3. CHAPTER DROPDOWN ── */
      const chapterBtn = document.getElementById("chapterBtn");
      const chapterMenu = document.getElementById("chapterMenu");
      let menuOpen = false;

      function toggleMenu(force) {
        menuOpen = force !== undefined ? force : !menuOpen;
        chapterMenu.classList.toggle("open", menuOpen);
        chapterBtn.setAttribute("aria-expanded", menuOpen);
        chapterMenu.setAttribute("aria-hidden", !menuOpen);
      }

      chapterBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
      });
      document.addEventListener("click", (e) => {
        if (
          menuOpen &&
          !chapterMenu.contains(e.target) &&
          !chapterBtn.contains(e.target)
        )
          toggleMenu(false);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuOpen) toggleMenu(false);
      });

      /* ── 4. HAMBURGER / MOBILE DRAWER ── */
      const hamburger = document.getElementById("hamburger");
      const mobileDrawer = document.getElementById("mobileDrawer");
      let drawerOpen = false;

      function toggleDrawer(force) {
        drawerOpen = force !== undefined ? force : !drawerOpen;
        mobileDrawer.classList.toggle("open", drawerOpen);
        hamburger.setAttribute("aria-expanded", drawerOpen);
        mobileDrawer.setAttribute("aria-hidden", !drawerOpen);
        const spans = hamburger.querySelectorAll("span");
        if (drawerOpen) {
          spans[0].style.transform = "translateY(6.5px) rotate(45deg)";
          spans[1].style.opacity = "0";
          spans[2].style.transform = "translateY(-6.5px) rotate(-45deg)";
        } else {
          spans[0].style.transform = spans[2].style.transform = "";
          spans[1].style.opacity = "";
        }
      }

      hamburger.addEventListener("click", () => toggleDrawer());
      document
        .querySelectorAll(".drawer-link")
        .forEach((l) => l.addEventListener("click", () => toggleDrawer(false)));
      document.addEventListener("click", (e) => {
        if (
          drawerOpen &&
          !mobileDrawer.contains(e.target) &&
          !hamburger.contains(e.target)
        )
          toggleDrawer(false);
      });

      /* ── 5. SMOOTH SCROLL (offset for fixed nav) ── */
      const NAV_H = 62;
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", function (e) {
          const target = document.querySelector(this.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - NAV_H,
            behavior: "smooth",
          });
        });
      });
    }
  )();
  torAll(".kpi-card__gauge svg circle:last-child");

  const gaugeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target;
          const finalOffset = parseFloat(
            circle.getAttribute("stroke-dashoffset")
          );
          circle.style.strokeDashoffset = "201"; // start from empty
          circle.style.transition =
            "stroke-dashoffset 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s";
          // Force reflow
          circle.getBoundingClientRect();
          circle.style.strokeDashoffset = finalOffset;
          gaugeObserver.unobserve(circle);
        }
      });
    },
    { threshold: 0.5 }
  );

  gauges.forEach((g) => gaugeObserver.observe(g));
})();
