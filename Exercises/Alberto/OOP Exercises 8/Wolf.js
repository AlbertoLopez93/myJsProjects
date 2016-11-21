"use strict";

let Canine = require ("./Canine");

function Wolf() {
  let type = "Wolf";
  let isAwake = true;
  
  Canine.call(this, true);

  Object.defineProperty( this, "sleep", {
    value: function() {
      isAwake = false;
    },
    enumerable: true, configurable: false, writable: false
  });
  Object.defineProperty( this, "wakeUp", {
    value: function() {
      isAwake = true;
    },
    enumerable: true, configurable: false, writable: false
  });

  Object.defineProperty( this, "roam", {
    value: function() {
      if (isAwake) {
        console.log("Roaming with the pack");
      }
    },
    enumerable: true, configurable: false, writable: false
  });
  Object.defineProperty( this, "makeNoise", {
    value: function() {
      if (isAwake) {
        console.log("Howling: Ouooooo!");
      }
      else {
        console.log("Zzzzzz…");
      }
    },
    enumerable: true, configurable: false, writable: false
  });

}

Wolf.prototype = Object.create(Canine.prototype);
Wolf.prototype.constructor = Wolf;

Object.defineProperty( Wolf.prototype, "getType", {
  value: function() {
    return "Wolf";
  },
  enumerable: true, configurable: false, writable:false
});

module.exports = Wolf;

let ani1 = new Wolf();
ani1.makeNoise();
ani1.sleep();
ani1.roam();
// ani1.wakeUp();
// ani1.roam();
ani1.makeNoise();
console.log(ani1.getType());
