(function () {
  "use strict";
  var isiPad = function () {
    return navigator.platform.indexOf("iPad") != -1;
  };
  var isiPhone = function () {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  };
  var parallax = function () {
    $(window).stellar({
      horizontalScrolling: false,
      hideDistantElements: false,
      responsive: true,
    });
  };
  $(function () {
    parallax();
  });
})();
