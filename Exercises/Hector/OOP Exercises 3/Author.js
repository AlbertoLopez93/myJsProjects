/*Create a class named Author, which will receive in its constructor an object with the following properties:
name:string
email:string
gender:string (m for masculine, and f for femenine)
All the above properties should be set as private properties. It will also have the following methods:
getName():string returns the name of the instance
getEmail():string returns the email of the instance
setEmail(email:string):void set a new email to the instance.
getGender():string returns the gender of the instance
toString():string returns a string that follows the pattern: “Author[name=?, email=?, gender=?]”*/
"use strict"
function Author(data){
    let name = data.name;
    this.getName = function(){
        if ( typeof name === "string" ){
            return name;
        }
    }
    let email = data.email;
    this.getEmail = function(){
        if (typeof email === "string" ){
            return email;
        }
    }
    this.setEmail = function(newEmail){
        if (typeof newEmail === "string") {
            email = newEmail;
        }
    }
    let gender = data. gender;
    gender = gender.toLowerCase();
    this.getGender = function(){
        if ( gender === "m" || gender === "f" ){
            return gender;
        }
    }
}
Author.prototype.toString = function(){
    return "Author[name=" + this.getName() + ", email=" + this.getEmail() +", gender=" + this.getGender() + "]";
}

//var author = new Author({ name: "Axel", email: "axl_nolasco@hotmail.com", gender: "m"});
// console.log(author.toString());
// console.log(author.getName());
// console.log(author.getEmail());
// console.log(author.getGender());
// author.setEmail(12345);
// console.log(author.toString());
// author.setEmail("axel");
// console.log(author.toString());
module.exports = Author;
