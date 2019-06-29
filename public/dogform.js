var callAllDogs = require("./dogform.js");

$(document).ready(function () {
    $('')()
    var dogform =       "<div class="container-signup col-md-6">

    <form class="form-signup" action="action_page.php" style="border:1px solid black">
            <h1>All dogs go to heaven</h1>
            <p>Please fill in this form to submit your pooch.</p>
            <hr>
        
            <label for="dogname"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="dogname" required>

            <label for="dogbreed"><b>Breed</b></label>
            <input type="text" placeholder="Enter Breed" name="dogbreed" required>
                    
            <label for="dogage"><b>Age</b></label>
            <input type="text" placeholder="Enter Age" name="password" required>

            <label for="dogimage"><b>Image</b></label>
            <input type="text" placeholder="Enter Breed" name="dogimage" required>

            <label for="dogblurb"><b>Blurb</b></label>
            <input type="text" placeholder="Tell us about your dog" name="dogblurb" required>
        
            <!-- <label>
              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label> -->
        
            <!-- <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> -->
        
            <div class="clearfix">
            
              
              <button type="submit" class="button">Send</button>
            </div>

        </form>
</div>"
console.log(dogform);

    $(document).ready(function () {
        $('.carousel').carousel()
        allDogs();
        callAllDogs();
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