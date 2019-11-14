console.log('first line of code');

var button = document.querySelector('#btn');
var checkbox = document.querySelector('#cbk');
var para = document.querySelector('#text');

button.addEventListener('click', function (evt){
    console.log('Button clicked');
});

checkbox.addEventListener('change', function(evt){
    console.log('Change Event')
});

checkbox.addEventListener('click', function(evt){
    console.log('Click Event')
});

para.addEventListener('click',function(evt){
    console.log('Paragraph Clicked');
});

window.addEventListener('load',function(evt){
    // window.alert('Document Loaded');
    console.log('Document Loaded!');
});