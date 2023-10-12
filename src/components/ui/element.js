import {MdKeyboardDoubleArrowRight} from '../../assets/icons'

function Element(props) {
     const {src, caption, desc} = props
    return (
        <div className='el1 h-auto group flex flex-col justify-center items-center text-center  cursor-pointer relative  transition  ease-in-out duration-600  ' >
        <div className='w-full hidden group-hover:block absolute  flex flex-col leading-loose z-50 p-4'>
          <p className='font-bold mb-4'>{caption}</p>
          <p>{desc}</p>
          </div> : 
        <>
        <img src={src} alt='advocates,law-firm' loading='lazy' className='w-full h-72 object-cover  '/>
        <div className='w-full  bg-black text-yellow text-center p-2 flex group-hover:hidden  items-center justify-center opacity-70'>
          <p>{caption}</p>
          <MdKeyboardDoubleArrowRight className='mt-1'/>
        </div>
        </>
         </div>
    );
}
export default Element;
