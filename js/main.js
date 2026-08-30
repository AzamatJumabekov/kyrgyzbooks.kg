/* Kyrgyz Publishing — shared site script (mobile menu + demo-video placeholder state).
   Loaded by every locale; no build step, no dependencies. */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Demo-video download buttons: each link carries data-available="true|false".
  // Set it to "true" once the real .mp4 file has been dropped into /assets/downloads/.
  var demoLinks = document.querySelectorAll("[data-demo-download]");
  demoLinks.forEach(function (link) {
    var available = link.getAttribute("data-available") === "true";
    if (!available) {
      link.classList.add("is-disabled");
      link.setAttribute("aria-disabled", "true");
      link.removeAttribute("href");
      link.removeAttribute("download");
      var label = link.querySelector(".label");
      if (label) {
        label.textContent = label.textContent.replace(/$/, "") + " — coming soon";
      }
      link.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  });
})();
