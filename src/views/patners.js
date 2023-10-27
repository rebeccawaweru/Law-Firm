import { Patner } from "../components";
import { Footer, Imagecontainer,Navbar } from "../layouts";
import { motion } from "framer-motion";
import {BsFillArrowDownCircleFill} from '../assets/icons'
import { useRef, useEffect } from "react";
export default function Patners(){
    const ref = useRef()
    const handleScroll = () =>{
        ref.current.scrollIntoView({behavior:"smooth"})
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[]);
    return (
    <div className='min-h-screen relative font-sans overflow-hidden '>
        <Navbar/>
        <main className=" flex flex-col items-center justify-center">
      <Imagecontainer bg="patner h-4/6"/>
      <div className="w-full h-auto  flex flex-col flex-grow space-y-6 black items-center mt-28 text-center z-20">
       <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay:0.4, duration:1.2,  ease: 'easeIn' }}
        className="text-yellow font-bold tracking-wider">OUR STRENGTH AND OUR KEY</motion.p>
       <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay:0.8, duration:1.2,  ease: 'easeIn' }} className="text-yellow text-5xl tracking-wide">Meet Our Advocates</motion.p>
       <motion.hr
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{delay:1.2, duration:1.2,  ease: 'easeIn' }}
        className="text-gray w-24"></motion.hr>
       <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{delay:1.6, duration:1.2,  ease: 'easeIn' }}
       className="text-slate w-3/4  leading-loose tracking-wide">
       At Katama Waweru, we are not just legal advisors, we are strategic partners invested in your 
       triumph.With a team of highly skilled 
       and experienced lawyers, we bring together a dynamic team, with multifaceted skill sets which create 
       an unrivaled force, capable of tackling the most complex legal challenges with finesse and precision.
       </motion.p>
       <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{delay:1.8, duration:1.2,  ease: 'easeIn' }}
          >
           <BsFillArrowDownCircleFill
           onClick={()=>handleScroll()}
           className='text-3xl text-yellow animate-bounce cursor-pointer'/>
          </motion.div>
      </div>
      <div ref={ref} className="w-full h-auto grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2  bg-black px-8 mt-14 pb-2 cursor-pointer">
       <Patner bg="jo" to="/patners/jollin" name="JOLLINE KATAMA" title="LL.B (Hons)" caption="Dip. Law [KSL]"/>
       <Patner bg="ray" to="/patners/rachael" name="RACHAEL WAWERU" title="LL.B [Hons] University of Nairobi" caption="Dip. Law [KSL]"/>
       </div> 
       </main> 
      <Footer/>
     </div>
    )
}