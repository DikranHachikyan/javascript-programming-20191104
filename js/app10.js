
console.log(document.getElementById('title'));
console.log(document.getElementById('title').id);
document.getElementById('title').style.color = 'red';

console.log(document.getElementsByClassName('list-item'));
document.getElementsByClassName('list-item')[1].style.background ='#ccc'; 

console.log(document.getElementsByTagName('p'));
// document.getElementsByTagName('p')[1].innerText = 'Hello <em>JavaScript</em>';
document.getElementsByTagName('p')[1].innerHTML = 'Hello <em>JavaScript</em>';