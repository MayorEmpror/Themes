import React from "react";
import { GiMountaintop } from "react-icons/gi";
import Counters from "./Counter";
//import Image_Gallery from "./Image_Gallery copy";
import Services from "./Services";
//import ScrollGallery from "./ScrollGallery";
import ClientLogos from "./ClientLogos";
import PortfolioCard from "./PortfolioCard";
import generateCloudinaryTargetURL from "./utils";

export default function Main(props) {
 

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
    <div className="main  no-scrollbar bg-[url('../images/Photographs/WormHole.jpeg')] bg-cover bg-fixed no-scrollbar">
     
     

      {/* main--lander */}
      <div className="P_F_d item-center  flex flex-col bg-white/50 backdrop-blur-lg  ">
        <div className={"flex h-1/4  w-full flex-row "}>
          <div
            id="popUp"
            className={`h-full w-3/4 ${props.fadeStatus} bg-white ${elem_disp}`}
          ></div>
          <div
            id="popUp"
            className={`h-full w-1/4 ${props.fadeStatus} bg-slate-200 ${elem_disp}`}
          >
            this
          </div>{" "}
        </div>
        <GiMountaintop className="text-emerald-1000 relative mx-auto h-1/4 w-1/4" />
        <div className="text-emerald-1000 relative mx-auto flex flex-col items-center justify-center">
          <h1>
            WE ARE <span className="text-emerald-700">ACME</span>
          </h1>
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
          shape={"rounded-md"}
          backgroundColor={""}
          Number_Color={"black"}
          Number_size={"3xl "}
        />
      </div>

      {/* about--auther/owner. */}
      <div
        id="About_container"
        className="flex   w-full  flex-col  items-center border-t-2 border-green-900/50  bg-gradient-to-r from-white/50 
        to-emerald-300/50 backdrop-blur-xl sm:flex-row"
      >
        {/* <div className="ml-1 mr-1  h-5/6   w-1/3 overflow-hidden bg-white md:ml-5 md:mr-3 ">
          <div className="h-1/2 w-full overflow-hidden">
            <div className=" h-full w-full bg-[url('https://res.cloudinary.com/dvv1pqwtb/image/upload/v1691296927/Compressed_Files/compression/inovation_copy_s8s5wu.jpg')] bg-cover bg-center  transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"></div>
          </div>

          <h1 className="bg-gradient-to-r from-black  to-black bg-clip-text font-serif text-2xl text-transparent ">
            Lorem, ipsum.
          </h1>
          <hr className="text-blue-900" />
          <h6 className="ddd max-h-full bg-gradient-to-r from-black to-black bg-clip-text text-center font-serif text-xl text-transparent ">
            <p className="para ">
              Lorem ipsum molestias consequuntur sapiente accusantium corporis!
              Ad reiciendis perspiciatis maxime rem quasi sequi sunt provident
              suscipit assumenda, optio natus quas laudantium odit quaerat dicta
              obcaecati.
            </p>
          </h6>
        </div> */}
        <PortfolioCard heading={"Lorem Ipsum"} imageSrc={generateCloudinaryTargetURL("inovation_copy_s8s5wu.jpg")}>
          Lorem ipsum molestias consequuntur sapiente accusantium corporis! Ad
          reiciendis perspiciatis maxime rem quasi sequi sunt provident suscipit
          assumenda, optio natus quas laudantium odit quaerat dicta obcaecati.
        </PortfolioCard>
        
        <PortfolioCard heading={"Lorem Ipsum"} imageSrc={generateCloudinaryTargetURL("inovation_copy_s8s5wu.jpg")}>
          Lorem ipsum molestias consequuntur sapiente accusantium corporis! Ad
          reiciendis perspiciatis maxime rem quasi sequi sunt provident suscipit
          assumenda, optio natus quas laudantium odit quaerat dicta obcaecati.
        </PortfolioCard>

            
        <PortfolioCard heading={"Lorem Ipsum"} imageSrc={generateCloudinaryTargetURL("inovation_copy_s8s5wu.jpg")}>
          Lorem ipsum molestias consequuntur sapiente accusantium corporis! Ad
          reiciendis perspiciatis maxime rem quasi sequi sunt provident suscipit
          assumenda, optio natus quas laudantium odit quaerat dicta obcaecati.
        </PortfolioCard>
      </div>
{/* 
      <Image_Gallery
        No_col_lg={4} // Number of columns for lg screens
        No_row_mm={5} // Number of rows for mm (mobile) screens
        No_gap={4} // Gap between grid elements
      /> */}

      <Services No_Cols_sm={3} Rows_sm={3} />

      <ClientLogos />

      {/* <ScrollGallery /> */}

      <div
        className="flex h-3/4 w-full flex-col border-t-2 border-emerald-900 bg-white text-white   "
        id="bottom"
      >
        <div className="flex h-1/2 w-full items-center justify-center  text-center">
          <h1 className="  text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            <span className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, error?
            </span>
          </h1>
        </div>
        <div className=" items-top flex h-1/2 w-full bg-white">
          <button className="relative mx-auto h-1/4 animate-pulse rounded-md bg-green-900 px-8 text-sm font-semibold text-white shadow-sm duration-300 ease-in hover:scale-125">
            Purchase Template
          </button>
        </div>
      </div>
    </div>
  );
}
