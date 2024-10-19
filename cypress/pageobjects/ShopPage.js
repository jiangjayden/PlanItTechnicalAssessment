class ShopPage {

    goToShopPage() {
        cy.get('#nav-shop > a').click();
    }

    get StuffedFrogBuy() {
        return cy.get('#product-2 > div > p > .btn');
    }

    get fluffyBunnyBuy() {
        return cy.get('#product-4 > div > p > .btn');
    }

    get valentineBearBuy() {
        return cy.get('#product-7 > div > p > .btn');
    }

    // Clicks on buy button for the given item and the amount to purchase
    buyItem(quantityToBuy, itemName) {
        let item = null;

        // Determine what item to buy from given itemName
        switch (itemName.toLowerCase().replace(/\s+/g, '')) {
            case 'stuffedfrog':
                item = this.StuffedFrogBuy;
                break;
            case 'fluffybunny':
                item = this.fluffyBunnyBuy;
                break;
            case 'valentinebear':
                item = this.valentineBearBuy;
                break;
            default:
                cy.log(`Item "${itemName}" is not recognized.`);
                return; // Exit if the item is not recognized
        }

        try {
            for (let i = 0; i < quantityToBuy; i++) {
                item.click();
            }
        } catch (e) {
            cy.log(`Failed to click on ${itemName}:`, e);
        }

    }
}

module.exports = new ShopPage();