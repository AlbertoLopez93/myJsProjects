"use strict";
$(".glyphicon-star").toggleClass("glyphicon-star-empty glyphicon-star");

$(".ratings").mouseenter(
    function(ev){
        $(".glyphicon", this).hover(
            function(ev){
                $(this).removeClass("glyphicon-star-empty");
                $(this).addClass("glyphicon-star");
                $(ev.target).prevAll().removeClass("glyphicon-star-empty");
                $(ev.target).prevAll().addClass("glyphicon-star");
                $(ev.target).nextAll().removeClass("glyphicon-star");
                $(ev.target).nextAll().addClass("glyphicon-star-empty");
                $(ev.target).click(function(ev){
                    $(ev.target).unbind("mouseleave mouseenter hover");
                })
            }
        );
    }
).mouseleave(
    function(){
        $(".ratings .glyphicon").removeClass("glyphicon-star");
        $(".ratings .glyphicon").addClass("glyphicon-star-empty");
    }
);
