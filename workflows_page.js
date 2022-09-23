class WorkflowsPage {

    constructor(){
    }

    selectWorkflowType(workflow) {
        return cy.xpath(`//h4[contains(text(), '${workflow}')]`)
        .click();
    }

    moveToNextStep() {
        return cy.xpath(`//button/span[contains(text(), 'Save and Continue')]`)
        .click();
    }

    typeTextIntoField(label, text) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/input[@placeholder='Enter text']`)
        .type(text);
    }

    typeIntoField(label, text) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/input`)
        .type(text);
    }

    typeIntoFieldAndSelectOption(label, inputNumber, text, option) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/a/span/b`)
        .click()
        .xpath(`(//div[@class='select2-search']//label[@class='select2-offscreen']/../input)[${inputNumber}]`)
        .type(text)
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${option}')]`)
        .click();
    }

    clickDropDownFieldAndSelectValue(label, value) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/a/span/b`)
        .click()
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${value}')]`)
        .click();
    }

    clickDropDownFieldAndSelectValueOther(label, value) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/a/span/b`)
        .click()
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${value}')]`)
        .click();
    }

    selectRelatedConsultation(text, option) {
        return cy.xpath(webElements.addNewRelationshipDropDown)
        .wait(1000)
        .click()
        .xpath(`//div[@class='select2-search']//input`)
        .type(text)
        .xpath(`//div[@class='select2-result-label'][contains(text(), '${option}')]`)
        .click();
    }

    selectRelatedApplicationArea(label, text, option) {
        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/a/span/b`)
        .click()
        .xpath(`(//div[@class='select2-search']//input)[5]`)
        .type(text)
        .xpath(`//ul[@class='select2-results']//div[contains(text(), '${option}')]`)
        .click();
    }

    selectSiteVisitAttendee(text, option) {
        return cy
        .wait(3000)
        .xpath(`//label['Attendee']/../div/div/div/a/span/b`)
        .should('be.visible')
        .click()
        .xpath(`(//div[@class='select2-search']//input)[3]`)
        .type(text)
        .xpath(`//ul[@class='select2-results']//div[contains(text(), '${option}')]`)
        .click()
    }

    verifyValueHasbeenSelected(value) {
        return cy.xpath(`//div[@class='rr-table-instance-label']/span[contains(text(), '${value}')]`)
        .should('be.visible');
    }

    clickCalenderBox(field) {
        return cy.xpath(`//label[contains(text(), '${field}')]/../div/div/div/input`)
        .click()
        .type('{esc}');
    }

    verifyTargetDate(label) {

        return cy.xpath(`//label[contains(text(), '${label}')]/../div/div/div/input`)
        .invoke('val')
        .then((text) => {
            let date = new Date();
            let targetDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()+22)
            .toISOString().slice(0, 10);
            expect(targetDate).to.equal(text);
        })
    }


    selectRadioButton() {
        return cy.get('[type="radio"]')
        .first()
        .check({ force: true });
    }


    interactWithIframe(text) {
       return cy.get('iframe')
        .its('0.contentDocument')
        .its('body')
        .type(text);

    }

    getTextFromIframe() {
        return cy.get('iframe')
        .its('0.contentDocument')
        .its('body')
        .should('exist')
        .then(cy.wrap)
    }

    deleteWorkflow() {
        return cy.xpath(`//button//span[contains(text(), 'Delete')]`)
        .click()
        .xpath(`//button[contains(text(), 'OK')]`)
        .click()
    }

    clickAddBtn(){
        return cy.xpath(webElements.addBtn).click()

    }

    selectOptionFromList(option){
        return cy.xpath(`//div[contains(text(), '${option}')]`).click();
    }


}

const webElements = {
    referenceNumbersInput: `//label[contains(text(), 'Reference')]/../div/input[@placeholder='Enter text']`,
    workflowSidePanel: '.workbench-card-sidepanel',
    consultationSummary: '.final-step',
    addNewRelationshipDropDown: `//span[contains(text(), 'Add new Relationship')]/../span/b`,
    letterDownloadLink: `//h5[contains(text(), 'Download Letter')]/../div/div/div/a`,
    attendeeInputBox: '(//div[@class="select2-search"]//input)[1]',
    addNewAttendeeInput: '//input[starts-with(@aria-activedescendant,"select2-result-label-")]',
    topNameOfAttendeeList:'(//div[(@role="option")])[1]',
    attendeeType: '//span[starts-with(@id, "select2-chosen")] [contains(text(), "Select an option")]',
    addBtn: '//button[@class="btn btn-workflow-tile btn-success"]',
    refNumName1: `//a[contains(text(), 'Matthew Jones')]`,
    refNumName2: `//a[contains(text(), 'Rebecca Wills')]`,
    thumbnailGallary: `//div[@class='gallery-thumbnails']`,
    nextStepBtn: `//span[contains(text(), 'Next Step')]`,
    summaryImage: `//img[@class='summary-image']`,
    uploadedImage: `//span[contains(text(), 'img-locations-background.jpg')]`,
    mapboxCanvas: `//canvas[@class='mapboxgl-canvas']`,
    appAreaHeading: `//h1//span[contains(text(), 'Application Area')]`,
    correspondenceHeading: `//h1//span[contains(text(), 'Correspondence')]`,
    linkTextField: `(//label[contains(text(), 'Link text')]/../../div/input)[1]`,
    urlLinkTextField: `(//label[contains(text(), 'URL')]/../../div/input)[2]`,
    descriptionIsFull: `//span[contains(@class, 'select2-chosen') and text() = 'Full']`,
    descriptionIsSummary: `//span[contains(@class, 'select2-chosen') and text() = 'Summary']`,
    editGeoJSON: `(//a[@href='javascript:void(0);']//i)[17]`
}

export default WorkflowsPage;
export {webElements};