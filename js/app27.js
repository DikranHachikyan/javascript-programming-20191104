'use strict';

const app_config = {
    title: 'My Application',
    url: 'site.com',
    path: '/home/app/'
};

console.log(app_config);

app_config.title = 'Blog';

console.log(app_config);

app_config.imagesPath = './images';

console.log(app_config);

delete app_config.url;

console.log(app_config);

app_config = {
    width:"100px",
    height:"200px"
};