/// <reference types="cypress"/>

import { BookingPage } from "../../../pages/BookingPage"

let stateAbbr = {}
describe('Project 03', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend/booking`)
        cy.fixture('example').then(function(data) {
            this.triptype = data.triptype
        })
        cy.fixture('stateAbbr').then(function(data) {
            stateAbbr = data
        })
    })

    const bookingPage = new BookingPage()

    const assertElementsAreVisible = elements => elements.forEach(el => el.should('be.visible'))

    const elementsToBeVisible = () => [
        bookingPage.getCabinClassLabel(),
        bookingPage.getCabinClassDropdown(),
        bookingPage.getFromLabel(),
        bookingPage.getFromDropdown(),
        bookingPage.getToLabel(),
        bookingPage.getToDropDown(),
        bookingPage.getDepartLabel(),
        bookingPage.getDepartDatePicker(),
        bookingPage.getReturnLabel(),
        bookingPage.getReturnDatePicker(),
        bookingPage.getNumberOfPassengersLabel(),
        bookingPage.getNumberOfPassengersDropDown(),
        bookingPage.getPassenger1Label(),
        bookingPage.getPassenger1Dropdown()
        ]

    const assertNumberOfPassengersDefault = () => {
        bookingPage.getNumberOfPassengersDropDown()
            .find('option:selected')
            .should('have.value', '1')
    }

    const assertPassengerTypeDefault = () => {
        bookingPage.getPassenger1Dropdown()
            .find('option:selected')
            .should('have.value', 'Adult (16-64)')
    }

    const assertBookButtonIsVisibleAndEnabled = () => {
        bookingPage.getBookButton()
            .should('be.visible')
            .and('be.enabled')
    }

    it('Test Case 01 - Validate the default Book your trip form', function() {
        bookingPage.getTripType().each(($el, index) => {
            cy.wrap($el)
                .find('input')
                .should(index === 0 ? 'be.checked' : 'not.be.checked')
                .and('be.enabled')
            
            cy.wrap($el).should('have.text', this.triptype[index])
        })

        assertElementsAreVisible(elementsToBeVisible())

        bookingPage.getReturnDatePicker().should('be.disabled')

        assertNumberOfPassengersDefault()
        assertPassengerTypeDefault()
        assertBookButtonIsVisibleAndEnabled()
    })


    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
        bookingPage.getTripType().eq(1)
            .realClick()
            .find('[type="radio"]')
            .should('be.checked')
        
        bookingPage.getTripType().eq(0)
            .should('not.be.checked')

        assertElementsAreVisible(elementsToBeVisible())
        assertNumberOfPassengersDefault()
        assertPassengerTypeDefault()
        assertBookButtonIsVisibleAndEnabled()
    })
    const nextDay = new Date()
    nextDay.setDate(nextDay.getDate() + 1)
    const formattedDateDay = nextDay.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
    const expectedDateDay = formattedDateDay.replace(/,/g, '')


    const nextWeek = new Date()
    nextWeek.setDate(nextWeek.getDate() + 7)
    const formattedDateWeek = nextWeek.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
    const expectedDateWeek = formattedDateWeek.replace(/,/g, '')


    const nextMonth = new Date(nextWeek)
    nextMonth.setMonth(nextMonth.getMonth() + 1)
    const formattedDateMonth = nextMonth.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
    const expectedDateMonth = formattedDateMonth.replace(/,/g, '')


    
    it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {
        bookingPage.getTripType().eq(0).realClick()
        
        bookingPage.getCabinClassDropdown().select('Business')

        bookingPage.getFromDropdown().select('Illinois')

        bookingPage.getToDropDown().select('Florida')

        bookingPage.getDepartDatePicker().clear().type(formattedDateWeek)

        bookingPage.getNumberOfPassengersDropDown().select(0)

        bookingPage.getPassenger1Dropdown().select(1)

        bookingPage.getBookButton().realClick()

        let from, to, passengers, passengerType, cabinClass

        bookingPage.getFromDropdown().find('option:selected').invoke('text').then(text => from = stateAbbr[text])
        bookingPage.getToDropDown().find('option:selected').invoke('text').then(text => to = stateAbbr[text])
        bookingPage.getNumberOfPassengersDropDown().find('option:selected').invoke('text').then(text => passengers = text)
        bookingPage.getPassenger1Dropdown().find('option:selected').invoke('text').then(text => passengerType = text)
        bookingPage.getCabinClassDropdown().find('option:selected').invoke('text').then(text => cabinClass = text)
        
        cy.then(() => {
        cy.get('.ml-3').should('contain.text', `${from} to ${to}`)
        cy.get('.ml-3').should('contain.text', expectedDateWeek)
        cy.get('.ml-3').should('contain.text', `Number of Passengers: ${passengers}`)
        cy.get('.ml-3').should('contain.text', `Passenger 1: ${passengerType}`)
        cy.get('.ml-3').should('contain.text', `Cabin class: ${cabinClass}`)
    })
    })


    it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
        bookingPage.getTripType().eq(1).realClick()
        bookingPage.getCabinClassDropdown().select('First')
        bookingPage.getFromDropdown().select('California')
        bookingPage.getToDropDown().select('Illinois')
        bookingPage.getDepartDatePicker().clear().type(formattedDateWeek)
        bookingPage.getReturnDatePicker().clear().type(formattedDateMonth)
        bookingPage.getNumberOfPassengersDropDown().select(0)
        bookingPage.getPassenger1Dropdown().select(0)
        bookingPage.getBookButton().realClick()

        let from, to, passengers, passengerType, cabinClass

        bookingPage.getFromDropdown().find('option:selected').invoke('text').then(text => from = stateAbbr[text])
        bookingPage.getToDropDown().find('option:selected').invoke('text').then(text => to = stateAbbr[text])
        bookingPage.getNumberOfPassengersDropDown().find('option:selected').invoke('text').then(text => passengers = text)
        bookingPage.getPassenger1Dropdown().find('option:selected').invoke('text').then(text => passengerType = text)
        bookingPage.getCabinClassDropdown().find('option:selected').invoke('text').then(text => cabinClass = text)
        
        cy.then(() => {
        cy.get('.ml-3').should('contain.text', `${from} to ${to}`)
        cy.get('.ml-3').should('contain.text', expectedDateWeek)
        cy.get('.ml-3').should('contain.text', `Number of Passengers: ${passengers}`)
        cy.get('.ml-3').should('contain.text', `Passenger 1: ${passengerType}`)
        cy.get('.ml-3').should('contain.text', `Cabin class: ${cabinClass}`)
        })

        cy.then(() => {
            const reverseFrom = to
            const reverseTo = from
            cy.get('.ml-3').should('contain.text', `${reverseFrom} to ${reverseTo}`)
            cy.get('.ml-3').should('contain.text', expectedDateMonth)
        })
    })


    it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
        bookingPage.getTripType().eq(0).realClick()
        bookingPage.getCabinClassDropdown().select('Premium Economy')
        bookingPage.getFromDropdown().select('New York')
        bookingPage.getToDropDown().select('Texas')
        bookingPage.getDepartDatePicker().clear().type(expectedDateDay)
        bookingPage.getNumberOfPassengersDropDown().select(1)
        bookingPage.getPassenger1Dropdown().select(0)
        bookingPage.getPassenger2Dropdown().select(3)
        bookingPage.getBookButton().realClick()

        
        let from, to, passengers, passengerType1, passengerType2, cabinClass

        bookingPage.getFromDropdown().find('option:selected').invoke('text').then(text => from = stateAbbr[text])
        bookingPage.getToDropDown().find('option:selected').invoke('text').then(text => to = stateAbbr[text])
        bookingPage.getNumberOfPassengersDropDown().find('option:selected').invoke('text').then(text => passengers = text)
        bookingPage.getPassenger1Dropdown().find('option:selected').invoke('text').then(text => passengerType1 = text)
        bookingPage.getPassenger2Dropdown().find('option:selected').invoke('text').then(text => passengerType2 = text)
        bookingPage.getCabinClassDropdown().find('option:selected').invoke('text').then(text => cabinClass = text)
        
        cy.then(() => {
        cy.get('.ml-3').should('contain.text', `${from} to ${to}`)
        cy.get('.ml-3').should('contain.text', expectedDateDay)
        cy.get('.ml-3').should('contain.text', `Number of Passengers: ${passengers}`)
        cy.get('.ml-3').should('contain.text', `Passenger 1: ${passengerType1}`)
        cy.get('.ml-3').should('contain.text', `Passenger 2: ${passengerType2}`)
        cy.get('.ml-3').should('contain.text', `Cabin class: ${cabinClass}`)
        })
    })



})