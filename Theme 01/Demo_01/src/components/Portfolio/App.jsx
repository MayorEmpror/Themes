import React from "react"
import Navigator from "./Navigation"
import About from "./About";
import Main from "./Main"
import Image_Gallery from "./Image_Gallary";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
export default function App(){
  const [enabled, setEnabled] = React.useState(false)
  const [fadeStatus, setFadeStatus] = React.useState("fadeOut");
  
  return(
   <div className="no-scrollbar">
    
 <BrowserRouter>
 <Navigator setfadeStatus={setFadeStatus} fadeStatus={fadeStatus} enabled={enabled} setEnabled={setEnabled}/>
  <Routes>
    <Route path="/" element={ <Main fadeStatus={fadeStatus} enabled={enabled} setEnabled={setEnabled}/>}/>
    <Route path="/Project" element={<Image_Gallery enabled={enabled} setEnabled={setEnabled}/>}/>
    <Route path="/About" element={<About enabled={enabled} setEnabled={setEnabled}/>}/>
  </Routes  >
 </BrowserRouter>
   
   </div>
    )
}