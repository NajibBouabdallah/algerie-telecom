import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc"


const Footer=()=>{
    return(
        <div className=' bg-primary rounded-md mx-6'>
            <div className="relative justify-around flex  w-auto h-auto text-[40px] items-center "> 
            <div className=" flex-1 items-center shadow-lg rounded-md p-2">
                <p className={`font-medium lg:text-[20px] sm:text-[6px] xs:text-[12px] text-[2px] lg:leading-[25px] mt-2 text-white`}>For more information contact us on social media : </p>
            </div>
            <div  className="flex-1 items-center flex justify-around ">
                <Link to='https://www.instagram.com/algerietelecom' className="text-secondary text-white hover:text-black active:text-black "> <i class="fa-brands fa-instagram"></i></Link>
                <Link to='https://www.youtube.com/user/Tvalgerietelecom' className="text-secondary text-white hover:text-black active:text-black"> <i class="fa-brands fa-youtube"></i></Link>
                <Link to='https://www.instagram.com/sci_tec.club_/' className="text-secondary text-white hover:text-black active:text-black"> <i class="fa-brands fa-facebook"></i></Link>
                <Link to='https://twitter.com/Algerie_Telecom' className="text-secondary text-white hover:text-black active:text-black"> <i class="fa-brands fa-x-twitter"></i></Link>
                <Link to='https://www.linkedin.com/company/algerie-telecom' className="text-secondary text-white hover:text-black active:text-black"> <i class="fa-brands fa-linkedin"></i></Link>
            </div>
            </div>
             <h1 style={{color:"white"}}>Designed by : <br></br>
                Bouabdallah Najib Allah</h1>
            <h1 style={{color:"white"}}> Bouakaz Rafik</h1>
            <h3 style={{color:"white"}}>this is our project for the web app devoloping module in univ-batna2 2nd year computer sciences</h3>
            <h3 style={{color:"white"}}>this is a suggested design for the Algeria Telecom company i hope that you like it </h3>
        </div>
    )
}
export default  SectionWrapper( Footer , "footer");
