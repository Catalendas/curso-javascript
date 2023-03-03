let valor
console.log(valor) 
// Como não tem nenhuma atribuição para essa variavel o retorno dela sera undefined poi nada foi definido para ela

valor = null
// Não está apontando para nenhum endereço de memoria mas nesse ponto ela foi definida
console.log(valor)
// Não é legal aatribuir undefined

const produto = {}
console.log(produto.preco) //udefined

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Evitar fazer isso
console.log(produto.preco)

produto.preco = null // Produto não tem valor