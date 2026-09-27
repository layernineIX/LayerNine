/* Layer Nine — shared site behaviour: mobile nav + reveal-on-scroll.
   No framework, no build step.

   Note: this file previously also drove a 3D scroll-parallax hero and a
   fixed-position section-index HUD (#ln-hud). Both were retired from the
   homepage as a design decision — restrained motion only, no pinned/parallax
   scroll effects — and their markup/CSS ([data-plane], #ln-hud, .no-parallax)
   has been removed from the pages that used them. This file no longer
   references them. */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById("lnBurger");
  var panel = document.getElementById("lnMobilePanel");
  if (burger && panel) {
    burger.addEventListener("click", function () {
      panel.classList.toggle("open");
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { panel.classList.remove("open"); });
    });
  }

  /* ---------- reveal on scroll ---------- */
  var risers = document.querySelectorAll("[data-rise]");
  if (risers.length) {
    if (reducedMotion) {
      risers.forEach(function (el) { el.classList.add("in"); });
    } else {
      risers.forEach(function (el, i) {
        el.style.transitionDelay = (i % 5) * 0.07 + "s";
      });
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      risers.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- homepage section reveal ----------
     Each homepage section (below the hero) fades in and rises as a single
     unit the first time it enters the viewport — a quiet "page-turn" feel,
     distinct from the finer-grained [data-rise] staggering used elsewhere.
     Plays once per section; no scroll hijacking or pinning. */
  var sectionRisers = document.querySelectorAll("[data-section-rise]");
  if (sectionRisers.length) {
    if (reducedMotion) {
      sectionRisers.forEach(function (el) { el.classList.add("in"); });
    } else {
      /* Trigger as the section's top edge crosses well into the viewport
         (rather than waiting for ~12% of its area to show), so the fade
         plays while it's visibly scrolling into place, not after. */
      var sectionIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              sectionIo.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -15% 0px" }
      );
      sectionRisers.forEach(function (el) { sectionIo.observe(el); });
    }
  }
})();
