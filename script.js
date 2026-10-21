const background = document.querySelector(".cyber-background");
let frame = null;

background.addEventListener("pointermove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  if (frame) cancelAnimationFrame(frame);

  frame = requestAnimationFrame(() => {
    background.style.setProperty("--mouse-x", `${x * 100}%`);
    background.style.setProperty("--mouse-y", `${y * 100}%`);
    background.style.setProperty("--grid-x", `${(x - 0.5) * -28}px`);
    background.style.setProperty("--grid-y", `${(y - 0.5) * -18}px`);
    background.style.setProperty("--grid-rotate", `${(x - 0.5) * 8}deg`);
     background.style.setProperty("--card-tilt-x", `${(0.5 - y) * 8}deg`);
      background.style.setProperty("--card-tilt-y", `${(x - 0.5) * 10}deg`);
  });
});