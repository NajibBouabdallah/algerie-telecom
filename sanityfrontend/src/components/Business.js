import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants/index2'
import { fadeIn , textVariant } from '../util/motion'
import { SectionWrapper } from '../hoc' 





 const ServiceCard = ({ index , title , icon,link }) =>{
   return (
   
    
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn( "up" , "spring" ,0.2 * index , 0.3)}
      className="w-full p-[2px] rounded-[20px]" >
        <div options={{ max : 45 , scale : 1 , speed : 450 }} 
        className="bg-[#367F3E] rounded-[20px] py-4 px-2 min-h-[280px] 
        flex justify-evenly items-center flex-col">
          <h3 className="text-white text-[30px] font-bold text-center font-mono">
            {title}
          </h3>
          <img src={icon} alt={title} className=
          "w-50 h-50 object-contain" />
          <a className='border-2 border-s-white bg-white px-6 py-4 rounded-lg hover:bg-[#367F3E]' href={link}>Discover</a>
        </div>
      </motion.div>
    </Tilt>
   )
 }

const Business = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      
    <p className={`${styles.heroSubText}`}>Buisness</p>
    </motion.div>
    <motion.p variants={ fadeIn("","",0.5,1) } className='mt-4 text-secondary
    text-[24px] max-w-3xl leading-[30px]'>

    </motion.p>
    <div className='mt-20 flex items-center flex-wrap flex-col gap-6 sm:flex-row md:flex-wrap md:flex-row lg:flex-wrap'>
      {services.map((service,index)=>(
        <ServiceCard key={ service.title } index={ index } { ...service } />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Business,"Business")