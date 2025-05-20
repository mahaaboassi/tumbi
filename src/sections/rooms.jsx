import Heading from "../components/heading"
import { dataRoom, link } from "../data/data"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation , Autoplay } from 'swiper/modules';
import { useState } from "react";
import RoomDetails from "../components/roomDetails";

const Rooms = ()=>{
  const [ room, setRoom ] = useState({})
  const [ isOpen, setIsOpen ] = useState(false)
  const viewDetails = (value)=>{
    setRoom(value)
    setIsOpen(true)
  }
  const closeView = ()=> setIsOpen(false)
    return(<div id="rooms" className="py-16 px-5 sm:px-10 lg:px-24">
        {isOpen && <RoomDetails closeView={closeView} room={room}/>}
        <Heading isWithArrows={true} isCenter={true} title={"Discover Our Rooms"} subTitle={"FEATURED ROOMS"} />
        <div className="card pt-16">
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                    delay: 3000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{

                    200: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                      
                    },
                  }}>     
                {
                    dataRoom.map((e,idx)=>(<SwiperSlide key={`Rooms_Slider_${e.name}_${idx}`}>
                        <div className={`content`} >
                            <img src={e.img} alt={e.name} />
                            <div className="flex gap-1">{[1,2,3,4,5].map((_,i)=>(<div key={`Stars_${i}_${e.name}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                    <g clipPath="url(#clip0_89_111)">
                                    <path d="M7.33948 0.214674L9.12936 4.28897L13.6718 4.68419C13.7436 4.68991 13.812 4.7162 13.8684 4.75973C13.9248 4.80326 13.9667 4.86209 13.9889 4.9288C14.0111 4.99552 14.0125 5.06714 13.993 5.13463C13.9735 5.20213 13.9339 5.26249 13.8792 5.3081L10.4407 8.22783L11.4547 12.5575C11.4653 12.603 11.4666 12.65 11.4584 12.696C11.4503 12.742 11.4329 12.7859 11.4073 12.8253C11.3817 12.8647 11.3483 12.8988 11.3091 12.9256C11.27 12.9524 11.2257 12.9714 11.179 12.9815C11.0823 13.0014 10.9815 12.983 10.8987 12.9305L6.99654 10.6613L3.08411 12.9416C3.04324 12.9657 2.99786 12.9818 2.9506 12.9887C2.90334 12.9957 2.85513 12.9935 2.80875 12.9823C2.76236 12.971 2.71872 12.951 2.68033 12.9232C2.64194 12.8955 2.60957 12.8606 2.58509 12.8206C2.56056 12.7814 2.54421 12.7379 2.53698 12.6926C2.52974 12.6472 2.53177 12.6009 2.54293 12.5563L3.55807 8.22672L0.124149 5.3081C0.0519698 5.2457 0.00773673 5.15823 0.000922335 5.06445C-0.00589206 4.97066 0.025254 4.87799 0.0876904 4.8063C0.156503 4.7376 0.250108 4.69777 0.348595 4.69529L4.87399 4.30007L6.66386 0.214674C6.69273 0.150821 6.74004 0.0965278 6.80002 0.0584113C6.86 0.0202947 6.93006 0 7.00167 0C7.07328 0 7.14334 0.0202947 7.20332 0.0584113C7.2633 0.0965278 7.31061 0.150821 7.33948 0.214674Z" fill="#B99856"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_89_111">
                                    <rect width="14" height="13" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </div>))}</div>
                            <h4>{e.name}</h4>
                            <p>{e.first_line.substring(0,80)} ...</p>
                            <span onClick={()=>viewDetails(e)} >View Details</span>
                            <div><a className="email-button" href="mailto:reservations@tumbihotels.com">Book Now</a></div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>

    </div>)
}
export default Rooms