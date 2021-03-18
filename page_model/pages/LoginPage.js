import {Selector} from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField=Selector("#user-name")
        this.passwordField=Selector("#password")
        this.loginButton=Selector("#login-button")
        this.errorMessage=Selector(".error-button")
    }
}

export default new LoginPage()