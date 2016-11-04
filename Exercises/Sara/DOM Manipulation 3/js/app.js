"use strict";
$('.glyphicon-star-empty').toggleClass('glyphicon-star-empty');
$('.glyphicon-star').toggleClass('glyphicon-star');
$('.glyphicon').toggleClass('glyphicon-star-empty');

$('.glyphicon-star-empty').hover(
    function(){
        $(this).prevAll().andSelf().addClass('glyphicon-star');
        $(this).prevAll().andSelf().removeClass('glyphicon-star-empty');
    }
  ,
    function() {
        $(this).prevAll().andSelf().addClass('glyphicon-star-empty');
        $(this).prevAll().andSelf().removeClass('glyphicon-star');
    }
);

// $('glyphicon-star').click(function(){
//   $(this).prevAll().andSelf().addClass('glyphicon-star');
//   $(this).prevAll().andSelf().removeClass('glyphicon-star');
//
// });
