

$(document).ready(function () {
    console.log($);
    $('.carousel').carousel()
    allDogs();
});

// $('.button').on('click', function () {
//     $('.navbar-nav').show();
// });


function allDogs() {
    $(".login-button").on("click", function (event) {
        event.preventDefault()
        console.log("hello");
        $("div").empty();
        $('.navlist').show();
        var dogArray = ["Spot"];
        $.each(dogArray, function (index, value) {
            console.log(value);
            $("#result").append(index + ": " + value + '<br>');
        });
        $.ajax({
            type: "GET",
            url: url,
            success: success,
            data:dataType 
        });
        callAllDogs()
    });

};




