"use strict";

let Customer = require("../Customer");
let Invoice = require("../Invoice");

let customerData = {id: 1, name: "John", discount: 20};
let customer;

let invoiceData = {id: 20, customer: undefined, amount: 100.00};
let invoice;

xdescribe('Invoice Class', () => {
  beforeEach(() => {
    customer = new Customer(customerData.id, customerData.name, customerData.discount);
    invoiceData.customer = customer;
    invoice = new Invoice(invoiceData.id, invoiceData.customer, invoiceData.amount);
  });

  describe('Private properties', () => {
    it('should have a private property called ID', () => {
      expect(invoice.ID).toBeUndefined();
    });
    it('should have a private property called customer', () => {
      expect(invoice.customer).toBeUndefined();
    });
    it('should have a private property called amount', () => {
      expect(invoice.amount).toBeUndefined();
    });
  });
  describe('Public methods', () => {
    describe('getID method', () => {
      it('should be defined', () => {
        expect(invoice.getID).toBeDefined();
        expect(typeof invoice.getID).toBe('function');
      });
      it('should return the ID of the instance', () => {
        expect(invoice.getID()).toBe(20);
      });
    });
    describe('getCustomer method', () => {
      it('should be defined', () => {
        expect(invoice.getCustomer).toBeDefined();
        expect(typeof invoice.getCustomer).toBe('function');
      });
      it('should return the customer object of the instance', () => {
        expect(invoice.getCustomer()).toEqual(customer);
        expect(invoice.getCustomer() instanceof Customer).toBe(true);
      });
    });
    describe('getAmount method', () => {
      it('should be defined', () => {
        expect(invoice.getAmount).toBeDefined();
        expect(typeof invoice.getAmount).toBe('function');
      });
      it('should return the amount of the instance', () => {
        expect(invoice.getAmount()).toBe(100);
      });
    });
    describe('setCustomer method', () => {
      it('should be defined', () => {
        expect(invoice.setCustomer).toBeDefined();
        expect(typeof invoice.setCustomer).toBe('function');
      });
      it('should set a new customer object to the instance', () => {
        let newCustomer = new Customer(2, "Jennifer", 50);
        expect(invoice.getCustomer()).toEqual(customer);
        expect(invoice.getCustomer() instanceof Customer).toBe(true);
        invoice.setCustomer(newCustomer);
        expect(invoice.getCustomer()).toEqual(newCustomer);
        expect(invoice.getCustomer() instanceof Customer).toBe(true);
      });
    });
    describe('getCustomerName method', () => {
      it('should be defined', () => {
        expect(invoice.getCustomerName).toBeDefined();
        expect(typeof invoice.getCustomerName).toBe('function');
      });
      it('should return the name of the customer of the instance', () => {
        expect(invoice.getCustomerName()).toBe("John");
      });
    });
    describe('getAmountAfterDiscount method', () => {
      it('should be defined', () => {
        expect(invoice.getAmountAfterDiscount).toBeDefined();
        expect(typeof invoice.getAmountAfterDiscount).toBe('function');
      });
      it('should return the final amount after the customer discount is applied to the amount of the instance', () => {
        expect(invoice.getAmountAfterDiscount()).toBe(80);
      });
    });
  });
});
