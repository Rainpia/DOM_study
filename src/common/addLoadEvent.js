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