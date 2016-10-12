"use strict";

let Student = require ( "../Student" );

let Robert = new Student ( "Robert", "Ninos Heroes 115", "Math", 2013, 32.4 );

describe ( "Testing internal functions. ", function ( ) {
  it ( "getProgram return program", function ( ) {
    expect ( Robert.getProgram ( ) ).toBe ( "Math" )
  } );
  it ( "getYear return year", function ( ) {
    expect ( Robert.getYear ( ) ).toBe ( 2013 )
  } );
  it ( "getFee return fee", function ( ) {
    expect ( Robert.getFee ( ) ).toBe ( 32.4 )
  } );
  it ( "setProgram return undefined", function ( ) {
    expect ( Robert.setProgram ( "Geography" ) ).toBeUndefined ( )
  } );
  it ( "setProgram change program", function ( ) {
    expect ( Robert.getProgram ( ) ).toBe ( "Geography" )
  } );
  it ( "setFee return undefined", function ( ) {
    expect ( Robert.setFee ( 56.7 ) ).toBeUndefined ( )
  } );
  it ( "setFee change program", function ( ) {
    expect ( Robert.getFee ( ) ).toBe ( 56.7 )
  } );
} );

describe ( "Testing inherit. ", function ( ) {
  it ( "getName return name", function ( ) {
    expect ( Robert.getName ( ) ).toBe ( "Robert" )
  } );
  it ( "getAddress return address", function ( ) {
    expect ( Robert.getAddress ( ) ).toBe ( "Ninos Heroes 115" )
  } );
  it ( "setAddress return undefined", function ( ) {
    expect ( Robert.setAddress ( "Carretera Yahualica" ) ).toBeUndefined ( )
  } );
  it ( "setAddress change value", function ( ) {
    expect ( Robert.getAddress ( ) ).toBe ( "Carretera Yahualica" )
  } );
} );

describe ( "Testing prototype. ", function ( ) {
  it ( "toString operates", function ( ) {
    expect ( Robert.toString ( ) ).toBe ( "Student[Person[name=Robert,address=Carretera Yahualica],program=Geography,year=2013,fee=56.7]" )
  } );
} );
