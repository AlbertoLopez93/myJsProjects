/****

timestamp: 1472840570000

****/
"use strict"
function createCoords(num) {
var arreglo=[]
let ary=["",""]
let t0=0
let t1=0
for(let j=0;j<num;j++){
    ary[0]=parseInt((Math.random()*100)+(t0+1));
    ary[1]=parseInt(Math.random()*100);
    arreglo[arreglo.length]=ary
    t0=ary[0]
    ary=["",""]
    t1=t0+100
}return arreglo;

// for (var i = 0; i <num; i++) {
//     arreglo[i]=[Math.floor(Math.random()*(100-0)),Math.floor(Math.random()*(100-0))]
// }
// arreglo.sort(CompareForSort);
// function CompareForSort(first, second)
// {
//     if (first[0] == second[0]){
//         return 0;
//     }
//     if (first[0] <= second[0]){
//         return -1;
//     }else{
//         return 1;
//     }
// }
//
// return arreglo
}
//esta es la funcion que arregla los arreglos :P
