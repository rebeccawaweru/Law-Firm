import {useRef} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/klogo.png'
import { BiMenu } from '../assets/icons';
function Navbar() {
    const navRef = useRef(null)
    return (
        <div ref={navRef} className="w-full flex bg-transparent shadow-md  text-white text-sm font-base tracking-wide  leading-loose justify-between items-center px-2 2xl:px-8 xl:px-8 md:px-8 py-2 sticky top-0 absolute z-50 font-sans">
            <div className='w-1/2'>
            <img src={logo} alt='KatamaWaweru' className='w-24 h-24'/>
            </div>
            <ul className='w-1/2 hidden 2xl:flex xl:flex lg:flex md:flex  justify-between items-center'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/team'>Our Team</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
            <BiMenu className='text-2xl block 2xl:hidden xl:hidden lg:hidden md:hidden '/>
            <div className="w-1/2 hidden 2xl:block xl:block lg:block md:hidden">
                <button className="btn p-4 tracking-wider float-right hover:bg-black hover:text-white hover:scale-110 transition  ease-in-out duration-2000  text-sm">GET A QUOTATION</button>
            </div>
          
        </div>
    );
}

export default Navbar;