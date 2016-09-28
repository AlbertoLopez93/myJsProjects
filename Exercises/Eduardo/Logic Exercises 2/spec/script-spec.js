"use strict"
function tribonacci(ary,long) {
    let result= [];
    if(typeof ary ==="object"&&ary instanceof Array&&(typeof long==="number"||long instanceof Number)){
        if(long===Infinity){return false}
        for(var p=0;p<ary.length;p++){
            if(typeof ary[p]!=="number"){return false}
            if(ary[p]===Infinity){return false}
        }
        if(long===0){
            return result;
        }else if(ary.length <2) {
            return ary;
        }else{
            if(long<=ary.length){
                let temp = [];
                temp[0] = ary[0];
                temp[long-1] = ary[long-1];
                long--;
                if(long>0){
                    temp[long-1] = ary[long-1];
                }
                return temp;
            }else{
                for(let i=3;i<long;i++){
                    ary[ary.length] = ary[i-3]+ary[i-2]+ary[i-1];

                }return ary;
            }
        }
    }else{
        return false
    }
}

function isValidIPAdress(ip){
    var ary = [];
    var ary2 = [""];
    var i = 0;
    var j = 0;
    if(typeof ip==="string"||ip instanceof String){
        while(ip[i]){//esto pasa el string a arreglo
            ary[i]=ip[i];
            i++;
        }
        for(let i=0; i<ary.length;i++){
            if(ary[i] === "." && ary[i+1] === "."){
                return false;
            }
            if(ary[i] === "."){
                j++;
                ary2[j] = "";
            }
            else{
                ary2[j] += ary[i];
            }
        }
        if(ary2.length !== 4){
            return false;
        }
        var str = "";
        var x = 0;
        while(ary2[x]){
            str += ary2[x];
            x++
        }
        x = 0;
        while(str[x]){
            if (isNaN(str[x])) {
                return false;
            }
            x++;
        }
        x = 0;
        while(ary2[x]){

            if(ary2[x]>255){
                return false
            }
            x++;
        }
        return true;
    }else{return false}
}

function countTwos(limite) {
    var str="";
    var cont=0;
    if(typeof limite==="number"||limite instanceof Number){
        if(!Number.isInteger(limite)&&limite!==Infinity){return false}
        if(limite===Infinity){return Infinity}
        if(limite<0){return false}
        var lim=String(limite)
        limite=limite.toString()
        for (var i = 0; i <=limite; i++) {
            str = "";
            str += i;
            for(let j=0; j<str.length; j++){
                if(str[j]==='2'){
                    cont=cont+1;
                }


            }
        }console.log("hay "+cont+" numero 2");

        return cont
    }
    else{
        return false
    }
}

