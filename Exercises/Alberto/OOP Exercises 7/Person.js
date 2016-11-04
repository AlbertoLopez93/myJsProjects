"use strict";

function Person ( name, address ) {

  Object.defineProperty ( this, 'getName',
  { value: function ( ) {
      return name;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'getAddress',
  { value: function ( ) {
      return address;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setAddress',
  { value: function ( direction ) {
      address = direction;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Object.defineProperty ( Person.prototype, 'toString',
{ value: function ( ) {
    return "Person[name=" + this.getName ( ) +
    ",address=" + this.getAddress ( ) + "]";
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Person;
