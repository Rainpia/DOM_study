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