$(document).ready(function () {
    $('.carousel').carousel()
    allDogs();
    dogform();
});

// $('.button').on('click', function () {
//     $('.navbar-nav').show();
// });


function allDogs() {
    $(".login-button").on("click", function (event) {
        event.preventDefault()
        console.log("hello");
        $('.navlist').show();
        // $.ajax({
        //     type: "POST",
        //     url: url,
        //     data: data,
        //     success: success,
        //     data:dataType 
        // });
    });
};
function dogform() {
    console.log($("#dogform"));
    $("#dogform").on("click", function (event) {
        event.preventDefault()
        var data ={
            'dog_name': $("#dog_name").val()
            'dog_breed': $("#dog_breed").val()
            'dog_age': $("#dog_age").val()
            'dog_img_url': $("#dog_img_url").val()
            'dog_blurb': $("#dog_blurb").val()
        }
        console.log(data);
        //$('.navlist').post();
        // $.ajax({
        //     type: "POST",
        //     url: /api/dogs,
        //     data: JSON.stringify(data),
        //     success: success,
        //     data:dataType 
        // });
    });
}