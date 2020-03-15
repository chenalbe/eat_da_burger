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
    event.preventDefault();

    var newburger = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=eaten]:checked").val().trim()
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
