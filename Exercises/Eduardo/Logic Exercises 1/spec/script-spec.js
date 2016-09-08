"use strict"
function isAnagram(str1, str2){
    if((typeof str1==="string"&&typeof str2==="string")||(str1 instanceof String&&str2 instanceof String)){
     str1 = str1.split("");
     str2 = str2.split("");


    if(str1.length !== str2.length){
         return false;
    }

    str1 = converter(str1);
    str2 = converter(str2);
    str1 = ordena(str1);
    str2 = ordena(str1);

    for(let i=0; i<str1.length;i++){
        if(str1[i]!==str2[i]){
            return false;
        }
    }
    return true;
}else{return false}
}
function ordena(x){
   var inter;
   do {
       inter = false;
       for (var i=0; i < x.length-1; i++) {
           if (x[i] > x[i+1]) {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               inter = true;
           }
       }
   } while (inter);

   return x;
}
function converter(x){
    for(let i=0; i<x.length; i++){
        switch (x[i]){
            case 'A':
            case 'a':
                x[i] = 1;
                break;
            case 'B':
            case 'b':
                x[i] = 2;
                break;
            case 'C':
            case 'c':
                x[i] = 3;
                break;
            case 'D':
            case 'd':
                x[i] = 4;
                break;
            case 'E':
            case 'e':
                x[i] = 5;
                break;
            case 'F':
            case 'f':
                x[i] = 6;
                break;
            case 'G':
            case 'g':
                x[i] = 7;
                break;
            case 'H':
            case 'h':
                x[i] = 8;
                break;
            case 'I':
            case 'i':
                x[i] = 9;
                break;
            case 'J':
            case 'j':
                x[i] = 10;
                break;
            case 'K':
            case 'k':
                x[i] = 11;
                break;
            case 'L':
            case 'l':
                x[i] = 12;
                break;
            case 'M':
            case 'm':
                x[i] = 13;
                break;
            case 'N':
            case 'n':
                x[i] = 14;
                break;
            case 'Ñ':
            case 'ñ':
                x[i] = 15;
                break;
            case 'O':
            case 'o':
                x[i] = 16;
                break;
            case 'P':
            case 'p':
                x[i] = 17;
                break;
            case 'Q':
            case 'q':
                x[i] = 18;
                break;
            case 'R':
            case 'r':
                x[i] = 19;
                break;
            case 'S':
            case 's':
                x[i] = 20;
                break;
            case 'T':
            case 't':
                x[i] = 21;
                break;
            case 'U':
            case 'u':
                x[i] = 22;
                break;
            case 'V':
            case 'v':
                x[i] = 23;
                break;
            case 'W':
            case 'w':
                x[i] = 24;
                break;
            case 'X':
            case 'x':
                x[i] = 25;
                break;
            case 'Y':
            case 'y':
                x[i] = 26;
                break;
            case 'Z':
            case 'z':
                x[i] = 27;
                break;
            default:
                break;
        }
    }
    return x;
}

function convertSpace(str1){
    let encodedSpace="%20"
    let result=""
    if(typeof str1==="string"||str1 instanceof String){
        for(var i=0;i<str1.length;i++){
            if(str1[i]===" "){
                result+=encodedSpace;
            }else{
                result+=str1[i]
            }


        }return result;
    }else{return false}

}

function getTotal(days) {
    if(typeof days==="number"||days instanceof Number){
        var costopordia=40;
        var totaldinerodedias=0;
        if(days>0){
            if(days<3){
                totaldinerodedias=(costopordia*days)
            }
            if(days>=3){
                totaldinerodedias=(costopordia*days)-20
            }if (days>=7){
                totaldinerodedias=(costopordia*days)-50
            }
            return totaldinerodedias;
        }if(days===0){return 0}else{return false}
    }
    else{
        return false
    }
}

function squareSum(ary) {
    //var resul=0;
    if(ary.length<1){return temp=undefined}
    if(ary instanceof Array||typeof ary==="object"){
        var temp=0;
        console.log(ary);
        for (var k = 0; k < ary.length; k++) {
            if(typeof ary[k]==="number"){
                for (var i = 0; i <ary.length; i++) {

                    temp=temp+(ary[i]*ary[i]);

                }return temp;
            }
            else{return temp=false}
        }
    }
    else{
        return temp=false
    }
}

function convertMatrix (mat) {
   //console.log(mat[0][0]);
   for (let i = 0; i < mat.length; i++) {
       for (let j = 0; j < mat.length; j++) {
           if (mat[i][j] === 0) {
               //console.log(i + " " + j);
               for (let k = 0; k < mat.length; k++) {
                   //mat[i][k]=0;
                   mat[k][j] = "0";
                   mat[i][k] = "0";
               }
               break;

           }
       }

   }return mat;
}

function eight(m) {

    for(let x = 0; x < m.length; x++){
       for(let y = m[x].length - 1; y >=0; y--){
           return m[y][x];
       }
   }
}


