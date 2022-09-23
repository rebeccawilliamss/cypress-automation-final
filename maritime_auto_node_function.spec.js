import FunctionManager from "../POM/function_manager";
import { webElements as funcManager } from "../POM/function_manager";
import { webElements as resourceEditor } from "../POM/resource_manager";

const action = new FunctionManager();

describe('Tests for the auto-populate node function', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.xpath(resourceEditor.createVesselResource)
        .click()
        cy.viewport(1600,1200)

    })

    it('@40377 can set and use Maritime Full Address autopopulate node function', () => {

        cy.xpath(funcManager.autoPopNodeFunc)
        .click();
        cy.get('.pad-all')
        .should('be.visible');

        cy.log('*** Set the function ***')
        action.selectCard('Choose a card', 'Core');
        cy.wait(3000);
        action.selectNode('Choose a node', 'Contact Name');
    })



})