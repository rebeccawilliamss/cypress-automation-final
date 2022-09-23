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
        cy.viewport(1600,1200)

    })

    it('@39947 Monument record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createMonumentResource)
        .click();

        action.selectCard('Monument Names');
        action.typeIntoTextField('Name', 'Test Monument');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('@39939 Activity record auto generates a Primary Reference Number', () => {

        cy.wait(5000)
        cy.xpath(resourceEditor.createActivityResource)
        .click();

        action.selectCard('Activity Names');
        action.typeIntoTextField('Activity Name', 'Test Activity');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Maritime Vessel record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createVesselResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Name', 'Test Heritage Asset');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Application Area record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createAppAreaResource)
        .click();

        action.selectCard('Application Area Names');
        action.typeIntoTextField('Application Area Name', 'Test Application Area');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Archive Source record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createArchiveResource)
        .click();

        action.selectCard('Archive Source Names');
        action.typeIntoTextField('Archive Source Name', 'Test Archive Source');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Area record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createAreaResource)
        .click();

        action.selectCard('Area Names');
        action.typeIntoTextField('Area Name', 'Test Area');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Artefact record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createArtefactResource)
        .click();

        action.selectCard('Artefact Names');
        action.typeIntoTextField('Artefact Name', 'Test Artefact');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })
        action.deleteTestRecord();

    })

    it('Bib Source record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createBibSourceResource)
        .click();

        action.selectCard('Bibliographic Source Names');
        action.typeIntoTextField('Bibliographic Source Name', 'Test Bib Source');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Consultation record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createConsResource)
        .click();

        action.selectCard('Consultation Names');
        action.typeIntoTextField('Consultation Name', 'Test Consultation');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Digital Object record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createDigitalObjectResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Name', 'Test Digital Object');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Heritage Story record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createHeritageStoryResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Name', 'Test Heritage Story');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Aircraft record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createAircraftResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Name', 'Test Aircraft');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })


    it('HLC record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createHlcResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Name', 'Test HLC');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Organisation record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createOrganisationResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Organization Name', 'Test Organisation');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Period record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createPeriodResource)
        .click();

        action.selectCard('Preferred Period Names');
        action.typeIntoTextField('Period Name', 'Test Period');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Person record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createPersonResource)
        .click();

        action.selectCard('Names');
        action.typeIntoTextField('Full Name', 'Test Test');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

    it('Place record auto generates a Primary Reference Number', () => {

        cy.xpath(resourceEditor.createPlaceResource)
        .click();

        action.selectCard('Placenames');
        action.typeIntoTextField('Placename', 'Test Place');
        cy.xpath(resourceEditor.addBtn).click();

        let titlePrn;
        cy.xpath('//h1//span')
        .should(($el) => {
            titlePrn = $el.text();
        })

        cy.xpath(`(//a[@class='jstree-anchor']//span)[1]`)
        .should(($el) => {
            let prn = $el.text();
            expect(titlePrn).to.equal(prn)
        })

        action.deleteTestRecord();

    })

})