/* Layer Nine — homepage "Selected Work" hover/tap video preview (SKAI only,
   the one project with real video assets). The poster image is the real
   content; the clip is a muted, looped extra that only loads when a visitor
   actually asks for it — hover on capable desktops, or an explicit tap/
   keyboard press of the always-visible play control. The project name and
   link never depend on hover: they're a normal link, not part of this. */
(function () {
  "use strict";
  var tiles = document.querySelectorAll("[data-preview-video]");
  if (!tiles.length) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  tiles.forEach(function (slot) {
    var src = slot.getAttribute("data-preview-video");
    var video = slot.querySelector(".wt-video");
    var btn = slot.querySelector(".wt-play");
    if (!video || !btn) return;
    var loaded = false;

    function load() {
      if (loaded) return;
      video.src = src;
      loaded = true;
    }
    function play() {
      load();
      video.play().catch(function () {});
      slot.classList.add("playing");
      btn.setAttribute("aria-pressed", "true");
    }
    function stop() {
      video.pause();
      slot.classList.remove("playing");
      btn.setAttribute("aria-pressed", "false");
    }

    if (canHover && !reducedMotion) {
      slot.addEventListener("mouseenter", play);
      slot.addEventListener("mouseleave", stop);
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      if (slot.classList.contains("playing")) stop();
      else play();
    });
  });
})();
