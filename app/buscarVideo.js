const lista = document.querySelector("[data-livros]")

async function buscaVideosAPI(termoDeBusca) {
    const conexao = await fetch(`http://localhost:8000/livros?q=${termoDeBusca}`)
    const conexaConvertida = await conexao.json()

    return conexaConvertida
}


function constroiCard(titulo, preco, autor, imagem, alt, categoria) {
    const livro = document.createElement("div")

    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'

    livro.className = "livro livroAPI"
    livro.innerHTML = `
        <img class="${disponibilidade}" src="${imagem}" alt="${alt}" />
            <h2 class="livro__titulo">
            ${titulo} 
            </h2>
            <p class="livro__descricao">${autor}</p>
            <p class="livro__preco" id="preco"> R$ ${preco}</p>
            <div class="tags">
              <span class="tag">${categoria}</span>
            </div>`

    return livro
}

async function buscarVideos(evento) {
    evento.preventDefault()
    const campoPesquisaValor = document.querySelector("[data-campo-pesquisa]").value

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    const busca = await buscaVideosAPI(campoPesquisaValor)
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.preco, elemento.autor, elemento.imagem, elemento.alt, elemento.categoria)))

        if (busca.length == 0) {
           lista.innerHTML = `<h2 class="naoExiste"> Não existem vídeos com o termo "${campoPesquisaValor}"</h2>`
        }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
botaoPesquisa.addEventListener("click", evento => buscarVideos(evento))
botaoPesquisa.addEventListener("click", function(){
    alert("O servidor utilizado é local, ou seja, o campo de pesquisa funciona apenas para a desenvolvedora Lara /:")
})