/**
 * orderService.test.js
 * Testes — Sistema de Pedidos
 *
 * Escreva os testes para o `OrderService`.
 * Mínimo exigido: 10 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - processOrder() : pedido válido retorna recibo com `id` e `timestamp`
 *  - processOrder() : chama `paymentGateway.charge` com o valor correto
 *  - processOrder() : chama `logger.log` durante o processamento
 *  - validate()     : lança erro para pedido sem itens
 *  - validate()     : lança erro para total zero ou negativo
 *  - processOrder() : rejeita quando o gateway falha
 *  - processOrder() : não chama `logger.log` quando o pedido é inválido
 *  - beforeEach     : estado do mock é resetado entre testes
 *
 * Estrutura sugerida:
 *
 *  
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { OrderService } from '../src/orderService.js'
import { logger } from '../src/logger.js'

// escreva seus testes aqui
let service, mockGateway, mockLogger;

beforeEach(() => {
    mockGateway = { charge: vi.fn() }
    mockLogger = { log: vi.fn() }
    service = new OrderService(mockGateway, mockLogger)
});

describe('validate()', () => {
    it('OS-01 - Lança erro para pedido sem itens', () => {
        const ordemSemItens = { items: [], total: 100};
        expect(() => service.validate(ordemSemItens)).toThrow('Pedido deve conter ao menos um item')
    });

    it('OS-02 - Lança erro para valor menor que zero ou negativo', () => {
        const ordemTotalZero = { items: [{ name: 'X' }], total: 0};
        const ordemTotalNegativo = { items: [{ name: 'X' }], total: -50};

        expect(() => service.validate(ordemTotalZero)).toThrow('Valor total do pedido deve ser maior que zero')
        expect(() => service.validate(ordemTotalNegativo)).toThrow('Valor total do pedido deve ser maior que zero')
    });
});

describe('processOrder()', () => {
    
})

