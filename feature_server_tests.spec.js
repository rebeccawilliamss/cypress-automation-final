describe('feature server tests against DEV', () => {

    it('can visit page', () => {

        cy
         .visit('https://dev-keystone.historicengland.org.uk/featureserver/');

        cy
         .request({
             method: 'GET',
             url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections.html',
         }).its('body')
           .should('include',
            '<h3>Feature Collections</h3>')

    })

    it('activity line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.activity_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.activity_linestring</div>')
    })

    it('activity point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.activity_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.activity_point</div>')
    })

    it('activity polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.activity_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.activity_polygon</div>')
    })

    it('artefact line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.artefact_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.artefact_linestring</div>')
    })

    it('artefact point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.artefact_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.artefact_point</div>')
    })

    it('artefact polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.artefact_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.artefact_polygon</div>')
    })


    it('aircraft polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.aircraft_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.aircraft_polygon</div>')
    })


    it('aircraft line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.aircraft_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.aircraft_linestring</div>')
    })



    it('aircraft point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.aircraft_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.aircraft_point</div>')
    })


    it('all geometries polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.all_geometries_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.all_geometries_polygon</div>')
    })

    it('all geometries point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.all_geometries_points/items.html',
        }).its('body')
          .should('include',
           '<div>public.all_geometries_points</div>')
    })

    it('all geometries line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.all_geometries_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.all_geometries_linestring</div>')
    })

     it('application area polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.applicationarea_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.applicationarea_polygon</div>')
    })

    it('application area point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.applicationarea_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.applicationarea_point</div>')
    })


    it('application area line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.applicationarea_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.applicationarea_linestring</div>')
    })

    it('consultations line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.consultations_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.consultations_linestring</div>')
    })


    it('consultations point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.consultations_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.consultations_point</div>')
    })


    it('consultations polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.consultations_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.consultations_polygon</div>')
    })


    it('area line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.area_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.area_linestring</div>')
    })

    it('area polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.area_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.area_polygon</div>')
    })

    it('area point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.area_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.area_point</div>')
    })

    it('monument line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.monument_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.monument_linestring</div>')
    })

    it('monument point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.monument_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.monument_point</div>')
    })


    it('monument polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.monument_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.monument_polygon</div>')
    })

    it('heritage story line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.heritagestory_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.heritagestory_linestring</div>')
    })

    it('heritage story point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.heritagestory_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.heritagestory_point</div>')
    })

    it('heritage story polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.heritagestory_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.heritagestory_polygon</div>')
    })

    it('hlc line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.historiclandscapecharacter_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.historiclandscapecharacter_linestring</div>')
    })

    it('hlc polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.historiclandscapecharacter_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.historiclandscapecharacter_polygon</div>')
    })

    it('hlc point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.historiclandscapecharacter_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.historiclandscapecharacter_point</div>')
    })

    it('maritime line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.maritime_linestring/items.html',
        }).its('body')
          .should('include',
           '<div>public.maritime_linestring</div>')
    })

    it('maritime point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.maritime_point/items.html',
        }).its('body')
          .should('include',
           '<div>public.maritime_point</div>')
    })

    it('maritime polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.maritime_polygon/items.html',
        }).its('body')
          .should('include',
           '<div>public.maritime_polygon</div>')
    })

    it('all keystone geoms', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://dev-keystone.historicengland.org.uk/featureserver/collections/public.keystone_geoms_all/items.html',
        }).its('body')
          .should('include',
           '<div>public.keystone_geoms_all</div>')
    })

})
