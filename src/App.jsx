import { useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", ["night", "luxury", "coffee", "synthwave", "business"][Math.floor(Math.random() * 5)])
  }, [])

  return (
    <HomePage />
  )
}

export default App
