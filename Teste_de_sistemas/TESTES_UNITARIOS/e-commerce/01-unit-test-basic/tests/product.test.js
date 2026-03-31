import {describe, test, expect} from "vitest"
import { validateProduct } from "../src/product"

describe("validateProduct()", () => {
    test("PD-01", () => {
        //Arrange
        const product = 
        {name:"X",
        price: 10,
        stock: 5
        }
    
        // Act 
        const result = validateProduct(product);

        //Assert
        expect(result).toBeDefined()
    })

    test("PD-02", () => {
        //Arrange
        const product = 
        {name:"",
        price: 10,
        stock: 5
        }
    
        // Act 
        const result = () => validateProduct(product);

        //Assert
        expect(result).toThrow("Nome obrigatório")
    })

    test("PD-03", () => {
        //Arrange
        const product = 
        {name:"X",
        price: 0,
        stock: 5
        }
    
        // Act 
        const result = () => validateProduct(product);

        //Assert
        expect(result).toThrow("Preço inválido")
    })

    test("PD-04", () => {
        //Arrange
        const product = 
        {name:"X",
        price: 10,
        stock: -1
        }
    
        // Act 
        const result = () => validateProduct(product);

        //Assert
        expect(result).toThrow("Estoque inválido")
    })

    test("PD-05", () => {
        //Arrange
        const product = 
        {name:"X",
        price: 10,
        stock: 0
        }
    
        // Act 
        const result = () => validateProduct(product);

        //Assert
        expect(result).toBeDefined()
    })
})