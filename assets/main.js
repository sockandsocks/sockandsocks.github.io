// SOCK & SOCKS — hero video control.
(() => {
  const video = document.querySelector(".hero-video");
  const toggle = document.querySelector(".video-toggle");
  if (!video || !toggle) return;

  const setState = (paused) => {
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
  };

  // Respect reduced motion: start on the poster frame, let the visitor choose to play.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.removeAttribute("autoplay");
    video.pause();
    setState(true);
  }

  toggle.addEventListener("click", () => {
    if (video.paused) { video.play(); setState(false); }
    else { video.pause(); setState(true); }
  });
})();
