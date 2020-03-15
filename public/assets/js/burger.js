// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".changeStatus").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    console.log($(this).data());

    $.ajax("/burger/" + id, {
        type: "PUT",
        data: true
    }).then(function(){
        console.log(id);
        location.reload();
    });
});
  $(".delete").on("click", function(event){
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    $.ajax("/api/burger/" + id, {
        type: "DELETE"
    }).then(function(){
        console.log(id);
        location.reload();
    });

})
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
