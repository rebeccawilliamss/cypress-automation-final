class ResourceManager {

    constructor(){
    }

    goToResourceManager() {
        return cy.xpath(`//a[contains(text(), 'Manage')]`)
        .invoke('removeAttr', 'target')
        .click()
    }

    selectCard(card) {
        return cy.xpath(`(//div[@class="resource-editor-tree"]/ul/li)[1]/ul/li/a/span[text()='${card}']/..`)
        .click();
    }

    selectFromDropDownBig(label, option) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/ul`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    selectFromDropDownSmall(label, option) {
        return cy.xpath(`//label[text()='${label}']/../div/div/a/span/b`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    selectFromDropDownMisc(label, option) {
        return cy.xpath(`//label[text()='${label}']/../div/div/div/a/span/b`)
        .click()
        .xpath(`//ul[@class='select2-results']//li/div[contains(text(), '${option}')]`)
        .click()
    }

    typeIntoTextField(label, text) {
        return cy.xpath(`//label[text()='${label}']/../div/input`)
        .type(text);
    }

    typeIntoDateField(label, text) {
        return cy.xpath(`//label[text()='${label}']/../div/div/input`)
        .type(text)
    }

    //.xpath(`//button//span[contains(text(), 'Select Photographs')]`)
   // .click({ force: true })

    uploadImage() {
        const filepath = 'images/img-locations-background.jpg';
        return cy.get('input[type="file"]').attachFile(filepath)
    }

    interactWithIframe(text) {
        return cy.get('iframe')
         .its('0.contentDocument')
         .its('body')
         .type(text);

     }

    validateIframeText(text) {
        cy.get('iframe')
        .its('0.contentDocument')
        .its('body')
        .should('contain', text)
    }

    validateTextField(text) {
        return cy.xpath(`//dd[contains(text(), '${text}')]`)
        .should('contain', text)
    }

    verifyCardContainsCorrectData(data) {
        return cy.xpath(`//dd[contains(text(), '${data}')]`)
        .should('be.visible')
    }

    selectLocationNode(node) {
        return cy.xpath(`//h4//span[contains(text(), '${node}')]/../i`)
        .click()
    }

    deleteTestRecord() {
        return cy.xpath(`//a[@id='menu-control']`)
        .click()
        .xpath(`//a[@data-bind='click: deleteResource']`)
        .click()
        .xpath(`//button[contains(text(), 'OK')]`)
        .click()
        .url()
        .should('eq', 'https://stage-keystone.historicengland.org.uk/resource')
    }

    selectRadioButton() {
        return cy.get('[type="radio"]')
        .first()
        .check({ force: true });
    }


}

const webElements = {
    createMonumentResource: `(//a[contains(text(), 'Create Resource')])[13]`,
    createConsResource: `(//a[contains(text(), 'Create Resource')])[7]`,
    createPersonResource: `(//a[contains(text(), 'Create Resource')])[16]`,
    createActivityResource: `(//a[contains(text(), 'Create Resource')])[1]`,
    createAppAreaResource: `(//a[contains(text(), 'Create Resource')])[2]`,
    createAreaResource: `(//a[contains(text(), 'Create Resource')])[4]`,
    createArtefactResource: `(//a[contains(text(), 'Create Resource')])[5]`,
    createAircraftResource: `(//a[contains(text(), 'Create Resource')])[10]`,
    createHlcResource: `(//a[contains(text(), 'Create Resource')])[11]`,
    createVesselResource: `(//a[contains(text(), 'Create Resource')])[12]`,
    createPlaceResource: `(//a[contains(text(), 'Create Resource')])[17]`,
    createPeriodResource: `(//a[contains(text(), 'Create Resource')])[15]`,
    createOrganisationResource: `(//a[contains(text(), 'Create Resource')])[14]`,
    createHeritageStoryResource: `(//a[contains(text(), 'Create Resource')])[9]`,
    createDigitalObjectResource: `(//a[contains(text(), 'Create Resource')])[8]`,
    createBibSourceResource: `(//a[contains(text(), 'Create Resource')])[6]`,
    createArchiveResource: `(//a[contains(text(), 'Create Resource')])[3]`,
    resourceEditorTree: `resource-editor-tree`,
    newBtn: `//button[contains(text(), 'New')]`,
    addBtn: `//button[contains(text(), 'Add')]`,
    saveBtn: `//button[contains(text(), 'Save')]`,
    imageEditBtn: `//span[contains(@class, 'map-sidebar-text') and text() = 'Edit']`,
    imageCopyrightField: `//label[contains(text(), 'Copyright Note Text')]/../div/input`

}

export default ResourceManager;
export {webElements};