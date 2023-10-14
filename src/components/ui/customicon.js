function CustomIcon(props) {
    return (
        <div className='h-2 w-2 bg-yellow hover:scale-110 hover:bg-black hover:text-white p-6 flex flex-row items-center justify-center text-center cursor-pointer mt-4'>
            <div  className="absolute text-xl">
                {props.Icn}
            </div>
           </div>
    );
}

export default CustomIcon;