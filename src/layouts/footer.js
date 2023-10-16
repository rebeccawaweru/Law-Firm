import {BsTelephoneFill,MdLocationOn,MdEmail,BsLinkedin,BsInstagram,BsTwitter,BiLogoFacebookSquare,PiArrowUpRightThin} from '../assets/icons'
import { Info } from '../components'
export default function Footer(){
    return(
      <div className="w-full h-auto text-sm bg-black text-white tracking-wide  p-8 flex-row 2xl:flex 2xl:justify-between xl:justify-between xl:flex lg:flex md:flex 2xl:space-x-24 xl:space-x-26 lg:space-x-24 md:space-x-8 space-y-4 text-xs cursor-pointer absolute z-50">
      <div className='w-full 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 leading-loose tracking-wider'>
        <p>ABOUT US</p>
        <p>At Katama Waweru, we are not just legal advisors; we are strategic partners invested in your 
        triumph. We go beyond traditional legal counsel, immersing ourselves in your world to gain a deep 
        understanding of your unique goals and aspirations.</p>
      </div>    
      <div className='space-y-4 text-left '>
      <p>SERVICES</p>
      <div className='flex 2xl:block xl:block lg:block md:block space-x-4 2xl:space-x-0  xl:space-x-0 lg:space-x-0 md:space-x-0 space-y-0 2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-4'>
      <p>Litigation</p>
       <p>Immigration</p>
      </div>
      <div className='flex 2xl:block xl:block lg:block md:block space-x-4 2xl:space-x-0  xl:space-x-0 lg:space-x-0 md:space-x-0 space-y-0 2xl:space-y-4 xl:space-y-4 lg:space-y-4 md:space-y-4'>
      <p>Conveyance</p>
      <Info icon={<PiArrowUpRightThin/>} title='More' to='/services'/>
      </div>
      </div>
  

      <div className='space-y-6'>
      <p>FIND US</p>
      <Info icon={<BsTelephoneFill />} title='+254 729 156 650'/>
       <Info icon={<MdLocationOn />} title='NSSF Building,7th Floor,Mombasa'/>
       <Info icon={<MdEmail />} title='info@katamawaweruadv.com'/>
      </div>

      <div className='grid grid-cols-2 gap-24'>
      <div className='space-y-6'>
      <p>QUICK LINKS</p>
      <Info icon={<PiArrowUpRightThin/>} title='Home' to='/'/>
      <Info icon={<PiArrowUpRightThin/>} title='Team' to='/patners'/>
      <Info icon={<PiArrowUpRightThin/>} title='Contact' to='/contact'/>
      </div>

      <div className='space-y-6'>
      <p>WORKING HOURS</p>
      <p>MONDAY-FRIDAY</p>
      <p>8:00AM - 5:00PM</p>
      <div className='flex space-x-4 text-yellow'>
      <p><BsLinkedin/></p>
      <p><BsInstagram/></p>
      <p><BsTwitter/></p>
      <p><BiLogoFacebookSquare/></p>
      </div>
      </div>
      </div>
   

      </div>
    )
}