// common

// 可以添加多个load事件函数
function addLoadEvent(func){
    const oldonload = window.onload;
    if(typeof window.onload !== 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }

}

function insertAfter(newElement, targetElement){
    // let parent = targetElement.parentNode;
    // if(parent.lastChild === targetElement){
    //     parent.appendChild(newElement);
    // }else{
    //     parent.insertBefore(newElement,targetElement.nextSibling);
    // }
}

function addClass(element, value){
    if(!element.className){
        element.className  = value;
    }else{
        newClassName =  element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function moveElement(elementId, final_x, final_y, interval){
    if(!document.getElementById) return false;
    let message = document.getElementById(elementId);
    if(!message) return false;
    if(!message.style.left){
        message.style.left = "0px";
    }
    if(!message.style.top){
        message.style.top = "0px";
    }
    let xpos = parseInt(message.style.left);
    let ypos = parseInt(message.style.top);

    if(message.movement){
        clearTimeout(message.movement);
    }
    if(xpos === final_x && ypos === final_y){
        return true;
    }

    if(xpos < final_x){
        const dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if(xpos > final_x){
        const dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if(ypos < final_y){
        const dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if(ypos > final_y){
        const dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    message.style.left = xpos +  'px';
    message.style.top = ypos + 'px';
    const repeat = `moveElement('${elementId}', ${final_x}, ${final_y}, ${interval})`;
    message.movement = setTimeout(repeat, interval);
}

// home

function highlightPage(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;

    let header = document.getElementsByTagName("header");
    if(header.length === 0) return false;
    let navs = header[0].getElementsByTagName('nav');
    if(navs.length === 0) return false;

    let links = navs[0].getElementsByTagName('a');
    let linkurl;
    for(let i=0;i<links.length;i++){
        linkurl = links[i].getAttribute('href');
        if(window.location.href.indexOf(linkurl) !== -1){
            links[i].className = 'here';
            let linktext = links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute('id', linktext);
        }
    }
}

function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;

    const intro = document.getElementById('intro');
    if(!intro) return false;

    let slideshow = document.createElement('div');
    slideshow.setAttribute('id','slideshow');

    let preview = document.createElement('img');
    preview.setAttribute('id','preview');
    preview.setAttribute('src','../images_gallery/images/Koala.jpg');
    preview.setAttribute('alt','building blocks of web design');

    slideshow.appendChild(preview);
    insertAfter(slideshow, intro);


    const links = intro.getElementsByTagName('a');
    let destination;
    for(let i=0;i<links.length;i++){
        links[i].onmouseover = function(){
            destination = this.getAttribute('href');
            if(destination.indexOf('index.html') !== -1){
                moveElement('preview', 0, 0 , 5);
            }
            if(destination.indexOf('about.html') !== -1){
                moveElement('preview', -150, 0 , 5);
            }
            if(destination.indexOf('photos.html') !== -1){
                moveElement('preview', -300, 0 , 5);
            }
            if(destination.indexOf('live.html') !== -1){
                moveElement('preview', -450, 0 , 5);
            }
            if(destination.indexOf('contact.html') !== -1){
                moveElement('preview', -600, 0 , 5);
            }
        }
    }
}

// about


function showSection(id){
    let sections = document.getElementsByTagName('section');
    for(let i=0;i<sections.length;i++){
        if(sections[i].getAttribute("id") !== id){
            sections[i].style.display = 'none';
        }else{
            sections[i].style.display = 'block';
        }
    }
}

function prepareInternalnav(){
    if( !document.getElementById) return false;
    if( !document.getElementsByTagName) return false;
    var article = document.getElementsByTagName('article');
    if( article.length == 0 ) return false;
    var nav = article[0].getElementsByTagName('nav');
    if( nav.length == 0 ) return false;
    var links = nav[0].getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
        var sectionId = links[i].getAttribute('href').split('#')[1];
        if( !document.getElementById(sectionId)) continue;
        document.getElementById(sectionId).style.display = "none";
        links[i].destination = sectionId;
        links[i].onclick = function(){
            showSection(this.destination);
            return false;
        }
    }
    
}

// photos

// 展示图片函数
function showPic(whichpic){
    const source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    // placeholder.src = source;// 老办法，特定属性才可以使用这种方法直接赋值, 只适应于web文档
    if(!placeholder) return false;
    placeholder.setAttribute('src',source);// 通用方法。适用于任务属性，多种环境，多种程序设计语言

    let description = document.getElementById('description');
    if(description){
        const text = whichpic.getAttribute('title') || "";
        if(description.firstChild.nodeType === 3){
            description.firstChild.nodeValue = text;
        }
    }

    return true;
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    
    let img = document.createElement('img');
    img.setAttribute('id','placeholder');
    img.setAttribute('src','../images_gallery/images/Jellyfish.png');
    img.setAttribute('alt','my image gallery');

    let p = document.createElement('p');
    p.setAttribute('id','decription');

    let text = document.createTextNode('A desert display');

    p.appendChild(text);

    // method 2
    const gallery = document.getElementById('imagegallery');
    insertAfter(p,gallery);
    insertAfter(img,p);
    
}

// 准备事件函数
function prepareGallery(){
    // 平稳退化检查点
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;

    const imagegallery = document.getElementById('imagegallery');
    if(!imagegallery) return false;

    let links = imagegallery.getElementsByTagName('a') || [];
    for(let i = 0; i<links.length ; i++){
        links[i].onclick = function (){
            return !showPic(this);
        }
    }
}

// contact
function focusLabels(){
    if(!document.getElementsByTagName) return false;
    let labels = document.getElementsByTagName('label');
    for(let i = 0; i<labels.length ; i++){
        if(!labels[i].getAttribute('for')) continue;
        labels[i].onclick = function (){
            const id = this.getAttribute('for');
            if(!document.getElementById('id')) return false;
            let element = document.getElementById(id);
            element.focus();
        }
    }
}

function resetFields(whichform){
    if(Modernizr.input.placeholder) return;
    for(let i = 0; i<whichform.length ; i++){
        let element = whichform[i];
        if(element.type === 'submit') continue;
        let check = element.placeholder || element.getAttribute('placeholder');
        if(!check) continue;
        element.onfocus = function(){
            let text = this.placeholder || this.getAttribute('placeholder');
            if(this.value === text){
                this.className = '';
                this.value = "";
            }
        }
        element.onblur = function(){
            if(this.value === ''){
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder');
            }
        }
        element.onblur();
    }
}

function isFilled(filed){
    if(filed.value.replace(' ','').length === 0) return false;
    const placeholder = filed.placeholder || filed.getAttribute('placeholder');
    return (filed.value !== placeholder);
}

function isEmail(filed){
    return (filed.value.indexOf('@') !== -1 && filed.value.indexOf('.') !== -1);
}

function validateForm(whichform){
    for(let i = 0; i<whichform.length ; i++){
        let element = whichform[i];
        if(element.required === 'required'){
            if(isFilled(element)){
                alert('Please fill in the ' + element.name + 'field.')
                return false;
            }
        }
        if(element.type === 'email'){
            if(!isEmail(element)){
                alert('The ' + element.name + 'field must be a valid email address.')
                return false;
            }
        }
    }
}

function prepareForm(){
    for(let i = 0; i<document.forms.length ; i++){
        const thisform = document.forms[i];
        resetFields(thisform);
        thisform.onsubmit = function(){
            return validateForm(this);
        }
    }
}

addLoadEvent(highlightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(prepareForm);

