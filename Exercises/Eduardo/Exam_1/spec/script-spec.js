"use strict";

function subtract(date,quantity,key) {
    if(!date instanceof Date||typeof quantity!=="number"||typeof key!=="string"){
        return false
    }else{
        if(key==="years"||key==="quarters"||key==="months"||key==="days"||key==="hours"||key==="minutes"||key==="seconds"||key==="milliseconds"){
        if(quantity<0){return false}
        if(!Number.isInteger(quantity)){return false}
        //let fechaderetorno=Date()

        var año=date.getFullYear()
        var mes=date.getMonth()
        var dia=date.getDate()
        var hora=date.getHours()
        var minuto=date.getMinutes()
        var segundo=date.getSeconds()
        var mili=date.getMilliseconds()
        //console.log(quarter);

        switch (key) {
            case "years":
            date=new Date(año-quantity,mes,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "quarters":
            date=new Date(año,mes-quantity-quantity-quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "months":
            date=new Date(año,mes-quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "days":
            date=new Date(año,mes,dia-quantity,hora,minuto,segundo,mili)
            return date
            break;
            case "hours":
            date=new Date(año,mes,dia,hora-quantity,minuto,segundo,mili)
            return date
            break;
            case "minutes":
            date=new Date(año,mes,dia,hora,minuto-quantity,segundo,mili)
            console.log(typeof fechaderetorno);
            return date
            break;
            case "seconds":
            date=new Date(año,mes,dia,hora,minuto,segundo-quantity,mili)
            return date
            break;
            case "milliseconds":
            date=new Date(año,mes,dia,hora,minuto,segundo,mili-quantity)
            return date
            break;
            default:

        }
    }else{return false}

    }
}

function add(date,quantity,key) {
    if(!date instanceof Date||typeof quantity!=="number"||typeof key!=="string"){
        return false
    }else{
        if(key==="years"||key==="quarters"||key==="months"||key==="days"||key==="hours"||key==="minutes"||key==="seconds"||key==="milliseconds"){
        if(quantity<0){return false}
        if(!Number.isInteger(quantity)){return false}
        let fechaderetorno=Date()

        var año=date.getFullYear()
        var mes=date.getMonth()
        var dia=date.getDate()
        var hora=date.getHours()
        var minuto=date.getMinutes()
        var segundo=date.getSeconds()
        var mili=date.getMilliseconds()
        //console.log(quarter);

        switch (key) {
            case "years":
            date=new Date(año+quantity,mes,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "quarters":
            date=new Date(año,mes+quantity+quantity+quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "months":
            date=new Date(año,mes+quantity,dia,hora,minuto,segundo,mili)
            return date
            break;
            case "days":
            date=new Date(año,mes,dia+quantity,hora,minuto,segundo,mili)
            return date
            break;
            case "hours":
            date=new Date(año,mes,dia,hora+quantity,minuto,segundo,mili)
            return date
            break;
            case "minutes":
            date=new Date(año,mes,dia,hora,minuto+quantity,segundo,mili)
            return date
            break;
            case "seconds":
            date=new Date(año,mes,dia,hora,minuto,segundo+quantity,mili)
            return date
            break;
            case "milliseconds":
            date=new Date(año,mes,dia,hora,minuto,segundo,mili+quantity)
            return date
            break;
            default:

        }
    }else{return false}

    }
}



function deepReverse(ary) {
    let aryr=[]
    if(typeof ary ==="object"&&ary instanceof Array){
            for (let i = 0; i < ary.length; i++) {
                //console.log(ary[i]);
                for (let j = ary[i].length; j < 0; j--) {
                    ary[i][j]=ary[j][i]
                }
                //console.log("que pedirri");
            }
            return ary;
    }else{
        return false
    }
}



function encrypt(str,times) {
    var ary2=[]
    if(typeof str!=="string"||typeof times!=="number"){return false}
    if(times<0){return false}
    if(times===0){return str}
    if(times===Infinity){return false}
    if(times===1){
        var cadenota=str+str
        for(var i=1;i<cadenota.length;i=i+2){
            ary2[i]=cadenota[i];
        }
        return ary2.join("")
    }
    if(times==2){
        cadenota=encrypt(str,1)+encrypt(str,1)
        for(var i=1;i<cadenota.length;i=i+2){
            ary2[i]=cadenota[i];
        }
        return ary2.join("")

    }
    if(times>2){
        cadenota=encrypt(str,times-1)+encrypt(str,times-1)
        for(var i=1;i<cadenota.length;i=i+2){
            ary2[i]=cadenota[i];
        }
        return ary2.join("")

    }
}

function every(ary,fun) {
    //var bandera=true
    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            //console.log(fun(ary[i],i,ary))
            if(fun(ary[i],i,ary)===true){}
            if(fun(ary[i],i,ary)===false){cont=cont+1}

        }
        console.log(ary);
    }else{return false}
    if(cont>=1){return false}else{return true}
}

function menorEvery(currentValue,index,array) {
    if(typeof currentValue!=="number"){return false}
    if(currentValue<10){
        return true
    }
    if(currentValue>10){
        return false
    }
}

function some(ary,fun) {
    //var bandera=true

    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            //console.log(fun(ary[i],i,ary))
            if(fun(ary[i],i,ary)===true)
            {cont=cont+1}
            if(fun(ary[i],i,ary)===false)
            {            }

        }
    }else{
        return false
    }
    if(cont>=1){
        return true
    }else
    {
        return false
    }
}

function menorSome(currentValue,index,array) {
    if(typeof currentValue!=="number"){
        return false
    }
    if(currentValue<5){
        return true
    }if(currentValue>5){
        return false
    }
}

function find(ary,fun) {
    //var bandera=true

    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            //console.log(fun(ary[i],i,ary))
            if(fun(ary[i],i,ary)===true){
                return ary[i]
            }
            if(fun(ary[i],i,ary)===false){
                return false
            }

        }
    }else{
        return false
    }
}

