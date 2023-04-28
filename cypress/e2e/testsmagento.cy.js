import { faker } from '@faker-js/faker';

context("Automatisation de test pour un site e-commerce", () => {
        beforeEach(() => {
                cy.visit("https://magento.softwaretestingboard.com/");
        });

        describe.skip("Visiter une page articles du site web Magento", () => {
                it("une page avec une liste de hauts de femme s'affiche", () => {
                        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
                                .click();
                        cy.get("dd > .items > :nth-child(1) > a").click();

                });
        });

        describe.skip("Ajouter un produit au panier", () => {
                it("le produit devrait être ajouté au panier", () => {
                        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
                                .trigger("mouseover")
                                .click();
                        cy.get("dd > .items > :nth-child(1) > a").click();
                        cy.get(
                                ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo").click();
                        cy.get('#option-label-size-143-item-168').click();
                        cy.get("#option-label-color-93-item-60").click();
                        cy.get("#product-addtocart-button").click();
                });
        });

        describe.skip("Accéder et modifier le panier", () => {
                it("le sous-total et le total devraient se mettre à jour", () => {
                        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
                                .trigger("mouseover")
                                .click();
                        cy.wait(2000)
                        cy.get("dd > .items > :nth-child(1) > a").click();
                        cy.wait(2000)
                        cy.get(
                                ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo").click();
                        cy.wait(2000)
                        cy.get('#option-label-size-143-item-168').click();
                        cy.wait(2000)
                        cy.get("#option-label-color-93-item-60").click();
                        cy.wait(2000)
                        cy.get("#product-addtocart-button").click();
                        cy.wait(3000)
                        cy.get('.showcart').invoke('show').click();
                        cy.wait(10000)
                        cy.get(':nth-child(7) > .secondary').click();
                        cy.wait(2000)
                        cy.get('[data-role="cart-item-qty"]')
                                .invoke('val', '2')
                                .trigger('change');
                        cy.wait(2000)
                        cy.get('.update').click();

                });
        });

        describe.skip("Remplir les informations de facturation et de livraison", () => {
                it("Les informations de facturations pré-remplies s'affichent", () => {
                        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
                                .trigger("mouseover")
                                .click();
                        cy.wait(2000)
                        cy.get("dd > .items > :nth-child(1) > a").click();
                        cy.wait(2000)
                        cy.get(
                                ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo").click();
                        cy.wait(2000)
                        cy.get('#option-label-size-143-item-168').click();
                        cy.wait(2000)
                        cy.get("#option-label-color-93-item-60").click();
                        cy.wait(2000)
                        cy.get("#product-addtocart-button").click();
                        cy.wait(5000)
                        cy.get('.showcart').invoke('show').click();
                        cy.wait(5000)
                        cy.get(':nth-child(7) > .secondary').should('be.visible').click();
                        cy.wait(2000)
                        cy.get('[data-role="cart-item-qty"]')
                                .invoke('val', '2')
                                .trigger('change');
                        cy.wait(2000)
                        cy.get('.update').click();
                        cy.wait(13000)
                        cy.get('.checkout-methods-items > :nth-child(1) > .action').click();
                        cy.wait(3000);
                        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(faker.internet.email());
                        cy.get('[name="firstname"]').type(faker.name.firstName());
                        cy.get('[name="lastname"]').type(faker.name.lastName());
                        cy.get('[name="street[0]"]').type(faker.address.streetAddress());
                        cy.get('[name="city"]').type(faker.address.cityName());
                        cy.get('[name="postcode"]').type(faker.random.numeric(7));
                        cy.get('[name="country_id"]').select('JP');
                        cy.get('[name="telephone"]').type(faker.random.numeric(10));
                        cy.wait(3000);
                        cy.get('[data-role="opc-continue"]').click();
                });
        });

        describe("Valider la commande", () => {
                it("Un message de confirmation de commande s'affiche", () => {
                        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
                                .trigger("mouseover")
                                .click();
                        cy.wait(2000)
                        cy.get("dd > .items > :nth-child(1) > a").click();
                        cy.wait(2000)
                        cy.get(
                                ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo").click();
                        cy.wait(2000)
                        cy.get('#option-label-size-143-item-168').click();
                        cy.wait(2000)
                        cy.get("#option-label-color-93-item-60").click();
                        cy.wait(2000)
                        cy.get("#product-addtocart-button").click();
                        cy.wait(5000)
                        cy.get('.showcart').invoke('show').click();
                        cy.wait(5000)
                        cy.get(':nth-child(7) > .secondary').should('be.visible').click();
                        cy.wait(2000)
                        cy.get('[data-role="cart-item-qty"]')
                                .invoke('val', '2')
                                .trigger('change');
                        cy.wait(2000)
                        cy.get('.update').click();
                        cy.wait(13000)
                        cy.get('.checkout-methods-items > :nth-child(1) > .action').click();
                        cy.wait(3000);
                        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(faker.internet.email());
                        cy.get('[name="firstname"]').type(faker.name.firstName());
                        cy.get('[name="lastname"]').type(faker.name.lastName());
                        cy.get('[name="street[0]"]').type(faker.address.streetAddress());
                        cy.get('[name="city"]').type(faker.address.cityName());
                        cy.get('[name="postcode"]').type(faker.random.numeric(7));
                        cy.get('[name="country_id"]').select('JP');
                        cy.get('[name="telephone"]').type(faker.random.numeric(10));
                        cy.wait(3000);
                        cy.get('[data-role="opc-continue"]').click();
                        cy.wait(4000);
                        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
                        cy.wait(3000);
                        cy.get('.base').should('have.text', "Thank you for your purchase!");
                });
        });
});