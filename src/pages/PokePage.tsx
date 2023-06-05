import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { PokemonClient } from 'pokenode-ts'
import { Pokecardable } from '../components/Pokecard'

export default function PokePage() {
    const variant = 'Dark'

    const [ pokemon, setPokemon ] = useState<Pokecardable>({id: 1, pokeName: 'Bulbasaur', pokeImg: "", add: true})
    const { pokeparam } = useParams()
    let pokeId: number = 1
    if ( pokeparam !== undefined ) {
      pokeId = +pokeparam;
    }
    useEffect(() => {
      (async () => {
          const api2 = new PokemonClient()
          await api2
              .getPokemonById(pokeId)
              .then((data) => {
                  setPokemon({ 
                      id: pokeId, 
                      pokeName: data.name, 
                      pokeImg: data.sprites.front_default || '',
                      add: true
                  })
              })
              .catch((error) => console.error(error))
      })()
    },[ pokemon ])

    return (
      <>
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="mb-2 pokeCard"
        >
          <Card.Header>{pokemon.id}</Card.Header>
          <Card.Body>
            <Image src={pokemon.pokeImg} />
            <Card.Title>{pokemon.pokeName}</Card.Title>
          </Card.Body>
        </Card>
      </>
    )
}