"use strict"

let Customer = require("../Customer");

describe("Customer Class",function (){
  let customer1 = new Customer(0, "Miguel Angel", 10);
  let customer2 = new Customer(1, "Delgado Martinez", 13);
  it("Should be defined", function(){
    expect(Customer).toBeDefined();
  });

  describe("Private properties", function (){
    it("Should hava a private property called ID", function(){
      expect(customer1.ID).toBeUndefined();
    });
    it("Should hava a private property called name", function(){
      expect(customer1.name).toBeUndefined();
    });
    it("Should hava a private property called discount", function(){
      expect(customer1.discount).toBeUndefined();
    });
  });

  describe("Methods", function (){
    describe("getID method", function(){
      it("Should be defined", function(){
        expect(customer1.getID).toBeDefined();
        expect(typeof customer1.getID).toBe("function");
      });
      it("Should return the ID of the customer", function(){
        expect(customer1.getID()).toBe(0);
        expect(customer2.getID()).toBe(1);
      });
    });
    describe("getName method", function(){
      it("Should be defined", function(){
        expect(customer1.getName).toBeDefined();
        expect(typeof customer1.getName).toBe("function");
      });
      it("Should return the name of the customer", function(){
        expect(customer1.getName()).toBe("Miguel Angel");
        expect(customer2.getName()).toBe("Delgado Martinez");
      });
    });
    describe("getDiscount method", function(){
      it("Should be defined", function(){
        expect(customer1.getDiscount).toBeDefined();
        expect(typeof customer1.getDiscount).toBe("function");
      });
      it("Should return the discount of the customer", function(){
        expect(customer1.getDiscount()).toBe(10);
        expect(customer2.getDiscount()).toBe(13);
      });
    });
    describe("setDiscount method", function(){
      it("Should be defined", function(){
        expect(customer1.setDiscount).toBeDefined();
        expect(typeof customer1.setDiscount).toBe("function");
      });
      it("Should set a new discount to the customer", function(){
        let newDiscount1 = 11;
        let newDiscount2 = 22;
        customer1.setDiscount(newDiscount1);
        customer2.setDiscount(newDiscount2);
        expect(customer1.getDiscount()).toBe(newDiscount1);
        expect(customer2.getDiscount()).toBe(newDiscount2);
      });
    });
    describe("toString method", function(){
      it("Should be defined", function(){
        expect(customer1.toString).toBeDefined();
        expect(typeof customer1.toString).toBe("function");
      });
      it("Should return a string following the pattern 'name(ID)'", function(){
        expect(customer1.toString()).toBe("Miguel Angel(0)");
        expect(customer2.toString()).toBe("Delgado Martinez(1)");
      });
    });
  });
});
