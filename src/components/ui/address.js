function Address(props) {
    return (
        <div className={`${props.border}  border-gray flex space-x-2 items-center justify-center text-left p-4 my-4`}>
            <img src={props.contact} alt="contactus" className={props.size} />
             <div className="space-y-2 text-sm">
                {props.children}
             </div>
            </div>
    );
}

export default Address;