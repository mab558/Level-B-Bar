$(document).ready(function(){

// When User Selects Bar Tab --> shows tab amount and makes tab amount required
    $("#bartab").on("input", function() {
      console.log("bartab selected");
      $(".tab_amount").removeClass("hidden");
      $("#tab_amount").attr("required", true);
    })
/*
    $("#bartab").on("input", function() {
      if($("#bartab").val() == "yes") {
        console.log("bartab unselected");
        $(".tab_amount").addClass("hidden");
        $("#tab_amount").attr("required", false);
      }

      else {
        console.log("bartab selected");
        $(".tab_amount").removeClass("hidden");
        $("#tab_amount").attr("required", true);
      }
    })

  if($("#bartab").val() == "yes") {
      console.log("bartab selected");
      $(".tab_amount").removeClass("hidden");
      $("#tab_amount").attr("required", true);
    } else {
      console.log("bartab not selected");
      $(".tab_amount").addClass("hidden");
      $("#tab_amount").attr("required", false);
    }

 if($("#bartab").val() == "no") {
      console.log("bartab not selected");
      $(".tab_amount").addClass("hidden");
      $("#tab_amount").attr("required", false);
    }

*/

//Error Checks upon User Submission
    $("#booking_form").on("submit", function(){

        var formValid = true;

        if($("#name").prop("validity").valid){
            $("#namefeedback").addClass("hidden");
        } else{
            $("#namefeedback").removeClass("hidden");
            formValid = false;
        }

        if($("#email").prop("validity").valid){
            $("#emailfeedback").addClass("hidden");
        } else{
            $("#emailfeedback").removeClass("hidden");
            formValid = false;
        }

        if($("#guests").prop("validity").valid){
            $("#guestfeedback").addClass("hidden");
        } else{
            $("#guestfeedback").removeClass("hidden");
            formValid = false;
        }

        if($("#date").prop("validity").valid){
            $("#datefeedback").addClass("hidden");
        } else{
            $("#datefeedback").removeClass("hidden");
            formValid = false;
        }

        if($("#time").prop("validity").valid){
            $("#timefeedback").addClass("hidden");
        } else{
            $("#timefeedback").removeClass("hidden");
            formValid = false;
        }

        return formValid;

    });

});

//Validation for Guest DJ Contact Form

$(document).ready(function() {

  $("#contact_form").on("submit", function(){

    var formValid = true;
    console.log("contact form submitted");

      if($("#contact_name").prop("validity").valid){
          $("#namefeedback").addClass("hidden");
      } else{
          $("#namefeedback").removeClass("hidden");
          formValid = false;
      }

      if($("#contact_email").prop("validity").valid){
          $("#emailfeedback").addClass("hidden");
      } else{
          $("#emailfeedback").removeClass("hidden");
          formValid = false;
      }

      return formValid;

    });

});





$(document).ready(function () {

    var date= new Date();
    var day = date.getDay();

    if (day == 2) {
        $("#tuesdaySpecial").removeClass("hidden");
        $("#tuesdayEvent").removeClass("hidden");
    } else if (day == 3){
        $("#wednesdaySpecial").removeClass("hidden");
        $("#wednesdayEvent").removeClass("hidden");
    } else if (day == 4) {
        $("#thursdaySpecial").removeClass("hidden");
        $("#thursdayEvent").removeClass("hidden");
    } else if (day == 5) {
        $("#fridaySpecial").removeClass("hidden");
        $("#fridayEvent").removeClass("hidden");
    } else if (day == 6) {
        $("#saturdaySpecial").removeClass("hidden");
        $("#saturdayEvent").removeClass("hidden");
    } else{
        $("#noSpecial").removeClass("hidden");
    }

});
