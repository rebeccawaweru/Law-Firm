import { useRef,useEffect } from 'react';
import {Imagecontainer, Navbar, Footer} from '../layouts'
import { Input, Address } from '../components';
import contact from '../assets/images/contact.svg'
import address from '../assets/images/address.svg'
import time from '../assets/images/time.svg'
import mail from '../assets/images/mail.svg'
import {BsFillArrowDownCircleFill} from '../assets/icons'
import { useFormik } from 'formik'
import { contactSchema } from '../utils/validation';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

function Contact() {
  const ref = useRef()
  const [animateref, inView] = useInView();
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            message:""
        },
        validationSchema: contactSchema,
        onSubmit: async(values)=>{
          await emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
              name: values.name,
              email: values.email,
              message: values.message,
              phone: values.phone
            },
          ).then((response)=>{
            console.log(response)
             Swal.fire('SUCCESS', 'Thank you for contacting us. We will be in touch.', 'success')
          }).catch(()=>{
            Swal.fire('ERROR', 'An error occured.Please try again.', 'error')
          })
          formik.resetForm()
        },
        
    })
    const handleScroll = () =>{
        ref.current.scrollIntoView({behavior:"smooth"})
    };
    useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[]);
    return (
    <div className='min-h-screen relative font-sans'>
    <Navbar/>
    <div className='flex flex-col items-center justify-center'>
    <Imagecontainer bg="contact h-4/6"/>
    <div className="w-full h-auto  flex flex-col flex-grow space-y-4 black items-center mt-24 text-center z-20">
         <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{delay:0.2, duration:1.2,  ease: 'easeIn' }}
          className="text-yellow font-bold tracking-wider  text-2xl">WHERE TO FIND US</motion.p>
        <div className='w-full h-auto  p-8  flex flex-col cursor-pointer items-center justify-center  text-center text-slate '>
          <div className="h-full grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-0 2xl:gap-12 xl:gap-12 lg:gap-12 md:gap-2 ">
            <Address border='2xl:border-r xl:border-r lg:border-r' size="h-24 w-24" contact={contact}>
              <motion.div
              className='space-y-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{delay:0.6, duration:1.2,  ease: 'easeIn' }}
              >
             <p>Phone:+254 729 156 650</p>
             <p>info@katamawaweruadv.com</p>
              </motion.div>
       
            </Address>
            <Address border='2xl:border-r xl:border-r lg:border-r' size="h-36 w-36" contact={address}>
            <motion.div
             className='space-y-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{delay:1.0, duration:1.2,  ease: 'easeIn' }}
              >
            <p>P.O. Box 83106 - 80100</p>
             <p>Nkrumah Road, Mombasa</p>
             <p>NSSF Building,7th Floor</p>
              </motion.div>
            </Address>
            <Address contact={time} size="h-28 w-28">
            <motion.div
             className='space-y-2'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{delay:1.4, duration:1.2,  ease: 'easeIn' }}
              >
            <p>Mon - Fri: 8am - 5pm</p>
             <p>Sat-Sun: Closed</p>
              </motion.div>

            </Address>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{delay:1.8, duration:1.2,  ease: 'easeIn' }}
          >
           <BsFillArrowDownCircleFill
           onClick={()=>handleScroll()}
           className='text-3xl text-yellow animate-bounce cursor-pointer'/>
          </motion.div>
        </div>
        </div>
        <div  ref={ref}></div>
        <div  data-aos-duration='2000' data-aos="fade-up" data-aos-delay="200" className='w-full h-auto pt-8 space-y-2 flex flex-col z-40 items-center justify-center text-center bg-slate '>
         <img src={mail} alt="advocate email" loading='lazy' className='w-24 h-24 '/>
        <motion.p 
        ref={animateref}
                 initial={{ opacity: 0 }}
                 animate={inView ? { opacity: 1 } : {}}
                 exit={{ opacity: 0 }}
                 transition={{delay:0.2, duration:1.2,  ease: 'linear' }}
        className="text-4xl">You need help with legal matters,</motion.p>
        <motion.p
          ref={animateref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          transition={{delay:0.8, duration:1.2,  ease: 'linear' }}
         className="text-lg">Have a question or need more information? Just drop us a line!</motion.p>
        <div className='w-24 h-2 border-b border-yellow '>
        </div>
          <motion.form
            ref={animateref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            exit={{ opacity: 0 }}
            transition={{delay:1.2, duration:1.2,  ease: 'linear' }}
           className="w-full px-8 space-y-4 pb-2" onSubmit={formik.handleSubmit} >
         <div className="w-full grid grid-cols-3 gap-4  mt-4">
          <Input placeholder="Your Name" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
          <Input placeholder="Your Email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} />
          <Input placeholder="Your Phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone}/>
         </div>
          <textarea cols={5} {...formik.getFieldProps("message")} className="w-full h-52 font-sans p-4 border border-yellow focus:outline-none" placeholder="Write Message...">
          </textarea>
          <p className="text-red-500"><i>{formik.touched.message && formik.errors.message}</i></p>
          <button type="submit" className=" btn p-4 w-full 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:1/4 text-white ">SEND A MESSAGE</button>
          </motion.form>
          </div>
          </div>
          <Footer/>
    </div>
    );
}

export default Contact;