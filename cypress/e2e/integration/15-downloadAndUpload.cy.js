/// <reference types="cypress"/>
import fs from 'fs'

describe('File Download & File Upload', () => {
    beforeEach(() => {
        cy.visit('https://www.techglobal-training.com/frontend')
        cy.clickCard('File Download & Upload')
    })

    it('File Download', () => {
        cy.get('#file_download').click()

        cy.readFile(downloadPath) // right clicked on file and clicked copy relative path and paste it

        // WAYS to read a file
        // fs.readSync()
        // fs.unlink - give path to file and it'll remove it for you (callbackfunc)
        // cy.fixture() - used for excel files, etc
    })

    /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'SampleText.txt'"
   */
    it('File Upload', () => {
        cy.get('#file_upload')
            .realClick()
            .selectFile('cypress/downloads/SampleText.txt')

        //Uploading Multiple Files
        //cy.get('#file_upload").selectFile(["path1/file.txt", "path2/file.txt"])

        //Uploading with Drag and Drop
        // cy.get('#file_upload').selectFile(downloadPath, { action: {drag-drop})
        cy.get('#file_submit')
            .realClick()

        cy.get('.notification')
            .should('have.text', 'You uploaded SampleText.txt')
    })


    const fileName = 'SampleText.txt'
    const downloadPath = path.join('cypress/downloads', fileName)

    it('File Upload (Make that hoe dynamic)', () => {
        cy.get('#file_upload')
            .realClick()
            .selectFile(downloadPath)

        cy.get('#file_submit')
            .realClick()

        cy.get('.notification')
            .should('have.text', `You uploaded ${fileName}`)
    })
})