function didSomeoneWon(matrix){
    var flag = false;
    var cont1=0
    var cont2
    if(typeof matrix==="object"&&matrix instanceof Array){
        //if((cont1===5&&cont2===4)||(cont1===4&&cont2===5)){}
    if(matrix.length !== 3 || matrix[0].length !== 3 || matrix[1].length !== 3 || matrix[2].length !== 3){
        return flag;
    }
    for(var v=0;v<matrix.length;v++){
        for(var r=0;r<matrix[v].length;r++){
            if(matrix[v][r]!=='o'&&matrix[v][r]!=='x'&&matrix[v][r]!==" "){
                return false;
            }
            if(matrix[v][r]==='x'){cont1=cont1+1}
            if(matrix[v][r]==='o'){cont2=cont1+1}
        }
    }
    if(!flag){
        for(let i = 0; i < 2; i++){
            if((matrix[i][i] === matrix[i+1][i+1])){
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if(flag){
            return flag;
        }
    }
    if(!flag){
        for(let i = 0; i < 2; i++){
            for(let j = 2; j > 0; j--){
                if((matrix[i][j] === matrix[i+1][j-1])){
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if(flag){
                return flag;
            }
        }
    }
    if(!flag){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 2; j++){
                if((matrix[i][j] === matrix[i][j+1])){
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if(flag){
                return flag;
            }
        }
    }
    if(!flag){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 2; j++){
                if((matrix[j][i] === matrix[j+1][i])){
                    flag = true;
                } else {
                    flag = false;
                    break;
                }
            }
            if(flag){
                return flag;
            }
        }
    }
    return flag;}else{return flag}
}

describe("Testing tribonacci",function(){
    it("Espero que una longitud 4 sea bien",function(){
        var res=tribonacci([1,2,3],4)
        expect(res).toEqual([1,2,3,6])
    });
    it("Espero que el primer elemento sea un arreglo sea bien",function(){
        var res=tribonacci(4,4)
        expect(res).toBe(false)
    });
    it("Espero que el segundo elemento sea un numero sea bien",function(){
        var res=tribonacci([1,2,3],4)
        expect(res).toEqual([1,2,3,6])
    });
    it("Espero que el segundo elemento sea un numero",function(){
        var res=tribonacci([1,2,3],"string")
        expect(res).toBe(false)
    });
    it("Espero que todos los elementos del arreglo sean numeros",function(){
        var res=tribonacci([1,"hola",3],4)
        expect(res).toBe(false)
    });
    it("Espero que todos los elementos del arreglo sean numeros",function(){
        var res=tribonacci([1,2,"hola"],4)
        expect(res).toBe(false)
    });
    it("Espero que si algun elemento es infinity sea false",function(){
        var res=tribonacci([1,2,Infinity],4)
        expect(res).toBe(false)
    });
    it("Espero que si funcione con numeros flotantes",function(){
        var res=tribonacci([1,2,3.5],4)
        expect(res).toEqual([1,2,3.5,6.5])
    });
    it("Espero que si algun elemento es null sea falso",function(){
        var res=tribonacci([1,null,3.5],4)
        expect(res).toBe(false)
    });
    it("Espero que si algun elemento es null sea falso",function(){
        var res=tribonacci([1,2,3.5],null)
        expect(res).toBe(false)
    });
    it("Espero que si algun elemento es undefined sea falso",function(){
        var res=tribonacci([1,2,3.5],undefined)
        expect(res).toBe(false)
    });
    it("Espero que si la longitud es array sea falso",function(){
        var res=tribonacci([1,2,3.5],[2])
        expect(res).toBe(false)
    });
});

describe("Testing isValidIPAdress",function(){
    it("Espero que una ip de 4 segmentos la valide",function(){
        var res=isValidIPAdress("192.168.0.1")
        expect(res).toBe(true)
    });
    it("Espero que una ip de 4 segmentos con uno mayor de 256 sea falso",function(){
        var res=isValidIPAdress("192.256.0.1")
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress(587)
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress({a:0,b:"0"})
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress(["fasf"])
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress(null)
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress(undefined)
        expect(res).toBe(false)
    });
    it("Espero que la ip sea string",function(){
        var res=isValidIPAdress(NaN)
        expect(res).toBe(false)
    });
    it("Espero que la ip sea menor de 255",function(){
        var res=isValidIPAdress("192.168.0.Infinity")
        expect(res).toBe(false)
    });
    it("Espero que la ip con puro cero",function(){
        var res=isValidIPAdress("0.0.0.0")
        expect(res).toBe(true)
    });
    it("Espero que la ip con punto flotante sea false",function(){
        var res=isValidIPAdress("0.0.0.2.5")
        expect(res).toBe(false)
    });
    it("Espero que la ip con 5 segmentos",function(){
        var res=isValidIPAdress("0.0.0.0.0")
        expect(res).toBe(false)
    });
    it("Espero que la ip con segmento negativos",function(){
        var res=isValidIPAdress("-8.0.0.0")
        expect(res).toBe(false)
    });
});

describe("Testing countTwos",function(){
    it("Espero que 12 sean dos dos",function(){
        var res=countTwos(12)
        expect(res).toBe(2)
    });
    it("Espero que 22 sean 6 dos",function(){
        var res=countTwos(22)
        expect(res).toBe(6)
    });
    it("Espero que string sea false",function(){
        var res=countTwos("hola")
        expect(res).toBe(false)
    });
    it("Espero que Infinity sea Infinity",function(){
        var res=countTwos(Infinity)
        expect(res).toBe(Infinity)
    });
    it("Espero que objeto sea false",function(){
        var res=countTwos({a:0,b:"0"})
        expect(res).toBe(false)
    });
    it("Espero que objeto sea false",function(){
        var res=countTwos(-2)
        expect(res).toBe(false)
    });
    it("Espero que 0 me regrese 0",function(){
        var res=countTwos(0)
        expect(res).toBe(0)
    });
    it("Espero que nada sea false",function(){
        var res=countTwos()
        expect(res).toBe(false)
    });
    it("Espero que boolean sea false",function(){
        var res=countTwos(true)
        expect(res).toBe(false)
    });
    it("Espero que boolean sea false",function(){
        var res=countTwos(2.5)
        expect(res).toBe(false)
    });
});

describe("Testing didSomeoneWon",function(){
    it("Espero que si alguien gane sea true",function(){
        var res=didSomeoneWon([['o','o','o'],['x','o','x'], ['x','o','o']])
        expect(res).toBe(true)
    });
    it("Espero que si alguien gane sea true",function(){
        var res=didSomeoneWon([['o','x','o'],['x','o','x'], ['x','o','o']])
        expect(res).toBe(true)
    });
    it("Espero que si nadie gana sea false",function(){
        var res=didSomeoneWon([['x','x','o'],['o','o','x'], ['x','o','o']])
        expect(res).toBe(false)
    });
    it("Espero que si una matriz no cuadrada sea false",function(){
        var res=didSomeoneWon([['x','x','o'],['o','o','x']])
        expect(res).toBe(false)
    });
    it("Espero que si una matriz no cuadrada sea false",function(){
        var res=didSomeoneWon([['x','o'],['o','x'], ['o','o']])
        expect(res).toBe(false)
    });
    it("Espero que si envias string sea false",function(){
        var res=didSomeoneWon("string")
        expect(res).toBe(false)
    });
    it("Espero que si envias numeros sea false",function(){
        var res=didSomeoneWon(1,2,3,434,5444)
        expect(res).toBe(false)
    });
    it("Espero que si envias objetos sea false",function(){
        var res=didSomeoneWon({a:0,b:"0"})
        expect(res).toBe(false)
    });
    it("Espero que si envias arreglo sea false",function(){
        var res=didSomeoneWon(['o','o','o'])
        expect(res).toBe(false)
    });
    it("Espero que si envias nada sea false",function(){
        var res=didSomeoneWon()
        expect(res).toBe(false)
    });
    it("Espero que si envias null sea false",function(){
        var res=didSomeoneWon(null)
        expect(res).toBe(false)
    });
    it("Espero que si otro valor sea false",function(){
        var res=didSomeoneWon([['p','x','o'],['x','o','x'], ['x','o','o']])
        expect(res).toBe(false)
    });
    it("Espero que si otro valor que no sea espacio sea true",function(){
        var res=didSomeoneWon([[' ','x','o'],['x','o','x'], ['x','o','o']])
        expect(res).toBe(true)
    });
    it("Espero que si otro valor que no sea vacio sea true",function(){
        var res=didSomeoneWon([['','x','o'],['x','o','x'], ['x','o','o']])
        expect(res).toBe(false)
    });
});
