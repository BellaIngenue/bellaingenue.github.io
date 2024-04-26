var cryingEmoji = document.querySelector(".crying-emoji");

cryingEmoji.addEventListener("click", function () {
  this.classList.add("crying");
});

cryingEmoji.addEventListener("click", function () {
  this.classList.remove("crying");
});
