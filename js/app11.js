
//id
console.log(document.querySelector('#title'));
//class - само 1 елемент
console.log(document.querySelector('.list-item'));
//tag - само 1 елемент
console.log(document.querySelector('p'));

//class - all elem
console.log(document.querySelectorAll('.list-item'));
//tag
console.log(document.querySelectorAll('p'));

//jquery style
//class - all elem
console.log(document.querySelector('.list-item:last-child'));
//tag
console.log(document.querySelectorAll('p:nth-child(odd)'));
console.log(document.querySelectorAll('li a'));