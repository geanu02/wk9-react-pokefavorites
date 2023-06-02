import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { PokeContext } from '../contexts/PokeProvider'

export default function Logout() {

    const { setUser } = useContext(PokeContext)
    const navigate = useNavigate()

    useEffect(() => {
        setUser({
            loggedIn: false,
            username: "",
            token: ""
        })
        navigate('/signin')
    }, [])

    return (
        <Spinner animation='border'/>
    )
}
