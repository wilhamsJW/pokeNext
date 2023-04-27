// Faz mapeamento geral dos dados
// estou passando todos os meus paths para função para q possa pré renderizar
export const getStaticPaths = async() => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=251`)
    const data = await res.json()

    // params
    const paths = data.results.map((pokemon, i) => {
        return {
            params: {pokemonID: (i+1).toString()}
            /** Definindo o ID que irei passar como path, coloquei i+1 pq o array
             * começa em 0, então o pokemon zero do array será o pokemon 1 para mim
             * dessa forma percorro todos os id da minha rota e mando eles no return abaixo
             */
        }
    })

    return {
        paths,
        fallback: false /** é padrão do next.js porém pode ser usado como true, veja documentação */
    }
}

// faz mapeamento um a um dos dados
export const getStaticProps = async(context) => {
    // esse context é basicamente o que criamos acima, por isso acessamos: context.params.pokemonID
    //que é o mesmo nome q coloamos acima
    const id = context.params.pokemonID
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { data }
    }
}

export default function Pokemon({data}) { // Next automaticamente entende que esse parâmetro é da função getStaticProps()
    return <p>Nome do pokemon: {data.name}</p>
}