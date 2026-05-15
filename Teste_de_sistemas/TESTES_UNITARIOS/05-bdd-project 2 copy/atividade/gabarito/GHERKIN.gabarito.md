# Gabarito — Gherkin
# (referência do professor — não distribuir aos alunos)

```gherkin
Feature: Gerenciamento de Produtos

  # ── US-01: Adicionar produto ──────────────────────────────────

  Scenario: Adicionar produto com dados válidos
    Given que tenho o nome "Notebook" e o preço 3500
    When  eu adiciono o produto ao catálogo
    Then  o resultado indica sucesso
    And   o produto está no catálogo com o nome "Notebook"

  Scenario: O catálogo deve conter 1 produto após a adição
    Given que adicionei um produto ao catálogo
    When  eu verifico o tamanho do catálogo
    Then  o catálogo tem 1 produto

  Scenario: Adicionar produto com preço negativo
    Given que tenho o nome "Mouse" e o preço -50
    When  eu tento adicionar o produto
    Then  o sistema lança erro "Preço deve ser maior que zero"

  Scenario: Adicionar produto sem nome
    Given que não informei um nome e o preço é 100
    When  eu tento adicionar o produto
    Then  o sistema lança erro "Nome é obrigatório"

  # ── US-02: Buscar produto ──────────────────────────────────────

  Scenario: Buscar produto existente pelo nome
    Given que o catálogo tem o produto "Teclado"
    When  eu busco por "Teclado"
    Then  o resultado contém um produto com o nome "Teclado"

  Scenario: Buscar produto que não existe
    Given que o catálogo está vazio
    When  eu busco por "Monitor"
    Then  o resultado é null

  # ── US-03: Calcular desconto ───────────────────────────────────

  Scenario: Calcular preço com desconto de 10%
    Given que um produto custa 200
    When  eu aplico 10% de desconto
    Then  o preço final é 180

  Scenario: Desconto negativo é inválido
    Given que um produto custa 200
    When  eu aplico -5% de desconto
    Then  o sistema lança erro "Desconto inválido"

  Scenario: Desconto acima de 100% é inválido
    Given que um produto custa 200
    When  eu aplico 110% de desconto
    Then  o sistema lança erro "Desconto inválido"
```
