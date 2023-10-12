import vision from '../../assets/images/vsn2.png'
import goal from '../../assets/images/goal.png'
import { Goal } from '../../components';
function Goals() {
    return (
     <div className='w-full h-auto flex flex-wrap'>
      <div className='w-1/4 hidden 2xl:block xl:block lg:block md:block '>
      </div>     
      <div className='w-full 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4  cursor-pointer text-white flex flex-col items-center text-center p-8 space-y-8 leading-loose tracking-wide '>
      <Goal image={vision} title="Vision" desc="Our vision is to be recognized as a leading law firm that consistently delivers exceptional legal 
       services, fosters meaningful client relationships, and positively impacts the lives of individuals, 
       businesses, and communities we serve."/>
      <Goal image={goal} title="Mission" desc="Our mission is to provide exceptional legal services with integrity, professionalism, and a deep 
          commitment to our client’s best interests.Through our mission, we aim to positively impact the lives of our clients, the legal 
          profession, and the communities we serve."/>
      <Goal image={goal} title="Commitment" desc="At Katama Waweru Advocates, we strive to be trusted 
          partners, guiding our clients through legal matters and empowering them to achieve their goals with 
          confidence."/>
      </div>
      </div>
    );
}

export default Goals;