/// <reference types="cypress"/>


describe("Handling Alerts", () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard("Alerts")
    })

    it("Handling the Warning Alert", () => {
        cy.get('#warning_alert').click

        cy.on('window:alert', (str) => {
            console.log(`My warning alert text contain is: ${str}`)
        })
    })
    /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   */

  it("Handling the Confirmation Alert", () => {
    cy.get('#confirmation_alert').click()
    cy.on(('window:confirm'), (str) => {
        expect(str).to.eq('Would you like to stay on TechGlobal Training application?')
        return false
    })

    cy.get('#action')
    .should('have.text', 'You rejected the alert by clicking Cancel.')
  })


  it('Handling Prompt Alert', () => {
    //Clicks cancel for the prompt error
    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns(null)         // returns null means click cancel
    // }) 

    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt')
    //     return false                                 // return false means click cancel
    // }) 

    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns('My name is Mohammad Hajeer')       // return true means click OK (will enter message in prompt)
                                                                              // if you leave empty string it just press OK
    // }) 



    // Validate the alert message and click Cancel
    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').callsFake((message) => {
    //         console.log(message)
    //         expect(message).to.eq('What would you like to say to TechGlobal?')
    //         return null // Return null will show in the console
    //     })
    // })
    // cy.get('#prompt_alert').click()




    //Validate alert message and enter your prompt
    cy.window().then((win) => {
        cy.stub(win, 'prompt').callsFake((message) => {
            console.log(message)
            expect(message).to.eq('What would you like to say to TechGlobal?')
            return 'My name is Mohammad Hajeer' 
        })
    })
    cy.get('#prompt_alert').click()
})
}) 