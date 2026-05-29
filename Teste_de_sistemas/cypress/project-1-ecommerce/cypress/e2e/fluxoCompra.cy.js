describe('Validação de componentes da home', () => {
  it('Validação da página inicial', () => {
    cy.visit('http://localhost:3000/');

    //Valiidação dos componentes na barra de navegação
    cy.get('.logo').should('exist');
    cy.get('.nav > [href="/"]').should('exist');
    cy.get('[data-cy="cart-link"]').should('exist');

    //Validação do container principal e componentes
    cy.get('.container').should('exist');
    cy.get('.page-title').should('exist');
    cy.get('.page-subtitle').should('exist');

    //Validação dos componentes de filtros
    cy.get('[data-cy="filters-section"]').should('exist');
    cy.get('.filter-label').should('exist');
    cy.get(':nth-child(2) > label').should('exist');
    cy.get('[data-cy="category-filter"]').should('exist');
    cy.get(':nth-child(3) > label').should('exist');
    cy.get('[data-cy="sort-filter"]').should('exist');
    cy.get('[data-cy="results-count"]').should('exist');

    //Validação dos produtos existentes
    cy.get('[data-cy="product-grid"]').should('exist');
    cy.get('[data-cy="product-grid"]').find('[data-cy="product-card"]').should('exist')
    cy.get('[data-cy="product-card"]').each(($card) => {
      cy.wrap($card).find('[data-cy="product-image"]');
      cy.wrap($card).find('.product-info');
      cy.wrap($card).find('.product-category');
      cy.wrap($card).find('[data-cy="product-name"]');
      cy.wrap($card).find('[data-cy="product-price"]');
      cy.wrap($card).find('[data-cy="btn-ver-produto"]');
    });
  });
});

describe('Fluxo de compra completo', () => {
  it('Fluxo de compra do tênis', () => {
    cy.visit('http://localhost:3000/');
    //Verifica existência do produto e vai para a página de compra
    cy.get('[data-product-id="1"] > .product-info > [data-cy="product-name"]').should('exist');
    cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').should('exist').click();
    cy.get('[data-cy="size-select"]').should('exist');
    cy.get('[data-cy="size-select"]').select('42');
    cy.get('[data-cy="quantity-select"]').should('exist').select('2');
    cy.get('[data-cy="btn-adicionar-carrinho"]').should('exist').click();

    //Vai para o carrinho para finalizar a compra
    cy.get('#cart-badge').should('contain', '2');
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
    cy.get('[data-cy="success-card"]').should('exist');cy.get('[data-cy="success-card"]');
  });
})

describe('Teste para erros', () => {
  it('Não selecionar tamanho', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-product-id="1"] > .product-info > [data-cy="product-name"]').should('exist');
    cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').should('exist').click();
    cy.get('[data-cy="size-select"]').should('exist');
    cy.get('[data-cy="quantity-select"]').should('exist');
    cy.get('[data-cy="btn-adicionar-carrinho"]').should('exist').click();
    cy.get('#size-error').should('exist');
  });

  it('Não preencher os campos no formulário de compra', () => {
    cy.visit('http://localhost:3000/');
    //Verifica existência do produto e vai para a página de compra
    cy.get('[data-product-id="1"] > .product-info > [data-cy="product-name"]').should('exist');
    cy.get('[data-product-id="1"] > .product-info > [data-cy="btn-ver-produto"]').should('exist').click();
    cy.get('[data-cy="size-select"]').should('exist');
    cy.get('[data-cy="size-select"]').select('42');
    cy.get('[data-cy="quantity-select"]').should('exist').select('2');
    cy.get('[data-cy="btn-adicionar-carrinho"]').should('exist').click();

    //Vai para o carrinho para finalizar a compra
    cy.get('[data-cy="cart-link"]').should('exist').click();
    cy.get('[data-cy="btn-finalizar-compra"]').should('exist').click();

    //Preenchimento do formulário
    cy.get('[data-cy="input-nome"]').should('exist');
    cy.get('[data-cy="input-email"]').should('exist');
    cy.get('[data-cy="input-cep"]').should('exist');
    cy.get('[data-cy="input-cidade"]').should('exist');
    cy.get('[data-cy="input-endereco"]').should('exist');
    cy.get('[data-cy="input-numero"]').should('exist');
    cy.get('[data-cy="input-complemento"]').should('exist');
    cy.get('[data-cy="select-estado"]').should('exist');
    cy.get('[data-cy="select-frete"]').should('exist');
    cy.get('[data-cy="select-pagamento"]').should('exist');
    cy.get('[data-cy="btn-comprar"]').should('exist').click();

    //Erros
    cy.get('#erro-nome').should('exist');
    cy.get('#erro-email').should('exist');
    cy.get('#erro-cep').should('exist');
    cy.get('#erro-cidade').should('exist');
    cy.get('#erro-numero').should('exist');
    cy.get('#erro-estado').should('exist');
    cy.get('#erro-frete').should('exist');
    cy.get('#erro-pagamento').should('exist');
  });
}); 