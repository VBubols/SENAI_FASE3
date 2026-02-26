class Notificacao{
    enviar(mensagem){
        return `Notificação: ${mensagem}`
    }
}

class Email extends Notificacao{
    enviar(emailOrigem, emailContato, mensagem){
        return `Email de: ${emailOrigem}\ Para: ${emailContato}\ Mensagem: ${mensagem}`
    }
}

class SMS extends Notificacao{
    enviar(celOrigem, celContato, mensagem){
        return `Mensagem de: ${celOrigem}\ Para: ${celContato}\ Mensagem: ${mensagem}`
    }
}

class PushNotification extends Notificacao{
    enviar(app, mensagem){
        return `Notificação de ${app}: ${mensagem}`
    }
}

const not = new Notificacao();
const email = new Email();
const sms = new SMS();
const push = new PushNotification();

console.log(not.enviar('Teste'));
console.log(email.enviar('origem@email.com', 'contato@email.com', 'Teste'));
console.log(sms.enviar(123456798, 789456132, 'Teste'));
console.log(push.enviar('Whatsapp', 'Teste'));
