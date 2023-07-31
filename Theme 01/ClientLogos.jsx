import React from "react";
export default function ClientLogos() {
  return (
    <div className="flex h-5/6 w-full flex-col border-t-2  border-blue-900/50 bg-white">
      <div
        id="ClientBox"
        className="items-top sm:7xl flex h-1/4 w-full justify-center bg-blue-600 text-center  text-2xl text-white md:text-7xl lg:text-8xl"
      >
        <h1> Clients</h1>
      </div>
      {/* client--company logos */}
      <div id="ClientLogos" className="flex h-3/4 w-full flex-col bg-teal-400">
        <div className="h-1/2 w-full bg-white ">
          <div className="relative mx-auto grid h-full w-full grid-cols-3 grid-rows-1 items-center gap-2 bg-red-700 md:w-5/6 md:grid-cols-5">
            <div className="ml-1  h-2/3  w-full   bg-slate-100 sm:h-2/3  md:ml-0 md:h-1/2 lg:h-3/4"></div>
            <div className="h-2/3 w-full bg-slate-200   sm:h-2/3 md:h-1/2  lg:h-3/4   "></div>
            <div className="relative  right-1 h-2/3    w-full bg-slate-300  sm:h-2/3  md:right-0 md:block md:h-1/2 lg:h-3/4"></div>
            <div className="hidden  h-2/3 w-full   bg-slate-400 sm:h-2/3  md:block  md:h-1/2 lg:h-3/4"></div>
            <div className="mr-1  hidden h-2/3     w-full bg-slate-500  sm:h-2/3   md:block md:h-1/2 lg:h-3/4"></div>
          </div>
        </div>

        <div className="h-1/2 w-full bg-slate-200 ">
          <div className="items-top relative mx-auto grid h-full w-full grid-cols-3 grid-rows-1 gap-2 bg-red-300 md:w-2/3 md:grid-cols-4 ">
            <div className="ml-1 h-2/3 w-full bg-slate-100 sm:h-2/3 md:ml-0 md:h-1/2 lg:h-3/4"></div>
            <div className="h-2/3 w-full bg-slate-400 sm:h-2/3 md:h-1/2  lg:h-3/4"></div>
            <div className="relative right-1 h-2/3 w-full bg-slate-300   sm:h-2/3 md:right-0 md:block md:h-1/2  lg:h-3/4"></div>
            <div className="hidden h-2/3 w-full bg-slate-500 sm:h-2/3 md:block  md:h-1/2  lg:h-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
