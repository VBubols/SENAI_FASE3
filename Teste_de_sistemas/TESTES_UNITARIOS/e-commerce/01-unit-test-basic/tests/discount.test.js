import {describe, test, expect} from "vitest";
import { applyDiscount } from "../src/discount";

describe("applyDiscount()", () => {
    test("DC-01", () => {
        //Arrange
        const price = 100;
        const percentage = 20;

        //Act
        const result = applyDiscount(price, percentage);

        //Assert
        expect(result).toBe(80);
    })

    test("DC-02", () => {
        //Arrange
        const price = 100;
        const percentage = 0;

        //Act
        const result = applyDiscount(price, percentage);

        //Assert
        expect(result).toBe(100);
    })

    test("DC-03", () => {
        //Arrange
        const price = 100;
        const percentage = 100;

        //Act
        const result = applyDiscount(price, percentage);

        //Assert
        expect(result).toBe(0);
    })

    test("DC-04", () => {
        //Arrange
        const price = 100;
        const percentage = -10;

        //Act
        const result = () => applyDiscount(price, percentage);

        //Assert
        expect(result).toThrow("Desconto inválido")
    })

    test("DC-05", () => {
        //Arrange
        const price = 100;
        const percentage = 110;

        //Act
        const result = () => applyDiscount(price, percentage);

        //Assert
        expect(result).toThrow("Desconto inválido")
    })
})