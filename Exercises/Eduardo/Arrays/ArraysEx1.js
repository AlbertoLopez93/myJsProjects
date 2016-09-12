/****

timestamp: 1472840570000

****/

function createCoords(num) {
var arreglo=[]
for (var i = 0; i <num; i++) {
    arreglo[i]=[Math.floor(Math.random()*(100-0)),Math.floor(Math.random()*(100-0))]
}
arreglo.sort(CompareForSort);

return arreglo
}
//esta es la funcion que arregla los arreglos :P
function CompareForSort(first, second)
{
    if (first == second)
        return 0;
    if (first < second)
        return -1;
    else
        return 1;
}

