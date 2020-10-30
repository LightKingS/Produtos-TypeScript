export default class Produto{
    constructor(
        public codigo: number,
        public nome: string,
        public valorDeCompra: number,
        public valorDeVenda: number,
        public quantidadeEmEstoque: number,
        public estoqueMin: number,
    ) {}
getLucro(): number {
    let compra = this.valorDeCompra * this.quantidadeEmEstoque
    let venda = this.valorDeVenda * (this.quantidadeEmEstoque - this.estoqueMin)
    return (venda - compra)
}   
}
