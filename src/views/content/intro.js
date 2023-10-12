import React from 'react';
import {BsTelephoneFill,MdLocationOn,MdEmail} from '../../assets/icons'
import { Info } from '../../components';
function Intro() {
    return (
        <div className="text-white 2xl:-mt-16 xl:-mt-16 lg:-mt-16 md:-mt-16 ">
        <h1 className='text-4xl font-bold mb-2'>Your <span className='text-yellow tracking-wider'>Legal Compass </span></h1>    
          <h1 className='tracking-wide mb-4'>In A <span className='text-4xl font-bold'>Complex World</span></h1>
        <div className='items-center justify-center text-center space-x-2 space-y-4 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8  text-sm'>
         <Info icon={<BsTelephoneFill />} title='+254 729 156 650'/>
         <Info icon={<MdLocationOn />} title='NSSF Building,7th Floor,Mombasa'/>
          <Info icon={<MdEmail />} title='info@katamawaweruadv.com'/>
        </div>
        </div>
    );
}

export default Intro;