"use strict";

function Main() {}

Object.defineProperty( Main.prototype, "walk", {
  value: function() {
    console.log("Walking on the sun...");
  },
  enumerable: true
});
Object.defineProperty( Main.prototype, "talk", {
  value: function() {
    console.log("Talk to the hand!");
  },
  enumerable: true
});
Object.defineProperty( Main.prototype, "say", {
  value: function() {
    console.log("Say no more!");
  },
  enumerable: true
});

module.exports = Main;
