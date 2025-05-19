import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Navbar = ()=>{
    const data = [{
        name : "About",
        link : "#about"
    },{
        name : "Dining",
        link : "#dining"
    },{
        name : "Gallery",
        link : "#gallery"
    },{
        name : "Location",
        link : "#location"
    },]
    const [ isopen, setIsOpen ] = useState(false)
    const [ isScroll , setIsScroll] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 80) {
              setIsScroll(true); 
            } else {
              setIsScroll(false); 
            }
          };
        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[])
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
    return(<div className={`navbar px-5 sm:px-10 lg:px-24 py-5 `}>
        {isopen && <div  onClick={()=>setIsOpen(false)} style={{position:"fixed",zIndex:"100"}} className="close-icon">{close}</div>}
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 81 81" fill="none">
                <path d="M0.969971 0.419922V80.3599H80.91V0.419922H0.969971ZM44.57 11.9399C45.51 10.8799 46.44 9.79993 47.47 8.59993C48.82 10.3299 50.1 11.8999 51.32 13.4899C51.47 13.6899 51.52 14.0699 51.4 14.2399C50.22 15.6699 48.98 17.0699 47.63 18.6199C46.75 17.4899 45.93 16.4699 45.12 15.4299C45 15.2599 44.9 15.0499 44.74 14.8699C43.38 13.2899 43.38 13.2899 44.57 11.9399ZM31.35 11.9399C32.28 10.8799 33.21 9.79993 34.25 8.59993C35.59 10.3299 36.85 11.8999 38.1 13.4899C38.24 13.6899 38.3 14.0699 38.17 14.2399C36.99 15.6699 35.75 17.0699 34.41 18.6199C33.53 17.4899 32.71 16.4699 31.9 15.4299C31.76 15.2599 31.67 15.0499 31.52 14.8699C30.13 13.2899 30.14 13.2899 31.35 11.9399ZM57.77 30.5099H45.15V72.3799H36.79C36.78 72.2399 36.77 72.0899 36.77 71.9499V30.5099H24.15C21.84 30.5099 19.77 29.5699 18.25 28.0699C16.75 26.5599 15.81 24.4799 15.81 22.1699C15.81 21.6399 15.86 21.1199 15.96 20.6099C17.33 21.5899 19 22.1699 20.83 22.1699H61.1C62.92 22.1699 64.59 21.5999 65.97 20.6099C66.06 21.1199 66.11 21.6399 66.11 22.1699C66.1 26.7799 62.37 30.5099 57.77 30.5099Z" fill="#B99855"/>
            </svg>
        </div>
        <div className="flex items-center gap-4">
            <ul className={`gap-4 ${isopen?"fixed-menu":""}`}>
                {data.map((e,idx)=><li onClick={() => setIsOpen(false)} key={`Navbar_Data_${e.name}_${idx}`} >
                    <a href={e.link}>{e.name}</a>
                </li>)}
            </ul>
            <div onClick={()=>setIsOpen(true)}  className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_483_74)">
                    <path d="M14 18H21V16H14V18ZM3 6V8H21V6H3ZM9 13H21V11H9V13Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_483_74">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            <div >
                <a className="email-button" href="mailto:reservations@tumbihotels.com">Book Now</a>
                
            </div>
        </div>
        {isScroll && <div className="background-fixed"></div>}
        
    </div>)
}
export default Navbar