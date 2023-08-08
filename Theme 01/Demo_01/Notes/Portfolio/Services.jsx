import React from "react";
import { GiMountaintop } from "react-icons/gi";
import {FaConnectdevelop} from "react-icons/fa"
import {MdDeveloperMode} from "react-icons/md"
import {AiFillDatabase} from "react-icons/ai"
import {AiOutlineApi} from "react-icons/ai"
import  {FaBitcoin} from "react-icons/fa"
import {IoLogoReact} from "react-icons/io5" 
import {DiAndroid} from "react-icons/di"
import {AiFillApple} from "react-icons/ai"
import {GrGraphQl} from "react-icons/gr"
 export default function Services() {
  // const No_Col = props.No_Cols_sm ? props.No_Cols_sm : "3";
  //const No_Row = props.Rows_sm ? props.Rows_sm : "3";
  // const No_of_Blocks = parseInt(No_Col * No_Row);
  const Array_Images = [];
  const Logo_Icons = [
    <GiMountaintop
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <AiFillDatabase
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <FaConnectdevelop
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <MdDeveloperMode
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <AiOutlineApi
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <FaBitcoin
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <IoLogoReact
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <DiAndroid
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <AiFillApple
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
    <GrGraphQl
      key={"i"}
      className="relative mx-auto mt-3 h-1/3  w-1/3 text-2xl text-green-900"
    />,
  ];
  for (let i = 1; i <= 9; i++) {
    Array_Images.push(
      <div
        key={i}
        className="flex h-full w-full  flex-col items-center bg-gradient-to-l  from-emerald-200 via-teal-100 to-green-300  "
      >
        <div className="flip-card w-full">
          <div className="flip-card-inner w-full">
            <div className="flip-card-front w-full overflow-hidden">
              {Logo_Icons[i]}
              <h1 className="text-serif mt-1 text-center text-sm text-black md:mt-10 md:text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.

             
              </h1>
            </div>
            <div className="flip-card-back overflow-hidden">
              <h1>John Doe</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe harum repellendus provident ipsa voluptates numquam nisi, , c consectetur, aspernatur numquam eligendi?</p>
              <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      id="our_services"
      className="  bg-transparrent h-full w-full overflow-hidden border-t-2  border-blue-900/50  backdrop-blur-xl"
    >
      <div
        id="Heading_Projects"
        className=" to-6% flex w-full items-center bg-gradient-to-r from-green-600 via-green-200  via-90% to-green-300"
      >
        <h1 className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
          Our Services
        </h1>
      </div>

      <div
        id="service_tab_panels"
        className={`relative mx-auto grid w-5/6
         
  grid-cols-1 grid-rows-6 gap-1
   sm:grid-cols-3
   sm:grid-rows-3
    md:mt-2`}
      >
        {Array_Images}
      </div>
    </div>
  );
}
