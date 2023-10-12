export default function Video(){
    return(
    <div className="absolute inset-0 overflow-hidden ">
    <div className='overlay z-10'></div>
    <video 
    src="https://res.cloudinary.com/marite/video/upload/v1695156826/video_vjeh72.mp4" 
    className="w-full h-screen object-cover saturate-0 wrapper" autoPlay loop></video>
      </div>  
    )
}