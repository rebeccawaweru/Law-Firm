import {useRef, useEffect, useCallback, useState} from 'react';
import logo from '../assets/images/klogo.png'
import { BiMenu,AiOutlineClose } from '../assets/icons';
import { List } from '../components';
import { useNavigate, Link } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate()
    const navRef = useRef(null)
    const handleScroll = useCallback(()=>{
        const scroll = window.scrollY;
        navRef.current.style.backgroundColor = scroll > 0 ? "black" : "transparent";
        navRef.current.style.opacity = "0.8"
    },[])
    const [menu, setMenu] = useState(false)
    useEffect(()=>{
         document.addEventListener("scroll", handleScroll)
         return () => {
             document.removeEventListener("scroll", handleScroll)
         }
    },[handleScroll])
    return (
        <div ref={navRef} className="w-full flex bg-transparent shadow-md  text-white text-sm font-base tracking-wide  leading-loose justify-between items-center px-2 2xl:px-8 xl:px-8 md:px-8  sticky top-0 absolute z-50 font-sans ">
            <div className='w-1/2'>
            <img src={logo} alt='KatamaWaweru' className='w-26 h-24'/>
            </div>
            <ul className='w-1/2 hidden 2xl:flex xl:flex lg:flex md:flex  justify-between items-center'>
                <List name="Home" to="/" />
                <List name="Services" to="/services" />
                <List name="Team" to="/patners" />
                <List name="Contact" to="/contact" />
            </ul>
            <div className='block 2xl:hidden xl:hidden lg:hidden md:hidden pr-4'>
            <BiMenu onClick={()=>setMenu(menu ? false : true)} className={`${menu ? 'hidden' : 'block'} text-2xl  `}/>
            <ul className={`${menu ? 'bg-slate w-2/6 h-auto transition:width duration-1000' : 'w-0 h-0 text-transparent'} text-black absolute top-0 p-4 right-0 space-y-4 `}>
                <AiOutlineClose onClick={()=>setMenu(false)} className='absolute right-4'/>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/patners'>Team</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
            </div>
       
            
            <div className="w-1/2 hidden 2xl:block xl:block lg:block md:hidden">
                <button onClick={()=>navigate('/contact')} className="btn p-4 tracking-wider float-right hover:bg-black hover:text-white hover:scale-110 transition  ease-in-out duration-2000 text-sm">GET A QUOTATION</button>
            </div>
          
        </div>
    );
}

export default Navbar;