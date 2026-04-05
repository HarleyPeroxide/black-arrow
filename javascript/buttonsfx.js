function playButtonSound() {
  const audio = new Audio("assets/buttonhover.wav");
  audio.play();
}

document.querySelectorAll("button:not(.side-bar-toggle").forEach(btn => {
  btn.addEventListener("mouseenter", playButtonSound);

});

