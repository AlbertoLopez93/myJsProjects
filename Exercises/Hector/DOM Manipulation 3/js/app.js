$( document ).ready(function() {
    console.log( "ready!" );
});

$(".glyphicon").removeClass("glyphicon-star glyphicon-star-empty");
$(".glyphicon").toggleClass("glyphicon-star-empty");

var stars = $(".ratings .glyphicon");
var s1 = stars.eq(0);

stars.hover(function (ev) {
    $(this).removeClass("glyphicon-star-empty").addClass("glyphicon-star");
    $(ev.target).prevAll().removeClass("glyphicon-star-empty").addClass("glyphicon-star");
    $(this).click(function (ev) {
        $(this).off('mouseenter mouseleave hover');
        $(ev.target).siblings().off('mouseenter mouseleave hover');
    });
    // console.log($(ev.target));
}, function (ev) {
    $(this).removeClass("glyphicon-star").addClass("glyphicon-star-empty");
    $(ev.target).prevAll().removeClass("glyphicon-star").addClass("glyphicon-star-empty");
});
// $(".container").click(function () {
//     var note = this.id;
//     for (var i = 1; i <=note; i++) {
//         $("#c" + i).addClass("color-green");
//     }
//     $('.axel').unbind('mouseenter mouseleave');
//     $('.axel').unbind('click');
// });

// function inside() {
//     $(this).children("span").hover(function functionName() {
//         console.log(this);
//     },
//     function functionName() {
//         $(this).removeClass("glyphicon-star");
//         $(this).addClass("glyphicon-star-empty");
//     });
//
// }
//
//
// function  outside() {
//     $("#" + this.id).removeClass("glyphicon-star");
//     $("#" + this.id).addClass("glyphicon-star-empty");
// }
