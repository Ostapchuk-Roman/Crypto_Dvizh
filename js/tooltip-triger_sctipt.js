const tooltipTriggers = document.querySelectorAll(".tooltip-trigger");
const tooltipTexts = document.querySelectorAll(".tooltip-text");

tooltipTriggers.forEach(function (tooltipTrigger, index) {
  const tooltipText = tooltipTexts[index];

  tooltipTrigger.addEventListener("click", function (event) {
    // Змінюємо видимість підказки для натиснутого елемента
    tooltipText.style.visibility =
      tooltipText.style.visibility === "visible" ? "hidden" : "visible";
    tooltipText.style.opacity = tooltipText.style.opacity === "1" ? "0" : "1";

    // Запобігаємо поширенню події, щоб не спрацював обробник для document
    event.stopPropagation();
  });
});

// Додаємо обробник події для кліку в будь-яке місце на сторінці
document.addEventListener("click", function () {
  tooltipTexts.forEach(function (tooltipText) {
    tooltipText.style.visibility = "hidden";
    tooltipText.style.opacity = "0";
  });
});
