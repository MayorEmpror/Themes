import React from "react";
import GalleryImageContainer from "./GallaryImageContainer";
export default function Image_Gallery() {
  // const No_Col = props.No_col_lg ? props.No_col_lg : "1";
  // const No_Row = props.No_row_mm ? props.No_row_mm : "5";
  //var No_of_Blocks = parseInt(No_Col * No_Row);
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
  if (window.innerWidth <= 400) {
    // No_of_Blocks = 5;
  }
  const Array_Images = [];
  for (let i = 0; i < 12; i++) {
    Array_Images.push(<GalleryImageContainer key={i} image={Images[i]} type={"Image_gallery_images"}/>);
  }

  return (
    <div
      id="projects--archive--grid"
      className=" bg-transparrent w-full border-t-2 border-blue-900/50 backdrop-blur-xl  "
    >
      <div
        id="Heading_Projects"
        className=" to-6% flex w-full items-center bg-gradient-to-r from-green-600 via-green-200  via-90% to-green-300"
      >
        <h1 className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
          Our Projects
        </h1>
      </div>
      <div
        id="Grid_projects"
        className={`grid-rows-10 relative mx-auto mt-2 grid
         
          grid-cols-1
          gap-4
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4`}
      >
       
        {Array_Images}
        
       
      </div>
    </div>
  );
}
