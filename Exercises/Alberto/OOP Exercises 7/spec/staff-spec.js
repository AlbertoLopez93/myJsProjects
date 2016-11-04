"use strict";

let Staff = require ( "../Staff" );

let Sharon = new Staff ( "Sharon", "California", "University", 32.4 );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getSchool return University", function ( ) {
    expect ( Sharon.getSchool ( ) ).toBe ( "University" )
  } );
  it ( "getPay return pay", function ( ) {
    expect ( Sharon.getPay ( ) ).toBe ( 32.4 )
  } );
  it ( "setSchool return undefined", function ( ) {
    expect ( Sharon.setSchool ( "Geography" ) ).toBeUndefined ( )
  } );
  it ( "setSchool change school", function ( ) {
    expect ( Sharon.getSchool ( ) ).toBe ( "Geography" )
  } );
  it ( "setPay return undefined", function ( ) {
    expect ( Sharon.setPay ( 105 ) ).toBeUndefined ( )
  } );
  it ( "setPay change pay", function ( ) {
    expect ( Sharon.getPay ( ) ).toBe ( 105 )
  } );
} );

describe ( "Testing inherit. ", function ( ) {
  it ( "getName return name", function ( ) {
    expect ( Sharon.getName ( ) ).toBe ( "Sharon" )
  } );
  it ( "getAddress return address", function ( ) {
    expect ( Sharon.getAddress ( ) ).toBe ( "California" )
  } );
  it ( "setAddress return undefined", function ( ) {
    expect ( Sharon.setAddress ( "Tepatitlán, Jalisco" ) ).toBeUndefined ( )
  } );
  it ( "setAddress change value", function ( ) {
    expect ( Sharon.getAddress ( ) ).toBe ( "Tepatitlán, Jalisco" )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "toString operates", function ( ) {
    expect ( Sharon.toString ( ) ).toBe ( "Staff[Person[name=Sharon,address=Tepatitlán, Jalisco],school=Geography,pay=105]" )
  } );
} );
