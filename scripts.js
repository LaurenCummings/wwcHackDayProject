$(window).scroll(function() {
  var middleOffset = $('#infographic').offset().top;
  var windowScroll = $(window).scrollTop();
  if( (middleOffset - windowScroll) <= $(window).height() - 200) {
    $('#image1').animate({ opacity: 1, duration: 800 });
    $('#image2').delay(800).animate({ opacity: 1, duration: 800 });
    $('#image3').delay(1600).animate({ opacity: 1, duration: 800 });
  }
});