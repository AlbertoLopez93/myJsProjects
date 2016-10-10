"use strict";

let NewCustomer = require("../NewCustomer");

let newCustomerData = {ID: 1, name: "John", gender: "m"};
let customer;

xdescribe('NewCustomer class', () => {
  beforeEach(() => {
    customer = new NewCustomer(newCustomerData.ID, newCustomerData.name, newCustomerData.gender);
  });

  describe('Private properties', () => {
    it('should have a private property called ID', () => {
      expect(new NewCustomer().ID).toBeUndefined();
    });
    it('should have a private property called name', () => {
      expect(new NewCustomer().name).toBeUndefined();
    });
    it('should have a private property called gender', () => {
      expect(new NewCustomer().gender).toBeUndefined();
    });
  });
  describe('Public methods', () => {
    describe('getID method', () => {
      it('should be defined', () => {
        expect(customer.getID).toBeDefined();
        expect(typeof customer.getID).toBe('function');
      });
      it('should return the ID of the instance', () => {
        expect(customer.getID()).toBe(1);
      });
    });
    describe('getName method', () => {
      it('should be defined', () => {
        expect(customer.getName).toBeDefined();
        expect(typeof customer.getName).toBe('function');
      });
      it('should return the name of the customer', () => {
        expect(customer.getName()).toBe("John");
      });
    });
    describe('getGender method', () => {
      it('should be defined', () => {
        expect(customer.getGender).toBeDefined();
        expect(typeof customer.getGender).toBe('function');
      });
      it('should return the gender of the instance', () => {
        expect(customer.getGender()).toBe("m");
      });
    });
    describe('toString method', () => {
      it('should be defined', () => {
        expect(customer.toString).toBeDefined();
        expect(typeof customer.toString).toBe('function');
      });
      it('should return a string following the pattern name(ID)', () => {
        expect(customer.toString()).toBe("John(1)");
      });
    });
  });
});
