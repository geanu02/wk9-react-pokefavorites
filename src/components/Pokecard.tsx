import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

interface Pokecardable {
  id: number,
  pokeName: string,
  pokeImg: string
}

export default function Pokecard(props: Pokecardable) {
    const variant = 'Dark'
    return (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="mb-2 pokeCard"
        >
          <Card.Header>{props.id}</Card.Header>
          <Card.Body>
            
            <Image src={props.pokeImg} />
            <Card.Title>{props.pokeName}</Card.Title>
          </Card.Body>
        </Card>
    )
}