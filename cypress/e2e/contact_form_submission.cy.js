import contactPage from '../pageobjects/ContactPage'
import homePage from '../pageobjects/HomePage'

describe('Contact Page Form Validation', function () {

    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Submits successfully with mandatory fields', () => {
        let foreName = 'user forename'

        homePage.goToHomePage();
        contactPage.goToContactPage();
        contactPage.enterForename(foreName);
        contactPage.enterEmail('emailTest@gmail.com');
        contactPage.enterMessage('Message input test');
        contactPage.submitForm();
        contactPage.submissionPopUp.should('be.visible')
        contactPage.submissionPopUp.should('not.be.visible')
        contactPage.alertBanner.should('be.visible').contains(`Thanks ${foreName}, we appreciate your feedback.`)

    });

})