context("Automatisation de test pour un site e-commerce", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  describe("Visiter une page articles du site web Magento depuis le menu déroulant", () => {
    it("une page avec une liste de hauts de femme s'affiche", () => {
      cy.get(
        "#ui-id-2 > li.level0.nav-2.category-item.level-top.parent.ui-menu-item > ul"
      )
        .invoke("show")
        .should("be.visible");
      cy.get(
        '[href="https://magento.softwaretestingboard.com/women/tops-women.html"]'
      )
        .should("be.visible")
        .trigger("mouseover")
        .click();
      cy.url().should("include", "tops-women");
    });
  });
});
