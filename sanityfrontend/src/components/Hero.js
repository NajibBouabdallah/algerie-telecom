import { styles } from '../styles'
import { motion } from 'framer-motion'
import { useState,useRef } from "react"
import { slideIn } from "../util/motion"
import {blob} from "../assets"
import {blob1} from "../assets"





const Hero  = ()=>{
    return(
        <section className='flex flex-col relative w-full h-screen mx-auto '>
       
          
         
       
                <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
                max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                   
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-[250px] md:h-[550px] sm:h-[650px]  rounded-full bg-[#233E83]" />
                        <div className='w-1 sm:h-140 h-140 violet-gradient' />
                    </div>
                    <div>
                        <h3 className={`${styles.heroHeadText} text-[#31833a]`}>
                        Welcome To &nbsp;  
                        <span className='text-[#233E83]'>Algeria Telcome</span> 
                        </h3>
                        <p className={`${styles.heroSubText} mt-20 text-black`}>
                            Your Gateway to the network world <br className='sm:block hidden' />
                            </p>
                    </div>
                     <div className='w-full h-full'>
                        <img alt='blob' src={blob} className='w-1/3 h-1/3 p-0 m-0  '/>
                        <img alt='blob' src={blob1} className='w-1/3 h-1/3 ml-auto m-0 '/>
                        <img alt='blob' src={blob} className='w-1/3 h-1/3 p-0 m-0   '/>
                    </div>
                    
                </div> 
                
           
      </section>
    )
}
export default Hero