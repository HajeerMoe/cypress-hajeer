

export class LoginPage extends BasePage {

    /* Locators */
    getUsernameField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login-btn')
    }
    
    getSuccessfulLogin() {
        return cy.get('#success-lgn')
    }

    getFailtureLogin() {
        return cy.get('#error_message')
    }


    /* Methods */
    clickLoginButton() {
        this.getLoginButton().click()
    }



    /**
     * This methods can be used in login Login Page.
     * 
     * @param {string} username 
     * @param {string} password 
     * 
     * @example
     * userLogin('Tech', 'Global')
     */
    userLogin(username, password) {
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
        this.clickLoginButton
    }
}

