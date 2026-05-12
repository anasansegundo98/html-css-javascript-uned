$(document).ready(function () {
    $("#nav li ul").hide();
    
    $("#nav li").hover(
        function() {
            $(this).css("background-color", "blue");
            $(this).find('ul').slideDown();
        },
        function() {
            $(this).css("background-color", "#5c5555");
            $(this).find('ul').slideUp();
        }
    );
});



