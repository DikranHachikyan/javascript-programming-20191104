//За домашно:
//Автоматична смяна на картинките през определен период (напр. 2-3s) и 
//с възможност за спиране

var doc=document,
    currentItem = 0,
    path = './pics-large/',
    view = doc.querySelector('#view'),
    btnNext = doc.querySelector('#nxt'),
    btnPrev = doc.querySelector('#prv');

    
btnNext.addEventListener('click', function(event){
        //1.
        currentItem++;
        //2.
        if( currentItem >= images.length ){
            currentItem = 0;
        }
        //3.
        var item = images[currentItem];
        //4.
        showItem(view,item);
        // console.log(item);

});


btnPrev.addEventListener('click', function(event){
    currentItem--;

    if( currentItem < 0 ){
        currentItem = images.length - 1;
    }
    
    var item = images[currentItem];

    showItem(view,item);
});


function showItem(gallery,item){
    var h2 = gallery.querySelector('h2'),
        link = gallery.querySelector('a'),
        img  = link.querySelector('img'),
        p = gallery.querySelector('p');
    //4.
    h2.innerHTML = item.title;
    link.setAttribute('title',item.title);
    link.setAttribute('href',item.url);
    img.setAttribute('src', path + item.src);
    img.setAttribute('alt',item.alt);
    p.innerHTML = item.shortinfo;
    // console.log(item);    
}