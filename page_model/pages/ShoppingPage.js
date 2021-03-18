import {Selector} from "testcafe"

class ShoppingPage{
    constructor(){
        this.pageTitle=Selector(".subheader")
        
    }
}

export default new ShoppingPage()