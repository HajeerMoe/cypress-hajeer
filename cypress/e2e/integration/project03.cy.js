/// <reference types="cypress"/>

import { BookingPage } from "../../../pages/BookingPage"

describe('Project 03', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend/booking`)
        cy.fixture('example').then(function(data) {
            this.triptype = data.triptype
        })
    })

    const bookingPage = new BookingPage()

    it('Test Case 01 - Validate the default Book your trip form', function() {
        bookingPage.getTripType().each(($el, index) => {
            cy.wrap($el)
                .find('input')
                .should(index === 0 ? 'be.checked' : 'not.be.checked')
                .and('be.enabled')
            
            cy.wrap($el).should('have.text', this.triptype[index])
        })

    })


    // it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {


    // })


    // it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {


    // })


    // it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {


    // })


    // it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {


    // })



})