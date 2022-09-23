import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const resAction = new ResourceManager();

describe('tests for the auto populate node function for Consultations', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.xpath(resourceEditor.createPersonResource)
        .click()
        cy.viewport(1600,1200)

    })

    it('can set a Full Name for a person using Title, Forename and Surname', () => {

        resAction.selectCard('Names')
        resAction.selectFromDropDownSmall('Title', 'Professor')
        resAction.typeIntoTextField('Forename(s)', 'Rebecca')
        resAction.typeIntoTextField('Surname', 'Test')
        cy.xpath(resourceEditor.addBtn)
        .click()
        resAction.selectCard('Names')
        resAction.validateTextField('Professor Rebecca Test')
        resAction.deleteTestRecord()

    })

    it('can use the Person Addresses Full Address autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        resAction.selectCard('Addresses');
        resAction.typeIntoTextField('Building Name', 'The Orange')
        resAction.typeIntoTextField('Building Number Sub-Street', 'Test')
        resAction.typeIntoTextField('Sub-Street', 'Street')
        resAction.typeIntoTextField('Building Number', '37')
        resAction.typeIntoTextField('Street', 'Pimlico Road')
        resAction.typeIntoTextField('Locality', 'Belgravia')
        resAction.typeIntoTextField('Town or City', 'London')
        resAction.typeIntoTextField('County', 'Greater London')
        resAction.typeIntoTextField('Postcode', 'SW1 8NE')

        cy.xpath(resourceEditor.addBtn)
        .click()

       resAction.selectCard('Addresses')

        cy.log('*** validate the Addresses Full Address ***')
        resAction.validateTextField('The Orange, Test Street, 37 Pimlico Road, Belgravia, London, Greater London, SW1 8NE')

        cy.log('*** delete the test record as no longer needed ***')
        resAction.deleteTestRecord();

    })

})