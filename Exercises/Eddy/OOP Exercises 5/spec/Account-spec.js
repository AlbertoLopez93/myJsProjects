"use strict";

let Account = require ("../Account");
let Customer = require ('../Customer');
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++# testing
describe ("Testing Account constructor", function () {
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++#1 Customer start
	describe ("Testing Account function to be defined", function () {
		it ("should exists", function () {
			expect (Account).toBeDefined ();
		});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		describe ("Tests private properties and methods", function () {
			var ID1 = 1234;
			var ID2 = 5678;
			var name1 = 'stringy';
			var name2 = 'stringor';
			var discount1 = 10;
			var discount2 = 20;
			var cus1 = new  Customer(ID1,name1,discount1);
			var cus2 = new  Customer(ID2,name2,discount2);
			var acc1 = new  Account(1234,cus1,20.20);
			var acc2 = new  Account(5678,cus2,50.50);

			it ("#1 getID", function () {
				expect (acc1.getID()).toBe (1234);
			});
			it ("#2 getName", function () {
				expect (acc1.getCustomerName()).toBe ('stringy');
			});
			it ("#3 getBalance", function () {
				expect (acc1.getBalance()).toBe (20.20);
			});
			it ("#4 deposit return undefined", function () {
				expect (acc1.deposit(30)).toBe (undefined);
			});
			it ("#5 getBalance", function () {
				expect (acc1.getBalance()).toBe (50.20);
			});

			it ("#6 withdraw", function () {
				expect (acc1.withdraw(50)).toBe (undefined);
			});
			it ("#7 getBalance", function () {
				expect (acc1.getBalance()).toBe ( 0.20000000000000284);
			});



			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		});
	});
});




