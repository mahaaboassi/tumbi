import { categories } from "../data/data"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation'; // optional modules

import { Navigation , Autoplay } from 'swiper/modules';

const Category = ()=>{
    
    return(<div >
        <div className="cloudy-container">

        </div>
        <div className="category pb-10 gap-5 px-5 sm:px-10 lg:px-24">
          
          <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{
                    delay: 2000,       // Slide every 3 seconds
                    disableOnInteraction: false, // Keep autoplay after user interaction
                  }}
                loop
                spaceBetween={40}
                slidesPerView={6}
                breakpoints={{
                    200: {
                      slidesPerView: 1,
                    },
                    320: {
                      slidesPerView: 2,
                    },
                    640: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                      
                    },
                    1200: {
                      slidesPerView: 5,
                      
                    },
                  }}>     
                {categories.map((e,idx)=><SwiperSlide key={`Categories_${e.name}_${idx}`}><a className="flex justify-center" href="#rooms">
                  <div  className="card-cat " >{e.name}</div>
                </a>
                </SwiperSlide>)}
            </Swiper>
        </div>
        
        
    </div>)
}
export default Category