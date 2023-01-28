// variables
const shareBtn = document.querySelector(".share-btn")
const share = document.getElementsByClassName("share")
// event listener for btn
shareBtn.addEventListener("click", function () {
  share[0].classList.toggle("avtive")
  shareBtn.classList.toggle("active-btn")
})
