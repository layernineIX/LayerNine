/* Layer Nine — contact chat widget (home page) + contact form (contact.html).
   The home page chat widget has no backend, so it builds a plain mailto:
   draft to layernineix@gmail.com. The contact page form submits to
   Web3Forms (endpoint set via the form's action="" in contact.html) and
   only falls back to a mailto: draft if that request fails outright. */
(function () {
  "use strict";
  var STUDIO_EMAIL = "layernineix@gmail.com";

  function openMailto(subject, body) {
    var href = "mailto:" + STUDIO_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  }

  /* ================= Home page chat widget ================= */
  var chatRoot = document.getElementById("lnChat");
  if (chatRoot) {
    var log = document.getElementById("chatLog");
    var textarea = document.getElementById("chatText");
    var sendBtn = document.getElementById("chatSend");
    var attachBtn = document.getElementById("chatAttach");
    var fileInput = document.getElementById("chatFileInput");
    var fileChipsWrap = document.getElementById("chatFileChips");
    var useSummaryBtn = document.getElementById("useSummary");
    var summaryLines = document.getElementById("summaryLines");
    var formatChips = document.querySelectorAll("[data-format-chip]");
    var scaleChips = document.querySelectorAll("[data-scale-chip]");

    var formats = ["Brand film", "Launch campaign", "Product hero", "Long-form doc"];
    var scales = ["Small", "Full production", "Ongoing monthly"];
    var scaffolds = [
      ["We plan the shots and, if it helps, mock up a few key frames first.", "One small crew, 1–2 days filming, in KL or nearby.", "Any digital scenes get added afterward, without slowing down the shoot.", "One finished film plus a few different cuts for social."],
      ["We write the story and test the look before anything is booked.", "A full crew, several shoot days, possibly more than one location.", "Digital scenes and effects built to match the footage exactly.", "A main film plus shorter cuts and a set of photos, all from the same shoot."],
      ["We set up a plan for what gets made and when, month by month.", "Regular, smaller shoots instead of one big production.", "A shared library of digital scenes and assets we reuse and build on.", "A steady stream of new films and photos, delivered on a schedule."]
    ];

    var state = { fmt: 0, scale: 1, files: [] };

    function renderChips() {
      formatChips.forEach(function (c) { c.classList.toggle("active", Number(c.dataset.formatChip) === state.fmt); });
      scaleChips.forEach(function (c) { c.classList.toggle("active", Number(c.dataset.scaleChip) === state.scale); });
    }
    function renderSummary() {
      var base = scaffolds[state.scale];
      var lines = [
        ["STEP 1", base[0]], ["STEP 2", base[1]], ["STEP 3", base[2]], ["DELIVERY", base[3]],
        ["SHAPE", formats[state.fmt] + " — " + scales[state.scale].toLowerCase() + ", start to finish."]
      ];
      summaryLines.innerHTML = lines.map(function (l) {
        return '<div class="summary-line"><span class="n">' + l[0] + '</span><span class="t">' + l[1] + "</span></div>";
      }).join("");
    }
    formatChips.forEach(function (c) {
      c.addEventListener("click", function () { state.fmt = Number(c.dataset.formatChip); renderChips(); renderSummary(); });
    });
    scaleChips.forEach(function (c) {
      c.addEventListener("click", function () { state.scale = Number(c.dataset.scaleChip); renderChips(); renderSummary(); });
    });
    if (useSummaryBtn) {
      useSummaryBtn.addEventListener("click", function () {
        var summary = "We're after a " + formats[state.fmt].toLowerCase() + " — " + scales[state.scale].toLowerCase() + " scope. Here is what we need: ";
        textarea.value = summary;
        textarea.focus();
      });
    }
    if (attachBtn && fileInput) {
      attachBtn.addEventListener("click", function () { fileInput.click(); });
      fileInput.addEventListener("change", function () {
        state.files = state.files.concat(Array.from(fileInput.files || []).map(function (f) { return f.name; }));
        fileChipsWrap.innerHTML = state.files.map(function (n) { return '<span class="chat-file-chip">' + n + "</span>"; }).join("");
        fileChipsWrap.style.display = state.files.length ? "flex" : "none";
      });
    }
    function addMsg(text, who) {
      var div = document.createElement("div");
      div.className = "chat-msg" + (who === "you" ? " you" : "");
      div.textContent = text;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
    }
    if (sendBtn) {
      sendBtn.addEventListener("click", function () {
        var text = (textarea.value || "").trim();
        if (!text) { textarea.focus(); return; }
        addMsg(text, "you");
        var subject = "New project inquiry — Layer Nine website";
        var bodyParts = [
          text, "",
          "Format: " + formats[state.fmt], "Size: " + scales[state.scale]
        ];
        if (state.files.length) bodyParts.push("", "Referenced files (please attach manually): " + state.files.join(", "));
        openMailto(subject, bodyParts.join("\n"));
        addMsg("Drafted in your email app — hit send there and it reaches us directly.", "studio");
        textarea.value = "";
      });
      textarea.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendBtn.click(); }
      });
    }
    renderChips();
    renderSummary();
  }

  /* ================= Contact page form =================
     Submits to Web3Forms (form.action, set in contact.html) so the page
     shows an inline confirmation instead of navigating away. Falls back
     to a mailto: draft only if that request fails outright. */
  var form = document.getElementById("contactForm");
  if (form) {
    var status = document.getElementById("formStatus");
    var submitBtn = document.getElementById("submitBtn");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      if (data.get("_gotcha")) return; // honeypot

      status.className = "contact-status";
      status.textContent = "Sending…";
      submitBtn.disabled = true;

      fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (json) {
            return { ok: res.ok, json: json };
          });
        })
        .then(function (result) {
          if (result.ok && result.json && result.json.success) {
            form.reset();
            status.textContent = "Thanks — we'll get back to you within 48 hours.";
            status.classList.add("ok");
          } else {
            throw new Error((result.json && result.json.message) || "Submission failed");
          }
        })
        .catch(function () {
          status.textContent = "Something went wrong — opening your email client instead.";
          status.classList.add("err");
          mailtoFallback(data);
        })
        .finally(function () { submitBtn.disabled = false; });
    });
    function mailtoFallback(data) {
      var subject = "New project inquiry — Layer Nine website";
      var body = [
        "Name: " + (data.get("name") || ""),
        "Email: " + (data.get("email") || ""),
        "Project type: " + (data.get("project_type") || ""),
        "Budget range: " + (data.get("budget_range") || "Prefer not to say"),
        "", "Message:", data.get("message") || ""
      ].join("\n");
      openMailto(subject, body);
    }
  }
})();
