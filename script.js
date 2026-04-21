const btnsFaq = document.querySelectorAll(".btn-faq");
const heroTitle = document.querySelector(".hero-title");

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

// displayHeroTitle();
