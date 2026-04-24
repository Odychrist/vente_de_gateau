const btnsFaq = document.querySelectorAll(".btn-faq");
const heroTitle = document.querySelector(".hero-title");
const menuBar = document.querySelector(".menu-bar");
const specialEl = document.querySelector(".special");

/* function displayHeroTitle() {
  const words = heroTitle.textContent.split(" ");
  heroTitle.innerHTML = words
    .map((word, i) => {
      return `<span style="animation-delay:${i * 0.2}s">${word}</span> `;
    })
    .join(" ");
} */
btnsFaq.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const questionDiv = e.target.closest(".question-div");
    const text = questionDiv.querySelector(".texte");
    // text.style.display = "block";

    if (text.classList.contains("affiche")) {
      text.classList.remove("affiche");
      e.target.classList.remove("fa-chevron-up");
      e.target.classList.add("fa-chevron-down");
    } else {
      document.querySelectorAll(".texte").forEach((text) => {
        text.classList.remove("affiche");
        const el = text.previousElementSibling.querySelector(".fa-solid");

        el.classList.remove("fa-chevron-up");
        el.classList.add("fa-chevron-down");
      });
      text.classList.add("affiche");
      e.target.classList.remove("fa-chevron-down");
      e.target.classList.add("fa-chevron-up");
    }
  });
});

/* menuBar.addEventListener("click", () => {
  const i = menuBar.querySelector("i");
  if (i.classList.contains("fa-bars")) {
    i.classList.remove("fa-bars");
    i.classList.add("fa-check");
    specialEl.style.display = "flex";
    document.querySelector(".logo").style.display = "";
    document.querySelector("main").style.display = "";
    document.querySelector("footer").style.display = "";
  } else {
    i.classList.remove("fa-check");
    i.classList.add("fa-bars");
    specialEl.style.display = "";
    document.querySelector("").style.display = "flex";
    document.querySelector("main").style.display = "block";
    document.querySelector("footer").style.display = "block";
  }
}); */

// displayHeroTitle();
