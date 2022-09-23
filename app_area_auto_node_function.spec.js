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
        cy.xpath(resourceEditor.createAppAreaResource)
        .click()
        cy.viewport(1600,1200)

    })

    it('@40371 can set and use Place Full Address autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        action.selectCard('Addresses');
        action.typeIntoTextField('Building Name', 'Lamedon')
        action.typeIntoTextField('Building Number Sub-Street', 'Test')
        action.typeIntoTextField('Sub-Street', 'Lane')
        action.typeIntoTextField('Building Number', '10')
        action.typeIntoTextField('Street', 'Rohan Street')
        action.typeIntoTextField('Locality', 'Lamedon')
        action.typeIntoTextField('Town or City', 'South Gondor')
        action.typeIntoTextField('County ', 'Gondor')
        action.typeIntoTextField('Postcode', 'GL10')
        cy.xpath(resourceEditor.addBtn)
        .click()

        action.selectCard('Addresses')

        cy.log('*** validate the Addresses Full Address ***')
        action.validateTextField('Lamedon, Test Lane, 10 Rohan Street, Lamedon, South Gondor, Gondor, GL10')

        cy.log('*** delete the test record as no longer needed ***')
        action.deleteTestRecord()
    })




})