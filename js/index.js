$(document).ready(function() {
  $('video').bind('progress', function() {
    if ($('video').get(0).buffered.length > 0) {
      console.log($('video').get(0).buffered.end(0) / $('video').get(0).duration);
    }
  });

    setTimeout(function() {
      $('.buy').css('opacity', 1.0);
    }, 3000);
});
