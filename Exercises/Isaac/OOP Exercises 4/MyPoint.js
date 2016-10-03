(function () {
    'use strict';

    function MyPoint(pointX, pointY) {
        let x = pointX || 0;
        let y = pointY || 0;

        /**
         * Returns 'x' point.
         * @returns {Integer} x.
         */
        this.getX = function getX() {
            return x;
        };

        /**
         * Updates 'x' point.
         * @param {Integer} newX New x point.
         */
        this.setX = function setX(newX) {
            x = newX;
            return this;
        };

        /**
         * Returns 'y' point.
         * @returns {Integer} y.
         */
        this.getY = function getY() {
            return y;
        };

        /**
         * Updates 'y' poinT.
         * @param {Integer} newY New y point
         */
        this.setY = function setY(newY) {
            y = newY;
            return this;
        };
    }

    /**
     * Returns both 'x' and 'y' points.
     * @returns {Array} [x, y].
     */
    MyPoint.prototype.getXY = function getXY() {
        return [this.getX(), this.getY()];
    };

    /**
     * Updates both 'x' and 'y' points.
     * @param {Integer} newX New x point.
     * @param {Integer} newY New y point.
     */
    MyPoint.prototype.setXY = function setXY(newX, newY) {
        this.setX(newX);
        this.setY(newY);
        return this;
    };

    /**
     * Returns the instance as a String.
     * @returns {string} (x, y)
     */
    MyPoint.prototype.toString = function toString() {
        return "(" + this.getX() + ", " + this.getY() + ")";
    };

    /**
     * Returns the distance between another MyPoint and this instance.
     * @param   {MyPoint} another Another instance of MyPoint.
     *                            It can receive [x, y] and create a MyPoint(x, y) instance.
     *                            It can receive no arguments and create a MyPoint(0, 0) instance.
     * @returns {number}  Distance between points.
     */
    MyPoint.prototype.distance = function distance(another) {
        if (arguments.length !== 1) {
            another = new MyPoint(arguments[0], arguments[1]);
        }
        if (another instanceof MyPoint) {
            return Math.sqrt(Math.pow(another.getX() - this.getX(), 2) + Math.pow(another.getY() - this.getY(), 2));
        }
    };

    module.exports = MyPoint;

}());