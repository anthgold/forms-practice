$(document).ready(function() {
  $("#blank form").submit(function(event) {

    var nameInput = $("input#name").val();

    // All three methods below work:
      // var toUpperCaseName = nameInput.toUpperCase();
      // $(".name").text(toUpperCaseName);
      // nameInput = nameInput.toUpperCase();
      // $(".name").text(nameInput);
      $(".name").text(nameInput.toUpperCase());
      // This one also should not change the value of name
      // alert(nameInput); echoes the variable to show
      
    $("#letter").show();

    event.preventDefault();
  });
});
