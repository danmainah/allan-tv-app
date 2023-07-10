import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { Nav } from './components/nav'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { Login } from './pages/Login'




function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
