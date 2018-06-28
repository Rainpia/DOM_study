function displayAccesskeys(){
    // 检查兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    const links = document.getElementsByTagName('a');
    if(links.length <1 ) return false;

    let akeys = new Array();
    for(let i = 0; i < links.length; i++){
        const current_link =  links[i];
        const accesskey = current_link.getAttribute('accesskey');
        if(!accesskey) continue;
        const text = current_link.lastChild.nodeValue;
        akeys[accesskey] = text;
    }

    // 创建定义列表
    let list = document.createElement('ul');
    for(accesskey in akeys){
        const str = accesskey + ": " + akeys[accesskey];
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(str));

        list.appendChild(li);
    }

    if(list.childNodes.length < 1) return false;

    let header = document.createElement('h2');
    header.appendChild(document.createTextNode('Accesskeys'));

    // 添加到文档
    let bodyE = document.getElementsByTagName('body')[0]
    bodyE.appendChild(header);
    bodyE.appendChild(list);
}

addLoadEvent(displayAccesskeys);