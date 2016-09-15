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
describe("Pruebas Eduardo encrypt",function(){
    it("Espero que no funcione con arreglos",function(){
        var res=encrypt([1,2,3,4],2)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos aunque tengan strings",function(){
        var res=encrypt(["hola"],2)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con cadenas vacias",function(){
        var res=encrypt("",2)
        expect(res).toBe("")
    });
    it("Espero que no funcione con numeros negativos",function(){
        var res=encrypt("rocio",-2)
        expect(res).toBe(false)
    });
    it("Espero que funciones con un numero 0",function(){
        var res=encrypt("eduardo",0)
        expect(res).toBe("eduardo")
    });
    it("Espero que no funcione con null",function(){
        var res=encrypt(null,2)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con undefined",function(){
        var res=encrypt(undefined,2)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con NaN",function(){
        var res=encrypt(NaN,2)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con NaN",function(){
        var res=encrypt("This is a rest!",Infinity)
        expect(res).toBe(false)
    });

});

describe("Pruebas Eduardo every",function(){
    it("Espero que funcione",function(){
        var res=every([1,2,3],menorEvery)
        expect(res).toBe(true)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every("eduardo",menorEvery)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every(NaN,menorEvery)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every(undefined,menorEvery)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every(true,menorEvery)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every(false,menorEvery)
        expect(res).toBe(false)
    });
    it("Espero que no funcione con arreglos",function(){
        var res=every([1,2,3,4,5],menorEvery)
        expect(res).toBe(true)
    });
});

describe("Pruebas Eduardo some",function(){
  it("Espero que no funcione con arreglos",function(){
    var res=some([1,1,10],menorSome)
      expect(res).toBe(true)
  });
});
