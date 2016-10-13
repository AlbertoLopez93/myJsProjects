(function () {
    'use strict';

    let MyPoint = require("./MyPoint");

    function MyRectangle() {
        let topLeft;
        let bottomRight;

        switch (arguments.length) {
        case 2:
            topLeft = arguments[0];
            bottomRight = arguments[1];
            break;
        case 4:
            topLeft = new MyPoint(arguments[0], arguments[1]);
            bottomRight = new MyPoint(arguments[2], arguments[3]);
            break;
        }

        function getSidesDistances() {
            let topRight = new MyPoint(bottomRight.getX(), topLeft.getY());
            return [
                topLeft.distance(topRight),
                topRight.distance(bottomRight)
            ];
        }

        // getArea():number returns the area of the instance.
        this.getArea = function getArea() {
            let distances = getSidesDistances();
            return distances[0] * distances[1];
        };

        // getPerimeter():number returns the perimeter of the instance.
        this.getPerimeter = function getPerimeter() {
            let distances = getSidesDistances();
            return 2 * (distances[0] + distances[1]);
        };

        // toString():string returns a string following the pattern: “MyRectangle[topLeft=(x1, y1), bottomRight=(x2, y2)]”.
        this.toString = function toString() {
            return "MyRectangle[topLeft=" + topLeft + ", bottomRight=" + bottomRight + "]";
        };
    }

    module.exports = MyRectangle;
}());