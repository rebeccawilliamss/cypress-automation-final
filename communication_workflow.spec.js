import {webElements as workflowsPage } from '../POM/workflows_page';
import WorkflowsPage from '../POM/workflows_page';

/*
Need to investigate why the radio button check will
not work - the radio button selection is a mandatory
field so the test will fail if not selected
*/

const action = new WorkflowsPage();

describe.skip('The user can create a Communication workflow', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })
        cy.visit('/plugins/communication-workflow');
        cy.viewport(1600, 1200);
    })

    it('@33004, @33007, @33009, @33010, @33017, @33018 Can complete each step of the Communication workflow', () => {

        cy.get('.workflow-name')
        .should('contain', 'Communication Workflow');
        cy.wait(3000);

        cy.log('**** Related Consultation/Details step ****')
        action.selectRelatedConsultation('Battersea', '[189557] Battersea Power Station');
        action.clickCalenderBox('Communication Date');
        action.typeIntoField('Subject', 'Test');
        cy.wait(3000);
        //action.selectRadioButton();
        cy.xpath(`//input[@type='radio']`).first().check({ force: true })
        action.moveToNextStep();

        cy.log('*** Verify the Notes contains the auto-populate node values from previous step ***')

        const date = new Date();
        const emailDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+22).toISOString().slice(0, 10)
        action.getTextFromIframe().find('p').should('have.text', `Test, , ${emailDate}, ,`)
        action.moveToNextStep();

        cy.log('*** the user can enter Follow-On Actions')
        action.interactWithIframe('These are some follow-on actions')
        action.moveToNextStep();

        cy.log('*** the user can upload a document to the workflow ***')
        cy.get('input[type=file]')
        .selectFile('cypress/uploads/img-locations-background.jpg', { force: true })

        cy.xpath(workflowsPage.uploadedImage)
        .should('be.visible')
        action.moveToNextStep();

        cy.get('.final-step').within(($el) => {

            const date = new Date();
            const todaysDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).toISOString().slice(0, 10)

            for (let i = 0; i < $el.length; i ++) {

              expect($el[i].textContent).to.contain('Created or Modified Resource Instance')
              expect($el[i].textContent).to.contain('Battersea Power Station (Consultation Resource Instance)')
              expect($el[i].textContent).to.contain('Communication for Battersa Power Station (Digital Object Resource Instance)')
              expect($el[i].textContent).to.contain('Consultation Communication Details')
              expect($el[i].textContent).to.contain('Battersea Power Station')
              expect($el[i].textContent).to.contain('Test')
              expect($el[i].textContent).to.contain('Email')
              expect($el[i].textContent).to.contain(`${todaysDate}`)
              expect($el[i].textContent).to.contain('Notes')
              expect($el[i].textContent).to.contain(`Test, , ${todaysDate}, ,`)
              expect($el[i].textContent).to.contain('Follow-on Actions')
              expect($el[i].textContent).to.contain('These are some follow-on actions')
              expect($el[i].textContent).to.contain('Uploaded Files')
              expect($el[i].textContent).to.contain('img-locations-background.jpg')
            }
          })

    action.deleteWorkflow();

    cy.url().should('eq', 'https://stage-keystone.historicengland.org.uk/plugins/init-workflow')

    })
})