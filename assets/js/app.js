(function () {
  let progress = document.querySelectorAll(".progress-bar");

  progress.forEach(function (item) {
    let width = item.parentElement.getAttribute("data-progress-percent");
    console.log(width);
    item.style.width = width + "%";
  });
})();
