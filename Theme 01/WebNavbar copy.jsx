import React from "react";
//import ModalContent from "../Portfolio/ModalContent";
import "../../../images/Photographs/spacePlanets.jpg";
import { GiMountaintop } from "react-icons/gi";
import { MdOutlineReadMore } from "react-icons/md";
//import { color } from "@uiw/react-codemirror";
//import Modal from "../../components/webdashboard/MainPanel/SideOptions/YourSnippets/Modal";

const anchorStyles =
  "underline decoration-sky-600 hover:decoration-blue-400   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300";

//const
const counter = ["About us", " Pricing", "Company", "About us", "login→"];
export default function Navbar(props) {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line no-unused-vars
  const [innerWidth, SetInnerWidth] = React.useState(window.innerWidth);

  const Navbar_Breakpoint = 439;
  const [color, setColor] = React.useState("black");
  const changeColor = () => {
    setColor(color === "red" ? "black" : "red");
  };
  const anchors = counter.map((x, k) => {
    return (
      <a href=" #" key={k} className={anchorStyles}>
        {x}
      </a>
    );
  });
  const Nav_button = (
    <MdOutlineReadMore
      className="h-8 w-8"
      onClick={() => {
        changeColor();
        console.log(props.fadeStatus);
        if (props.fadeStatus === "N" || props.fadeStatus === "fadeIn") {
          props.setFadeStatus("fadeOut");
        } else if (props.fadeStatus === "fadeOut") {
          props.setFadeStatus("fadeIn");
        } else {
          props.setFadeStatus("fadeOut");
        }
      }}
    />
  );
  return (
    <div className="">
      <nav
        className=" 
       
      max-w-8xl 
      lg:px-0.1 mx-auto
       flex 
       items-center 
       justify-between 
       border-b
       border-slate-100/25
       p-6 text-white
      
     
       "
      >
        <a
          href="# "
          className="
          underline decoration-sky-700 transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 hover:decoration-blue-400 hover:blur-lg"
        >
          <GiMountaintop className="h-8 w-8" />
        </a>

        {innerWidth <= Navbar_Breakpoint ? Nav_button : anchors}
      </nav>
    </div>
  );
}
// bg-[url('../images/Photographs/spacePlanets.jpg')]
