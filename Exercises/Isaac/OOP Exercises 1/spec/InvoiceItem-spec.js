(function() {
    'use strict';

    var InvoiceItem = require('../InvoiceItem');

    describe("Testing InvoiceItem class", function() {
        it("Should be defined", function() {
            expect(InvoiceItem).toBeDefined();
        });
        it("Should work with all its methods", function() {
            var invoice = new InvoiceItem({
                id: 500,
                desc: "Laptop Computer",
                qty: 2,
                unitPrice: 18000
            });
            expect(invoice.getID()).toBe(500); // 500
            expect(invoice.getDesc()).toBe("Laptop Computer"); // "Latop Computer"
            expect(invoice.getQty()).toBe(2); // 2
            expect(invoice.getUnitPrice()).toBe(18000); // 18000
            invoice.setUnitPrice(20000);
            expect(invoice.getUnitPrice()).toBe(20000); // 20000
            expect(invoice.getTotal()).toBe(40000); // 40000
            expect(invoice.toString()).toBe("InvoiceItem[id=500, desc=Laptop Computer, qty=2, unitPrice=20000]"); // "InvoiceItem[id=500, desc=Latop Computer, qty=2, unitPrice=20000]"
        });
    });
}());
