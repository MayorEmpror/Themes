import React from "react";
export function High(Components) {
  return function High(props) {
    return <Components text={"2005"} {...props} />;
  };
}
