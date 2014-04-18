$(document).ready(function() {
  if ($('.loading').css('display') != 'none') {
    $('.loading .logo').width(100);
  }

  setTimeout(function() {
    $('.buy').css('opacity', 1.0);
  }, 3000);
});
