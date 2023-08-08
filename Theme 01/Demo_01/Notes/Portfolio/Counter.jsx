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
        border-2 border-green-900
        `}
        key={k}
      >
        {" "}
        <div id="No_container" className="relative mx-auto ">
          <CountUp start={0} end={x} duration={3} />
        </div>
      </div>
    );
  });
  return (
    <div
      id="counter_dash"
      className="relative mx-auto  flex w-5/6 flex-row items-center bg-transparent backdrop-blur-sm"
    >
      {counters}
    </div>
  );
}
