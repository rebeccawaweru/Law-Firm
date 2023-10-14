import { Patner } from "../components";
import { Footer, Imagecontainer,Navbar } from "../layouts";
export default function Patners(){
    return (
    <div className='min-h-screen m-0 flex flex-col items-center justify-center relative font-sans overflow-hidden '>
        <Navbar/>
      <Imagecontainer bg="patner h-4/6"/>
      <div className="w-full h-auto  flex flex-col flex-grow space-y-4 black items-center mt-24 text-center z-20">
       <p className="text-yellow font-bold tracking-wider">OUR STRENGTH AND OUR KEY</p>
       <p className="text-yellow text-5xl tracking-wide">Meet Our Advocates</p>
       <hr className="text-slate w-24"></hr>
       <p className="text-slate w-3/4 leading-loose">
       At Katama Waweru, we are not just legal advisors, we are strategic partners invested in your 
       triumph.With a team of highly skilled 
       and experienced lawyers, we bring together a dynamic team, with multifaceted skill sets which create 
       an unrivaled force, capable of tackling the most complex legal challenges with finesse and precision.
       </p>
      </div>

      <div className="w-full h-auto grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-2  bg-black px-8 mt-14 pb-4 ">
       <Patner bg="jo" to="/patners/jollin" name="JOLLINE KATAMA" title="LL.B (Hons)" caption="Dip. Law [KSL]"/>
       <Patner bg="ray" to="/patners/rachael" name="RACHAEL WAWERU" title="LL.B [Hons] University of Nairobi" caption="Dip. Law [KSL]"/>
       </div> 
      <Footer/>
     </div>
    )
}