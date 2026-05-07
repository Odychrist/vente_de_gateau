const btnsFaq = document.querySelectorAll(".btn-faq");
const menuBar = document.querySelector(".mobile-div");
const btnMenu = document.getElementById("btn-menu");
const specialEl = document.querySelector(".special");
const titleHero = document.getElementById("hero-title");
const btnCloseMenu = document.getElementById("btn-close");
const btnCmd = document.querySelector(".btn-cmd-ctc");
const year = document.getElementById("year");

btnMenu.addEventListener("click", displayMenu);
btnCloseMenu.addEventListener("click", hideMenu);

function displayMenu() {
  menuBar.classList.add("active");
}

function hideMenu() {
  menuBar.classList.remove("active");
}

let index = 0;
let text = "";
const fullText = titleHero.innerHTML;

function displayText() {
  text += fullText.charAt(index);
  index++;
  titleHero.innerHTML = text;
}

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

if (index < fullText.length) {
  setInterval(() => {
    displayText();
  }, 35);
}

btnCmd.addEventListener("click", () => {
  window.open("https://wa.me/2290152118061", (target = "_blank"));
});

year.textContent = new Date().getFullYear();
