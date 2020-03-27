class Menu{
    constructor (menuSelector, itemSelector, itemCSSClass, itemSelectedCSSClass, onSelect){
        this.menu=document.querySelector(menuSelector);
        this.items=[...document.querySelectorAll(itemSelector)];
        this.selectedCSSClass=itemSelectedCSSClass;
        this.itemCSSClass=itemCSSClass;
        this.currentItem=this.items[0];
        this.onSelect=onSelect;

        this.menu.addEventListener('click', (e)=>{
            if ((e.target.classList.contains(this.itemCSSClass))||(this.itemCSSClass=='')){  
                this.select(e.target);
            }    
        });

        this.select();
    }

    select(item){
        var reselect=false;
        if (item) {
            if (this.currentItem==item) {
                reselect=true
            } else {
                this.currentItem=item;
            }
        }
        if (this.currentItem){
            this.items.forEach((it)=>{
                if (it==this.currentItem){
                    it.classList.add(this.selectedCSSClass);
                    if (this.onSelect) {
                        this.onSelect(reselect);
                    }
                } else {
                    it.classList.remove(this.selectedCSSClass);
                }
            });
        }
    } 
}

var portfolioGallery = new Menu(
    ".portfolio_grid", 
    ".portfolio_grid_item img", 
    "", 
    "portfolio_grid_img_selected"
);

var portfolioMenu = new Menu(
    ".portfolio_menu", 
    ".portfolio_menu_item", 
    "portfolio_menu_item", 
    "portfolio_menu_item_selected", 
    (reselect)=>{
        if (!reselect){
            galleryShuffle();
            portfolioGallery = new Menu(
                ".portfolio_grid", 
                ".portfolio_grid_item img", 
                "", 
                "portfolio_grid_img_selected"
            );
        }
    }
);


function makeGalleryItem(src){
    var el=document.createElement('div');
    el.className="portfolio_grid_item";
    var img=document.createElement('img');
    img.src=src;
    img.alt="";
    el.appendChild(img);
    return el; 
}

function galleryShuffle(){
    var grid=document.querySelector(".portfolio_grid");
    grid.innerHTML="";
    for (let i=0; i<12; i++){
        let rand=Math.trunc(Math.random()*12)+1;
        grid.appendChild(makeGalleryItem("assets/portfolio/i"+(rand)+".png"));
    }
}

