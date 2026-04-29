/**
 * businessLogic.test.js
 * Testes de Integração — Regras de Negócio
 *
 * Escreva os testes para cada função de businessLogic.js.
 * Mínimo exigido: 8 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *
 *  calculateAverage():
 *   - média de array com múltiplos valores
 *   - array com um único elemento
 *   - erro para array vazio
 *   - erro para entrada inválida (null, string, etc.)
 *
 *  calculateDiscountedPrice():
 *   - preço com desconto válido
 *   - desconto 0% retorna preço original
 *   - desconto 100% retorna zero
 *   - erro para desconto > 100
 *   - erro para preço zero ou negativo
 *
 * Estrutura sugerida:
 *
 *   describe('nome da função', () => {
 *     it('deve fazer algo', () => {
 *       expect(funcao(args)).toBe(resultado)
 *     })
 *   })
 */

import { describe, it, expect } from 'vitest';
import { calculateAverage, calculateDiscountedPrice } from '../src/businessLogic.js';

// escreva seus testes aqui
describe('businessLogic', () => {
    describe('calculateAverage()', () => {
        it('BL-01', () => { expect(calculateAverage([10, 20, 30])).toBe(20) });
        it('BL-02', () => { expect(calculateAverage([42])).toBe(42) });
        it('BL-03', () => { expect(() => calculateAverage([])).toThrow() });
        it('BL-04', () => { expect(() => calculateAverage(null)).toThrow() });
        it('BL-05', () => { expect(() => calculateAverage('texto')).toThrow() });
    });

    describe('calculateDiscountedPrice', () => {
        it('BL-06', () => { expect(calculateDiscountedPrice(200, 10)).toBe(180) });
        it('BL-07', () => { expect(calculateDiscountedPrice(150, 0)).toBe(150) });
        it('BL-08', () => { expect(calculateDiscountedPrice(100, 100)).toBe(0) });
        it('BL-09', () => { expect(() => calculateDiscountedPrice(100, 110)).toThrow() });
        it('BL-10', () => { expect(() => calculateDiscountedPrice(0, 10)).toThrow() });
    })
});