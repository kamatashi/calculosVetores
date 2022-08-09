const trigonometria = require("./trigonometria")

// O vetor deve ter seus pontos dentro dele
const vetorValue = vetor => vetor[1] - vetor[0]
const moduloVetor = vetor => Math.sqrt( (vetor[0]**2) + (vetor[1]**2) )


// Soma e subtração de vetores oblíquos
const modulo_VetorResultante = vetor => coseno => moduloVetor(vetor) + 2 * vetor[0] * vetor[1] * coseno

const teste = trigonometria.soma_arcos.sen_soma(10)
console.log(teste)


const vetor = [3, 2]
console.log(moduloVetor(vetor))