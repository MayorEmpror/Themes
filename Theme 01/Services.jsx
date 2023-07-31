import React from "react";
export default function Services(props) {
  const No_Col = props.No_Cols_sm ? props.No_Cols_sm : "3";
  const No_Row = props.Rows_sm ? props.Rows_sm : "3";
  const No_of_Blocks = parseInt(No_Col * No_Row);
  const Array_Images = [];

  for (let i = 1; i <= No_of_Blocks; i++) {
    Array_Images.push(<div key={i} className="h-full w-full bg-white"></div>);
  }
  return (
    <div
      id="our_services"
      className="h-full w-full border-t-2 border-blue-900/50 bg-red-600  "
    >
      <div
        id="our_services_heading"
        className=" flex w-full  items-end   justify-center bg-blue-900 text-xl text-white md:text-5xl lg:text-7xl"
      >
        <h1>Our Services</h1>
      </div>

      <div
        id="service_tab_panels"
        className={`relative mx-auto w-5/6 bg-slate-400 gap-${
          props.Gap ? props.Gap : "1"
        } 
  grid grid-cols-${props.Cols_mm ? props.Cols_mm : "1"} grid-rows-${
          props.Rows_mm ? props.Rows_mm : "6"
        }
   sm:grid-cols-${props.Cols_sm ? props.Cols_sm : "3"} 
   sm:grid-rows-${props.Rows_sm ? props.Rows_sm : "3"}
    md:mt-2`}
      >
        {Array_Images}
      </div>
    </div>
  );
}
