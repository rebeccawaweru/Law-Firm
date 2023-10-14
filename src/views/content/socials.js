import { CustomIcon } from '../../components';
import {AiOutlineTwitter, FaFacebookF,BiLogoLinkedin, BsDot} from '../../assets/icons'
function Socials() {
    return (
        <div className='flex flex-row space-x-2 mt-4 '>
            <CustomIcon Icn={<FaFacebookF/>}/>
            <BsDot className='mt-8 text-white text-xl '/>
            <CustomIcon Icn={<AiOutlineTwitter/>}/>
            <BsDot className='mt-8 text-white text-xl '/>
            <CustomIcon Icn={<BiLogoLinkedin/>}/>
        </div>
    );
}

export default Socials;