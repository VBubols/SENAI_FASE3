import {describe, test, expect} from "vitest";
import { calculateTotal } from "../src/price";

describe("calculateTotal()", () => {
    test("PR-01", () => {
        // Arrange
        const price = 10;
        const quantity = 2;

        //Act
        const result = calculateTotal(price, quantity);

        //Assert
        expect(result).toBe(20);
    })

    test("PR-02", () => {
        //Arrange
        const price = 9.99
        const quantity = 3

        //Act
        const result = calculateTotal(price, quantity);

        //Assert
        expect(result).toBe(29.97);
    })

    test("PR-03 preço zero", () => {
        // Arrange
        const price = 0
        const quantity = 5

        //Act
        const result = () => calculateTotal(price, quantity)

        //Assert
        expect(result).toThrow("Preço inválido")
    })

    test("PR-03 preço negativo", () => {
        // Arrange
        const price = -5
        const quantity = 2

        //Act
        const result = () => calculateTotal(price, quantity)

        //Assert
        expect(result).toThrow("Preço inválido")
    })

    test("PR-04 quantidade zero", () => {
        // Arrange
        const price = 10;
        const quantity = 0;

        //Act
        const result = () => calculateTotal(price, quantity);

        //Assert
        expect(result).toThrow("Quantidade inválida")

    })

    test("PR-04 quantidade negativa", () => {
        // Arrange
        const price = 10;
        const quantity = -1;

        //Act
        const result = () => calculateTotal(price, quantity);

        //Assert
        expect(result).toThrow("Quantidade inválida")

    })
})
