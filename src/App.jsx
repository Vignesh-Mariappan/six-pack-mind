import { useEffect, useRef, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoadingPage from './pages/LoadingPage';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ progressWidth, setProgressWidth ] = useState(0);
  const progressRef = useRef(null);
  progressRef.current = progressWidth;

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      progressRef.current += 5;
      setProgressWidth(progressRef.current)

      if(progressRef.current >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setIsLoading(false);
        }, 100)
      }
    }, 50);

  }, [])


  if(isLoading) {
    return <LoadingPage progressWidth={progressWidth} />
  }

  return (
    <HomePage />
  )
}

export default App
