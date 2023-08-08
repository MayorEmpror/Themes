import React from "react";
import  {GiMountaintop} from "react-icons/gi"
import {AiFillApple} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import  {TfiGoogle } from "react-icons/tfi"
import {FaMicrosoft} from "react-icons/fa"
import {SiIbm} from "react-icons/si"
import {GrOracle} from "react-icons/gr"
import {SiAdobeacrobatreader} from "react-icons/si"
import {AiOutlineAmazon} from "react-icons/ai"
export default function ClientLogos() {
  const color = "rgba(138, 202, 138, 0.32)"
  return (
    <div className="flex h-5/6 w-full flex-col border-t-2  border-blue-900/50 backdrop-blur-xl ">
      <div
        id="Heading_Projects"
        className=" to-6% flex w-full items-center bg-gradient-to-r from-green-600 via-green-200  via-90% to-green-300"
      >
        <h1 className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
          Our Clients
        </h1>
      </div>
      {/* client--company logos */}
      <div id="ClientLogos" className="flex h-3/4 w-full flex-col ">
        <div className="h-1/2 w-full  ">
          <div className="relative mx-auto grid h-full w-full grid-cols-3 grid-rows-1 items-center gap-2  md:w-5/6 md:grid-cols-5">
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex  items-center   ml-1  h-2/3  w-full    sm:h-2/3  md:ml-0 md:h-1/2 lg:h-3/4"  >  <AiFillApple  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex items-center   h-2/3 w-full    sm:h-2/3 md:h-1/2  lg:h-3/4   "  >             <BsFacebook  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /> </div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex  items-center   relative  right-1 h-2/3    w-full   sm:h-2/3  md:right-0 md:flex md:h-1/2 lg:h-3/4"  >  <TfiGoogle  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" />,</div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center  items-center   hidden  h-2/3 w-full    sm:h-2/3  md:flex    md:h-1/2 lg:h-3/4"  >  <FaMicrosoft  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center  items-center   mr-1  hidden h-2/3     w-full   sm:h-2/3   md:flex f md:h-1/2 lg:h-3/4"  >  <SiIbm  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
          </div>
        </div>

        <div className="h-1/2 w-full  ">
          <div className="items-top relative mx-auto grid h-full w-full grid-cols-3 grid-rows-1 gap-2  md:w-2/3 md:grid-cols-4 ">
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex items-center   ml-1 h-2/3 w-full bg-slate-100 sm:h-2/3 md:ml-0 md:h-1/2 lg:h-3/4"  style={{backgroundColor : color}}>  <GiMountaintop  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex items-center   h-2/3 w-full bg-slate-400 sm:h-2/3 md:h-1/2  lg:h-3/4"  style={{backgroundColor : color}}>  <AiOutlineAmazon  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center flex items-center   relative right-1 h-2/3 w-full bg-slate-300   sm:h-2/3 md:right-0 md:flex md:h-1/2  lg:h-3/4"  >  <SiAdobeacrobatreader  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
            <div className=" border-2 border-green-300 rounded-xl bg-gradient-to-l overflow-hidden from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300 text-center  items-center   hidden h-2/3 w-full bg-slate-500 sm:h-2/3 md:flex  md:h-1/2  lg:h-3/4"  >  <GrOracle  key={"i"} className="relative mx-auto h-1/3 w-1/3  mt-3 text-2xl text-green-900" /></div>
          </div>
        </div>
      </div>
      <hr/>
        <h1 className="text-center text-thin text-md font-serif text-lime-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, provident.
        </h1>
    </div>
  );
}
