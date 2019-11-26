var doc = document;

var link = doc.querySelector('a');

link.addEventListener('click',function(event){
    console.log('Click a:', event);
    event.preventDefault();
});

var tagA = doc.querySelector('#a');

tagA.addEventListener('click',function(event){
    event.currentTarget.style.backgroundColor = '#ccc';
    console.log('Click Event #a:', event);
});

var tagC = doc.querySelector('#c');

tagC.addEventListener('click',function(event){
    event.stopPropagation();
    event.currentTarget.style.backgroundColor = '#f55';
    console.log('Click Event #c:', event);
});