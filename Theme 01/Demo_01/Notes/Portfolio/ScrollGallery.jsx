import React from "react";
import GalleryImageContainer from "./GallaryImageContainer"
export default function ScrollGallery(props) {
  const Images = [
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996060/Photographs%20copy/digitalization_lny1mh.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996034/Photographs%20copy/Code_ue0pyz.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996028/Photographs%20copy/secure_vkn75s.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996024/Photographs%20copy/forestRoad_deq21k.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996051/Photographs%20copy/Man_a1utla.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996050/Photographs%20copy/faris-mohammed-d30sszrW7Vw-unsplash_bplgxy.jpg",

    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996020/Photographs%20copy/horse_rx7ysl.jpg",

    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996067/Photographs%20copy/city_tjnwsg.png",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690997583/AdobeStock_274822582_Preview_pjlxen.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690997714/AdobeStock_611536941_Preview_ue0seo.jpg",
    "https://as2.ftcdn.net/v2/jpg/06/05/17/65/1000_F_605176535_TXwkzeHX45ABXuWMtBGpNGuFirXj1Zcm.jpg",
    "https://res.cloudinary.com/dvv1pqwtb/image/upload/v1690996020/Photographs%20copy/horse_rx7ysl.jpg",
  ];
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
      className="flex  flex-row items-center border-t-2 border-blue-900/25 bg-gradient-to-l  from-emerald-200 via-teal-100 to-green-300 shadow-2xl hover:shadow-sm duration-300  "
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
        className="mx-auto h-3/4 overflow-x-scroll bg-gradient-to-b from-emerald-700 from-9% via-emerald-200 via-30% to-emerald-700 to 9% no-scrollbar"
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
          className="h-1/4 w-full bg-white"
        >
          L
        </button>
      </div>
    </div> //t
  );
}
