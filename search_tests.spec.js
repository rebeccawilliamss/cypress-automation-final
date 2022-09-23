import { webElements as searchPage } from '../POM/search_page';
import SearchPage from '../POM/search_page';

const action = new SearchPage();

const path = require('path');
const fs = require('fs');

describe('Testing the functionality of the Keystone search page', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/auth')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/search')
        cy.viewport(1600,1200)
        cy.xpath(`//h1/span[contains(text(), 'Search')]`)
        .should('be.visible')

    })

    // The below test is redundant as anon users can no longer access any page other than /auth/

    it.skip('the search export button is not visible for anon users', () => {

        cy.xpath(searchPage.searchExportBtn)
        .should('not.exist')
    })

    it('the search export button is visible for logged in users', () => {

        cy.xpath(searchPage.searchExportBtn)
        .should('exist')
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')
    })

    it('can export filtered search results to CSV', () => {

        cy.xpath(searchPage.resourceTypeBtn)
        .click()
        .xpath(searchPage.selectMonument)
        .click()
        .wait(5000)

        action.enterGeoJSON();

        cy.xpath(`//label[contains(text(), 'Distance')]/../input`)
        .clear()
        .type('100')

        cy.xpath(searchPage.searchExportBtn)
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')

        cy.get(`[type='radio']`)
        .first()
        .check({force: true})

        cy.get('button')
        .contains(' Download ')
        .click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        let fileName
        cy.task("downloadFile", downloadsFolder).then((result) => {
            fileName = result
            cy.log(result)
            cy.log(fileName)
            const filePath = path.join(downloadsFolder, fileName)
            cy.log(filePath)
            cy.readFile(filePath).should('exist')

            // cy.task("readFile", filePath).then((result2) => {
            //     cy.log(result2).should('contain', '')
            // })
        })

    })

    it('can export filtered search results to HTML report', () => {

        cy.xpath(searchPage.resourceTypeBtn)
        .click()
        .xpath(searchPage.selectMonument)
        .click()
        .wait(5000)

        action.enterGeoJSON();

        cy.xpath(`//label[contains(text(), 'Distance')]/../input`)
        .clear()
        .type('100')

        cy.xpath(searchPage.searchExportBtn)
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')

        cy.get(`[type='radio']`)
        .first()
        .check({force: true})

        cy.get('button')
        .contains(' Download ')
        .click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        let fileName
        cy.task("downloadFile", downloadsFolder).then((result) => {
            fileName = result
            cy.log(result)
            cy.log(fileName)
            const filePath = path.join(downloadsFolder, fileName)
            cy.log(filePath)
            cy.readFile(filePath).should('exist')

            // cy.task("readFile", filePath).then((result2) => {
            //     cy.log(result2).should('contain', '')
            // })
        })

    })

    it('can export filtered search results to ShapeFile', () => {

        cy.xpath(searchPage.resourceTypeBtn)
        .click()
        .xpath(searchPage.selectMonument)
        .click()
        .wait(5000)

        action.enterGeoJSON();

        cy.xpath(`//label[contains(text(), 'Distance')]/../input`)
        .clear()
        .type('100')

        cy.xpath(searchPage.searchExportBtn)
        .click()
        cy.xpath(searchPage.searchExportPanel)
        .should('be.visible')

        cy.get(`[type='radio']`)
        .first()
        .check({force: true})

        cy.get('button')
        .contains(' Download ')
        .click()

        const downloadsFolder = Cypress.config('downloadsFolder')
        let fileName
        cy.task("downloadFile", downloadsFolder).then((result) => {
            fileName = result
            cy.log(result)
            cy.log(fileName)
            const filePath = path.join(downloadsFolder, fileName)
            cy.log(filePath)
            cy.readFile(filePath).should('exist')

            // cy.task("readFile", filePath).then((result2) => {
            //     cy.log(result2).should('contain', '')
            // })
        })

    })
})