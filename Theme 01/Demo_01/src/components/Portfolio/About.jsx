import React from "react"
import Text from "./Content"
import {AiFillInstagram} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"

import  Services from "./Services"
//import {BiLogoReact} from "react-icons/bi"
import Introduction from "./Introduction"
export default function About(){
   
    return(
    <>
    <div className="bg-green-200 h-screen w-full flex flex-col items-center justify-top">
      
      <Introduction/>

    
       <div className=" h-1/2 sm:h-full bg-white w-full md:h-[62rem] lg:h-[64rem]  xl:h-[114rem] md:text-xl">
      
       <Services/>
    
      <div className="react bg-white h-screen w-full flex flex-col">
           <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nesciunt molestias cumque reprehenderit harum suscipit! Atque incidunt quasi harum? Molestiae, expedita nihil non cupiditate, voluptates nisi eligendi animi dicta corporis id unde esse officia at, vel ea assumenda deleniti facere iure commodi sit ipsum illo ut deserunt? Itaque, cumque hic.
           </Text>
           <div className="w-full h-full flex-col overflow-scroll no-scrollbar text-center">
         <Services/>
        {/* <BiLogoReact className="h-5/6 top-0  w-full text-cyan-500"/>
      <Text> <h1 className="text-3xl -mt-10">React</h1></Text> */}
        </div>
      </div>
        <hr />
        <div className="bg-white h-20 w-full  bottom-0">

        <div className="log_diplay grid grid-cols-4 grid-rows-1 relative mx-auto h-20 w-full bg-white items-center">
        <AiFillInstagram   className="h-1/3 w-1/3 relative mx-auto text-green-900"/>
        <BsFacebook   className="h-1/3 w-1/3 relative mx-auto text-green-900"/>
        <BsWhatsapp   className="h-1/3 w-1/3 relative mx-auto text-green-900"/>
        <FaTwitter   className="h-1/3 w-1/3 relative mx-auto text-green-900"/>
    

        </div>
        </div>
       </div>
    </div>
    </>
    )
}