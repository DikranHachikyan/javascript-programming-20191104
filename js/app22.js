var doc=document,
    item = {
        "url": "http://www.teara.govt.nz/en/video/44471/neil-dawsons-chalice-cathedral-square-christchurch",
        "src": "chch-millennium-monument320x240.png",
        "thumbnail": "chch-millennium-monument72x56.png",
        "title": "Millennium Monument",
        "alt": "Millennium Monument",
        "shortinfo": "Neil Dawson's magnificent Chalice sculpture is located in Christchurch's Cathedral Square.Chalice celebrates the new millennium and the 150th Anniversary of the founding of Christchurch",
        "info": "Neil Dawson's magnificent Chalice sculpture is located in Christchurch's Cathedral Square.Chalice celebrates the new millennium and the 150th Anniversary of the founding of Christchurch and Canterbury by the Canterbury Association. Chalice is a permanent sculpture with a primary hexagonal steel structure and a solid steel conical base. 18 metres high, 2 metres in diameter at ground level and 8.5 metres in diameter at the top, its shape mirrors the spire of Christchurch Cathedral."
    },
  path='./pics-large/',
  btnShow = doc.querySelector('#show');


  btnShow.addEventListener('click',function(event){
    var view = doc.querySelector('#view'),
        h2 = view.querySelector('h2'),
        link = view.querySelector('a'),
        img = view.querySelector('a img'),
        p = view.querySelector('p');

        h2.innerHTML = item.title;
        
        link.setAttribute('href',item.url);
        link.setAttribute('title',item.title);

        img.setAttribute('src', path + item.src);
        img.setAttribute('alt',item.alt);

        p.innerHTML = item.shortinfo;

  });

