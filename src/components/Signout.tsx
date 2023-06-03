import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { PokeContext } from '../contexts/PokeProvider'

export default function Signout() {

    const { setUser } = useContext(PokeContext)
    const navigate = useNavigate()

    useEffect(() => {
        setUser({
            loggedIn: false,
            username: "",
            token: ""
        })
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        navigate('/signin')
    }, [])

    return (
        <Spinner animation='border'/>
    )
}