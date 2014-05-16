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
  })
});
