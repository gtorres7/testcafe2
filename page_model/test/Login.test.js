import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import ShoppingPage from "../pages/ShoppingPage"
import CheckoutPage from "../pages/CheckoutPage"

fixture("Login feature testing")
    .page`https://www.saucedemo.com/`

    test("Login with a valid user",async t =>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
        await t.expect(ProductsPage.pageTitle.exists).ok()

    })
   
    test("Login with an invalid user", async t =>{
        await t
            .typeText(LoginPage.usernameField,"LoremIpsum")
            .typeText(LoginPage.passwordField,"Fierro")
            .click(LoginPage.loginButton)
        await t.expect(LoginPage.errorMessage.exists).ok()
    })

    test("Logout from products page",async t =>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.burgerMenu)
            .click(ProductsPage.logout)
        await t.expect(LoginPage.loginButton.exists).ok()    
    })

    test("Navigate to the shopping cart",async t=>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.shoppingButton)
 
      //  await t.expect(ShoppingPage.pageTitle.exists).ok()
        await t.expect(ShoppingPage.pageTitle.innerText).eql("Your Cart")
    })

    test("Add a single item to the shopping cart", async t=>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.buyItem)
        await t.expect(ProductsPage.itemsCounter.innerText).eql("1");    

    })
    
    test("Add multiple items to the shopping cart", async t=>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.buyItem)
            .click(ProductsPage.buyItem)
            .click(ProductsPage.buyItem)
        await t.expect(ProductsPage.itemsCounter.innerText).eql("3");    

    })

    test("Continue with missing mail information", async t=>{
        await t 
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.shoppingButton)
            .click(ProductsPage.checkoutButton)
            .click(CheckoutPage.continueButton)
        await t.expect(CheckoutPage.errorButton.exists).ok()
    })

    test("Fill user's Information", async t=>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.shoppingButton)
            .click(ProductsPage.checkoutButton)
            .typeText(CheckoutPage.firstnameInput,"Test Firstname")
            .typeText(CheckoutPage.lastnameInput,"Test Lastname")
            .typeText(CheckoutPage.postalcodeInput,"5604")
        await t.expect(CheckoutPage.pageTitle.innerText).eql("Checkout: Your Information")
     })

    //  test("Final order items", async t =>{
    //     await t
    //     .typeText(LoginPage.usernameField,"standard_user")
    //     .typeText(LoginPage.passwordField,"secret_sauce")
    //     .click(LoginPage.loginButton)
            
    //     //add this into a function 
    //         .click(ProductsPage.shoppingButton)
    //         .click(ProductsPage.checkoutButton)
    //         .click(ProductsPage.shoppingButton)
    //         .click(ProductsPage.checkoutButton)
    //         .click(ProductsPage.shoppingButton)
    //         .click(ProductsPage.checkoutButton)
            
    //     .typeText(CheckoutPage.firstnameInput,"Test Firstname")
    //     .typeText(CheckoutPage.lastnameInput,"Test Lastname")
    //     .typeText(CheckoutPage.postalcodeInput,"5604")
    //  })

    test("Final order items", async t=>{
        await t
            .typeText(LoginPage.usernameField,"standard_user")
            .typeText(LoginPage.passwordField,"secret_sauce")
            .click(LoginPage.loginButton)
            .click(ProductsPage.shoppingButton)
            .click(ProductsPage.checkoutButton)
            .typeText(CheckoutPage.firstnameInput,"Test Firstname")
            .typeText(CheckoutPage.lastnameInput,"Test Lastname")
            .typeText(CheckoutPage.postalcodeInput,"5604")
            .click(CheckoutPage.continueButton)
            .click(CheckoutPage.finishButton)
        await t.expect(CheckoutPage.pageTitle.innerText).eql("Finish")    
        })