// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a PARENT command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("clickCard", (link) => {
    cy.contains('.card, [class*="projectCard"]', link).click()
})

Cypress.Commands.add('MethodName', (callbackFunc /*if you have callback func, it will be your functions args*/ ) => {
    cy.get() // etc etc
})

Cypress.Commands.add('selectDropdown', (locator, option) => {
    cy.get(locator).select(option)
})

Cypress.Commands.add('login', (email, name) => {
    cy.get('input[name="email"]').type(email)
    cy.get('input[placeholder="First Name"]').clear().type(name)
    cy.get('.mb-3 + button').realClick()
})
/*
SAME AS A FUNC. ^^^^^^
const selectDropdown = (locator, option) => {
    cy.get(locator).select(option))
    }
*/
//
// -- This is a CHILD command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('logText', {prevSubject: true}, (subject) => {
    const text = subject.text()
    cy.log(text)
})

/* SAME AS 
cy.get('#main_heading).then(($el) => {
    const text = $el.text()
    cy.log(text)
    })
*/

Cypress.Commands.add('haveText', { prevSubject: 'element'}, (subject) => {

})

// cy.get('#main_heading').then((subject, expectedText) => {
//     cy.wrap(subject).should('have.text', expectedText) //To use .should (implicit assertion, you have to use .wrap)
//     expect(subject).to.have.text(expectedText)
// })

// element we checking has an attr 
Cypress.Commands.add('attrValidator', {prevSubject: true}, (subject, attr, expectedValue) => {
    if (expectedValue === null) {
        return cy.wrap(subject).should('have.attr', attr)
    } else {
        return  cy.wrap(subject).should('have.attr', attr, expectedValue)
    }
})




//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//






//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




