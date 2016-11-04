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
            },
            function () {
                $(this).click(function(ev){
                    $(this).off();
                });
            }
        );
    }
).mouseleave(
    function(){
        $(".ratings .glyphicon").removeClass("glyphicon-star");
        $(".ratings .glyphicon").addClass("glyphicon-star-empty");
        $(this).click(function(ev){
            $(this).off();
        });
    }
);

var js;

function insertScript (){
    var newScript = $("<script/>");
    newScript.text(js);
    $("head").eq(0).append(newScript);
}

function requestScript () {
    $.getScript("/data/hola.js", function(script, textStatus, jqXHR){
        js = script;
        insertScript();
    });
}

$(".list-group-item").click(function(ev){
    requestScript();
});
