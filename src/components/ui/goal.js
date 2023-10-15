import 'aos/dist/aos.css';
function Goal(props) {
    return (
     <div data-aos-duration='2000' data-aos="fade-right" data-aos-delay="200" className='block 2xl:flex xl:flex lg:flex md:flex space-x-4'>
        <div className='h-36 w-36 p-4 bg-black rounded-full shadow-md shadow-yellow hidden 2xl:flex xl:flex lg:flex md:flex items-center justify-center'>
       <img src={props.image} alt='' loading="lazy"  className='h-full w-full  '/>
       </div>
       <div className='w-3/4 flex flex-col items-center text-left tracking-wide leading-loose'>
       <p>{props.title}</p>
        <hr className='w-20 border-b border border-yellow'/>
        <p>{props.desc}</p>
       </div>
    </div>
    );
}

export default Goal;