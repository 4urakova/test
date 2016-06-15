var openPopup = document.querySelector(".popup");
var shareButton = document.querySelector(".btn--share");
var closePopup = document.querySelector(".popup--opened");
var crossButton = document.querySelector(".popup__close");
var site = document.querySelector("body");
var closeBanner = document.querySelector(".notification__close");
var overlay = document.querySelector(".overlay");
var doc = document.querySelector(".docs__file");
var shareIcons = document.querySelectorAll(".icon--share");
var shareIcon = document.querySelector(".icon--share");

[].forEach.call(shareIcons, function(popup) {
    shareIcon.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Share clicked");
    overlay.classList.add("overlay--visible");
    openPopup.classList.add("popup--opened");
  });
});

shareButton.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("Share clicked");
  overlay.classList.add("overlay--visible");
  openPopup.classList.add("popup--opened");
});

crossButton.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("Cross clicked");
  overlay.classList.remove("overlay--visible");
  openPopup.classList.remove("popup--opened");
});

closeBanner.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("Cross clicked");
  site.classList.add("hide-banner");
});

doc.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Doc clicked");
  confirm("Do you really want to download this files?");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27){
  if (openPopup.classList.contains("popup--opened")) {
  overlay.classList.remove("overlay--visible");
  openPopup.classList.remove("popup--opened");
  }
 }
});