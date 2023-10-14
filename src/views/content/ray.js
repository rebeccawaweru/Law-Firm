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
         <div className="flex flex-wrap">
           <div className="w-1/2 leading-loose space-y-4">
           <p className="font-semibold text-2xl">EXPERTISE</p>
            <p>Ms. Waweru is an Advocate of the High Court of Kenya. Previously, she was engaged as an Associate 
                 in the Firm of Munyao Muthama & Kashindi Advocates in Mombasa. After five years at the 
                 aforementioned firm, she subsequently became one of the founding partners in the firm of Katama 
                 Waweru Advocates. </p>
             <p>She is also trained in Mediation by the Mediation Institute of East Africa and is a Certified Mediator. 
                 She is currently undergoing training as a Court Annexed Mediator</p> 
             <p>She is currently the principal contact person in charge of the management and care of instructions 
received from an array of private high net worth individual and corporate clients who have 
Commercial, Probate, Real Estate and regulatory compliance matters just to mention a few</p>
             <div>
             <p className="font-bold">Areas of Practice</p>
             <p>
             Rachael is the Partner in charge of the management and care of instructions ranging from 
             Commercial, Probate, Real Estate and Conveyance portfolios in the firm.The matters are receiving the best attention and are at varying stages of completion and of varying value:</p>
             <p className="font-bold">Corporate Governance</p>
         <p>
Ms. Waweru actively engages in the incorporation of various companies and advises various clients 
on corporate governance, filing returns, employee relations and Legal Compliance.</p>
         <p className="font-bold">Conveyancing & Commercial Law</p>
         <p>Ms. Waweru has successfully represented clients in the Sale and Transfer of certain real estate 
situate generally in Mombasa Island, Mombasa Mainland North and Mombasa Mainland South.</p>
             </div>
           </div>
           <div className="w-1/2">
             <img src={ray} alt="patner details" loading="lazy"  className="h-11/12 w-full object-cover"/>
           </div>
         </div>
       <div className="leading-loose w-full mt-2 space-y-4 ">
        


         <p>
 The 
cumulative transaction value is in the region of over Kes. 50,000,000. 
Separately, whilst an Associate Advocate at Munyao, Muthama and Kashindi Advocates was closely 
involved in extensive conveyancing work generally.
</p>
<p className="font-semibold">Some of the conveyancing matters include:</p>
         <p>Advised a leading Kenyan Bank, on further advances to a leading sugar company 
incorporated and trading in the Republic of Uganda and duly licensed to carry out the 
growing, harvesting and manufacturing of sugar cane products and thereafter exporting the 
products to multiple countries in Africa via term loan of approximately USD.18M. The term
loan is to be utilized by the borrower to finance working capital; as well as to finance
acquisition of assets from a company dealing in a similar business to which it was 
incorporated as well as to finance the purchase of motor vehicles to be used by the business
7
to facilitate movement of finished products to the market and transport of staff</p>
<p>She was actively involved in advising ABSA Bank Limited in a transaction involving finance
facilities of KES.90M advanced to a premier company dealing in the manufacturing sector. 
The facilities are to be utilized to finance the purchase of two properties in Bamburi, 
Mombasa.</p>
<p>Ms. Waweru was involved in the issuance of credit facilities of USD. 9.75M to one of the 
leading grain milling operators in Kenya, for trade finance, specifically for the issuance of 
bonds, guarantees and indemnities in the normal course of trading; as well as an overdraft 
facility and a revolving short term loans facility, for working capital requirements.</p>
<p>Ms. Waweru acted for high value clients who were interested in leasing office space from 
prospective lessors. Her roles involved reviewing the standard offer letters and commercial 
Lease documents, negotiating with prospective lessors on the terms of the standard 
documents, ensuring that the Lessors have the requisite consents for creation of the Leases 
and undertaking registration of the Leases over the units.</p>    
</div>
        </div>  
        <Footer/>
     </div>
    )
}