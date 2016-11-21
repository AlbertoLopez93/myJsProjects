"use strict";

let Pet = require("./Pet");

function MyCat() {
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

MyCat.prototype = Object.create(Pet.prototype);
MyCat.prototype.constructor = MyCat;

Object.defineProperty( MyCat.prototype, "come", {
  value: function() {
    console.log("Fuck you, human");
    this.posture = Pet.SITTING;
  },
  enumerable:true
});

Object.defineProperty( MyCat.prototype, "rollOver", {
  value: function() {
    console.log("Nope!");
    this.posture = Pet.STANDING;
  },
  enumerable:true
});

Object.defineProperty( MyCat.prototype, "sitUp", {
  value: function() {
    console.log("In your dreams, jerk");
    this.posture = Pet.LAYING;
  },
  enumerable:true
});

module.exports = MyCat;

let michi = new MyCat();
michi.setAge(4);
michi.come();
console.log(michi.getName());
michi.sitUp();
console.log(michi.getPosture());
