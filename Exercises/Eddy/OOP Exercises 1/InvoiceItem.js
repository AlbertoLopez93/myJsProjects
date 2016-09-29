/**
 * Created by jazielsama on 28/09/16.
 */

/*
 Create a class named InvoiceItem, that will receive in the constructor:
 id:string
 desc:string
 qty:int
 unitPrice:string
 The InvoiceItem class will also have the following methods:
 getID():string returns the id of the invoiceItem.
 getDesc():string returns the desc (description) of the invoiceItem.
 getQty():int returns the qty (quantity) of the invoiceItem.
 getUnitPrice():float returns the unitPrice of the invoiceItem.
 setUnitPrice(unitPrice:float):void set a new unitPrice for the invoiceItem.
 getTotal():float calculates the total of the invoiceItem and returns it.
 toString():string returns a string that will follow the pattern: “InvoiceItem[id=?, desc=?, qty=?, unitPrice=?]”

 * */

var inv = {
	id: 'stringty123',
	desc: 'stringsten is cool',
	qty: 4,
	unitPrice: 9.99
};

function InvoiceItem (data) {
	var id = data.id;
	var description = data.desc;
	var qty = data.qty;
	var unitPrice = data.unitPrice;

	this.getID = function () {
		return id;
	};

	this.getDesc = function () {
		return description;
	};

	this.getQty = function () {
		return qty;
	};

	this.getUnitPrice = function () {
		return parseFloat (unitPrice);
	};

	this.setUnitPrice = function setUnitPrice (newUnitPrice) {
		return unitPrice = newUnitPrice;
	}

}

InvoiceItem.prototype.getTotal = function getTotal () {
	return this.getQty () * this.getUnitPrice ();
};

InvoiceItem.prototype.toString = function toString () {

	return 'InvoiceItem[id='+this.getID()+', desc='+this.getDesc()+', qty='+this.getQty()+', unitPrice='+this.getUnitPrice()+']'
};

var inve = new InvoiceItem (inv);
console.log (inve.getID ());
console.log (inve.getDesc ());
console.log (inve.getQty ());
console.log (inve.getUnitPrice ());
console.log (inve.getTotal ());
console.log (inve.setUnitPrice(10));
console.log (inve.getUnitPrice ());
console.log (inve.getTotal ());
console.log (inve.toString());