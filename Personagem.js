"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem = /** @class */ (function () {
    function Personagem(nome) {
        this.nome = "";
        this.energia = 0;
        this.vida = 0;
        this.ataque = 0;
        this.defesa = 0;
        this.energia = 50;
        this.ataque = 50;
        this.nome = nome;
    }
    return Personagem;
}());
var teclado = prompt_sync_1.default();
var sansa;
sansa = new Personagem("Sansa Stark");
sansa.defesa = 20;
sansa.vida = 100;
console.log("person :>>", sansa);
