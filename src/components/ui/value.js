function Value(props) {
    return (
        <div className='shadow-md shadow-black bg-transparent text-center flex flex-col items-center justify-center leading-loose tracking-wide border-r border-slate p-4 text-sm'>
        <div className='border border-yellow rounded-full p-4  text-5xl text-yellow '>
        <props.Icon/>
        </div>
        <p>{props.title}</p>
        <p>{props.desc}</p>
      </div>
    );
}

export default Value;