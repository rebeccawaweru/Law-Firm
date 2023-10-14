import { Navbar, Footer } from "../layouts"
import wave from '../assets/images/wave.svg'
import {BsBookHalf} from '../assets/icons'
export default function Services(){
    const data = [
       { id:1, name:'Litigation'},
       { id:2, name:'Immigration'},
       { id:3, name:'Commercial and Real Estate Conveyance'},
       { id:4, name:'Environmental Law'},
       { id:5, name:'Mediation'},
       { id:6, name:'Corporate Law'},
       { id:7, name:'Employment and Labour Law'},
       { id:8, name:'Family Law'},
       { id:9, name:' Sports Law'},
       { id:10, name:'ICT law'},
       { id:11, name:'Intellectual Property Law'},
       { id:12, name:'Public interest litigation'},
       { id:13, name:'Regulatory and Constitutional Compliance and Advisory'},
    ]
    return(
           <div className="w-full bg-black min-h-screen overflow-hidden">
            <Navbar/>
            <div className="flex flex-col justify-center items-center text-center text-white ">
            <p className="text-yellow text-2xl mb-2">Our Areas of Expertise</p>
             <div className="border border-white w-24 mb-4"></div>
             <div className="grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-4 text-sm">
              {data.map((item)=>{
                return <div key={item.id} className="bg-transparent relative flex flex-col text-center justify-center items-center h-52 w-52 border-double border-4 border-yellow cursor-pointer ">
                  <BsBookHalf className="text-2xl"/>
                <p>{item.name}</p>
                <img src={wave} alt="services" className="absolute bottom-0"/>
            </div>
              })}
             </div>
             </div>
             <Footer/>
           </div>

    )
}