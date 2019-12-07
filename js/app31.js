'use strict';


const doc = document,
      btn = doc.querySelector('#btn');
let counter=0;
const values = [10,20,30,40,50,60,70,80,90];
let lastValue = 0;

//1. function
// btn.addEventListener('click',function(event){
//     //this => btn
//     console.log(this);
//     values.every(function(value,index){
//         if( index === counter){
//             console.log(this);
//             this.innerHTML = `count:${value}`;
//             counter++;
//             return false;
//         }
//         return true
//     }, this);
// });

//2. lambda !!!!
btn.addEventListener('click',function(event){
    //this => window

    // this.innerHTML = `count:${counter}`;
    values.every((value,index)=>{
        
        if( index === counter){
            
            this.innerHTML = `count:${value}`;
            counter++;
            return false;
        }
        return true;
    })
    
    //event.target.innerHTML = `count:${counter}`;
    // console.log(this);
});