$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    var topVal = 0;
    if ($(this).hasClass("active")) {
      topVal = -980;
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
    $("#header nav").stop().animate(
      {
        top: topVal,
      },
      500
    );
    $("#header nav>ul>li>a").click(function () {
      $(".menu-toggle").removeClass("active");
      $("#header nav").stop().animate(
        {
          top: -980,
        },
        500
      );
    });
  });

  //===== Trending Slider =====
  $(".md-view").slick({
    dots: true,
    infinite: true,
    speed: 500,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
//===== Tab =====
$("ul.tabs li").click(function () {
  var tab_id = $(this).attr("data-tab");
  $("ul.tabs li").removeClass("activeTab");
  $(".tab-content").removeClass("activeTab");
  $(this).addClass("activeTab");
  $("#" + tab_id).addClass("activeTab");
});
$("#header h1 a").on("click", function () {
  alert("This is Tab");
});
