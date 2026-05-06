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
const ordemValida = {
    items: [{ name: 'Teclado', qty: 1 }],
    total: 150,
  };

describe('OrderService', () => {
 
    let service
    let mockGateway
    let mockLogger
   
    beforeEach(() => {
      mockGateway = {charge: vi.fn().mockResolvedValue({ success: true }),}
      mockLogger = {log: vi.fn(),}
      service = new OrderService(mockGateway, mockLogger)
    })
    

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
        it('OS-03 - Pedido válido retorna recibo com id e timestamp', async () => {
            const receipt = await service.processOrder(ordemValida);

            expect(receipt).toHaveProperty('id');
            expect(receipt).toHaveProperty('timestamp');
            expect(typeof receipt.id).toBe('string');
            expect(typeof receipt.timestamp).toBe('string');
        });

        it('OS-04 - Chama charge com o valor correto', async () => {
            await service.processOrder(ordemValida);

            expect(mockGateway.charge).toHaveBeenCalledWith(150);
        });

        it('OS-05 — Chama charge exatamente uma vez por pedido', async () => {
            await service.processOrder(ordemValida);
       
            expect(mockGateway.charge).toHaveBeenCalledTimes(1);
        });

        it('OS-06 - Chama logger.log durante o processamento', async () => {
            const spy = vi.spyOn(mockLogger, 'log');
 
            await service.processOrder(ordemValida);
       
            expect(spy).toHaveBeenCalled();
        });

        it('OS-07 - Não chama logger.log quando pedido é inválido', async () => {
            const orderInvalido = { items: [], total: 0 };
 
            await expect(service.processOrder(orderInvalido)).rejects.toThrow();
       
            expect(mockLogger.log).not.toHaveBeenCalled();
        });

        it('OS-08 — Rejeita quando o gateway falha', async () => {
            mockGateway.charge = vi.fn().mockRejectedValue(new Error('Falha na comunicação com o gateway'));
      
            await expect(service.processOrder(ordemValida)).rejects.toThrow('Falha na comunicação com o gateway');
        });
      
        it('OS-09 — Estado do mock é resetado entre testes', async () => {
            await service.processOrder(ordemValida);
      
            expect(mockGateway.charge).toHaveBeenCalledTimes(1);
        });
      
        it('OS-10 — Múltiplos pedidos chamam charge com valores corretos', async () => {
            await service.processOrder(ordemValida);
            await service.processOrder({ items: [{ name: 'Mouse' }], total: 80 });
      
            expect(mockGateway.charge).toHaveBeenCalledTimes(2);
            expect(mockGateway.charge).toHaveBeenNthCalledWith(1, 150);
            expect(mockGateway.charge).toHaveBeenNthCalledWith(2, 80);
        });
    });
});