let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const APILocal = 'http://localhost:3000/livros'

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    
    livros = aplicarDesconto(livros)

   exibirOsLivrosNaTela(livros)
} 

getBuscarLivrosDaAPI()
