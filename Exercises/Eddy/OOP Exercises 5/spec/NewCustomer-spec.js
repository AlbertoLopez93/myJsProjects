"use strict";
/**
 * Created by jazielsama on 3/10/16.
 */
let NewCustomer = require ("../NewCustomer");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# testing
describe ("Testing NewCustomer constructor", function () {
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 Customer start
	describe ("Testing NewCustomer function to be defined", function () {
		it ("should exists", function () {
			expect (NewCustomer).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests private properties and methods", function () {
			let ID1 = 1234;
			let ID2 = 5678;
			let name1 = 'stringy';
			let name2 = 'stringor';
			let gender1 = 'm';
			let gender2 = 'f';

			let customer1 = new  NewCustomer(ID1,name1,gender1);
			let customer2 = new  NewCustomer(ID2,name2,gender2);
			it ("#1 getID", function () {
				expect (customer1.getID()).toBe (1234);
			});
			it ("#2 getName", function () {
				expect (customer1.getName()).toBe ('stringy');
			});
			it ("#3 getDiscount", function () {
				expect (customer1.getGender()).toBe (10);
			});
			it ("#4 setDiscount return undefined", function () {
				expect (customer1.setDiscount(30)).toBe (undefined);
			});
			it ("#5 getDiscount", function () {
				expect (customer1.getDiscount()).toBe (30);
			});
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
});
