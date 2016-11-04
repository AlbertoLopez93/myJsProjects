"use strict";

let Person = require ( "./Person" );

function Student ( name, address, program, year, fee ) {
  Person.call ( this, name, address );

  Object.defineProperty ( this, 'getProgram',
  { value: function ( ) {
      return program;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setProgram',
  { value: function ( newProgram ) {
      program = newProgram;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'getYear',
  { value: function ( ) {
      return year;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setYear',
  { value: function ( newYear ) {
      year = newYear;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'getFee',
  { value: function ( ) {
      return fee;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setFee',
  { value: function ( tax ) {
      fee = tax;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Student.prototype = Object.create ( Person.prototype );
Student.prototype.constructor = Student;

Object.defineProperty ( Student.prototype, 'toString',
{ value: function ( ) {
    return "Student[Person[name=" + this.getName ( ) +
    ",address=" + this.getAddress ( ) + "],program=" + this.getProgram ( ) +
    ",year=" + this.getYear ( ) + ",fee=" + this.getFee ( ) + "]";
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Student;
