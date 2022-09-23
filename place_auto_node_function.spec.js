import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const action = new ResourceManager();

describe('Tests for the auto-populate node function', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.xpath(resourceEditor.createPlaceResource)
        .click()
        cy.viewport(1600,1200)

    })

    it('@40371 can set and use Place Full Address autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        action.selectCard('Addresses');
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

        action.selectCard('Addresses')

        cy.log('*** validate the Addresses Full Address ***')
        action.validateTextField('The Orange, Test Street, 37 Pimlico Road, Belgravia, London, Greater London, SW1 8NE')

        cy.log('*** delete the test record as no longer needed ***')
        action.deleteTestRecord()
    })




})