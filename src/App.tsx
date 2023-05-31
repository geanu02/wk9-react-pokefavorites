import NavBar from "./components/Navbar"
import PokeFave from "./pages/PokeFave"

function App() {

  const pokeArray = [
    { id: 361, pokeName: "Snorunt", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png" },
    { id: 574, pokeName: "Gothita", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png" },
    { id: 486, pokeName: "Regigigas", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png" },
    { id: 503, pokeName: "Samurott", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png" },
    { id: 76, pokeName: "Golem", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" },
    { id: 376, pokeName: "Metang", pokeImg: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png" },
  ]

  return (
    <>
      <NavBar />
      <PokeFave pokeList={pokeArray} />
    </>
  )
}

export default App
