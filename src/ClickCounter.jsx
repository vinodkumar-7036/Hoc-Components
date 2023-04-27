import { React } from "react";
import Hoc from "./Hoc";
const ClickCounter = (props) => {
  const { incrementCount, count } = props;
  console.log("====>", props);
  return (
    <div className="container">
      <button onClick={incrementCount}>Click count{count}</button>
    </div>
  );
};
export default Hoc(ClickCounter);
