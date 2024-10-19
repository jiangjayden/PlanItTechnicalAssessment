import contactPage from '../pageobjects/ContactPage'
import homePage from '../pageobjects/HomePage'

describe('Contact Page Form Validation', function () {

    beforeEach(() => {
        cy.fixture('users').as('userData')
        cy.visit('/')
    })

    it.only('Submits successfully with mandatory fields', function () {
        const formDetails = this.userData.formDetails;

        homePage.goToHomePage();
        contactPage.goToContactPage();
        contactPage.enterForename(formDetails.forename);
        contactPage.enterEmail(formDetails.email);
        contactPage.enterMessage(formDetails.message);
        contactPage.submitForm();
        contactPage.submissionPopUp.should('be.visible')
        contactPage.submissionPopUp.should('not.be.visible')
        contactPage.alertBanner.should('be.visible').contains(`Thanks ${formDetails.forename}, we appreciate your feedback.`)

    });

})