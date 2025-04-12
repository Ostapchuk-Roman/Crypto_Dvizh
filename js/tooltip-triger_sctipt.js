const tooltipTrigger = document.querySelector(".tooltip-trigger");
const tooltipText = document.querySelector(".tooltip-text");

tooltipTrigger.addEventListener("click", function () {
  tooltipText.style.visibility =
    tooltipText.style.visibility === "visible" ? "hidden" : "visible";
  tooltipText.style.opacity = tooltipText.style.opacity === "1" ? "0" : "1";
});
