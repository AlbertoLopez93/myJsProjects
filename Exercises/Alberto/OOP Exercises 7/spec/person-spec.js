"use strict";

let Person = require ( "../Person" );

let Robert = new Person ( "Robert", "Ninos Heroes 115" );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getName return name", function ( ) {
    expect ( Robert.getName ( ) ).toBe ( "Robert" )
  } );
  it ( "getAddress return address", function ( ) {
    expect ( Robert.getAddress ( ) ).toBe ( "Ninos Heroes 115" )
  } );
  it ( "setAddress return undefined", function ( ) {
    expect ( Robert.setAddress ( "Montevideo, Uruaguay" ) ).toBeUndefined ( )
  } );
  it ( "setAddress change address", function ( ) {
    expect ( Robert.getAddress ( ) ).toBe ( "Montevideo, Uruaguay" )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "toString operates", function ( ) {
    expect ( Robert.toString ( ) ).toBe ( "Person[name=Robert,address=Montevideo, Uruaguay]" )
  } );
} );
