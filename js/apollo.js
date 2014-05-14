$(document).ready(function() {

  /* logic for preorder flip */
  $('#preorder').click(function(event) {
    $('.description').animo( { animation: "flipOutY", keep: true } );
  })
});
