"use strict";

function Pet() {
  let name, age;
  let isCalled = false;
  if(arguments.length > 0) { isCalled = true; }

  Object.defineProperty( this, "posture", {
    enumerable:true, configurable:isCalled, writable:isCalled
  });

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

Pet.STANDING = 0;
Pet.SITTING = 1;
Pet.LAYING = 2;

Object.defineProperty( Pet.prototype, "getPosture", {
  value: function() {
    return this.posture;
  },
  enumerable:true
});

Object.defineProperty( Pet.prototype, "come", {
  value: function() {},
  enumerable:true
});

Object.defineProperty( Pet.prototype, "isLaying", {
  value: function() {
    if(this.getPosture() === 2) {
      return true;
    }
    else {
      return false;
    }
  },
  enumerable:true
});

Object.defineProperty( Pet.prototype, "isStanding", {
  value: function() {
    if(this.getPosture() === 0) {
      return true;
    }
    else {
      return false;
    }
  },
  enumerable:true
});

Object.defineProperty( Pet.prototype, "isSitting", {
  value: function() {
    if(this.getPosture() === 1) {
      return true;
    }
    else {
      return false;
    }
  },
  enumerable:true
});

module.exports = Pet;
