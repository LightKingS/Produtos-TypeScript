import Produto from "./Produto"
import prompt from "prompt-sync";

let option: number = 0
let teclado = prompt();

let vetorProdutos: Produto[] = [];

while (option != 9) {
    console.log("+================ Produto ==================+");
    console.log("|1. Verificar valor de compra e venda       |");
    console.log("|2. Apresentar total investido em estoque   |");
    console.log("|3. Lucro obtido ao vender o estoque        |");
    console.log("|4. Cadastrar novo produto                  |");
    console.log("|5. Listar Produtos                         |");
    console.log("|9. Sair                                    |");
    console.log("+===========================================+");
    
    option = +teclado("Escolha uma ação: ");
    
    switch (option) {
        case 1:
            ListarProdutos()
            let produtoEscolhido : Produto | undefined = buscarProduto()

            console.log("Valor de compra: " + produtoEscolhido?.valorDeCompra )
            console.log("Valor de venda: " + produtoEscolhido?.valorDeVenda )
            break;
        case 2:
            ListarProdutos()
            produtoEscolhido = buscarProduto()
            if (produtoEscolhido){
                let compra = produtoEscolhido.valorDeCompra
                let estoque = produtoEscolhido.QtdEmEstoque
    
                console.log("Total investido em estoque: " + compra * estoque);
            }
            break;
        case 3:
            ListarProdutos()
            produtoEscolhido = buscarProduto()

            console.log("Lucro obtido ao vender todo o estoque: ");
            break;
        case 4:
            console.log("Cadastrar novo produto: ")
            CriarProduto()
            break;
        case 5:
            console.log("Lista de produtos: ")
            ListarProdutos()
        default:
        break;
    }
}

function CriarProduto(){
    var codigo = +teclado("codigo: ")
    var nome = teclado("Nome: ")
    var valorDeCompra = +teclado("Valor de Compra: ")
    var valorDeVenda = +teclado("Valor de Venda: ")
    var QtdEmEstoque = +teclado("Quantidade em Estoque: ")
    var EstoqueMin = +teclado("Estoque Mínimo: ")

    let produto: Produto = new Produto(codigo,nome,valorDeCompra,valorDeVenda,QtdEmEstoque,EstoqueMin)
    vetorProdutos.push(produto)
    console.log(vetorProdutos)
}

function ListarProdutos(){
    for (let i=0;i<vetorProdutos.length;i++){
        console.log(vetorProdutos[i])
    }
}

function buscarProduto(): Produto | undefined {
    let codigoProcurado: number = +teclado('Digite o código do produto:')
    for (let i=0;i<vetorProdutos.length;i++){
        if (vetorProdutos[i].codigo == codigoProcurado){
            return vetorProdutos[i]
        }

    }
}