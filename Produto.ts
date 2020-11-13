export default class Produto{
    constructor(
        protected _codigo: number,
        protected _nome: string,
        protected _valorDeCompra: number,
        protected _valorDeVenda: number,
        protected _quantidadeEmEstoque: number,
        protected _estoqueMin: number,
    ) {}

    public get codigo() : number {
        return this._codigo;
    }
    
    public get valorDeCompra() : number {
        return this._valorDeCompra;
    }

    public get valorDeVenda() : number {
        return this._valorDeVenda
    }
    
    getInvestido(): number {
        return this._valorDeCompra * this._quantidadeEmEstoque
    }

    getLucro(): number {
        let compra = this._valorDeCompra * this._quantidadeEmEstoque
        let venda = this._valorDeVenda * (this._quantidadeEmEstoque - this._estoqueMin)
        return (venda - compra)
    }   
}
