class Notificacao{
    constructor(mensagem){
        this.mensagem = mensagem;
    }

    enviar(mensagem){
        return `Notificação: ${mensagem}`
    }
}

class Email extends Notificacao{
    constructor(email, mensagem){
        super(mensagem);
        this.email = email;
    }

    enviar(emailContato, mensagem){
        return `Email de: ${this.email}
        Para: ${emailContato}
        Mensagem: ${mensagem}`
    }
}

class SMS extends Notificacao{
    constructor(celular, mensagem){
        super(mensagem);
        this.celular = celular;
    }

    enviar(celContato, mensagem){
        return `Mensagem de: ${this.celular}
        Para: ${celContato}
        Mensagem: ${mensagem}`
    }
}

class PushNotification extends Notificacao{
    constructor(app, mensagem){
        super(mensagem);
        this.app = app;
    }

    enviar(mensagem){
        return `Notificação de ${this.app}: ${mensagem}`
    }
}