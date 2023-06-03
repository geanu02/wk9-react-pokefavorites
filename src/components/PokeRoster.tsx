import { useState, useEffect, useContext } from "react"
import Pokecard, { Pokecardable } from "./Pokecard"
import { PokeContext } from "../contexts/PokeProvider"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function PokeRoster() {
    const { user } = useContext(PokeContext)
    const [ pokeList, setPokeList ] = useState<Pokecardable[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${base_api_url}/${user.username}/pokemon`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${user.token || localStorage.getItem('token')?.replaceAll('"', "")}`
                }
            })
            if (res.ok) {
                const data = await res.json()
                console.log(data)
                setPokeList(data)
            }
        })()
    }, [])
    // Sprites
    // data.sprites.other.official_artwork.front_default
    // data.sprites.front_default
    // data.sprites.front_default

    return (
        <>{ user.token ?
            <>
            <h2 className="pokeHeading">{user.username}'s Pokemon</h2>
            <div className="pokeContainer">
                
                { pokeList.map(pokemon => {
                    return <Pokecard
                                key={pokemon.id}
                                id={pokemon.id}
                                pokeName={pokemon.pokeName}
                                pokeImg={pokemon.pokeImg}
                                add={false}
                            />
                }) 
                }
            </div>
            </>
        :
        <h2 className="pokeHeading">Sign in to create your roster!</h2>
        }</>
    )
}
