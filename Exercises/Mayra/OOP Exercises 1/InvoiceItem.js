function InvoiceItem(obj) {
    var id=obj.id,desc=obj.dec,qty=obj.qty,unitPrice=obj.unitPrice;
    this.setId=function setId(newId) {
        newId=id;
        return this;
    }
    this.getId=function getId() {
        return id;

    }
    this.setDesc=function setDesc(newDesc) {
        newDesc=desc;
        return this;
    }
    this.getDesc=function getDesc() {
        return desc;

    }
    this.setQty=function setQty(newQty) {
        newQty=qty;
        return this;
    }
    this.getQty=function getQty() {
        return qty;

    }
    this.setUnitPrice=function setUnitPrice(newUnitPrice) {
        newUnitPrice=unitPrice;
        return this;
    }
    this.getUnitPrice=function getUnitPrice() {
        return unitPrice;

    }
}
InvoiceItem.prototype={};
InvoiceItem.prototype.getTotal=function getTotal() {
    var total=this.getSalary()*this.getUnitPrice();
    return total;
InvoiceItem.prototype.toString=function toString() {
    var pattern="InvoiceItem["+this.getId()+", desc="+this.getDesc()+" ,qty"+this.getQty()+", unitPrice="+this.getUnitPrice()+"]";
    return pattern;
}

module.exports = InvoiceItem;
