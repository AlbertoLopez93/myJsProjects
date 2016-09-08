function isAnagram(str1,str2){
  var arreglo=str1.split("");
  var arreglo2=str2.split("");
  var a=[];
  var con=0;

  if(str1.length=== str2.length){
    var abc= {"a":"A","b":"B","c":"C","d":"D","e":"E","f":"F","g":"G","h":"H","i":"I","j":"J","k":"K","l":"L","m":"M","n":"N","o":"O","p":"P","q":"Q","r":"R","s":"S","t":"T","u":"U","v":"V","w":"W","x":"X","y":"Y","z":"Z"}
    for(var i=0; i<str1.length; i++){
      for (var aux in abc) {
        if(arreglo[i]===aux){
          arreglo[i]=abc[aux];
          break;
        }
      }
    }
    for(var i=0; i<str2.length; i++){
      for (var aux in abc) {
        if(arreglo2[i]===aux){
          arreglo2[i]=abc[aux];
          break;
        }
      }
    }
    for(var i=0; i<str1.length; i++){
      for(var j=0; j<str2.length; j++){
        if(arreglo[i]===arreglo2[j]){
          con++;
        }
      }
    }
  }
  if(con===str1.length){
    return true;
  }
  else{
    return false;
  }
}

function getTotal(dias){
  var total=0;
  total = dias * 40
  if(dias % 1 == 0){
    if(dias>=3 && dias <= 6 ){
      total-= 20;
    }
    if(dias >= 7 ){
      total -= 50;
    }
    return total;
  }
  else{
    return false
  }
  if(dias<=0){
    return false
  }
  else{
    return false
  }
}


function convertSpaces(str1){
  if(typeof(str1)=== typeof("")){
    var stri= str1.split("");
    var string="";
    for (var i = 0; i < stri.length; i++) {
      if(stri[i]===" "){
        stri[i]="%20";
      }
      string=string+stri[i];
    }
    return string;
  }
  else{
    return false
  }
}
function squareSum(arg){
  var arry=arg, suma = 0, potencia = 0,z=0;
  if(Array.isArray(arg)){
    for(var x=0; x<arry.length; x++){
      potencia = arry[x] * arry[x]
      suma += potencia
    }
    return suma;
  }
  else{
    return false;
  }
}
//console.log(Total(7));
//console.log(isAnagram("roma","amor"))
describe("Logic functions", function () {

    describe("Anagram function", function () {
        it("should exists", function () {
            expect(isAnagram).toBeDefined();
        });
        describe("Evaluates that two string are Anhagram", function () {
          it("", function () {
            expect(isAnagram("amor","ramo")).toBe(true);
            expect(isAnagram("amor","raamo")).toBe(false);
            expect(isAnagram("amor","romo")).toBe(true);

            });
          });
        });
        describe("Rent Card function", function () {
          it("should exists", function () {
            expect(getTotal).toBeDefined();
          });
          describe("Evaluates the total amount to be paid ", function () {
            it("should exists", function () {
              expect(getTotal(7)).toBe(230);
              expect(getTotal(4)).toBe(140);
              expect(getTotal(2)).toBe(80);
            });
          });
        });
        describe("White Spaces", function () {
          it("should exists", function () {
            expect(convertSpaces).toBeDefined();
          });
          describe("If there is a Blank Space replaces it with %20", function () {
            it("should exists", function () {
              expect(convertSpaces("Hola Mundo")).toBe("Hola%20Mundo");
              expect(convertSpaces("ana marlene lozano flores")).toBe("ana%20marlene%20lozano%20flores");
              expect(convertSpaces("HolaMundo")).toBe("HolaMundo");
              expect(convertSpaces(4)).toBe(false);
            });
          });
        });
        describe("Sum of Squares", function () {
          it("should exists", function () {
            expect(squareSum).toBeDefined();
          });
          describe("Sum of squared numbers", function () {
            it("should exists", function () {
              expect(squareSum([1,2,3])).toBe(14);
              expect(squareSum([])).toBe(0);
              expect(squareSum("cadena")).toBe(false);
              expect(squareSum(1)).toBe(false);
              expect(squareSum(Infinity)).toBe(false);
            });
          });
        });
      });
