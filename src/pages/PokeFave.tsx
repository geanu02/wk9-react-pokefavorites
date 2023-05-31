import Pokecard from '../components/Pokecard'

interface Pokefaveable {
    pokeList: PokeObj[]
}

interface PokeObj {
    id: number,
    pokeName: string,
    pokeImg: string
}

export default function PokeFave({ pokeList }: Pokefaveable) {
    
    return (
        <>
        <h2 className="pokeHeading">Today's Favorite Pokemon</h2>
        <div className="pokeContainer">
            
            { pokeList.map(pokemon => {
                return <Pokecard
                            key={pokemon.id}
                            id={pokemon.id}
                            pokeName={pokemon.pokeName}
                            pokeImg={pokemon.pokeImg}
                        />
            }) }
        </div>
        </>
    )
}