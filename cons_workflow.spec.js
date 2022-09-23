import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

const action = new WorkflowsPage();

describe('The user can create a Consultation workflow', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/plugins/consultation-workflow')
        cy.viewport(1600,1200)

    })

    it('@31990, @31995, @31997, @32006, @32225, @32226, @32227, @32228 can complete each step of the Consultation workflow', () => {

        cy.log('**** Consultation GeoJSON step ****')
        cy.get(workflowsPage.workflowSidePanel)
        .should('be.visible');
        cy.wait(5000);

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
        .click({ force: true })

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()

        action.selectRelatedApplicationArea('Related Application Area', 'Battersea Power', 'Battersea Power Station Development Area');
        action.verifyValueHasbeenSelected('Battersea Power Station Development Area');
        //action.clickDropDownFieldAndSelectValueOther('Feature Shape', 'Area');
        action.moveToNextStep();

        cy.log('**** Consultation Dates step ****')
        action.clickCalenderBox('Log Date');
        action.verifyTargetDate('Target Date');
        action.moveToNextStep();

        cy.log('**** Consultation details/type step ****')
        //action.selectRadioButton('Consultation Type', 'aa300ced-4a3c-4f14-b285-fc203910a374');
        action.clickDropDownFieldAndSelectValueOther('Application Type', 'Advertisement Consent');
        action.clickDropDownFieldAndSelectValueOther('Development Type', 'Agricultural development');
        //action.selectRadioButton('Contested Heritage?', '4877dda1-af20-46e1-9782-6844575f9ab6');
        action.moveToNextStep();

        cy.log('**** Reference Numbers Step ****')
        action.typeTextIntoField('Reference', '12345');
        action.clickDropDownFieldAndSelectValueOther('Reference Type', 'External reference')
        action.typeIntoFieldAndSelectOption('Agency', '3', 'Rebecca Wills', 'Rebecca Wills')
        cy.xpath(workflowsPage.addBtn).click();

        action.typeTextIntoField('Reference', '24680');
        action.clickDropDownFieldAndSelectValueOther('Reference Type', 'Planning reference')
        action.typeIntoFieldAndSelectOption('Agency', '3', 'matthew jones', 'Matthew Jones')
        cy.xpath(workflowsPage.addBtn).click();

        cy.get('.wf-step-multi-tile-container').within(($el) => {

            for(let i = 0; i < $el.length; i++) {
                expect($el[i].textContent).to.contain('24680');
                expect($el[i].textContent).to.contain('Planning reference');
                expect($el[i].textContent).to.contain('12345');
                expect($el[i].textContent).to.contain('External reference');
            }
        })

        cy.xpath(workflowsPage.refNumName1).should('be.visible');
        cy.xpath(workflowsPage.refNumName2).should('be.visible');

        action.moveToNextStep();

        cy.log('**** Application Proposal step ****')
        cy.wait(4000)
        action.interactWithIframe('This is a test');
        action.typeIntoFieldAndSelectOption('Associated Proposal File(s)', '3', 'Battersea Power', 'Battersea Power Station, Archaeology');
        action.moveToNextStep();

        cy.log('**** Contacts step ****')
        action.typeIntoFieldAndSelectOption('Planning Officer', '16', 'Rebecca Emms', 'Rebecca Emms')
        action.typeIntoFieldAndSelectOption('Casework Officer', '16', 'Michael Drake', 'Michael Drake')
        action.typeIntoFieldAndSelectOption('Agent', '16', 'Linklaters', 'Linklaters')
        action.typeIntoFieldAndSelectOption('Owner', '16', 'ISG Jackson Ltd', 'ISG Jackson Ltd')
        action.typeIntoFieldAndSelectOption('Applicant', '16', 'ARCA', 'ARCA Design')
        action.moveToNextStep();

        cy.log('**** Verify the summary information is correct ****')

        cy.xpath(workflowsPage.mapboxCanvas)
        .should('be.visible')

        cy.get('.final-step').within(($el) => {

        const date = new Date();
        const todaysDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).toISOString().slice(0, 10)

        const dateTwo = new Date();
        const targetDate = new Date(dateTwo.getFullYear(),dateTwo.getMonth(),dateTwo.getDate()+22).toISOString().slice(0, 10)

        for (let i = 0; i < $el.length; i ++) {

            expect($el[i].textContent).to.contain('Created or Modified Resource Instance')
            //expect($el[i].textContent).to('include.text', `Consultation for Battersea Power Station Development Area on ${todaysDate} (Consultation Resource Instance)`)
            expect($el[i].textContent).to.contain('Consultation Area')
            expect($el[i].textContent).to.contain('Related Application Areas:')
            expect($el[i].textContent).to.contain('[179299] Battersea Power Station Development Area')
            expect($el[i].textContent).to.contain(`${todaysDate}`)
            expect($el[i].textContent).to.contain(`${targetDate}`)
            expect($el[i].textContent).to.contain('Application Type')
            expect($el[i].textContent).to.contain('Advertisement Consent')
            expect($el[i].textContent).to.contain('Development Type')
            expect($el[i].textContent).to.contain('Agricultural development')
            expect($el[i].textContent).to.contain('Reference Number')
            expect($el[i].textContent).to.contain('24680')
            expect($el[i].textContent).to.contain('12345')
            expect($el[i].textContent).to.contain('Reference Type')
            expect($el[i].textContent).to.contain('Planning reference')
            expect($el[i].textContent).to.contain('External reference')
            expect($el[i].textContent).to.contain('Agency')
            expect($el[i].textContent).to.contain('[11337] Rebecca Wills')
            expect($el[i].textContent).to.contain('[13774] Matthew Jones')
            expect($el[i].textContent).to.contain('Proposal Description:')
            expect($el[i].textContent).to.contain('This is a test')
            expect($el[i].textContent).to.contain('Related Files:')
            expect($el[i].textContent).to.contain('[24114] Battersea Power Station, Archaeology')
            expect($el[i].textContent).to.contain('Planning Officer:')
            expect($el[i].textContent).to.contain('[11003] Rebecca Emms')
            expect($el[i].textContent).to.contain('Casework Officer')
            expect($el[i].textContent).to.contain('[11005] Michael Drake')
            expect($el[i].textContent).to.contain('Agent')
            expect($el[i].textContent).to.contain('[15986] Linklaters')
            expect($el[i].textContent).to.contain('Owner')
            expect($el[i].textContent).to.contain('[15447] ISG Jackson Ltd')
            expect($el[i].textContent).to.contain('Applicant')
            expect($el[i].textContent).to.contain('[16840] ARCA Design')

        }
    })

        action.deleteWorkflow();

        cy.url().should('eq', 'https://stage-keystone.historicengland.org.uk/plugins/init-workflow')

    })


})
