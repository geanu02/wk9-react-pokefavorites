import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { PokemonClient } from 'pokenode-ts';

export interface Pokecardable {
  id: number,
  pokeName: string,
  pokeImg: string,
}

export default function PokePage() {
    const variant = 'Dark'

    const [ pokemon, setPokemon ] = useState<Pokecardable>()
    const { pokeid } = useParams()
    const pokeId: number = parseInt(pokeid!)
    console.log(pokeId)
    useEffect(() => {
        (async () => {
            const api = new PokemonClient();
            await api
                .getPokemonById(pokeId)
                .then((data) => {
                    console.log(data.name)
                    let poke: Pokecardable = { 
                        id: pokeId, 
                        pokeName: data.name, 
                        pokeImg: data.sprites.back_default || ''
                    }
                    console.log(pokemon)
                    setPokemon(poke)
                })
                .catch((error) => console.error(error))
      })()
    },[])


    return (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="mb-2 pokeCard"
        >
          <Card.Header>{pokemon!.id}</Card.Header>
          <Card.Body>
            
            <Image src={pokemon!.pokeImg} />
            <Card.Title>{pokemon!.pokeName}</Card.Title>
          </Card.Body>
        </Card>
    )
}