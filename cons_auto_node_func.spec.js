import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const action = new ResourceManager();

describe.skip('tests for the auto populate node function for Consultations', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.xpath(resourceEditor.createConsResource)
        .click()
        cy.viewport(1600,1200)

    })

    /*
    Skip until the radio button issue is resolved
    */
    it.skip('@40372 Consultation Communication Description autopopulate node function', () => {

        action.selectCard('Communications')
        action.typeIntoTextField('Subject', 'Test')
        action.selectRadioButton()
        action.typeIntoDateField('Communication Date', '2022-06-16')
        action.selectFromDropDownSmall('Participants', 'Andrew Hood')
        action.interactWithIframe('This is a test')
        action.typeIntoDateField('End Date', '2022-07-16')
        cy.xpath(resourceEditor.addBtn)
        .click()

        cy.log('Communication Description is autopopulated with')
        action.validateIframeText('Test, Andrew Hood, 2022-06-23, 2022-06-23, this is a test.')
        action.deleteTestRecord();

    })

    it('can ')

})