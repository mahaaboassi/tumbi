import Navbar from '../../components/navbar'
import About from '../../sections/about'
import Category from '../../sections/category'
import Fill from '../../sections/fill'
import Footer from '../../sections/footer'
import Gallery from '../../sections/gallery'
import HeroSection from '../../sections/hero'
import Location from '../../sections/location'
import Rooms from '../../sections/rooms'
import Signature from '../../sections/signature'

const Home = ()=>{
    return(<div>
        <Navbar/>
        <HeroSection/>
        <Category/>
        <About/>
        <Rooms/>
        <Fill/>
        <Signature/>
        <Gallery/>
        <Location/>
        <Footer/>
    </div>)
}
export default Home