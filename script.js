console.log("Este é meu primeiro script e ele foi executado");

// A seguir as três instruções utilizando console.log do passo 2:

console.log("Controle de Pedidos do Corinthians Burguer");
console.log(10 + 4 * 3);
console.log("Corinthians Burguer Iniciando");

const nomePrato1 = 'Hamburguer do Timão'
const precoPrato1 = 46.90 

var antigaVariavel = "Este é um tipo de variável antiga que basicamente faz o que o let faz hoje em dia"
console.log(antigaVariavel);

const nomePrato2 = "Batata Frita dos Gaviões"
const precoPrato2 = 29.90
const cocaCola = 5
let lojaAberta = true
const mundiaisDoPalmeiras = null

console.log(nomePrato2);
console.log(precoPrato2);
console.log(lojaAberta);
console.log(mundiaisDoPalmeiras);

let descontoSemanal = 10
const valorMinimoDesconto = 40

let pedido = precoPrato1

if (pedido >= valorMinimoDesconto)
{
    pedido = pedido - descontoSemanal
    console.log("Desconto semanal aplicado");
}
else
{
    console.log("Pedido sem desconto");
}

console.log(pedido);

pedido = precoPrato1 + precoPrato2

console.log(pedido);

const totalCocaCola = cocaCola * 2
const valorPorPessoa = pedido / 2

console.log(totalCocaCola);
console.log(valorPorPessoa);

const mensagem = `O cliente pediu um ${nomePrato1} e uma ${nomePrato2}, que saiu no valor de ${pedido}, e foi entregue com sucesso.`

console.log(mensagem);
