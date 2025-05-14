/// <reference types="cypress"/>
import LoginPage from "../../../pages/LoginPage"

describe("Login Page Test", {tags: '@regression'}, function() {
    beforeEach(() => {
      cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
      cy.clickCard("Login Function");

      cy.fixture('example.json').then((data) => {
        this.username = data.username
        this.password = data.password
      })

    });
  
    const loginPage = new LoginPage()

    it("Login without POM", () => {
      cy.get("#username").type(Cypress.env("UI_USERNAME"));
  
      // cy.pause()
  
      cy.get("#password").type(Cypress.env("UI_PASSWORD"));
  
      cy.get("#login_btn").click();
  
      cy.get("#success_lgn").should("be.visible");
    });

    it('Login with POM', function() { //NOTE: MAKE SURE YOU USE FUNCTION KEYWORD INSTEAD OF ARROW FUNCTION IF YOU REFERENCE USING THIS KEYWORD
        // loginPage.userLogin(Cypress.env("UI_USERNAME", "UI_PASSWORD"))
        loginPage.userLogin(this.username, this.password)
        loginPage.getSuccessfulLogin().should('be.visible')
    })

    it('Login with POM - Negative', {tags: '@smoke'}, () => {
        loginPage.userLogin(Cypress.env("UI_USERNAME", 'WongUser', "UI_PASSWORD", 'WrongPassword'))
        loginPage.getFailtureLogin().should('have.text', 'Invalid Username entered!')
    })


  });