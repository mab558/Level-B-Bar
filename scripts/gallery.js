$(document).ready(function() {

    $("#photo2").addClass("hidden");
    $("#photo3").addClass("hidden");
    $("#photo4").addClass("hidden");

    $("#next").on("click",function() {

        if ($("#photo1").is(":visible")) {
            $("#photo1").addClass("hidden");
            $("#photo2").removeClass("hidden");
        } else if ($("#photo2").is(":visible")){
            $("#photo2").addClass("hidden");
            $("#photo3").removeClass("hidden");
        } else if ($("#photo3").is(":visible")){
            $("#photo3").addClass("hidden");
            $("#photo4").removeClass("hidden");
        } else if ($("#photo4").is(":visible")){
            $("#photo4").addClass("hidden");
            $("#photo1").removeClass("hidden");
        }
    });

    $("#last").on("click", function() {
        if ($("#photo2").is(":visible")) {
            $("#photo2").addClass("hidden");
            $("#photo1").removeClass("hidden");
        } else if ($("#photo3").is(":visible")){
            $("#photo3").addClass("hidden");
            $("#photo2").removeClass("hidden");
        } else if ($("#photo4").is(":visible")){
            $("#photo4").addClass("hidden");
            $("#photo3").removeClass("hidden");
        } else if ($("#photo1").is(":visible")){
            $("#photo1").addClass("hidden");
            $("#photo4").removeClass("hidden");
        }
    });

});
