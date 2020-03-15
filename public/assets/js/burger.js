// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var eatStatus = {
      eaten: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatStatus
    }).then(
      function() {
        console.log("changed status to", eatStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".change-reorder").on("click", function(event) {
    var id = $(this).data("id");
    var eatStatus = {
      eaten: false
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatStatus
    }).then(
      function() {
        console.log("changed status to", eatStatus);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
