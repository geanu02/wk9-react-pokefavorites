import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../contexts/PokeProvider"

function capitalize(str: string) {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
  }

export default function Home() {

    const { user, setUser } = useContext(PokeContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (user.token) { 
            localStorage.setItem('token', JSON.stringify(user.token))
            localStorage.setItem('username', JSON.stringify(user.username))
            navigate('/') 
        }
        if (!user.token || localStorage.getItem('token')) {
            const storedToken = localStorage.getItem('token')
            const storedUserName = localStorage.getItem('username')

            if (storedToken && storedUserName && !user.token) {
                setUser({
                    loggedIn: true, 
                    token: storedToken.replaceAll('"', ""), 
                    username: storedUserName.replaceAll('"', "")
                })
            
            }
            navigate('/')
        }
    },[user])

    return (
        <div>
            {   
                user.token
                ? 
                `Welcome to PokeFavorites, ${capitalize(user.username)}!` 
                : 
                `Welcome to PokeFavorites!`
            }
        </div>
    )
}