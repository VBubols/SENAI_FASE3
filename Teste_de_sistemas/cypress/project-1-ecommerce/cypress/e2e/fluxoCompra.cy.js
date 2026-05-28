describe('Fluxo de compra completo', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    //Verifica existência do produto e vai para a página de compra
    cy.get('[data-product-id="1"] > .product-info > [data-cy="product-name"]').should('exist');
    cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').should('exist').click();
    cy.get('[data-cy="size-select"]').should('exist');
    cy.get('[data-cy="size-select"]').select('42');
    cy.get('[data-cy="quantity-select"]').should('exist');
    cy.get('[data-cy="btn-adicionar-carrinho"]').should('exist').click();

    //Vai para o carrinho para finalizar a compra
    cy.get('[data-cy="cart-link"]').should('exist').click();
    cy.get('[data-cy="btn-finalizar-compra"]').should('exist').click();

    //Preenchimento do formulário
    cy.get('[data-cy="input-nome"]').should('exist').type('Vitor Razia Bubols');
    cy.get('[data-cy="input-email"]').should('exist').type('vitorbubols@email.com');
    cy.get('[data-cy="input-cep"]').should('exist').type('11111111');
    cy.get('[data-cy="input-cidade"]').should('exist').type('São José');
    cy.get('[data-cy="input-endereco"]').should('exist').type('José Aurino de Matos, Kobrasol');
    cy.get('[data-cy="input-numero"]').should('exist').type('123');
    cy.get('[data-cy="input-complemento"]').should('exist').type('Casa');
    cy.get('[data-cy="select-estado"]').should('exist').select('SC');
    cy.get('[data-cy="select-frete"]').should('exist').select('expresso');
    cy.get('[data-cy="select-pagamento"]').should('exist').select('pix');
    cy.get('[data-cy="btn-comprar"]').should('exist').click();
    cy.get('[data-cy="success-card"]').should('exist');
  })
})