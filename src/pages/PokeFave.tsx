import { useState, useEffect } from 'react'
import Pokecard, { Pokecardable } from '../components/Pokecard'
import { PokemonClient } from 'pokenode-ts';

export default function PokeFave() {
    
    const [ pokeList, setPokeList ] = useState<Pokecardable[]>([])
    const randomNumbers: number[] = Array.from({length: 6}, () => Math.floor(Math.random() * 1009) + 1)

    useEffect(() => {
        (async () => {
            const api = new PokemonClient()
            for (let num of randomNumbers) {
                await api
                    .getPokemonById(num)
                    .then((data) => {
                        let arr: Pokecardable = { 
                            id: num, 
                            pokeName: data.name, 
                            pokeImg: data.sprites.front_default || ''
                        }
                        setPokeList(prevState => [...prevState, arr ])
                    })
                    .catch((error) => console.error(error))
            }
      })()
    },[])
    // Sprites
    // data.sprites.other.official_artwork.front_default
    // data.sprites.front_default
    // data.sprites.front_default

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