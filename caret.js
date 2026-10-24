// Click or tap the caret to replay its blink. Decorative only; skipped under reduced motion.
document.querySelectorAll(".caret").forEach(function (c) {
  c.addEventListener("click", function () {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    c.classList.toggle("reblink");
  });
});
