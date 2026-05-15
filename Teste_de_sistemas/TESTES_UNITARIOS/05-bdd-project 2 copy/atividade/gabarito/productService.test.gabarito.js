import { describe, it, expect, beforeEach } from 'vitest'
import { ProductService } from '../src/productService.js'

describe('Feature: Gerenciamento de Produtos', () => {
  let productService

  beforeEach(() => {
    productService = new ProductService()
  })

  // ── US-01: Adicionar produto ────────────────────────────────

  describe('US-01 | addProduct()', () => {

    it('Scenario: deve adicionar produto com dados válidos', () => {
      // Given
      const nome = 'Notebook'
      const preco = 3500

      // When
      const resultado = productService.addProduct(nome, preco)

      // Then
      expect(resultado.success).toBe(true)
      expect(resultado.product.nome).toBe('Notebook')
    })

    it('Scenario: o catálogo deve conter 1 produto após a adição', () => {
      // Given
      productService.addProduct('Notebook', 3500)

      // When
      const tamanho = productService.products.length

      // Then
      expect(tamanho).toBe(1)
    })

    it('Scenario: deve lançar erro com preço negativo', () => {
      // Given
      const nome = 'Mouse'
      const preco = -50

      // When / Then
      expect(() => productService.addProduct(nome, preco))
        .toThrow('Preço deve ser maior que zero')
    })

    it('Scenario: deve lançar erro sem nome', () => {
      // Given
      const nome = ''
      const preco = 100

      // When / Then
      expect(() => productService.addProduct(nome, preco))
        .toThrow('Nome é obrigatório')
    })
  })

  // ── US-02: Buscar produto ───────────────────────────────────

  describe('US-02 | findByName()', () => {

    it('Scenario: deve retornar produto pelo nome', () => {
      // Given
      productService.addProduct('Teclado', 150)

      // When
      const resultado = productService.findByName('Teclado')

      // Then
      expect(resultado.nome).toBe('Teclado')
    })

    it('Scenario: deve retornar null se produto não existe', () => {
      // Given — catálogo vazio

      // When
      const resultado = productService.findByName('Monitor')

      // Then
      expect(resultado).toBeNull()
    })
  })

  // ── US-03: Calcular desconto ────────────────────────────────

  describe('US-03 | applyDiscount()', () => {

    it('Scenario: deve calcular preço com desconto de 10%', () => {
      // Given
      const preco = 200
      const percentual = 10

      // When
      const resultado = productService.applyDiscount(preco, percentual)

      // Then
      expect(resultado).toBe(180)
    })

    it('Scenario: deve lançar erro com desconto negativo', () => {
      // Given
      const preco = 200
      const percentual = -5

      // When / Then
      expect(() => productService.applyDiscount(preco, percentual))
        .toThrow('Desconto inválido')
    })

    it('Scenario: deve lançar erro com desconto acima de 100%', () => {
      // Given
      const preco = 200
      const percentual = 110

      // When / Then
      expect(() => productService.applyDiscount(preco, percentual))
        .toThrow('Desconto inválido')
    })
  })
})
