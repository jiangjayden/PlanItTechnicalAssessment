class HomePage{

    get startShoppingButton(){
        return cy.get('.btn.btn-success.btn-large');
    }

    startShopping(){
        this.startShopping.click();
    }

    goToHomePage(){
        cy.get('#nav-home > a').click();
    }

}
module.exports = new HomePage();