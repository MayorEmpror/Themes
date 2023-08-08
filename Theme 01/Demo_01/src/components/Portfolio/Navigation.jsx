import React from "react"
import Navbar from "./WebNavbar copy";

export default function Navigator(props){
    console.log(props.enabled)
    return(
        <div id="top" className="  bg-[url('../images/Photographs/WormHole.jpeg')]   text-blue-200 bg-top">
        <Navbar  enabled={props.enabled} setEnabled={props.setEnabled} fadeStatus={props.fadeStatus} setfadeStatus={props.setfadeStatus} />
      </div>
    )
}