/**
 * coreMath.test.js
 * Testes Unitários — Motor Matemático
 *
 * Escreva os testes para cada função de coreMath.js.
 * Mínimo exigido: 12 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - add()      : valores positivos, negativos, zero
 *  - subtract() : valores positivos, resultado negativo, zero
 *  - multiply() : valores positivos, multiplicação por zero, negativo
 *  - divide()   : divisão exata, resultado decimal, divisão por zero (toThrow)
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
import { add, subtract, multiply, divide } from '../src/coreMath.js';

// escreva seus testes aqui
describe('coreMath', () => {
    describe('add()', () => {
        it('CM-01', () => { expect(add(2, 3)).toBe(5) });
        it('CM-02', () => { expect(add(5, -3)).toBe(2) });
        it('CM-03', () => { expect(add(7, 0)).toBe(7) });
    });

    describe('subtract()', () => {
        it('CM-04', () => { expect(subtract(10, 4)).toBe(6) });
        it('CM-05', () => { expect(subtract(3, 8)).toBe(-5) });
        it('CM-06', () => { expect(subtract(5, 0)).toBe(5) });
    });

    describe('multiply()', () => {
        it('CM-07', () => { expect(multiply(4, 3)).toBe(12) });
        it('CM-08', () => { expect(multiply(9, 0)).toBe(0) });
        it('CM-09', () => { expect(multiply(5, -2)).toBe(-10) });
    });

    describe('divide()', () => {
        it('CM-10', () => { expect(divide(10, 2)).toBe(5) });
        it('CM-11', () => { expect(divide(7, 2)).toBe(3.5) });
        it('CM-12', () => { expect(() => divide(5, 0)).toThrow() });
    });
});