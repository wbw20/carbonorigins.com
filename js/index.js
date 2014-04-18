$(document).ready(function() {
  if ($('.loading').css('display') != 'none') {
    $('.loading .logo').width(100);
  }

  setTimeout(function() {
    $('.loading').css('opacity', 0.0);
  }, 2400);

  setTimeout(function() {
    $('.buy').css('opacity', 1.0);
  }, 3000);
});
