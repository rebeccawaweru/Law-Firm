import React from 'react';
import Element from '../components/element';
function Statements() {
    return (
    <div className='w-full flex space-x-4 text-black mt-96 ml-72 mb-2 '>  
      {/* <div className='flex flex-col w-full h-72 cursor-pointer border-r border-white relative  hover:bg-yellow '>
        <p>Our Vision</p>
        <p>Our vision is to be recognized as a leading law firm that consistently delivers exceptional legal 
      services, fosters meaningful client relationships, and positively impacts the lives of individuals, 
      businesses, and communities we serve.</p>
      </div> */}
        <Element src="/assets/images/vission2.jpg" caption="Our Vision" desc='Our vision is to be recognized as a leading law firm that consistently delivers exceptional legal 
      services, fosters meaningful client relationships, and positively impacts the lives of individuals, 
      businesses, and communities we serve.
      '/>
        <Element src="/assets/images/mission.jpg" caption="Our Mission" desc='Our mission is to provide exceptional legal services with integrity, professionalism, and a deep 
commitment to our client’s best interests.  Through our mission, we aim to positively impact the lives of our clients, the legal 
profession, and the communities we serve'/>

    </div>
    );
}

export default Statements;