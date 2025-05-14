/// <reference types="cypress"/>

describe('Project 02 - Frontend Form Elements', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/login')
    })

it(('Test Case 01 - Validate the login form'), () => {
    cy.get('#username')
        .should('be.visible')
        .and('not.have.attr', 'required')

    cy.get('label[for="username"]')
        .should('have.text', 'Please enter your username')
    
    cy.get('#password')
        .should('be.visible')
        .and('not.have.attr', 'required')

    cy.get('label[for="password"]')
        .should('have.text', 'Please enter your password')

    cy.get('#login_btn')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', 'LOGIN')

    cy.get('form > div > a[href="/frontend/login"]')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.text', "Forgot Password?")

})

function login() {
    cy.get('#username').type('TechGlobal') 
    cy.get('#password').type('Test1234')
    cy.get('#login_btn').realClick()
}

function forgotPassword() {
    cy.get('form > div > a[href="/frontend/login"]').realClick()
}
it('Test Case 02 - Validate the valid login', () => {
/*Enter the username as “TechGlobal”
Enter the password as “Test1234”
Click on the “LOGIN” button
Validate the success message is displayed as “You are logged in”
Validate the logout button displayed with the text “LOGOUT” */
    login()

    cy.get('#success_lgn')
        .should('have.text', 'You are logged in')

    cy.get('#logout')
        .should('be.visible')
        .and('have.text', 'LOGOUT')
})

it('Test Case 03 - Validate the logout', () => {
    login()
    cy.get('#logout').realClick()

    cy.get('.pt-6').should('be.visible')
})

it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
    forgotPassword()
    cy.get('#modal_title').should('be.visible')
    cy.get('.delete').should('be.visible')
    cy.get('#email').should('be.visible')
    cy.get('label[for="email"]')
        .should('have.text', 'Enter your email address and we\'ll send you a link to reset your password. ')
    cy.get('#submit')
        .should('be.visible')
        .and('be.enabled')
        .and('have.text', 'SUBMIT')
})

it('Test Case 05 - Validate the Reset Password modal close button', () => {
    forgotPassword()
    cy.get('.modal-card').should('be.visible')
    cy.get('.delete').realClick()
    cy.get('.modal-card').should('not.exist')
})


it('Test Case 06 - Validate the Reset Password form submission', () => {
    forgotPassword()
    cy.get('#email').type('hajeermoe@gmail.com')
    cy.get('#submit').realClick()
    cy.get('#confirmation_message')
        .should('be.visible')
        .and('have.text', 'A link to reset your password has been sent to your email address.')
})

it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
    cy.get('#login_btn').realClick()
    cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
})


it('Test Case 08 - Validate the invalid login with the wrong username', () => {
    cy.get('#username').type('John')
    cy.get('#password').type('Test1234')
    cy.get('#login_btn').realClick()
    cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
})

it('Test Case 09 - Validate the invalid login with the wrong password', () => {
    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('1234')
    cy.get('#login_btn').realClick()
    cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Password entered!')
})
it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
    cy.get('#username').type('John')
    cy.get('#password').type('1234')
    cy.get('#login_btn').realClick()
    cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
})

})