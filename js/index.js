$(document).ready(function() {
  if (window.location.href.indexOf("#") == -1) {
    $('video')[0].pause();
    $('.loading').css('opacity', 1.0);
    $('.loading').css('z-index', 1.0);

    $('.loading').css('-webkit-transition', 'opacity 0.3s ease-in;');
    $('.loading').css('-moz-transition', 'opacity 0.3s ease-in;');
    $('.loading').css('-o-transition', 'opacity 0.3s ease-in;');
    $('.loading').css('-ms-transition', 'opacity 0.3s ease-in;');
    $('.loading').css('transition', 'opacity 0.3s ease-in;');

    if ($('.loading').css('display') != 'none') {
      $('.loading .logo').width(100);
    }

    setTimeout(function() {
      $('video')[0].play();
      $('.loading').css('opacity', 0.0);
      $('.loading').css('z-index', -1.0);
      window.location.href += "#";
    }, 1000);

    setTimeout(function() {
      $('.buy').css('opacity', 1.0);
    }, 1500);
  }
});
