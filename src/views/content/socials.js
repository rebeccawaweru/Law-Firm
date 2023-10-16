import { CustomIcon } from '../../components';
import {AiOutlineTwitter, FaFacebookF,BiLogoLinkedin, BsDot} from '../../assets/icons'
import { motion } from "framer-motion";
function Socials() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{delay:1.6, duration:1.2,  ease: 'easeIn' }}
         className='flex flex-row space-x-2 mt-4 '>
            <CustomIcon Icn={<FaFacebookF/>}/>
            <BsDot className='mt-8 text-white text-xl '/>
            <CustomIcon Icn={<AiOutlineTwitter/>}/>
            <BsDot className='mt-8 text-white text-xl '/>
            <CustomIcon Icn={<BiLogoLinkedin/>}/>
        </motion.div>
    );
}

export default Socials;