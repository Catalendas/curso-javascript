let peso1 = 1.0
let peso2 = Number("2.0")

console.log(peso1)
console.log(peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

let avaliacao1 = 9.023483
let avaliacao2 = 6.725389

let total = avaliacao1 * peso1 * avaliacao2 * peso2
let media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)