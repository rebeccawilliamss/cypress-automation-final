import ResourceManager from "../POM/resource_manager";
import { webElements as resourceEditor } from '../POM/resource_manager';

const action = new ResourceManager();

describe('Activity auto populate node function tests', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.viewport(1600,1200)
        cy.get('span')
        .contains('Resource Manager')
        .should('be.visible')
        cy.wait(3000)
        cy.xpath(resourceEditor.createActivityResource)
        .click()

    })

    it('@40378 can set and use Activity Full Address autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        action.selectCard('Location Data');
        action.selectLocationNode('Addresses');
        action.typeIntoTextField('Building Name', 'The Orange')
        action.typeIntoTextField('Building Number Sub-Street', 'Test')
        action.typeIntoTextField('Sub-Street', 'Street')
        action.typeIntoTextField('Building Number', '37')
        action.typeIntoTextField('Street', 'Pimlico Road')
        action.typeIntoTextField('Locality', 'Belgravia')
        action.typeIntoTextField('Town or City', 'London')
        action.typeIntoTextField('County ', 'Greater London')
        action.typeIntoTextField('Postcode', 'SW1 8NE')
        cy.xpath(resourceEditor.addBtn)
        .click()

        action.selectCard('Location Data')
        action.selectLocationNode('Addresses')

        cy.log('*** validate the Addresses Full Address ***')
        action.validateTextField('The Orange, Test Street, 37 Pimlico Road, Belgravia, London, Greater London, SW1 8NE')

        cy.log('*** delete the test record as no longer needed ***')
        action.deleteTestRecord()
    })


})