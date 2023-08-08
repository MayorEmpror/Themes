import React from "react";
import { High } from "./HigherOrderComponent";
function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [prop, setprops] = React.useState(props);
  return (
    <>
      hELLO WORD
      <div>{prop.text}</div>
    </>
  );
}
export default High(App);
