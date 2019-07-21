alert("test");

$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
    alert("Great Job! :D");
  })
})
