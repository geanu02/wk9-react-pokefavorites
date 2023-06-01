import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import PokeFave from './pages/PokeFave'
import About from './pages/About'
import Home from './pages/Home'
import PokePage from './pages/PokePage'

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/pokefave' element={ <PokeFave /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/pokemon/:pokeparam' element={ <PokePage /> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </BrowserRouter>
      <PokeFave />
    </>
  )
}

export default App
