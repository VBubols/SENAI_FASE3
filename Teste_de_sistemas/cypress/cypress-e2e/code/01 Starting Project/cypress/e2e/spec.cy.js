describe('End-to-end', () => {
  it('Adicionar tarefas', () => {
    cy.visit('http://localhost:5173');
    criarTarefa(4);
  });

  it('Validar campos e mensagem de erro', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="start-add-task-button"]').click();
    cy.get('.modal').should('exist');
    cy.get('#title').should('exist');
    cy.get('#summary').should('exist');
    cy.get('#category').should('exist');
    cy.get('[type="submit"]').click();
    cy.get('.error-message').should('exist');
  });

  it('Validar modal abrindo e fechando', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="start-add-task-button"]').click();
    cy.get('.modal').should('exist');
    cy.get('[type="button"]').click();
    cy.get('.modal').should('not.exist');
  });

  it('Adicionar tarefa com categoria urgente', () => {
    cy.visit('http://localhost:5173');
    cy.get('[data-cy="start-add-task-button"]').click();
    cy.get('.modal');
    cy.get('#title').type(`Teste categoria urgente`);
    cy.get('#summary').type(`Teste categoria urgente descrição`);
    cy.get('#category').select('urgent')
    cy.get('[type="submit"]').click();
  })
});

function criarTarefa(numTarefas) {
  for(let i = 0; i < numTarefas; i++){
      cy.get('[data-cy="start-add-task-button"]').click();
      cy.get('.modal');
      cy.get('#title').type(`Teste ${i}`);
      cy.get('#summary').type(`Teste ${i} descrição`);
      cy.get('[type="submit"]').click();
  };
};
