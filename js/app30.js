'use strict';

const array = [11,22,33,44,55,66,77,8,99];

//1. classic
// const n = array.filter(function(value){
//     return  ( value % 2 ) == 0;
// });

//2.1 lambda
// const n = array.filter((value)=>{
//     return  ( value % 2 ) == 0;
// });

//2.2 lambda
// const n = array.filter( value => ( value % 2 ) == 0);
const n = array.filter( (value,index) => ( value % 2 ) == 0);

console.log('n=',n);