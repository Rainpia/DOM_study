function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;

    const list = document.getElementById('linklist');
    if(!list) return false;

    let slideshow = document.createElement('div');
    slideshow.setAttribute('id','slideshow');

    let preview = document.createElement('img');
    preview.setAttribute('id','preview');
    preview.setAttribute('src','../images_gallery/images/Koala.jpg');
    preview.setAttribute('alt','building blocks of web design');

    let bodyE = document.getElementsByTagName('body')[0];

    slideshow.appendChild(preview);
    bodyE.appendChild(slideshow);

    const links = list.getElementsByTagName('a');
    links[0].onmouseover = function(){
        moveElement('preview', -100, 0, 10)
    }
    links[1].onmouseover = function(){
        moveElement('preview', -200, 0, 10)
    }
    links[2].onmouseover = function(){
        moveElement('preview', -300, 0, 10)
    }
}

addLoadEvent(prepareSlideshow);