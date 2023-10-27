import { useEffect } from "react"
import { Navbar, Footer } from "../layouts"
import wave from '../assets/images/wave.svg'
import {BsBookHalf} from '../assets/icons'
import { motion } from "framer-motion"
export default function Services(){
    const data = [
       { id:0.8, name:'Litigation'},
       { id:1.2, name:'Immigration'},
       { id:1.6, name:'Commercial & Real Estate Conveyance'},
       { id:2.0, name:'Environmental Law'},
       { id:2.4, name:'Mediation'},
       { id:2.8, name:'Corporate Law'},
       { id:3.2, name:'Employment and Labour Law'},
       { id:3.6, name:'Family Law'},
       { id:4.0, name:' Sports Law'},
       { id:4.4, name:'ICT law'},
       { id:4.8, name:'Intellectual Property Law'},
       { id:5.2, name:'Public interest litigation'},
       { id:5.6, name:'Regulatory, Constitutional Compliance & Advisory'},
    ]
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
    return(
           <div className="w-full min-h-screen bg-black home relative ">
            <Navbar/>
            <main className="flex flex-col justify-center items-center text-center text-white pb-4 ">
            <p className="text-yellow text-xl mt-8 mb-2 tracking-wide">AREAS OF EXPERTISE</p>
             <div className="border border-gray w-14 mb-2"></div>
             <p className="tracking-wider text-sm "> Our company takes pride in services provided to our clientele.</p>
             <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4 text-sm mt-6">
              {data.map((item)=>{
                return <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{delay:item.id, duration:item.id,  ease: 'easeIn' }}
                 key={item.id} className="btn4 hover:text-black relative flex flex-col text-center space-y-2 justify-center items-center h-56 w-52  cursor-pointer text-sm tracking-wider ">
                  <BsBookHalf className="text-2xl text-yellow"/>
                <p>{item.name}</p>
                <img src={wave} alt="services" className="absolute bottom-0"/>
            </motion.div>
              })}
             </div>
             </main>
             <Footer/>
           </div>

    )
}