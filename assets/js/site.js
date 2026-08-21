/* Layer Nine — shared site behaviour: nav, reveal-on-scroll, capability-gated
   3D parallax hero, HUD section index. No framework, no build step. */
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

  /* ---------- low-power / capability detection for 3D parallax ----------
     Heuristic, not a guarantee: gates the hero parallax + drifting cards
     behind device signals so mid-range Android doesn't get asked to run it.
     Anything uncertain falls back to the static layout. */
  function detect3DCapability() {
    if (reducedMotion) return false;
    if (window.matchMedia("(max-width: 760px)").matches) return false;
    var nav = window.navigator;
    if (nav.deviceMemory && nav.deviceMemory <= 4) return false;
    if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) return false;
    var conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ""))) return false;
    return true;
  }
  var can3D = detect3DCapability();
  if (!can3D) document.documentElement.classList.add("no-parallax");

  /* ---------- HUD active-section index (home page) ---------- */
  var hud = document.querySelectorAll("#ln-hud a");
  var sections = document.querySelectorAll("section[data-screen-label]");
  var planes = can3D ? document.querySelectorAll("[data-plane]") : [];

  if (sections.length && (hud.length || planes.length)) {
    var ticking = false;
    var frame = function () {
      ticking = false;
      var vh = window.innerHeight;

      if (can3D) {
        planes.forEach(function (el) {
          var r = el.getBoundingClientRect();
          /* Depth cue: driven by how far the section's leading edge is from
             the viewport, capped to +-1vh — independent of section height,
             so long sections (more service rows, etc.) don't fade to black. */
          var d = Math.max(-1, Math.min(1, r.top / vh));
          var a = Math.abs(d);
          el.style.transform = "translateZ(" + (-a * 220).toFixed(1) + "px) translateY(" + (d * -26).toFixed(1) + "px)";
          /* Opacity follows how much of the section is actually on screen,
             so tall sections stay fully readable while they're in view. */
          var visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
          var ratio = visible / Math.min(r.height, vh);
          el.style.opacity = Math.max(0.4, ratio).toFixed(3);
        });
      }

      if (hud.length) {
        var active = 0;
        sections.forEach(function (s, i) {
          var r = s.getBoundingClientRect();
          if (r.top <= vh * 0.5 && r.bottom >= vh * 0.5) active = i;
        });
        hud.forEach(function (h, i) { h.classList.toggle("active", i === active); });
      }
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(frame); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    frame();
  }
})();
