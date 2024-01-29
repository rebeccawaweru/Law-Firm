import {BsTelephoneFill,MdLocationOn,MdEmail,BsLinkedin,BsInstagram,BsTwitter,BiLogoFacebookSquare,PiArrowUpRightThin} from '../assets/icons'
import { Info } from '../components'
export default function Footer(){
    const date = new Date().getFullYear()
    return(
      <footer className='w-full h-auto text-sm bg-black flex flex-col items-center justify-center p-2 cursor-pointer sticky text-white tracking-wide text-xs'>
      <div className=" flex-row  p-8  2xl:flex 2xl:justify-between xl:justify-between xl:flex lg:flex md:flex 2xl:space-x-24 xl:space-x-26 lg:space-x-24 md:space-x-8 space-y-4  ">
      <div className='w-full 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/4 leading-loose tracking-wider'>
        <p>ABOUT US</p>
        <p>At Katama Waweru, we are not just legal advisors; we are strategic partners invested in your 
        triumph. We go beyond traditional legal counsel, immersing ourselves in your world to gain a deep 
        understanding of your unique goals and aspirations.</p> 
      </div>    

      <div className='space-y-4 text-left hidden 2xl:block xl:block lg:block md:hidden'>
      <p>SERVICES</p>
      <p>Litigation</p>
      <p>Immigration</p>
      <p>Conveyance</p>
      <Info icon={<PiArrowUpRightThin/>} title='More' to='/services'/>
      </div>
  

      <div className='space-y-6'>
      <p>FIND US</p>
      <Info icon={<BsTelephoneFill />} title='+254 729 156 650'/>
       <Info icon={<MdLocationOn />} title='NSSF Building, 11th floor room 1114, Mombasa'/>
       <Info icon={<MdEmail />} title='info@katamawaweruadv.com'/>
      </div>

      <div className='grid grid-cols-2 gap-20'>
      <div className='space-y-6'>
      <p >QUICK LINKS</p>
      <Info icon={<PiArrowUpRightThin/>} title='Home' to='/'/>
      <span className='block 2xl:hidden xl:hidden lg:hidden '><Info icon={<PiArrowUpRightThin/>} title='Our Services' to='/services'/></span>
      <Info icon={<PiArrowUpRightThin/>} title='Team' to='/patners'/>
      <Info icon={<PiArrowUpRightThin/>} title='Contact' to='/contact'/>
      </div>

      <div className='space-y-6'>
      <p>WORKING HOURS</p>
      <p>Monday - Friday</p>
      <p>8:00 a.m - 5:00 p.m</p>
      <div className='flex space-x-4 text-yellow'>
      <p><BsLinkedin/></p>
      <p><BsInstagram/></p>
      <p><BsTwitter/></p>
      <p><BiLogoFacebookSquare/></p>
      </div>
      </div>
      </div>
      </div>
      <p>Copyright ©2023 Katama Waweru & Company Advocates LLP. All Rights Reserved</p>
      </footer>
    )
}
