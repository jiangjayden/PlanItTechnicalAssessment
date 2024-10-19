class ContactPage{

    get alertBanner(){
        return cy.get('.alert');
    }

    get forenameError(){
        return cy.get('#forename-err');
    }

    get emailError(){
        return cy.get('#email-err');
    }

    get messageError(){
        return cy.get('#message-err');
    }
    get forenameField(){
        return cy.get('#forename');
    }

    get emailField(){
        return cy.get('#email');
    }

    get messageField(){
        return cy.get('#message');
    }

    get submissionPopUp(){
        return cy.get('.popup.modal.ng-scope');
    }

    goToContactPage(){
        cy.get('#nav-contact > a').click();    
    }
    
    submitForm(){
        cy.get('.btn-contact').click();
    }

    enterForename(forename){
        this.forenameField.type(forename);
    }

    enterEmail(email){
        this.emailField.type(email);
    }

    enterMessage(message){
        this.messageField.type(message);
    }

}
module.exports = new ContactPage();