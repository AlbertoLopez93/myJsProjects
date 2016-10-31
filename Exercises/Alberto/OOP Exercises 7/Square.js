"use strict";

let Rectangle = require ( "./Rectangle" );

function Square ( side, color, filled ) {
  if ( typeof side !== "number" ) { //not parameters
    side = 1;
  }

  Object.defineProperty ( this, 'getWidth',
  { configurable: true, writable: true
  } );

  Object.defineProperty ( this, 'setWidth',
  { configurable: true, writable: true
  } );

  Object.defineProperty ( this, 'getLength',
  { configurable: true, writable: true
  } );

  Object.defineProperty ( this, 'setLength',
  { configurable: true, writable: true
  } );

  Rectangle.call ( this, side, side, color, filled );

  Object.defineProperty ( this, 'getSide',
  { value: function ( ) {
      return side;
    } ,
    enumerable: true,
  } );

  Object.defineProperty ( this, 'setSide',
  { value: function ( newSide ) {
      side = newSide;
    } ,
    enumerable: true,
  } );

  Object.defineProperty( this, "setWidth",
    { value: function(line) {
      this.setSide(line);
    },
      enumerable: true, configurable: false, writable: false
  });

  Object.defineProperty( this, "setLength",
    { value: function(line) {
      this.setSide(line);
    },
      enumerable: true, configurable: false, writable: false
  });

  Object.defineProperty( this, "getWidth",
    { value: function() {
      return this.getSide();
    },
      enumerable: true, configurable: false, writable: false
  });

  Object.defineProperty( this, "getLength",
    { value: function() {
      return this.getSide();
    },
      enumerable: true, configurable: false, writable: false
  });

}

 Square.prototype = Object.create ( Rectangle.prototype );
 Square.prototype.constructor = Square;

Object.defineProperty ( Square.prototype, 'toString',
{ value: function ( ) {
    return "A Square with side=" + this.getSide( ) +
    ", which is a subclass of " + Rectangle.prototype.toString.call( this );
  } ,
  enumerable: true,
} );

module.exports = Square;

var cuadro = new Square(6);
console.log(cuadro.getArea());
console.log(cuadro.getPerimeter());
console.log(cuadro.toString());
console.log(cuadro.getLength());
