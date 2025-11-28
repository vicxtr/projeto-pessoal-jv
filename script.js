const prompt = require("prompt-sync")()

let produtos = [
    { nome: "Camiseta", categoria: "Roupas", preco: 39.90 },
    { nome: "Notebook", categoria: "Eletrônicos", preco: 3500 },
    { nome: "Caneca", categoria: "Utilidades", preco: 15.00 }
]

function listarProdutos() {
    console.log("--- LISTA DE PRODUTOS ---")
    for (let i = 0; i < produtos.length; i++) {
        let p = produtos[i]
        console.log((i+1) + ". " + p.nome + " - " + p.categoria + " - R$ " + p.preco)
    }
}

function adicionarProduto() {
    let nome = prompt("Nome: ")
    let categoria = prompt("Categoria: ")
    let preco = Number(prompt("Preço: "))
    let novoProduto = { nome: nome, categoria: categoria, preco: preco }
    let novoArray = []
    for (let i = 0; i < produtos.length; i++) {
        novoArray[i] = produtos[i]
    }
    novoArray[produtos.length] = novoProduto
    produtos = novoArray
    console.log("Produto adicionado com sucesso")
}

function buscarProduto() {
    let nome = prompt("Digite o nome do produto: ")
    let i = 0
    while (i < produtos.length) {
        if (produtos[i].nome === nome) {
            console.log("Produto encontrado:")
            console.log(produtos[i])
            return
        }
        i++
    }
    console.log("Produto não encontrado")
}

function filtrarPorCategoria() {
    let categoria = prompt("Categoria desejada: ")
    let filtrados = []
    let pos = 0
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].categoria === categoria) {
            filtrados[pos] = produtos[i]
            pos++
        }
    }
    console.log("--- PRODUTOS FILTRADOS ---")
    console.log(filtrados)
}

function removerProduto() {
    listarProdutos()
    let escolha = prompt("Digite o número do produto a remover: ")
    let index = Number(escolha) - 1
    if (index >= 0 && index < produtos.length) {
        let novoArray = []
        let pos = 0
        for (let i = 0; i < produtos.length; i++) {
            if (i !== index) {
                novoArray[pos] = produtos[i]
                pos++
            }
        }
        produtos = novoArray
        console.log("Produto removido com sucesso")
    } else {
        console.log("Número inválido")
    }
}

function editarProduto() {
    listarProdutos()
    let escolha = prompt("Digite o número do produto a editar: ")
    let index = Number(escolha) - 1
    if (index >= 0 && index < produtos.length) {
        let novoNome = prompt("Novo nome (aperte Enter para manter): ")
        let novaCategoria = prompt("Nova categoria (aperte Enter para manter): ")
        let novoPreco = prompt("Novo preço (aperte Enter para manter): ")
        if (novoNome !== "") produtos[index].nome = novoNome
        if (novaCategoria !== "") produtos[index].categoria = novaCategoria
        if (novoPreco !== "") produtos[index].preco = Number(novoPreco)
        console.log("Produto atualizado com sucesso")
    } else {
        console.log("Número inválido")
    }
}

function menu() {
    let opcao = ""
    while (opcao !== "7") {
        console.log("===== MENU =====")
        console.log("1 - Listar produtos")
        console.log("2 - Adicionar produto")
        console.log("3 - Buscar produto")
        console.log("4 - Filtrar por categoria")
        console.log("5 - Remover produto")
        console.log("6 - Editar produto")
        console.log("7 - Sair")
        opcao = prompt("Escolha uma opção: ")
        if (opcao === "1") listarProdutos()
        else if (opcao === "2") adicionarProduto()
        else if (opcao === "3") buscarProduto()
        else if (opcao === "4") filtrarPorCategoria()
        else if (opcao === "5") removerProduto()
        else if (opcao === "6") editarProduto()
        else if (opcao === "7") console.log("Encerrando...")
        else console.log("Opção inválida")
    }
}

menu()
