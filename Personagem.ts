import prompt from "prompt-sync";

class Personagem{
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;

    constructor(nome: string){
        this.energia = 50;
        this.ataque = 50;
        this.nome = nome;
    }
}

let teclado = prompt();

let sansa : Personagem;
sansa = new Personagem("Sansa Stark");
sansa.defesa = 20;
sansa.vida = 100;

console.log("person :>>", sansa);
