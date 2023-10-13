import React from 'react';
import {Imagecontainer} from '../layouts'
import { Input, Address } from '../components';
import contact from '../assets/images/contact.svg'
import address from '../assets/images/address.svg'
import time from '../assets/images/time.svg'
import mail from '../assets/images/mail.svg'
import Navbar from '../layouts/navbar';
import {BsFillArrowDownCircleFill} from '../assets/icons'
import { useFormik } from 'formik'
import { contactSchema } from '../utils/validation';
function Contact() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            message:""
        },
        validationSchema: contactSchema,
        onSubmit: async(values)=>{

        },
    })
    return (
    <div className='"min-h-screen flex flex-col items-center justify-center relative font-sans overflow-hidden'>
    <Navbar/>
    <Imagecontainer bg="contact"/>
    <div className="w-full h-auto  flex flex-col flex-grow space-y-4 black items-center mt-24 text-center z-20">
         <p className="text-yellow font-bold tracking-wider  text-2xl">WHERE TO FIND US</p>
        <div className='w-full h-auto  p-8  flex flex-col cursor-pointer items-center justify-center  text-center text-slate '>
          <div className="h-full grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-0 2xl:gap-12 xl:gap-12 lg:gap-12 md:gap-12 ">
            <Address border='2xl:border-r xl:border-r lg:border-r md:border-r' size="h-24 w-24" contact={contact}>
            <p>Phone:+254 729 156 650</p>
             <p>info@katamawaweruadv.com</p>
            </Address>
            <Address border='2xl:border-r xl:border-r lg:border-r md:border-r' size="h-36 w-36" contact={address}>
            <p>P.O. Box 83106 - 80100</p>
             <p>Nkrumah Road, Mombasa</p>
             <p>NSSF Building,7th Floor</p>
            </Address>
            <Address contact={time} size="h-28 w-28">
            <p>Mon - Fri: 8am - 5pm</p>
             <p>Sat-Sun: Closed</p>
            </Address>
          </div>
          <BsFillArrowDownCircleFill className='text-3xl text-yellow animate-bounce'/>
        </div>
        </div>
        <div className='w-full h-auto pt-8 space-y-2 flex flex-col z-40 items-center justify-center text-center bg-slate '>
         <img src={mail} alt="advocate email" loading='lazy' className='w-24 h-24 '/>
        <p className="text-4xl">You need help with legal matters,</p>
        <p className="text-lg">Have a question or need more information? Just drop us a line!</p>
        <div className='w-24 h-2 border-b border-yellow '>
        </div>
          <form className="w-full px-8 space-y-4 pb-2" onSubmit={formik.handleSubmit} >
         <div className="w-full grid grid-cols-3 gap-4  mt-4">
          <Input placeholder="Your Name" {...formik.getFieldProps("name")} error={formik.touched.name && formik.errors.name} />
          <Input placeholder="Your Email" {...formik.getFieldProps("email")} error={formik.touched.email && formik.errors.email} />
          <Input placeholder="Your Phone" {...formik.getFieldProps("phone")} error={formik.touched.phone && formik.errors.phone}/>
         </div>
          <textarea cols={5} {...formik.getFieldProps("message")} className="w-full h-52 font-sans p-4 border border-yellow focus:outline-none" placeholder="Write Message...">
          </textarea>
          <p className="text-red-500"><i>{formik.touched.message && formik.errors.message}</i></p>
          <button type="submit" className=" btn p-4 w-full 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:1/4 text-white ">SEND A MESSAGE</button>
          </form>
          </div>
    </div>
    );
}

export default Contact;