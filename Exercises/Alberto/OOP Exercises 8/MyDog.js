"use strict";

let Pet = require("./Pet");

function MyDog() {
  let name, age;
  let isCalled = false;
  if(arguments.length > 0) { isCalled = true; }

  Pet.call(this,true);

  Object.defineProperty( this, "setName", {
    value: function(text) {
      name = text;
    },
    enumerable:true, configurable:isCalled, writable:isCalled
  });

  Object.defineProperty( this, "setAge", {
    value: function(text) {
      age = text;
    },
    enumerable:true, configurable:isCalled, writable:isCalled
  });

  Object.defineProperty( this, "getName", {
    value: function() {
      return name;
    },
    enumerable:true, configurable:isCalled, writable:isCalled
  });

  Object.defineProperty( this, "getAge", {
    value: function() {
      return age;
    },
    enumerable:true, configurable:isCalled, writable:isCalled
  });

}

MyDog.prototype = Object.create(Pet.prototype);
MyDog.prototype.constructor = MyDog;

Object.defineProperty( MyDog.prototype, "come", {
  value: function() {
    console.log("I am coming, master");
    this.posture = Pet.STANDING;
  },
  enumerable:true
});

Object.defineProperty( MyDog.prototype, "rollOver", {
  value: function() {
    console.log("rolling over");
    this.posture = Pet.LAYING;
  },
  enumerable:true
});

Object.defineProperty( MyDog.prototype, "sitUp", {
  value: function() {
    console.log("sitting up");
    this.posture = Pet.SITTING;
  },
  enumerable:true
});

module.exports = MyDog;

let animal = new MyDog();
animal.setName("Coffee");
animal.setAge(23);
animal.rollOver();
console.log(animal.getPosture());
console.log(animal.getName());
