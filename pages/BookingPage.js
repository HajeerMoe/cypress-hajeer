import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
    
    getTripType() { //One Way or Round Trip
        return cy.get('.radio')
    }

}