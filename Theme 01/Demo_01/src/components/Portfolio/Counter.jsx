import React from "react";
import CountUp from "react-countup";
export default function Counters(props) {
  const counters = props.Counters_Data.map((x, k) => {
    return (
      <div
        id="circles"

        className={`relative mx-auto  flex items-center 
        ${props.shape} 
        ${props.backgroundColor} 
        text-${props.Number_size} 
        text-${props.Number_Color} 
      
        `}
        key={k}
      >
        {" "}
        <div id="" className="relative mx-auto  flex flex-col">
         <p>  +   <CountUp start={0} end={x} duration={3} /></p> 
          <h1 className="text-sm md:text-lg lg:text-2xl relative mx-auto">veiws</h1>
        </div>
      </div>
    );
  });
  return (
    <div
      id="counter_dash"
      className="relative mx-auto  flex w-full flex-row items-center bg-transparent "
    >
      {counters}
    </div>
  );
}
