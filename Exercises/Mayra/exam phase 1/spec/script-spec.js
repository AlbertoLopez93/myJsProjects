"use strict"
function add(date,quantity,key) {
    let aux=0;

    if (date instanceof Date===false) {
        return false;
    }
    if (typeof(quantity)!=="number"||quantity===Infinity||quantity<0||Number.isInteger(quantity)===false) {
        return false;
    }
    if (typeof(key)!=="string") {
        return false;
    }
    switch (key) {
        case "years":
        aux=date.getFullYear()+quantity;
        date.setFullYear(aux);
            break;
        case "quarters":
        quantity*=3;
        aux=date.getMonth()+quantity;
        date.setMonth(aux);
            break;
        case "months":
        quantity*=31;
        aux=date.getDate()+quantity;
        date.setDate(aux);
            break;
        case "days":
        aux=date.getDate()+quantity;
        date.setDate(aux);
            break;
        case "hours":
        aux=date.getHours()+quantity;
        date.setHours(aux);
            break;
        case "minutes":
        aux=date.getMinutes()+quantity;
        date.setMinutes(aux);
            break;
        case "seconds":
        aux=date.getSeconds()+quantity;
        date.setSeconds(aux);
            break;
        case "milliseconds":
        aux=date.getMilliseconds()+quantity;
        date.setMilliseconds(aux);
            break;
        default:
        return false;

    }
    return date;
}

describe("testing add",function () {
    it("espero que (new Date(2016,8,14),'y','minutes'), regrese false",function () {
        var res=add(new Date(2016,8,14),'y','minutes');
        expect(res).toBe(false);
    });
    it("espero que ((2016,8,14),2,'minutes'), regrese false",function () {
        var res=add((2016,8,14),2,'minutes');
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14),2,2), regrese false",function () {
        var res=add(new Date(2016,8,14),2,2);
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14),Infinity,2), regrese false",function () {
        var res=add(new Date(2016,8,14),Infinity,2);
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14),-9,2), regrese false",function () {
        var res=add(new Date(2016,8,14),-9,2);
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14),3.2,2), regrese false",function () {
        var res=add(new Date(2016,8,14),3.2,2);
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'years'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"years");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'quarters'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"quarters");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'months'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"months");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'days'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"days");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'hours'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"hours");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'minutes'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"minutes");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'seconds'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"seconds");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'milliseconds'), regrese Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"milliseconds");
        expect(res.toString()).toBe('Wed Sep 14 2016 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'year'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"year");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'quarter'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"quarter");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'month'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"month");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'day'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"day");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'hour'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"hour");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'minute'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"minute");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'second'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"second");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),0,'millisecond'), regrese false)",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),0,"millisecond");
        expect(res).toBe(false);
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),2,'years'), regrese Fri Sep 14 2018 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),2,"years");
        expect(res.toString()).toBe('Fri Sep 14 2018 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),2,'quarters'), regrese Tue Mar 14 2017 01:30:41 GMT-0600 (Hora de verano central (México))",function () {
        var res=add(new Date(2016,8,14,1,30,40,1654),2,"quarters");
        expect(res.toString()).toBe('Tue Mar 14 2017 01:30:41 GMT-0600 (Hora estándar central (México))');
    });


});

"use strict"
function substract(date,quantity,key) {
    let aux=0;

    if (date instanceof Date===false) {
        return false;
    }
    if (typeof(quantity)!=="number"||quantity===Infinity||quantity<0||Number.isInteger(quantity)===false) {
        return false;
    }
    if (typeof(key)!=="string") {
        return false;
    }
    switch (key) {
        case "years":
        aux=date.getFullYear()-quantity;
        date.setFullYear(aux);
            break;
        case "quarters":
        quantity*=3;
        aux=date.getMonth()-quantity;
        date.setMonth(aux);
            break;
        case "months":
        quantity*=31;
        aux=date.getDate()-quantity;
        date.setDate(aux);
            break;
        case "days":
        aux=date.getDate()-quantity;
        date.setDate(aux);
            break;
        case "hours":
        aux=date.getHours()-quantity;
        date.setHours(aux);
            break;
        case "minutes":
        aux=date.getMinutes()-quantity;
        date.setMinutes(aux);
            break;
        case "seconds":
        aux=date.getSeconds()-quantity;
        date.setSeconds(aux);
            break;
        case "milliseconds":
        aux=date.getMilliseconds()-quantity;
        date.setMilliseconds(aux);
            break;
        default:
        return false;

    }
    return date;
}
describe("testing substract",function () {
    it("espero que (new Date(2016,8,14,1,30,40,1654),2,'years'), regrese Sun Sep 14 2014 01:30:41 GMT-0500 (Hora de verano central (México))",function () {
        var res=substract(new Date(2016,8,14,1,30,40,1654),2,"years");
        expect(res.toString()).toBe('Sun Sep 14 2014 01:30:41 GMT-0500 (Hora de verano central (México))');
    });
    it("espero que (new Date(2016,8,14,1,30,40,1654),2,'quarters'), regrese Mon Mar 16 2017 01:30:41 GMT-0600 (Hora de verano central (México))",function () {
        var res=substract(new Date(2016,8,14,1,30,40,1654),2,"quarters");
        expect(res.toString()).toBe('Mon Mar 14 2016 01:30:41 GMT-0600 (Hora estándar central (México))');
    });
});
