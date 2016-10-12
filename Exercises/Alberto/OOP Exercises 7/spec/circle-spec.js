"use strict";

let Circle = require ( "../Circle" );

let Whell = new Circle ( 5, "black", true );
let Go = new Circle ( );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getRadius return radius", function ( ) {
    expect ( Whell.getRadius ( ) ).toBe ( 5 );
    expect ( Go.getRadius ( ) ).toBe ( 1 )
  } );
  it ( "setRadius return undefined", function ( ) {
    expect ( Go.setRadius ( 9 ) ).toBeUndefined ( )
  } );
  it ( "setRadius change radius", function ( ) {
    expect ( Go.getRadius ( ) ).toBe ( 9 )
  } );
} );

describe ( "Testing inherit. ", function ( ) {
  it ( "getColor return color", function ( ) {
    expect ( Whell.getColor ( ) ).toBe ( "black" )
  } );
  it ( "isFilled return filled", function ( ) {
    expect ( Whell.isFilled ( ) ).toBe ( true )
  } );
  it ( "setFilled return undefined", function ( ) {
    expect ( Whell.setFilled ( false ) ).toBeUndefined ( )
  } );
  it ( "setFilled change value", function ( ) {
    expect ( Whell.isFilled ( ) ).toBe ( false )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "getArea return area", function ( ) {
    expect ( Whell.getArea ( ) ).toBeGreaterThan ( 75 );
    expect ( Go.getArea ( ) ).toBeGreaterThan ( 163 )
  } );
  it ( "getPerimeter return perimeter", function ( ) {
    expect ( Whell.getPerimeter ( ) ).toBeGreaterThan ( 15 );
    expect ( Go.getPerimeter ( ) ).toBeGreaterThan ( 27 )
  } );
  it ( "toString operates", function ( ) {
    expect ( Go.toString ( ) ).toBe ( "A Circle with radius=9, which is a subclass of A Shape with color of red and filled" )
  } );
} );