function menorFind(currentValue,index,array) {
    if(typeof currentValue!=="number"){
        return false
    }
    if(currentValue===2){
        return true
    }else{
        return undefined
    }
}

function map(ary,fun) {
    //var bandera=true
    var aryR=[]
    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            //console.log(fun(ary[i],i,ary))
            aryR.push(fun(ary[i],i,ary))

        }return aryR
    }else{
        return false
    }
}


function menorMap(currentValue,index,array) {
    if(typeof currentValue!=="number"){
        return false
    }
    return currentValue +3
}


function foreach(ary,fun) {
    //var bandera=true
    var res=0
    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            //console.log(fun(ary[i],i,ary))
            //aryR.push(fun(ary[i],i,ary))
            res=res+fun(ary[i],i,ary)

        }//console.log(res);
        return undefined
    }else{
        return false
    }
}

function menorForEach(currentValue,index,array) {
    var res2=0
    if(typeof currentValue!=="number"){return false}
    return res2=res2+currentValue
}

function filter(ary,fun) {
    //var bandera=true
    var aryR=[]
    var res=0
    if(ary instanceof Array&&typeof fun==="function"){
        var cont=0
        for(var i=0;i<ary.length;i++){
            if(fun(ary[i],i,ary)===true){
                res=ary[i]
                aryR.push(res)
            }
            if(fun(ary[i],i,ary)===false){
                cont=cont+1
            }

        }if(cont>=1){
            return false
        }else{
            return aryR
        }

    }else{
        return false
    }
}


function menorFilter(currentValue,index,array) {
    if(typeof currentValue!=="number"){return false}
    if(currentValue>=9){
        return true
    }

}

function concat(ary1,ary2) {

    if(!ary1 instanceof Array){return false}
    var aryR=[]
    aryR=Array.from(ary1)
    aryR1=flatten(ary2)
    console.log(aryR1);
    aryR.push(aryR1)
    return aryR
}
function flatten(ary) {
    var res = [];
    if (ary.length < 1) {
        return res;
    }
    for(var i = 0; i < ary.length; i++) {
        if (Array.isArray(ary[i])) {
            res = res.concat(flatten(ary[i]));
        } else {
            res = res.concat(ary[i]);
        }
    }
    return res;
}
// describe("Pruebas Eduardo encrypt",function(){
//     it("Espero que no funcione con arreglos",function(){
//         var res=encrypt([1,2,3,4],2)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos aunque tengan strings",function(){
//         var res=encrypt(["hola"],2)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con cadenas vacias",function(){
//         var res=encrypt("",2)
//         expect(res).toBe("")
//     });
//     it("Espero que no funcione con numeros negativos",function(){
//         var res=encrypt("rocio",-2)
//         expect(res).toBe(false)
//     });
//     it("Espero que funciones con un numero 0",function(){
//         var res=encrypt("eduardo",0)
//         expect(res).toBe("eduardo")
//     });
//     it("Espero que no funcione con null",function(){
//         var res=encrypt(null,2)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con undefined",function(){
//         var res=encrypt(undefined,2)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con NaN",function(){
//         var res=encrypt(NaN,2)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con NaN",function(){
//         var res=encrypt("This is a rest!",Infinity)
//         expect(res).toBe(false)
//     });

