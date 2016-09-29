"use strict"
function InvoiceItem(invoiceItem){
	var id = invoiceItem.id;
	var desc = invoiceItem.desc;
	var qty = invoiceItem.qty;
	var unitPrice = invoiceItem.unitPrice;
	this.getID = function getID(){
		return id;
	};
	this.getDesc = function getDesc(){
		return desc;
	};
	this.getQty = function getQty(){
		return qty;
	};
	this.getUnitPrice = function getUnitPrice(){
		return Number.parseFloat(unitPrice);
	};
	this.setUnitPrice = function setUnitPrice(newPrice){
		unitPrice = newPrice;
	};
}

InvoiceItem.prototype.getTotal = function getTotal(){
	var result = this.getQty() * this.getUnitPrice();
	return result;
};

InvoiceItem.prototype.toString = function toString(){
	var result = "InvoiceItem[id=" + this.getID() + ", desc=" + this.getDesc() + ", qty=" + this.getQty() + ", unitPrice=" + this.getUnitPrice() + "]";
	return result;
};

module.exports = InvoiceItem;
