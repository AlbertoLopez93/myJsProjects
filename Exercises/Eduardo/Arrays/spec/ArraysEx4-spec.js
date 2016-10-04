/****************************************************************************

Name: ArraysEx4.js
-Search: From skype
Target: Exercises/$1/Arrays
Function: orderPeople

****************************************************************************/


"use strict";

var getScriptMetadata = require("./../../../../get_script_metadata");

const DeliveryLimit = new Date(2016, 8, 3, 17, 0, 1);

var classOrdered =  [
  {
    "_id": "57c9ed8f721f65c365cf80f8",
    "age": 31,
    "eyeColor": "blue",
    "name": "Claudine Gilmore"
  },
  {
    "_id": "57c9ed8f2c7f2ec0f2b9595b",
    "age": 32,
    "eyeColor": "blue",
    "name": "Gross Harris"
  },
  {
    "_id": "57c9ed8f9cec1da7822c14de",
    "age": 30,
    "eyeColor": "brown",
    "name": "Potts Armstrong"
  },
  {
    "_id": "57c9ed8fb9d7d18294f9f13e",
    "age": 38,
    "eyeColor": "brown",
    "name": "Vincent Conley"
  },
  {
    "_id": "57c9ed8fwqdq7f2ec0f2b9595b",
    "age": 32,
    "eyeColor": "green",
    "name": "Axe Nolaso"
  },
  {
    "_id": "57c9ed8f02d59699ca81688e",
    "age": 25,
    "eyeColor": "green",
    "name": "Curtis Brewer"
  },
  {
    "_id": "57c9ed8f7b73575720ce14c1",
    "age": 35,
    "eyeColor": "green",
    "name": "Melisa Salas"
  }
];

