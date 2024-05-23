import { useEffect, useRef, useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import LoadingPage from './components/LoadingPage';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ progressWidth, setProgressWidth ] = useState(0);
  const progressRef = useRef(null);
  progressRef.current = progressWidth;

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", ["night", "coffee", "synthwave"][Math.floor(Math.random() * 3)])
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      progressRef.current += 5;
      setProgressWidth(progressRef.current)
      console.log("progress ", progressRef.current)

      if(progressRef.current >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false);
        }, 100)
      }
    }, 25);

  }, [])


  if(isLoading) {
    return <LoadingPage progressWidth={progressWidth} />
  }

  return (
    <HomePage />
  )
}

export default App
