import { webElements as resourceEditor } from "../POM/resource_manager";
import ResourceManager from "../POM/resource_manager";

const action = new ResourceManager();

describe.skip('Generate Related Areas function tests', () => {

    beforeEach(()=>{

        cy.session('loginSession', () => {
            cy.visit('/')
            cy.viewport(1600, 1200);
            cy.login({username: 'RWilliams429', password: '!Ticket39'})
        })

        cy.visit('/resource');
        cy.viewport(1600, 1200);

      })

      it('can generate related areas for the Monument resource', () => {

        cy.xpath(resourceEditor.createMonumentResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                "type": "Point",
                "coordinates": [
                    -0.14458179473876953,
                    51.481810515561335
                ]
                }
            }
            ]
        }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Aircraft resource', () => {

        cy.xpath(resourceEditor.createAircraftResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.17331361770629883,
                    51.48202432378791
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Activity resource', () => {

        cy.xpath(resourceEditor.createActivityResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.14608383178710938,
                    51.54425331600968
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Application Area resource', () => {

        cy.xpath(resourceEditor.createAppAreaResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [
                        -0.2518272399902344,
                        51.46202891963228
                      ],
                      [
                        -0.25028228759765625,
                        51.46202891963228
                      ],
                      [
                        -0.25028228759765625,
                        51.46293799176991
                      ],
                      [
                        -0.2518272399902344,
                        51.46293799176991
                      ],
                      [
                        -0.2518272399902344,
                        51.46202891963228
                      ]
                    ]
                  ]
                }
              }
            ]
          }`

        action.selectCard('Mapped Location')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Area resource', () => {

        cy.xpath(resourceEditor.createAreaResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [
                    [
                      [
                        -0.28289794921875,
                        51.43849369352145
                      ],
                      [
                        -0.27156829833984375,
                        51.43849369352145
                      ],
                      [
                        -0.27156829833984375,
                        51.444699612581914
                      ],
                      [
                        -0.28289794921875,
                        51.444699612581914
                      ],
                      [
                        -0.28289794921875,
                        51.43849369352145
                      ]
                    ]
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Artefact resource', () => {

        cy.xpath(resourceEditor.createArtefactResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.27706146240234375,
                    51.493995984702835
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the HLC resource', () => {

        cy.xpath(resourceEditor.createHlcResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.273284912109375,
                    51.54804306453371
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })

      it('can generate related areas for the Maritime Vessel resource', () => {

        cy.xpath(resourceEditor.createVesselResource)
        .click()

        const geojson = `{
            "type": "FeatureCollection",
            "features": [
              {
                "type": "Feature",
                "properties": {},
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    -0.08428573608398438,
                    51.50756719022885
                  ]
                }
              }
            ]
          }`

        action.selectCard('Location Data')
        action.selectLocationNode('Geometry')
        cy.get('h4')
        .contains('Geometry')
        .should('be.visible')

        cy.xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        cy.get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        cy.get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        cy.xpath(`//button[contains(text(), 'Update Features')]`).click()
        cy.xpath(`//label[contains(text(), 'Geospatial Coordinates')]`)
        .should('be.visible')
        cy.xpath(resourceEditor.addBtn)
        .click()
        cy.wait(3000)
        cy.reload()

        action.selectCard('Location Data')
        cy.get('h4')
        .contains('Location Data')
        .should('be.visible')
        action.selectLocationNode('Localities/Administrative Areas')

        cy.xpath(`//div[@class='card']`).within(($el) => {

            for (let i = 0; i < $el.length; i ++) {

                expect($el[i].textContent).to.contain('Area Name')
                expect($el[i].textContent).to.contain('Greater London Authority')
                expect($el[i].textContent).to.contain('Area Type')
                expect($el[i].textContent).to.contain('County')
                expect($el[i].textContent).to.contain('Wandsworth')
                expect($el[i].textContent).to.contain('Borough')
            }
        })


      })
})