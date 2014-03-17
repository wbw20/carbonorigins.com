$(document).ready(function() {
  $('video').bind('progress', function() {
    setTimeout(function() {
      play();
    }, 3000); //Max loading time of 3 seconds

    if ($('video').get(0).buffered.length > 0) {
      var percent = 100 * ($('video').get(0).buffered.end(0) / $('video').get(0).duration);

      percent /= 15/100; //only wait until video is 15% loaded

      if (percent > 100) {
        play();
      } else {
        console.log(percent);
        $('.loading .logo').css('width', percent + '%');
      }
    }
  });

    setTimeout(function() {
      $('.buy').css('opacity', 1.0);
    }, 7000);
});

function play() {
  $('video')[0].play();
  $('.content').css('display', 'block');
  $('.loading').css('display', 'none');
  $('video').unbind('progress');
}
