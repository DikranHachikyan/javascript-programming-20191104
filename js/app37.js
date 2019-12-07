"use strict";

let x = 10; //10 - literal
let y = x;

function printUser(user){
    if( user.firstName === undefined || user.lastName === undefined){
        throw Error('Missing first or last name!');
    }
    console.log(`[Print] ${user.firstName} ${user.lastName}`);
}

const anna = {
    firstName: 'Anna',
    lastName:'Smith',
    age: 30,
    show: function(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
};


anna.show();
console.log(`User: ${anna.lastName} age: ${anna.age}`);

printUser(anna);

printUser({firstName:'John',lastName:'Doe'});

const mark = Object.create(anna);
mark.firstName = 'Markus';
mark.lastName = 'Handke';
mark.show();
//!!! john е референция, т.е. към anna
const john = anna;
john.firstName = 'JOHN';
anna.show();