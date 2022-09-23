import { webElements as homePage } from '../POM/home_page';
import { webElements as loginPage } from '../POM/login_page';

describe('Login functionality', () => {

    beforeEach(() => {

        cy.visit('/auth');
        cy.viewport(1600,1200);
    })

    it('@51377 can login using valid credentials', () => {

        cy.login({ username: 'RWilliams429', password: '!Ticket39'});
    })

    it('@51432 checks there is no option to create an account (only admins can do this)', () => {

        cy.xpath(loginPage.newAccountLink)
        .should('not.exist')

    })

    it('@51377 displays an error message when logging in with invalid credentials', () => {

        cy.xpath(loginPage.username)
        .type('admin');
        cy.xpath(loginPage.password)
        .type('admin');

        cy.xpath(loginPage.signInBtn)
        .click();

        cy.get('#login-failed-alert')
        .should('be.visible')
        .and('contain', 'Login failed');
    })

    it('@51378 can use the forgot password link', () => {

        cy.xpath(loginPage.forgotPassworkLink)
        .click()

        cy.xpath(loginPage.enterEmail)
        .type('rebecca.williams@historicengland.org.uk')

        cy.xpath(loginPage.recoverPasswordBtn)
        .click()

        cy.xpath(loginPage.returnHomeLink)
        .should('be.visible')

    })

});