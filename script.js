var slider = document.querySelector(".slider");
var slides = document.querySelectorAll(".slide");
var sliderWrapper = document.querySelector(".slider_wrapper")
var buttonLeft = document.querySelector("#button_left");
var buttonRight = document.querySelector("#button_right");
var sliderPosition=0;

buttonLeft.addEventListener("click", buttonClickLeft);
buttonRight.addEventListener("click", buttonClickRight);
var sliderResize = ()=>{slider.style.height=(slider.clientWidth/2)+'px';}
sliderResize();
window.onresize=(sliderResize);

buttonClickLeft();
buttonClickRight();
var dragStartEvent;
var move=0;
var mouseDownHandler = (e)=>{
    if (!e.target.classList.contains("button")){
        dragStartEvent=e;
    } else {move=0;}
};
slider.addEventListener('mousedown', mouseDownHandler);
slider.addEventListener('touchstart', mouseDownHandler);

var mouseMoveHandler = (e)=>{
        if (dragStartEvent){
            move=(e.clientX-dragStartEvent.clientX);
            
            slides[cycle(sliderPosition-1,slides.length)].style = 'transform: translateX('+(move+slides[cycle(sliderPosition,slides.length)].clientWidth)+'px);';
            slides[cycle(sliderPosition,slides.length)].style = 'transform: translateX('+(move)+'px);';
            slides[cycle(sliderPosition+1,slides.length)].style = 'transform: translateX('+(move-slides[cycle(sliderPosition,slides.length)].clientWidth)+'px);';
        }
}
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('touchmove', mouseMoveHandler);

var mouseUpHandler = (e)=>{
    if (dragStartEvent) {
        if (move<-100){ 
            buttonClickRight();
        } else {
            if (move>100){ 
                buttonClickLeft();
            } else {
                sliderRefresh();
            }
        }
         
    }
    dragStartEvent=undefined; 
}

document.addEventListener('mouseup',mouseUpHandler);
document.addEventListener('touchend',mouseUpHandler);
document.addEventListener('touchcancel',mouseUpHandler);

document.addEventListener('drag',(e)=>{ 
    sliderRefresh();
    //slides[cycle(sliderPosition,slides.length)].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+(0)+'px);';
    dragStartEvent=undefined; 
});
document.addEventListener('dragstart',(e)=>{ 
    e.preventDefault();
});

function cycle(pos,max){
    if (pos>=max){pos=0;}
    if (pos<0){pos=max-1;}
    return pos;
}
function sliderRefresh(){
    slides[cycle(sliderPosition+1,slides.length)].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+((-1)*100)+'%);';
    slides[sliderPosition].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+0+'px);';
    slides[cycle(sliderPosition-1,slides.length)].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+100+'%);';
}
function buttonClickLeft(){
    //if (!lock){
    sliderPosition=cycle(sliderPosition+1,slides.length);
    slides[cycle(sliderPosition+1,slides.length)].style = 'transition-property: transform; transition-duration:0ms; transform: translateX('+((-1)*100)+'%);';
    slides[sliderPosition].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+0+'px);';
    slides[cycle(sliderPosition-1,slides.length)].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+100+'%);';
    // }
}
function buttonClickRight(){
    //if (!lock){
    sliderPosition=cycle(sliderPosition-1,slides.length);
    slides[cycle(sliderPosition-1,slides.length)].style = 'transition-property: transform; transition-duration:0ms; transform: translateX('+((1)*100)+'%);';
    slides[sliderPosition].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+0+'px);';
    slides[cycle(sliderPosition+1,slides.length)].style = 'transition-property: transform; transition-duration:400ms; transform: translateX('+(-100)+'%);';    
    //}
}