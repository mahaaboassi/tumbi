import Heading from "../components/heading"
import img_1 from "../assets/images/1_gallery.webp"
import img_2 from "../assets/images/2_gallery.webp"
import img_3 from "../assets/images/3_gallery.webp"
import img_4 from "../assets/images/4_gallery.webp"
import img_5 from "../assets/images/5_gallery.webp"
import img_6 from "../assets/images/6_gallery.webp"
import img_7 from "../assets/images/7_gallery.webp"
import img_8 from "../assets/images/8_gallery.webp"
import img_9 from "../assets/images/9_gallery.webp"
import img_10 from "../assets/images/10_gallery.webp"
import img_11 from "../assets/images/11_gallery.webp"
import img_12 from "../assets/images/12_gallery.webp"
import { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation  } from 'swiper/modules';



const Gallery = () => {
    const [ isOverlay, setIsOverlay ] = useState(false)
    const [images, setImages] = useState([img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8,img_9 ,img_10, img_11, img_12])
    const openOverlay = (img)=>{
        setImages([img, ...images])
        setIsOverlay(true)
    }
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
    <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
    </svg>
    const close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_17_1174)">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_17_1174">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    const lastSlider = ()=>{document.querySelector(".gallery .swiper-button-prev").click()}
    const nextSlider = ()=> {document.querySelector(".gallery .swiper-button-next").click()}
        
    return(<div id="gallery" className="py-16 px-5 sm:px-10 lg:px-24 gallery">
        <Heading isCenter={true} subTitle={"PHOTOS"} title={"TUMBI Gallery"} />
        {isOverlay && <div className="overlay-gallery ">
            <div onClick={()=>setIsOverlay(false)} className="close-icon">{close}</div>
            <div onClick={lastSlider} className="prev-icon">{arrow}</div>
            <div onClick={nextSlider} className="next-icon">{arrow}</div>
            
            <Swiper
                className="overlay-content"
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}>     
                {
                    images.map((e,idx)=>(<SwiperSlide key={`Gallery_Slider_${idx}`}>
                        <div><img src={e} alt="overlay_img" /></div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>}
        <div className="grid-gal gap-3  pt-16">
            <div onClick={()=>setIsOverlay(true)} className="w-full"><img src={img_1} alt="Gallery_1" /></div>
            <div  className="row-gal gap-3 w-full">
                <div className="child-row-gal gap-3 ">
                    <div onClick={()=>openOverlay(img_2)}  className="w-full"><img src={img_2} alt="Gallery_1" /></div>
                    <div onClick={()=>openOverlay(img_3)}  className="w-full"><img src={img_3} alt="Gallery_1" /></div>
                </div>
                <div onClick={()=>openOverlay(img_4)} ><img src={img_4} alt="Gallery_1" /></div>
            </div>
        </div>
    </div>)
}
export default Gallery