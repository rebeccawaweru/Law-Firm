import React from 'react';
import Image from 'next/image';
import Statements from './statements';
function About() {
    return (
          <div className='w-full grid grid-cols-2' >
            <div className=' '>
            {/* <Image src='/assets/images/about.png' alt='katama waweru' width={390} height={100} className='mt-24' /> */}
            {/* <Statements/> */}

            </div>
        <div className='text-yellow tracking-wider leading-loose '>
             <div className='bg-black p-16 -mt-12'>
             <p className='text-gray'>ABOUT US</p>
            <p>Katama Waweru Advocates is a progressive reputable medium sized firm dedicated to providing 
                exceptional legal services to individuals, businesses, and organizations. With a team of highly skilled 
                and experienced lawyers, we bring together a dynamic team, with multifaceted skill sets which create 
                an unrivaled force, capable of tackling the most complex legal challenges with finesse and precision.</p>
             </div>
          </div>
          </div>
    );
}

export default About;