var more100 = [ { eyeColor : 'black', name : 'Benjamin Sharpe' },
{ eyeColor : 'black', name : 'Guerra York' }, { eyeColor : 'black', name : 'Hester Hunt' },
{ eyeColor : 'black', name : 'Juana Salas' }, { eyeColor : 'black', name : 'Kitty Horn' },
{ eyeColor : 'black', name : 'Melinda Ellis' }, { eyeColor : 'black', name : 'Morales Dunn' },
 { eyeColor : 'black', name : 'Shelton Nolan' }, { eyeColor : 'blue', name : 'Angelique Harrell' },
 { eyeColor : 'blue', name : 'Cameron Stephenson' }, { eyeColor : 'blue', name : 'Daniel Gonzales' },
  { eyeColor : 'blue', name : 'Deirdre Montoya' }, { eyeColor : 'blue', name : 'Farley Cochran' }, { eyeColor : 'blue', name : 'Frances Ewing' }, { eyeColor : 'blue', name : 'Gamble Hancock' }, { eyeColor : 'blue', name : 'Guthrie Gamble' },
  { eyeColor : 'blue', name : 'Head Woods' }, { eyeColor : 'blue', name : 'Helga Foster' }, { eyeColor : 'blue', name : 'Huff Snider' }, { eyeColor : 'blue', name : 'Lester Craig' }, { eyeColor : 'blue', name : 'Maggie Espinoza' },
  { eyeColor : 'blue', name : 'Marina Waters' }, { eyeColor : 'blue', name : 'Mathis Lawrence' }, { eyeColor : 'blue', name : 'Michael Todd' }, { eyeColor : 'blue', name : 'Mona Hawkins' }, { eyeColor : 'blue', name : 'Mooney Hardin' },
  { eyeColor : 'blue', name : 'Thornton Bell' }, { eyeColor : 'blue', name : 'Trudy Sparks' }, { eyeColor : 'blue', name : 'Wanda Parker' }, { eyeColor : 'brown', name : 'Adkins Jensen' }, { eyeColor : 'brown', name : 'Amalia Cannon' },
   { eyeColor : 'brown', name : 'Amber Mercer' }, { eyeColor : 'brown', name : 'April Shannon' }, { eyeColor : 'brown', name : 'Baird Simpson' }, { eyeColor : 'brown', name : 'Erika Moses' }, { eyeColor : 'brown', name : 'Garcia Irwin' },
{ eyeColor : 'brown', name : 'Hendricks Bolton' }, { eyeColor : 'brown', name : 'Hood Benton' }, { eyeColor : 'brown', name : 'Jenna Valdez' }, { eyeColor : 'brown', name : 'Kane Burch' }, { eyeColor : 'brown', name : 'Lawson Vincent' },
{ eyeColor : 'brown', name : 'Mabel Galloway' }, { eyeColor : 'brown', name : 'Marie Ramirez' }, { eyeColor : 'brown', name : 'May Coffey' }, { eyeColor : 'brown', name : 'Mcdowell Caldwell' }, { eyeColor : 'brown', name : 'Michelle Henderson' },
{ eyeColor : 'brown', name : 'Natasha Keller' }, { eyeColor : 'brown', name : 'Nita Blackwell' }, { eyeColor : 'brown', name : 'Patton Forbes' }, { eyeColor : 'brown', name : 'Reeves Russell' }, { eyeColor : 'brown', name : 'Stone Duke' },
{ eyeColor : 'brown', name : 'Valarie Dickson' }, { eyeColor : 'brown', name : 'Winifred Gilliam' }, { eyeColor : 'cat', name : 'Baldwin Barry' }, { eyeColor : 'cat', name : 'Cobb Ruiz' }, { eyeColor : 'cat', name : 'Diaz Vinson' },
{ eyeColor : 'cat', name : 'Kelly Sears' }, { eyeColor : 'cat', name : 'Leanna Torres' }, { eyeColor : 'cat', name : 'Leigh Bush' }, { eyeColor : 'cat', name : 'Lucia Burt' }, { eyeColor : 'cat', name : 'Moore Burton' },
{ eyeColor : 'cat', name : 'Opal Reeves' }, { eyeColor : 'cat', name : 'Robbie Stewart' }, { eyeColor : 'cat', name : 'Sharp Holland' }, { eyeColor : 'cat', name : 'Twila Bailey' }, { eyeColor : 'green', name : 'Alvarez Rich' },
 { eyeColor : 'green', name : 'Audrey Jarvis' }, { eyeColor : 'green', name : 'Casey Whitfield' }, { eyeColor : 'green', name : 'Castro Day' }, { eyeColor : 'green', name : 'Eloise Warner' }, { eyeColor : 'green', name : 'Gabrielle Noble' },
 { eyeColor : 'green', name : 'Hodge Mcguire' }, { eyeColor : 'green', name : 'Jefferson Bender' }, { eyeColor : 'green', name : 'Leonor Rice' }, { eyeColor : 'green', name : 'Marva Nielsen' }, { eyeColor : 'green', name : 'Ray Boyle' },
 { eyeColor : 'green', name : 'Russell Rosales' }, { eyeColor : 'green', name : 'Stevenson Tyson' }, { eyeColor : 'red', name : 'Bette Sargent' }, { eyeColor : 'red', name : 'Cherry Wynn' }, { eyeColor : 'red', name : 'Jacobs Cote' },
 { eyeColor : 'red', name : 'Macdonald Mayer' }, { eyeColor : 'red', name : 'Myers Bowman' }, { eyeColor : 'red', name : 'Newton Heath' }, { eyeColor : 'red', name : 'Sally Ratliff' }, { eyeColor : 'red', name : 'Tisha Frost' },
 { eyeColor : 'white', name : 'Barbara Velasquez' }, { eyeColor : 'white', name : 'Burns Small' }, { eyeColor : 'white', name : 'Graham Richardson' }, { eyeColor : 'white', name : 'Haney Sharp' }, { eyeColor : 'white', name : 'Jones Park' },
  { eyeColor : 'white', name : 'Lancaster Boyer' }, { eyeColor : 'white', name : 'Lina Bowen' }, { eyeColor : 'white', name : 'Lou Blair' }, { eyeColor : 'white', name : 'Mamie Mann' }, { eyeColor : 'white', name : 'Rita Shelton' },
  { eyeColor : 'white', name : 'Santiago Mcpherson' }, { eyeColor : 'white', name : 'Stout Ferguson' }, { eyeColor : 'white', name : 'Walters Pierce' }, { eyeColor : 'white', name : 'Wilkinson Oneal' } ];
var unorderedData = Array.from(more100);

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

var classUnordered = Array.from(classOrdered);
shuffle(classUnordered);

describe("Testing Arrays exercise 3", function() {
  var fs = require('fs');
  var script = fs.readFileSync('./ArraysEx4.js')+'';
  var metadata = getScriptMetadata(script);
  var req = new Function(script + " return orderPeople; ");
  var orderPeople = req();

  var optionalTest;


  if(metadata.timestamp) {
    optionalTest = describe
  } else {
    optionalTest = xdescribe
  }

  optionalTest("Was delivered on time", function(){
    it("Before " + DeliveryLimit, function(){
      expect(new Date(+metadata.timestamp)).toBeLessThan(DeliveryLimit);
    })
  });

  describe("Order people", function(){

    it("Array given in class ", function() {
      orderPeople(classUnordered);
      expect(classUnordered).toEqual(classOrdered);
    });

    it("100 people array ", function() {
      for (let i = 0; i < 10; i++) {
        shuffle(unorderedData);
        orderPeople(unorderedData);

        expect(unorderedData).toEqual(more100);
      }
    });

  });

});
