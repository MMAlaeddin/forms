$(document).ready(function() {
  $("button#submit").click(function(event) {
    var nameInput = $("input#name").val();
    $(".name").prepend(nameInput);

    event.preventDefault();
  });
});