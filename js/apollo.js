$(document).ready(function() {

  /* logic for preorder flip */
  $('#preorder').click(function(event) {
    $('.description').animo({
      animation: "flipOutY",
      duration: 0.2,
      keep: true
    }, function(event) {
      $('.info').css('display', 'none');
      $('.preorder').css('display', 'block');
      $('.description').animo({
        animation: "flipInY",
        duration: 0.2,
        keep: true
      });
    });
  });

  /* smooth scrolling */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });
});
