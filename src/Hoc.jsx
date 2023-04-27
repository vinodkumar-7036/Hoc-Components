import React, { useState } from "react";

const Hoc = (OriginalComponet) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return <OriginalComponet count={count} incrementCount={incrementCount} />;
  };
  return NewComponent;
};
export default Hoc;
