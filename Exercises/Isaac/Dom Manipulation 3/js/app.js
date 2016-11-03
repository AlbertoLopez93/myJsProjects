"use strict";

$(function() {
    let classEmptyStar = 'glyphicon-star-empty',
        classActiveStar = 'glyphicon-star',
        selectorAllStars = '.ratings .glyphicon',
        selectorProductStars = '.ratings p';

    // Sets all stars to empty
    $(selectorAllStars).addClass(classEmptyStar);

    // Stars Product rating on moving.
    $(selectorProductStars).on('mousemove', function(e) {
        let productStars = $(this).children('.glyphicon'),
            activeStar = e.target;

        if ($(activeStar).hasClass(classActiveStar)) {
            // Clean all the stars from the product
            productStars.addClass(classEmptyStar);
            // Active all the stars until the activeStar
            $(activeStar).removeClass(classEmptyStar).prevAll().removeClass(classEmptyStar);
        }
    });

    // Stars Product when leaving, clean all stars.
    $(selectorProductStars).on('mouseleave', function() {
        let productStars = $(this).children();

        productStars.addClass(classEmptyStar);
    });

    // Stars Product when click, remove events.
    $(selectorProductStars).click(function() {
        $(this).off('mousemove').off('mouseleave');
    });
});
