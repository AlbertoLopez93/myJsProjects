(function () {
    'use strict';

    function Author(author) {
        let name = author.name;
        let email = author.email;
        let gender = author.gender;

        //getName():string returns the name of the instance
        this.getName = function getName() {
            return name;
        };

        //getEmail():string returns the email of the instance
        this.getEmail = function getEmail() {
            return email;
        };

        //setEmail(email:string):void set a new email to the instance.
        this.setEmail = function setEmail(newEmail) {
            email = newEmail;
        };

        //getGender():string returns the gender of the instance
        this.getGender = function getGender() {
            return gender;
        };
    }

    //toString():string returns a string that follows the pattern: “Author[name=?, email=?, gender=?]”
    Author.prototype.toString = function toString() {
        return "Author[name=" + this.getName() + ", email=" + this.getEmail() + ", gender=" + this.getGender() + "]";
    };

    module.exports = Author;
}());