// });

// describe("Pruebas Eduardo every",function(){
//     it("Espero que funcione",function(){
//         var res=every([1,2,3],menorEvery)
//         expect(res).toBe(true)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every("eduardo",menorEvery)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every(NaN,menorEvery)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every(undefined,menorEvery)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every(true,menorEvery)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every(false,menorEvery)
//         expect(res).toBe(false)
//     });
//     it("Espero que no funcione con arreglos",function(){
//         var res=every([1,2,3,4,5],menorEvery)
//         expect(res).toBe(true)
//     });
// });

// describe("Pruebas Eduardo some",function(){
//   it("Espero que no funcione con arreglos",function(){
//     var res=some([1,1,10],menorSome)
//       expect(res).toBe(true)
//   });
// });

describe("Testing Examen", function () {

    describe("Array's functions", function () {

        describe("every function", function () {
            it("should be defined", function () {
                expect(every).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(every(5, 6)).toBe(false);
                expect(every(5.0, 6.0)).toBe(false);
                expect(every(new Number(3), new Number(5))).toBe(false);
                expect(every(NaN, NaN)).toBe(false);
                expect(every(-5, -6)).toBe(false);
                expect(every(0, 0)).toBe(false);
                expect(every(Infinity, 6)).toBe(false);
                expect(every(6, Infinity)).toBe(false);
                expect(every([1,2,3], 5)).toBe(false);
                expect(every(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(every("", "")).toBe(false);
                expect(every(new String(""), new String(""))).toBe(false);
                expect(every("hola", "mundo")).toBe(false);
                expect(every([1, 2, 3], "hola")).toBe(false);
                expect(every("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(every({}, {})).toBe(false);
                expect(every(new Object(), new Object())).toBe(false);
                expect(every([1, 2, 3], {})).toBe(false);
                expect(every({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(every(true, true)).toBe(false);
                expect(every([1, 2, 3], true)).toBe(false);
                expect(every(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(every(null, null)).toBe(false);
                expect(every([1, 2, 3], null)).toBe(false);
                expect(every(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(every(undefined, undefined)).toBe(false);
                expect(every([1, 2, 3], undefined)).toBe(false);
                expect(every(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(every(function() {}, function() {})).toBe(false);
                expect(every(function() {}, undefined)).toBe(false);
                expect(every({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(every([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(every(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(every([1, 2, 3], function (element) {
                    return element < 5;
                })).toBe(true);
                expect(every([false, false, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(every([true, true, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(every([true, true, true], function(element) {
                    return element === true;
                })).toBe(true);
            });
        });

        describe("some function", function () {
            it("should be defined", function () {
                expect(some).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(some(5, 6)).toBe(false);
                expect(some(5.0, 6.0)).toBe(false);
                expect(some(new Number(3), new Number(5))).toBe(false);
                expect(some(NaN, NaN)).toBe(false);
                expect(some(-5, -6)).toBe(false);
                expect(some(0, 0)).toBe(false);
                expect(some(Infinity, 6)).toBe(false);
                expect(some(6, Infinity)).toBe(false);
                expect(some([1,2,3], 5)).toBe(false);
                expect(some(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(some("", "")).toBe(false);
                expect(some(new String(""), new String(""))).toBe(false);
                expect(some("hola", "mundo")).toBe(false);
                expect(some([1, 2, 3], "hola")).toBe(false);
                expect(some("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(some({}, {})).toBe(false);
                expect(some(new Object(), new Object())).toBe(false);
                expect(some([1, 2, 3], {})).toBe(false);
                expect(some({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(some(true, true)).toBe(false);
                expect(some([1, 2, 3], true)).toBe(false);
                expect(some(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(some(null, null)).toBe(false);
                expect(some([1, 2, 3], null)).toBe(false);
                expect(some(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(some(undefined, undefined)).toBe(false);
                expect(some([1, 2, 3], undefined)).toBe(false);
                expect(some(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(some(function() {}, function() {})).toBe(false);
                expect(some(function() {}, undefined)).toBe(false);
                expect(some({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(some([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(some(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(some([1, 2, 3], function (element) {
                    return element < 5;
                })).toBe(true);
                expect(some([false, false, false], function(element) {
                    return element === true;
                })).toBe(false);
                expect(some([true, true, false], function(element) {
                    return element === true;
                })).toBe(true);
                expect(some([true, true, true], function(element) {
                    return element === true;
                })).toBe(true);
                expect(some([false, false, true], function(element) {
                    return element === true;
                })).toBe(true);
            });
        });

        describe("find function", function () {
            it("should be defined", function () {
                expect(find).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(find(5, 6)).toBe(false);
                expect(find(5.0, 6.0)).toBe(false);
                expect(find(new Number(3), new Number(5))).toBe(false);
                expect(find(NaN, NaN)).toBe(false);
                expect(find(-5, -6)).toBe(false);
                expect(find(0, 0)).toBe(false);
                expect(find(Infinity, 6)).toBe(false);
                expect(find(6, Infinity)).toBe(false);
                expect(find([1,2,3], 5)).toBe(false);
                expect(find(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(find("", "")).toBe(false);
                expect(find(new String(""), new String(""))).toBe(false);
                expect(find("hola", "mundo")).toBe(false);
                expect(find([1, 2, 3], "hola")).toBe(false);
                expect(find("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(find({}, {})).toBe(false);
                expect(find(new Object(), new Object())).toBe(false);
                expect(find([1, 2, 3], {})).toBe(false);
                expect(find({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(find(true, true)).toBe(false);
                expect(find([1, 2, 3], true)).toBe(false);
                expect(find(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(find(null, null)).toBe(false);
                expect(find([1, 2, 3], null)).toBe(false);
                expect(find(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(find(undefined, undefined)).toBe(false);
                expect(find([1, 2, 3], undefined)).toBe(false);
                expect(find(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(find(function() {}, function() {})).toBe(false);
                expect(find(function() {}, undefined)).toBe(false);
                expect(find({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(find([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(find(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                expect(find([1, 2, 3], function (element) {
                    return element === 5;
                })).toBe(undefined);
                expect(find([1, 2, 3], function (element) {
                    return element === 3;
                })).toBe(3);
                expect(find([{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}], function (element) {
                    return element.name === "cherries";
                })).toEqual({name: "cherries", quantity: 5});
            });
        });

        describe("map function", function () {
            it("should be defined", function () {
                expect(map).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(map(5, 6)).toBe(false);
                expect(map(5.0, 6.0)).toBe(false);
                expect(map(new Number(3), new Number(5))).toBe(false);
                expect(map(NaN, NaN)).toBe(false);
                expect(map(-5, -6)).toBe(false);
                expect(map(0, 0)).toBe(false);
                expect(map(Infinity, 6)).toBe(false);
                expect(map(6, Infinity)).toBe(false);
                expect(map([1,2,3], 5)).toBe(false);
                expect(map(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(map("", "")).toBe(false);
                expect(map(new String(""), new String(""))).toBe(false);
                expect(map("hola", "mundo")).toBe(false);
                expect(map([1, 2, 3], "hola")).toBe(false);
                expect(map("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(map({}, {})).toBe(false);
                expect(map(new Object(), new Object())).toBe(false);
                expect(map([1, 2, 3], {})).toBe(false);
                expect(map({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(map(true, true)).toBe(false);
                expect(map([1, 2, 3], true)).toBe(false);
                expect(map(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(map(null, null)).toBe(false);
                expect(map([1, 2, 3], null)).toBe(false);
                expect(map(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(map(undefined, undefined)).toBe(false);
                expect(map([1, 2, 3], undefined)).toBe(false);
                expect(map(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(map(function() {}, function() {})).toBe(false);
                expect(map(function() {}, undefined)).toBe(false);
                expect(map({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(map([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(map(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                var ary = [1, 2, 3];
                expect(map(ary, function (element) {
                    return element * 5;
                })).toEqual([5, 10, 15]);
                expect(ary).toEqual([1, 2, 3]);

                expect(map(ary, function (element) {
                    return element + 3;
                })).toEqual([4, 5, 6]);
                expect(ary).toEqual([1, 2, 3]);

                var inventory = [{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}];
                expect(map(inventory, function (element) {
                    element.quantity = 0;
                    return element;
                })).toEqual([{name: "apples", quantity: 0}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 0}]);

                expect(inventory).toEqual([{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}]);
            });
        });

        describe("foreach function", function () {
            it("should be defined", function () {
                expect(foreach).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(foreach(5, 6)).toBe(false);
                expect(foreach(5.0, 6.0)).toBe(false);
                expect(foreach(new Number(3), new Number(5))).toBe(false);
                expect(foreach(NaN, NaN)).toBe(false);
                expect(foreach(-5, -6)).toBe(false);
                expect(foreach(0, 0)).toBe(false);
                expect(foreach(Infinity, 6)).toBe(false);
                expect(foreach(6, Infinity)).toBe(false);
                expect(foreach([1,2,3], 5)).toBe(false);
                expect(foreach(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(foreach("", "")).toBe(false);
                expect(foreach(new String(""), new String(""))).toBe(false);
                expect(foreach("hola", "mundo")).toBe(false);
                expect(foreach([1, 2, 3], "hola")).toBe(false);
                expect(foreach("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(foreach({}, {})).toBe(false);
                expect(foreach(new Object(), new Object())).toBe(false);
                expect(foreach([1, 2, 3], {})).toBe(false);
                expect(foreach({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(foreach(true, true)).toBe(false);
                expect(foreach([1, 2, 3], true)).toBe(false);
                expect(foreach(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(foreach(null, null)).toBe(false);
                expect(foreach([1, 2, 3], null)).toBe(false);
                expect(foreach(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(foreach(undefined, undefined)).toBe(false);
                expect(foreach([1, 2, 3], undefined)).toBe(false);
                expect(foreach(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(foreach(function() {}, function() {})).toBe(false);
                expect(foreach(function() {}, undefined)).toBe(false);
                expect(foreach({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(foreach([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(foreach(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                let ary = [1, 2, 3];
                let result = 0;
                expect(foreach(ary, function (element, index, ary) {
                    result += ary[index];
                })).toBe(undefined);
                expect(result).toBe(6);
                expect(ary).toEqual([1, 2, 3]);

                expect(foreach(ary, function (element, index, ary) {
                    ary[index]++;
                })).toBe(undefined);
                expect(ary).toEqual([2, 3, 4]);

                let inventory = [{name: "apples", quantity: 2}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 5}];
                expect(foreach(inventory, function (element) {
                    element.quantity = 0;
                })).toEqual(undefined);
                expect(inventory).toEqual([{name: "apples", quantity: 0}, {name: "bananas", quantity: 0}, {name: "cherries", quantity: 0}]);
            });
        });

        describe("filter function", function () {
            it("should be defined", function () {
                expect(filter).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(filter(5, 6)).toBe(false);
                expect(filter(5.0, 6.0)).toBe(false);
                expect(filter(new Number(3), new Number(5))).toBe(false);
                expect(filter(NaN, NaN)).toBe(false);
                expect(filter(-5, -6)).toBe(false);
                expect(filter(0, 0)).toBe(false);
                expect(filter(Infinity, 6)).toBe(false);
                expect(filter(6, Infinity)).toBe(false);
                expect(filter([1,2,3], 5)).toBe(false);
                expect(filter(3, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(filter("", "")).toBe(false);
                expect(filter(new String(""), new String(""))).toBe(false);
                expect(filter("hola", "mundo")).toBe(false);
                expect(filter([1, 2, 3], "hola")).toBe(false);
                expect(filter("hola", function() {})).toBe(false);
            });
            it("should not work against object", function () {
                expect(filter({}, {})).toBe(false);
                expect(filter(new Object(), new Object())).toBe(false);
                expect(filter([1, 2, 3], {})).toBe(false);
                expect(filter({}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(filter(true, true)).toBe(false);
                expect(filter([1, 2, 3], true)).toBe(false);
                expect(filter(true, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(filter(null, null)).toBe(false);
                expect(filter([1, 2, 3], null)).toBe(false);
                expect(filter(null, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(filter(undefined, undefined)).toBe(false);
                expect(filter([1, 2, 3], undefined)).toBe(false);
                expect(filter(undefined, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(filter(function() {}, function() {})).toBe(false);
                expect(filter(function() {}, undefined)).toBe(false);
                expect(filter({}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(filter([1, 2, 3], [1, 2, 3])).toBe(false);
                expect(filter(undefined, [1, 2, 3])).toBe(false);
            });
            it("should work against an array 1st parameter and a function as 2nd parameter", function () {
                let ary = [1, 2, 3];
                expect(filter(ary, function (element) {
                    return element < 5;
                })).toEqual([1, 2, 3]);
                expect(ary).toEqual([1, 2, 3]);

                expect(filter(ary, function(element, index, ary) {
                    ary[index]++;
                })).toEqual([]);
                expect(ary).toEqual([1, 2, 3]);

                expect(filter([false, false, false], function(element) {
                    return element === true;
                })).toEqual([]);

                expect(filter([true, true, false], function(element) {
                    return element === true;
                })).toEqual([true, true]);
                expect(filter([true, true, true], function(element) {
                    return element === true;
                })).toEqual([true, true, true]);
            });
        });

        describe("concat function", function () {
            it("should be defined", function () {
                expect(concat).toBeDefined();
            });
            it("it should not work if 1st parameter isn't an Array", function () {
                expect(concat()).toBe(false);
                expect(concat("")).toBe(false);
                expect(concat(function(){})).toBe(false);
                expect(concat(true)).toBe(false);
                expect(concat(1)).toBe(false);
                expect(concat({})).toBe(false);
                expect(concat(null)).toBe(false);
                expect(concat(/abcd/)).toBe(false);
            });
            it("should work with 1st argument as array, and any other whatever typ they are", function () {
                let ary = [1, 2, 3];
                expect(concat([], 1, 2, 3)).toEqual([1, 2, 3]);
                expect(concat([])).toEqual([]);
                expect(concat([], [1, 2, 3])).toEqual([1, 2, 3]);
                expect(concat(ary, [4, 5, 6, [7]])).toEqual([1, 2, 3, 4, 5, 6, [7]]);
                expect(ary).toEqual([1, 2, 3]);
                expect(concat([], "", 0, false, undefined, null)).toEqual(["", 0, false, undefined, null]);
            });
        });
    });

    describe("Dates functions", function () {

        describe("Add function", function () {
            it("should be defined", function () {
                expect(add).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(add(5, 6, 6)).toBe(false);
                expect(add(5.0, 6.0, 6.0)).toBe(false);
                expect(add(new Number(3), new Number(5), new Number(5))).toBe(false);
                expect(add(NaN, NaN, NaN)).toBe(false);
                expect(add(-5, -6, -6)).toBe(false);
                expect(add(0, 0, 0)).toBe(false);
                expect(add(Infinity, 6, 6)).toBe(false);
                expect(add(6, Infinity, Infinity)).toBe(false);
                expect(add([1,2,3], 5, 5)).toBe(false);
                expect(add(3, function() {}, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(add("", "", "")).toBe(false);
                expect(add(new String(""), new String(""), new String(""))).toBe(false);
                expect(add("hola", "mundo", "mundo")).toBe(false);
                expect(add([1, 2, 3], "hola", "amigo")).toBe(false);
                expect(add("hola", function() {}, "amigo")).toBe(false);
            });
            it("should not work against object", function () {
                expect(add({}, {}, {})).toBe(false);
                expect(add(new Object(), new Object(), new Object())).toBe(false);
                expect(add([1, 2, 3], {}, {})).toBe(false);
                expect(add({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(add(true, true, true)).toBe(false);
                expect(add([1, 2, 3], true, true)).toBe(false);
                expect(add(true, function() {}, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(add(null, null, null)).toBe(false);
                expect(add([1, 2, 3], null, null)).toBe(false);
                expect(add(null, function() {}, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(add(undefined, undefined, undefined)).toBe(false);
                expect(add([1, 2, 3], undefined, undefined)).toBe(false);
                expect(add(undefined, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(add(function() {}, function() {}, function() {})).toBe(false);
                expect(add(function() {}, undefined, undefined)).toBe(false);
                expect(add({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(add([1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(false);
                expect(add(undefined, [1, 2, 3], [1, 2, 3])).toBe(false);
            });
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(add(new Date, 3.15, "days")).toBe(false);
                expect(add(new Date, NaN, "days")).toBe(false);
                expect(add({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(add(date, 1, "days2")).toEqual(false);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                expect(add(date1, 1, "years").getFullYear()).toBe(year1 + 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(add(date1, 1, "quarters").getMonth()).toBe(month1 + 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(add(date1, 1, "months").getMonth()).toBe(month1 + 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                expect(add(date1, 1, "days").getDate()).toBe(days1 + 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                expect(add(date1, 1, "hours").getHours()).toBe(hours1 + 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                expect(add(date1, 1, "minutes").getMinutes()).toBe(minutes1 + 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                expect(add(date1, 1, "seconds").getSeconds()).toBe(seconds1 + 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                expect(add(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 + 10);
            });
        });

        describe("Subtract function", function () {
            it("should be defined", function () {
                expect(subtract).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(subtract(5, 6, 6)).toBe(false);
                expect(subtract(5.0, 6.0, 6.0)).toBe(false);
                expect(subtract(new Number(3), new Number(5), new Number(5))).toBe(false);
                expect(subtract(NaN, NaN, NaN)).toBe(false);
                expect(subtract(-5, -6, -6)).toBe(false);
                expect(subtract(0, 0, 0)).toBe(false);
                expect(subtract(Infinity, 6, 6)).toBe(false);
                expect(subtract(6, Infinity, Infinity)).toBe(false);
                expect(subtract([1,2,3], 5, 5)).toBe(false);
                expect(subtract(3, function() {}, function() {})).toBe(false);
            });
            it("should not work against string", function () {
                expect(subtract("", "", "")).toBe(false);
                expect(subtract(new String(""), new String(""), new String(""))).toBe(false);
                expect(subtract("hola", "mundo", "mundo")).toBe(false);
                expect(subtract([1, 2, 3], "hola", "amigo")).toBe(false);
                expect(subtract("hola", function() {}, "amigo")).toBe(false);
            });
            it("should not work against object", function () {
                expect(subtract({}, {}, {})).toBe(false);
                expect(subtract(new Object(), new Object(), new Object())).toBe(false);
                expect(subtract([1, 2, 3], {}, {})).toBe(false);
                expect(subtract({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(subtract(true, true, true)).toBe(false);
                expect(subtract([1, 2, 3], true, true)).toBe(false);
                expect(subtract(true, function() {}, function() {})).toBe(false);
            });
            it("should not work against null", function () {
                expect(subtract(null, null, null)).toBe(false);
                expect(subtract([1, 2, 3], null, null)).toBe(false);
                expect(subtract(null, function() {}, function() {})).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(subtract(undefined, undefined, undefined)).toBe(false);
                expect(subtract([1, 2, 3], undefined, undefined)).toBe(false);
                expect(subtract(undefined, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 functions as parameters", function () {
                expect(subtract(function() {}, function() {}, function() {})).toBe(false);
                expect(subtract(function() {}, undefined, undefined)).toBe(false);
                expect(subtract({}, function() {}, function() {})).toBe(false);
            });
            it("should not work against 2 arrays as parameters", function () {
                expect(subtract([1, 2, 3], [1, 2, 3], [1, 2, 3])).toBe(false);
                expect(subtract(undefined, [1, 2, 3], [1, 2, 3])).toBe(false);
            });
            it("should only work with a Date object as 1 parameter, a number positive an integer as 2nd parameter and a string as third parameter", function () {
                expect(subtract(new Date, 3.15, "days")).toBe(false);
                expect(subtract(new Date, NaN, "days")).toBe(false);
                expect(subtract({}, 3, "days")).toBe(false);
            });
            it("should return same date if the 3rd parameter string is not one of the valid options", function () {
                let date = new Date;
                expect(subtract(date, 1, "days2")).toEqual(false);
            });
            it("should work with 'years' as 3rd parameter", function () {
                let date1 = new Date;
                let year1 = date1.getFullYear();
                expect(subtract(date1, 1, "years").getFullYear()).toBe(year1 - 1);
            });
            it("should work with 'quarters' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(subtract(date1, 1, "quarters").getMonth()).toBe(month1 - 3);
            });
            it("should work with 'months' as 3rd parameter", function () {
                let date1 = new Date;
                let month1 = date1.getMonth();
                expect(subtract(date1, 1, "months").getMonth()).toBe(month1 - 1);
            });
            it("should work with 'days' as 3rd parameter", function () {
                let date1 = new Date;
                let days1 = date1.getDate();
                expect(subtract(date1, 1, "days").getDate()).toBe(days1 - 1);
            });
            it("should work with 'hours' as 3rd parameter", function () {
                let date1 = new Date;
                let hours1 = date1.getHours();
                expect(subtract(date1, 1, "hours").getHours()).toBe(hours1 - 1);
            });
            it("should work with 'minutes' as 3rd parameter", function () {
                let date1 = new Date;
                let minutes1 = date1.getMinutes();
                expect(subtract(date1, 1, "minutes").getMinutes()).toBe(minutes1 - 1);
            });
            it("should work with 'seconds' as 3rd parameter", function () {
                let date1 = new Date;
                let seconds1 = date1.getSeconds();
                expect(subtract(date1, 1, "seconds").getSeconds()).toBe(seconds1 - 1);
            });
            it("should work with 'milliseconds' as 3rd parameter", function () {
                let date1 = new Date;
                let milliseconds1 = date1.getMilliseconds();
                expect(subtract(date1, 10, "milliseconds").getMilliseconds()).toBe(milliseconds1 - 10);
            });
        });
    });

    describe("Katas functions", function () {

        describe("encrypt function", function () {
            it("should be defined", function () {
                expect(encrypt).toBeDefined();
            });
            it("should not work against functions", function () {
                expect(encrypt(function() {}, function() {})).toBe(false);
                expect(encrypt(function() {}, 3)).toBe(false);
                expect(encrypt("hola", function() {})).toBe(false);
            });
            it("should not work against objects", function () {
                expect(encrypt({}, {})).toBe(false);
                expect(encrypt({}, 5)).toBe(false);
                expect(encrypt("hola", {})).toBe(false);
            });
            it("should not work against numbers", function () {
                expect(encrypt(5, 5)).toBe(false);
                expect(encrypt(5.0, 5.0)).toBe(false);
                expect(encrypt(Infinity, Infinity)).toBe(false);
                expect(encrypt(-5, -5)).toBe(false);
                expect(encrypt(NaN, NaN)).toBe(false);
                expect(encrypt("hola", NaN)).toBe(false);
                expect(encrypt("hola", -5)).toBe(false);
                expect(encrypt(5, -5)).toBe(false);
                expect(encrypt("hola", Infinity)).toBe(false);
            });
            it("should not work against strings", function () {
                expect(encrypt("hola", "mundo")).toBe(false);
                expect(encrypt(5, "hola")).toBe(false);
            });
            it("shuould not work against booleans", function () {
                expect(encrypt(true, true)).toBe(false);
                expect(encrypt("hola", true)).toBe(false);
                expect(encrypt(true, 5)).toBe(false);
            });
            it("should not work against null", function () {
                expect(encrypt(null, null)).toBe(false);
                expect(encrypt("hola", null)).toBe(false);
                expect(encrypt(null, 5)).toBe(false);
                expect(encrypt(null, "hola")).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(encrypt(undefined, undefined)).toBe(false);
                expect(encrypt("hola", undefined)).toBe(false);
                expect(encrypt(undefined, 5)).toBe(false);
                expect(encrypt(undefined, "hola")).toBe(false);
            });
            it("should work against a string as 1st parameter and a number positive integer as second parameter", function () {
                expect(encrypt("hola", 3.15)).toBe(false);
                expect(encrypt("This is a test!", 0)).toBe("This is a test!");
                expect(encrypt("This is a test!", 1)).toBe("hsi  etTi sats!");
                expect(encrypt("This is a test!", 1.00)).toBe("hsi  etTi sats!");
                expect(encrypt("This is a test!", 2)).toBe("s eT ashi tist!");
                expect(encrypt("This is a test!", 3)).toBe(" Tah itse sits!");
            });
        });

        describe("deepReverse function", function () {
            it("should be defined", function () {
                expect(deepReverse).toBeDefined();
            });
            it("should not work against numbers", function () {
                expect(deepReverse(5)).toBe(false);
                expect(deepReverse(5.0)).toBe(false);
                expect(deepReverse(new Number(3))).toBe(false);
                expect(deepReverse(NaN)).toBe(false);
                expect(deepReverse(-5)).toBe(false);
                expect(deepReverse(0)).toBe(false);
                expect(deepReverse(Infinity)).toBe(false);
                expect(deepReverse(-Infinity)).toBe(false);
            });
            it("shold not work against strings", function () {
                expect(deepReverse("")).toBe(false);
                expect(deepReverse(new String(""))).toBe(false);
                expect(deepReverse("hola")).toBe(false);
            });
            it("should not work against object", function () {
                expect(deepReverse({})).toBe(false);
                expect(deepReverse(new Object())).toBe(false);
            });
            it("should not work against functions", function () {
                expect(deepReverse(function() {})).toBe(false);
            });
            it("should not work against booleans", function () {
                expect(deepReverse(true)).toBe(false);
                expect(deepReverse(false)).toBe(false);
            });
            it("should not work against null", function () {
                expect(deepReverse(null)).toBe(false);
            });
            it("should not work against undefined", function () {
                expect(deepReverse(undefined)).toBe(false);
            });
            it("should not work against regex", function () {
                expect(deepReverse(/abcd/)).toBe(false);
            });
            it("should only work against arrays", function () {
                expect(deepReverse([])).toEqual([]);
                expect(deepReverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
                expect(deepReverse([[1,2],[3,4]])).toEqual([[4,3],[2,1]]);
                expect(deepReverse([[9,8,7],[6,5,4],[3,2,1]])).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
                expect(deepReverse([ [1, 2], [3, 4], 5, 6])).toEqual([6, 5, [4, 3], [2, 1]]);
            });
        });
    });
});
