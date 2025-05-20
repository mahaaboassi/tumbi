import room_1 from "../assets/images/room.webp"
import room_2 from "../assets/images/room2.webp"
import room_3 from "../assets/images/room3.webp"
import room_4 from "../assets/images/room4.webp"
import room_5 from "../assets/images/room5.webp"
import room_6 from "../assets/images/room6.webp"
import room_7 from "../assets/images/room_9.webp"
import room_8 from "../assets/images/room_10.webp"
import room_9 from "../assets/images/room_11.webp"
// Child Images
import child_1 from "../assets/images/child1.webp"
import child_2 from "../assets/images/child2.webp"
import child_3 from "../assets/images/child3.webp"
import child_4 from "../assets/images/child4.webp"
import child_5 from "../assets/images/child5.avif"
import child_6 from "../assets/images/child6.webp"
import child_7 from "../assets/images/child7.webp"
import child_8 from "../assets/images/child8.webp"
import child_9 from "../assets/images/child9.webp"
import child_10 from "../assets/images/child10.webp"
import child_11 from "../assets/images/child11.webp"
import child_12 from "../assets/images/child12.webp"
import child_13 from "../assets/images/child13.webp"
import child_14 from "../assets/images/child14.webp"
// Signature section Images
import img_1 from "../assets/images/mind.webp"
import img_2 from "../assets/images/body.webp"
import img_3 from "../assets/images/soul.webp"


