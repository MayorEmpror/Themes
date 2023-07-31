import React from "react";
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
      ></div>
    );
  }

  return (
    <div
      id="go_down"
      className="flex  flex-row items-center border-t-2 border-blue-900/25 bg-white  "
    >
      <div id="Right_Arrow" className="flex items-center text-black">
        <button
          onClick={() => {
            smoothScrollHorizontalLeft(
              document.querySelector("#contact_box_parrent")
            );
          }}
          className="h-1/4 w-full bg-white"
        >
          R
        </button>
      </div>
      <div
        className="mx-auto h-3/4 overflow-x-scroll bg-white"
        id="contact_box_parrent"
      >
        {Panels}
        {/* <div
            className="h-full bg-blue-700 text-2xl text-white"
            id="contact_box_two"
          ></div>
          <div className="h-full bg-blue-700 " id="contact_box_two">
            t
          </div>
          <div className="h-full bg-blue-700 " id="contact_box_two">
            t
          </div>
          <div className="h-full bg-blue-700 " id="contact_box_two">
            t
          </div>
          <div className="h-full bg-blue-700 " id="contact_box_two">
            t
          </div>
          <div className="h-full bg-blue-700 " id="contact_box_two">
            t
          </div>
          <div className="h-full bg-blue-700" id="contact_box_three">
            t
          </div>
          <div className="h-full bg-blue-700" id="contact_box_four">
            t
          </div> */}
      </div>
      <div id="Left_Arrow" className="flex items-center text-black">
        <button
          onClick={() => {
            smoothScrollHorizontalRight(
              document.querySelector("#contact_box_parrent")
            );
          }}
          className="h-1/4 w-full bg-white"
        >
          L
        </button>
      </div>
    </div> //t
  );
}
