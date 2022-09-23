import WorkflowsPage, { webElements } from '../POM/workflows_page';
import {webElements as workflowsPage } from '../POM/workflows_page';

const action = new WorkflowsPage();


describe("The user can create and complete a Site Visit Workflow", ()=>{

  beforeEach(()=>{

    cy.session('loginSession', () => {
        cy.visit('/')
        cy.viewport(1600, 1200);
        cy.login({username: 'RWilliams429', password: '!Ticket39'})
    })

    cy.visit('/plugins/site-visit?workflow');
    cy.viewport(1600, 1200);

  })

    it("Can compete each step of the Site Visit workflow", () =>{

        cy.log("*** Site Visit Details ***")
        action.selectRelatedConsultation('HS2: Walk', '[184036] HS2: Walkden House');
        action.clickCalenderBox('Date of Visit');
        action.interactWithIframe('This is a test site visit record')
        cy.xpath(workflowsPage.descriptionIsSummary)
        .should('be.visible')
        action.moveToNextStep()
        .wait(3000);

        cy.log("*** Site Visit Attendees ***")
        action.selectSiteVisitAttendee('Rebecca Wills', '[11337] Rebecca Wills')
        action.clickDropDownFieldAndSelectValueOther('Attendee Type', 'Borough Case Officer')
        action.clickAddBtn()
        action.selectSiteVisitAttendee('Adam Single', '[11549] Adam Single')
        action.clickDropDownFieldAndSelectValueOther('Attendee Type', 'Applicant')
        action.clickAddBtn()
        cy.get('.wf-step-multi-tile-container')
        .should('be.visible')
        action.moveToNextStep()

        cy.log("*** Site Visit Observations ***")
        action.typeIntoFieldAndSelectOption('Observed by', '3', 'Cost', '[15457] Costain')
        action.interactWithIframe('Test example text')
        action.moveToNextStep()

        cy.log("*** Site Visit Recommendations ***")
        action.typeIntoFieldAndSelectOption('Recommended by', '3', 'Lisa Bird', '[13008] Lisa Bird')
        action.interactWithIframe('This is an example recommendation')
        action.moveToNextStep()

        cy.log('*** upload photo and verify thumbnail gallery is visible ***')
        cy.get('input[type=file]')
        .selectFile('cypress/uploads/img-locations-background.jpg', { force: true })

        cy.xpath(workflowsPage.thumbnailGallary)
        .should('be.visible')
        cy.get('.workbench-card-sidebar')
        .should('be.visible')
        cy.xpath(workflowsPage.nextStepBtn)
        .click()

        cy.get('.final-step').within(($el) => {

          const date = new Date();
          const todaysDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+1).toISOString().slice(0, 10)

          for (let i = 0; i < $el.length; i ++) {

            expect($el[i].textContent).to.contain('Created or Modified Resource Instance')
            expect($el[i].textContent).to.contain('[184036] HS2: Walkden House (Consultation Resource Instance')
            expect($el[i].textContent).to.contain('Site Visit Details')
            expect($el[i].textContent).to.contain('Consultation:')
            expect($el[i].textContent).to.contain('[184036] HS2: Walkden House')
            expect($el[i].textContent).to.contain('Date:')
            expect($el[i].textContent).to.contain(`${todaysDate}`)
            expect($el[i].textContent).to.contain('Visit Location Description:')
            expect($el[i].textContent).to.contain('Consultation:')
            expect($el[i].textContent).to.contain('This is a test site visit record')
            expect($el[i].textContent).to.contain('Visit Attendees')
            expect($el[i].textContent).to.contain('Attendee')
            expect($el[i].textContent).to.contain('Type')
            expect($el[i].textContent).to.contain('[11549] Adam Single')
            expect($el[i].textContent).to.contain('Applicant')
            expect($el[i].textContent).to.contain('[11337] Rebecca Wills')
            expect($el[i].textContent).to.contain('Borough Case Officer')
            expect($el[i].textContent).to.contain('Observation')
            expect($el[i].textContent).to.contain('Test example text')
            expect($el[i].textContent).to.contain('Observed by')
            expect($el[i].textContent).to.contain('[15457] Costain')
            expect($el[i].textContent).to.contain('Recommendation')
            expect($el[i].textContent).to.contain('This is an example recommendation')
            expect($el[i].textContent).to.contain('Recommended by')
            expect($el[i].textContent).to.contain('[13008] Lisa Bird')
          }
        })

      cy.xpath(workflowsPage.summaryImage)
      .should('be.visible')

      action.deleteWorkflow();

      cy.url().should('eq', 'https://stage-keystone.historicengland.org.uk/plugins/init-workflow')
    })

})