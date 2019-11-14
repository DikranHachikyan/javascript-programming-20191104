//1. create

var newLi = document.createElement('li');

//2.setup

newLi.className = 'list-item';
newLi.innerHTML = '<strong>New</strong> Item';

//3. add to ul
var ul = document.querySelector('ul');
ul.append(newLi);
newLi.append(' new Text');
//ul.prepend(newLi);
console.log(newLi);

//добавяне преди 2-я
// var li2 = document.querySelector('ul li:nth-child(2)');
// ul.insertBefore(newLi,li2);
// console.log(li2);


//Attributes
var a = document.querySelector('a');
a.setAttribute('title','Page 01: Hello JavaScript');