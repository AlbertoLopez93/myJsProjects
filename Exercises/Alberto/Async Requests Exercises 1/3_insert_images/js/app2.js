"use strict";


$.getJSON("../data/images.json", function(images) {
  $.each( images.data, function(index, value) {
    $(".img-responsive").eq(index).attr("src", value);
  });
});
