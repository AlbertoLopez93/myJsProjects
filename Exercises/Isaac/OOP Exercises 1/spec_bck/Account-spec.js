(function() {
    'use strict';

    var Account = require('../Account');

    describe("Testing Account class", function() {
        it("Should be defined", function() {
            expect(Account).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var account1 = new Account({
                id: 1,
                name: "Isaac",
                balance: 100
            });

            var account2 = new Account({
                id: 2,
                name: "Nahum",
                balance: 1000
            });

            expect(account1.getID()).toBe(1); // 1
            expect(account1.getName()).toBe("Isaac"); // Isaac
            expect(account1.getBalance()).toBe(100); // 100
            expect(account1.credit(50)).toBe(150); // 150
            expect(account1.getBalance()).toBe(150); // 150
            expect(account1.debit(70)).toBe(80); // 80
            expect(account1.getBalance()).toBe(80); // 80
            expect(account2.transferTo(account1, 600)).toBe(400); // 400
            expect(account2.getBalance()).toBe(400); // 400
            expect(account1.getBalance()).toBe(680); // 680
            expect(account1.toString()).toBe("Account[id=1, name=Isaac, balance=680]"); // Account[id=1, name=Isaac, balance=680]
            expect(account1.debit(700)).toBe(680); // Amount exceeded balance, 680
            expect(account2.transferTo(account1, 401)).toBe(400); // Amount exceeded balance, 400
        });
    });
}());
