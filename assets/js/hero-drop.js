/* Layer Nine — homepage hero media drop zone. Lets a visitor drag/drop or
   browse a local file into the hero for an in-browser preview only — there
   is no upload backend, so nothing here persists or leaves the browser. */
(function () {
  "use strict";
  var media = document.getElementById("heroMedia");
  if (!media) return;

  var bg = document.getElementById("heroMediaBg");
  var browseBtn = document.getElementById("heroBrowseBtn");
  var fileInput = document.getElementById("heroFileInput");
  var replayBtn = document.getElementById("heroReplay");
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* The baked-in hero video autoplays via its own HTML `autoplay` attribute —
     browsers handle that natively and more reliably than a JS .play() call
     made at script-parse time. We only need to intervene for reduced motion. */
  var initialVideo = bg.querySelector("video");
  if (initialVideo && reducedMotion) {
    initialVideo.removeAttribute("autoplay");
    initialVideo.pause();
    initialVideo.setAttribute("controls", "");
    initialVideo.loop = false;
  }

  function showFile(file) {
    if (!/^image\/|^video\//.test(file.type)) return;
    var url = URL.createObjectURL(file);
    var isVideo = file.type.indexOf("video") === 0;
    var el = document.createElement(isVideo ? "video" : "img");
    if (isVideo) {
      el.muted = true;
      el.playsInline = true;
      if (reducedMotion) {
        el.controls = true;
      } else {
        el.loop = true;
        el.autoplay = true;
      }
    } else {
      el.alt = "Hero preview";
    }
    el.src = url;
    bg.innerHTML = "";
    bg.appendChild(el);
    media.classList.add("has-media");
  }

  if (browseBtn && fileInput) {
    browseBtn.addEventListener("click", function () { fileInput.click(); });
    fileInput.addEventListener("change", function () {
      if (fileInput.files && fileInput.files[0]) showFile(fileInput.files[0]);
    });
  }

  ["dragover", "dragenter"].forEach(function (evt) {
    media.addEventListener(evt, function (e) {
      e.preventDefault();
      media.style.borderColor = "var(--accent-bright)";
    });
  });
  ["dragleave", "drop"].forEach(function (evt) {
    media.addEventListener(evt, function (e) {
      e.preventDefault();
      media.style.borderColor = "";
    });
  });
  media.addEventListener("drop", function (e) {
    var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) showFile(file);
  });

  if (replayBtn) {
    replayBtn.addEventListener("click", function () {
      var v = bg.querySelector("video");
      if (v) { v.currentTime = 0; v.play(); }
    });
  }
})();
