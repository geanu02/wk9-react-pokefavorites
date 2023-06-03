import { useRef, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../contexts/PokeProvider"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function Signin() {

    const usernameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const { user, setUser } = useContext(PokeContext)
    const navigate = useNavigate()

    async function handleLoginForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // endpoint on pokefave flask-app: /verify-trainer
        const res = await fetch(`${base_api_url}/verify-trainer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameField.current?.value,
                password: passwordField.current?.value
            })
        })
        if (res.ok) {
            const data = await res.json() 
            setUser({
                loggedIn: true, 
                username: String(usernameField.current?.value), 
                token: data[0].token
            })
        }
    }

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
            <h2 className="LoginHeader">Login Page</h2>
            <form onSubmit={handleLoginForm}>
                <label>Username:<br />
                    <input type="text" ref={usernameField} />
                </label><br /><br />
                <label>Password:<br />
                    <input type="password" ref={passwordField} />
                </label><br /><br />
                <button>Sign In</button>
            </form>
        </div>
    )
}
