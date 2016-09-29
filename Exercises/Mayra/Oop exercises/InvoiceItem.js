function InvoiceItem(obj) {
    var id=obj.id,desc=obj.dec,qty=obj.qty,unitPrice=obj.unitPrice;
    this.setId=function setId(newId) {
        id=newId;
        return this;
    }
    this.getId=function getId() {
        return id;

    }
    this.setDesc=function setDesc(newDesc) {
        desc=newDesc;
        return this;
    }
    this.getDesc=function getDesc() {
        return desc;

    }
    this.setQty=function setQty(newQty) {
        qty=newQty;
        return this;
    }
    this.getQty=function getQty() {
        return qty;

    }
    this.setUnitPrice=function setUnitPrice(newUnitPrice) {
        unitPrice=newUnitPrice;
        return this;
    }
    this.getUnitPrice=function getUnitPrice() {
        return unitPrice;

    }
}
InvoiceItem.prototype={};
InvoiceItem.prototype.getTotal=function getTotal() {
    var this.setSalary(this.getSalary()*this.getUnitPrice())
    return total;
InvoiceItem.prototype.toString=function toString() {
    var pattern="InvoiceItem["+this.getId()+", desc="+this.getDesc()+" ,qty"+this.getQty()+", unitPrice="+this.getUnitPrice()+"]";
    return pattern;
}
