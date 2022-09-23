describe('tile server tests against PROD', () => {

    it('can visit page', () => {

        cy
         .visit('https://keystone.historicengland.org.uk/tileserver/');

        cy
         .request({
             method: 'GET',
             url: 'https://keystone.historicengland.org.uk/tileserver/',
         }).its('body')
           .should('include',
            '<h1>pg_tileserv</h1>')

    })

    it('activity line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.activity_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.activity_linestring</h1>')
    })

    it('activity point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.activity_point.html',
        }).its('body')
          .should('include',
           '<h1>public.activity_point</h1>')
    })

    it('activity polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.activity_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.activity_polygon</h1>')
    })

    it('artefact line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.artefact_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.artefact_linestring</h1>')
    })

    it('artefact point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.artefact_point.html',
        }).its('body')
          .should('include',
           '<h1>public.artefact_point</h1>')
    })

    it('artefact polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.artefact_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.artefact_polygon</h1>')
    })


    it('aircraft polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.aircraft_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.aircraft_polygon</h1>')
    })


    it('aircraft line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.aircraft_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.aircraft_linestring</h1>')
    })



    it('aircraft point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.aircraft_point.html',
        }).its('body')
          .should('include',
           '<h1>public.aircraft_point</h1>')
    })


    it('all geometries polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.all_geometries_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.all_geometries_polygon</h1>')
    })

    it('all geometries point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.all_geometries_points.html',
        }).its('body')
          .should('include',
           '<h1>public.all_geometries_points</h1>')
    })

    it('all geometries line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.all_geometries_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.all_geometries_linestring</h1>')
    })

     it('application area polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.applicationarea_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.applicationarea_polygon</h1>')
    })

    it('application area point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.applicationarea_point.html',
        }).its('body')
          .should('include',
           '<h1>public.applicationarea_point</h1>')
    })


    it('application area line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.applicationarea_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.applicationarea_linestring</h1>')
    })

    it('consultations line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.consultations_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.consultations_linestring</h1>')
    })


    it('consultations point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.consultations_point.html',
        }).its('body')
          .should('include',
           '<h1>public.consultations_point</h1>')
    })


    it('consultations polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.consultations_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.consultations_polygon</h1>')
    })


    it('area line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.area_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.area_linestring</h1>')
    })

    it('area polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.area_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.area_polygon</h1>')
    })

    it('area point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.area_point.html',
        }).its('body')
          .should('include',
           '<h1>public.area_point</h1>')
    })

    it('monument line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.monument_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.monument_linestring</h1>')
    })

    it('monument point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.monument_point.html',
        }).its('body')
          .should('include',
           '<h1>public.monument_point</h1>')
    })


    it('monument polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.monument_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.monument_polygon</h1>')
    })

    it('heritage story line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.heritagestory_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.heritagestory_linestring</h1>')
    })

    it('heritage story point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.heritagestory_point.html',
        }).its('body')
          .should('include',
           '<h1>public.heritagestory_point</h1>')
    })

    it('heritage story polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.heritagestory_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.heritagestory_polygon</h1>')
    })

    it('hlc line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.historiclandscapecharacter_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.historiclandscapecharacter_linestring</h1>')
    })

    it('hlc polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.historiclandscapecharacter_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.historiclandscapecharacter_polygon</h1>')
    })

    it('hlc point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.historiclandscapecharacter_point.html',
        }).its('body')
          .should('include',
           '<h1>public.historiclandscapecharacter_point</h1>')
    })

    it('maritime line', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.maritime_linestring.html',
        }).its('body')
          .should('include',
           '<h1>public.maritime_linestring</h1>')
    })

    it('maritime point', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.maritime_point.html',
        }).its('body')
          .should('include',
           '<h1>public.maritime_point</h1>')
    })

    it('maritime polygon', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.maritime_polygon.html',
        }).its('body')
          .should('include',
           '<h1>public.maritime_polygon</h1>')
    })

    it('all keystone geoms', () => {

        cy
        .request({
            method: 'GET',
            url: 'https://keystone.historicengland.org.uk/tileserver/public.keystone_geoms_all.html',
        }).its('body')
          .should('include',
           '<h1>public.keystone_geoms_all</h1>')
    })

})

