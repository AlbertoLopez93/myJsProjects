"use strict";

let Shape = require ( "./Shape" );

function Circle ( radius, color, filled ) {
  if ( typeof radius !== "number" ) {
    radius = 1;
  }
  Shape.call ( this, color, filled );

  Object.defineProperty ( this, 'getRadius',
  { value: function ( ) {
      return radius;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

  Object.defineProperty ( this, 'setRadius',
  { value: function ( newRadius ) {
      radius = newRadius;
    } ,
    enumerable: true, configurable: false, writable: false
  } );

}

Circle.prototype = Object.create ( Shape.prototype );
Circle.prototype.constructor = Circle;

Object.defineProperty ( Circle.prototype, 'getArea',
{ value: function ( ) {
    let rad2 = this.getRadius ( );
    rad2 *= rad2;
    return Math.PI * rad2;
  } ,
  enumerable: true, configurable: false, writable: false
} );

Object.defineProperty ( Circle.prototype, 'getPerimeter',
{ value: function ( ) {
    return 2* Math.PI * this.getRadius ( );
  } ,
  enumerable: true, configurable: false, writable: false
} );

Object.defineProperty ( Circle.prototype, 'toString',
{ value: function ( ) {
    return "A Circle with radius=" + this.getRadius ( )
    + ", which is a subclass of " + Shape.prototype.toString.call( this );
  } ,
  enumerable: true, configurable: false, writable: false
} );

module.exports = Circle;
