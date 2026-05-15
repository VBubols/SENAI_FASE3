import { describe, it, expect, beforeEach } from 'vitest';
import { AuthService } from '../src/authService.js'

describe("Autenticação de Usuário", () => {
    let authService;
    beforeEach(() => {
        authService = new AuthService();
    });

    describe("US-01: Cadastro", () => {
        it("Cadastro com dados válidos", () => {
            //Arrange - Given
            const email = "maria@email.com";
            const senha = "Senha123"
    
            //Act - When
            const resultado = authService.register(email, senha);
    
            //Expect - Then
            expect(resultado.success).toBe(true);
            expect(resultado.user.email).toBe(email);
    
        });
    
        it("Cadastro com email inválido", () => {
            const emailInvalido = "email-invalido";
            const senha = "Senha123";
    
            expect(() => authService.register(emailInvalido, senha)).toThrow("Email inválido");
        });
    
        it("Cadastro com senha muito curta", () => {
            const email = "maria@email.com";
            const senhaCurta = "123";
    
            expect(() => authService.register(email, senhaCurta)).toThrow("Senha deve ter no mínimo 6 caracteres")
        });
    
        it("Cadastro com email já existente", () => {
            const email = "maria@email.com";
            const senha = "Senha123";
    
            //Criando usuário com mesmo email
            authService.register(email, senha);
    
            expect(() => authService.register(email, senha)).toThrow("Email já cadastrado");
        });
    });

    describe("US-02: Login", () => {

        it("Login com credenciais corretas", () => {
            const email = "maria@email.com";
            const senha = "Senha123";

            authService.register(email, senha);

            const resultado = authService.login(email, senha);

            expect(resultado.success).toBe(true);
            expect(resultado.user.email).toBe(email);
        });

        it("Login com senha incorreta", () => {
            const email = "maria@email.com";
            const senha = "Senha123";
            const senhaErrada = "Senha1234";

            authService.register(email, senha);

            expect(() => authService.login(email, senhaErrada)).toThrow("Credenciais inválidas");
        });

        it("Login com email não cadastrado", () => {
            const email = "maria@email.com";
            const senha = "Senha123";
            const emailErrado = "mariaerrado@email.com";

            authService.register(email, senha);

            expect(() => authService.login(emailErrado, senha)).toThrow("Credenciais inválidas");
        });
    })

})