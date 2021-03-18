import {Selector} from "testcafe"

class ProductsPage{
    constructor(){
        this.pageTitle = Selector(".product_label")
        this.burgerMenu= Selector("#react-burger-menu-btn")
        this.logout=Selector ("#logout_sidebar_link")
        this.shoppingButton= Selector(".shopping_cart_link")
        this.buyItem=Selector(".btn_primary.btn_inventory")
        this.itemsCounter=Selector(".fa-layers-counter.shopping_cart_badge")
        this.checkoutButton = Selector(".btn_action.checkout_button")
    }
}
export default new ProductsPage()