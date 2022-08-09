const vga = require('./calculator/vga')

const page = {
    primeiroVetor: document.querySelector('#primeiroVetor').val(),
    segundoVetor: document.querySelector('#segundoVetor').val(),
    btnModuloVetor: document.querySelector('#btn-moduloVetor'),
}


page.btnModuloVetor.addEventListener('click', (vetor) => {
    vetor = page.primeiroVetor
    document.querySelector('#res-moduloVetor').innerHTML = vga.moduloVetor(vetor)
})
