var openPopup                 = document.querySelector(".popup");
var shareButton               = document.querySelector(".btn--share");
var shareIcon                 = document.querySelector(".icon--share");
var closePopup                = document.querySelector(".popup--opened");
var crossButton               = document.querySelector(".popup__close");
var site                      = document.querySelector("body");
var banner                    = document.querySelector(".notification");
var closeBanner               = document.querySelector(".hide-banner");
var crossButtonBanner         = document.querySelector(".notification__close");
var overlay                   = document.querySelector(".overlay");
var openOverlay               = document.querySelector(".overlay--visible");
var doc                       = document.querySelector(".docs__file");

shareButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Share clicked");
  overlay.classList.add("overlay--visible");
  openPopup.classList.add("popup--opened");
});

shareIcon.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Share clicked");
  openPopup.classList.add("popup--opened");
  overlay.classList.add("overlay--visible");
});

crossButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Cross clicked");
  overlay.classList.remove("overlay--visible");
  openPopup.classList.remove("popup--opened");
});

crossButtonBanner.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Cross clicked");
  site.classList.add("hide-banner");
});

doc.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Doc clicked");
  confirm("Do you want to download this files?");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27){
  if (openPopup.classList.contains("popup--opened")) {
  overlay.classList.remove("overlay--visible");
  openPopup.classList.remove("popup--opened");
  }
 }
});