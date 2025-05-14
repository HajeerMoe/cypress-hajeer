import { BasePage } from './BasePage';

export class TablesPage extends BasePage {
    getTableHeaders() {
        return cy.get('.header')
    }

    // verifyStaticTableHeaders() {
    //     this.getTableHeaders().each(($el, index) => {
    //         cy.wrap($el)
    //             .should('be.visible')
    //             .and('have.text', expectedHeaderText[index])
    //     })
    //}
}