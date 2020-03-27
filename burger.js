var burgerButton = document.querySelector("#burger_button");
var burgerMenu = document.querySelector(".burger_menu");
var burgerShader = document.querySelector("#md-back");
burgerShader.addEventListener("click", burgerShaderClick);
var menuOpened=0;

function burgerShaderClick(e){
    burgerMenu.style="";
    burgerShader.style="display:none;";
    burgerButton.classList.remove("burger_selected");
    modButtonClick();
    document.querySelector(".logo").style="";
    menuOpened=0;
}

burgerButton.addEventListener("click", burgerButtonClick);
function burgerButtonClick(e){
    if (menuOpened){
        burgerShaderClick();
    } else {
        burgerMenu.style="display:flex";
        burgerShader.style="display:block; z-index:2;";
        burgerButton.classList.add("burger_selected");
        document.querySelector(".logo").style="justify-content:flex-start;";
        menuOpened=1;
    }
}


var el1 = document.querySelector('.header_menu_item a');
el1.mySelected = true;
el1.style = "color: #f06c64;";
document.addEventListener('scroll', (e) => {
    var els = document.querySelectorAll('.anch');
    var eli = document.querySelectorAll('.header_menu_item a');
    var elib = document.querySelectorAll('.burger_menu_item a');
    var ys = [];
    els.forEach((it) => { ys.push(it.getBoundingClientRect().top) });
    //console.log(eli[2].ssss + ' ' + ys[2]);
    var im = 0;
    ys.forEach((it, i) => {
        if ((+it < 5) && (im < i)) { im = i; }
        eli[i].mySelected = 0;
        eli[i].style = "";
        elib[i].style = "";
       /* if (i!=0){
            eli[i].mySelected = false;
            eli[i].style='';
        } else {
            eli[i].mySelected = true;
            eli[i].style = "color: #f06c64;"; 
        }*/
    });

    if (window.scrollY-window.scrollMaxY>-10){
        eli[eli.length-1].mySelected = 1;
        eli[eli.length-1].style = "color: #f06c64;"; 
        elib[eli.length-1].style = "color: #f06c64;";   
    } else {
        eli[im].mySelected = 1;
        eli[im].style = "color: #f06c64;";
        elib[im].style = "color: #f06c64;";
    }
});