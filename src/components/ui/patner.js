import { Link } from "react-router-dom";
import {LiaExternalLinkAltSolid} from '../../assets/icons'
function Patner(props) {
    return (
        <div className={`w-full ${props.bg} relative shadow-2xl flex items-center justify-center text-center  z-40`}>
             {/* <img src={props.image} alt="patner" style={{height:"550px", backgroundPosition:"center bottom"}}  className='w-5/6 object-cover '/> */}
             {/* <p>{props.name}</p>
             <p>{props.title}</p>
             <p>{props.caption}</p> */}
             <Link className="btn2 inline-flex font-semibold hover:text-white text-yellow p-4 absolute bottom-8" to={props.to}><LiaExternalLinkAltSolid className="mt-1 text-lg"/>{props.name}</Link> 
        </div>
    );
}

export default Patner;