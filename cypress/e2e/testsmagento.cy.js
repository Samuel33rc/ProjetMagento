context("Automatisation de test pour un site e-commerce", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  describe("Visiter une page articles du site web Magento", () => {
    it("une page avec une liste de hauts de femme s'affiche", () => {
      cy.get('[href="https://magento.softwaretestingboard.com/women.html"]')
        .click();
      cy.get("dd > .items > :nth-child(1) > a").click();
      
    });
  });

  describe("Ajouter un produit au panier", () => {
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
  describe("Accéder et modifier le panier", () => {
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
});
