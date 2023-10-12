import React from 'react';
function Info(props) {
    return (
        <div className='flex space-x-1 tracking-wider hover:scale-110'>
            <div className='text-yellow mt-1'>
                {props.icon}
            </div>
            <p>{props.title}</p>
        </div>
    );
}

export default Info;