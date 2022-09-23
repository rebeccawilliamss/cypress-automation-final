import { webElements as loginPage } from '../POM/login_page'
import { webElements as homePage } from '../POM/home_page'
import 'cypress-file-upload';

Cypress.Commands.add('loginViaHomepage', (user) => {

    cy.xpath(homePage.loginBtn).click();
    cy.xpath(loginPage.username).type(user.username);
    cy.xpath(loginPage.password).type(user.password);
    cy.get('button').contains('Sign In').click().wait(2000);

    cy.log('********** verify sign in was successful **********')
    cy.xpath(homePage.logOutBtn).should('be.visible');
})

Cypress.Commands.add('urlExtension', (url) =>
{
    cy.visit(`/${url}`);

})

Cypress.Commands.add('login', (user)=>
{
    //cy.xpath(homePage.loginBtn).click();
    cy.xpath(loginPage.username).type(user.username);
    cy.xpath(loginPage.password).type(user.password);
    cy.get('button').contains('Sign In').click().wait(2000);

    // cy.log('*** verify sign in was successful ***')
    // cy.xpath(homePage.logOutBtn).contains('Log off').should('be.visible');
})

Cypress.Commands.add('loginRequest', (username, password) => {
    cy.session([username, password], () => {
      cy.request({
        method: 'POST',
        url: '/auth',
        body: { username, password },
      }).then(({ body }) => {
        window.localStorage.setItem('authToken', body.token)
      })
    })
  })