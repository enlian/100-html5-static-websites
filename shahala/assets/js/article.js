jQuery(document).ready(function () {
  jQuery(".owl-carousel4").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: true,
      },
    },
  });
  jQuery(".owl-carousel5").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: true,
      },
    },
  });
});
function myFunction(x) {
  x.classList.toggle("change");
}
jQuery(".link-img").click(function () {
  var link = jQuery(this).attr("data-link");
  jQuery("#screen").attr("src", link);
});
var count = 0;
jQuery("#toggle-search").click(function () {
  count++;
  var isEven = function (someNumber) {
    return someNumber % 2 === 0 ? true : false;
  };
  if (isEven(count) === false) {
    jQuery("#nav-search").slideDown();
    jQuery("#toggle-search").attr("src", "assets/images/close.png");
  } else if (isEven(count) === true) {
    jQuery("#nav-search").slideUp();
    jQuery("#toggle-search").attr("src", "assets/images/search-icon.png");
  }
});
