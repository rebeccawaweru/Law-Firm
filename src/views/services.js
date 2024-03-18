import { useEffect } from "react"
import { Navbar, Footer, Imagecontainer} from "../layouts"
import { VscLaw } from "react-icons/vsc";
import {BsBookHalf} from '../assets/icons'
import { motion } from "framer-motion"
export default function Services(){
    const data = [
       { id:0.8, name:'Litigation', desc:"We provide expert litigation services, fighting for our clients' interests with strategic planning and courtroom expertise."},
       { id:1.2, name:'Immigration', desc: "We offer comprehensive immigration services, guiding clients through complex legal processes with expertise and personalized support." },
       { id:1.6, name:'Commercial & Real Estate Conveyance', desc:"We specialize in commercial and real estate conveyance services, facilitating smooth transactions with expertise and attention to detail."},
       { id:2.0, name:'Environmental Law', desc:"We provide dedicated environmental law services, navigating complex regulations and advocating for sustainable solutions to protect our clients' interests and the environment."},
       { id:2.4, name:'Mediation', desc:"We offer professional mediation services, facilitating constructive dialogue and resolution between parties with impartial expertise and discretion."},
       { id:2.8, name:'Corporate Law', desc:"We specialize in corporate law, providing tailored legal solutions to businesses with expertise in governance, compliance, and transactions, ensuring their success and protection."},
       { id:3.2, name:'Employment and Labour Law', desc:"We offer expert employment and labor law services, ensuring fair treatment, compliance, and resolution for both employers and employees through skilled advocacy and strategic counsel."},
       { id:3.6, name:'Family Law', desc:"We specialize in family law, providing compassionate support and expert guidance through challenging legal matters, including divorce, child custody, and domestic issues, to achieve equitable resolutions for our clients."},
       { id:4.0, name:'Sports Law', desc:"We offer specialized sports law services, providing comprehensive legal counsel and advocacy to athletes, teams, and sports organizations, navigating the unique challenges of the sports industry with expertise and dedication."},
       { id:4.4, name:'ICT law', desc:"We provide specialized ICT law services, navigating the complexities of technology-related legal issues with expertise and precision, ensuring compliance, protection, and innovation for our clients in the digital age."},
       { id:4.8, name:'Intellectual Property Law', desc:"We specialize in intellectual property law, safeguarding clients' innovations, creations, and brands through expert counsel, strategic enforcement, and comprehensive protection measures."},
       { id:5.2, name:'Public interest litigation', desc:"We specialize in public interest litigation, advocating for societal welfare and justice through strategic legal action, addressing systemic issues and promoting positive change for the public good."},
       { id:5.6, name:'Regulatory, Constitutional Compliance & Advisory', desc:"We provide expert regulatory, constitutional compliance, and advisory services, guiding clients through complex legal frameworks with precision and foresight, ensuring adherence to laws and fostering sustainable practices."},
    ]
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
    return(
           <div className="w-full min-h-screen bg-zinc-100 relative overflow-x-hidden">
            <Navbar/>
            <main className="flex flex-col justify-center items-center text-center text-white pb-4">
            <Imagecontainer bg="contact2 h-96"/>
            <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-yellow font-bold tracking-wider mt-16 z-50">AREA OF EXPERTISE</motion.p>
            {/* <p className="text-yellow text-xl mt-8 mb-2 tracking-wide">AREAS OF EXPERTISE</p> */}
             {/* <div className="border border-gray w-14 mb-2"></div> */}
             <p className="text-sm mt-2 mb-4 tracking-wide z-50"> Our company takes pride in services provided to our clientele.</p>
             <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4 text-sm mt-10 px-4">
              {data.map((item)=>{
                return <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{delay:item.id, duration:item.id,  ease: 'easeIn' }}
                 key={item.id} className="flex flex-col relative my-4 bg-white text-black items-center justify-center rounded-md p-8 cursor-pointer ">
                  <div className="bg-black p-4  absolute -top-8"><VscLaw className="text-2xl text-yellow"/></div>
                <p className="font-bold my-2">{item.name}</p>
                <div className="border border-yellow w-14 mb-2"></div>
                <p className="text-gray text-sm leading-loose">{item.desc}</p>
     
            </motion.div>
              })}
             </div>
             {/* <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4 text-sm mt-6">
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
             </div> */}
             </main>
             <Footer/>
           </div>

    )
}