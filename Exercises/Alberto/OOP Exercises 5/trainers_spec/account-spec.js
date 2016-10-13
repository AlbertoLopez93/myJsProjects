"use strict";

let NewCustomer = require("../NewCustomer");
let Account = require("../Account");

let newCustomer1Data = {ID: 1, name: "John", gender: "m"};
let newCustomer2Data = {ID: 2, name: "Jennifer", gender: "f"};
let customer1;
let customer2;

let account1Data = {id: 100, customer: undefined, balance: 150.00};
let account2Data = {id: 200, customer: undefined};
let account1;
let account2;

describe('Account class', () => {
  beforeEach(() => {
    customer1 = new NewCustomer(newCustomer1Data.ID, newCustomer1Data.name, newCustomer1Data.gender);
    customer2 = new NewCustomer(newCustomer2Data.ID, newCustomer2Data.name, newCustomer2Data.gender);
    account1 = new Account(account1Data.id, customer1, account1Data.balance);
    account2 = new Account(account2Data.id, customer2);
  });
  describe('Private properties', () => {
    it('should have a private property called id', () => {
      expect(account1.id).toBeUndefined();
    });
    it('should have a private property called customer', () => {
      expect(account1.customer).toBeUndefined();
    });
    it('should have a private property called balance', () => {
      expect(account1.balance).toBeUndefined();
    });
  });
  describe('Public methods', () => {
    describe('getID method', () => {
      it('should be defined', () => {
        expect(account1.getID).toBeDefined();
        expect(typeof account1.getID).toBe('function');
      });
      it('should return the id of the instance', () => {
        expect(account1.getID()).toBe(100);
        expect(account2.getID()).toBe(200);
      });
    });
    describe('getCustomer method', () => {
      it('should be defined', () => {
        expect(account1.getCustomer).toBeDefined();
        expect(typeof account1.getCustomer).toBe('function');
      });
      it('should return the customer object of the instance', () => {
        expect(account1.getCustomer()).toEqual(customer1);
        expect(account2.getCustomer()).toEqual(customer2);
      });
    });
    describe('getBalance method', () => {
      it('should be defined', () => {
        expect(account1.getBalance).toBeDefined();
        expect(typeof account1.getBalance).toBe('function');
      });
      it('should return the balance of the instance', () => {
        expect(account1.getBalance()).toBe(150);
        expect(account2.getBalance()).toBe(0);
      });
    });
    describe('setBalance method', () => {
      it('should be defined', () => {
        expect(account1.setBalance).toBeDefined();
        expect(typeof account1.setBalance).toBe('function');
      });
      it('should set a new balance to the instance', () => {
        expect(account2.getBalance()).toBe(0);
        account2.setBalance(120);
        expect(account2.getBalance()).toBe(120);
      });
    });
    describe('toString method', () => {
      it('should be defined', () => {
        expect(account1.toString).toBeDefined();
        expect(typeof account1.toString).toBe('function');
      });
      it('should return a string following the pattern name(ID) balance=$xxx.xx wher the balance is rounded to 2 decimal places', () => {
        expect(account1.toString()).toBe("John(1) balance=$150.00");
        expect(account2.toString()).toBe("Jennifer(2) balance=$0.00");
      });
    });
    describe('getCustomerName method', () => {
      it('should be defined', () => {
        expect(account1.getCustomerName).toBeDefined();
        expect(typeof account1.getCustomerName).toBe('function');
      });
      it('should return the name of the customer property of the instance', () => {
        expect(account1.getCustomerName()).toBe("John");
        expect(account2.getCustomerName()).toBe("Jennifer");
      });
    });
    describe('deposit method', () => {
      it('should be defined', () => {
        expect(account1.deposit).toBeDefined();
        expect(typeof account1.deposit).toBe('function');
      });
      it('should add the given amount to the balance of the instance and return the instance', () => {
        expect(account2.getBalance()).toBe(0);
        account2.deposit(130.00);
        expect(account2.getBalance()).toBe(130.00);
        expect(account2.deposit(20.00) instanceof Account).toBe(true);
      });
    });
    describe('withdraw method', () => {
      it('should be defined', () => {
        expect(account1.withdraw).toBeDefined();
        expect(typeof account1.withdraw).toBe('function');
      });
      it('should subtract the amount of the balance instance if amount is less or equal than balance', () => {
        expect(account1.getBalance()).toBe(150);
        account1.withdraw(50);
        expect(account1.getBalance()).toBe(100);
        expect(account1.withdraw(20) instanceof Account).toBe(true);
      });
      it('should not subtract the amount from the balance of the instance if the amount is greater than the balance', () => {
        expect(account1.getBalance()).toBe(150);
        account1.withdraw(200);
        expect(account1.getBalance()).toBe(150);
        expect(account1.withdraw(150) instanceof Account).toBe(true);
      });
    });
  });
});
