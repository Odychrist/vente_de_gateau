const buttons = document.querySelectorAll(".btn-cmd");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let message = "";
    let encodedMessage = "";
    const productDiv = btn.closest(".product-div");

    if (productDiv) {
      const text = productDiv.querySelector("h3").textContent;
      message = `Bonjour, j'aimerais commander : ${text}`;
      encodedMessage = encodeURIComponent(message);
    } else {
      message = `Bonjour, j'aimerais commander un de vos produits.`;
      encodedMessage = encodeURIComponent(message);
    }
    // console.log(message, encodedMessage);
    const phone = "2290152118061";

    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  });
});
