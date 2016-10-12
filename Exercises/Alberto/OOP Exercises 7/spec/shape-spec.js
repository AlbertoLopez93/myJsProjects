"use strict";

let Shape = require ( "../Shape" );

let Poligon = new Shape ( "blue", false );
let notDefined = new Shape ( );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getColor return color", function ( ) {
    expect ( Poligon.getColor ( ) ).toBe ( "blue" );
    expect ( notDefined.getColor ( ) ).toBe ( "red" )
  } );
  it ( "isFilled return boolean", function ( ) {
    expect ( Poligon.isFilled ( ) ).toBe ( false );
    expect ( notDefined.isFilled ( ) ).toBe ( true )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "toString operates", function ( ) {
    expect ( Poligon.toString ( ) ).toBe ( "A Shape with color of blue and Not filled" )
  } );
} );
