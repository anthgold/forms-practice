$(document).ready(function() {
  $("#blank form").submit(function(event) {

    var nameInput = $("input#name").val();

    var toUpperCaseName = nameInput.toUpperCase();

    $(".name").text(toUpperCaseName);

    $("#letter").show();

    event.preventDefault();
  });
});
