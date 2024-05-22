import { useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", ["night", "coffee", "synthwave"][Math.floor(Math.random() * 3)])
  }, [])

  return (
    <HomePage />
  )
}

export default App
