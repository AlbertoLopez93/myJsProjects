"use strict"

// $("body").load("app.js", function() {
//   for(let counter = 0; counter < 12; counter++) {
//     let code = '<div class="col-lg-3 col-md-4 col-xs-6 thumb"> </div>';
//     let img = '<a class="thumbnail" href="#"> <img class="img-responsive" src="http://placehold.it/400x300" alt=""> </a>';
//     $(".row").first().append(code);
//     $(".col-lg-3").last().append(img);
//   }
// });

$(".row").first().append("<div>Text<div/>");
$(".row").first().children().last().load("../data/thumbnails.html" );
