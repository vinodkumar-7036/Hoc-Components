import React from "react";
import Hoc from "./Hoc";

const HoverCounter = (props) => {
  console.log(":::::>", props);
  return (
    <div className="container">
      <h3 onMouseEnter={props.incrementCount}>Hoverd {props.count}times</h3>
    </div>
  );
};
export default Hoc(HoverCounter);
