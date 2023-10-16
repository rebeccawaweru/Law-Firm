import { useEffect } from "react";
import { Imagecontainer, Navbar, Footer } from "../../layouts";
import Socials from "./socials";
import jo from '../../assets/images/jo2.jpg'
import { motion } from "framer-motion";
export default function Joleen(){
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
    return (
        <div className='min-h-screen relative font-sans'>
        <Navbar/>
        <div className="flex flex-col items-center justify-center">
        <Imagecontainer bg="patner h-3/6"/>
        <div className="h-auto flex flex-col flex-grow space-y-4 black items-center mt-24 text-center z-20">
         <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{delay:0.4, duration:1.2,  ease: 'easeIn' }}
         className="text-yellow font-bold tracking-wider">PATNER</motion.p>
         <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{delay:0.8, duration:1.2,  ease: 'easeIn' }}
         className="text-slate text-5xl tracking-wide mb-4">JOLLINE KATAMA</motion.p>
         <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{delay:1.2, duration:1.2,  ease: 'easeIn' }}
          className="text-yellow">LL.B (Hons) | Dip. Law (KSL)</motion.p>
          <Socials/>    
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay:2.0, duration:1.2,  ease: 'easeIn' }}
         className="w-11/12 h-auto bg-slate rounded-md mt-16 z-10 p-8 mb-4">
         <div className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row ">
           <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 leading-loose space-y-4">
           <p className="font-semibold text-2xl">EXPERTISE</p>
            <p >Jolline is currently the Managing Partner of the firm of Katama Waweru Advocates. She has also 
            previously worked at Haki Centre Organization in collaboration with the US Embassy on matters 
            relative to Urban Refugees in Mombasa. </p>
             <p>She is currently the Managing Partner of the firm of Katama Waweru Advocates. She has also 
            previously worked at Haki Centre Organization in collaboration with the US Embassy on matters 
            relative to Urban Refugees in Mombasa.</p> 

             <p>Currently, jolline handles legal research and regulatory compliance advisory services in the firm and she 
                has dealt in corporate law handling matters to do with preparation of different types of contracts.
            </p>
             <div>
             <p className="font-bold">Areas of Practice</p>
             <p>
             Jolline is able to comfortably handle with ease practice matters arising from or related to commercial 
            law, civil and commercial litigation, Immigration law, environmental law, insurance law, 
            conveyancing, children and family law, debt collection, judicial review, constitutional law and public 
            interest litigation.
            </p>
            <p>Joline is the principal contact person in charge of the management and care of instructions received 
            from a number of KW Clients including an array of private high net worth clients</p>
             </div>
           </div>
           <div className="w-full 2xl:w-1/2 xl:w-1/2 lg:w-1/2 ">
             <img src={jo} alt="patner details" loading="lazy"  className="h-auto w-full "/>
           </div>
         </div>
       <div className="leading-loose w-full mt-2 space-y-4 ">
        <p className="font-bold">Corporate Governance</p>
         <p>
         Jolline actively engages in the incorporation of various companies and advises various clients on 
        corporate governance, filing returns, employee relations and Legal Compliance</p>
         <p className="font-bold">
         Charitable, Not for Profit & Religious Organizations</p>
         <p>The firm has been retained by several charitable, non-for profit and religious organizations on an 
            array of issues ranging from registration process and documentation, regulatory compliance, tax 
            advice, labour law matters, court representation and advice on contracting processes.</p>
        </div>
        </motion.div>  

        </div>
        <Footer/>
     </div>
    )
}