// * Hacked Text Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("title").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// * ScrollReveal
// Common reveal options to create reveal animations
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1250,
  delay: 200,
});

ScrollReveal().reveal(".game-card", {
  delay: 300,
  origin: "bottom",
});
