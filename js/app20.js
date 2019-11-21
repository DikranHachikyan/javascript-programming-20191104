var doc = document,
    btnNext = doc.querySelector('#nxt'),
    btnPrev = doc.querySelector('#prv'),
    btnAuto = doc.querySelector('#btnAuto'),
    gallery = doc.querySelector('#gallery'),
    autoID = 0;

    function showNextImage(event){
    var li = doc.querySelector('#gallery li:first-child');
    gallery.append(li);
}

btnNext.addEventListener('click',showNextImage);


btnPrev.addEventListener('click', function(event){
    var li = doc.querySelector('#gallery li:last-child');
    gallery.prepend(li);
});

btnAuto.addEventListener('click',function(event){
    var target = event.target;

    // console.log('event:', event);
    if( autoID > 0 ){ // автоматично сменя картинките
        window.clearInterval(autoID);
        autoID = 0;//!!
    }
    else{
        autoID = window.setInterval(showNextImage,2000,event);
        
    }
    target.innerHTML = (autoID > 0 )? 'Stop':'Auto';
});

