x = 10;
console.log(`x=${x}`);

//IIFE

(function(message){
    "use strict";
    console.log(`Message:${message}`);
})("Hello IIFE");
//-------------------------------

const User = (function(){
    //private
    let fir_name;
    let sec_name;

    function show(){
        console.log(`show:${fir_name} ${sec_name}`);
    }

    function register(fname,sname){
        fir_name = fname;
        sec_name = sname;
    }

    //public interface
    return function(firstName,lastName){
            register(firstName,lastName);
            let dummy = 10;
            this.print = show;
            this.setNames = register;
            this.isRegistered = function(){
                return fir_name !== undefined && sec_name !== undefined;
            }
            console.log('Ctor User');
    };

})();

//Създаване на обект

const anna = new User('Anna','Smith');
anna.print();

const mark = new User('Markus','Handke');
if ( mark.isRegistered() ){
    mark.print()
}

const john = new User();

if( !john.isRegistered()){
    john.setNames('John','Doe');
    john.print();
}