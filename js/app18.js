
var imageSuffix = '-320x240.jpg',
    defaultImage = './pics-large/pic1-320x240.jpg',
    doc = document,
    img = doc.querySelectorAll('#gallery li img'),
    viewImg = doc.querySelector('#view img');

img.forEach(function(item){
    item.addEventListener('mouseover', function(event){
        var imgSrc = item.getAttribute('src');
        //replace small -> large
        imgSrc = imgSrc.replace('small','large');

        //search for .
        var pos = imgSrc.lastIndexOf('.');
        imgSrc = imgSrc.slice(0,pos);
        viewImg.setAttribute('src', imgSrc + imageSuffix);

        // console.log('src:' + imgSrc + ' pos:' + pos);
    });

    item.addEventListener('mouseout',function(event){
        viewImg.setAttribute('src',defaultImage);
        // console.log('set default image:',defaultImage);
    });
});