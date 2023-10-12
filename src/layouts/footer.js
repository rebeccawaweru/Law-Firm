import {BsTelephoneFill,MdLocationOn,MdEmail,BsLinkedin,BsInstagram,BsTwitter,BiLogoFacebookSquare,PiArrowUpRightThin} from '../assets/icons'
import { Link } from 'react-router-dom'
import { Info } from '../components'
export default function Footer(){

    return(
      <div className="w-full container bg-black text-white tracking-wide  p-8 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row space-x-24 items-center  text-xs cursor-pointer ">
      <div className='w-full 2xl:w-1/4 xl:w-1/4 leading-loose tracking-wider'>
        <p>ABOUT US</p>
  
        <p>At Katama Waweru, we are not just legal advisors; we are strategic partners invested in your 
        triumph. We go beyond traditional legal counsel, immersing ourselves in your world to gain a deep 
        understanding of your unique goals and aspirations.</p>
      </div>
      <div className='space-y-4  '>
      <p>SERVICES</p>
       <p>Litigation</p>
       <p>Immigration</p>
       <p>Conveyance</p>
       <p>More..</p>
       {/* <Info icon={<PiArrowUpRightThin/>} title={<Link href="/">View More</Link>}/> */}
      </div>

      <div className='space-y-6'>
      <p>FIND US</p>
      <Info icon={<BsTelephoneFill />} title='+254 729 156 650'/>
       <Info icon={<MdLocationOn />} title='NSSF Building,7th Floor,Mombasa'/>
       <Info icon={<MdEmail />} title='info@katamawaweruadv.com'/>
      </div>

      <div className='space-y-6'>
      <p>QUICK LINKS</p>
      <Info icon={<PiArrowUpRightThin/>} title={<Link to="/">Home</Link>}/>
      <Info icon={<PiArrowUpRightThin/>} title={<Link to="/">Services</Link>}/>
      <Info icon={<PiArrowUpRightThin/>} title={<Link to="/">Contact</Link>}/>
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
    )
}