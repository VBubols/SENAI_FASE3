/**
 * businessLogic.js
 * Regras de Negócio da TechStore
 *
 * Implemente as duas funções de negócio abaixo.
 * Não altere os nomes das funções nem os parâmetros.
 *
 * Regras:
 *  - NÃO use os operadores nativos (+, -, *, /) diretamente.
 *  - OBRIGATÓRIO: importe e use as funções de coreMath.js.
 *  - Valide as entradas e lance Errors quando necessário.
 */

import { add, subtract, multiply, divide } from './coreMath.js';

export function calculateAverage(purchases) {
    if(!Array.isArray(purchases) || purchases.length === 0){
        throw new Error('Array vazio!')
    }

    let sum = 0;
    for(const value of purchases){
        sum = add(sum, value);
    }

    return divide(sum, purchases.length);
}

export function calculateDiscountedPrice(price, discountPercent) {
    if(price <= 0) {
        throw new Error('Preço inválido!');
    }
    if(discountPercent < 0 || discountPercent > 100) {
        throw new Error('Desconto inválido!')
    }

    const discountValue = divide(multiply(price, discountPercent), 100);
    return subtract(price, discountValue);
}