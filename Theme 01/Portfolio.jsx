import React from "react";
import { GiMountaintop } from "react-icons/gi";
import Navbar from "./WebNavbar copy";
import Counters from "./Counter";
import Image_Gallery from "./Image_Gallery";
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
    <div className="main">
      {/* navbar-=-responsive */}
      <div id="top" className="bg-blue-900 text-blue-200">
        <Navbar fadeStatus={fadeStatus} setFadeStatus={setFadeStatus} />
      </div>

      {/* main--lander */}
      <div className="P_F_d item-center  relative  flex flex-col bg-white  ">
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
        <GiMountaintop className="relative mx-auto h-1/4 w-1/4 text-blue-900" />
        <div className="relative mx-auto flex flex-col items-center justify-center text-blue-900  ">
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
          backgroundColor={"bg-blue-900"}
          Number_Color={"white"}
          Number_size={"3xl"}
        />
      </div>

      {/* about--auther/owner. */}
      <div
        id="About_container"
        className="h-3/4 w-full border-t-2  border-blue-900/50 bg-white "
      >
        <div className="h-full w-1/3 bg-blue-400 "></div>
        <div className="h-full w-2/3 bg-blue-500 text-center text-5xl">
          <h1 className="About">About Me</h1>
        </div>
      </div>

      <Image_Gallery />

      <Services />

      <ClientLogos />

      <ScrollGallery />

      <div
        className="flex h-3/4 w-full flex-col border-t-2 border-yellow-300  bg-blue-900 text-white   "
        id="bottom"
      >
        <div className="flex h-1/2 w-full items-center justify-center bg-black text-center">
          <h1 className="  text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
            libero.
          </h1>
        </div>
        <div className=" flex h-1/2 w-full items-center bg-blue-900">
          <button className=" relative mx-auto animate-pulse rounded-md bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-sm duration-300 ease-in hover:scale-125">
            Purchase Template
          </button>
        </div>
      </div>
    </div>
  );
}
