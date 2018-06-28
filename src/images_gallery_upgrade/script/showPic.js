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
// 打开新窗口函数
function popUp(winURL){
    window.open(winURL,'popup','width=320,height=480');
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

addLoadEvent(prepareGallery);
