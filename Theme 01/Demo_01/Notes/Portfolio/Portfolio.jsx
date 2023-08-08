import React from "react";
import { GiMountaintop } from "react-icons/gi";
import Navbar from "./WebNavbar copy";
import Counters from "./Counter";
import Image_Gallery from "./Image_Gallery copy";
import Services from "./Services";
import ScrollGallery from "./ScrollGallery";
import ClientLogos from "./ClientLogos";

export default function Portfolio() {
  const [fadeStatus, setFadeStatus] = React.useState("fadeOut");

  // eslint-disable-next-line no-unused-vars
  const [innerWidth, SetInnerWidth] = React.useState(window.innerWidth);
  const Navbar_Breakpoint = 439;
  const show = "block";
  const NoShow = "hidden"; //change to block if somthing breaks
  const elem_disp = innerWidth <= Navbar_Breakpoint ? show : NoShow;

  function smoothScrollTo(target) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  function smoothScrollT() {
    smoothScrollTo("#bottom");
  }
  // eslint-disable-next-line no-unused-vars
  function smoothScrolln() {
    smoothScrollTo("#top");
  }

  const Data = [5000, 5000, 5000, 5000];

  return (
    <div className="main  bg-[url('../images/Photographs/WormHole.jpeg')] bg-cover bg-fixed no-scrollbar">
      {/* navbar-=-responsive */}
      <div id="top" className="  bg-transparent text-blue-200 backdrop-blur-lg">
        <Navbar fadeStatus={fadeStatus} setFadeStatus={setFadeStatus} />
      </div>

      {/* main--lander */}
      <div className="P_F_d item-center  bg-transparrent flex flex-col  ">
        <div className={"flex h-1/4  w-full flex-row "}>
          <div
            id="popUp"
            className={`h-full w-3/4 ${fadeStatus} bg-white ${elem_disp}`}
          ></div>
          <div
            id="popUp"
            className={`h-full w-1/4 ${fadeStatus} bg-slate-200 ${elem_disp}`}
          >
            this
          </div>{" "}
        </div>
        <GiMountaintop className="relative mx-auto h-1/4 w-1/4 text-emerald-200" />
        <div className="relative mx-auto flex flex-col items-center justify-center  invert ">
          <h1>WE ARE ACME</h1>
          <div className="flex items-center justify-center align-middle  ">
            Inovation is our business, we reside in seatle, where we design the
            future
          </div>
          <h1>Welcome</h1>
          <button
            onClick={() => {
              smoothScrollT();
            }}
          >
            press
          </button>
        </div>
        <Counters
          Counters_Data={Data}
          shape={"rounded-full"}
          backgroundColor={
            "bg-gradient-to-r from-green-700/50 to-emerald-300/50 "
          }
          Number_Color={"white"}
          Number_size={"3xl "}
        />
      </div>

      {/* about--auther/owner. */}
      <div
        id="About_container"
        className="flex   w-full  flex-col  items-center border-t-2 border-green-900/50  bg-gradient-to-r from-green-700/50 
        to-emerald-300/50 backdrop-blur-xl sm:flex-row"
      >
        <div className="ml-1 mr-1  h-5/6   w-1/3 overflow-hidden bg-green-300 md:mr-3 md:ml-5 ">
          <div className="h-1/2 w-full overflow-hidden">
            <div className=" h-full w-full bg-[url('../images/Photographs/digitalization.jpeg')] bg-cover bg-center -hue-rotate-60 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"></div>
          </div>

          <h1 className="bg-gradient-to-r from-emerald-900  to-green-300 bg-clip-text font-serif text-2xl text-transparent ">
            Lorem, ipsum.
          </h1>
          <hr className="text-blue-900" />
          <h6 className="max-h-full ddd text-center bg-gradient-to-r from-emerald-900  to-green-600 bg-clip-text font-serif text-xl text-transparent ">
            <p className="para leading-10 ">
              Lorem ipsum molestias consequuntur sapiente accusantium corporis!
              Ad reiciendis perspiciatis maxime rem quasi sequi sunt provident
              suscipit assumenda, optio natus quas laudantium odit quaerat dicta
              obcaecati.
            </p>
          </h6>
        </div>
        <div className="mr-1 ml-1 h-5/6 w-1/3  overflow-hidden   bg-green-300 md:mr-3 md:ml-5">
          <div className="h-1/2 w-full overflow-hidden">
            <div className=" h-full w-full bg-[url('../images/Photographs/inovation.jpeg')] bg-cover bg-center -hue-rotate-60 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"></div>
          </div>
          <h1 className="bg-gradient-to-r from-emerald-900  to-green-300 bg-clip-text font-serif text-2xl text-transparent ">
            Lorem, ipsum.
          </h1>
          <hr className="text-blue-900" />
          <h6 className="max-h-full bg-gradient-to-r from-emerald-900 to-green-600  bg-clip-text text-center font-serif text-xl text-transparent ">
            <p className="para">
              Lorem ipsum molestias consequuntur sapiente accusantium corporis!
              Ad reiciendis perspiciatis maxime rem quasi sequi sunt provident
              suscipit assumenda, optio natus quas laudantium odit quaerat dicta
              obcaecati.
            </p>
          </h6>
        </div>
        <div className="mr-1 ml-1 h-5/6 w-1/3 overflow-hidden bg-green-300 md:mr-3 md:ml-5">
          <div className="h-1/2 w-full overflow-hidden">
            <div className=" h-full w-full bg-[url('../images/Photographs/secure.jpeg')] bg-cover bg-center -hue-rotate-60 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"></div>
          </div>
          <h1 className="bg-gradient-to-r from-emerald-900  to-green-300 bg-clip-text font-serif text-2xl text-transparent ">
            Lorem, ipsum.
          </h1>
          <hr className="text-blue-900" />
          <h6 className="max-h-full bg-gradient-to-r from-emerald-900 to-green-600 text-center bg-clip-text  font-serif text-xl text-transparent ">
            <p className="para">
              Lorem ipsum molestias consequuntur sapiente accusantium corporis!
              Ad reiciendis Lorem, ipsum dolor.
              suscipit assumenda, optio natus quas laudantium odit quaerat dicta
              obcaecati.
              perspiciatis maxime rem quasi sequi 
              sunt provident
              suscipit assumenda, optio natus quas laudantium odit quaerat dicta
              obcaecati.
             
            </p>
          </h6>
        </div>
        {/* <div className="h-full w-1/3  flex items-center bg-gradient-to-l from-emerald-900/75 to-emerald-900/75 border-r-2  border-green-900/50">
          <div className="bg-white h-5/6 w-11/12 relative mx-auto"></div>
        </div>
        <div className="h-full w-2/3 bg-gradient-to-tr from-emerald-900 to-emerald-600 ">
          <h1 className="About ">About Me</h1>
          <h1  className=" text-transparent  bg-clip-text bg-gradient-to-r from-emerald-900 to-green-300">  Tailwind CSS</h1>
        </div> */}
      </div>

      <Image_Gallery
        No_col_lg={4} // Number of columns for lg screens
        No_row_mm={5} // Number of rows for mm (mobile) screens
        No_gap={4} // Gap between grid elements
      />

      <Services No_Cols_sm={3} Rows_sm={3} />

      <ClientLogos />

      <ScrollGallery />

      <div
        className="flex h-3/4 w-full flex-col border-t-2 border-emerald-900  bg-gradient-to-l  from-emerald-200 via-teal-100 to-green-300 text-white   "
        id="bottom"
      >
        <div className="flex h-1/2 w-full items-center justify-center  text-center">
          <h1 className="  text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          <h1 className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, error?
        </h1>
          </h1>
        </div>
        <div className=" flex h-1/2 w-full items-top bg-gradient-to-l  from-emerald-200 via-teal-100 to-green-300">
          <button className="h-1/4 relative mx-auto animate-pulse rounded-md bg-green-900 px-8 text-sm font-semibold text-white shadow-sm duration-300 ease-in hover:scale-125">
            Purchase Template
          </button>
        </div>
      </div>
    </div>
  );
}
