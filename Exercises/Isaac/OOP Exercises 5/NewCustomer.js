(function() {
    'use strict';

    function NewCustomer(newID, newName, newGender) {
        let ID = newID,
            name = newName,
            gender = newGender;

        // getID():int returns the ID of the instance.
        this.getID = function getID() {
            return ID;
        };

        // getName():string returns the name of the instance.
        this.getName = function getName() {
            return name;
        };

        // getGender():string returns the gender of the instance.
        this.getGender = function getGender() {
            return gender;
        };

    }

    // toString():string returns a string following the pattern “name(ID)”.
    NewCustomer.prototype.toString = function toString() {
        return this.getName() + '(' + this.getID() + ')';
    };

    module.exports = NewCustomer;
}());
