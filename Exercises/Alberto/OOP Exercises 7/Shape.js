"use strict";

function Shape ( color, filled ) {

  if ( ! color ) {
    color = "red";
    filled = true;
  }

  Object.defineProperty ( this, 'getColor',
  { value: function ( ) {
      return color;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setColor',
  { value: function ( newColor ) {
      color = newColor;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'isFilled',
  { value: function ( ) {
      return filled;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setFilled',
  { value: function ( fill ) {
      filled = fill;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Object.defineProperty ( Shape.prototype, 'toString',
{ value: function ( ) {
  let full;
    if ( this.isFilled ( ) ) {
      full = "filled";
    }
    else {
      full = "Not filled";
    }
    return "A Shape with color of " + this.getColor ( ) + " and " + full;
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Shape;
