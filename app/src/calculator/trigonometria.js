
const trigonometria = {
    cosseno: (ca) => (hip) => ca/hip,
    seno: (ca) => (hip) => ca/hip,
    tangente: (co) => (ca) => co/ca,

    // Soma de Arcos
    somaArcos_sen: (a, b) => this.seno(a)*this.cosseno(b) + this.seno(b)*this.cosseno(a),
    somaArcos_cos: (a, b) => this.cosseno(a)*this.cosseno(b) - this.seno(a)*this.seno(b),
    subtracaoArcos_sen: (a, b) => this.cosseno(a)*this.cosseno(b) - this.seno(a)*this.seno(b),
    subtracaoArcos_cos: (a, b) => this.cosseno(a)*this.cosseno(b) + this.seno(a)*this.seno(b),

    relacaoFundamental: (sen, cos) => `${sen}**2 + ${cos}**2 = 1`,

    cossecante: (sen) => 1/sen,
    secante: (cos) => 1/cos,
}

t

module.exports = trigonometria