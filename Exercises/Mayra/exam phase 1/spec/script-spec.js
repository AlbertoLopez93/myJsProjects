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

function every(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===false){
            return false;
        }
    }

    return true;
}
function foo(current,index,array) {
    var result;
    result=current<5;
    return result;
}
describe("testing every",function () {
    it("espero que [],function regresa true",function () {
        expect(every([],function (element) {
            return element<5;
        })).toBe(true);
    });
    it("espero que [1,2,3],function regresa true",function () {
        expect(every([1,2,3],function (element) {
            return element<5;
        })).toBe(true);
    });
    it("espero que [1,2,3],foo regresa true",function () {
        expect(every([1,2,3],foo)).toBe(true);
    });
    it("espero que [1,2,3,[1,2]],function regresa false",function () {
        expect(every([1,2,3,[1,2]],function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que [1,2,3],fun regresa false",function () {
        expect(every([1,2,3],'fun')).toBe(false);
    });
    it("espero que [1,2,3],null regresa false",function () {
        expect(every([1,2,3],null)).toBe(false);
    });
    it("espero que [1,2,3],undefined regresa false",function () {
        expect(every([1,2,3],undefined)).toBe(false);
    });
    it("espero que [1,2,3],true regresa false",function () {
        expect(every([1,2,3],true)).toBe(false);
    });
    it("espero que null,function regresa false",function () {
        expect(every(null,function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que true,function regresa false",function () {
        expect(every(true,function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que false,function regresa false",function () {
        expect(every(false,function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que 5,function regresa false",function () {
        expect(every(5,function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que undefined,function regresa false",function () {
        expect(every(undefined,function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que {},function regresa false",function () {
        expect(every({},function (element) {
            return element<5;
        })).toBe(false);
    });
    it("espero que hola,function regresa false",function () {
        expect(every("hpla",function (element) {
            return element<5;
        })).toBe(false);
    });
});
function some(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===true){
            return true;
        }
    }

    return false;
}
describe("testing some",function () {
    it("espero que [false,false,true],function regresa false",function () {
        expect(some([false,false,true],function (element) {
        return element===true;
        })).toBe(true);
    });
    it("espero que [false,false,false],function regresa false",function () {
        expect(some([false,false,false],function (element) {
        return element===true;
    })).toBe(false);
    });
    it("espero que [1,2,3],function regresa true",function () {
        expect(some([1,2,3],function (element) {
        return element===3;
    })).toBe(true);
    });
});
function find(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i of arg) {
        if(fun(i,i,arg)===true){

            return i;
        }
    }

    return undefined;
}
describe("testing find",function () {
    it("espero que [1,2,3],function regresa undefined",function () {
        expect(find([1,2,3],function (element) {
        return element===5;
    })).toBe(undefined);
    });
    it("espero que [1,2,3,5],function regresa undefined",function () {
        expect(find([1,2,3,5],function (element) {
        return element===5;
    })).toBe(5);
    });
});

function map(arg,fun) {
    let ary=[];
    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let i=0;i < arg.length;i++) {
        ary.push(arg[i]);
    }
    for (let j=0;j < ary.length;j++) {
        ary[j]=fun(ary[j],j,ary);
    }

    return ary;
}
function foo(element) {
    let r=element + 5;
    return r;
}
describe("testing map",function () {
    it("espero q map funcione",function () {
        expect(map([1,2,3],function (element) {
            return element+3;
        })).toEqual([4,5,6]);
    });
    it("espero q map funcione",function () {
        expect(map([1,2,3],foo)).toEqual([6,7,8]);
    });

});
function foreach(arg,fun) {

    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }
    for (let j=0;j < arg.length;j++) {
        fun(arg[j],j,arg);
    }

    return undefined;
}
describe("testing foreach",function () {
    it("espero q regrese undefined y 6",function () {
        var ary=[1,2,3];
        var res=0;
        expect(foreach(ary,function (element,index,ary) {
            res =res+ ary[index];
        })).toBe(undefined);
        expect(res).toBe(6);
    });

});
function filter(arg,fun) {
    let ary=[];
    if (Array.isArray(arg)===false) {
        return false;
    }
    if (fun instanceof Function===false) {
        return false;
    }

    for (let j=0;j < arg.length;j++) {
        if(fun(arg[j],j,arg)===true){
        ary[ary.length]=arg[j];

        }
    }

    return ary;
}
describe("testing filter",function () {
    it("espero q [1,2,3] regrese [1,2,3]",function () {
        expect(filter([1,2,3],function (element) {
            return element<5;
        })).toEqual([1,2,3]);
    });
    it("espero q [1,6,2,6,36,3] regrese [1,2,3]",function () {
        expect(filter([1,6,2,6,36,3],function (element) {
            return element<5;
        })).toEqual([1,2,3]);
    });

});
