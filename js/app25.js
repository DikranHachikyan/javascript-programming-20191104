"use strict";

let x = 10; //глобална променлива

function showMessage(){
    let a = 10; //локална за функцията променлива

    if(true){
        let b = 1; //локална за if променлива
        console.log('1. a=',a,' b=',b);
    }
    //let => error, b is not defined!!!
    //console.log('2. a=',a,' b=',b);
}

showMessage();