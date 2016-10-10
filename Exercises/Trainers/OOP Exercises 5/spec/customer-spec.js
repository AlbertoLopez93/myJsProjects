"use strict";

let Customer = require("../Customer");

let customerData = {id: 1, name: "John", discount: 20};
let customer;

xdescribe('Customer class', () => {
  beforeEach(() => {
    customer = new Customer(customerData.id, customerData.name, customerData.discount);
  });

  describe('Private properties', () => {
    it('should have a private property called ID', () => {
      expect(new Customer().ID).toBeUndefined();
    });
    it('shuold have a private property called name', () => {
      expect(new Customer().name).toBeUndefined();
    });
    it('should ahvea private property called discount', () => {
      expect(new Customer().discount).toBeUndefined();
    });
  });

  describe('Public methods', () => {
    describe('getID method', () => {
      it('should be defined', () => {
        expect(new Customer().getID).toBeDefined();
        expect(typeof new Customer().getID).toBe('function');
      });
      it('should return the ID of the instance', () => {
        expect(customer.getID()).toBe(1);
      });
    });
    describe('getName method', () => {
      it('should be defined', () => {
        expect(new Customer().getName).toBeDefined();
        expect(typeof new Customer().getName).toBe('function');
      });
      it('should return the name of the instance', () => {
        expect(customer.getName()).toBe("John");
      });
    });
    describe('getDiscount method', () => {
      it('should be defined', () => {
        expect(new Customer().getDiscount).toBeDefined();
        expect(typeof new Customer().getDiscount).toBe('function');
      });
      it('should return the discount percentage of the instance', () => {
        expect(customer.getDiscount()).toBe(20);
      });
    });
    describe('setDiscount method', () => {
      it('should be defined', () => {
        expect(new Customer().setDiscount).toBeDefined();
        expect(typeof new Customer().setDiscount).toBe('function');
      });
      it('should set a  new discount to the instance', () => {
        expect(customer.getDiscount()).toBe(20);
        customer.setDiscount(30);
        expect(customer.getDiscount()).toBe(30);
      });
    });
    describe('toString method', () => {
      it('should be defined', () => {
        expect(new Customer().toString).toBeDefined();
        expect(typeof new Customer().toString).toBe('function');
      });
      it('should return a string following the pattern name(ID)', () => {
        expect(customer.toString()).toBe("John(1)");
      });
    });
  });
});
