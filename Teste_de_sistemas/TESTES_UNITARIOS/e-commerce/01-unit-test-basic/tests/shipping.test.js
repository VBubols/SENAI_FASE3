import {describe, test, expect} from "vitest";
import { calculateShipping } from "../src/shipping";

describe("calculateShipping()", () => {
    test("SH-01", () => {
        //Arrange
        const weight = 1;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(10);
    })

    test("SH-02", () => {
        //Arrange
        const weight = 0.5;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(10);
    })

    test("SH-03", () => {
        //Arrange
        const weight = 3;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(20);
    })

    test("SH-04", () => {
        //Arrange
        const weight = 5;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(20);
    })

    test("SH-05", () => {
        //Arrange
        const weight = 10;

        //Act
        const result = calculateShipping(weight);

        //Assert
        expect(result).toBe(40);
    })

    test("SH-06 peso zero", () => {
        //Arrange
        const weight = 0;

        //Act
        const result = () => calculateShipping(weight);

        //Assert
        expect(result).toThrow("Peso inválido");
    })

    test("SH-06 peso negativo", () => {
        //Arrange
        const weight = -1;

        //Act
        const result = () => calculateShipping(weight);

        //Assert
        expect(result).toThrow("Peso inválido");
    })
})