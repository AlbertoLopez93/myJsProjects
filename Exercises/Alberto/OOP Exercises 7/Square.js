"use strict";

let Rectangle = require ( "./Rectangle" );

function Square ( side, color, filled ) {
  if ( typeof side !== "number" ) { //not parameters
    side = 1;
  }
  Rectangle.call ( this, side, side, color, filled );

  Object.defineProperty ( this, 'getSide',
  { value: function ( ) {
      return side;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setSide',
  { value: function ( newSide ) {
      side = newSide;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

 Square.prototype = Object.create ( Rectangle.prototype );
 Square.prototype.constructor = Square;

Object.defineProperty ( Square.prototype, 'toString',
{ value: function ( ) {
    return "A Square with side=" + this.getSide( ) +
    ", which is a subclass of " + Rectangle.prototype.toString.call( this );
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Square;

var cuadro = new Square(6);
console.log(cuadro.getArea());
console.log(cuadro.getPerimeter());
console.log(cuadro.toString());
console.log(cuadro.getLength());
