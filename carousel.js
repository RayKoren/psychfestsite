$(document).ready(function(){
    // Activate Carousel
    $("#carouselHeader").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#carouselHeader").carousel(0);
    });
    $(".item2").click(function(){
        $("#carouselHeader").carousel(1);
    });
    $(".item3").click(function(){
        $("#carouselHeader").carousel(2);
    });
    $(".item4").click(function(){
        $("#carouselHeader").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#carouselHeader").carousel("prev");
    });
    $(".right").click(function(){
        $("#carouselHeader").carousel("next");
    });
});
