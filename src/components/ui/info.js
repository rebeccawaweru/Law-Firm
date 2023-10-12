import React from 'react';
function Info(props) {
    const {title, icon} = props
    return (
        <div className='flex space-x-1 tracking-wider hover:scale-110'>
            <div className='text-yellow mt-1'>
                {icon}
            </div>
            <p>{title}</p>
        </div>
    );
}

export default Info;