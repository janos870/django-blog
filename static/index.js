document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".commentBtn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const commentText = this.parentElement.querySelector(".short-text");
      const fullText = this.parentElement.querySelector(".full-text");

      if (commentText.style.display === "none") {
        commentText.style.display = "block";
        fullText.style.display = "none";
        this.innerHTML = "Show more";
      } else {
        commentText.style.display = "none";
        fullText.style.display = "block";
        this.innerHTML = "Show less";
      }
    });
  });
});
