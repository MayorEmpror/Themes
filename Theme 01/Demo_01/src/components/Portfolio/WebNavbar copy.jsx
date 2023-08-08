import React from "react";
import "../../../images/Photographs/spacePlanets.jpg";
import { GiMountaintop } from "react-icons/gi";
import { MdOutlineReadMore } from "react-icons/md";
import { Link } from "react-router-dom";
import Switch from "./Switch"
//import { color } from "@uiw/react-codemirror";
//import Modal from "../../components/webdashboard/MainPanel/SideOptions/YourSnippets/Modal";

const anchorStyles =
  "hover:text-green-200 duration-200 decoration-sky-600 hover:decoration-blue-400   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300";

//const


const counter = ["Project" ,"About", "Company", "About us"];


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
      <Link id="anchor" to={"/"+x} key={k} className={anchorStyles} >
        {x}
      </Link>
    );
  });
  const Nav_button = (
    <MdOutlineReadMore
      className="h-8 w-8"
      onClick={() => {
        changeColor();
        console.log(props.fadeStatus);
        if (props.fadeStatus === "N" || props.fadeStatus === "fadeIn") {
          props.setfadeStatus("fadeOut");
        } else if (props.fadeStatus === "fadeOut") {
          props.setfadeStatus("fadeIn");
        } else {
          props.setfadeStatus("fadeOut");
        }
      }}
    />
  );
  return (
    <div id="top" className="backdrop-blur-lg">
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
       
       <Link to="/"><GiMountaintop className="h-8 w-8 hover:text-green-200 duration-200" /></Link>  
       

        {innerWidth <= Navbar_Breakpoint ? Nav_button : anchors}
        <Switch enabled={props.enabled} setEnabled={props.setEnabled}/>
       
      </nav>
    </div>
  );
}
// bg-[url('../images/Photographs/spacePlanets.jpg')]
