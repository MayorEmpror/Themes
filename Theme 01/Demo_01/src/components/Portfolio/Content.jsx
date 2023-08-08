import React from "react"
export default function Text(props){
    return(
        <>
          <h6 className="max-h-full bg-gradient-to-r from-black to-black  bg-clip-text text-center font-serif text-xl text-transparent ">
        <span className="para">
          {props.children}
        </span>
      </h6>
        </>
    )
}