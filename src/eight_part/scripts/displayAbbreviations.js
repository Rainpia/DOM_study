function displayAbbreviations(){
    // 检查兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    const abbreviations = document.getElementsByTagName('abbr');
    if(abbreviations.length <1 ) return false;

    // 取得缩略词
    const defs = new Array();
    for(let i = 0; i < abbreviations.length; i++){
        const current_abbr =  abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue;// 避免IE6之前的浏览器不支持abbr的情况
        const definition = current_abbr.getAttribute('title');
        const key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    // 创建定义列表
    let dl = document.createElement('dl');
    for(key in defs){
        let dt = document.createElement('dt');
        let dd = document.createElement('dd');

        dt.appendChild(document.createTextNode(key));
        dd.appendChild(document.createTextNode(defs[key]));

        dl.appendChild(dt);
        dl.appendChild(dd);
    }

    if(dl.childNodes.length < 1) return false;

    let header = document.createElement('h2');
    header.appendChild(document.createTextNode('Abbreviations'));

    // 添加到文档
    let bodyE = document.getElementsByTagName('body')[0]
    bodyE.appendChild(header);
    bodyE.appendChild(dl);

}

addLoadEvent(displayAbbreviations);