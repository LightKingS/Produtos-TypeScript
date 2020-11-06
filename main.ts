import Produto from "./Produto"
import prompt from "prompt-sync";
import Mercado from "./Mercado"

let option: number = 0
let teclado = prompt();

let mercado: Mercado = new Mercado()

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
            console.log(mercado.listarProdutos())
            let entrada = +teclado('Digite o código do produto: ')
            let produtoEscolhido : Produto | undefined = mercado.buscarProduto(entrada)

            console.log("Valor de compra: " + produtoEscolhido?.valorDeCompra )
            console.log("Valor de venda: " + produtoEscolhido?.valorDeVenda )
            break;
        case 2:
            console.log(mercado.listarProdutos())
            entrada = +teclado('Digite o código do produto: ')
            produtoEscolhido = mercado.buscarProduto(entrada)
            if (produtoEscolhido){
                console.log("Total investido em estoque: " + produtoEscolhido.getInvestido());
            }
            break;
        case 3:
            console.log(mercado.listarProdutos())
            entrada = +teclado('Digite o código do produto: ')
            produtoEscolhido = mercado.buscarProduto(entrada)

            console.log('Lucro obtido ao vender o estoque: ' + produtoEscolhido?.getLucro())
            break;
        case 4:
            console.log("Cadastrar novo produto: ")
            criarProduto()
            break;
        case 5:
            console.log("Lista de produtos: ")
            console.log(mercado.listarProdutos())
        default:
        break;
    }
}

function criarProduto(){
    var codigo = +teclado("codigo: ")
    var nome = teclado("Nome: ")
    var valorDeCompra = +teclado("Valor de Compra: ")
    var valorDeVenda = +teclado("Valor de Venda: ")
    var quantidadeEmEstoque = +teclado("Quantidade em Estoque: ")
    var estoqueMin = +teclado("Estoque Mínimo: ")

    mercado.criarProduto(new Produto(codigo,nome,valorDeCompra,valorDeVenda,quantidadeEmEstoque,estoqueMin))
    console.log()
}