describe("Testing isAnagram",function(){
    it("Espero que string+string sea true",function(){
        var res=isAnagram("roma","rmao")
        expect(res).toBe(true)
    });
    it("Espero que string+string de diferente length sea false",function(){
        var res=isAnagram("roma","rmp")
        expect(res).toBe(false)
    });
    it("Espero que string+numero sea false",function(){
        var res=isAnagram("roma",5678)
        expect(res).toBe(false)
    });
    it("Espero que undefine+numero sea false",function(){
        var res=isAnagram(undefined,5678)
        expect(res).toBe(false)
    });
    it("Espero que undefine+undefined sea false",function(){
        var res=isAnagram(undefined,undefined)
        expect(res).toBe(false)
    });
    it("Espero que null+null sea false",function(){
        var res=isAnagram(null,null)
        expect(res).toBe(false)
    });
    it("Espero que arreglo+null sea false",function(){
        var res=isAnagram([1,2,4],null)
        expect(res).toBe(false)
    });
    it("Espero que objeto+null sea false",function(){
        var res=isAnagram({a:0,b:0},null)
        expect(res).toBe(false)
    });
    it("Espero que objeto+array sea false",function(){
        var res=isAnagram({a:0,b:0},null)
        expect(res).toBe(false)
    });
    it("Espero que false+false sea false",function(){
        var res=isAnagram(false,false)
        expect(res).toBe(false)
    });
    it("Espero que true+true sea false",function(){
        var res=isAnagram(true,true)
        expect(res).toBe(false)
    });
    it("Espero que string+boolean sea false",function(){
        var res=isAnagram(true,true)
        expect(res).toBe(false)
    });
    it("Espero que string con nada sea false",function(){
        var res=isAnagram("hola")
        expect(res).toBe(false)
    });
});

describe("Testing convertedSpaces",function(){
    it("Espero que string+espacios lo convierta",function(){
        var res=convertSpace("roma jjj")
        expect(res).toBe("roma%20jjj")
    });
    it("Espero que numero sea false",function(){
        var res=convertSpace(8)
        expect(res).toBe(false)
    });
    it("Espero que puros espacios sea %20",function(){
        var res=convertSpace("   ")
        expect(res).toBe("%20%20%20")
    });
    it("Espero que numero sea falso",function(){
        var res=convertSpace(8)
        expect(res).toBe(false)
    });
    it("Espero string con numeros sea true",function(){
        var res=convertSpace("8  8")
        expect(res).toBe("8%20%208")
    });
    it("Espero que array con espacios sea false",function(){
        var res=convertSpace(["hola  mundo"])
        expect(res).toBe(false)
    });
    it("Espero que cadena sola sea false",function(){
        var res=convertSpace("roma")
        expect(res).toBe("roma")
    });
    it("Espero que objeto sea false",function(){
        var res=convertSpace({a:0,b:'0'})
        expect(res).toBe(false)
    });
    it("Espero que objeto instancia de string sea true",function(){
        var res=convertSpace(String("hola m"))
        expect(res).toBe("hola%20m")
    });
});

describe("Testing getTotal",function(){
    it("Espero que 10 dias sean 350",function(){
        var res=getTotal(10)
        expect(res).toBe(350)
    });
    it("Espero que Infinity dias sean Infinity",function(){
        var res=getTotal(Infinity)
        expect(res).toBe(Infinity)
    });
    it("Espero que dias negativos sean false",function(){
        var res=getTotal(-2)
        expect(res).toBe(false)
    });
    it("Espero que dias en string sean",function(){
        var res=getTotal("2")
        expect(res).toBe(false)
    });
    it("Espero que dias en instancia numero sean verdaderas",function(){
        var res=getTotal(Number(10))
        expect(res).toBe(350)
    });
    it("Espero que dias en instancia numero sean verdaderas",function(){
        var res=getTotal(2.5)
        expect(res).toBe(100)
    });
    it("Espero que dias en instancia numero sean verdaderas",function(){
        var res=getTotal(0)
        expect(res).toBe(0)
    });
});

describe("Testing squareSum",function(){
    it("Espero que 9,3,5,8 sea ",function(){
        var res=squareSum([9,3,5,1])
        expect(res).toBe(116)
    });
    it("Espero que todos los elementos del array sean numeros sea verdadero",function(){
        var res=squareSum(["a",3,5,8])
        expect(res).toBe(false)
    });
    it("Espero que todos los elementos del array  numeros sea verdadero",function(){
        var res=squareSum([9,"a",5,8])
        expect(res).toBeNaN()
    });
    it("Espero que el tipo de dato sea array",function(){
        var res=squareSum(8,5)
        expect(res).toBe(false)
    });
    it("Espero que el tipo de dato sea array",function(){
        var res=squareSum("string")
        expect(res).toBe(false)
    });
    it("Espero que si ingreso un infinity sea infinity",function(){
        var res=squareSum([9,3,5,Infinity])
        expect(res).toBe(Infinity)
    });
    it("Espero que si ingreso un arreglo sin nada sea infinity",function(){
        var res=squareSum([,,])
        expect(res).toBe(false)
    });
    it("Espero que si ingreso un arreglo vacio sea undefined",function(){
        var res=squareSum([])
        expect(res).toBe(undefined)
    });
    it("Espero que si ingreso un arreglo vacio sea undefined",function(){
        var res=squareSum([1e1])
        expect(res).toBe(100)
    });
});

describe("Testing convertMatrix",function(){
    // it("Espero que  [[1, 2, 3], [4, 0, 6], [7, 8, 9]]  sea ",function(){
    //     var res=convertMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    //     expect(res).toBe([[1,2,3],[4,5,6],[7,8,9]])
    // });

});
describe("Testing ejercicio8",function(){
    it("Espero que  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]  lo rote",function(){
        var res=eight([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
        expect(res).toBe(7)
    });

});
