$(function() {
  var feed = new Instafeed({
    get: 'user',
    userId: 2271905504,
    accessToken: '2271905504.5b9e1e6.423535c79cf645449d2df1e9cbd46316',
    sortby: 'random',
    resolution: 'standard_resolution',
    links: 'false',
    limit: '10',
    template: '<a href="{{image}}" data-lightbox="instaimg"> <img height="300" alt="instaimg" width="300" src="{{image}}" /> </a>',
    after: loadscroll
  });
  feed.run();
});

function loadscroll() {
  $("#instafeed").simplyScroll({
    orientation: 'vertical',
    customClass: 'vert',
    speed: 1,
    pauseOnTouch: true,
    pauseOnHover: false
  });
}
var event = ('ontouchstart' in window) ? 'click' : 'mouseenter mouseleave';
$(document).ready(function() {
  $('.slideout').on("click", function() {
    $(".slideout").toggleClass("slideopen");
    $(".slideout_inner").toggleClass("inneropen");
  });
});
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}
$.preloadImages("images/menu.jpg");
