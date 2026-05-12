// JavaScript Document

$(document).ready(function () {
    $("input").on("focus", function () {
        $(this).css("background-color", "#ff6969");
        $(this).css("outline", "solid 2px #d0ff00");
    });

    $("input").on("blur", function () {
        $(this).css("background-color", "");
        $(this).css("outline", "");
    });
});