import './App.css'
import { NavBar } from './components/Navbar/NavBar'
import { GameProvider } from './context/gameContext'

function App() {

  return (
    <GameProvider>
      <NavBar/>
    </GameProvider>
  )
}

export default App
