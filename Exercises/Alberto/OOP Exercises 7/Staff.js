"use strict";

let Person = require ( "./Person" );

function Staff ( name, address, school, pay ) {
  Person.call ( this, name, address );

  Object.defineProperty ( this, 'getSchool',
  { value: function ( ) {
      return school;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setSchool',
  { value: function ( newSchool ) {
      school = newSchool;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'getPay',
  { value: function ( ) {
      return pay;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setPay',
  { value: function ( newPay ) {
      pay = newPay;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Staff.prototype = Object.create ( Person.prototype );
Staff.prototype.constructor = Staff;

Object.defineProperty ( Staff.prototype, 'toString',
{ value: function ( ) {
    return "Staff[Person[name=" + this.getName ( ) +
    ",address=" + this.getAddress ( ) +
    "],school=" + this.getSchool ( ) +
    ",pay=" + this.getPay ( ) + "]";
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Staff;
