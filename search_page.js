class SearchPage {

    constructor(){
    }

    enterBngValueIntoBngField(value) {
        return cy.xpath(`//label[contains(text(), 'Grid reference:')]/../input`)
        .type(value)
    }

    enterGeoJSON() {

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

        return cy.xpath(`//div[@class='workbench-card-sidebar-tab']//span[contains(text(), 'Filter')]`)
        .click()
        .get('h4')
        .contains('Map Search')
        .should('be.visible')

        .xpath(`(//div[@class='map-card-zoom-tool']//a[@href='javascript:void(0);'])[1]`)
        .click()

        .get('.CodeMirror')
        .first()
        .then((editor) => {
            editor[0].CodeMirror.setValue('')
        })

        .get('.CodeMirror textarea')
        .type(geojson, { force: true }, { parseSpecialCharSequences: false })
        .xpath(`//button[contains(text(), 'Accept GeoJSON')]`)
        .click()
    }

}

const webElements = {
    resourceTypeBtn: `//button[contains(text(), ' Resource Type ')]`,
    selectArtefact: `//a[contains(text(), 'Artefact')]`,
    selectMonument: `//a[contains(text(), 'Monument')]`,
    searchExportBtn: `//button[@class='saved-search-container search-type-btn-popup relative'][3]`,
    searchExportPanel: `//div[@class='search-export']`,
    searchExportOptions: `(//div)[246]`,
    exportRadioBtns: `//input[@type='radio']`,
    bngFilterBtn: `//button/span[contains(text(), 'BNG Filter')]`,
    bngFilterTitle: `//div[contains(text(), 'Filter by British National Grid')]`
}

export{webElements};
export default SearchPage;