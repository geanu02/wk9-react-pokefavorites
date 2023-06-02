import { useState, createContext } from 'react'

interface UserContext { user: User, setUser: React.Dispatch<React.SetStateAction<User>> }
interface AuthChild { children: JSX.Element | JSX.Element[] }
interface User { token: string, username: string, loggedIn: boolean }

export const PokeContext = createContext<UserContext>({} as UserContext)

export default function PokeProvider({ children }: AuthChild) {
    const [ user, setUser ] = useState<User>({ token: '', username: '', loggedIn: false })
    return <PokeContext.Provider value={{ user, setUser}}>{ children }</PokeContext.Provider>
}