document.querySelectorAll(".button-buy, .button-tickets").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  });
});
