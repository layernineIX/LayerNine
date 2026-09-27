/* Layer Nine — homepage hero video control. Provides a visible, accessible
   pause/play toggle for the autoplaying hero video, and starts the video
   paused (with a static poster frame) when the visitor has requested
   reduced motion. No drag-and-drop, no upload — the hero media is fixed. */
(function () {
  "use strict";
  var video = document.getElementById("heroVideo");
  var toggle = document.getElementById("heroPlayToggle");
  if (!video || !toggle) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setLabel(playing) {
    toggle.setAttribute("aria-pressed", String(!playing));
    toggle.querySelector(".hero-toggle-label").textContent = playing ? "Pause" : "Play";
  }

  if (reducedMotion) {
    video.removeAttribute("autoplay");
    video.pause();
    video.currentTime = 0;
    setLabel(false);
  } else {
    setLabel(true);
  }

  toggle.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      setLabel(true);
    } else {
      video.pause();
      setLabel(false);
    }
  });
})();
