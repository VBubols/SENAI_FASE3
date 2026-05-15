export class AuthService {
    constructor() {
        this.users = [];
    }

    register(email, senha) {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            throw new Error("Email inválido")
        }

        if(senha.length < 6){
            throw new Error("Senha deve ter no mínimo 6 caracteres")
        }

        const usuarioExistente = this.users.find(
            user => user.email === email
        );

        if(usuarioExistente){
            throw new Error("Email já cadastrado")
        };

        const usuario = {email, senha}
        this.users.push(usuario)
        return {success: true, user: {email}}
    };

    login(email, senha) {
        
        const usuarioExistente = this.users.find(
            user => user.email === email && user.senha === senha
        );

        if(!usuarioExistente){
            throw new Error("Credenciais inválidas")
        };

        return {success: true, user: {email}};
    }
}