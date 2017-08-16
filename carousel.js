$(document).ready(function(){
carouselNormalization();
function carouselNormalization() {
  console.log('hi');
var items = $('#carouselHeader .item'), //grab all slides
    heights = [], //create empty array to store height values
    tallest; //create variable to make note of the tallest slide
    function normalizeHeights() {
        items.each(function() { //add heights to array
            heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $(this).css('min-height',tallest + 'px');
        });
    }
if (items.length) {

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        tallest = 0, heights.length = 0; //reset vars
        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        });
        normalizeHeights(); //run it again
    });
}
}

   // Enable Carousel Controls
   $(".left").click(function(){
       $("#carouselHeader").carousel("prev");
   });
   $(".right").click(function(){
       $("#carouselHeader").carousel("next");
   });
});
