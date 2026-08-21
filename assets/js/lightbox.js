/* Layer Nine — shared image/video lightbox for work + project pages. */
(function () {
  "use strict";
  var lb = document.getElementById("lb");
  if (!lb) return;
  var inner = document.getElementById("lbInner");
  var caption = document.getElementById("lbCaption");

  function open(html, cap) {
    inner.innerHTML = html;
    caption.textContent = cap || "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
    inner.innerHTML = "";
  }
  window.lnOpenLB = function (src, alt, caption2) {
    open('<img src="' + src + '" alt="' + (alt || "") + '">', caption2);
  };
  window.lnOpenLBVideo = function (src, caption2) {
    open('<video src="' + src + '" autoplay controls loop playsinline></video>', caption2);
  };
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-close")) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();
