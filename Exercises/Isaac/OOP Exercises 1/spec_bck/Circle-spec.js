(function() {
    'use strict';

    var Circle = require('../Circle');

    describe("Testing Circle class", function() {
        it("Should be defined", function() {
            expect(Circle).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var circle = new Circle({
                radius: 5,
                color: "Green"
            });
            expect(circle.getRadius()).toBe(5); // 5
            expect(circle.getColor()).toBe("Green"); // Green
            circle.setRadius(10);
            circle.setColor("Red");
            expect(circle.getRadius()).toBe(10); // 10
            expect(circle.getColor()).toBe("Red"); // Red
            expect(circle.getArea().toFixed(2)).toBe("314.16"); // 314.16
            expect(circle.getCircumference().toFixed(2)).toBe("62.83"); // 62.83
        });
    });
}());
