$(document).ready(function() {

  /* logic for preorder flip */
  $('#preorder').click(function(event) {
    $('.description').animo("rotate", { degrees:90 }, function(e) {
    });
  })
});
