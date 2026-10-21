/* The letter is a fictional interaction: no transmission or storage. */
(function () {
  "use strict";
  function initLetter() {
    var form = document.getElementById("letter-form");
    if (!form || form.dataset.ready) return;
    form.dataset.ready = "true";

    var input = document.getElementById("reader-letter");
    var button = document.getElementById("send-letter");
    var feedback = document.getElementById("letter-feedback");
    var ending = document.getElementById("letter-ending");
    var dust = document.getElementById("letter-dust");
    var timeLeft = document.getElementById("time-left");
    var caption = document.getElementById("time-caption");
    var sent = false;
    var countdown = null;
    var started = false;
    var seconds = 55;

    // Begin the atmospheric countdown only when the reader starts writing.
    // Reaching zero does not remove the page or interrupt their writing.
    input.addEventListener("input", function () {
      if (sent) return;
      feedback.textContent = "";
      if (started || !input.value.trim()) return;
      started = true;
      countdown = window.setInterval(function () {
        seconds = Math.max(0, seconds - 1);
        timeLeft.textContent = String(seconds).padStart(2, "0");
        if (seconds === 0) {
          window.clearInterval(countdown);
          caption.textContent = "No time remains.";
        }
      }, 1000);
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (sent) return;
      if (!input.value.trim()) {
        feedback.textContent = "Leave me a few words first, dear friend.";
        input.focus();
        return;
      }

      sent = true;
      window.clearInterval(countdown);
      input.readOnly = true;
      button.disabled = true;
      button.textContent = "Sending…";
      feedback.textContent = "";
      caption.textContent = "No time remains.";
      timeLeft.textContent = "00";

      // Release the mobile keyboard before revealing the ending.
      if (document.activeElement) document.activeElement.blur();
      form.classList.add("is-dissolving");

      var reducedMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!reducedMotion) {
        for (var i = 0; i < 55; i++) {
          var grain = document.createElement("span");
          grain.className = "dust-grain";
          grain.style.left = (4 + Math.random() * 92) + "%";
          grain.style.top = (20 + Math.random() * 60) + "%";
          grain.style.setProperty("--dx", (-90 + Math.random() * 180) + "px");
          grain.style.animationDelay = (Math.random() * 0.25) + "s";
          dust.appendChild(grain);
        }
      }

      window.setTimeout(function () {
        input.value = "";
        form.hidden = true;
        dust.textContent = "";
        ending.hidden = false;
        document.getElementById("ending-title").focus();
      }, reducedMotion ? 0 : 1600);
    });

    // Preserve the original bottom-right navigation artwork.
    var arrow = document.getElementById("obj2968");
    if (arrow) {
      arrow.setAttribute("role", "link");
      arrow.setAttribute("tabindex", "0");
      arrow.setAttribute("aria-label", "Turn the page");
      arrow.addEventListener("click", function () {
        window.location.href = "../12/page.xhtml";
      });
      arrow.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = "../12/page.xhtml";
        }
      });
    }

    if (window.jQuery && window.PubCoder) {
      window.jQuery(window).trigger(window.PubCoder.Events.PageReady);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLetter);
  } else {
    initLetter();
  }
})();
