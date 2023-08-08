import React from "react";
import GalleryImageContainer from "./Projects";
import {BiSolidChevronLeftCircle} from "react-icons/bi"
import Images from "./Images"
import {BiSolidChevronRightCircle} from "react-icons/bi"
export default function ScrollGallery(props) {
  
  //scroll utitly functions
  var right = 500;
  var Left = 1000;
  function smoothScrollHorizontalLeft(element) {
    right = 500;

    element.scrollTo({
      top: 0,
      left: Left,
      behavior: "smooth",
    });
    Left = Left / 2;
  }
  function smoothScrollHorizontalRight(element) {
    Left = 1000;
    right += 500;
    element.scrollTo({
      top: 0,
      left: right,
      behavior: "smooth",
    });
  }
  //scroll panels
  const No_scroll_Panels = props.No_scroll_Panels ? props.No_scroll_Panels : 7;
  const Panels = [];
  for (let i = 1; i <= No_scroll_Panels; i++) {
    Panels.push(
       <div
         key={i}
         id="contact_box_two"
        className="h-full bg-blue-700 text-2xl text-white"
      >
      <GalleryImageContainer key={i} image={Images[i]} type="simple"/>
      </div>
      
    );
  }

  return (
    <div
      id="go_down"
      className="flex  flex-row items-center border-t-2 border-blue-900/25 bg-white shadow-2xl hover:shadow-sm duration-300  "
    >
      <div id="Right_Arrow" className="flex items-center text-black">
        <button
          onClick={() => {
            smoothScrollHorizontalLeft(
              document.querySelector("#contact_box_parrent")
            );
          }}
          className="h-1/4 w-full "
        >
       <BiSolidChevronRightCircle className="text-white w-20 h-20"/>
        </button>
      </div>
      <div
        className="mx-auto h-3/4 overflow-x-scroll bg-zinc-400 to 9% no-scrollbar"
        id="contact_box_parrent"
      >
        {Panels}
       
      </div>
      <div id="Left_Arrow" className="flex items-center text-black">
        <button
          onClick={() => {
            smoothScrollHorizontalRight(
              document.querySelector("#contact_box_parrent")
            );
          }}
          className="h-1/4 w-full "
        >
          <BiSolidChevronLeftCircle className="text-white w-20 h-20"/>
        </button>
      </div>
    </div> //t
  );
}
