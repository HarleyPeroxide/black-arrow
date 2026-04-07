  const x = document.querySelector(".side-bar");
  const z = document.querySelector(".side-bar-toggle");

  function sidebartoggle() {
    x.classList.toggle("show");
    z.classList.toggle("move");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 550) {
      x.classList.remove("show");
      z.classList.remove("move");
    }
  });