const amenities =  [{
    name : "Free Parking",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/parking.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-parking"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m17 4.5h-10c-1.38 0-2.5 1.12-2.5 2.5v10c0 1.38 1.12 2.5 2.5 2.5h10c1.38 0 2.5-1.12 2.5-2.5v-10c0-1.38-1.12-2.5-2.5-2.5zm1.5 12.5c0 .83-.67 1.5-1.5 1.5h-10c-.83 0-1.5-.67-1.5-1.5v-10c0-.83.67-1.5 1.5-1.5h10c.83 0 1.5.67 1.5 1.5z"></path><path d="m12.5 7.5h-3.5c-.28 0-.5.22-.5.5v8c0 .28.22.5.5.5s.5-.22.5-.5v-2.5h3c1.65 0 3-1.35 3-3s-1.35-3-3-3zm0 5h-3v-4h3c1.1 0 2 .9 2 2s-.9 2-2 2z"></path></svg>
},{
    name : "Free Wifi",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/wifi.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-wifi"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m15.9 14.61c.13 0 .26-.05.35-.15.2-.2.2-.51 0-.71-1.14-1.13-2.64-1.76-4.25-1.76s-3.11.62-4.25 1.76c-.2.19-.2.51 0 .71s.51.2.71 0c.95-.94 2.21-1.46 3.54-1.46s2.6.52 3.54 1.46c.1.1.23.15.35.15z"></path><path d="m12 5.5c-3.34 0-6.49 1.3-8.85 3.66-.2.19-.2.51 0 .71s.51.2.71 0c2.18-2.17 5.07-3.37 8.15-3.37s5.97 1.2 8.15 3.37c.1.1.23.15.35.15s.26-.05.35-.15c.2-.2.2-.51 0-.71-2.37-2.36-5.51-3.66-8.85-3.66z"></path><path d="m18.2 12.31c.13 0 .26-.05.35-.15.2-.2.2-.51 0-.71-1.75-1.75-4.08-2.71-6.55-2.71s-4.8.96-6.55 2.71c-.2.19-.2.51 0 .71s.51.2.71 0c1.56-1.56 3.64-2.42 5.84-2.42s4.28.86 5.84 2.42c.1.1.23.15.35.15z"></path><path d="m10.25 16.75c0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75-.79-1.75-1.75-1.75-1.75.79-1.75 1.75zm2.5 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z"></path></svg>
},{
    name : "Non-smoking rooms",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/no-smoking.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-no-smoking"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m18.5 15v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5z"></path><path d="m20 12.5c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-.28-.22-.5-.5-.5z"></path><path d="m15.6 19.29c.1.13.25.21.4.21.1 0 .21-.03.29-.1.22-.16.27-.47.11-.7l-2.33-3.21h1.93c.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5h-4.11l-3.49-4.79c-.16-.22-.47-.27-.7-.11s-.27.47-.11.7l8 11zm-.1-5.79v1h-2.15l-.73-1z"></path><path d="m4 15.5h6.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-6v-1h4.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5z"></path><path d="m15.5 7.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c1.1 0 2 .9 2 2v.5c0 .28.22.5.5.5s.5-.22.5-.5v-.5c0-1.65-1.35-3-3-3h-.27c.17-.29.27-.64.27-1 0-1.1-.9-2-2-2-.28 0-.5.22-.5.5s.22.5.5.5c.55 0 1 .45 1 1s-.45 1-1 1z"></path><path d="m12.5 8.45v.05c0 1.1.9 2 2 2h2.5c.28 0 .5.22.5.5s.22.5.5.5.5-.22.5-.5c0-.83-.67-1.5-1.5-1.5h-2.5c-.55 0-1-.45-1-1v-.5c0-.28-.22-.5-.5-.5-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5c-1.38 0-2.5 1.12-2.5 2.5 0 1.21.86 2.22 2 2.45z"></path></svg>
},{
    name : "Concierge",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/concierge.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-concierge"><path d="m0 0v24h24v-24z" fill="none"></path><circle cx="10" cy="17" r=".75"></circle><circle cx="10" cy="19.5" r=".75"></circle><circle cx="14" cy="17" r=".75"></circle><circle cx="14" cy="19.5" r=".75"></circle><path d="m11 13.5c-.65 0-1.41-.62-1.65-.85-.14-.14-.36-.19-.54-.11-.19.08-.31.26-.31.46v.53c-2.25.25-4 2.16-4 4.47v2c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-1.93 1.57-3.5 3.5-3.5.27 0 .49-.22.5-.48.29.18.63.34 1 .43v.56c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.28-.22-.5-.5-.5z"></path><path d="m15.5 13.53v-.53c0-.2-.12-.38-.31-.46s-.4-.04-.54.11c-.24.24-1 .85-1.65.85-.28 0-.5.22-.5.5v1c0 .28.22.5.5.5s.5-.22.5-.5v-.56c.37-.08.71-.25 1-.43 0 .27.23.48.5.48 1.93 0 3.5 1.57 3.5 3.5v2c0 .28.22.5.5.5s.5-.22.5-.5v-2c0-2.31-1.75-4.22-4-4.47z"></path><path d="m9 7h6c.28 0 .5-.22.5-.5 0-.5-.07-3-1.5-3h-4c-1.43 0-1.5 2.5-1.5 3 0 .28.22.5.5.5zm1-2.5h4c.18 0 .41.68.48 1.5h-4.96c.07-.82.3-1.5.48-1.5z"></path><path d="m15.5 8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5c0 1.65-1.12 3-2.5 3s-2.5-1.35-2.5-3c0-.28-.22-.5-.5-.5s-.5.22-.5.5c0 2.21 1.57 4 3.5 4s3.5-1.79 3.5-4z"></path></svg>
},{
    name : "Spa",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/spa.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-spa"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m12 3.5c-.16 0-.31.07-.4.2l-4.8 6.4c-.85 1.13-1.3 2.48-1.3 3.9 0 3.58 2.92 6.5 6.5 6.5s6.5-2.92 6.5-6.5c0-1.4-.46-2.74-1.31-3.88l-4.79-6.42c-.09-.13-.24-.2-.4-.2zm5.5 10.5c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5c0-1.2.38-2.34 1.1-3.3l4.4-5.87 4.39 5.88c.73.97 1.11 2.11 1.11 3.28z"></path><path d="m9.5 14c0-.67.26-1.29.73-1.77.2-.2.2-.51 0-.71s-.51-.2-.71 0c-.66.66-1.03 1.54-1.03 2.47 0 1.93 1.57 3.5 3.5 3.5.93 0 1.81-.36 2.47-1.03.2-.2.2-.51 0-.71s-.51-.2-.71 0c-.47.47-1.1.73-1.77.73-1.38 0-2.5-1.12-2.5-2.5z"></path></svg>
},{
    name : "Boutique",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/boutique-hotels.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-boutique-hotels"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m20 19.5h-1.5v-5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5.5h-3v-3c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v3h-3v-5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5.5h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h16c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-9.5-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3h-3z"></path><path d="m19 11.5h-.53c-.24-3.19-2.79-5.73-5.97-5.97v-1.53c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.53c-3.18.24-5.73 2.79-5.97 5.97h-.53c-.28 0-.5.22-.5.5s.22.5.5.5h14c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm-7.5-4.86v4.86h-1.97c.11-2.53 1.01-4.37 1.97-4.86zm1 0c.96.49 1.86 2.33 1.97 4.86h-1.97zm-2.76.37c-.7 1.08-1.15 2.67-1.22 4.49h-1.99c.18-2.01 1.46-3.69 3.22-4.49zm5.75 4.49c-.07-1.82-.53-3.41-1.22-4.49 1.76.8 3.03 2.49 3.22 4.49h-1.99z"></path></svg>
},{
    name : "EV charging",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/ev-charging.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-ev-charging"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m20 5.5h-.5v-1.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.5h-1v-1.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.5h-.5c-.28 0-.5.22-.5.5v2c0 .83.67 1.5 1.5 1.5h.5v7.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v2c0 .28-.22.5-.5.5h-.5v-6.5c0-1.38-1.12-2.5-2.5-2.5h-4c-1.38 0-2.5 1.12-2.5 2.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-10c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5v10c0 .28.22.5.5.5s.5-.22.5-.5v-2.5h.5c.83 0 1.5-.67 1.5-1.5v-2c0-.28.22-.5.5-.5s.5.22.5.5v5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7.5h.5c.83 0 1.5-.67 1.5-1.5v-2c0-.28-.22-.5-.5-.5zm-.5 2.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-1.5h3z"></path><path d="m10.5 11v-3c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm-1-.5h-3v-2h3z"></path><path d="m7.78 17.45c.07.04.15.05.22.05.18 0 .36-.1.45-.28l1-2c.08-.16.07-.34-.02-.49s-.25-.24-.43-.24h-1.19l.64-1.28c.12-.25.02-.55-.22-.67-.25-.12-.55-.02-.67.22l-1 2c-.08.16-.07.34.02.49s.25.24.43.24h1.19l-.64 1.28c-.12.25-.02.55.22.67z"></path><path d="m3.5 20c0 .28.22.5.5.5h8c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-8c-.28 0-.5.22-.5.5z"></path></svg>
},{
    name : "On-site restaurant",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/dining.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-dining"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m13.5 7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-1.5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"></path><path d="m21 17.5h-18c-.28 0-.5.22-.5.5s.22.5.5.5h18c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"></path><path d="m5 16.5c.28 0 .5-.22.5-.5 0-3.58 2.92-6.5 6.5-6.5s6.5 2.92 6.5 6.5c0 .28.22.5.5.5s.5-.22.5-.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5c0 .28.22.5.5.5z"></path><path d="m9.8 10.97c-1.27.55-2.27 1.56-2.83 2.83-.11.25 0 .55.26.66.07.03.13.04.2.04.19 0 .38-.11.46-.3.45-1.04 1.27-1.86 2.31-2.31.25-.11.37-.41.26-.66s-.4-.37-.66-.26z"></path></svg>
},{
    name : "Outdoor pool",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/outdoor-pool.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-outdoor-pool"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m17 12.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="m21.3 16.6c-.1-.07-2.26-1.62-4.85-1.79 0-.02-.01-.05-.03-.07l-3.94-6.3c-.37-.59-.95-1.01-1.6-1.15-.59-.13-1.17-.02-1.66.3l-3.67 2.45c-.32.22-.55.54-.65.91-.1.38-.03.78.18 1.09.43.64 1.34.8 2.03.37l2.76-1.73.62.83c.08.1.11.22.09.34s-.09.22-.2.29l-3.67 2.45c-.23.15-.29.46-.14.69s.46.29.69.14l3.67-2.45c.34-.22.56-.56.63-.96.07-.39-.03-.79-.27-1.11l-.9-1.2c-.16-.21-.44-.26-.67-.12l-3.15 1.97c-.23.14-.55.11-.67-.07-.07-.11-.06-.23-.04-.29.03-.12.12-.24.23-.32l3.67-2.45c.26-.17.57-.23.89-.16.39.08.74.34.97.7l3.66 5.85c-1.08.08-2.07.33-3.03.59-1.19.31-2.43.64-3.86.64-3.26 0-5.07-1.41-5.09-1.43-.21-.17-.53-.14-.7.08-.17.21-.14.53.07.7.08.07 2.07 1.65 5.71 1.65 1.56 0 2.86-.34 4.12-.67 1.16-.3 2.25-.59 3.48-.59 2.45 0 4.68 1.62 4.7 1.63.09.07.19.1.29.1.15 0 .31-.07.4-.2.16-.22.12-.54-.11-.7z"></path></svg>
},{
    name : "Fitness center",
    icon :<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/gym.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-gym"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m15 10.5h-6c-.28 0-.5.22-.5.5s.22.5.5.5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"></path><path d="m15 12.5h-6c-.28 0-.5.22-.5.5s.22.5.5.5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"></path><path d="m4 15.5c.18 0 .34-.04.5-.09v1.59c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.59c-.16-.06-.32-.09-.5-.09-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5zm1.5-8.5c0-.28.22-.5.5-.5s.5.22.5.5v10c0 .28-.22.5-.5.5s-.5-.22-.5-.5zm-2 3c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5s-.5-.22-.5-.5z"></path><path d="m20 8.5c-.18 0-.34.04-.5.09v-1.59c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.59c.16.06.32.09.5.09.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5zm-1.5 8.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-10c0-.28.22-.5.5-.5s.5.22.5.5zm2-3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5z"></path></svg>
},{
    name : "Room service",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/room-service.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-room-service"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m15.95 18.57-4.71-2.82-2.85-3.2h.42l2.9 2.11s.49.24 1.18.24c.5 0 1.13-.12 1.79-.54.1-.06.17-.15.21-.26l.53-1.55h.46l-.25 1.69c0 .05-.23 1.26.79 2.26.1.1.22.14.35.14s.26-.05.36-.15c.19-.2.19-.51 0-.71-.62-.61-.51-1.33-.5-1.38l.27-1.85h2.19c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-14.09c-.28 0-.5.22-.5.5s.22.5.5.5h2.06l3.49 3.92s.07.07.12.1l4.77 2.86c.08.05.17.07.26.07.17 0 .33-.09.43-.24.14-.24.07-.54-.17-.69zm-1.95-4.97c-.44.24-.83.3-1.14.3-.41 0-.64-.12-.63-.1l-1.72-1.26h3.85l-.36 1.05z"></path><path d="m20.18 16.39-1.84-.72c-.12-.05-.26-.05-.38 0s-.22.15-.27.28l-1.59 4.14c-.1.26.03.54.28.64l1.84.72c.06.02.12.04.18.04.2 0 .39-.12.46-.32.1-.26-.02-.55-.28-.65l-1.38-.54 1.23-3.21 1.37.54c.26.1.55-.02.65-.28s-.02-.55-.28-.65z"></path><path d="m5.57 11.03c.28 0 .5-.22.5-.5 0-3.14 2.79-5.89 5.97-5.89s5.97 2.75 5.97 5.89c0 .28.22.5.5.5s.5-.22.5-.5c0-3.45-2.87-6.5-6.3-6.85.07-.12.12-.24.12-.39 0-.43-.35-.79-.78-.79s-.78.35-.78.79c0 .14.05.27.12.39-3.42.36-6.3 3.41-6.3 6.85 0 .28.22.5.5.5z"></path><path d="m10.31 6.04c-1.02.45-1.82 1.22-2.26 2.18-.12.25 0 .55.25.66.07.03.14.05.21.05.19 0 .37-.11.46-.29.34-.74.96-1.34 1.75-1.69.25-.11.37-.41.26-.66s-.4-.37-.66-.26z"></path></svg>
},{
    name : "Meeting rooms",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/meeting.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-meeting"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m12 8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="m17.5 8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0-3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="m8.5 6.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"></path><path d="m18 9c-1.16 0-1.64 1.63-2.06 3.08-.1.34-.19.66-.28.92h-1.16v-1c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v1h-1.13c-.09-.26-.19-.57-.28-.9-.43-1.45-.92-3.1-2.09-3.1-1.38 0-2.5 1.12-2.5 2.5v4c0 .87.52 2.5 2.5 2.5h1.66l.87 2.19c.08.2.27.31.46.31.06 0 .12-.01.19-.04.26-.1.38-.39.28-.65l-1-2.5c-.08-.19-.26-.31-.46-.31h-2c-1.41 0-1.5-1.25-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5.42 0 .92 1.67 1.13 2.38.06.22.13.42.19.62h-.32c-.28 0-.5.22-.5.5s.22.5.5.5h10c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-.29c.06-.21.13-.42.19-.65.2-.7.68-2.35 1.09-2.35.83 0 1.5.67 1.5 1.5v4c0 .25-.09 1.5-1.5 1.5h-2c-.2 0-.39.12-.46.31l-1 2.5c-.1.26.02.55.28.65.06.02.12.04.19.04.2 0 .39-.12.46-.31l.88-2.19h1.66c1.98 0 2.5-1.63 2.5-2.5v-4c0-1.38-1.12-2.5-2.5-2.5zm-7.5 3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1h-3z"></path><path d="m11 20.5c.06 0 .11 0 .17-.03.26-.09.4-.38.3-.64l-1.23-3.43c-.17-.7-.77-1-1.12-1.08l-2.04-.32c-.28-.04-.53.14-.57.42-.04.27.14.53.42.57l2.01.32s.27.07.35.38l1.25 3.48c.07.2.27.33.47.33z"></path><path d="m15.04 16.32 2.04-.32c.27-.04.46-.3.42-.57s-.31-.46-.57-.42l-2.06.33c-.33.07-.93.37-1.08 1.02l-1.25 3.48c-.09.26.04.55.3.64.06.02.11.03.17.03.21 0 .4-.13.47-.33l1.27-3.53c.06-.25.31-.32.31-.32z"></path></svg>
},{
    name : "Pets not allowed",
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="injected-svg mb-1 text-text-alt" data-src="/modules/assets/svgs/icons/regular/no-pets.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" aria-hidden="true" fill="currentColor" width="40" height="40" data-testid="icon-no-pets"><path d="m0 0v24h24v-24z" fill="none"></path><path d="m15.69 8.03c-.25-.17-.89-.53-1.69-.53-1.48 0-2.59 1.33-2.59 2.52 0 .36.1.68.3.93l-2.71.55c-.2 0-.43.05-.65.15-.81-.81-.85-1.59-.85-1.65 0-.27-.23-.5-.5-.5s-.5.22-.5.5c0 .05.01 1.21 1.14 2.34-.08.18-.14.4-.14.66v3c0 .28.22.5.5.5s.5-.22.5-.5v-1c0-.12.24-.51.63-.79.16-.12.47-.3.75-.23.35.09.69.28 1.02.46.5.27 1.01.56 1.6.56.37 0 .71-.08 1-.2v1.2c0 .28.22.5.5.5s.5-.22.5-.5v-4.59l2.1-.42c.09-.02.18-.06.25-.13.07-.06.65-.67.65-2.11 0-.24-.18-.45-.42-.49zm-2.06.52c.13.59.2 1.36-.06 1.72-.07.1-.21.23-.57.23-.15 0-.36-.02-.48-.14-.09-.09-.11-.24-.11-.34 0-.52.48-1.28 1.22-1.47zm-.13 4.95c0 .2-.4.5-1 .5-.34 0-.7-.2-1.12-.43-.37-.2-.79-.43-1.25-.55-.52-.13-1.09.02-1.62.42v-.44c0-.4.27-.49.6-.51l4.4-.88v1.89zm2.72-3.45-1.59.32c.18-.57.13-1.24.04-1.74.32.12.52.27.52.27.07.05.14.09.23.1l1.06.18c-.05.47-.18.75-.26.88z"></path><path d="m12 3.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5 8.5-3.81 8.5-8.5-3.81-8.5-8.5-8.5zm5.64 13.43-1.75-1.75c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.75 1.75c-1.32 1.16-3.04 1.86-4.93 1.86-4.14 0-7.5-3.36-7.5-7.5 0-1.89.71-3.61 1.86-4.93l1.75 1.75c.1.1.23.15.35.15s.26-.05.35-.15c.2-.2.2-.51 0-.71l-1.75-1.75c1.32-1.16 3.04-1.86 4.93-1.86 4.14 0 7.5 3.36 7.5 7.5 0 1.89-.71 3.61-1.86 4.93z"></path></svg>
}]



