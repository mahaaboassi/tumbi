const Heading = ({title, subTitle, isCenter, isWithArrows})=>{
    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
    <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="white"/>
    </svg>
    const lastSlider = ()=>{document.querySelector("#rooms .swiper-button-prev").click()}
    const nextSlider = ()=>{document.querySelector("#rooms .swiper-button-next").click()}
    
    return<div  className={`heading ${isCenter?"center-heading":""}`}>
        <div className="flex items-center gap-2 sub-title">
            <div className="align"></div>
            <h3>{subTitle}</h3>
            <div className="align"></div>
        </div>
        <div className="flex gap-4 items-center">
          {isWithArrows && <div onClick={lastSlider} className="last-arrow">{arrow}</div>}
          <h2>{title}</h2>
          {isWithArrows && <div onClick={nextSlider} className="next-arrow">{arrow}</div>}
        </div>
        
    </div>
}
export default Heading