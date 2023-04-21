import Image from 'next/image'

// o link da imagem foi adicionado em next config, para que o next entenda e permita q se trata de uma imagem externa

export default function Card({pokemon}) {
    return (
        <div>
            <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt={pokemon.name} 
             />
            <h3>{pokemon.name}</h3>
        </div>
    )
}