"use strict"

let NewCustomer = require("../NewCustomer");

describe("NewCustomer Class",function (){
  let customer1 = new NewCustomer(0, "Miguel Angel", "m");
  let customer2 = new NewCustomer(1, "Maria Hernandez", "f");
  it("Should be defined", function(){
    expect(NewCustomer).toBeDefined();
  });

  describe("Private properties", function (){
    it("Should hava a private property called ID", function(){
      expect(customer1.ID).toBeUndefined();
    });
    it("Should hava a private property called name", function(){
      expect(customer1.name).toBeUndefined();
    });
    it("Should hava a private property called gender", function(){
      expect(customer1.gender).toBeUndefined();
    });
  });

  describe("Methods", function (){
    describe("getID method", function(){
      it("Should be defined", function(){
        expect(customer1.getID).toBeDefined();
        expect(typeof customer1.getID).toBe("function");
      });
      it("Should return the ID of the new customer", function(){
        expect(customer1.getID()).toBe(0);
        expect(customer2.getID()).toBe(1);
      });
    });
    describe("getName method", function(){
      it("Should be defined", function(){
        expect(customer1.getName).toBeDefined();
        expect(typeof customer1.getName).toBe("function");
      });
      it("Should return the name of the new customer", function(){
        expect(customer1.getName()).toBe("Miguel Angel");
        expect(customer2.getName()).toBe("Maria Hernandez");
      });
    });
    describe("getGender method", function(){
      it("Should be defined", function(){
        expect(customer1.getGender).toBeDefined();
        expect(typeof customer1.getGender).toBe("function");
      });
      it("Should return the gender of the new customer", function(){
        expect(customer1.getGender()).toBe("m");
        expect(customer2.getGender()).toBe("f");
      });
    });
    describe("toString method", function(){
      it("Should be defined", function(){
        expect(customer1.toString).toBeDefined();
        expect(typeof customer1.toString).toBe("function");
      });
      it("Should return a string following the pattern name(ID)", function(){
        expect(customer1.toString()).toBe("Miguel Angel(0)");
        expect(customer2.toString()).toBe("Maria Hernandez(1)");
      });
    });
  });
});
