var button = document.querySelector('#btn');

var counter = 0;

function onButtonClicked(evt){
    console.log(evt);
     ++counter;
    evt.target.innerHTML = 'Click Me! ' + counter;
    if( counter > 4 ){
        evt.target.removeEventListener('click',onButtonClicked);
    }
}

button.addEventListener('click',onButtonClicked);