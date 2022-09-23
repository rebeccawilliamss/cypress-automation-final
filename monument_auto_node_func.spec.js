import FunctionManager from "../POM/function_manager";
import { webElements as funcManager } from "../POM/function_manager";
import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const action = new FunctionManager();
const resAction = new ResourceManager();

describe('Tests for the auto-populate node function', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource')
        cy.xpath(resourceEditor.createMonumentResource)
        .click()
        cy.viewport(1600,1200)

    })

    it('@50997 can use the Monument Use Phase description autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        resAction.selectCard('Use Phase')
        cy.wait(3000)
        resAction.selectFromDropDownMisc('Use Phase Period', '[17324] 15th Century')
        resAction.typeIntoDateField('Use Phase Start Date', '1420-01-01')
        resAction.typeIntoDateField('Use Phase End Date', '1421-01-01')
        resAction.typeIntoTextField('Use Phase Display Date', '1421')
        resAction.selectFromDropDownSmall('Use Phase Date Qualifier', 'Between')

        cy.xpath(resourceEditor.addBtn)
        .click();

        cy.log('*** validate the Use Phase Description ***')
        resAction.selectCard('Use Phase')
        resAction.verifyCardContainsCorrectData('[17324] 15th Century, Between, 1421, 1420-01-01, 1421-01-01')

        cy.log('*** delete the test record as no longer needed ***')
        resAction.deleteTestRecord();
    })

    it('@40362 can use the Monument Addresses Full Address autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        resAction.selectCard('Location Data');
        resAction.selectLocationNode('Addresses');
        resAction.typeIntoTextField('Building Name', 'The Orange')
        resAction.typeIntoTextField('Building Number Sub-Street', 'Test')
        resAction.typeIntoTextField('Sub-Street', 'Street')
        resAction.typeIntoTextField('Building Number', '37')
        resAction.typeIntoTextField('Street', 'Pimlico Road')
        resAction.typeIntoTextField('Locality', 'Belgravia')
        resAction.typeIntoTextField('Town or City', 'London')
        resAction.typeIntoTextField('County ', 'Greater London')
        resAction.typeIntoTextField('Postcode', 'SW1 8NE')
        cy.xpath(resourceEditor.addBtn)
        .click()

        resAction.selectCard('Location Data')
        resAction.selectLocationNode('Addresses')

        cy.log('*** validate the Addresses Full Address ***')
        resAction.validateTextField('The Orange, Test Street, 37 Pimlico Road, Belgravia, London, Greater London, SW1 8NE')

        cy.log('*** delete the test record as no longer needed ***')
        resAction.deleteTestRecord()

    })

    it.skip('@40368 can use the Monument Images Copyright Note with Caption autopopulate node function', () => {

        cy.log('*** Test the function works ***')
        resAction.selectCard('Images');
        resAction.uploadImage()
        cy.wait(8000)
        cy.xpath(resourceEditor.imageEditBtn)
        .click()
        resAction.typeIntoTextField('Caption', 'Coffee')
        cy.xpath(resourceEditor.saveBtn)
        .click()

        cy.log('*** validate the Image Caption ***')
        //resAction.selectCard('Images')
        cy.xpath(resourceEditor.imageCopyrightField)
        .contains('Coffee')

        cy.log('*** delete the test record as no longer needed ***')
        resAction.deleteTestRecord()

    })

})