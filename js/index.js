$(document).ready(function() {
  $('video')[0].pause();
  if ($('.loading').css('display') != 'none') {
    $('.loading .logo').width(100);
  }

  setTimeout(function() {
    $('video')[0].play();
    $('.loading').css('opacity', 0.0);
  }, 1000);

  setTimeout(function() {
    $('.buy').css('opacity', 1.0);
  }, 1500);
});
