import { link } from "../data/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation , Autoplay } from 'swiper/modules';
import { useState } from "react";

const RoomDetails = ({room,closeView})=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipath="url(#clip0_17_1174)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_17_1174">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    const lastSlider = ()=>{document.querySelector(".images-room .swiper-button-prev").click()}
    const nextSlider = ()=> {document.querySelector(".images-room .swiper-button-next").click()}
           
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
        <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
        </svg>
    return <div className="room-details ">

    <div onClick={closeView} className="close-icon">{close}</div>
    <div className="content-room-details gap-3 lg:gap-10 p-10">
      <div className="w-full first-details flex flex-col">
        <div className="relative images-room">
            <div className="arrow-row">
                <div onClick={lastSlider} className="cursor-pointer" style={{transform:"rotate(-180deg)"}}>{arrow}</div>
                <div onClick={nextSlider} className="cursor-pointer" >{arrow}</div>
            </div>
            <Swiper modules={[Navigation ]}
                navigation
                onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                slidesPerView={1}>
                    {room.images.map((ele,idx)=>(<SwiperSlide className="p-3" key={`Room_images_${idx}`}>
                        <img src={ele} alt={"image"}  />
                    </SwiperSlide>))}
                </Swiper>
        </div>
        <div className="number-of-slide px-3">( {activeIndex +1} / {room.images.length} )</div>
        <div>
        <Swiper modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                    delay: 3000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                spaceBetween={20}
                slidesPerView={8}
                breakpoints={{
                    320: {
                      slidesPerView: 4,
                    },
                    640: {
                      slidesPerView: 5,
                    },
                    1024: {
                      slidesPerView: 6,
                      
                    },
                  }}>
                    {room.amenities.map((ele,idx)=>(<SwiperSlide key={`Room_amenities_${idx}`}>
                        <div className="py-3 amenities" >
                        <div className="flex justify-center">{ele.icon}</div>
                        <div s className="text-center title-icon flex justify-center">{ele.name}</div>
                    </div>
                    </SwiperSlide>))}
                </Swiper>
  
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h2>{room.name}</h2>
        <p>{room.first_line}</p>
        <p>{room.second_line}</p>
        <p>{room.third_line}</p>
        <div className="room-hightlights py-4">Room highlights : <span>( {room.room_hightlites} )</span></div>
        <div><a className="email-button" href="mailto:reservations@tumbihotels.com">Book Now</a></div>
      </div>
    </div>

  </div>
}

export default RoomDetails