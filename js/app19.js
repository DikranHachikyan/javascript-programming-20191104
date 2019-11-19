
var imageSuffix = '-320x240.jpg',
    path = './pics-large/',
    defaultImage = path + 'pic1-320x240.jpg',
    doc = document,
    img = doc.querySelectorAll('#gallery li img'),
    viewImg = doc.querySelector('#view img');

img.forEach(function(item){
    item.addEventListener('mouseover', function(event){
        var imgSrc = item.getAttribute('data-image');
        viewImg.setAttribute('src',path + imgSrc);
    });

    item.addEventListener('mouseout',function(event){
        viewImg.setAttribute('src',defaultImage);
        // console.log('set default image:',defaultImage);
    });
});