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
    return {
        //show:show,
        show,
        setNames: register,
        isRegistered: function(){
            return fir_name !== undefined && sec_name !== undefined;
        }
    };

})();

//Създаване на обект
User.setNames('Markus','Handke');

if( User.isRegistered()){
    User.show();
}

const anna = Object.create(User);

anna.setNames('Anna','Smith');
anna.show();