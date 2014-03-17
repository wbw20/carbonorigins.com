$(document).ready(function() {
  $('video').bind('progress', function() {
    if ($('video').get(0).buffered.length > 0) {
      var percent = 100 * ($('video').get(0).buffered.end(0) / $('video').get(0).duration);

      percent /= 15/100; // only wait until video is 15% loaded

      if (percent > 100) {
        $('video')[0].play();
        $('.content').css('display', 'block');
        $('.loading').css('display', 'none');
        $('video').unbind('progress');
      } else {
        $('.loading .logo').css('width', percent + '%');
      }
    }
  });

    setTimeout(function() {
      $('.buy').css('opacity', 1.0);
    }, 7000);
});
