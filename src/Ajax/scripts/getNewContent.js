function getNewContent(){
    let request = getHTTPObject();
    if(request){
        request.open('GET','example.txt',true);
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                alert('response done');
                let para = document.createElement('p');
                let text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById('new').appendChild(para);
                console.log(request.responseXML);
            }
        }
        request.send(null);
    }else{
        alert('Sorry, your browser does not support XMLHttpRequest.');
    }
    alert('fun done');
}

addLoadEvent(getNewContent);