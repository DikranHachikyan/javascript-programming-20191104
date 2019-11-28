'use strict';


const doc = document,
      btn = doc.querySelector('#btn');
let counter=0;

//1. function
// btn.addEventListener('click',function(event){
//     //this => btn
//     this.innerHTML = `count:${++counter}`;
// });

//2. lambda !!!!
btn.addEventListener('click',(event)=>{
    //this => window
    ++counter;
    // this.innerHTML = `count:${counter}`;
    event.target.innerHTML = `count:${counter}`;
    // console.log(this);
});