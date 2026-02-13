class Livro{
    constructor(titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    descrever(){
        return `Título: ${this.titulo} | Autor: ${this.autor} | Ano: ${this.ano}`
    }
}

const Sapiens = new Livro('Sapiens: Uma Breve História da Humanidade', 'Yuval Harari', 2011);
const HomoDeus = new Livro('Homo Deus: Uma Breve História do Amanhã', 'Yuval Harari', 2015);
const Dracula = new Livro('Drácula', 'Bram Stoker', 1987);

console.log(Sapiens.descrever())
console.log(HomoDeus.descrever())
console.log(Dracula.descrever())