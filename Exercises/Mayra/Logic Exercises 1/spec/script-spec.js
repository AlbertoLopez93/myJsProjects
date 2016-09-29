function isAnagram(str1,str2) {
    var string1=[] ,string2=[];
    if (typeof(str1)!=="string"||typeof(str2)!=="string") {
        return false;
    }
    str1=str1.toLowerCase(),str2=str2.toLowerCase();

    string1=str1.split("");
    string2=str2.split("");
    string1=string1.sort();
    string2=string2.sort();
    string1=string1.join(separador = ',');
    string2=string2.join(separador = ',');

    if (string1===string2) {
        return true;
    }else{
        return false;
    }



}

describe("Testing isAnagram",function (){
    it ("Espero que 'roma' y 'amor' regrese true",function(){
        var res=isAnagram('roma','amor');
        expect(res).toBe(true);
    });
    it ("Espero que 'RRR' y '[1,2]' regrese false",function(){
        var res=isAnagram('RRRR',[1,2]);
        expect(res).toBe(false);
    });
    it ("Espero que 'RRRRr' y true regrese false",function(){
        var res=isAnagram('RRRRr',true);
    expect(res).toBe(false);
    });
    it ("Espero que 'RRRR' y null regrese false",function(){
        var res=isAnagram('RRRR',null);
        expect(res).toBe(false);
    });
    it ("Espero que 'RRRR' y undefined regrese false",function(){
        var res=isAnagram('RRRR',undefined);
        expect(res).toBe(false);
    });
    it ("Espero que '1234' y 1234 regrese false",function(){
        var res=isAnagram('1234',1234);
        expect(res).toBe(false);
    });
    it ("Espero que [{},{}] y [{},{}] regrese false",function(){
        var res=isAnagram([{},{}],[{},{}]);
        expect(res).toBe(false);
    });
    it ("Espero que Infinity hola regrese false",function(){
        var res=isAnagram(Infinity,"hola");
        expect(res).toBe(false);
    });

});

function convertSpaces(str1) {
    var string1="",string2="";
    if (typeof(str1)!=="string") {
        return false;
    }
    string1= str1.split("")
    for (var i = 0; i < string1.length; i++) {
        if(string1[i]===" "){
            string1[i]="%20";
        }

        string2=string2+string1[i];
    }

    return string2;

}
describe("Testing convertSpaces",function (){
    it ("Espero que 'hola mundo cruel' regrese 'hola%20mundo%20cruel'",function(){
        var res=convertSpaces('hola mundo cruel');
        expect(res).toBe('hola%20mundo%20cruel');
    });
    it ("Espero que 'holamundocruel' regrese holamundocruel'",function(){
        var res=convertSpaces('holamundocruel');
        expect(res).toBe('holamundocruel');
    });
    it ("Espero que '1235 111' regrese 1235%20111'",function(){
        var res=convertSpaces('1235 111');
        expect(res).toBe('1235%20111');
    });
    it ("Espero que 1235 111 regrese FALSE",function(){
        var res=convertSpaces(1235);
        expect(res).toBe(false);
    });
    it ("Espero que [] regrese FALSE",function(){
        var res=convertSpaces([1,2,3]);
        expect(res).toBe(false);
    });
    it ("Espero que null regrese FALSE",function(){
        var res=convertSpaces(null);
        expect(res).toBe(false);
    });
    it ("Espero que undefined regrese FALSE",function(){
        var res=convertSpaces(undefined);
        expect(res).toBe(false);
    });
    it ("Espero que false regrese FALSE",function(){
        var res=convertSpaces(false);
        expect(res).toBe(false);
    });
});
    function getTotal(days){

    var total=0,resultado="";

    if (typeof(days)!=="number") {
        return false;
    }
    if (days===Infinity) {

    }
    if (days<0) {
        return false;
    }
    if (Number.isInteger(days)===false ) {
        return false;
    }
    if (days===0) {
        resultado="$0";
    }
    if (days===1||days===2) {
        total=days*40
        resultado="$"+total;
    }
    if (days>=3&&days<7) {
        total=days*40-20
        resultado="$"+total;
    }
    if (days>=7) {
        total=days*40-50
        resultado="$"+total;
    }

    return resultado;
}

describe("Testing getTotal",function (){
    it ("Espero que 1 regrese 40'",function(){
        var res=getTotal(1);
        expect(res).toBe("$40");
    });
    it ("Espero que 1.3 regresse 40'",function(){
        var res=getTotal(1.3);
        expect(res).toBe(false);
    });
    it ("Espero que 3 regrese 40'",function(){
        var res=getTotal(3);
        expect(res).toBe("$100");
    });
    it ("Espero que 7 regrese 230'",function(){
        var res=getTotal(7);
        expect(res).toBe("$230");
    });
    it ("Espero que 0 regrese 0'",function(){
        var res=getTotal(0);
        expect(res).toBe("$0");
    });
    it ("Espero que -1 regrese 0'",function(){
        var res=getTotal(-1);
        expect(res).toBe(false);
    });
    it ("Espero que null regrese false",function(){
        var res=getTotal(null);
        expect(res).toBe(false);
    });
    it ("Espero que undefined regrese false",function(){
        var res=getTotal(undefined);
        expect(res).toBe(false);
    });
    it ("Espero que true regrese false",function(){
        var res=getTotal(true);
        expect(res).toBe(false);
    });
    it ("Espero que [1,2,3] regrese false",function(){
        var res=getTotal([1,2,3]);
        expect(res).toBe(false);
    });
});

function squareSum(arg) {
    var ary=arg,suma=0,cuadrado=0,aux=Array.isArray(arg);

    if (aux===false) {
        return false;
    }
    var ary=arg,suma=0,cuadrado=0;

    for (var i = 0; i < ary.length; i++) {
        cuadrado=ary[i]*ary[i];
        suma=suma+cuadrado;
    }
        return suma;
}
describe("Testing squareSum",function (){
    it ("Espero que [1/2/2] regrese 9'",function(){
        var res=squareSum([1,2,2]);
        expect(res).toBe(9);
    });
    it ("Espero que [1] regrese false",function(){
        var res=squareSum(1);
        expect(res).toBe(false);
    });
    it ("Espero que null regrese false",function(){
        var res=squareSum(null);
        expect(res).toBe(false);
    });
    it ("Espero que undefined regrese false",function(){
        var res=squareSum(undefined);
        expect(res).toBe(false);
    });
    it ("Espero que infinity regrese false",function(){
        var res=squareSum(Infinity);
        expect(res).toBe(false);
    });
    it ("Espero que hola regrese false",function(){
        var res=squareSum("hola");
        expect(res).toBe(false);
    });
    it ("Espero que true regrese false",function(){
        var res=squareSum(true);
        expect(res).toBe(false);
    });


});
