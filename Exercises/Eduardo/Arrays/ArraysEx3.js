function play(ary, str, str1, ary1){

var new_ary=[], shif=0;

new_ary[0]=str;

new_ary=new_ary.concat(ary);

shif=ary1.shift(ary1);

new_ary.splice(shif,1,ary1);

new_ary.push(str1);

return new_ary;

}

console.log(play([1,2,3],"al inicio","al final",[1,3]));
