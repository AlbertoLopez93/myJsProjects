"use strict"

var Human = require("./human");

var Friend = function Friend(f) {
  this.id = f.id;
  this.name = f.name.split(' ');
  this.name.first = this.name[0];
  this.name.last = this.name[1];
}
Friend.prototype = new Human();

module.exports = Friend;
