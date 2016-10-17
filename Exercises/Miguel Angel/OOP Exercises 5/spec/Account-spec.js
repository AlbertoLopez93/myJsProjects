"use strict"

let NewCustomer = require("../NewCustomer");
let Account = require("../Account");

describe("Account class", function (){
  let customer1 = new NewCustomer(0, "Miguel Angel", "m");
  let customer2 = new NewCustomer(1, "Maria Hernandez", "f");
  let newAccount1 = new Account(0, customer1);
  let newAccount2 = new Account(1, customer2, 11.7);
  it("Should be defined", function (){
    expect(Account).toBeDefined();
  });
  describe("Private properties", function(){
    it("Should have a private property called ID", function(){
      expect(newAccount1.ID).toBeUndefined();
    });
    it("Should have a private property called customer", function(){
      expect(newAccount1.customer).toBeUndefined();
    });
    it("Should have a private property called balance", function(){
      expect(newAccount1.balance).toBeUndefined();
    });
  });
  describe("Methods", function(){
    describe("getID method", function(){
      it("Should be defined", function(){
        expect(newAccount1.getID).toBeDefined();
        expect(typeof newAccount1.getID).toBe("function");
      });
      it("Should return the id of the account", function (){
        expect(newAccount1.getID()).toBe(0);
        expect(newAccount2.getID()).toBe(1);
      });
    });
    describe("getCustomer method", function(){
      it("Should be defined", function(){
        expect(newAccount1.getCustomer).toBeDefined();
        expect(typeof newAccount1.getCustomer).toBe("function");
      });
      it("Should return an instance of NewCustomer", function(){
        let newCustomer1 = newAccount1.getCustomer();
        let newCustomer2 = newAccount2.getCustomer();
        expect(newCustomer1 instanceof NewCustomer).toBe(true);
        expect(newCustomer2 instanceof NewCustomer).toBe(true);
      });
    });
    describe("getBalance method", function (){
      it("Should be defined", function(){
        expect(newAccount1.getBalance).toBeDefined();
        expect(typeof newAccount1.getBalance).toBe("function");
      });
      it("Should return the balance of the Account instance", function(){
        expect(newAccount1.getBalance()).toBe(0.0);
        expect(newAccount2.getBalance()).toBe(11.7);
      });
    });
    describe("setBalance method", function (){
      it("Should be defined", function(){
        expect(newAccount1.setBalance).toBeDefined();
        expect(typeof newAccount1.setBalance).toBe("function");
      });
      it("Should return the balance of the Account instance", function(){
        newAccount1.setBalance(10.1);
        newAccount2.setBalance(16.4);
        expect(newAccount1.getBalance()).toBe(10.1);
        expect(newAccount2.getBalance()).toBe(16.4);
      });
    });
    describe("toString method", function(){
      it("Should be defined", function(){
        expect(newAccount1.toString).toBeDefined();
        expect(typeof newAccount1.toString).toBe("function");
      });
      it("Should return a string following the pattern 'name(ID) balance=$xxx.xx'", function(){
        expect(newAccount1.toString()).toBe("Miguel Angel(0) balance=$10.10");
        expect(newAccount2.toString()).toBe("Maria Hernandez(1) balance=$16.40");
      });
    });
    describe("getCustomerName method", function(){
      it("Should be defined", function(){
        expect(newAccount1.getCustomerName).toBeDefined();
        expect(typeof newAccount1.getCustomerName).toBe("function");
      });
      it("Should return the name of the instance NewCustomer of the account", function(){
        expect(newAccount1.getCustomerName()).toBe("Miguel Angel");
        expect(newAccount2.getCustomerName()).toBe("Maria Hernandez");
      });
    });
    describe("deposit method", function (){
      it("Should be defined", function(){
        expect(newAccount1.deposit).toBeDefined();
        expect(typeof newAccount1.deposit).toBe("function");
      });
      it("Should set the amount to the balance of the instance", function(){
        newAccount1.deposit(100);
        newAccount2.deposit(150);
        expect(newAccount1.getBalance()).toBe(110.1);
        expect(newAccount2.getBalance()).toBe(166.4);
      });
    });
    describe("withdraw method", function(){
      it("Should be defined", function(){
        expect(newAccount1.withdraw).toBeDefined();
        expect(typeof newAccount1.withdraw).toBe("function");
      });
      it("Should subtract the amount of the balance of the instance", function(){
        newAccount1.withdraw(30);
        newAccount2.withdraw(37);
        expect(newAccount1.getBalance()).toBe(80.1);
        expect(newAccount2.getBalance()).toBe(129.4);
      });
      it("Shouldn't subtract the amount of the balance if the amount is bigger than the balance", function(){
        newAccount1.withdraw(300);
        newAccount2.withdraw(370);
        expect(newAccount1.getBalance()).toBe(80.1);
        expect(newAccount2.getBalance()).toBe(129.4);
      });
    });
  });
});
