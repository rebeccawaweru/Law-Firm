import Socials from "./socials";
import { Footer, Imagecontainer,Navbar } from "../../layouts";
import ray from '../../assets/images/ray.jpg'
export default function Rachael(){
    return (
        <div className='min-h-screen flex flex-col items-center justify-center relative font-sans overflow-hidden'>
        <Navbar/>
        <Imagecontainer bg="patner h-2/6"/>
        <div className="h-auto flex flex-col flex-grow space-y-4 black items-center mt-24 text-center z-20">
         <p className="text-yellow font-bold tracking-wider">PATNER</p>
         <p className="text-slate text-5xl tracking-wide mb-4">RACHAEL WAWERU</p>
         <p className="text-yellow">LL.B [Hons] University of Nairobi | Dip. Law [KSL]</p>
         <Socials/>    
        </div>
        
        <div className="w-11/12 h-auto bg-slate rounded-md mt-16 z-10 p-8 mb-4">
         <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row">
           <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 leading-loose space-y-4">
           <p className="font-semibold text-2xl">EXPERTISE</p>
            <p>Ms. Waweru is an Advocate of the High Court of Kenya. She was previously engaged as an Associate 
                 in a top tier firm in Mombasa for five years. After leaving the firm, she subsequently became one of the founding partners of Katama 
                 Waweru Advocates. </p>
             <p>She is also a Qualified Mediator, having being trained and Certified by the Mediation Institute of East Africa and is currently undergoing training as a Court Annexed Mediator.</p> 
             <p>She is currently the principal contact person in charge of the management and care of instructions 
          received from an array of private high net worth individuals and corporate clients who have matters which touch on  
          Commercial, Probate, Real Estate and Regulatory Compliance matters. </p>
             <div>
             <p className="font-bold">Areas of Practice</p>
         <p className="font-bold">Conveyancing & Commercial Law</p>
         <p>Ms. Waweru has successfully represented clients in the Purchase, Sale, Transfer and Financing of real estate projects 
          situated generally in the country and the East African region.</p>
          <p>The cumulative transaction value of the matters she has handled is USD. 1,000,000/-.</p>
             </div>
           </div>
           <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2">
             <img src={ray} alt="patner details" loading="lazy"  className="h-full w-full object-cover"/>
           </div>
         </div>
        </div>  
        <Footer/>
     </div>
    )
}