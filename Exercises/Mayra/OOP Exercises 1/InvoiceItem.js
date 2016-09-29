function InvoiceItem(obj) {
    var id=obj.id,desc=obj.desc,qty=obj.qty,unitPrice=obj.unitPrice,salary=obj.salary;
    this.setID=function setID(newId) {
        id=newId;
        return this;
    }
    this.getID=function getID() {
        return id;

    }
    this.setDesc=function setDesc(newDesc) {
        if (typeof newDesc!=='string') {
            return this;
        }
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
    this.setSalary=function setSalary(newSalary) {
        salary=newSalary;
        return this;
    }
    this.getSalary=function getSalary() {
        return salary;

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
    var total=this.getQty()*this.getUnitPrice();
    return total;
    }
InvoiceItem.prototype.toString=function toString() {
    var pattern="InvoiceItem[id="+this.getID()+", desc="+this.getDesc()+", qty="+this.getQty()+", unitPrice="+this.getUnitPrice()+"]";
    return pattern;
}

module.exports = InvoiceItem;
