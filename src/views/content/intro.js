import React from 'react';
import {BsTelephoneFill,MdLocationOn,MdEmail} from '../../assets/icons'
import { Info } from '../../components';
import { motion } from 'framer-motion';
function Intro() {
    return (
        <div className="h-screen text-white flex flex-col items-center justify-center -mt-12  z-20">
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay:0.4, duration:1.2,  ease: 'easeIn' }}
        className='text-4xl font-bold mb-2'>Your <span className='text-yellow tracking-wider'>Legal Compass </span></motion.h1>    
      <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{delay:0.8, duration:1.2,  ease: 'easeIn' }}
      className='tracking-wide mb-4'>In A <span className='text-4xl font-bold'>Complex World</span></motion.h1>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay:1.2, duration:1.2,  ease: 'easeIn' }}
         className='items-center justify-center text-center space-x-2 space-y-4 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0 flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2xl:space-x-8 xl:space-x-8 lg:space-x-8 md:space-x-8  text-sm'>
         <Info icon={<BsTelephoneFill />} title='+254 729 156 650'/>
         <Info icon={<MdLocationOn />} title='NSSF Building,7th Floor,Mombasa'/>
          <Info icon={<MdEmail />} title='info@katamawaweruadv.com'/>
        </motion.div>
        </div>
    );
}

export default Intro;