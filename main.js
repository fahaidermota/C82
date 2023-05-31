canvas=document.getElementById("myCanvas");
pen=canvas.getContext("2d");
mouse_event="";
previous_mx="";
previous_my="";


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="md";
    console.log(mouse_event);
}
canvas.addEventListener("mouseleave",myml);
function myml(e){
    mouse_event="ml";
    console.log(mouse_event);
}
canvas.addEventListener("mouseup",mymp);
function mymp(e){
    mouse_event="mu";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove",mymm);
function mymm(e){
    current_mousex=e.clientX-canvas.offsetLeft;
    current_mousey=e.clientY-canvas.offsetTop;
    if (mouse_event=="md") {
        pen.beginPath();
        pen.strokeStyle="green";
        pen.lineWidth=2;
        pen.arc(current_mousex,current_mousey,30,0,2*Math.PI)
        pen.stroke();
    }
    previous_mx=current_mousex;
    previous_my=current_mousey;
}

