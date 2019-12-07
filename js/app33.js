"use strict";

//A: декларация на клас
function User(){
    console.log('Class User');
    
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

console.log('Log 1 User:',user);

// console.log(`User:${user.firstName}  ${user.lastName}`);
user.age = -20;
user.show();
console.log(`Log 2 User:${user.lastName} ${user.age}`);
// private method не е достъпен отвън
// user.foo();