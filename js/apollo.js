$(document).ready(function() {

  /* logic for preorder flip */
  $('#preorder').click(function(event) {
    $('.description').animo({
      animation: "flipOutY",
      duration: 0.2,
      keep: true
    });
  })
});
