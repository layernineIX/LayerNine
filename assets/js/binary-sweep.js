/* Layer Nine — brief binary-digit "sweep" transition between homepage
   sections. Not a looping animation: each .binary-sweep element plays a
   single ~400ms flicker of random 0/1 characters the moment it crosses
   into the top band of the viewport (i.e. right as the user scrolls from
   one section into the next), then goes fully idle again. */
(function () {
  "use strict";
  var sweeps = document.querySelectorAll(".binary-sweep");
  if (!sweeps.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function randomBits(count) {
    var out = [];
    for (var i = 0; i < count; i++) out.push(Math.random() < 0.5 ? "0" : "1");
    return out.join(" ");
  }

  sweeps.forEach(function (el) {
    var track = el.querySelector(".binary-sweep-track");
    if (!track) return;
    var playing = false;

    function play() {
      if (playing) return;
      playing = true;
      track.textContent = randomBits(220);
      el.classList.add("play");
    }
    track.addEventListener("animationend", function () {
      el.classList.remove("play");
      playing = false;
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) play();
        });
      },
      { threshold: 0, rootMargin: "0px 0px -80% 0px" }
    );
    io.observe(el);
  });
})();
