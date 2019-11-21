//HW: Преработете примера, така че currentImage да се променя на
//    на случаен принцип с Math.random() и прилятели
var doc = document,
    banner = doc.querySelector('#banner img'),
    images = ['pic1-320x240.jpg',
              'pic2-320x240.jpg',
              'pic3-320x240.jpg',
              'pic4-320x240.jpg',
              'pic5-320x240.jpg'],
    path = './pics-large/',
    currentImage = 0;

window.setInterval(function(){
    //увеличаваме брояча с 1
    //проверка до къде е стигнал брояча
    currentImage = ( currentImage >= images.length-1)? 0:++currentImage;
    // console.log('i:', currentImage);
    //смяна на картинаката
    banner.setAttribute('src', path + images[currentImage]);
},2000)