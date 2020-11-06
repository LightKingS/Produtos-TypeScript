import Produto from "./Produto";

export default class Mercado{
    private produtos: Produto[];
    constructor(
    ) {
        this.produtos = new Array <Produto>();
    }

    buscarProduto(codigoProcurado: number): Produto | undefined {
        for (let i=0;i<this.produtos.length;i++){
            if (this.produtos[i].codigo == codigoProcurado){
                return this.produtos[i]
            }
    
        }
    }


    criarProduto(produto: Produto){
        this.produtos.push(produto)
    }

    listarProdutos(): Produto[]{
        if (!this.produtos) {
            throw new Error('Não tem produtos na lista')
        } else {
            return this.produtos
        }
    }
}