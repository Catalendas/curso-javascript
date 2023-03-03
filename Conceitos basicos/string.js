const nome = "Marcos"

// Funçoes que são utlizadas em strings

// Pega a primeira letra ou letra informada
console.log(nome.charAt())

// Retorna o codigo unicode do caracter
console.log(nome.charCodeAt(3))

// Retorna o index do caracter na string
console.log(nome.indexOf("o"))

// retorna o os caracteres apartir do index informado
console.log(nome.substring(1))

// Retorna os caracteres apartir do index informado ate o index informado como finalização
console.log(nome.substring(0, 5))

// Concatenando(juntando) texto
console.log(nome.concat(" Alexandre").concat(" Cardoso"))

// Mudando o caracter especifico
console.log(nome.replace("a", "4"))

// Quebrando a string e gerando uma virgola
console.log("laranja, uva, maça".split(","))

// for( var i = 0; i <= nome.length; i++) {
//     console.log(nome.charAt(i))
// }


