class Menu{
    constructor (menuSelector, itemSelector, itemCSSClass, itemSelectedCSSClass, onSelect){
        this.menu=document.querySelector(menuSelector);
        this.items=[...document.querySelectorAll(itemSelector)];
        this.selectedCSSClass=itemSelectedCSSClass;
        this.itemCSSClass=itemCSSClass;
        this.currentItem=this.items[0];
        this.onSelect=onSelect;

        this.menu.addEventListener('click', (e)=>{
            console.log(e.target, this.itemCSSClass);
            if ((e.target.classList.contains(this.itemCSSClass))||(this.itemCSSClass=='')){  
                this.select(e.target);
            }    
        });

        this.select();
    }

    select(item){
        if (item) {this.currentItem=item;}
        if (this.currentItem){
            this.items.forEach((it)=>{
                if (it==this.currentItem){
                    it.classList.add(this.selectedCSSClass);
                    if (this.onSelect) {this.onSelect();}
                } else {
                    it.classList.remove(this.selectedCSSClass);
                }
            });
        }
    }

    
}

var portfolioMenu = new Menu(".portfolio_menu", ".portfolio_menu_item", "portfolio_menu_item", "portfolio_menu_item_selected");
var portfolioGallery = new Menu(".portfolio_grid", ".portfolio_grid_item img", "", "portfolio_grid_img_selected");

/*var portfolioMenuItems=[...document.querySelectorAll(".portfolio_menu_item")];
var portfolioMenu=document.querySelector(".portfolio_menu");

function select(item){
    portfolioMenuItems.forEach((it)=>{
        if (it==item){
            it.classList.add("portfolio_menu_item_selected");
        } else {
            it.classList.remove("portfolio_menu_item_selected");
        }
    });
}
var currentItem=portfolioMenuItems[0];
if (currentItem){select(currentItem);}
portfolioMenu.addEventListener('click',(e)=>{
    if (e.target.classList.contains('portfolio_menu_item')){
        currentItem=e.target;   
        select(currentItem);
    }
    
});
*/
