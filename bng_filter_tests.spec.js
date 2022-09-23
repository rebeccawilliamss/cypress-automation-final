import { webElements as searchPage } from '../POM/search_page';
import SearchPage from '../POM/search_page';

const action = new SearchPage();

describe.skip('BNG Filter tests', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/search')
        cy.viewport(1600,1200)
        cy.get('span')
        .contains('Search')
        .should('be.visible')

        cy.xpath(searchPage.bngFilterBtn)
        .click()

        cy.xpath(searchPage.bngFilterTitle)
        .click()

    })

    it('@50114 Can convert SU9923672912 to the correct X Y coordinates', () => {

        action.enterBngValueIntoBngField('SU9923672912')


    })
})