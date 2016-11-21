"use strict";

let pictures = $("img");
$.getJSON("../data/images.json", function(images) {
  for(let k = 0; k < images.data.length; k++ ) {
    $(".img-responsive").eq(k).attr("src", images.data[k]);
  }
});
