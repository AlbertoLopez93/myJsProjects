/****

timestamp: 1472810040000

from skype

****/

function play( array1, valor1, valorfin, array2,valor3){
   var arreglonuevo=array1

arreglonuevo.push(valorfin);//agrego al final
arreglonuevo.unshift(valor1);//agrego al inicio 
arreglonuevo.splice(array2[0], 0, array2[1]);//elimina 0 elementos, agrega elemento de mi arreglo en pos 1 a arreglo nuevo en pocision 2
arreglonuevo.push(valor3);//ahora valor tres toma la ultima pocision de mi arreglo

    return arreglonuevo;
      }
