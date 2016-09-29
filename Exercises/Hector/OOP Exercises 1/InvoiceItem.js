function InvoiceItem(data){
    var id = data.id;
    this.getID = function(){
        return id;
    }
    var desc = data.desc;
    this.getDesc = function(){
        return desc;
    }
    var qty = data.qty;
    this.getQty = function(){
        return qty;
    }
    var unitPrice = data.unitPrice;
    this.getUnitPrice = function(){
        return unitPrice;
    }
    this.setUnitPrice = function(newUnitPrice){
        return unitPrice = newUnitPrice;
    }
}

InvoiceItem.prototype.getTotal = function(){
    return this.getUnitPrice() * this.getQty();
}//:float calculates the total of the invoiceItem and returns it.
InvoiceItem.prototype.toString = function(){
    return "InvoiceItem[id=" + this.getID() + ", desc=" + this.getDesc() + ", qty=" + this.getQty() + ", unitPrice=" + this.getUnitPrice() + "]";
}//:string returns a string that will follow the pattern: “InvoiceItem[id=?, desc=?, qty=?, unitPrice=?]”

var item = new InvoiceItem({id : "axel0001", desc : "This is the best item", qty : 10, unitPrice : 100 });
console.log(item.toString());
console.log(item.getTotal());
item.setUnitPrice(50);
console.log(item.getUnitPrice());
console.log(item.toString());
console.log(item.getTotal());
