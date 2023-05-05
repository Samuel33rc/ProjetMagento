import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const shippingAdress = faker.address.streetAddress();
const shippingCity = faker.address.cityName();
const shippingCode = faker.random.numeric(7);
const billingAdress = faker.address.streetAddress();
const billingCity = faker.address.cityName();
const billingCode = faker.random.numeric(7);
const phone = faker.random.numeric(10);

context("Automatisation de test pour un site e-commerce", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  describe("Valider la commande", () => {
    it("Un message de confirmation de commande s'affiche", () => {
      cy.get(
        '[href="https://magento.softwaretestingboard.com/women.html"]'
      ).click();
      cy.wait(2000);
      cy.get("dd > .items > :nth-child(1) > a").click();
      cy.wait(2000);
      cy.get(
        ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
      ).click();
      cy.wait(2000);
      cy.get("#option-label-size-143-item-168").click();
      cy.wait(2000);
      cy.get("#option-label-color-93-item-60").click();
      cy.wait(2000);
      cy.get("#product-addtocart-button").click();
      cy.wait(5000);
      cy.get(".showcart").invoke("show").click();
      cy.wait(5000);
      cy.get(":nth-child(7) > .secondary").should("be.visible").click();
      cy.wait(2000);
      cy.get('[data-role="cart-item-qty"]')
        .invoke("val", "2")
        .trigger("change");
      cy.wait(2000);
      cy.get(".update").click();
      cy.wait(13000);
      cy.get(".checkout-methods-items > :nth-child(1) > .action").click();
      cy.wait(6000);
      cy.get(
        "#customer-email-fieldset > .required > .control > #customer-email"
      ).type(faker.internet.email());
      cy.get('[name="firstname"]').type(firstName);
      cy.get('[name="lastname"]').type(lastName);
      cy.get('[name="street[0]"]').type(shippingAdress);
      cy.get('[name="city"]').type(shippingCity);
      cy.get('[name="postcode"]').type(shippingCode);
      cy.get('[name="country_id"]').select("JP");
      cy.get('[name="telephone"]').type(faker.random.numeric(10));
      cy.wait(3000);
      cy.get('[data-role="opc-continue"]').click();
      cy.wait(4000);
      cy.get("#billing-address-same-as-shipping-checkmo").uncheck();
      cy.wait(2000)
      cy.get('[name="billingAddresscheckmo.firstname"]').type(firstName);
      cy.get('[name="billingAddresscheckmo.lastname"]').type(lastName);
      cy.get('[name="billingAddresscheckmo.street.0"]').type(billingAdress);
      cy.get('[name="billingAddresscheckmo.city"]').type(billingCity);
      cy.get('[name="billingAddresscheckmo.postcode"]').type(billingCode);
      cy.get('[name="billingAddresscheckmo.country_id"]').within(() => {
        cy.get('[name="country_id"]').select("JP");
    })
      cy.get('[name="billingAddresscheckmo.telephone"]').type(phone);
      cy.wait(3000);
      cy.get(".action-update").click();
      cy.wait(2000);
      cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
      cy.wait(3000);
      cy.get('.base').should('have.text', "Thank you for your purchase!");
    });
  });
});
