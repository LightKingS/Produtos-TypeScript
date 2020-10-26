export default class Produto{
    constructor(
        public codigo: number,
        public nome: string,
        public valorDeCompra: number,
        public valorDeVenda: number,
        public QtdEmEstoque: number,
        public EstoqueMin: number,
    ) {}
    
}
