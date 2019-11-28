'use strict';

function createUser(user,plan='basic'){
    if( typeof user !== 'string'){
        throw Error(`Invalid value for user (${user})`);
    }

    console.log(`User:${user} plan:${plan}`);
}

let user,
    plan;

createUser('Anna','pro');
createUser('Maria',plan);
createUser('Florian',null);
createUser('Markus');
//trows error
// createUser(user,'enterprise');

//функция с лош дизайн
function show(a,b=1,c){
    console.log(`a=${a} b=${b} c=${c}`);
}

// show(10,c=30);
