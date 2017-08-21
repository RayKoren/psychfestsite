$(document).ready(function() {
  // var items = $('#carouselHeader .carousel-item'); //grab all slides
  // function carouselNormalization() {
  //   items.each(function() {
  //     $(this).css('min-height', 500 + 'px');
  //   });
  // }
  // carouselNormalization();
  // Enable Carousel Controls
  $(".left").click(function() {
    $("#carouselHeader").carousel("prev");
  });
  $(".right").click(function() {
    $("#carouselHeader").carousel("next");
  });
});
