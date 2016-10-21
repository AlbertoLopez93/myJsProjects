"use strict"

var json= require("../../Data/schools");

var School= require("./school");

var print=json.map(function(e) {return new School(e);});

console.log(print[2].students[1].name);
console.log(print[2].students[1].getLastName());
console.log(print[2].students[1].friends[1].name);
console.log(print[2].students[1].friends[1].getFullName());

console.log(print[2].students[1].friends[0].name);
console.log(print[2].students[1].courses);
console.log(print[2].students[1].getGrade());
