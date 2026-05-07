const buttons = document.querySelectorAll(".btn-cmd");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productDiv = btn.closest(".product-div");
    const text = productDiv.querySelector("h3").textContent;

    const message = `Bonjour, j'aimerais commander : ${text}`;
    const encodedMessage = encodeURIComponent(message);

    const phone = "2290152118061";

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  });
});
