function toggleComment(commentId) {
  const toggleBtn = document.getElementById(`toggleBtn-${commentId}`);
  const shortText = document.getElementById(`short-text-${commentId}`);
  const fullText = document.getElementById(`full-text-${commentId}`);

  if (shortText.style.display === "none") {
    shortText.style.display = "inline";
    fullText.style.display = "none";
    toggleBtn.innerText = "Show more";
  } else {
    shortText.style.display = "none";
    fullText.style.display = "inline";
    toggleBtn.innerText = "Show less";
  }
}


const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    navbar.classList.add("change-background");
  } else {
    navbar.classList.remove("change-background");
  }
};


