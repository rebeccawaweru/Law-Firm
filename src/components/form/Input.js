function Input(props) {
    return (
        <div className='w-full '>
        <input {...props} className={`${props.error ? 'border-red-500' : 'border-yellow'} w-full p-4 border  focus:outline-none`}/>
        {props.error ? <p className="text-red-500"><i>{props.error}</i></p> : null}
        </div>
    );
}

export default Input;