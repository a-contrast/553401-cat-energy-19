var mobileMenu = document.querySelector(".page-nav__list");
var mobileMenuToggle = document.querySelector(".page-header__toggle");

mobileMenuToggle.addEventListener("click", function (evt) {
  mobileMenuToggle.classList.toggle("page-header__toggle--close");
  mobileMenu.classList.toggle("page-nav__list--close");

  if (document.querySelector(".page-nav__list--close")) {
    mobileMenu.style.height = 0;
  } else {
    var SumMenuItems = mobileMenu.getElementsByClassName("page-nav__item").length;
    var menuHeight = (SumMenuItems * 66);
    mobileMenu.style.height = menuHeight + "px";
  }
});

if (document.querySelector(".page-index")) {

  var sliderBtnLeft = document.querySelector(".example__range-button--before");
  var sliderBtnRight = document.querySelector(".example__range-button--after");
  var sliderToggle = document.querySelector(".example__progress-toggle");
  var sliderImgLeft = document.querySelector(".example__image--left");
  var sliderImgRight = document.querySelector(".example__image--right");


  sliderBtnLeft.addEventListener("click", function (evt) {
    sliderToggle.classList.remove("example__progress-toggle--right");
    sliderImgLeft.classList.remove("opacity");
    sliderImgRight.classList.add("opacity");

  });

  sliderBtnRight.addEventListener("click", function (evt) {
    sliderToggle.classList.add("example__progress-toggle--right");
    sliderImgLeft.classList.add("opacity");
    sliderImgRight.classList.remove("opacity");

  });

}
