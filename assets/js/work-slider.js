/* Layer Nine — homepage "Selected Work" horizontal slider. A plain
   scrollable row (native touch swipe, scroll-snap) with two real <button>
   arrows layered on top for click/keyboard users. Cards and links are
   untouched — this only controls scroll position and button state. */
(function () {
  "use strict";
  var track = document.getElementById("workSlider");
  var prevBtn = document.getElementById("workPrev");
  var nextBtn = document.getElementById("workNext");
  if (!track || !prevBtn || !nextBtn) return;

  function cardStep() {
    var first = track.querySelector(".work-tile");
    if (!first) return track.clientWidth;
    var style = getComputedStyle(track);
    var gap = parseFloat(style.columnGap || style.gap || "0") || 0;
    return first.getBoundingClientRect().width + gap;
  }

  function updateArrows() {
    var maxScroll = track.scrollWidth - track.clientWidth;
    var atStart = track.scrollLeft <= 2;
    var atEnd = track.scrollLeft >= maxScroll - 2;
    prevBtn.disabled = atStart;
    nextBtn.disabled = maxScroll <= 2 || atEnd;
  }

  prevBtn.addEventListener("click", function () {
    track.scrollBy({ left: -cardStep(), behavior: "smooth" });
  });
  nextBtn.addEventListener("click", function () {
    track.scrollBy({ left: cardStep(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateArrows, { passive: true });
  window.addEventListener("resize", updateArrows);
  updateArrows();
})();
