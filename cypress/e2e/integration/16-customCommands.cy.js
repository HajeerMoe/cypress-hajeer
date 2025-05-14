/// <reference types="cypress"/>

describe("Cypress Custom Commands", () => {
    beforeEach(() => {
      cy.visit("https://www.techglobal-training.com/frontend");
      cy.clickCard("HTML Elements");
    });
  
    it("Parent Command", () => {
      /*
      Parent Commands: - We can only use right after cy. 
      cy.get()
      cy.url()
      cy.title()
      cy.visit()
      cy.wrap()
      cy.on()
      cy.window()
      */

      cy.selectDropdown('#company_dropdown1', 'Apple') // See commands.js file
      //You can only use selectDropdown if the web el. tag is <select> bc in commands.js we use .select() method

      cy.login('email@gmail.com', 'MoeMoney')

    });


    it('Child Commands', () => {
        /*
        .should()
        .find()
        .click()
        all the action methods
        */

        cy.get('#main_heading').logText()
        cy.get('#main_heading').haveText('HTML Elements')
    })
  });