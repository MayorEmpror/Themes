// import * as F from
import React from "react";
import { useRef } from "react";

function GalleryImageContainer(props) {
  const { image } = props;
  // eslint-disable-next-line no-unused-vars
  const [type, settype] = React.useState(props.type);
 
  const ref = useRef(0);
  if (!image.startsWith("../")) {
    if (ref.current != 0) {
      ref.current.setAttribute(
        "style",
        `background-image: url('${image}'); background-size: cover; background-repeat:no-repeat;`
      );
    }
  }
  return (
    <div id={type}>
      <div  className="h-full w-full overflow-hidden text-transparent duration-300 hover:text-emerald-50 ">
        <img
          alt="tech_images"
          ref={ref}
          src={image}
          className={` h-full w-full bg-cover bg-center 
transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110
`}

        ></img>
        <h1 id="s" className="relative -top-full z-10">
          {" "}
          Take A look At some of our ground breaking projects
        </h1>
        <div className="relative -top-1/3 h-full  w-full  ">
          <h1 className="text-md ml-5 ">Lorem, ipsum.</h1>
          <h4 className="text-md ml-5 font-thin  ">
            <p>Lorem ipsum dolor sit amet cons quaerat iste!</p>
          </h4>
          <h4 className="ml-5 mt-4 text-xs font-thin italic  ">
            <p>Lorem ipsum dolor sit amet cons Lorem ipsum dolor sit!</p>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default React.memo(GalleryImageContainer);
