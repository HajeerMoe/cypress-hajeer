/// <reference types="cypress"/>
describe('Project 01 - Frontend Form Elements', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/form-elements')
    })

/*
Test Case 01 - Validate the Contact Us information
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the heading is “Contact Us”
Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
Validate the email is “info@techglobalschool.com"
Validate the phone number is “(224) 580-2150”
*/
it(('Test Case 01 - Validate the Contact Us information'), () => {
    cy.get('h1.is-size-3') 
        .should('be.visible')
        .and('have.text', 'Contact Us')

    cy.get('#address')
        .should('be.visible')
        .and('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')

    cy.get('#email')
        .should('be.visible')
        .and('have.text', 'info@techglobalschool.com')
    
    cy.get('#phone-number')
        .should('be.visible')
        .and('have.text', '(224) 580-2150')
})

/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Full name input box is displayed
Validate that the Full name input box is required
Validate that the label of the Full name input box is “Full name *”
Validate that the placeholder of the Full name input box is “Enter your full name”
*/
it(('Test Case 02 - Validate the Full name input box'), () => {
    cy.get('input[placeholder$="name"]')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'Enter your full name')
        .and('have.attr', 'required')

    cy.get('label[for="name"]').should('have.text', 'Full name *')
    })


/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate the label is “Gender *”
Validate that the Gender is required
Validate the options are “Female”, “Male” and “Prefer not to disclose”
Validate the options are clickable and not selected
Click on the “Male” option and validate it is selected while the others are not selected
Click on the “Female” option and validate it is selected while the others are not selected
*/
it (('Test Case 03 - Validate the Gender radio button'), () => {
    const gender = ['Male', 'Female', 'Prefer not to disclose']

    cy.get('.control > .label')                 //Label is Gender *
        .should('have.text', 'Gender *')

    cy.get('.mr-1').first()               //Gender is required
        .should('have.attr', 'required')

    cy.get('.mr-1')
    .each((input, index) => {
        cy.wrap(input)
        .parent()
        .should('contain.text', gender[index])
    })
    
})


/*
Navigate to https://techglobal-training.com/frontend/form-elements
Validate that the Address input box is displayed
Validate that the Address input box is not required
Validate that the label of the Address input box is “Address”
Validate that the placeholder of the Address input box is “Enter your address*”
*/

// it('Test Case 04 - Validate the Address input box', () =>{
    

// })

// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Validate that the Email input box is displayed
// Validate that the Email input box is required
// Validate that the label of the Email input box is “Email *”
// Validate that the placeholder of the Email input box is “Enter your email”
// */
// it('Test Case 05 - Validate the Email input box', () =>{
    

// })

// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Validate that the Phone input box is displayed
// Validate that the Phone input box is not required
// Validate that the label of the Phone input box is “Phone”
// Validate that the placeholder of the Address input box is “Enter your phone number”
// */

// it('Test Case 06 - Validate the Phone input box', () =>{
    

// })


// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Validate that the Message text area is displayed
// Validate that the Message text area is not required
// Validate that the label of the Message text area is “Message”
// Validate that the placeholder of the Message text area is “Type your message here…”
// */
// it('Test Case 07 - Validate the Message text area', () =>{
    
// })


// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Validate the label is “I give my consent to be contacted.”
// Validate that the Consent checkbox is required
// Validate that the Consent checkbox is clickable
// Click on the “I give my consent to be contacted.” checkbox and validate it is selected
// Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
// */
// it('Test Case 08 - Validate the Consent checkbox', () =>{
    
// })

// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Validate the “SUBMIT” button is displayed
// Validate the “SUBMIT” button is clickable
// Validate that the button text is “SUBMIT”
// */
// it('Test Case 09 - Validate the SUBMIT button', () =>{
    
// })
// /*
// Navigate to https://techglobal-training.com/frontend/form-elements
// Enter a first name
// Select a gender
// Enter an address
// Enter an email
// Enter a phone number
// Enter a message
// Select the “I give my consent to be contacted.” checkbox
// Click on the “SUBMIT” button
// Validate the form message “Thanks for submitting!” is displayed under the “SUBMIT” button
// */
// it('Test Case 10 - Validate the form submission', () =>{
    

//     })

})