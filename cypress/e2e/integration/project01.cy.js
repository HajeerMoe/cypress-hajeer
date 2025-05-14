/// <reference types="cypress"/>

describe('Project 01 - Frontend Form Elements', () => {
    beforeEach(() => {
      cy.visit('https://techglobal-training.com/frontend/form-elements')
    }) 
  
//     it('Test Case 01 - Validate the Contact Us information', () => {
//       cy.get('h1.is-size-3')
//         .should('be.visible')
//         .and('have.text', 'Contact Us')
  
//       cy.get('#address')
//         .should('be.visible')
//         .and('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
  
//       cy.get('#email')
//         .should('be.visible')
//         .and('have.text', 'info@techglobalschool.com')
  
//       cy.get('#phone-number')
//         .should('be.visible')
//         .and('have.text', '(224) 580-2150')
//     })
  
//     it('Test Case 02 - Validate the Full name input box', () => {
//       cy.get('input[placeholder="Enter your full name"]')
//         .should('be.visible')
//         .and('have.attr', 'required')
  
//       cy.get('label[for="name"]')
//         .should('have.text', 'Full name *')
//     })
  
//     it('Test Case 03 - Validate the Gender radio button', () => {
//     const gender = ['Female', 'Male', 'Prefer not to disclose']

//   cy.get('.control > .label')
//     .should('have.text', 'Gender *')

//   cy.get('.mr-1').first()
//     .should('have.attr', 'required')

//   cy.get('.mr-1').eq(1).check().should('be.checked')
//   cy.get('.mr-1').eq(0).should('not.be.checked')
//   cy.get('.mr-1').eq(2).should('not.be.checked')

//   cy.get('.mr-1').eq(0).check().should('be.checked')
//   cy.get('.mr-1').eq(1).should('not.be.checked')
//   cy.get('.mr-1').eq(2).should('not.be.checked')

//  })
  
it('Test Case 04 - Validate the Address input box', () => {
    cy.get('input[placeholder="Enter your address"]')
    .should('be.visible')
    .and('not.have.attr', 'required')
  
    cy.get('label[for="address"]')
        .should('have.text', 'Address')
    })

})
