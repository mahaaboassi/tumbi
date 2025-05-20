import img from "../assets/images/about.webp"
import Heading from "../components/heading"
const About = ()=>{
    return (<div id='about' className="about gap-10 py-16 px-5 sm:px-10 lg:px-24 ">
        <div className="w-full">
            <img src={img} alt="About" />
        </div>
        <div className="w-full flex flex-col gap-10 justify-center ">
            <Heading subTitle={"WELCOME TO HOTEL"} title={"Get to Know Our Luxury Hotels"} />
            <p>At TUMBI Hotels, we are committed to delivering an exceptional experience that  nurtures the mind, body, and soul. We provide personalized services, wellness driven  activities while placing you in the lap of luxury. Creating a sanctuary where they can  reconnect with themselves, embrace nature, and cultivate inner peace. Our mission is  to create a space that promotes balance, vitality, and well-being, allowing our guests to  feel refreshed, grounded, and rejuvenated.”</p>
            <a href="#rooms" className="!px-10 email-button">let's start</a>
        </div>
    </div>)
}
export default About