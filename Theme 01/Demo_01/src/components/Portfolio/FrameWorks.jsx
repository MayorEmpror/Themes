import React from "react"
import Text from "./Content"
import {AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt} from "react-icons/fa"
import {DiJavascript} from "react-icons/di"
import {DiJqueryUiLogo} from "react-icons/di"

export default function FrameWorks(){
    return(
        <>
          <div className="bg-white h-screen w-full grid grid-cols-1 grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 sm:h-1/3 sm:my-10">
        <div className="w-full h-full flex-col overflow-hidden text-center ">
        <AiFillHtml5 className="h-5/6 top-0  w-full text-orange-500"/>
      <Text> HTML 5</Text>
        </div>
        <div className="w-full h-full flex-col overflow-hidden text-center">
        <FaCss3Alt className="h-5/6 top-0  w-full text-blue-500"/>
     <Text>CSS</Text>
        </div>
        <div className="w-full h-full flex-col overflow-hidden text-center">
        <DiJavascript className="h-5/6 top-0  w-full text-yellow-300"/>
     <Text> JavaScript</Text>
        </div>
        <div className="w-full h-full flex-col overflow-hidden text-center">
        <DiJqueryUiLogo className="h-5/6 top-0  w-full text-yellow-500"/>
      <Text> jQuery</Text>
        </div>
      </div>
        </>
    )
}