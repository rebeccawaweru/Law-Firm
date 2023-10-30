import { Link } from "react-router-dom";
import {LiaExternalLinkAltSolid} from '../../assets/icons'
import 'aos/dist/aos.css';
function Patner(props) {
    return (
        <div data-aos-duration='2000' data-aos="fade-up" data-aos-delay="200" className="w-full  relative shadow-xs shadow-yellow flex items-center justify-center text-center  z-40">
             <img src={props.image} alt="patner" loading="lazy" className="h-full w-full object-cover"/>
             {/* <img src={props.image} alt="patner" style={{height:"550px", backgroundPosition:"center bottom"}}  className='w-5/6 object-cover '/> */}
             {/* <p>{props.name}</p>
             <p>{props.title}</p>
             <p>{props.caption}</p> */}
             <Link className="btn2 w-full inline-flex text-center items-center justify-center font-semibold hover:text-white text-yellow p-4 absolute bottom-0" to={props.to}><LiaExternalLinkAltSolid className="mt-1 text-lg"/>{props.name}</Link> 
        </div>
    );
}

export default Patner;