export const categories = [
  {name : "Luxury Accomadiation"},
  {name : "Exclusive Retreats"},
  {name : "Premium Hospitality"},
  {name : "Elegant Stays"},
  {name : "Unparalleled Comfort"},
  { name: "Grand Stays" },
  { name: "Tranquil Luxury" }
]


export const dataRoom = [{
    id : 1,
    name : "King Guest Room",
    first_line : "29 sq. m. / 312 sq. ft., 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "Relax yourself in this stylish guest room featuring one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with the daily light and enjoy your hot drink from the espresso machine. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : room_3,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [room_3,child_1,child_2,child_3]
},{
    id : 2,
    name : "King Guest Room with Sea View",
    first_line : "29 sq. m. / 312 sq. ft., 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "Relax yourself in this stylish guest room featuring one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with the daily light and enjoy your hot drink from the espresso machine. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : room_7,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [room_7,child_4,child_5,child_3,child_6,room_9]
},{
    id : 3,
    name : "King Deluxe Room",
    first_line : "33 sq. m. / 355 sq. ft., balcony, 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "This elegant spacious Deluxe room features one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with daily light and enjoy your hot drink from the espresso machine at your private balcony. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include a balcony, espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : room_8,
    room_hightlites : "sleep 3",
    amenities : amenities,
    images : [room_8,room_4,child_3,child_7]
},{
    id : 4,
    name : "King Deluxe Room with Sea View",
    first_line : "33 sq. m. / 355 sq. ft., balcony, 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "This elegant spacious Deluxe room features one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with daily light and a magnificent sea view. Enjoy your hot drink from the espresso machine at your private balcony. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include a balcony, espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : room_9,
    room_hightlites : "sleep 3",
    amenities : amenities,
    images : [room_9,room_7,child_5,child_6,child_8]
},{
    id : 5,
    name : "Twin Deluxe Room with Sea View",
    first_line : "33 sq. m. / 355 sq. ft., balcony, 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "This elegant spacious Deluxe room features two twin beds where you can watch your favorite movies on the 55-inch HDTV. Waking up with daily light and a magnificent sea view. Enjoy your hot drink from the espresso machine at your private balcony. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include a balcony, espresso machine and luxury bathroom amenities. Sleeps 2.",
    img : child_9,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [child_9,child_10,child_2,child_3]
},{
    id : 6,
    name : "King One Bedroom Suite with Balcony",
    first_line : "58 sq. m. / 624 sq. ft., two connecting rooms, two bathrooms, free WiFi",
    second_line : "Stay together with your family or group in these connecting rooms. One bedroom features a king-sized bed and the other has two twin beds; each one offers a 55 inch TV, a bathroom with walk-in rain shower and essential amenities in the bathroom.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 5 with one extra rollaway bed.",
    img : room_6,
    room_hightlites : "sleep 5",
    amenities : amenities,
    images : [room_6,child_4,child_11,room_4,child_9,child_8]
},{
    id : 7,
    name : "Family Connecting Room",
    first_line : "29 sq. m. / 312 sq. ft., 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "Relax yourself in this stylish guest room featuring one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with the daily light and enjoy your hot drink from the espresso machine. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : child_4,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [child_4,child_10,child_2,child_3]
},{
    id : 8,
    name : "Twin Guest Room",
    first_line : "63 sq. m./678 sq. ft., living room with dining table, two 55 Inch HDTVs, two bathrooms, free WiFi, air conditioning, espresso machines",
    second_line : "RExperience the comfort of this one-bedroom suite with a separate living room with dining table. The master bedroom provides a king size bed, work desk, and a 55-inch HDTV. Waking up with daily light and enjoy your hot drink from the espresso machine. Prepare yourself for the day with a relaxing shower in the spacious bathroom and all stylish amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 4 with two rollaway beds.",
    img : room_2,
    room_hightlites : "sleep 4",
    amenities : amenities,
    images : [room_2,child_1,child_2,child_3]
},{
    id : 9,
    name : "King One Bedroom Suite",
    first_line : "29 sq. m. / 312 sq. ft., 55 Inch HDTV, free WiFi, air conditioning, espresso machine",
    second_line : "Relax yourself in this stylish guest room featuring one king-sized bed where you can watch your favorite movies on the 55-inch HDTV. Waking up with the daily light and enjoy your hot drink from the espresso machine. This room benefits from a walk-in rain shower in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : child_11,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [child_11,room_1,room_4,child_12,child_9,child_8]
},{
    id : 10,
    name : "King Accessible Room",
    first_line : "55 Inch HDTV, free WiFi, air conditioning, espresso machine, roll-in shower",
    second_line : "This mobility accessible room features one king bed and roll-in shower. Relax with a movie on the 55-inch HDTV where you can watch your favorite movies. Waking up with daily light and enjoy your hot drink from the espresso machine. This room benefits from a walk-in rain shower, totally accessible with a wheelchair in the bathroom and essential amenities.",
    third_line : "Stay connected with complimentary WIFI access. Special touches include an espresso machine and luxury bathroom amenities. Sleeps 3 with a rollaway bed.",
    img : child_13,
    room_hightlites : "sleep 2",
    amenities : amenities,
    images : [child_13,room_5,child_14,child_2]
},]

