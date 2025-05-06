import './App.css'
import Navbar from './components/navbar'
import About from './sections/about'
import Category from './sections/category'
import Fill from './sections/fill'
import Gallery from './sections/gallery'
import HeroSection from './sections/hero'
import Rooms from './sections/rooms'
import Signature from './sections/signature'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Category/>
    <About/>
    <Rooms/>
    <Fill/>
    <Signature/>
    <Gallery/>
    </>
  )
}

export default App
