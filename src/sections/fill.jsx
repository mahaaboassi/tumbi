import Heading from "../components/heading";
import afia from "../assets/images/afia.png"
import deatox from "../assets/images/deatox.png"
import { useEffect, useRef, useState } from "react";
const Fill = ()=>{
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 8 12" fill="none">
    <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
    </svg>
    const [ isTrigger , setIsTrigger ] = useState(false)
    const [ isTriggerSecond , setIsTriggerSecond ] = useState(false)
    const targetRef = useRef(null)
    const targetSecondRef = useRef(null)
    useEffect(() => {
         const handleIntersection = (entries) => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
               setIsTrigger(true); // Set state to true when the div is in view
             } 
           });
         };
        const handleIntersecondsection = (entries) => {
           entries.forEach(entry => {
             if (entry.isIntersecting) {
               setIsTriggerSecond(true); // Set state to true when the div is in view
             } 
           });
         };
         const observer = new IntersectionObserver(handleIntersection, {
           root: null, // Observe with respect to the viewport
           rootMargin: '0px',
           threshold: 0.5, // Trigger when 50% of the div is visible
         });
        const observerSecond = new IntersectionObserver(handleIntersecondsection, {
           root: null, // Observe with respect to the viewport
           rootMargin: '0px',
           threshold: 0.5, // Trigger when 50% of the div is visible
         });
         // Start observing the target div
         if (targetRef.current) {
           observer.observe(targetRef.current);
         }
        if (targetRef.current) {
           observerSecond.observe(targetSecondRef.current);
         }
         // Cleanup observer on component unmount
         return () => {
           if (targetRef.current) observer.unobserve(targetRef.current);
           if (targetSecondRef.current) observerSecond.unobserve(targetSecondRef.current);
         };
    }, []);
    return(<div className="container-fill">
        {/* <div className="lines">
                {
                    [...Array(500)].map((_,idx)=>{
                        const height = Math.floor(Math.random() * 60) + 800;
                        return<div style={{
                            left: `${idx*80}px`,
                            height : height
                        }} className="line" key={`Lines_${idx}`}></div>
                    })
                }
        </div> */}
        <div className="fill">
            
            <div className="fill-content gap-10 px-5 sm:px-10 lg:px-24">
                    <h3>Dive into the present moment—make the most of it!  Embrace each opportunity with gratitude.</h3>
                    <h4>At TUMBI Hotels, we embody the philosophy of our founder, Ali Tumbi</h4>
                    <p className="main-color">– "Live each moment to the fullest."</p>
                    <p>We treat our guests like family, welcoming them into a luxurious abode where they feel a  deep sense of belonging. Our goal is to make your stay unforgettable. We continually  invest in world-class wellness experiences designed to nourish your body, mind, and soul,  ensuring that your time with us is filled with positivity.</p>
                    <p>We know you will be enchanted with our themed suites, each tailored to your interests,  offering a range of lifestyle enhancements customized just for you.</p>
            </div>
            </div>
            <div  id="dining" className="py-16 px-5 sm:px-10 lg:px-24">
                <Heading isCenter={true} subTitle={"SERVICES"} title={"Dining and Drinks"} />
                <div ref={targetRef} className={`pt-16 resturant  ${isTrigger? "animation-text":"without-animation"}`}>
                    <div className="w-full items-center flex justify-center">
                        <img  src={deatox} alt="Deatox" />
                    </div>
                    <div className={`w-full flex flex-col gap-5`}>
                        <h2>dEATox</h2>
                        <p>Welcome to dEATox, where health and flavor come together in perfect harmony. Whether you're in the mood for a quick bite or a relaxing drink, our cozy spot offers a delightful multi-cuisine à la carte dining experience. Indulge in our delectable selection of healthy foods, detox options, freshly pressed juices, specialty mocktails, and indulgent pastries and cakes, all crafted with the finest ingredients and attention to detail. With every dish, we provide calorie counts so you can make mindful choices. The tranquil ambiance is designed to soothe your senses, creating the perfect atmosphere to unwind and rejuvenate. Savor each bite and sip, and let dEATox nourish body, mind and soul.</p>
                        <a target="_blank" href="https://tumbihotels.com/deatox"><div className="explore flex items-center gap-2">explore the menu {arrow}</div> </a>
                    </div>
                </div>
                <div ref={targetSecondRef} className={`pt-16 resturant-reverse ${isTriggerSecond? "animation-text":"without-animation"}`}>
                    <div className={` w-full flex flex-col gap-5`}>
                        <h2>afia</h2>
                        <p>Afia is a sophisticated, internationally-inspired all-day dining restaurant located at TUMBI Hotels, part of the Tapestry Collection by Hilton. This culinary haven offers an enticing blend of inventive salads with modern Arabian influences, showcasing a truly unique dining experience. Guests can indulge in a sumptuous buffet that features a diverse selection of international cuisines, complemented by local delicacies, available throughout the day—during breakfast, lunch, and dinner.</p>
                        <p>For those with specific tastes or dietary needs, the restaurant also offers an à la carte menu, ensuring that each guest can find something perfectly suited to their preferences. The atmosphere is further elevated by the stunning surroundings of the Dubai Palm Jumeirah, where diners can enjoy their meals while feeling the gentle sea breeze and soaking in the radiant sunshine. Whether you're looking for a leisurely meal or a special dining occasion, Afia promises a memorable experience for all who visit.</p>
                        <a target="_blank" href="https://tumbihotels.com/afia"><div className="explore flex items-center gap-2">explore the menu {arrow}</div></a>
                    </div>
                    <div className="w-full items-center flex justify-center">
                        <img  src={afia} alt="Afia" />
                    </div>
                    
                </div>

            </div>
    </div>)
}
export default Fill