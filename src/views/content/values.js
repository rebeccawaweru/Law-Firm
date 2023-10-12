import React from 'react';
import {FaHands,FaTrophy,VscLaw} from '../../../public/assets/icons'
import Value from '../components/value';
function Values({children}) {
    return (
        <div className='w-full bg-black flex flex-col space-y-8 saturate-100 cursor-pointer opacity-60 items-center justify-center  text-center text-white '>
            <div className='my-4 tracking-wider hover:scale-110'>
            <h1>OUR VALUES</h1>
             <div className='border-b border border-yellow mt-2'>
             </div>
            </div>
              {children}

         <div className='w-full p-2'>
         </div>

        </div>
    );
}

export default Values;