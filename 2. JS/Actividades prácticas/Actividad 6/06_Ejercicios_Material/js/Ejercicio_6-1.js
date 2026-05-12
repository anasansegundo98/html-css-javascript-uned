// JavaScript Document

$(document).ready(function () {
    $("img").on("mouseover", function () {
        $("img").attr("src", "img/Donald_2.png");
    });

    $("img").on("mouseout", function () {
        $("img").attr("src", "img/Donald_1.png");
    });

    $("img").on("click", function () {
        $("img").attr("src", "img/Goofi_1.png");
    });

    $("img").on("dblclick", function () {
        $("img").attr("src", "img/Goofi_2.png");
    });

    
});