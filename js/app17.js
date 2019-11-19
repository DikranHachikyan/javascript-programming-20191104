
var doc = document;

var btnNext = doc.querySelector('#nxt');
var btnPrev = doc.querySelector('#prv');
var gallery = doc.querySelector('#gallery');

btnNext.addEventListener('click',function(event){
    var li = doc.querySelector('#gallery li:first-child');
    gallery.append(li);
});

btnPrev.addEventListener('click', function(event){
    var li = doc.querySelector('#gallery li:last-child');
    gallery.prepend(li);
});



