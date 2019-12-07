"use strict";

//A: декларация на клас
function User(firstName='', lastName='', age=0){
    console.log('Constructor User');
    
    //1. данни на класа
    //private
    let fir = firstName;
    let sec = lastName;
    //public
    this.age = age;

    //2. методи на класа
    //public
    this.show = ()=>{
        console.log(`${fir} ${sec} ${this.age}`);
        foo();
    };
    //private
    function foo(){
        console.log('private method foo');
    }
}

//Б: Обект от тип User
const anna = new User('Anna','Smith',30);
const mark = new User('Markus','Handke',35);

anna.show();
mark.show();