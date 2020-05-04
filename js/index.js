document.getElementById("bg-audio").volume = 0.1
$("#bar-blog").click(function () {
    $("#sub")[0].src = "subs/blog.html"
})
$("#bar-works").click(function () {
    $("#sub")[0].src = "subs/works.html"
})
$("#bar-about").click(function () {
    $("#sub")[0].src = "subs/about.html"
})
$(".menu").click(function () {
    if ($(".links").css("display") == "none")
        $(".links").css("display", "unset")
    else
        $(".links").css("display", "none")
})

$(".links p").click(function () {
    if ($(window).width() < 950)
        $(".links").css("display", "none")
})

$(".tp-links img").click(function(){
    $(".links").css("display", "none")
})