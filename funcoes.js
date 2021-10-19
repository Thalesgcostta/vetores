function exe1(){
    // declarar os vetores
    let vetor = []
    let impares = []
    let pares = []
    // entrada de dados
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
    // alimentar os vetores pares e impares
    // para não precisarmos controle o índice dos vetores destinos, usamos push()
    // push() já sabe a primeira posição vazia do vetor
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            // elemento par
            pares.push(vetor[i])            
        }
        else {
            // elemento ímpar
            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e qtde ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e qtde ${impares.length}`)
}

function exe2(){
     // declarar os vetores
     let vetor = []
     let m2 = []
     let m3 = []
     let m23 = []
    // entrada de dados
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
     // alimentar os vetores m2, m3 e m23
    // para não precisarmos controle o índice dos vetores destinos, usamos push()
    // push() já sabe a primeira posição vazia do vetor
    for(let i=0;i<7;i++){
        if (vetor[i] % 2 == 0) {
            // elemento é múltiplo de 2
            m2.push(vetor[i])            
        }
        if (vetor[i] % 3 == 0) {
            // elemento ímpar
            m3.push(vetor[i])       
        }
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            // elemento ímpar
            m23.push(vetor[i])       
        }
    }
    console.log(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    console.log(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    console.log(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
    alert(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    alert(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    alert(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
}
function exe3(){
    let vetCodigos = []
    let vetEstoque = []

    for(let i=0; i<10; i++){
        vetCodigos[i]= Number(prompt(`Informe o código do produto ${i+1}`))
        vetEstoque[i]= Number(prompt(`Informe o estoque do produto ${i+1}`))

    }
    let cliente = Number(prompt(`Informe o código do cliente`))
    do {
        let codigoCompra = Number(prompt(`Informe o códgio do produto para compra`))

        let achou = false
        for(let i=0;i<10;i++){
            if (codigoCompra == vetCodigos[i]){
                achou = true

                let qtdeCompra = Number(prompt(`Informe a qtde da compra`))
                if (vetEstoque[i] - qtdeCompra >= 0){
                    vetEstoque[i] = vetEstoque[i] - qtdeCompra
                }
                else{
                    alert(`Qtde em estoque é insuficiente`)
                }
            }
        }
        if (!achou){
            alert(`Produto não comprado para venda`)
        }
        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
    alert(`Estoque atualizado`)
}
function exe4() {

    // let vetor = [] // vetor com tamanho dinâmico
    let vetor = new Array(15) // vetor com tamanho estático - fixado
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    // construi o vetor resultante
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            vetorR.push(i) // adicionamos a posição
        }
    }
    alert(`As posições contendo elementos igual a 30 é ${vetorR}`)
}

function exe5(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    // entrada de dados
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     // entrada de dados
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    // intersecção
    for(let i=0;i<15;i++){ // percorre o vetor de lógica
        for(let j=0;j<10;j++){// percorre o vetor de linguagem de programação
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function exe6() {
    // declaração dos vetores
    let vetNomes = new Array(5) // operador new aloca espaço na memória
    let vetVendas = new Array(5) // operador new aloca espaço na memória
    let vetComissao = new Array(5) // operador new aloca espaço na memória

    for(let i=0;i<5;i++){
        vetNomes[i] = prompt(`Informe o nome do vendedor ${i+1}`)
        vetVendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i+1}`))
        vetComissao[i] = Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""
    for(let i=0;i<5;i++){
        let receber = (vetVendas[i] * vetComissao[i]) / 100 // calcular o valor a receber do vendedor
        if (receber > maior){
            maior = receber // atualizar valor maior
            nomeMaior = vetNomes[i]
        }
        if (receber < menor){
            menor = receber // atualizar valor menor
            nomeMenor = vetNomes[i]
        }
        alert(`O vendedor ${vetNomes[i]} vai receber ${receber}`) // mostra o relatório
        totalVendas = totalVendas + vetVendas[i] // calcula o total de vendas
    }

    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)

}
function exe7() {
    let vet = new Array(10)
    let qttNegativo = 0; let somaPositivo = 0

    for (let i = 0; i < 10; i++) {
        vet[i] = Number(prompt(`Insira o ${i + 1}° número real: `))
    }
    for (let i = 0; i < 10; i++) {
        if (vet[i] < 0) {
            qttNegativo++
        }
        else if (vet[i] > 0) {
            somaPositivo = somaPositivo + vet[i]
        }
    }
    alert (`Quantidade de número negativos: ${qttNegativo}\nSoma dos números positivos: ${somaPositivo}`)
}
function exe8() {
    let alunos = new Array(7)
    let medias = new Array(7)
    let maiorMedia = 0
    let nomeMaior = ""
    for (let i = 0; i < 7; i++) {
        alunos[i] = String(prompt(`Insira o nome do ${i + 1}° aluno: `))
        medias[i] = Number(prompt(`Insira a média final desse aluno: `))
        if (medias[i] > maiorMedia) {
            maiorMedia = medias[i]
            nomeMaior = alunos[i]
        }
        if (medias[i] < 7) {
            alert(`Para ser aprovado, o aluno ${alunos[i]} precisa tirar ${10 - medias[i]}`)
        }
    }
    alert(`Nome do aluno com maior média: ${nomeMaior} (${maiorMedia})`)
}
function exe9() {
    let vetProdutos = new Array(4)
    let vetCodigos = new Array(4)
    let vetPrecos = new Array(4)
    let novoPreco = []

    for(let i = 1; i <= 4; i++) {
        vetProdutos[i] = prompt(`Digite o nome do produto:`)
        vetCodigos[i] = Number(prompt(`Digite o código do produto:`))
        vetPrecos[i] = Number(prompt(`Digite o preço do produto:`))
    }
    for(let i = 1; i <= 4; i++) {
        if (vetPrecos[i] > 1000) {
            novoPreco[i] == (vetPrecos[i] * (10 / 100))
        }
        if (vetCodigos[i] % 2 === 0) {
            novoPreco[i] == (vetPrecos[i] * (15 / 100))
        }
        if ((vetCodigos[i] % 2 === 0) && (vetPrecos[i] > 1000)) {
            novoPreco[i] == (vetPrecos[i] * (20 / 100))
        }
        alert(`O produto ${vetProdutos} que custava R$${vetPrecos}, sofreu aumento e foi para R$${novoPreco}.`)
    }
    for(let i = 1; i <= 4; i++) {
        if ((vetPrecos[i] < 1000) && (vetCodigos[i] % 2 !== 0)) {
            alert(`O produto ${vetProdutos} não sofreu alteração no preço`)
        }
    }
}