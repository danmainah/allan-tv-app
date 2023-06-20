import './App.css'
import { Nav } from './components/nav'
import { Home } from './pages/home'


function App() {

  return (
    <>
      <Nav />
      <Home />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
