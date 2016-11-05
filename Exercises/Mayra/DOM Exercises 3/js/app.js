$(document).ready(function () {
    $(".glyphicon").replaceWith("<span class='glyphicon glyphicon-star-empty'></span>");

    $(".glyphicon").hover(function(){
        $(this).prevAll().andSelf().replaceWith("<span class='glyphicon glyphicon-star'></span>");
    });

    $(".glyphicon").click(function(){
        $(this).off('hover');
        $(this).prevAll().replaceWith("<span class='glyphicon glyphicon-star'></span>");
    });


})
