var slider = document.querySelector(".slider");
var slides = document.querySelectorAll(".slide");
var slideContainers = document.querySelectorAll(".slide_container");
var sliderWrapper = document.querySelector(".slider_wrapper")
var buttonLeft = document.querySelector("#button_left");
var buttonRight = document.querySelector("#button_right");
var sliderPosition=0;

buttonLeft.addEventListener("click", buttonClickLeft);
buttonRight.addEventListener("click", buttonClickRight);
var sliderResize = ()=>{
    slider.style.height=(slider.clientWidth/(1020/590))+'px';
    slideContainers.forEach((it)=>{it.style="transform: scale("+(slider.clientWidth/1020)+");"});
}
sliderResize();
window.onresize=(sliderResize);

buttonClickLeft(true);
buttonClickRight(true);
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
            if (e.touches){
                if (e.touches[0]) {
                    move=(e.touches[0].clientX-dragStartEvent.touches[0].clientX);
                }
            } else {
                move=(e.clientX-dragStartEvent.clientX);
            }
            
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
    move=0;
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
function buttonClickLeft(z){
    //if (!lock){
    var dur=400;
    if (z===true) {dur=0;}
    sliderPosition=cycle(sliderPosition+1,slides.length);
    slides[cycle(sliderPosition+1,slides.length)].style = 'transition-property: transform; transition-duration:0ms; transform: translateX('+((-1)*100)+'%);';
    slides[sliderPosition].style = 'transition-property: transform; transition-duration:'+dur+'ms; transform: translateX('+0+'px);';
    slides[cycle(sliderPosition-1,slides.length)].style = 'transition-property: transform; transition-duration:'+dur+'ms; transform: translateX('+100+'%);';
    // }
}
function buttonClickRight(z){
    //if (!lock){
    var dur=400;
    if (z===true) {dur=0;}
    sliderPosition=cycle(sliderPosition-1,slides.length);
    slides[cycle(sliderPosition-1,slides.length)].style = 'transition-property: transform; transition-duration:0ms; transform: translateX('+((1)*100)+'%);';
    slides[sliderPosition].style = 'transition-property: transform; transition-duration:'+dur+'ms; transform: translateX('+0+'px);';
    slides[cycle(sliderPosition+1,slides.length)].style = 'transition-property: transform; transition-duration:'+dur+'ms; transform: translateX('+(-100)+'%);';    
    //}
}





function formSubmit(){
    var frm = document.querySelector('#sendForm');
    frm.subj.value=''; 
    frm.desc.value=''; 
    return false;   
}
function modButtonClick(){
    var modWrp = document.querySelector('#md-wrp');
    var modBack = document.querySelector('#md-back');
    var modW = document.querySelector('#md-w');
    modWrp.style='display:none;';
    modW.style='display:none;';
    modBack.style='display:none;';
}
function submitClick() {
    var frm = document.querySelector('#sendForm');
    if ((frm.name.validity.valid)&&(frm.email.validity.valid)){
        var subj = document.querySelector('#subj');
        var desc = document.querySelector('#desc');
        var modSubj = document.querySelector('#mod-subj');
        var modDesc = document.querySelector('#mod-desc');
        modDesc.textContent=desc.value.length ? desc.value.substr(0,300) : "Без сообщения";
        modSubj.textContent=subj.value.length ? subj.value.substr(0,100) : "Без темы";
        var modWrp = document.querySelector('#md-wrp');
        var modBack = document.querySelector('#md-back');
        var modW = document.querySelector('#md-w');
        modWrp.style='';
        modBack.style='';
        modW.style='';
        //display:none;
    /*
    var par = document.querySelector('.wrapper');
    var el = document.createElement('div');
    el.style = "opacity:60%; width:1020px; height:200px; background-color:#dddddd; position:absolute; z-index:2; top:" + (+window.scrollY + 100) + "px";
    var tex = 'письмо отправлено\n';
    tex += ("тема: " + subj.value + '\n');
    tex += ("описание: " + desc.value.substr(0, 200) + '\n');
    var bt = document.createElement('button');
    bt.textContent = "OK";
    bt.onclick = () => { el.outerHTML = ""; }
    el.textContent = tex;
    el.appendChild(bt);
    par.appendChild(el);*/
    }
    return false;
}


var ton = document.getElementById('tv1');
var tof = document.getElementById('tv1-off');
var ts = 0;
ton.addEventListener("click", () => { ton.style = "display:none"; tof.style = ""; });
tof.addEventListener("click", () => { tof.style = "display:none"; ton.style = ""; });

var tonh = document.getElementById('tv2');
var tofh = document.getElementById('tv2-off');
var tsh = 0;
tonh.addEventListener("click", () => { tonh.style = "display:none"; tofh.style = ""; });
tofh.addEventListener("click", () => { tofh.style = "display:none"; tonh.style = ""; });