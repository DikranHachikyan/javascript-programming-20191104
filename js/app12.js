//Класически
//1
var pageTitle = document.getElementById('title');
pageTitle.style.color = 'red';
console.log(pageTitle);

//2. HTMLCollection
var para = document.getElementsByClassName('text');
//допълнителна конверсия от HTMLCollection -> Array
var paras = Array.from(para);
paras.forEach(function(p,index){
    p.style.backgroundColor = '#ccc';
    p.style.fontFamily = 'monospace';

});
// para[1].style.backgroundColor = '#ccc';
// para[2].style.fontFamily = 'monospace';
console.log(para);

//3. HTMLCollection 
var li = document.getElementsByTagName('li');
li[0].innerHTML = '<a href="./page01.html">Page 01</a>';
console.log(li);


//Съвременен
//1. id
var li = document.querySelector('.list-item');
li.style.listStyle = 'none';
console.log(li);

//2. NodeList
var links = document.querySelectorAll('a');
// links[0].style.textDecoration = 'none';
links.forEach(function (item,index){
    item.style.textDecoration = 'none';
});

console.log(links);