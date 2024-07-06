import { useEffect, useRef, useState } from 'react'
import './App.css'
import Meditation from './pages/Meditation'
import LoadingPage from './pages/LoadingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import BlessedConsciousnessPage from './pages/BlessedConsciousnessPage';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ progressWidth, setProgressWidth ] = useState(0);
  const progressRef = useRef(null);
  progressRef.current = progressWidth;

  useEffect(() => {
    // const appTheme = JSON.parse(localStorage.getItem('appTheme'));

    // if(appTheme) {
    //   document.querySelector("html").setAttribute("data-theme", appTheme);
    // } else {
    //   document.querySelector("html").setAttribute("data-theme", "synthwave");
    // }

    document.querySelector("html").setAttribute("data-theme", "synthwave");
  }, [])

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
    <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<BlessedConsciousnessPage />} />
            <Route path='/meditation/' element={<Meditation />} />
          </Route>
          <Route path="/login/" element={<LoginPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
