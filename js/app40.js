"use strict";

//A: декларация на клас
function User(firstName='', lastName='', age=0){
    console.log('Constructor User');
    
    //1. данни на класа
    //private
    let fir = firstName;
    let sec = lastName;
    
    //2. методи на класа
    //public
    this.setFirstName = function(fname){
        fir = fname;
    }
    this.setLastName = function(lname){
        sec = lname;
    }
    this.getFirstName = function(){
        return fir;
    }
    this.getLastName = function(){
        return sec;
    }
}

//Б: Обект от тип User
User.prototype.isAdmin = false;
console.log(new User('John','Doe'));

User.prototype.show = function(){
    console.log(`show:${this.getFirstName()} ${this.getLastName()}`);
}

User.prototype.toString = function(){
    return `${this.getLastName()}, ${this.getFirstName()}`;
}
const anna = new User('Anna','Smith');

anna.show();
anna.isAdmin = true;
console.log(`Anna admin:${anna.isAdmin}`);

anna.foo = ()=> console.log('Foo Anna');

anna.foo();
const mark = new User('Markus', 'Handke');

console.log(`Markus admin:${mark.isAdmin}`);
console.log('---------------------');
console.log('User ' + anna);