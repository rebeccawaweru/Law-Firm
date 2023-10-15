import { Link } from "react-router-dom";
function Info(props) {
    return (
        <Link to={props.to} className='flex space-x-1 tracking-wider hover:scale-110 cursor-pointer'>
            <div className='text-yellow mt-1'>
                {props.icon}
            </div>
            <p>{props.title}</p>
        </Link>
    );
}

export default Info;