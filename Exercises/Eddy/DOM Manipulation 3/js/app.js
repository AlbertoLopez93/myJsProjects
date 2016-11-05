"use strict";

$(".glyphicon-star").toggleClass("glyphicon-star glyphicon-star-empty");

let star = $(".ratings .glyphicon");

$(".ratings").mouseover(function(ev) {
	let clon = $(this).clone();
	star.mouseenter(function(ev) {
		$(this).removeClass("glyphicon-star-empty");
		$(this).addClass("glyphicon-star");
		$(this).prevAll().removeClass("glyphicon-star-empty");
		$(this).prevAll().addClass("glyphicon-star");
		$(this).nextAll().removeClass("glyphicon-star");
		$(this).nextAll().addClass("glyphicon-star-empty");
		$(this).click().prevAll().removeClass("glyphicon-star-empty").prevAll().addClass("glyphicon-star");
	});
	$(this).mouseleave(function(ev) {
		$(this).replaceWith(clon);
	});
});
