context("Automatisation de test pour un site e-commerce", () => {
  beforeEach(() => {
      cy.visit("https://magento.softwaretestingboard.com/");
    });

    describe("Visiter une page articles du site web Magento", () => {
      it("une page avec une liste de hauts de femme s'affiche", () => {
        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
          .trigger("mouseover")
          .click();
        cy.get("dd > .items > :nth-child(1) > a").click();
        // cy.get(
        //   ".swatch-opt-1812 > .size > .swatch-attribute-options > #option-label-size-143-item-169"
        // ).click();
        // cy.get(
        //   ".swatch-opt-1812 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-60"
        // ).click();
      });
    });

    describe("Ajouter un produit au panier", () => {
      it("le produit devrait être ajouté au panier", () => {
        cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
          .trigger("mouseover")
          .click();
        cy.get("dd > .items > :nth-child(1) > a").click();
        cy.get(
          ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
        ).click();
        cy.get("#option-label-size-143-item-168").click();
        cy.get("#option-label-color-93-item-60").click();
        cy.get("#product-addtocart-button").click();
      });
    });
  });
