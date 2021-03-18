import {Selector} from "testcafe"

class CheckoutPage{
    constructor(){
        this.pageTitle = Selector(".subheader")
        this.firstnameInput= Selector("#first-name")
        this.lastnameInput=Selector("#last-name")
        this.postalcodeInput=Selector("#postal-code")
        this.continueButton=Selector(".btn_primary.cart_button")
        this.errorButton=Selector(".error-button")
        this.finishButton=Selector(".btn_action.cart_button")
        
    }
}
export default new CheckoutPage()