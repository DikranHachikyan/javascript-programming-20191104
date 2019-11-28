'use strict';

const title = 'My Blog';

const x = 10, y = 20;

const output = `<h1>${title}</h1>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut molestiae debitis blanditiis mollitia, asperiores temporibus earum suscipit eaque, exercitationem beatae at? Sequi reiciendis fugiat culpa dolores expedita earum aperiam.
</p>
<div>${x} + ${y} = ${x + y}</div>
<div>Random Number:${Math.random() * 100}</div>
`;

console.log(output);

const output1 = '<h1>' + title + '</h1>';

document.querySelector('div').innerHTML = output;