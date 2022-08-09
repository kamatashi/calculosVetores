const trigonometria = require("./trigonometria")

// O vetor deve ter seus pontos dentro dele
const vetorValue = vetor => vetor[1] - vetor[0]
const moduloVetor = vetor => Math.sqrt( (vetor[0]**2) + (vetor[1]**2) )

// Soma e subtração de vetores oblíquos
const modulo_VetorResultante = vetor => coseno => moduloVetor(vetor) + 2 * vetor[0] * vetor[1] * coseno


// Multiplicador, usado quando queremos multiplicar o vetor
const multVetorHelper = (multiplicador) => (vetor) => vetor*multiplicador
const mult_selected = 5
function multVetor_selected (vetor) {
    return multVetorHelper(mult_selected)(vetor)
}



// PRODUTO ESCALAR
const produtoEscalar_Vetores = (vetor1, vetor2) => vetor1[0]*vetor2[0] + vetor1[1]*vetor2[1]
//const angulo_entreVetores = 
