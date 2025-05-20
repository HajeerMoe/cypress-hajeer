import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
    
    getTripType() { //One Way or Round Trip
        return cy.get('.radio')
    }

    getCabinClassLabel() {
       return cy.get('.label').eq(1)
    }

    getCabinClassDropdown() {
        return cy.get('.select').eq(0).find('select')
    }

    getFromLabel() {
        return cy.get('.label').eq(2)
    }

    getFromDropdown() {
        return cy.get('.select').eq(1).find('select')
    }

    getToLabel() {
        return cy.get('.label').eq(3)
    }

    getToDropDown() {
        return cy.get('.select').eq(2).find('select')
    }

    getDepartLabel() {
        return cy.get('.label').eq(4)
    }

    getDepartDatePicker() {
        return cy.get('[type="text"]').eq(0)
    }

    getReturnLabel() {
        return cy.get('.label').eq(5)
    }

    getReturnDatePicker() {
        return cy.get('[type="text"]').eq(1)
    }

    getNumberOfPassengersLabel() {
        return cy.get('.label').eq(6)
    }

    getNumberOfPassengersDropDown() {
        return cy.get('.select').eq(3).find('select')
    }

    getPassenger1Label() {
        return cy.get('.label').eq(7)
    }

    getPassenger1Dropdown() {
        return cy.get('.select').eq(4).find('select')
    }

    getBookButton() {
        return cy.get('.Button_c_button__TmkRS')
    }

    getBookingInfo() {
        return cy.get('.ml-3')
    }

    getPassenger2Dropdown() {
        return cy.get('.select').eq(5).find('select')
    }
}