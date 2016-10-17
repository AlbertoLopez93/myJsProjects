(function() {
    'use strict';

    function Customer(newID, newName, newDiscount) {
        let ID = newID,
            name = newName,
            discount = newDiscount;

        /**
         * Returns the ID.
         * @return {int} ID
         */
        this.getID = function getID() {
            return ID;
        };

        /**
         * Returns the name.
         * @return {string} name
         */
        this.getName = function getName() {
            return name;
        };

        /**
         * Returns the discount.
         * @return {int} discount
         */
        this.getDiscount = function getDiscount() {
            return discount;
        };

        /**
         * Sets a new discount.
         * @param {int} newDiscount New discount.
         */
        this.setDiscount = function setDiscount(newDiscount) {
            discount = newDiscount;
        };
    }

    /**
     * Returns the instance as a string
     * @return {string}
     */
    Customer.prototype.toString = function toString() {
        return this.getName() + '(' + this.getID() + ')';
    };

    module.exports = Customer;
}());
