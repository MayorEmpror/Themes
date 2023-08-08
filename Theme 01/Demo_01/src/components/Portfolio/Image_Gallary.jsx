import React from "react";
import GalleryImageContainer from "./Projects";
import Images from "./Images"
import { memo } from "react";
function Image_Gallery(props) {


  // eslint-disable-next-line no-unused-vars
  //const [DarkMode,SetDarkMode] = React.useState(props.enabled)
  const DarkMode = props.enabled

  const Color = DarkMode?"black":"white"
  console.log(Color)
  const Array_Images = [];
  const length = Images.length;
 
  for (let i = 0; i < length; i++) {
    Array_Images.push(
      <GalleryImageContainer
        key={i}
        image={Images[i]}
        type={"Image_gallery_images"}
      />
    );
  }

  return (
    <div
      id="projects--archive--grid"
      className="no-scrollbar  w-full border-t-2 border-blue-900/50 backdrop-blur-xl overflow-scroll duration-300 "
      style={{backgroundColor:Color}}

    >
      <div
        id="Heading_Projects"
        className=" to-6% flex w-full items-center "
      >
        <h1 className=" from-9% relative  mx-auto bg-gradient-to-r  from-lime-900 via-teal-700 to-green-900 bg-clip-text font-serif text-4xl text-transparent ">
          Our Projects
        </h1>
      </div>
      <div
        id="Grid_projects"
        className={`grid-rows-7 relative mx-auto mt-2 grid
       
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

export default memo(Image_Gallery);
