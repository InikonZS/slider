var burgerButton = document.querySelector("#burger_button");
var burgerMenu = document.querySelector(".burger_menu");
var burgerShader = document.querySelector("#md-back");
burgerShader.addEventListener("click", burgerShaderClick);

function burgerShaderClick(e){
    burgerMenu.style="";
    burgerShader.style="display:none;";
}

burgerButton.addEventListener("click", burgerButtonClick);
function burgerButtonClick(e){
    burgerMenu.style="display:flex";
    burgerShader.style="display:block; z-index:2;";
}