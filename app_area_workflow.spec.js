import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

/*
Skipping this workflow test until the bug to add the
update GeoJSON features button has been added to App
Area - it is on all other model Geometry cards.
*/

const action = new WorkflowsPage();

describe.skip('User can create an Application Area workflow', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('plugins/application-area?workflow')
        cy.viewport(1600,1200)

    })

    it('@51358, @50144, @50145, @50146, @50147, @50148 Can create an Application Area workflow', () => {

        cy.xpath(workflowsPage.appAreaHeading)
        .should('be.visible')

        action.typeTextIntoField('Application Area Name', 'Test Application Area')
        action.moveToNextStep()

        cy.xpath(workflowsPage.descriptionIsFull)
        .should('be.visible')
        action.interactWithIframe('This is a test application area')
        action.moveToNextStep()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.14458179473876953,
                    51.481810515561335
                ]
                }
            }
            ]
        }`

        cy.xpath(workflowsPage.editGeoJSON)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        action.moveToNextStep()

        action.typeIntoFieldAndSelectOption('Associated Monument, Area or Artefact', '1', 'Battersea Power', '[138798] Battersea Power Station (Late Bronze Age Findspot)')
        action.typeIntoFieldAndSelectOption('Associated Monument, Area or Artefact', '1', 'Battersea Power', '[89635] Late Bronze Age Spearhead from Battersea Power Station')
        action.verifyValueHasbeenSelected('[138798] Battersea Power Station (Late Bronze Age Findspot)')
        action.verifyValueHasbeenSelected('[89635] Late Bronze Age Spearhead from Battersea Power Station')
        action.moveToNextStep()

        action.clickDropDownFieldAndSelectValueOther('Description Type', 'Summary')
        action.interactWithIframe('This is a test')
        action.moveToNextStep()

        action.typeTextIntoField('Designation Name', 'Test')
        action.clickDropDownFieldAndSelectValueOther('Designation Name Use Type', 'Primary')
        action.clickDropDownFieldAndSelectValueOther('Designation or Protection Type', 'Archaeological Priority Area')
        action.clickDropDownFieldAndSelectValueOther('Grade', 'Grade II')
        action.clickDropDownFieldAndSelectValueOther('Risk Status', 'Not at risk')
        cy.xpath(workflowsPage.linkTextField)
        .type('Link')
        cy.xpath(workflowsPage.urlLinkTextField)
        .type('https://test.test.com')
        action.typeIntoFieldAndSelectOption('Associated Proposal File(s)', '3', 'Battersea Power', '[24114] Battersea Power Station, Archaeology')

        cy.get('button')
        .contains('Add')
        .click()
        cy.get('h4')
        .contains('Area Designations')
        .should('be.visible')
        cy.get('.wf-multi-tile-card-info')
        .should('be.visible')
        action.moveToNextStep()

        cy.get('.final-step').within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Created or Modified Resource Instance')
                //expect($el[i].textContent).to.contain(`Test Application Area (Application Area Resource Instance)`)
                expect($el[i].textContent).to.contain('Application Area Name')
                expect($el[i].textContent).to.contain('Test Application Area')
                expect($el[i].textContent).to.contain(`Location Description`)
                expect($el[i].textContent).to.contain(`This is a test application area`)
                expect($el[i].textContent).to.contain('Full')
                expect($el[i].textContent).to.contain('Related Resources')
                expect($el[i].textContent).to.contain('[138798] Battersea Power Station (Late Bronze Age Findspot)')
                expect($el[i].textContent).to.contain('[89635] Late Bronze Age Spearhead from Battersea Power Station')
                expect($el[i].textContent).to.contain('[24114] Battersea Power Station, Archaeology')
                expect($el[i].textContent).to.contain('Application Area Description')
                expect($el[i].textContent).to.contain('This is a test')
                expect($el[i].textContent).to.contain('Application Area Designations')
                expect($el[i].textContent).to.contain('Designation Name')
                expect($el[i].textContent).to.contain('Test')
                expect($el[i].textContent).to.contain('Designation or Protection Type')
                expect($el[i].textContent).to.contain('Archaeological Priority Area')
                expect($el[i].textContent).to.contain('Designation Name Use Type')
                expect($el[i].textContent).to.contain('Primary')
                expect($el[i].textContent).to.contain('Grade')
                expect($el[i].textContent).to.contain('Grade II')
                expect($el[i].textContent).to.contain('Risk Status')
                expect($el[i].textContent).to.contain('Not at risk')
                expect($el[i].textContent).to.contain('Reference')
                expect($el[i].textContent).to.contain('Link')
                expect($el[i].textContent).to.contain('Digital File(s)')
                expect($el[i].textContent).to.contain('[24114] Battersea Power Station, Archaeology')

            }
        })

        action.deleteWorkflow();

        cy.url().should('eq', 'https://stage-keystone.historicengland.org.uk/plugins/init-workflow')

    })
})