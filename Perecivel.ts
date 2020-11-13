import Produto from "./Produto";

export class Perecivel extends Produto{
    private _dataValidade: number
    
    constructor(codigo: number, nome: string, valorDeCompra: number, valorDeVenda: number, quantidadeEmEstoque: number, estoqueMin: number, dataValidade: number){
        super(codigo, nome, valorDeCompra, valorDeVenda, quantidadeEmEstoque, estoqueMin)
        this._dataValidade = dataValidade
    }
}