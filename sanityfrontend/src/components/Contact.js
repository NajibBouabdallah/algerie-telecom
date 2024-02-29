import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../util/motion"

const Contact = () => {

  const formRef = useRef();
  
  const [ form , setForm ] =useState({
    name:'',email:'',message:'',
  })

  const handleSubmit = (e) =>{
    e.preventDefault();
    emailjs.send('service_k6bvs7n','template_ifw10xn',{
      from_name: form.name,
      to_name:'STCB',
      from_email: form.email,
      to_email:'contact@algerietelecom.dz',
      message : form.message,

    },'S0sDsMmcNe_nOGZrF')
    .then(()=>{
      
      alert('Thanks you . I will get back to you soon as posible');
      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error) =>{
      
      console.log(error);
      alert('Something went wrong')
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-5">
        <motion.div variants={slideIn('left','tween' , 0.5,1)}>
        
        
        <div className="w-full h-auto rounded-2xl shadow-xl p-10 my-10">
          <h3 className="text-xl text-[#233E83] font-bold mt-8">Algeria Telecom Headquarter Contact</h3>
          <p className="mt-8 text-lg">
            ALGERIA TELECOM JSC
            Headquarter National Road n°5,
            Cinq Maisons, Mohammadia 16200
            Algiers
          </p>
          <pre className="mt-8 text-lg">
          Phone : (213) 21 82.38.38 <br/>
          FAX : (213) 21 82.38.39 <br/>
          EMAIL : contact@algerietelecom.dz <br/>
          </pre>
          <h3 className="text-xl text-[#233E83] font-bold mt-8">Commercial Corporate contact</h3>
          <pre className="mt-8 text-lg">
          Address : Site Algérie Télécom Complexe Ben <br/>
          Aknoun,36 <br/>
          </pre>
          <p className="mt-8 text-lg">
            National Road N°36 <br/>
            Algiers <br/>
          </p>
          <h4 className="text-bold text-[#233E83] text-xl mt-8 font-bold">Email for business customers :</h4>
          <p className="hover:underline mt-12 font-bold text-lg" >corporate@algerietelecom.dz </p>

          <p className="mt-8 text-lg">
          To contact the Ministry of Post and <br/> Telecommunications click on the link :
          </p>
          <a className="text-[#233E83] hover:text-[#1a2136]" href="https://www.mpt.gov.dz/fr/">https://www.mpt.gov.dz</a>

        </div>
        </motion.div>
        
        <motion.div variants={slideIn('right','tween' , 0.5,1)} 
        className=" bg-[#233E83] p-8 w-full rounded-2xl shadow-2xl m-10">
          <p className={`text-white ${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText} text-white`}>Contact</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input type="text" name="name" value={form.name} 
              placeholder="what's your name" className="bg-[#0576CBC] py-4 px-6 placeholder:text-secondary text-white
              rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input type="email" name="email" value={form.email} 
              placeholder="what's your email" className="bg-[#0576CBC] py-4 px-6 placeholder:text-secondary text-white
              rounded-lg outlined-none border-none font-medium" />
            </label><label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea rows="7" name="message" value={form.message}  
              placeholder="what's your message" className="bg[#576CBC] py-4 px-6 placeholder:text-secondary text-white
              rounded-lg outlined-none border-none font-medium" />
            </label>
            <button type="submit" 
            className="bg-[#0576CBC] py-3 px-8 outline-none w-fit text-primary bg-white font-bold shadow-md shadow-white rounded-xl">
              Submit
            </button>
          </form>
        </motion.div>
        <motion.div  variants={slideIn('right','tween' , 0.5,1)} 
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" >
        </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact,"contact" )