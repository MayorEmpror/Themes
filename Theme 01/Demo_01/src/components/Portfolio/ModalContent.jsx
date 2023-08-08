import React from "react";
export default function ModalContent(props) {
  // eslint-disable-next-line no-unused-vars
  const [styles, setStyles] = React.useState(props.Styles);

  return <div className="ModalContent" style={{ styles }}></div>;
}
