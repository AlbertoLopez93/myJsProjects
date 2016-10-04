"use strict"

let schools = require('../../Data/schools');
let School = require('./school').School;

var result = schools.map(school => {return new School(school);});