function myFunction() {
    var $nav = $(".navbar");
      $nav.toggleClass('clicked', $(this).onclick);
}
function myFunction1() {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
}
$(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $("a");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function() {
    $(window).scroll(function () {
      var $nav = $(".fa-navicon");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function() {
    if (window.scrollTop = 1) {
      document.getElementById("icon").src = "_img/icon-yellow.png";
    }
    else {
      document.getElementById("icon1").src = "_img/icon-yellow.png";
    }
  });
  $(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});