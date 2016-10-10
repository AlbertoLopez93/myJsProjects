"use strict";

let howManyTimes = require("../howManyTimes");

/*This code evaluate function howManyTimes that verify hoy many times
you can entry with annual pass to make cheaper than entry with single tickets*/

describe ( "Function howManyTimes return 0 if don't receive valid parameters. ", function ( ) {
  it ( "With undefined parameters", function ( ) {
    expect ( howManyTimes ( ) ).toBe ( 0 );
  } );
  it ( "With not numbers parameters", function ( ) {
    expect ( howManyTimes ( false, false ) ).toBe ( 0 );
  } );
  it ( "With not numbers parameters", function ( ) {
    expect ( howManyTimes ( "value", "cost" ) ).toBe ( 0 );
  } );
  it ( "With only one parameter", function ( ) {
    expect ( howManyTimes ( 4.5 ) ).toBe ( 0 );
  } );
} );

describe ( "Function operating. ", function ( ) {
  it ( "With integers parameters", function ( ) {
    expect ( howManyTimes ( 350, 15 ) ).toBe ( 24 );
    expect ( howManyTimes ( 450, 27 ) ).toBe ( 17 );
  } );
  it ( "With float parameters", function ( ) {
    expect ( howManyTimes ( 450, 23.54 ) ).toBe ( 20 );
    expect ( howManyTimes ( 345.73, 14.85 ) ).toBe ( 24 );
  } );
  it ( "Evaluate integer days", function ( ) {
    expect ( howManyTimes ( 350, 10 ) ).toBe ( 36 );
  } );
  it ( "Evaluate float days", function ( ) {
    expect ( howManyTimes ( 353, 10 ) ). not.toBe ( 35.3 );
  } );
  it ( "Evaluate answer in integer number", function ( ) {
    expect ( howManyTimes ( 353, 10 ) ). toBe ( 36 );
  } );
  it ( "Evaluate negative numbers", function ( ) {
    expect ( howManyTimes ( -353, 10 ) ). toBe ( 0 );
    expect ( howManyTimes ( -353, -10 ) ). toBe ( 0 );
  } );
  it ( "Evaluate annual is more expensive than 365 single tickets", function ( ) {
    expect ( howManyTimes ( 35320, 10 ) ). toBe ( 0 );
  } );
} );
