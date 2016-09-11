function isAnagram(str1,str2) {
var lista=[];
var espacio=new Boolean();
if(str1.length===str2.length){
  spl1=str1.split('');
  spl2=str2.split('');
  console.log(spl1);
  console.log(spl2);
  for (var i = 0; i < spl1.length; i++) {
    for (var j = 0; j < spl1.length; j++) {

      // var abecedario = {
      //   "A":"a",
      //   "B":"b",
      //   "C":"c",
      //   "D":"d",
      //   "E":"e",
      //   "F":"f",
      //   "G":"g",
      //   "H":"h",
      //   "I":"i",
      //   "J":"j",
      //   "K":"k",
      //   "L":"l",
      //   "M":"m",
      //   "N":"n",
      //   "Ñ":"ñ",
      //   "O":"o",
      //   "P":"p",
      //   "Q":"q",
      //   "R":"r",
      //   "S":"s",
      //   "T":"t",
      //   "U":"u",
      //   "V":"v",
      //   "W":"w",
      //   "X":"x",
      //   "Y":"y",
      //   "Z":"z"
      //
      // };
      // if(spl1[i]===abecedario["A"]){
      //   console.log("Letra encontrada");
      // }
      spl1=convert(spl1,spl1.length)
      spl2=convert(spl2,spl2.length)

      function convert(cad,long) {
        for (var l = 0; l < long; l++) {
          switch (cad[l]) {
            case "A":cad[l]="a"
              break;
            case "B":cad[l]="b"
              break;
            case "C":cad[l]="c"
                break;
            case "D":cad[l]="d"
                  break;
            case "E":cad[l]="e"
                    break;
            case "F":cad[l]="f"
                      break;
            case "G":cad[l]="a"
                      break;
            case "H":cad[l]="h"
                      break;
            case "I":cad[l]="i"
                      break;
            case "J":cad[l]="j"
                        break;
            case "K":cad[l]="k"
                        break;
            case "L":cad[l]="l"
                        break;
            case "M":cad[l]="m"
                        break;
            case "N":cad[l]="n"
                        break;
            case "O":cad[l]="o"
                        break;
            case "P":cad[l]="p"
                        break;
            case "Q":cad[l]="q"
                        break;
            case "R":cad[l]="r"
                        break;
            case "S":cad[l]="s"
                        break;
            case "T":cad[l]="t"
                        break;
            case "U":cad[l]="u"
                        break;
            case "V":cad[l]="v"
                        break;
            case "W":cad[l]="w"
                        break;
            case "X":cad[l]="x"
                        break;
            case "Y":cad[l]="y"
                        break;
            case "Z":cad[l]="z"
                        break;

          }

        }
        return cad;
      }
        if (spl1[i] === spl2[j]) {
            lista[i] = spl2[j];
        }
     }
        if (lista.length == spl1.length) {
            espacio = true
        }
        else{
            espacio == false;
          }
   }

}
else{
  console.log("las cadenas no tienen la misma longitud");
  espacio=false
}
return espacio;
}

console.log(isAnagram("AmOr","oMra"));


function convertSpaces(str) {
  var cadena2;
  for (var x=0; x < str.length; x++) {
    cadena2=str.split(' ');
    cadena2=cadena2.join('%');
  }
  return cadena2;
}
console.log(convertSpaces("Hola mundo ih   hola    "));


