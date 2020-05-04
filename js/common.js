function toggleMenu() {
    if ($(".m-links").css("display") == "none")
        $(".m-links").css("display", "unset")
    else
        $(".m-links").css("display", "none")
}

$("body").click(function(){
    $(".m-links").css("display", "none")
})

$(window).resize(function() {
    if($(window).width()<950){
        $(".m-links").css("display", "none")
    }
})