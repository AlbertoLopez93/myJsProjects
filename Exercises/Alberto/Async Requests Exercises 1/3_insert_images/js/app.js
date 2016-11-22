"use strict";


$.getJSON("../data/images.json", function(images) {
  $.each( images.data, function() {
    $(".row").first().append("<div><div/>");
    $(".row").first().children().last().load("../data/html/thumbnail.html" );
  });
});
