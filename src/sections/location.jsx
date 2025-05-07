import { useState } from "react"
import Heading from "../components/heading"
import { whatsNearby } from "../data/data"

const Location  = ()=>{
    const locationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <g clipPath="url(#clip0_89_324)">
    <path d="M12.5 12.5002C11.3542 12.5002 10.4167 11.5627 10.4167 10.4168C10.4167 9.271 11.3542 8.3335 12.5 8.3335C13.6459 8.3335 14.5834 9.271 14.5834 10.4168C14.5834 11.5627 13.6459 12.5002 12.5 12.5002ZM18.75 10.6252C18.75 6.84391 15.9896 4.16683 12.5 4.16683C9.01044 4.16683 6.25002 6.84391 6.25002 10.6252C6.25002 13.0627 8.28127 16.2918 12.5 20.146C16.7188 16.2918 18.75 13.0627 18.75 10.6252ZM12.5 2.0835C16.875 2.0835 20.8334 5.43766 20.8334 10.6252C20.8334 14.0835 18.0521 18.1772 12.5 22.9168C6.94794 18.1772 4.16669 14.0835 4.16669 10.6252C4.16669 5.43766 8.12502 2.0835 12.5 2.0835Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_89_324">
    <rect width="25" height="25" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    const [ changeInfo, setChangeInfo ] = useState(0)
    return(<div className=" py-16 px-5 sm:px-10 lg:px-24">
        <Heading isCenter={true} title={"Location and transportation"} subTitle={"CONTACT"} />
        <div className="location gap-5 pt-16">
            <div className="w-full">
                <div className="flex gap-4">
                    <h4 onClick={()=>setChangeInfo(0)} className={`${changeInfo == 0 ? "active":""}`}>What’s Nearby</h4>
                    <h4 onClick={()=>setChangeInfo(1)} className={`${changeInfo == 1 ? "active":""}`}>Airport Info</h4>
                </div>
                {changeInfo == 0 && <div>
                    <ul className="py-8">
                        {whatsNearby.map((e,idx)=>(<li key={`Whats_nearby_${idx}`} className={`flex justify-between mb-2`}>
                            <div className="flex gap-2 iems-center">{locationIcon}{e.name}</div>
                            <div>{e.value}</div>
                        </li>))}
                        
                    </ul>
                </div>}
                {changeInfo == 1 && <div>
                    <ul className="py-8">
                        <li>
                            <div className="flex gap-2 iems-center">{locationIcon}Dubai International Airport </div>
                            <div>30 kilometers</div>
                        </li>
                        <li>
                          Airport shuttle ( Not available )
                        </li>
                    </ul>
                </div>}

            </div>
            <div className="w-full">
            <iframe title="Map of our hotel location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.8158490741357!2d55.14137347567159!3d25.10809427776838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8caeaccc0f%3A0x68a6b36d493fd874!2sTumbi%20West%20Palm%20Beach%20Hotel%20Dubai%2C%20Tapestry%20Collection%20by%20Hilton!5e0!3m2!1sen!2sae!4v1746601107397!5m2!1sen!2sae" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </div>)
}
export default Location