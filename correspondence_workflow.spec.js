import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

const action = new WorkflowsPage();

describe('The user can create a Correspondence workflow', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })
        cy.visit('/plugins/correspondence-workflow');
        cy.viewport(1600, 1200);
    })

    it('@32385, 32386, @32387, @32388 Can complete each step of the Correspondence workflow', () => {

        cy.log('**** Select related Consultation step ****')
        cy.xpath(workflowsPage.correspondenceHeading)
        .should('be.visible')
        action.selectRelatedConsultation('26 cambridge', '[202056] 26 Cambridge Road Kingston Upon Thames KT1 3JY');
        action.clickDropDownFieldAndSelectValueOther('Letter Type', 'Letter A2 - No need to consult');
        action.moveToNextStep();

        cy.log('*** validate the workflow summary ***')
        cy.get('.final-step').within(($el) => {
            for (let i = 0; i < $el.length; i++) {
                expect($el[i].textContent).to.contain('Created or Modified Resource Instance')
                expect($el[i].textContent).to.contain('[202056] 26 Cambridge Road Kingston Upon Thames KT1 3JY (Consultation Resource Instance)')
                expect($el[i].textContent).to.contain('Correspondence Communication Details')
                expect($el[i].textContent).to.contain('Related Consultation:')
                expect($el[i].textContent).to.contain('[202056] 26 Cambridge Road Kingston Upon Thames KT1 3JY')
                expect($el[i].textContent).to.contain('Letter Type:')
                expect($el[i].textContent).to.contain('Letter A2 - No need to consult')
                cy.log('*** Check download link exists ***')
                expect($el[i].textContent).to.contain('Download Letter')
                expect($el[i].textContent).to.contain('_No')
            }
        })

        action.deleteWorkflow();


    })
})