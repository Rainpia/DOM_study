function showPic(whichpic){
    const source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    // placeholder.src = source;// 老办法，特定属性才可以使用这种方法直接赋值, 只适应于web文档
    placeholder.setAttribute('src',source);// 通用方法。适用于任务属性，多种环境，多种程序设计语言

    const text = whichpic.getAttribute('title');
    let description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}
function countBodyChildren(){
    const body_element = document.getElementsByTagName('body')[0];
    console.log(body_element.nodeType);
    // nodeType value: 
    // 1 : element node
    // 2 : attribute node
    // 3 : text node

    // 测试结果表明，childNodes属性找出来的节点其实不包括属性节点，至少web文档不包括
    const bodyC = body_element.childNodes;
    for(let i = 0; i<bodyC.length ; i++){
        console.log(bodyC[i].nodeType === 2 ? bodyC[i] : "");
    }
}
window.onload = countBodyChildren;

function popUp(winURL){
    window.open(winURL,'popup','width=320,height=480');
}