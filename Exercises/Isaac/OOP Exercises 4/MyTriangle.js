(function() {
    'use strict';
    let MyPoint = require("./MyPoint");

    function MyTriangle() {
        let v1;
        let v2;
        let v3;

        switch (arguments.length) {
            case 3:
                v1 = arguments[0];
                v2 = arguments[1];
                v3 = arguments[2];
                break;
            case 6:
                v1 = new MyPoint(arguments[0], arguments[1]);
                v2 = new MyPoint(arguments[2], arguments[3]);
                v3 = new MyPoint(arguments[4], arguments[5]);
                break;
        }

        // toString():string returns a string following the pattern: “MyTriangle[v1=(x1, y1), v2=(x2, y2), v3=(x3, y3)]”.
        this.toString = function toString() {
            return "MyTriangle[v1=" + v1 + ", v2=" + v2 + ", v3=" + v3 + "]";
        };

        /**
         * Returns distances from each side.
         * @return {Array} Distances between points.
         */
        function getSidesDistances() {
            return [v1.distance(v2), v2.distance(v3), v3.distance(v1)];
        }

        // getPerimeter():number returns the perimeter of the instance.
        this.getPerimeter = function getPerimeter() {
            return getSidesDistances().reduce((prev, curr) => {
                return prev + curr;
            }, 0);
        };

        // getType():string returns the type of the instance.
        // "equilateral" if all the three sides are equal,
        // "isosceles" if any two of the three sides are equal, or
        // "scalene" if the three sides are different.
        this.getType = function getType() {
            let distances = getSidesDistances();
            if (distances[0] === distances[1] && distances[1] === distances[2]) {
                return "equilateral";
            } else if (distances[0] === distances[1] || distances[1] === distances[2] || distances[2] === distances[0]) {
                return "isosceles";
            } else {
                return "scalene";
            }
        };
    }

    module.exports = MyTriangle;
}());
