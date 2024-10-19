import contactPage from '../pageobjects/ContactPage'
import homePage from '../pageobjects/HomePage'

describe('Contact Page Form Validation', function () {


    beforeEach(() => {
        cy.fixture('users').as('userData')
        cy.visit('/')
    })


    it('Verifies error messages display appropriately', function () {
        let errorAlertText = 'We welcome your feedback - but we won\'t get it unless you complete the form correctly'
        const formDetails = this.userData.formDetails;

        homePage.goToHomePage();
        contactPage.goToContactPage();
        contactPage.submitForm();

        // Validate mandatory fields display an error message
        contactPage.alertBanner.should('be.visible').contains(errorAlertText);
        contactPage.forenameError.should('be.visible').contains('Forename is required');
        contactPage.emailError.should('be.visible').contains('Email is required');
        contactPage.messageError.should('be.visible').contains('Message is required');
        contactPage.enterForename(formDetails.forename);
        contactPage.enterEmail('invalid email test');
        contactPage.enterMessage(formDetails.message);

        // Validate invalid mandatory fields display an error message
        contactPage.emailError.should('be.visible').contains( 'Please enter a valid email');
        contactPage.alertBanner.should('be.visible').contains( errorAlertText);

        contactPage.emailField.clear();
        contactPage.enterEmail(formDetails.email);

        // Validate mandatory fields no longer display an error message
        contactPage.forenameError.should('not.exist');
        contactPage.messageError.should('not.exist');
        contactPage.emailError.should('not.exist');
        contactPage.alertBanner.should('be.visible').contains('We welcome your feedback - tell it how it is.');
    })

})