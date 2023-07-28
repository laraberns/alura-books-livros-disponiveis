const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categorias = elementoBtn.value

    let livrosFiltrados = categorias == 'disponivel' ? filtrarDisponibilidade() : filtrarPorCategoria(categorias)
    
    exibirOsLivrosNaTela(livrosFiltrados)

    if(categorias == 'disponivel'){
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }

}

function filtrarPorCategoria(categorias) {
    return livros.filter(livro => livro.categoria == categorias)
}


function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoValorTotalLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis da loja por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}

