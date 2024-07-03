import { useState } from 'react'
import InstagramIcon from './MdiInstagram.astro';
import TwitterIcon from './MdiTwitter.astro';

export function IconamoonMenuBurgerHorizontalBold(props) {
  var [isOpen, setIsOpen] = useState(false)

    return (
      <>
      {
        isOpen? (
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M18 6h-18M18 12h-18M18 18h-18"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-50' width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
          </button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className='hover:opacity-50' width="32" height="32" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6h18M3 12h18M3 18h18"></path></svg>
          </button>
        )
      }
      <div className={`${isOpen? "h-36" : "opacity-0 z-[-1]"} absolute flex top-16 h-0 w-screen left-0 bg-white`}>
        <div className={`${isOpen? "flex justify-center items-center w-full gap-6" : "hidden"}`}>
          <a href="#" className="text-3xl flex items-center justify-center hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg>
          </a>
          <a href="#" className="text-3xl flex items-center justify-center hover:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
          </a>
          <div>
            <select className="px-5 py-3 rounded-md text-base bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--hover-primary-color)] cursor-pointer">
              <option className="bg-white py-4 text-black">EN</option>
              <option className="bg-white py-4 text-black">ES</option>
            </select>
          </div>
          <button className="px-6 py-3 rounded-md text-base bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--hover-primary-color)]">Visítanos!</button>
        </div>
      </div>
      </>
      
    )

}
export default IconamoonMenuBurgerHorizontalBold