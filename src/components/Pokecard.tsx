import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { PokeContext } from '../contexts/PokeProvider';
import { useContext } from 'react';
import Capitalize from '../functions/capitalize';
// import { Link } from 'react-router-dom'

export interface Pokecardable {
  id: number,
  pokeName: string,
  pokeImg: string,
  add: boolean
}

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function Pokecard(props: Pokecardable) {

  const { user } = useContext(PokeContext)

  async function handleAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    // endpoint on pokefave flask-app: /add/<poke_num>
    const res = await fetch(`${base_api_url}/add/${props.id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `Bearer ${user.token || localStorage.getItem('token')?.replaceAll('"', "")}`
        },
        body: JSON.stringify({
            username: user.username,
            id: props.id,
            pokeName: Capitalize(props.pokeName),
            pokeImg: props.pokeImg
        })
    })
    if (res.ok) {
        const data = await res.json() 
        console.log(data)
    }
}

  const variant = 'Dark'
  return (
    <>
    {/* <Link to={`/pokemon/${props.id}`}></Link> */}
      <Card
        bg={variant.toLowerCase()}
        key={variant}
        text="light"
        className="mb-2 pokeCard"
      >
        <Card.Header>{props.id}</Card.Header>
        <Card.Body>
          <Image src={props.pokeImg} />
          <Card.Title>{Capitalize(props.pokeName)}</Card.Title>
          {
            user.token && props.add ?
            <Button onClick={handleAdd}>Favorite!</Button> :
            ''
          }
        </Card.Body>
      </Card>
    </>
  )
}