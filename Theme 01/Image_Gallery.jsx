import React from "react";
export default function Image_Gallery(props) {
  const No_Col = props.No_col_lg ? props.No_col_lg : "4";
  const No_Row = props.No_row_mm ? props.No_row_mm : "5";
  const No_of_Blocks = parseInt(No_Col * No_Row);

  const Array_Images = [];

  for (let i = 1; i <= No_of_Blocks; i++) {
    Array_Images.push(
      <div key={i} className="h-full w-full bg-slate-300"></div>
    );
  }

  return (
    <div
      id="projects--archive--grid"
      className=" w-full border-t-2 border-blue-900/50 bg-white  "
    >
      <div id="Heading_Projects" className="w-full bg-slate-600"></div>
      <div
        id="Grid_projects"
        className={`relative mx-auto mt-2 grid grid-cols-${
          props.No_col_mm ? props.No_col_mm : "1"
        }  
          grid-rows-${props.No_row_mm ? props.No_row_mm : "5"}
          gap-${props.No_gap ? props.No_gap : "4"}
          sm:grid-cols-${props.No_col_sm ? props.No_col_sm : "2"} 
          md:grid-cols-${props.No_col_md ? props.No_col_md : "3"}
          lg:grid-cols-${props.No_col_lg ? props.No_col_lg : "4"}`}
      >
        {Array_Images}
      </div>
    </div>
  );
}
