$(document).ready(function() {
  $('video').bind('progress', function() {
    if($('video')[0].canPlayType && $('video')[0].canPlayType( 'video/mp4; codecs="mp4v.20.8"' )) {
      if ($('video').get(0).buffered.length > 0) {
        var percent = 100 * ($('video').get(0).buffered.end(0) / $('video').get(0).duration);

        percent /= 15/100; //only wait until video is 15% loaded

        if (percent > 100) {
          show();
          $('video')[0].play();
        } else {
          console.log(percent);
          $('.loading .logo').css('width', percent + '%');
        }
      }
    } else { // html5 video not supported
      show();
    }

    setTimeout(function() {
      show();
      $('video')[0].play();
    }, 3000); //Max loading time of 3 seconds
  });

    setTimeout(function() {
      $('.buy').css('opacity', 1.0);
    }, 7000);
});

function show() {
  $('.content').css('display', 'block');
  $('.loading').css('display', 'none');
  $('video').unbind('progress');
}
