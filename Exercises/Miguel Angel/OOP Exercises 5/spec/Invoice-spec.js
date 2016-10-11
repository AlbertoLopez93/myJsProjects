"use strict"

let Invoice = require("../Invoice");
let Customer = require("../Customer")

describe("Invoice Class",function (){
  let customer1 = new Customer(0, "Miguel Angel", 10);
  let customer2 = new Customer(1, "Delgado Martinez", 13);
  let newInvoice1 = new Invoice(0, customer1, 100);
  let newInvoice2 = new Invoice(1, customer2, 200);
  it("Should be defined", function(){
    expect(Invoice).toBeDefined();
  });

  describe("Private properties", function (){
    it("Should hava a private property called ID", function(){
      expect(newInvoice1.ID).toBeUndefined();
    });
    it("Should hava a private property called customer", function(){
      expect(newInvoice1.customer).toBeUndefined();
    });
    it("Should hava a private property called amount", function(){
      expect(newInvoice1.amount).toBeUndefined();
    });
  });

  describe("Methods", function (){
    describe("getID method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.getID).toBeDefined();
        expect(typeof newInvoice1.getID).toBe("function");
      });
      it("Should return the ID of the customer", function(){
        expect(newInvoice1.getID()).toBe(0);
        expect(newInvoice2.getID()).toBe(1);
      });
    });
    describe("getCustomer method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.getCustomer).toBeDefined();
        expect(typeof newInvoice1.getCustomer).toBe("function");
      });
      it("Should return an instance of Customer", function(){
        let newCustomer1 = newInvoice1.getCustomer();
        let newCustomer2 = newInvoice2.getCustomer();
        expect(newCustomer1 instanceof Customer).toBe(true);
        expect(newCustomer2 instanceof Customer).toBe(true);
      });
    });
    describe("getAmount method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.getAmount).toBeDefined();
        expect(typeof newInvoice1.getAmount).toBe("function");
      });
      it("Should return the amount of the Invoice", function(){
        expect(newInvoice1.getAmount()).toBe(100);
        expect(newInvoice2.getAmount()).toBe(200);
      });
    });
    describe("setCustomer method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.setCustomer).toBeDefined();
        expect(typeof newInvoice1.setCustomer).toBe("function");
      });
      it("Should set a new customer to the invoice", function(){
        let newCustomer3 = new Customer(2, "John Doe", 5);
        let newCustomer4 = new Customer(3, "String Stringson", 1);
        newInvoice1.setCustomer(newCustomer3);
        newInvoice2.setCustomer(newCustomer4);
        expect(newInvoice1.getCustomer()).toBe(newCustomer3);
        expect(newInvoice2.getCustomer()).toBe(newCustomer4);
      });
    });
    describe("setAmount method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.setAmount).toBeDefined();
        expect(typeof newInvoice1.setAmount).toBe("function");
      });
      it("Should set a new amount to the Invoice", function(){
        newInvoice1.setAmount(151.5);
        newInvoice2.setAmount(221.3);
        expect(newInvoice1.getAmount()).toBe(151.5);
        expect(newInvoice2.getAmount()).toBe(221.3);
      });
    });
    describe("getCustomerName method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.getCustomerName).toBeDefined();
        expect(typeof newInvoice1.getCustomerName).toBe("function");
      });
      it("Should return the name of the customer instance of the Invoice", function(){
        expect(newInvoice1.getCustomerName()).toBe("John Doe");
        expect(newInvoice2.getCustomerName()).toBe("String Stringson");
      });
    });
    describe("getAmountAfterDiscount method", function(){
      it("Should be defined", function(){
        expect(newInvoice1.getAmountAfterDiscount).toBeDefined();
        expect(typeof newInvoice1.getAmountAfterDiscount).toBe("function");
      });
      it("Should return the amount of the Invoice after the discount of the customer", function(){
        expect(newInvoice1.getAmountAfterDiscount()).toBe(143.925);
        expect(newInvoice2.getAmountAfterDiscount()).toBe(219.08700000000002);
      });
    });
  });
});
