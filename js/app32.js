"use strict";

const suma = (a,b,c)=>a + b + c;

const values = [4,7,9,10,5];

console.log('suma1 =', suma(values[0],values[1],values[2]));
console.log('suma2 =', suma(...values));


const nums = [100, ...values,200];

console.log(nums);
const user = {
    first:'Anna',
    second:'Smith',
    age: 20
};

const ob = {...user, 'phone':'111-22-44','mail':'anna@no.com'};
console.log(ob);