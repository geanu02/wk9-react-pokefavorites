import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { PokemonClient } from 'pokenode-ts'
import { Pokecardable } from '../components/Pokecard'

export default function PokePage() {
    const variant = 'Dark'

    const [ pokemon, setPokemon ] = useState<Pokecardable>()
    const { pokeparam } = useParams()
    const pokeId: number = parseInt(pokeparam!)
    console.log(pokeId, typeof pokeId)

    useEffect(() => {
      (async () => {
          const api2 = new PokemonClient()
          await api2
              .getPokemonById(pokeId)
              .then((data) => {
                  let poke: Pokecardable = { 
                      id: pokeId, 
                      pokeName: data.name, 
                      pokeImg: data.sprites.back_default || ''
                  }
                  setPokemon(poke)
              })
              .catch((error) => console.error(error))
      })()
    },[])

    return (
      <>
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
      </>
    )
}