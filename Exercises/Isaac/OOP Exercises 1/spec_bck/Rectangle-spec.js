(function() {
    'use strict';

    var Rectangle = require('../Rectangle');

    describe("Testing NewDate class", function() {
        it("Should be defined", function() {
            expect(Rectangle).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var rectangle = new Rectangle({
                width: 5,
                length: 10
            });
            expect(rectangle.getWidth()).toBe(5); // 5
            expect(rectangle.getLength()).toBe(10); // 10
            rectangle.setWidth(10);
            rectangle.setLength(20);
            expect(rectangle.getWidth()).toBe(10); // 10
            expect(rectangle.getLength()).toBe(20); // 20
            expect(rectangle.getArea()).toBe(200); // 200
            expect(rectangle.getPerimeter()).toBe(60); // 60
            expect(rectangle.toString()).toBe("Rectangle[length=20, width=10]"); // Rectangle[length=20, width=10]
        });
    });
}());
