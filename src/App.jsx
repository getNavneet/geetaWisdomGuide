
import { useEffect } from 'react'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import ImageDispaly from './components/imgDisplay/ImageDispaly'
import './App.css'
import Footer from './components/Footer/Footer.jsx'
import { trackVisit } from './utils/trackVisitors.js'
function App() {
  useEffect(() => {
  trackVisit();
}, []);


  return (
    <>
    <Header/>
    <Hero/>
    <Home/>
    <ImageDispaly/>
    <Footer/>
    </>
  )
}

export default App
