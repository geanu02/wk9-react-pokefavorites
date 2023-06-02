import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import PokeFave from './pages/PokeFave'
import About from './pages/About'
import Home from './pages/Home'
import PokePage from './pages/PokePage'
import Signin from './pages/Signin'
import Signout from './components/Signout'
import PokeRoster from './components/PokeRoster'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/pokefave' element={ <PokeFave /> } />
          <Route path='/pokeroster' element={ <PokeRoster /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/pokemon/:pokeparam' element={ <PokePage /> } />
          <Route path='/signin' element={ <Signin />} />
          <Route path='/signout' element={ <Signout />} />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