export const dataSignature = [{
    title : "Mind",
    description : "Focusonexperiencesthatcalm andstimulate themind,like walk at the beach, beach yoga,and reading corners. Embrace mental clarity through every aspect of your stay at",
    children : ["Clarify Haven suite","Creative Awakening suite","Cocoon Sanctuary suite"],
    img : img_1
},{
    title : "Body",
    description : "Explore a state-of-the-artfitness center,spa body treatments, ice baths and a range of movement classes to choose from.Reconnect with your body during your stay at",
    children : ["Rugged Fitness suite","Recovery Retreat suite","Restorative Oasis suite"],
    img : img_2
},{
    title : "Soul",
    description : "Embrace rejuvenationwith private and in group settings such as kundalini yoga, chakra balancing, theta healing and more. Transform your soul while you stay at",
    children : ["Gratitude Grove suite","Grounded Serenity suite","Garden Of Healing suite"],
    img : img_3
}]

export const whatsNearby = [{
    name : "Nakheel Mall",
    value : "1 kilometer"
},{
    name : "The View at The Palm",
    value : "1 kilometer"
},{
    name : "Skydive Dubai",
    value : "2 kilometer"
},{
    name : "Emirates Golf Club",
    value : "3 kilometer"
},{
    name : "Marina Beach",
    value : "3 kilometer"
},{
    name : "Marina Walk",
    value : "3 kilometer"
}]
export const socialMedia = [{
    name : "facebook",
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
    <path d="M6.70282 4.28075V6.95923H9.9993L9.47736 10.5681H6.70282V18.8818C6.14636 18.9596 5.57723 19 4.99965 19C4.33261 19 3.67824 18.9462 3.04007 18.8428V10.5681H0V6.95923H3.04007V3.68247C3.04007 1.649 4.67986 0 6.70353 0V0.00212455C6.70916 0.00212455 6.71479 0 6.72043 0H10V3.12029H7.8573C7.21984 3.12029 6.70282 3.63999 6.70282 4.28075Z" fill="white"/>
    </svg>,
    link : "https://www.facebook.com/tumbihotels"
},{
    name : "whatsapp",
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path d="M12.4294 13.909C8.67059 13.9081 5.61189 10.7675 5.61105 6.90883C5.61272 5.93086 6.38721 5.13477 7.33882 5.13477C7.43657 5.13477 7.5335 5.14334 7.62541 5.1605C7.82926 5.19481 8.02225 5.26602 8.20104 5.3724C8.22694 5.38784 8.24449 5.41357 8.24867 5.4436L8.64553 8.01461C8.65054 8.04464 8.64135 8.07466 8.62213 8.09697C8.4024 8.34661 8.12252 8.5259 7.81172 8.61598L7.66216 8.65973L7.71897 8.809C8.23196 10.1481 9.27463 11.2196 10.5797 11.7463L10.725 11.8047L10.7668 11.6502C10.8545 11.3303 11.0291 11.0429 11.2723 10.8181C11.2898 10.8018 11.3132 10.7924 11.3374 10.7924C11.3425 10.7924 11.3483 10.7924 11.3533 10.7941L13.8564 11.2016C13.8865 11.2067 13.9107 11.2239 13.9266 11.2505C14.0294 11.4341 14.0987 11.6331 14.133 11.8415C14.1488 11.9351 14.1572 12.0329 14.1572 12.1358C14.1572 13.1129 13.3819 13.9081 12.4294 13.9099V13.909Z" fill="#FDFDFD"/>
    <path d="M19.0949 8.65243C18.8919 6.30017 17.8425 4.11861 16.1398 2.51011C14.4271 0.891317 12.2039 0 9.87956 0C4.77812 0 0.627447 4.26188 0.627447 9.5C0.627447 11.2578 1.09948 12.9709 1.99345 14.4628L0 18.9948L6.38474 18.2965C7.49509 18.7632 8.67062 19 9.87956 19C10.1979 19 10.5237 18.9828 10.8504 18.9485C11.1386 18.9168 11.4294 18.8705 11.7159 18.8113C15.9886 17.9251 19.1074 14.0312 19.1317 9.55061V9.5C19.1317 9.21433 19.1192 8.92952 19.0941 8.65329L19.0949 8.65243ZM6.62953 16.3072L3.09713 16.6932L4.15234 14.2938L3.94179 14.0029C3.92592 13.9815 3.91087 13.96 3.89333 13.936C2.97764 12.6381 2.4939 11.1042 2.4939 9.49914C2.4939 5.31705 5.80743 1.91561 9.87956 1.91561C13.6952 1.91561 16.9285 4.97219 17.2401 8.87376C17.2568 9.08308 17.2652 9.29326 17.2652 9.5C17.2652 9.5592 17.2644 9.61753 17.2627 9.67929C17.1842 13.1777 14.8039 16.1485 11.4745 16.9051C11.2205 16.9634 10.9598 17.0072 10.7 17.0363C10.4302 17.0681 10.1536 17.0835 9.87873 17.0835C8.90038 17.0835 7.94959 16.8888 7.05062 16.5045C6.95119 16.4633 6.85345 16.4195 6.76154 16.3741L6.62788 16.308L6.62953 16.3072Z" fill="#FDFDFD"/>
    </svg>,
    link : "https://wa.me/971566873263"
},{
    name : "insta",
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
    <path d="M14.4899 0H4.83618C2.16914 0 0 2.22725 0 4.96575V14.0342C0 16.7727 2.16914 19 4.83618 19H14.4899C17.157 19 19.3261 16.7727 19.3261 14.0342V4.96575C19.3261 2.22725 17.157 0 14.4899 0ZM1.70584 4.96575C1.70584 3.19325 3.10992 1.75155 4.83618 1.75155H14.4899C16.2162 1.75155 17.6202 3.19325 17.6202 4.96575V14.0342C17.6202 15.8068 16.2162 17.2485 14.4899 17.2485H4.83618C3.10992 17.2485 1.70584 15.8068 1.70584 14.0342V4.96575Z" fill="white"/>
    <path d="M9.66251 14.1198C12.1432 14.1198 14.1614 12.0474 14.1614 9.50031C14.1614 6.95319 12.1432 4.88086 9.66251 4.88086C7.18185 4.88086 5.16357 6.95319 5.16357 9.50031C5.16357 12.0474 7.18185 14.1198 9.66251 14.1198ZM9.66251 6.63332C11.2024 6.63332 12.4547 7.91918 12.4547 9.50031C12.4547 11.0814 11.2024 12.3673 9.66251 12.3673C8.12263 12.3673 6.8703 11.0814 6.8703 9.50031C6.8703 7.91918 8.12263 6.63332 9.66251 6.63332Z" fill="white"/>
    <path d="M14.5785 5.62643C15.2468 5.62643 15.7909 5.06779 15.7909 4.38157C15.7909 3.69535 15.2468 3.13672 14.5785 3.13672C13.9102 3.13672 13.3661 3.69535 13.3661 4.38157C13.3661 5.06779 13.9102 5.62643 14.5785 5.62643Z" fill="white"/>
    </svg>,
    link : "https://www.instagram.com/tumbihotels/"
},{
    name : "linkedin",
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path d="M0.658488 3.75967C0.219176 3.34074 0 2.82244 0 2.20573C0 1.58902 0.219176 1.04733 0.658488 0.628398C1.0978 0.209467 1.6633 0 2.3569 0C3.0505 0 3.59325 0.209467 4.03161 0.628398C4.47092 1.04733 4.6901 1.57344 4.6901 2.20573C4.6901 2.83802 4.47092 3.34074 4.03161 3.75967C3.5923 4.1786 3.03437 4.38806 2.3569 4.38806C1.67943 4.38806 1.0978 4.1786 0.658488 3.75967ZM4.32004 6.1622V19H0.370038V6.1622H4.32004Z" fill="#FEFFFC"/>
    <path d="M17.4725 7.42922C18.3331 8.38886 18.7639 9.70703 18.7639 11.3847V18.7735H15.0113V11.9059C15.0113 11.0603 14.7978 10.4027 14.3708 9.93404C13.9438 9.46542 13.3698 9.2316 12.6487 9.2316C11.9275 9.2316 11.3535 9.46639 10.9265 9.93404C10.4995 10.4027 10.286 11.0603 10.286 11.9059V18.7735H6.51157V6.12663H10.286V7.80431C10.6684 7.24508 11.1836 6.80374 11.8317 6.47834C12.4788 6.15391 13.2075 5.99121 14.0169 5.99121C15.4591 5.99121 16.611 6.47151 17.4716 7.43018L17.4725 7.42922Z" fill="#FEFFFC"/>
    </svg>,
    link : "https://www.linkedin.com/company/tumbi-hotels/posts/?feedView=all"
}]


export const link = "https://www.hilton.com/en/hotels/dxbwbup-tumbi-west-palm-beach-hotel-dubai/?SEO_id=GMB-EMEA-UP-DXBWBUP"