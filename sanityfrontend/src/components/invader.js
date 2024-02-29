import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { pic } from '../assets';
import { motion } from "framer-motion";
import { slideIn } from "../util/motion"

const Invader = () => {
  return (
    <motion.div variants={slideIn('up','tween' , 0.5,1)}>
    <div className="w-full h-full flex flex-col lg:flex-row md:flex-col sm:flex-col shadow-lg m-4 mb-10 bg-white rounded-lg p-3 mt-20">
      <div className='p-10 text-black w-full h-auto flex-1' >
        <p className={`lg:text-4xl text-xl`}> you want substract with Algeria Telecome ? </p>
        <p className={`lg:text-4xl text-xl`}> Check on the Invitation to tender and consultation notices section for any information or news, namely:</p>
        <p className={`lg:text-4xl text-xl mb-36`}> New Invitation to tender, consultation notices, updates, unsuccessful/ failure, cancellations, and prorogations …. </p>
        <a className='px-8 py-6 border-2 static lg:text:xl text-lg border-s-white hover:bg-white rounded-lg hover:text-primary drop-shadow-lg' href='https://www.safqatic.dz/'>learn more</a>
      </div>
      <div className='flex-1 shadow-lg rounded-2xl'>
        <img alt='hih' src={pic} className='w-full h-full rounded-xl ' />
      </div>
    </div>
    </motion.div>
  );
}

export default Invader 
