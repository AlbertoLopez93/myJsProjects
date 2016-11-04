"use strict";

let Shape = require ( "./Shape" );

function Rectangle ( width, length, color, filled ) {
  if ( typeof width !== "number" ) { //not parameters
    width = 1;
    length = 1;
  }
  Shape.call ( this, color, filled );

  Object.defineProperty ( this, 'getWidth',
  { value: function ( ) {
      return width;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setWidth',
  { value: function ( newWidth ) {
      width = newWidth;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'getLength',
  { value: function ( ) {
      return length;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setLength',
  { value: function ( newlength ) {
      length = newlength;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Rectangle.prototype = Object.create ( Shape.prototype );
Rectangle.prototype.constructor = Rectangle;

Object.defineProperty ( Rectangle.prototype, 'getArea',
{ value: function ( ) {
    return this.getWidth( ) * this.getLength( );
  } ,
  enumerable: true, configurable: false, writable: false
} );

Object.defineProperty ( Rectangle.prototype, 'getPerimeter',
{ value: function ( ) {
    return 2* ( this.getWidth() + this.getLength() );
  } ,
  enumerable: true, configurable: false, writable: false
} );

Object.defineProperty ( Rectangle.prototype, 'toString',
{ value: function ( ) {
    return "A Rectangle with width=" + this.getWidth( ) + " and length=" + this.getLength( )
    + ", which is a subclass of " + Shape.prototype.toString.call( this );
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Rectangle;
