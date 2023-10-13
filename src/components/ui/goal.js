function Goal(props) {
    return (
     <div className='block 2xl:flex xl:flex lg:flex md:flex space-x-4'>
        <div className='h-36 w-48 p-4 bg-black  shadow-md shadow-yellow hidden 2xl:flex xl:flex lg:flex md:flex items-center justify-center'>
       <img src={props.image} alt='our goals' loading="lazy"  className='h-full w-full animate-pulse'/>
       </div>
       <div className='w-full flex flex-col items-center text-left tracking-wide leading-loose'>
       <p>{props.title}</p>
        <hr className='w-20 border-b border border-yellow'/>
        <p>{props.desc}</p>
       </div>
    </div>
    );
}

export default Goal;