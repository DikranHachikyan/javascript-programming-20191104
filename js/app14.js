function onButtonClick(evt){
    console.log('Button clicked');
}

var button = document.querySelector('#btn');

button.addEventListener('click', onButtonClick );


//Грешка!! onButtonClick() ще се изпълни при 
//изпълнение на кода
//button.addEventListener('click', onButtonClick() );

