"use strict";

//A: декларация на клас
function User(){
    console.log('Constructor User');
    
    //1. данни на класа
    //private
    let firstName = 'John';
    let lastName = 'Smith';
    //public
    this.age = 30;

    //2. методи на класа
    //public
    this.show = ()=>{
        console.log(`${firstName} ${lastName} ${this.age}`);
        foo();
    };
    //private
    function foo(){
        console.log('private method foo');
    }
}

//Б: Обект от тип User
const user = new User();

user.show();

delete user.age;

user.show();
