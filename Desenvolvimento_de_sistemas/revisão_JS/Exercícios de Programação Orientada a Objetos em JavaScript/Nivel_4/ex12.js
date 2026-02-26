class ComponenteVisual{
    renderizar(){
        return `Componente genérico`
    }
}

class Botao extends ComponenteVisual{
    renderizar(){
        return `[BOTÃO]`
    }
}

class Input extends ComponenteVisual{
    renderizar(){
        return `[INPUT]`
    }
}

class Imagem extends ComponenteVisual{
    renderizar(){
        return `[IMAGEM: logo.png]`
    }
}

const componentes = [
    new ComponenteVisual(),
    new Botao(),
    new Input(),
    new Imagem()
]

componentes.forEach(c => console.log(c.renderizar()))