function positionMessage(){
    if(!document.getElementById) return false;
    let message = document.getElementById('message');
    if(!message) return false;
    message.style.position = 'absolute';
    message.style.top = '100px';
    message.style.left = '50px';
    moveElement('message', 200, 100, 10);

    let message2 = document.getElementById('message2');
    if(!message2) return false;
    message2.style.position = 'absolute';
    message2.style.top = '50px';
    message2.style.left = '100px';
    moveElement('message2', 200, 100, 10);
}

function moveMessage(){
    if(!document.getElementById) return false;
    let message = document.getElementById('message');
    if(!message) return false;
    let xpos = parseInt(message.style.left);
    let ypos = parseInt(message.style.top);

    if(xpos === 200 && ypos === 100){
        clearTimeout(movement);
        return true;
    }

    if(xpos < 200){
        xpos++;
    }
    if(xpos > 200){
        xpos--;
    }
    if(ypos < 100){
        ypos++;
    }
    if(ypos > 100){
        ypos--;
    }
    message.style.left = xpos +  'px';
    message.style.top = ypos + 'px';
    movement = setTimeout(moveMessage, 10);
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
addLoadEvent(positionMessage);