"use strict";

let Rectangle = require ( "../Rectangle" );

let Big = new Rectangle ( 5, 8, "black", true );
let MyRectangle = new Rectangle ( );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getWidth return width", function ( ) {
    expect ( Big.getWidth ( ) ).toBe ( 5 );
    expect ( MyRectangle.getWidth ( ) ).toBe ( 1 )
  } );
  it ( "getLength return length", function ( ) {
    expect ( Big.getLength ( ) ).toBe ( 8 );
    expect ( MyRectangle.getLength ( ) ).toBe ( 1 )
  } );
  it ( "setWidth return undefined", function ( ) {
    expect ( MyRectangle.setWidth ( 7 ) ).toBeUndefined ( )
  } );
  it ( "setWidth change width", function ( ) {
    expect ( MyRectangle.getWidth ( ) ).toBe ( 7 )
  } );
  it ( "setLength return undefined", function ( ) {
    expect ( MyRectangle.setLength ( 7 ) ).toBeUndefined ( )
  } );
  it ( "setLength change width", function ( ) {
    expect ( MyRectangle.getLength ( ) ).toBe ( 7 )
  } );
} );

describe ( "Testing inherit. ", function ( ) {
  it ( "getColor return color", function ( ) {
    expect ( Big.getColor ( ) ).toBe ( "black" );
    expect ( MyRectangle.getColor ( ) ).toBe ( "red" )
  } );
  it ( "isFilled return filled", function ( ) {
    expect ( Big.isFilled ( ) ).toBe ( true )
  } );
  it ( "setFilled return undefined", function ( ) {
    expect ( Big.setFilled ( false ) ).toBeUndefined ( )
  } );
  it ( "setFilled change value", function ( ) {
    expect ( Big.isFilled ( ) ).toBe ( false )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "getArea return area", function ( ) {
    expect ( Big.getArea ( ) ).toBe ( 40 );
    expect ( MyRectangle.getArea ( ) ).toBe ( 49 )
  } );
  it ( "getPerimeter return perimeter", function ( ) {
    expect ( Big.getPerimeter ( ) ).toBe ( 26 );
    expect ( MyRectangle.getPerimeter ( ) ).toBe ( 28 )
  } );
  it ( "toString operates", function ( ) {
    expect ( MyRectangle.toString ( ) ).toBe ( "A Rectangle with width=7 and length=7, which is a subclass of A Shape with color of red and filled" )
  } );
} );
