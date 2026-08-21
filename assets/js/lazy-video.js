/* Layer Nine — lazy-loaded background video. Videos only start downloading
   once scrolled near the viewport, and pause off-screen, so a gallery of
   several autoplay clips doesn't load multi-megabyte video on first paint
   (important on the mid-range Android connections this site expects). */
(function () {
  "use strict";
  var videos = document.querySelectorAll("video[data-lazy]");
  if (!videos.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    videos.forEach(function (v) { v.setAttribute("controls", ""); v.removeAttribute("loop"); });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          v.play().catch(function () {});
        } else {
          v.pause();
        }
      });
    },
    { rootMargin: "200px" }
  );
  videos.forEach(function (v) { io.observe(v); });
})();
