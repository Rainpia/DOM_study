function displayCitations(){
    // 检查兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    const blockquotes = document.getElementsByTagName('blockquote');
    if(blockquotes.length <1 ) return false;

    // 取得文献来源链接
    for(let i = 0; i < blockquotes.length; i++){
        const current_blackq =  blockquotes[i];
        const cite = current_blackq.getAttribute('cite');
        if(!cite) continue;
        const quoteChildren = current_blackq.getElementsByTagName('*');
        if(quoteChildren.length < 1) continue;
        const elem = quoteChildren[quoteChildren.length - 1];

        let link = document.createElement('a');
        link.appendChild(document.createTextNode('source'));
        link.setAttribute('href',cite);

        let sup = document.createElement('sup');
        sup.appendChild(link);

        elem.appendChild(sup);
    }
}

addLoadEvent(displayCitations);