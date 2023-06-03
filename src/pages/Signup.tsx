import { useRef, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PokeContext } from "../contexts/PokeProvider"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function Signup() {

    const emailField = useRef<HTMLInputElement>(null)
    const firstnameField = useRef<HTMLInputElement>(null)
    const lastnameField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)
    const usernameField = useRef<HTMLInputElement>(null)
    const { user, setUser } = useContext(PokeContext)
    const navigate = useNavigate()

    async function handleSignupForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // endpoint on pokefave flask-app: /register-trainer
        const res = await fetch(`${base_api_url}/register-trainer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": emailField.current?.value,
                "first_name": firstnameField.current?.value,
                "last_name": lastnameField.current?.value,
                "username": usernameField.current?.value,
                "password": passwordField.current?.value
            })
        })
        if (res.ok) {
            const data = await res.json() 
            console.log(data)
            setUser({
                loggedIn: true, 
                username: String(usernameField.current?.value), 
                token: data[0].token
            })
            console.log(user)
        } else {
            console.log(await res.json())
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
            <h2 className="LoginHeader">Sign Up</h2>
            <form onSubmit={handleSignupForm}>
                <label>Email:<br />
                    <input type="email" ref={emailField} />
                </label><br /><br />
                <label>First Name:<br />
                    <input type="text" ref={firstnameField} />
                </label><br /><br />
                <label>Last Name:<br />
                    <input type="text" ref={lastnameField} />
                </label><br /><br />
                <label>Username:<br />
                    <input type="text" ref={usernameField} />
                </label><br /><br />
                <label>Password:<br />
                    <input type="password" ref={passwordField} />
                </label><br /><br />
                <button>Sign Up</button>
            </form>
        </div>
    )
}
